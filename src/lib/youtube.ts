const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

interface LatestVideo {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
}

export async function getLatestVideo(channelHandle: string): Promise<LatestVideo | null> {
  const apiKey = import.meta.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.warn('[YouTube] No YOUTUBE_API_KEY set — skipping video fetch.');
    return null;
  }

  try {
    // 1. Resolve channel handle → uploads playlist ID (1 quota unit)
    const channelRes = await fetch(
      `${YOUTUBE_API_BASE}/channels?forHandle=${channelHandle}&part=contentDetails&key=${apiKey}`
    );
    if (!channelRes.ok) {
      console.error(`[YouTube] channels.list failed: ${channelRes.status}`);
      return null;
    }
    const channelData = await channelRes.json();
    const uploadsPlaylistId =
      channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) {
      console.error('[YouTube] Could not find uploads playlist for channel.');
      return null;
    }

    // 2. Get the latest video from the uploads playlist (1 quota unit)
    const playlistRes = await fetch(
      `${YOUTUBE_API_BASE}/playlistItems?playlistId=${uploadsPlaylistId}&part=snippet&maxResults=1&key=${apiKey}`
    );
    if (!playlistRes.ok) {
      console.error(`[YouTube] playlistItems.list failed: ${playlistRes.status}`);
      return null;
    }
    const playlistData = await playlistRes.json();
    const item = playlistData.items?.[0]?.snippet;
    if (!item) {
      console.error('[YouTube] No videos found in uploads playlist.');
      return null;
    }

    return {
      videoId: item.resourceId.videoId,
      title: item.title,
      description: item.description,
      publishedAt: item.publishedAt,
      thumbnailUrl:
        item.thumbnails?.maxres?.url ??
        item.thumbnails?.high?.url ??
        item.thumbnails?.medium?.url ??
        '',
    };
  } catch (err) {
    console.error('[YouTube] Failed to fetch latest video:', err);
    return null;
  }
}

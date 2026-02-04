# Feature: YouTube Latest Livestream Integration

## Overview
Replace the placeholder on `/media/` pages with the **latest YouTube livestream** from:
`https://www.youtube.com/@w.o.i.cberlin171`

## Goals
- Always show the most recent livestream/video
- Show it embedded responsively
- Works for both German and English versions

## User Stories
- As a visitor, I want to watch the latest livestream/video directly.
- As an editor, I want no manual embed updating.

## Acceptance Criteria
- The media page embeds the latest livestream automatically
- Works regardless of status: planned, live, or finished
- Responsive embed
- SEO metadata present

## Technical Notes
- YouTube Live no longer supports a permanent stream embed URL; may require dynamic lookup of latest stream or using channel API :contentReference[oaicite:0]{index=0}
- Options:
  - Use YouTube Data API to fetch latest stream (requires API key)
  - Use a pre-configured channel widget (e.g., Elfsight YouTube feed) :contentReference[oaicite:1]{index=1}
- Must handle quota limits if using YouTube API

## Dependencies
- YouTube API key (if using API)
- Updated content logic in `/src/pages/media/`

# Content Model

## 1. Purpose

This document defines the content model for the church website. It describes the different content types, their structure, required fields, and how content is organized within the repository.

The goal is to ensure that content is:

* Easy to understand and edit
* Consistent across the website
* Suitable for Git-based workflows
* Usable by non-technical editors

---

## 2. Content Principles

* Content is stored as Markdown files
* Metadata is defined via Frontmatter
* Content and presentation are strictly separated
* Each language has its own content files
* All content must be version-controlled

---

## 3. Supported Content Types

The following primary content types are defined:

1. Pages
2. Events
3. Media (Videos / Livestreams)
4. Navigation & Global Content

---

## 4. Pages

### Description

Pages represent static informational content such as the home page, about page, or contact page.

### Examples

* Home
* About the Church
* Services
* Contact
* Donations

### File Structure

```
/content/{lang}/pages/{slug}.md
```

### Frontmatter Schema

```yaml
title: string
slug: string
description: string
seo:
  title: string
  description: string
  image: string
published: boolean
```

### Body Content

* Markdown formatted text
* Headings, lists, links, images
* Optional embedded components (e.g. videos)

---

## 5. Events

### Description

Events represent church services, meetings, and special events.

### Examples

* Sunday Service
* Prayer Meeting
* Special Church Events

### File Structure

```
/content/{lang}/events/{event-id}.md
```

### Frontmatter Schema

```yaml
title: string
date: datetime
endDate: datetime (optional)
location: string
description: string
recurring: boolean
recurrenceRule: string (optional)
published: boolean
```

### Body Content

* Event description
* Additional notes
* Embedded media (optional)

---

## 6. Media (Videos & Livestreams)

### Description

Media entries represent video content, primarily sourced from YouTube.

### Strategy

* Videos are embedded dynamically from YouTube
* Media metadata can optionally be stored locally for curation

### File Structure (Optional)

```
/content/{lang}/media/{media-id}.md
```

### Frontmatter Schema

```yaml
title: string
youtubeId: string
date: datetime
type: video | livestream
description: string
published: boolean
```

---

## 7. Navigation & Global Content

### Description

Global content includes navigation labels, footer text, and other site-wide strings.

### File Structure

```
/content/{lang}/globals/navigation.md
```

### Frontmatter Schema

```yaml
menu:
  - label: string
    path: string
footer:
  text: string
```

---

## 8. Assets (Images & Media)

### Description

Static assets such as images are stored separately from content.

### File Structure

```
/assets/images/
```

### Guidelines

* Use descriptive filenames
* Optimize images before committing
* Reference assets via relative paths

---

## 9. Multilingual Content Handling

* Each language has a dedicated content directory
* No shared content files between languages
* Content parity between languages is encouraged but not enforced

Example:

```
/content/de/pages/home.md
/content/en/pages/home.md
```

---

## 10. Publishing Workflow

1. Editor creates or updates a Markdown file
2. Frontmatter is adjusted as needed
3. Changes are committed to Git
4. CI pipeline rebuilds the site
5. Updated content is published

---

## 11. Validation Rules

* Required frontmatter fields must be present
* `published: false` content must not be rendered
* Invalid dates must be ignored or flagged

---

## 12. Extensibility

The content model is designed to be extensible:

* New content types can be added via new directories
* Frontmatter schemas can evolve
* Additional metadata fields can be introduced as needed

---

## 13. Summary

This content model provides a clear and structured foundation for managing website content using Markdown and Git. It balances flexibility for developers with simplicity for content editors, while supporting multilingual and media-rich content.

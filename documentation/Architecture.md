# System Architecture

## 1. Overview

This document describes the technical architecture of the church website. The system is designed as a fully static, serverless web application that is built at compile time and delivered via GitHub Pages.

The architecture follows a **Static Site Generation (SSG)** approach using **Astro** as the core framework, combined with a Git-based content workflow and optional CMS UI.

---

## 2. Architectural Goals

* Fully static deployment (no runtime backend)
* High performance and low operational complexity
* Clear separation of content, presentation, and configuration
* Easy content editing via Git
* Long-term maintainability
* Multilingual support (German / English)

---

## 3. High-Level Architecture

### Build-Time vs. Run-Time

The system is divided into two clearly separated phases:

#### Build-Time (CI / Local Development)

* Astro compiles source files into static assets
* Markdown content is transformed into HTML
* Language-specific pages are generated
* YouTube embeds and metadata are prepared

#### Run-Time (Production)

* Static files are served via GitHub Pages CDN
* No server-side logic is executed
* Client-side JavaScript runs only where required

---

## 4. Technology Stack

### Core Framework

* **Astro**: Static Site Generator and build orchestrator
* **TypeScript**: Type safety and maintainability

### UI Components

* **Astro Components** for layout and static rendering
* **React Components** for interactive islands (e.g. video embeds)

### Styling

* CSS or utility-first framework (e.g. Tailwind CSS)
* Responsive, mobile-first design principles

### Content

* Markdown (`.md`) for pages and posts
* YAML / Frontmatter for structured metadata
* Static assets for images and media

### Hosting

* GitHub Pages
* GitHub Actions for CI/CD

---

## 5. Rendering Model

### Static Site Generation (SSG)

* All pages are rendered to HTML at build time
* No server-side rendering occurs at request time
* Each route corresponds to a physical HTML file

### Islands Architecture

* By default, pages contain no JavaScript
* Interactive components are explicitly hydrated using Astro directives
* Example use cases:

  * YouTube video players
  * Language switcher interactions

This approach minimizes JavaScript payload and improves performance.

---

## 6. Content Architecture

### Content Storage

* All content resides in the Git repository
* Content is version-controlled
* Content updates trigger a rebuild

### Content Types

* Pages (Home, About, Contact, etc.)
* Events and services
* Media entries

### Directory Structure (Example)

```
/content
  /de
    home.md
    about.md
  /en
    home.md
    about.md
/assets
  /images
```

---

## 7. Multilingual Architecture (i18n)

### Language Routing

* Each language has its own URL namespace
* Example:

  * `/de/...`
  * `/en/...`

### Content Separation

* Language-specific content files
* No runtime language detection

### Language Switching

* Implemented via static links
* No server-side negotiation

---

## 8. CMS Integration (Git-Based)

### CMS Concept

* Git is the single source of truth
* Optional CMS UI provides abstraction for Git operations
* CMS writes directly to Markdown and asset files

### Authentication

* GitHub-based authentication
* Repository access defines edit permissions

### Publishing Flow

1. Editor updates content
2. Commit is created
3. CI pipeline builds the site
4. Static files are deployed

---

## 9. YouTube Integration

### Integration Strategy

* Videos embedded using standard iframe embeds
* Optional client-side enhancement via YouTube Data API (public access only)

### Livestream Handling

* Client-side detection of live streams
* Graceful fallback if no stream is active

---

## 10. Deployment Architecture

### Continuous Deployment

* GitHub Actions pipeline
* Automatic build on main branch
* Output deployed to GitHub Pages

### Static Output

* HTML files
* CSS bundles
* Minimal JavaScript
* Optimized images

---

## 11. Security Considerations

* No secrets stored in frontend code
* Only public APIs are used
* HTTPS enforced by hosting provider

---

## 12. Scalability & Limitations

### Scalability

* CDN-backed static hosting scales automatically
* Suitable for low to medium traffic

### Limitations

* No dynamic backend features
* No authenticated user flows
* No server-side personalization

---

## 13. Future Extensions

* Search via static index
* Additional languages
* Enhanced media features
* External form services

---

## 14. Summary

This architecture provides a robust, low-maintenance, and future-proof foundation for a church website. By relying on static generation and Git-based content workflows, operational complexity is minimized while maintaining flexibility and developer control.

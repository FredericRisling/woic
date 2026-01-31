# Layer 2 & 3 – Routing, SEO i18n, and Core Pages

This document defines the work packages for **Layer 2 (Routing & SEO-Optimized i18n)** and **Layer 3 (Core Pages & Content Types)**. These layers build directly on the frontend foundations established in Layer 1 and focus on search-engine-friendly multilingual routing and the implementation of core content pages.

---

# Layer 2 – Routing & SEO-Optimized i18n

## WP-04: Language-Based Routing

### Goal

Enable SEO-friendly, language-specific routing for all pages.

### Description

This work package introduces explicit language prefixes in the URL structure (e.g. `/de`, `/en`). Each language version is statically generated at build time to maximize SEO effectiveness.

### Scope

* Define `/de/*` and `/en/*` route structure
* Configure Astro routing per language
* Default language handling (root redirect or default language build)
* Language-aware navigation links

### Technical Requirements

* Astro file-based routing
* Static generation only (no SSR)
* Clear separation of language routes

### Acceptance Criteria

* All pages are accessible under language-prefixed URLs
* No mixed-language content appears on any page
* Navigation links preserve the active language

---

## WP-05: Multilingual Content Loading

### Goal

Load and render language-specific content at build time.

### Description

This package defines how Markdown content is structured, loaded, and mapped to pages per language. Each language has its own content tree to ensure full SEO compatibility.

### Scope

* Language-specific content directories
* Markdown frontmatter definition
* Content loading utilities
* Fallback strategy for missing content

### Technical Requirements

* Astro content collections or custom loaders
* Strongly typed frontmatter
* Build-time validation

### Acceptance Criteria

* Each page renders content from the correct language directory
* Missing content is detected at build time
* Content structure is consistent across languages

---

## WP-06: SEO Metadata per Language

### Goal

Ensure optimal SEO metadata for each language and page.

### Description

This work package focuses on generating correct and complete SEO metadata, including internationalization-related tags.

### Scope

* Page titles and descriptions per language
* OpenGraph and Twitter meta tags
* Canonical URLs
* `hreflang` tags
* Sitemap generation per language

### Technical Requirements

* Astro `<head>` management
* Static sitemap generation
* Language-aware URL resolution

### Acceptance Criteria

* Each page contains correct language-specific metadata
* Search engines can correctly identify language variants
* No duplicate-content SEO issues

---

# Layer 3 – Core Pages & Content Types

## WP-07: Page Template System

### Goal

Provide reusable templates for rendering Markdown-based pages.

### Description

This work package defines generic page templates that map Markdown content to layouts, enabling consistent rendering of all static pages.

### Scope

* Base page template
* Markdown rendering
* Frontmatter-driven configuration
* Image and asset handling

### Technical Requirements

* Astro page templates
* Markdown support
* Content-to-layout mapping

### Acceptance Criteria

* Pages can be created purely via Markdown
* No duplicated page logic
* Templates are language-agnostic

---

## WP-08: Home Page Implementation

### Goal

Implement the multilingual, SEO-optimized home page.

### Description

The home page serves as the primary entry point and must combine editorial content with dynamic highlights such as events or livestreams.

### Scope

* Hero section
* Introductory content
* Highlight sections (events, media)
* Language-specific content rendering

### Technical Requirements

* Page template reuse
* Content-driven sections
* Responsive layout

### Acceptance Criteria

* Home page exists per language
* Content is fully editable via Markdown
* Page renders correctly on mobile and desktop

---

## WP-09: Informational Pages

### Goal

Implement standard informational pages required for a church website.

### Description

This package covers the implementation of all non-dynamic informational pages using the page template system.

### Scope

* About page
* Contact page
* Donations page
* Legal and privacy pages

### Technical Requirements

* Markdown-based content
* Language-specific routing
* SEO metadata support

### Acceptance Criteria

* All required pages exist per language
* Pages are fully content-managed
* Legal pages are accessible from footer navigation

---

## Layer 2 & 3 Completion Criteria

These layers are considered complete when:

* Language-specific routing is fully functional
* All core pages are implemented per language
* SEO metadata is correctly generated
* Content editors can manage all texts via Markdown

No dynamic features (events, media feeds) are included in this layer and are handled in later layers.

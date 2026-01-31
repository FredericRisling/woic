# Layer 4 & 5 – Dynamic Content and Navigation & UX

This document defines the work packages for **Layer 4 (Dynamic Content: Events & Media / YouTube)** and **Layer 5 (Navigation & User Experience)**. These layers build upon the static, multilingual core and introduce structured, content-driven features that are still fully static and build-time rendered.

---

# Layer 4 – Dynamic Content (Build-Time)

Dynamic content in this context means **content that changes frequently**, but is still:

* stored in Markdown/YAML
* versioned in Git
* rendered at build time

No runtime backend or API is required.

---

## WP-10: Events System

### Goal

Provide a structured, SEO-friendly event system for church activities.

### Description

This work package introduces a dedicated content model for events and implements pages to list and display them. Events are rendered statically at build time but can be updated easily by editors.

### Scope

* Event content model definition
* Language-specific event content
* Event listing page per language
* Event detail pages per language
* Date-based sorting and filtering

### Technical Requirements

* Markdown or YAML-based event files
* Strongly typed frontmatter (title, date, location, description)
* Locale-aware date formatting
* Static page generation

### Acceptance Criteria

* Events can be added or edited without touching code
* Upcoming and past events are clearly separated
* Each event has its own SEO-friendly page
* Events render correctly in all supported languages

---

## WP-11: Media & YouTube Integration

### Goal

Integrate the church’s YouTube content in a performant and responsive way.

### Description

This package covers embedding YouTube videos and livestreams while keeping the site fully static. The YouTube channel is surfaced via curated content configuration rather than runtime API calls.

### Scope

* Reusable YouTube embed component
* Livestream highlighting support
* Media overview page
* Responsive video rendering
* Graceful fallback when no livestream is active

### Technical Requirements

* Privacy-friendly YouTube embeds
* No client-side API dependency
* Aspect-ratio-safe embeds
* Static configuration of video IDs

### Acceptance Criteria

* Videos are responsive on all devices
* Livestreams can be highlighted on the homepage
* Editors can update video references via content files
* No runtime JavaScript dependency on YouTube APIs

---

# Layer 5 – Navigation & User Experience

## WP-12: Navigation System

### Goal

Provide a clear, accessible, and language-aware navigation system.

### Description

This work package implements the main navigation, footer navigation, and mobile navigation patterns. Navigation must work consistently across languages and devices.

### Scope

* Main navigation menu
* Footer navigation
* Mobile navigation (hamburger menu)
* Active route highlighting
* Language-preserving links

### Technical Requirements

* Semantic navigation markup
* Responsive behavior
* Keyboard accessibility
* Language-aware routing

### Acceptance Criteria

* Navigation works on desktop and mobile
* Active page is visually indicated
* Language context is preserved when navigating

---

## WP-13: Language Switcher UI

### Goal

Allow users to manually switch between languages.

### Description

This package provides a UI component for switching the site language while keeping SEO-friendly routes intact.

### Scope

* Language switcher component
* Mapping between equivalent language routes
* Visual indication of active language
* Accessibility considerations

### Technical Requirements

* Static language links
* No client-side language detection logic
* SEO-safe link structure

### Acceptance Criteria

* Users can switch languages from any page
* Language switch always leads to the correct translated page
* Switcher is accessible via keyboard and screen readers

---

## Layer 4 & 5 Completion Criteria

These layers are considered complete when:

* Events and media content are fully content-driven
* YouTube content is embedded efficiently and responsively
* Navigation works consistently across languages and devices
* Users can intuitively explore the site and switch languages

All functionality remains fully static and compatible with GitHub Pages deployment.

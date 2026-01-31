# Project Requirements

## 1. Purpose

This document defines the functional and non-functional requirements for the new church website. The goal is to build a modern, professional, multilingual, static website that can be hosted on GitHub Pages and maintained by non-technical users through a Git-based content workflow.

The website will replace the current site and provide similar or improved functionality compared to reference church websites, while remaining easy to maintain, performant, and future-proof.

---

## 2. Stakeholders

* **Primary Stakeholders**

  * Church leadership
  * Church members
  * Website visitors

* **Secondary Stakeholders**

  * Content editors (non-programmers)
  * Developer / Maintainer

---

## 3. Goals & Success Criteria

### Goals

* Provide a modern and trustworthy online presence for the church
* Enable non-technical users to manage website content independently
* Ensure excellent performance and accessibility on all devices
* Support German and English content equally
* Operate without any backend server infrastructure

### Success Criteria

* Website is fully static and hosted on GitHub Pages
* Content changes are possible via Git commits (Markdown, images)
* Site is usable and readable on mobile and desktop devices. E.g 13 inch laptop, smartphone sizes and also 24 inch and bigger monitor with a priority on mobile devices. 
* German and English versions are fully functional
* YouTube videos and livestreams are displayed correctly

---

## 4. Scope

### In Scope

* Static website generation
* Git-based content management
* Responsive frontend
* Multilingual content (DE / EN)
* YouTube integration (videos and livestreams)
* SEO basics

### Out of Scope

* User authentication
* Dynamic backend features
* Databases
* Personalized or user-specific content

---

## 5. Functional Requirements

### FR-1: Static Website Generation

* The website must be generated as static HTML, CSS, and JavaScript files.
* No server-side rendering at runtime is allowed.

### FR-2: Hosting

* The website must be deployable to GitHub Pages.
* A custom domain must be supported.
* HTTPS must be enabled.

### FR-3: Content Management (Git-based)

* Website content must be stored in the Git repository.
* Content must be editable via Markdown and static asset files.
* Image uploads must be supported.
* Content changes must trigger a rebuild and redeployment.

### FR-4: Content Editing for Non-Programmers

* A web-based CMS interface may be provided but must remain optional.
* Direct Git commits to content files must be sufficient to update content.
* Content structure must be intuitive and well-documented.

### FR-5: Multilingual Support

* The website must support at least two languages: German and English.
* Each language must have its own content.
* Users must be able to switch languages via the UI.
* URLs must reflect the selected language.

### FR-6: Pages & Navigation

The website must include at least the following pages:

* Home
* About the Church
* Services / Worship
* Events / Calendar
* Media (Videos / Livestreams)
* Contact
* Donations / Giving

### FR-7: YouTube Integration

* Videos from the church YouTube channel must be embedded.
* Livestreams must be displayed when available.
* Fallback content must be shown if no livestream is active.

### FR-8: Responsive Design

* The website must adapt to mobile, tablet, and desktop screen sizes.
* Navigation must be usable on touch devices.

---

## 6. Non-Functional Requirements

### NFR-1: Performance

* Pages must load quickly on low-bandwidth connections.
* JavaScript usage must be minimized.
* Images must be optimized.

### NFR-2: Accessibility

* Semantic HTML must be used.
* Text must meet contrast requirements.
* Images must include alternative text.

### NFR-3: SEO

* Meta tags must be configurable per page.
* Open Graph tags must be included.
* A sitemap must be generated.

### NFR-4: Maintainability

* Clear project structure and documentation must be provided.
* Content and code must be cleanly separated.
* The system must be easy to extend in the future.

### NFR-5: Security

* No secrets or credentials must be exposed in the frontend.
* External integrations must use public APIs only.

---

## 7. Constraints

* No backend server or runtime environment is allowed.
* Only static hosting platforms may be used.
* The CMS must be free and Git-based.
* The solution must be developer-driven (no no-code platforms).

---

## 8. Assumptions

* Content editors are willing to use Git or a simple CMS UI.
* Website traffic is moderate and fits static hosting limits.
* External services (e.g. YouTube) remain available.

---

## 9. Risks

* Editors unfamiliar with Git may require onboarding.
* YouTube API changes may affect integrations.
* Multilingual content increases maintenance effort.

---

## 10. Open Points

* Final decision on CMS UI (optional vs. Git-only)
* Design guidelines and branding assets
* Final content structure definition

# Church Website Design Improvements

## Problem Summary

The website appears as "static black and white HTML" because of a critical CSS loading issue in [BaseLayout.astro](src/layouts/BaseLayout.astro:53). The file uses a hardcoded `<link>` tag pointing to the source CSS file instead of importing it properly, preventing Tailwind from bundling and loading in production.

## Solution Overview

Fix the CSS loading issue, integrate the church logo, implement responsive navigation with language switching, and create all missing pages with proper multilingual routing (DE/EN).

---

## Implementation Steps

### 1. Fix CSS Loading (CRITICAL)

**File:** [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)

**Changes:**
- Add CSS import in frontmatter (line 1): `import '../styles/global.css';`
- Remove hardcoded link tag (line 53): Delete `<link rel="stylesheet" href="/woic/src/styles/global.css" />`

**Why:** Astro with Tailwind v4 Vite plugin requires ES6 imports, not link tags. This will properly bundle CSS into `/dist/assets/`.

### 2. Integrate Church Logo

**File:** [src/components/layout/Header.astro](src/components/layout/Header.astro)

**Changes:**
- Replace emoji (line 18-22) with logo image:
```html
<img
  src="/woic/assets/images/ChurchLogo.png"
  alt="Church Logo"
  class="h-10 w-auto"
  width="40"
  height="40"
/>
```

### 3. Implement Responsive Navigation

**File:** [src/components/layout/Header.astro](src/components/layout/Header.astro)

**Changes:**
- Add navigation data structure in frontmatter with menu items for both DE and EN
- Replace navigation placeholder (lines 26-30) with functional desktop navigation
- Add mobile menu button (visible on `md:hidden`)
- Add mobile menu panel with slide-down navigation
- Add JavaScript for mobile menu toggle
- Implement active state highlighting based on current path

**Navigation items:**
- DE: Startseite, Über uns, Gottesdienste, Veranstaltungen, Medien, Kontakt, Spenden
- EN: Home, About, Services, Events, Media, Contact, Donations

### 4. Implement Language Switcher

**File:** [src/components/layout/Header.astro](src/components/layout/Header.astro)

**Changes:**
- Add logic in frontmatter to detect current language and build switch URL
- Replace language placeholder (lines 33-35) with functional switcher button
- Button should preserve current page path when switching languages
- Include globe icon and language code (DE/EN)

### 5. Create Multilingual Page Structure

**Root redirect:**
- Modify [src/pages/index.astro](src/pages/index.astro) to redirect to `/woic/de/` as default

**Create German pages in `/src/pages/de/`:**
- [index.astro](src/pages/de/index.astro) - Homepage with hero, welcome content
- [about.astro](src/pages/de/about.astro) - Church history, mission, leadership
- [services.astro](src/pages/de/services.astro) - Service times, streaming info
- [events.astro](src/pages/de/events.astro) - Upcoming events, regular programs
- [media.astro](src/pages/de/media.astro) - Videos, photos, newsletter
- [contact.astro](src/pages/de/contact.astro) - Contact info, location map
- [donations.astro](src/pages/de/donations.astro) - Donation methods, mission
- [privacy.astro](src/pages/de/privacy.astro) - GDPR compliance, data policy
- [imprint.astro](src/pages/de/imprint.astro) - Legal entity, registration info

**Create English pages in `/src/pages/en/`:**
- Same structure as German pages with English content
- 9 pages total (index, about, services, events, media, contact, donations, privacy, imprint)

**Page template structure:**
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/layout/Header.astro';
import Footer from '../../components/layout/Footer.astro';

const lang = 'de'; // or 'en'
---

<BaseLayout title="..." description="..." lang={lang}>
  <Header slot="default-header" lang={lang} />

  <!-- Hero section with gradient background -->
  <div class="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-6">Page Title</h1>
      <p class="text-xl opacity-90">Subtitle</p>
    </div>
  </div>

  <!-- Content sections -->
  <div class="container mx-auto px-4 py-16">
    <!-- Page-specific content -->
  </div>

  <Footer slot="default-footer" lang={lang} />
</BaseLayout>
```

### 6. Create Reusable UI Components (Optional Enhancement)

**New components to create:**

- [src/components/ui/Hero.astro](src/components/ui/Hero.astro) - Hero section with title, subtitle, optional background image
- [src/components/ui/Section.astro](src/components/ui/Section.astro) - Content section with title, background variants (white/gray/primary)
- [src/components/ui/Container.astro](src/components/ui/Container.astro) - Width-constrained container with size variants (sm/md/lg/xl)

These components will make page creation more consistent and efficient.

### 7. SEO Enhancements (Optional)

**File:** [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)

**Add to `<head>`:**
- Structured data (Schema.org JSON-LD) for Church organization
- Language alternate links (`hreflang` tags) for DE/EN/x-default
- Preload critical assets if needed

---

## Critical Files to Modify

1. [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) - CSS import fix, SEO enhancements
2. [src/components/layout/Header.astro](src/components/layout/Header.astro) - Logo, navigation, language switcher
3. [src/pages/index.astro](src/pages/index.astro) - Root redirect
4. Create 18 new page files (9 DE + 9 EN)

---

## Design System Reference

**Colors:**
- Primary (Church Blue): `#418FD2` with Tailwind scale (50-950)
- Neutral: Grayscale for text and backgrounds
- Accent: Gold/yellow `#facc15` (defined but not yet used)

**Dark Mode:**
- Uses `darkMode: 'media'` (OS preference)
- CSS variables automatically switch based on `prefers-color-scheme: dark`
- All components use `dark:` Tailwind classes

**Typography:**
- System font stack (system-ui, -apple-system, Segoe UI, Roboto)
- Responsive heading sizes with `md:` breakpoints
- Primary blue for links and CTAs

**Components:**
- `.btn`, `.btn-primary`, `.btn-secondary` utility classes
- `.card` for content cards
- `.container` for width constraints

---

## Testing & Verification

### Build Testing
```bash
# Clean build
rm -rf dist/
npm run build

# Verify CSS bundling
ls -la dist/assets/*.css  # Should show generated CSS files

# Check HTML output
cat dist/index.html | grep -A2 "stylesheet"  # Should show /assets/styles.*.css

# Preview production build
npm run preview
```

### Manual Testing
1. **CSS Loading:** Visit http://localhost:4321/woic/de/ - should see blue colors, styled buttons
2. **Logo:** Verify church logo appears in header (not emoji)
3. **Navigation:**
   - Desktop: Check all nav links work and highlight active page
   - Mobile: Toggle menu, verify responsive behavior
4. **Language Switcher:** Click DE/EN toggle, verify URL changes and content switches
5. **Dark Mode:** Toggle OS dark mode, verify colors switch smoothly
6. **Responsive Design:**
   - Mobile (375px): Menu collapses, single column layout
   - Tablet (768px): Grid layouts adapt
   - Desktop (1280px): Full navigation, multi-column grids

### Accessibility Checks
- Logo has alt text
- Navigation has proper ARIA labels
- Mobile menu button has aria-label
- Language switcher has descriptive label
- Focus indicators visible on all interactive elements
- Heading hierarchy correct (single h1 per page)

### Performance Checks
- Lighthouse score (aim for 90+ in all categories)
- CSS bundle size (<50KB after gzip)
- First Contentful Paint <1.5s
- No console errors or warnings

---

## Expected Results

After implementation:
- ✅ Website displays with full color, Tailwind styling, and church blue theme
- ✅ Church logo visible in header
- ✅ Responsive navigation works on desktop and mobile
- ✅ Language switching between DE/EN functional
- ✅ 18 pages accessible via navigation
- ✅ Dark mode works based on OS preference
- ✅ Mobile-first responsive design across all breakpoints
- ✅ Production build generates bundled CSS in `/dist/assets/`

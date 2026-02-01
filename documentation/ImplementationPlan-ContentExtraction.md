# Content Extraction to YAML - Implementation Plan

## Overview

Transform the church website from hardcoded content to a YAML-based content management system that non-programmers can easily edit. This includes extracting all content from 18 page files, setting up Astro Content Collections, integrating the YouTube channel, and updating the favicon to use the church logo.

## Goals

1. Extract all hardcoded content into editable YAML files
2. Set up Astro Content Collections with type-safe schemas
3. Enable non-technical content editing via simple YAML files
4. Integrate YouTube channel: https://www.youtube.com/@w.o.i.cberlin171
5. Update favicon to use ChurchLogo.png

## Content Organization Structure

```
/src/content/
├── config.ts                    # Content Collections schemas (NEW)
├── global/
│   ├── de.yaml                  # German global site data (NEW)
│   └── en.yaml                  # English global site data (NEW)
├── pages/
│   ├── de/                      # German page content (NEW)
│   │   ├── index.yaml
│   │   ├── about.yaml
│   │   ├── services.yaml
│   │   ├── events.yaml
│   │   ├── media.yaml
│   │   ├── contact.yaml
│   │   ├── donations.yaml
│   │   ├── privacy.yaml
│   │   └── imprint.yaml
│   └── en/                      # English page content (NEW)
│       └── (same 9 files)
└── events/
    ├── de/                      # German events (NEW)
    └── en/                      # English events (NEW)
```

## Implementation Steps

### Phase 1: Foundation Setup

#### 1. Create Content Collections Configuration

**File:** [src/content/config.ts](src/content/config.ts) (NEW)

Create Astro Content Collections config with three collections:
- `global`: Site-wide data (navigation, footer, organization info, social links)
- `pages`: Page-specific content (meta, hero, sections)
- `events`: Individual events data

Include Zod schemas for:
- Global site metadata
- Organization info (for structured data/SEO)
- Navigation items
- Footer content with contact information
- Social media links (YouTube, etc.)
- Page sections with flexible types (text, cards, grid, cta, info)
- Event details (title, description, frequency, time, category)

#### 2. Create Global Content Files

**Files:**
- [src/content/global/de.yaml](src/content/global/de.yaml) (NEW)
- [src/content/global/en.yaml](src/content/global/en.yaml) (NEW)

Extract from current Header.astro, Footer.astro, and BaseLayout.astro:
- Site name and description
- Navigation menu items
- Footer content (about text, contact info, legal links)
- Organization details (address, phone, email, bank details)
- Social media links including YouTube: https://www.youtube.com/@w.o.i.cberlin171
- Copyright text with `{year}` placeholder for dynamic year

### Phase 2: Update Layout Components

#### 3. Update Header Component

**File:** [src/components/layout/Header.astro](src/components/layout/Header.astro:1-129)

Changes:
- Import `getEntry` from `astro:content`
- Load global data: `await getEntry('global', lang)`
- Replace hardcoded navigation items (lines 13-32) with data from YAML
- Replace hardcoded church name (lines 8-11) with data from YAML
- Keep existing mobile menu functionality
- Keep existing language switcher logic

#### 4. Update Footer Component

**File:** [src/components/layout/Footer.astro](src/components/layout/Footer.astro:1-90)

Changes:
- Import `getEntry` from `astro:content`
- Load global data: `await getEntry('global', lang)`
- Replace hardcoded contact info (lines 36-49) with data from YAML
- Replace hardcoded footer text (lines 10-23) with data from YAML
- Add YouTube link with icon in "About Us" section using social.youtube from YAML
- Dynamic copyright year replacement (`{year}` → current year)

#### 5. Update BaseLayout

**File:** [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro:1-99)

Changes:
- Import `getEntry` from `astro:content`
- Load global data: `await getEntry('global', lang)`
- Replace hardcoded structured data (lines 26-41) with data from global YAML
- Update favicon (lines 78-80):
  - Remove: `<link rel="icon" type="image/svg+xml" href="/woic/favicon.svg" />`
  - Remove: `<link rel="icon" href="/woic/favicon.ico" />`
  - Add: `<link rel="icon" type="image/png" href="/woic/assets/images/ChurchLogo.png" />`
  - Add: `<link rel="apple-touch-icon" href="/woic/assets/images/ChurchLogo.png" />`

### Phase 3: Create Reusable UI Components

#### 6. Create Hero Component

**File:** [src/components/ui/Hero.astro](src/components/ui/Hero.astro) (NEW)

Reusable hero section component with:
- Title and subtitle props
- Optional slot for buttons/CTA
- Gradient background (primary-500 to primary-700)
- Centered content with responsive text sizes

#### 7. Create Section Component

**File:** [src/components/ui/Section.astro](src/components/ui/Section.astro) (NEW)

Flexible section wrapper with:
- Optional title and subtitle
- Background variant prop (white/gray)
- Container with responsive padding
- Slot for section content

#### 8. Create Button Component

**File:** [src/components/ui/Button.astro](src/components/ui/Button.astro) (NEW)

Styled button component with:
- Variant prop (primary/secondary)
- href prop for links
- Custom className support
- Responsive sizing and hover states

#### 9. Create Card Component

**File:** [src/components/ui/Card.astro](src/components/ui/Card.astro) (NEW)

Card container with:
- White background with shadow
- Dark mode support
- Rounded corners and padding
- Slot for card content

### Phase 4: Extract Page Content (Starting with Homepage)

#### 10. Create Homepage Content Files

**Files:**
- [src/content/pages/de/index.yaml](src/content/pages/de/index.yaml) (NEW)
- [src/content/pages/en/index.yaml](src/content/pages/en/index.yaml) (NEW)

Extract from [src/pages/de/index.astro](src/pages/de/index.astro) and [src/pages/en/index.astro](src/pages/en/index.astro):
- Meta: page title and description
- Hero: title, subtitle, and optional buttons
- Sections:
  - "Unsere Gemeinde" / "Our Community" with 3 feature cards
  - "Aktuelles" / "Latest" CTA section

#### 11. Refactor Homepage to Use YAML

**Files:**
- [src/pages/de/index.astro](src/pages/de/index.astro)
- [src/pages/en/index.astro](src/pages/en/index.astro)

Changes:
- Import `getEntry` and load page data
- Import new UI components (Hero, Section, Card, Button)
- Replace hardcoded hero with `<Hero>` component using YAML data
- Map over sections from YAML and render appropriate components
- Remove all hardcoded HTML content

### Phase 5: Extract Remaining Pages

#### 12-19. Create Content Files for All Pages

For each page (about, services, events, media, contact, donations, privacy, imprint):

**Create YAML files:**
- `/src/content/pages/de/{page}.yaml`
- `/src/content/pages/en/{page}.yaml`

**Extract content:**
- Page metadata (title, description)
- Hero sections
- Content sections (text, cards, grids, CTAs)
- Page-specific data (service times, event cards, contact details, bank info, legal text)

**Refactor .astro files:**
- Load content from YAML using `getEntry`
- Replace hardcoded content with component-based rendering
- Use UI components for consistent styling

**Page-specific notes:**
- **media.yaml**: Include YouTube channel URL and embed configuration
- **contact.yaml**: Structure contact cards with icons
- **donations.yaml**: Include bank details and donation categories
- **events.yaml**: Link to events collection for dynamic event cards
- **privacy.yaml** & **imprint.yaml**: Structure legal text in sections

#### 20. Create Events Collection

**Files:**
- `/src/content/events/de/` (individual YAML files for each recurring event)
- `/src/content/events/en/` (corresponding English versions)

Extract events from current events page:
- Sunday Service / Gottesdienst
- Bible Study / Bibelstudiengruppe
- Prayer Meeting / Gebetstreffen
- Youth Group / Jugendgruppe
- Community Events / Gemeinschaftsveranstaltungen

Each event file includes:
- Title and description
- Frequency (weekly, monthly, special)
- Time/schedule
- Category (service, study, youth, family, community)
- Badge text

### Phase 6: YouTube Integration

#### 21. Create YouTube Embed Component

**File:** [src/components/media/YouTubeEmbed.astro](src/components/media/YouTubeEmbed.astro) (NEW)

Component features:
- Accept channelUrl prop from YAML
- Optional embedLatest prop to show latest video
- Responsive aspect ratio (16:9)
- Fallback link if embed fails
- Dark mode styling

#### 22. Update Media Page

**Files:**
- [src/content/pages/de/media.yaml](src/content/pages/de/media.yaml)
- [src/content/pages/en/media.yaml](src/content/pages/en/media.yaml)

Add sections:
- Livestream section with YouTube embed
- Channel CTA with button linking to https://www.youtube.com/@w.o.i.cberlin171
- Sermon/video archives section
- Resource downloads section

Update media page .astro files to:
- Import YouTubeEmbed component
- Render YouTube sections from YAML
- Use channelUrl from global social config

## Critical Files to Create/Modify

### New Files (23 files)
1. `/src/content/config.ts` - Content collections schema
2. `/src/content/global/de.yaml` - German global data
3. `/src/content/global/en.yaml` - English global data
4. `/src/content/pages/de/*.yaml` (9 files) - German page content
5. `/src/content/pages/en/*.yaml` (9 files) - English page content
6. `/src/components/ui/Hero.astro` - Hero component
7. `/src/components/ui/Section.astro` - Section wrapper
8. `/src/components/ui/Button.astro` - Button component
9. `/src/components/ui/Card.astro` - Card component
10. `/src/components/media/YouTubeEmbed.astro` - YouTube embed

### Modified Files (21 files)
1. `/src/layouts/BaseLayout.astro` - Use global YAML, update favicon
2. `/src/components/layout/Header.astro` - Use global YAML for navigation
3. `/src/components/layout/Footer.astro` - Use global YAML, add YouTube
4. `/src/pages/de/*.astro` (9 files) - Load content from YAML
5. `/src/pages/en/*.astro` (9 files) - Load content from YAML

## Design Decisions

### YAML vs Markdown
- **Choice**: YAML for structured content (cards, navigation, events)
- **Reason**: Most content is structured data, not long-form prose
- **Trade-off**: YAML syntax can be tricky, but better for structured layouts

### Global vs Page-Specific Data
- **Choice**: Separate `global` collection for site-wide data
- **Reason**: Avoids duplication of navigation, footer, org info across all pages
- **Benefit**: Single source of truth for contact info, navigation

### Flexible Section Types
- **Choice**: Generic section schema with type field (text, cards, cta, grid, info)
- **Reason**: Enables building varied page layouts without hardcoding structure
- **Benefit**: Non-programmers can compose pages using predefined section types

### Language Organization
- **Choice**: Separate directories (`de/`, `en/`) for each language
- **Reason**: Simpler for non-technical editors to find and edit content
- **Trade-off**: Some duplication in structure, but clearer organization

## Testing & Verification

### Build Testing
```bash
# Clean build
rm -rf dist/
npm run build

# Verify no build errors
# Check content collections loaded correctly

# Preview production build
npm run preview
```

### Manual Testing Checklist

1. **Global Components**
   - [ ] Header displays church name from YAML
   - [ ] Navigation items match YAML configuration
   - [ ] Footer shows correct contact info from YAML
   - [ ] YouTube link appears in footer with icon
   - [ ] Language switcher preserves current page

2. **Favicon**
   - [ ] ChurchLogo.png displays as browser tab icon
   - [ ] Apple touch icon set correctly

3. **Homepage**
   - [ ] Hero section renders from YAML
   - [ ] Feature cards display correctly
   - [ ] CTA section shows proper content

4. **All Pages (Both Languages)**
   - [ ] Each page loads without errors
   - [ ] Content displays correctly from YAML
   - [ ] SEO metadata populated
   - [ ] Dark mode works properly

5. **Media Page**
   - [ ] YouTube embed renders correctly
   - [ ] Channel link works
   - [ ] Responsive video player

6. **Events**
   - [ ] Events display from collection
   - [ ] Frequency badges show correctly
   - [ ] Event details accurate

### SEO Verification
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Meta tags populated from YAML
- [ ] Language alternates set correctly
- [ ] Canonical URLs correct

### Accessibility Checks
- [ ] Heading hierarchy maintained
- [ ] Alt text on logo/images
- [ ] Focus indicators on interactive elements
- [ ] ARIA labels where needed

## Benefits for Non-Technical Editors

### Easy Content Updates
- Edit simple YAML files in GitHub web interface or any text editor
- No need to understand HTML or Astro components
- Clear structure with labeled fields
- Type validation prevents common errors

### Common Editing Tasks

**Update contact information:**
```bash
Edit: /src/content/global/de.yaml
Edit: /src/content/global/en.yaml
```

**Change homepage hero text:**
```bash
Edit: /src/content/pages/de/index.yaml (hero section)
Edit: /src/content/pages/en/index.yaml (hero section)
```

**Add new event:**
```bash
Create: /src/content/events/de/new-event.yaml
Create: /src/content/events/en/new-event.yaml
```

**Update service times:**
```bash
Edit: /src/content/pages/de/services.yaml
Edit: /src/content/pages/en/services.yaml
```

## Future Enhancements

- Image management for hero backgrounds and event images
- Dynamic event filtering by date (upcoming vs past)
- Rich text editor integration for long-form content
- Contact form backend integration
- Calendar export functionality (iCal)
- Site search with Pagefind

## Migration Strategy

**Recommended Approach: Incremental Migration**

1. Set up foundation (config, global files, components)
2. Migrate homepage first (establishes pattern)
3. Migrate remaining pages one at a time
4. Test thoroughly after each page
5. Deploy when all pages migrated

**Benefits:**
- Lower risk (can rollback individual pages)
- Easier debugging
- Opportunity to refine pattern as we go

**Order:**
1. Homepage (simplest, establishes pattern)
2. About (text-heavy)
3. Services (structured data)
4. Contact (complex cards)
5. Events (uses events collection)
6. Media (YouTube integration)
7. Donations (banking info)
8. Privacy & Imprint (legal text)

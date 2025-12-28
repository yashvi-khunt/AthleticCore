# Multi-Page Architecture Blueprint

## Scaling CORE ATHLETE from Single-Page to Multi-Page Website

**Version:** 1.0  
**Last Updated:** December 27, 2025  
**Status:** Architecture Definition Phase

---

## Executive Summary

This document defines the architectural blueprint for scaling the existing single-page CORE ATHLETE website into a multi-page, CMS-ready application while preserving the home page implementation and maintaining consistent visual language across all pages.

### Core Principles

1. **Home Page Immutability** - Zero changes to existing home page implementation
2. **Visual Consistency** - All pages inherit black section backgrounds, athletic motion system, and Material UI styling
3. **Content Decoupling** - Data-driven rendering via configuration objects (JSON → CMS/DB)
4. **Future-Proof Architecture** - Built for dynamic routing via admin panel or headless CMS

---

## Table of Contents

1. [Current State Analysis](#current-state-analysis)
2. [Page-Level Context Definitions](#page-level-context-definitions)
3. [Routing Architecture](#routing-architecture)
4. [Data Strategy](#data-strategy)
5. [Shared Layout System](#shared-layout-system)
6. [Animation System](#animation-system)
7. [Theming Strategy](#theming-strategy)
8. [Implementation Roadmap](#implementation-roadmap)
9. [File Structure](#file-structure)

---

## Current State Analysis

### Existing Architecture Patterns

The current home page (`/`) uses a proven, scalable architecture:

```typescript
// Current Home Page Pattern (app/page.tsx)
export default function HomePage() {
  const sections = getEnabledSections();

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
```

**Key Components:**

- **SectionRenderer** - Maps section types to components
- **SectionShell** - Provides consistent container styling, spacing, and animations
- **Content Getters** - Data retrieval layer (`getHero()`, `getPrograms()`, etc.)
- **site-content.json** - Single source of truth for content and configuration

### Visual Language Inheritance

All new pages must inherit these established patterns:

| Pattern                | Implementation                           | Usage                           |
| ---------------------- | ---------------------------------------- | ------------------------------- |
| **Black Backgrounds**  | `SectionShell` with `bgVariant="black"`  | All sections except CTA         |
| **Section Animations** | `animationPreset` in section config      | fadeIn, slideUp, parallax, none |
| **Spacing System**     | `spacing` prop (none/small/medium/large) | Consistent vertical rhythm      |
| **Material UI Theme**  | `ThemeRegistry` provider in root layout  | Dark mode, lime accent          |
| **Typography System**  | Poppins (headings) + Inter (body)        | Consistent font hierarchy       |

### Non-Negotiable Constraints

1. **Home Page (`/`)** - Must remain exactly as-is
2. **CTA Section Styling** - Unique gradient/styling preserved globally
3. **Visual Theme** - Black backgrounds, lime accents, athletic motion
4. **Animation System** - Section-level only, no text animations

---

## Page-Level Context Definitions

### 1. About Page (`/about`)

**Purpose:** Brand story, training philosophy, credibility, team introduction

**Layout Context:**

```typescript
{
  pageType: "about",
  layoutStrategy: "vertical-sections",
  sectionBackgrounds: "black",
  motionSystem: "cinematic-transitions"
}
```

**Suggested Section Stack:**

```json
[
  {
    "type": "page-hero",
    "variant": "minimal",
    "content": {
      "title": "About CORE ATHLETE",
      "subtitle": "Our Story, Philosophy, and Team"
    }
  },
  {
    "type": "story",
    "variant": "media-left",
    "animationPreset": "fadeIn",
    "content": "Brand origin story"
  },
  {
    "type": "philosophy",
    "variant": "c-o-r-e-grid",
    "animationPreset": "slideUp",
    "content": "CORE acronym breakdown (reuse existing)"
  },
  {
    "type": "team",
    "variant": "profile-grid",
    "animationPreset": "fadeIn",
    "content": "Coach/trainer profiles"
  },
  {
    "type": "credentials",
    "variant": "icon-list",
    "animationPreset": "fadeIn",
    "content": "Certifications, partnerships"
  },
  {
    "type": "cta",
    "variant": "default",
    "content": "Work with us CTA"
  }
]
```

**Animation Context:**

- **Section Enter/Exit:** Fade-in transitions on scroll
- **Media Elements:** Parallax backgrounds at 0.3 speed
- **Interactive Elements:** Subtle hover effects on team cards
- **Accessibility:** Respects `prefers-reduced-motion`

**Data Requirements:**

```typescript
interface AboutPageData {
  story: {
    title: string;
    content: string[];
    images: string[];
  };
  philosophy: PhilosophyItem[]; // Reuse from home
  team: TeamMember[];
  credentials: Credential[];
}
```

---

### 2. Programs/Training Page (`/programs`)

**Purpose:** Comprehensive program catalog with filtering and detail views

**Layout Context:**

```typescript
{
  pageType: "programs",
  layoutStrategy: "filterable-catalog",
  sectionBackgrounds: "black",
  motionSystem: "momentum-based-scaling"
}
```

**Suggested Section Stack:**

```json
[
  {
    "type": "page-hero",
    "variant": "with-filters",
    "content": {
      "title": "Training Programs",
      "subtitle": "Science-based programs for every athlete",
      "filters": ["All", "Team", "Small Group", "1-on-1", "Youth"]
    }
  },
  {
    "type": "program-grid",
    "variant": "3-column-cards",
    "animationPreset": "slideUp",
    "content": "Dynamic program cards"
  },
  {
    "type": "comparison-table",
    "variant": "sticky-header",
    "animationPreset": "fadeIn",
    "content": "Program comparison matrix"
  },
  {
    "type": "schedule",
    "variant": "calendar-view",
    "animationPreset": "fadeIn",
    "content": "Available time slots"
  },
  {
    "type": "cta",
    "variant": "default",
    "content": "Book a trial session"
  }
]
```

**Animation Context:**

- **Hover State:** Card lift effect with shadow expansion
- **Filter Transitions:** Smooth opacity/scale changes (300ms)
- **Scroll Behavior:** Pinned section headers on scroll
- **Background Motion:** Subtle particle effects during idle state

**Data Requirements:**

```typescript
interface ProgramsPageData {
  programs: Program[]; // Reuse existing type
  filters: FilterCategory[];
  schedule: TimeSlot[];
  comparisonMatrix: ComparisonData[];
}
```

**Layout Variations:**

- **Optional Horizontal Scroll:** For program timeline/progression view
- **Modal Support:** Quick program detail popups

---

### 3. Athletes/Success Stories Page (`/athletes`)

**Purpose:** Social proof through athlete testimonials and transformation stories

**Layout Context:**

```typescript
{
  pageType: "athletes",
  layoutStrategy: "highlight-reel-sections",
  sectionBackgrounds: "black",
  motionSystem: "cinematic-reveals"
}
```

**Suggested Section Stack:**

```json
[
  {
    "type": "page-hero",
    "variant": "stats-heavy",
    "content": {
      "title": "Athlete Success Stories",
      "stats": ["500+ Athletes", "95% Success Rate", "10+ Sports"]
    }
  },
  {
    "type": "featured-story",
    "variant": "full-width-media",
    "animationPreset": "parallax",
    "content": "Hero athlete transformation"
  },
  {
    "type": "testimonial-grid",
    "variant": "video-masonry",
    "animationPreset": "fadeIn",
    "content": "Video testimonials with YouTube embeds"
  },
  {
    "type": "results-gallery",
    "variant": "before-after",
    "animationPreset": "slideUp",
    "content": "Performance metrics and photos"
  },
  {
    "type": "sports-breakdown",
    "variant": "icon-grid",
    "animationPreset": "fadeIn",
    "content": "Athletes by sport category"
  },
  {
    "type": "cta",
    "variant": "default",
    "content": "Become our next success story"
  }
]
```

**Animation Context:**

- **Section Transitions:** Highlight-reel style (quick fade-ins)
- **Video Elements:** Autoplay previews on hover (muted)
- **Background Particles:** Floating athletic icons/shapes
- **Scroll-Driven Reveals:** Stats counter animations

**Data Requirements:**

```typescript
interface AthletesPageData {
  featuredStory: {
    athlete: string;
    sport: string;
    transformation: string;
    media: string[];
  };
  testimonials: Testimonial[]; // Reuse existing type
  results: AthleteResult[];
  sportCategories: SportCategory[];
}
```

---

### 4. Facilities/Methodology Page (`/facilities`)

**Purpose:** Showcase training environment and methodology

**Layout Context:**

```typescript
{
  pageType: "facilities",
  layoutStrategy: "media-dominant-sections",
  sectionBackgrounds: "black",
  motionSystem: "parallax-layers"
}
```

**Suggested Section Stack:**

```json
[
  {
    "type": "page-hero",
    "variant": "full-screen-video",
    "content": {
      "title": "Our Training Facility",
      "backgroundVideo": "facility-tour.mp4"
    }
  },
  {
    "type": "facility-tour",
    "variant": "image-gallery",
    "animationPreset": "parallax",
    "content": "3D tour or image carousel"
  },
  {
    "type": "methodology",
    "variant": "step-by-step",
    "animationPreset": "slideUp",
    "content": "Training process breakdown"
  },
  {
    "type": "equipment",
    "variant": "category-tabs",
    "animationPreset": "fadeIn",
    "content": "Equipment and technology"
  },
  {
    "type": "safety",
    "variant": "icon-list",
    "animationPreset": "fadeIn",
    "content": "Safety protocols and certifications"
  },
  {
    "type": "cta",
    "variant": "default",
    "content": "Schedule a facility tour"
  }
]
```

**Animation Context:**

- **Parallax Layers:** Multi-depth scrolling (0.2x, 0.5x, 0.8x speeds)
- **Scroll-Driven Reveals:** Methodology steps appear sequentially
- **Interactive Elements:** 360° equipment previews on click
- **Background Motion:** Subtle panning on large images

**Data Requirements:**

```typescript
interface FacilitiesPageData {
  tour: {
    type: "video" | "images" | "3d";
    media: string[];
  };
  methodology: MethodologyStep[];
  equipment: EquipmentCategory[];
  safety: SafetyProtocol[];
}
```

---

### 5. Contact/Enquiry Page (`/contact`)

**Purpose:** Lead generation, communication, and inquiry handling

**Layout Context:**

```typescript
{
  pageType: "contact",
  layoutStrategy: "simplified-sections",
  sectionBackgrounds: "black",
  motionSystem: "minimal-accessible"
}
```

**Suggested Section Stack:**

```json
[
  {
    "type": "page-hero",
    "variant": "minimal",
    "content": {
      "title": "Get in Touch",
      "subtitle": "Start your athletic journey today"
    }
  },
  {
    "type": "contact-form",
    "variant": "multi-step",
    "animationPreset": "fadeIn",
    "content": "Inquiry form with program selection"
  },
  {
    "type": "contact-info",
    "variant": "split-layout",
    "animationPreset": "fadeIn",
    "content": "Address, phone, email, hours"
  },
  {
    "type": "map",
    "variant": "interactive",
    "animationPreset": "none",
    "content": "Google Maps embed"
  },
  {
    "type": "faq",
    "variant": "accordion",
    "animationPreset": "fadeIn",
    "content": "Common questions"
  }
]
```

**Animation Context:**

- **Minimal Motion:** Accessibility-first approach
- **Form Interactions:** Smooth field transitions
- **Validation Feedback:** Subtle error/success animations
- **No Background Effects:** Clean, distraction-free

**Data Requirements:**

```typescript
interface ContactPageData {
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    hours: Hours[];
    mapCoordinates: { lat: number; lng: number };
  };
  faq: FAQItem[];
  formConfig: FormFieldConfig[];
}
```

---

## Routing Architecture

### Next.js App Router Structure

```
src/app/
├── layout.tsx                 # Root layout (unchanged)
├── page.tsx                   # Home page (unchanged)
│
├── about/
│   └── page.tsx              # About page
│
├── programs/
│   ├── page.tsx              # Programs listing
│   └── [slug]/
│       └── page.tsx          # Individual program detail
│
├── athletes/
│   └── page.tsx              # Success stories
│
├── facilities/
│   └── page.tsx              # Facilities & methodology
│
└── contact/
    └── page.tsx              # Contact form
```

### Page Component Pattern

**Every new page follows this pattern:**

```typescript
// src/app/[page]/page.tsx
import { getPageSections, getPageMetadata } from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";
import type { Metadata } from "next";

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about"); // or "programs", "athletes", etc.
}

export default function AboutPage() {
  // Get sections for this specific page
  const sections = getPageSections("about");

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
```

**Key Pattern Benefits:**

1. ✅ Identical structure to home page
2. ✅ Uses existing `SectionRenderer` and `SectionShell`
3. ✅ Data-driven via `getPageSections()`
4. ✅ Zero coupling to specific content
5. ✅ CMS-ready architecture

### Dynamic Routing for Programs

```typescript
// src/app/programs/[slug]/page.tsx
import { getProgramBySlug, getAllProgramSlugs } from "@/lib/content";
import ProgramDetailTemplate from "@/components/templates/ProgramDetailTemplate";

// Generate static paths for all programs
export async function generateStaticParams() {
  const slugs = getAllProgramSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailTemplate program={program} />;
}
```

---

## Data Strategy

### Current State (JSON-Based)

```
src/data/
└── site-content.json
    ├── sections[]        # Home page sections
    ├── hero{}
    ├── programs[]
    ├── testimonials[]
    └── ...
```

### Multi-Page Structure (JSON Phase)

```
src/data/
├── site-content.json          # Global site config + home page
├── pages/
│   ├── about.json            # About page sections + content
│   ├── programs.json         # Programs page sections + content
│   ├── athletes.json         # Athletes page sections + content
│   ├── facilities.json       # Facilities page sections + content
│   └── contact.json          # Contact page sections + content
└── shared/
    ├── navigation.json       # Global navigation (updated)
    ├── footer.json           # Footer content
    └── seo-metadata.json     # Page-level SEO config
```

### Data Schema Example: about.json

```json
{
  "page": {
    "slug": "about",
    "title": "About CORE ATHLETE",
    "description": "Learn about our training philosophy and team"
  },
  "sections": [
    {
      "id": "about-hero",
      "type": "page-hero",
      "enabled": true,
      "order": 1,
      "bgVariant": "black",
      "animationPreset": "fadeIn",
      "spacing": "large",
      "dataKey": "aboutHero"
    },
    {
      "id": "about-story",
      "type": "story",
      "enabled": true,
      "order": 2,
      "bgVariant": "black",
      "animationPreset": "fadeIn",
      "spacing": "large",
      "dataKey": "story"
    }
  ],
  "content": {
    "aboutHero": {
      "title": "About CORE ATHLETE",
      "subtitle": "Building champions through science and dedication"
    },
    "story": {
      "title": "Our Story",
      "paragraphs": ["...", "..."],
      "images": ["story-1.jpg", "story-2.jpg"]
    }
  }
}
```

### Content Getter Functions

```typescript
// src/lib/content.ts (additions)

/**
 * Get sections for a specific page
 */
export function getPageSections(pageSlug: string): SectionConfig[] {
  const pageData = pages[pageSlug];

  if (!pageData) {
    return [];
  }

  return pageData.sections
    .filter((section) => section.enabled)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get content for a specific section on a page
 */
export function getPageContent(pageSlug: string, dataKey: string): any {
  const pageData = pages[pageSlug];
  return pageData?.content?.[dataKey] || null;
}

/**
 * Get metadata for SEO
 */
export function getPageMetadata(pageSlug: string): Metadata {
  const pageData = pages[pageSlug];

  return {
    title: pageData?.page?.title || "CORE ATHLETE",
    description: pageData?.page?.description || "",
    // ... other SEO fields
  };
}
```

### Future CMS Migration Path

```typescript
// When migrating to CMS (Strapi, Sanity, Contentful, etc.)
// Replace JSON imports with API calls:

export async function getPageSections(pageSlug: string) {
  const response = await fetch(`${CMS_API_URL}/pages/${pageSlug}/sections`);
  return response.json();
}

export async function getPageContent(pageSlug: string, dataKey: string) {
  const response = await fetch(
    `${CMS_API_URL}/pages/${pageSlug}/content/${dataKey}`
  );
  return response.json();
}
```

**Migration is seamless because:**

- ✅ Component layer doesn't change
- ✅ Same data structure returned
- ✅ Only content getters are modified
- ✅ Type safety maintained

---

## Shared Layout System

### Root Layout (Unchanged)

```typescript
// src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <PageLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
```

**Shared Across All Pages:**

- ThemeRegistry (MUI theme provider)
- PageLoader (loading state)
- Navbar (global navigation)
- Footer (global footer)

### Page Layout Wrapper (New Component)

Create optional page-level wrapper for shared behaviors:

```typescript
// src/components/layouts/PageLayout.tsx
"use client";

import { type ReactNode } from "react";
import { Box } from "@mui/material";

interface PageLayoutProps {
  children: ReactNode;
  pageType?: "default" | "full-width" | "narrow";
  showBreadcrumbs?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageLayout({
  children,
  pageType = "default",
  showBreadcrumbs = false,
  breadcrumbs = [],
}: PageLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#000000",
      }}
    >
      {showBreadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      {children}
    </Box>
  );
}
```

**Usage:**

```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  const sections = getPageSections("about");

  return (
    <PageLayout
      pageType="default"
      showBreadcrumbs={true}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
      ]}
    >
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PageLayout>
  );
}
```

---

## Animation System

### Current Animation Presets (SectionShell)

```typescript
type SectionAnimationPreset = "none" | "fadeIn" | "slideUp" | "parallax";
```

### Expanded Animation Registry

Create centralized animation preset system:

```typescript
// src/lib/animations.ts
"use client";

export const animationPresets = {
  // Existing presets
  none: {},
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  parallax: {
    // Handled separately in SectionShell
  },

  // New presets for multi-page
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export type AnimationPreset = keyof typeof animationPresets;
```

### Animation Usage Pattern

```typescript
// In SectionShell.tsx (future enhancement)
import { animationPresets } from "@/lib/animations";
import { motion } from "framer-motion"; // If using Framer Motion

const animationProps = animationPresets[animationPreset];

return (
  <Box
    component={motion.section}
    {...animationProps}
    // ... rest of props
  />
);
```

### Athletic Motion System Guidelines

**Page-Level:**

- Hero sections: `fadeIn` or `none`
- Content sections: `fadeIn` or `slideUp`
- Media-heavy sections: `parallax`
- Interactive sections: `scaleIn`

**Timing:**

- Standard duration: 800ms
- Quick interactions: 300ms
- Parallax: 30% scroll speed

**Easing:**

- Standard: `ease-out`
- Athletic/snappy: `cubic-bezier(0.4, 0, 0.2, 1)`
- Smooth/cinematic: `cubic-bezier(0.4, 0, 0.6, 1)`

**Accessibility:**

```typescript
// Respect user preferences
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const animation = prefersReducedMotion ? "none" : "fadeIn";
```

---

## Theming Strategy

### Single MUI Theme (No Changes)

The existing theme in `src/lib/theme.ts` is used globally:

```typescript
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#a3e635" }, // Lime
    background: { default: "#000000" }, // Black
    text: { primary: "#f1f5f9" }, // Light
  },
  // ... rest of theme
});
```

**All pages automatically inherit:**

- Dark mode styling
- Lime accent color (#a3e635)
- Black backgrounds
- Typography system (Poppins + Inter)
- Component styling overrides

### Section-Level Background Tokens

```typescript
// SectionShell bgVariant options
type SectionBgVariant =
  | "black" // #000000 - Default for all sections
  | "ctaDefault" // Special gradient for CTA sections
  | "hero" // Typically black with overlay
  | "surface" // #1a2332 - For cards/elevated content
  | "surfaceAlt"; // #141d2e - For nested content
```

**Usage Rule:**

- **99% of sections:** Use `bgVariant="black"`
- **CTA sections only:** Use `bgVariant="ctaDefault"`
- **Card interiors:** Use `bgVariant="surface"` (not section-level)

### Component-Level Theme Overrides

For page-specific components:

```typescript
// Example: Custom button variant for contact page
<Button
  variant="contained"
  sx={{
    bgcolor: "primary.main",
    color: "primary.contrastText",
    "&:hover": {
      bgcolor: "primary.dark",
    },
  }}
>
  Submit Inquiry
</Button>
```

**Guideline:** Use theme tokens, never hardcoded colors:

- ✅ `bgcolor: "primary.main"`
- ✅ `color: "text.primary"`
- ❌ `bgcolor: "#a3e635"`
- ❌ `color: "#f1f5f9"`

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1)

**Goals:** Set up multi-page structure without changing home page

**Tasks:**

1. ✅ Create this architecture document
2. ⬜ Create page data structure (`src/data/pages/`)
3. ⬜ Extend content getters (`getPageSections`, `getPageContent`)
4. ⬜ Update TypeScript types for page-level data
5. ⬜ Update navigation data to include new pages

**Deliverables:**

- Complete data schema for all 5 pages
- Updated `content.ts` with page functions
- Type definitions for page data structures

### Phase 2: About Page (Week 2)

**Goals:** Build first new page as template

**Tasks:**

1. ⬜ Create `/about` route and page component
2. ⬜ Build `PageHero` component (reusable minimal hero)
3. ⬜ Build `StorySection` component
4. ⬜ Build `TeamSection` component (grid of profiles)
5. ⬜ Add About page sections to `SectionRenderer`
6. ⬜ Populate `about.json` with content
7. ⬜ Test animations and responsiveness

**Deliverables:**

- Fully functional About page
- 3-4 new reusable section components
- Proven pattern for other pages

### Phase 3: Programs Page (Week 3)

**Goals:** Build catalog page with filtering

**Tasks:**

1. ⬜ Create `/programs` route
2. ⬜ Build `ProgramGrid` component with filtering
3. ⬜ Build `ComparisonTable` component
4. ⬜ Create `/programs/[slug]` dynamic route
5. ⬜ Build `ProgramDetailTemplate` component
6. ⬜ Generate static paths for all programs
7. ⬜ Populate `programs.json`

**Deliverables:**

- Programs listing page
- Individual program detail pages
- Filtering and navigation system

### Phase 4: Remaining Pages (Week 4)

**Goals:** Complete all remaining pages

**Tasks:**

1. ⬜ Create `/athletes` page (testimonial-focused)
2. ⬜ Create `/facilities` page (media-heavy)
3. ⬜ Create `/contact` page (form-focused)
4. ⬜ Build supporting section components
5. ⬜ Populate all JSON data files
6. ⬜ Integrate contact form with backend/email service

**Deliverables:**

- All 5 new pages complete
- Comprehensive section component library
- Working contact form

### Phase 5: Polish & Optimization (Week 5)

**Goals:** Performance, SEO, and final touches

**Tasks:**

1. ⬜ Optimize images (next/image, WebP, lazy loading)
2. ⬜ Generate SEO metadata for all pages
3. ⬜ Add structured data (JSON-LD)
4. ⬜ Test accessibility (WCAG AA compliance)
5. ⬜ Test animations with `prefers-reduced-motion`
6. ⬜ Performance audit (Lighthouse)
7. ⬜ Cross-browser testing
8. ⬜ Mobile responsiveness testing

**Deliverables:**

- Performance score >90
- Accessibility compliance
- SEO optimization complete

### Phase 6: CMS Preparation (Future)

**Goals:** Prepare for headless CMS integration

**Tasks:**

1. ⬜ Choose CMS platform (Strapi/Sanity/Contentful)
2. ⬜ Design content models matching JSON structure
3. ⬜ Create API abstraction layer
4. ⬜ Migrate one page to CMS as proof-of-concept
5. ⬜ Build admin interface for content editing
6. ⬜ Set up preview mode for drafts

**Deliverables:**

- CMS-ready architecture
- Admin content management interface
- Migration path documentation

---

## File Structure

### Complete File Tree (Post-Implementation)

```
ac_frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout (unchanged)
│   │   ├── page.tsx                      # Home page (unchanged)
│   │   ├── about/
│   │   │   └── page.tsx                  # About page
│   │   ├── programs/
│   │   │   ├── page.tsx                  # Programs listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Program detail
│   │   ├── athletes/
│   │   │   └── page.tsx                  # Success stories
│   │   ├── facilities/
│   │   │   └── page.tsx                  # Facilities & methodology
│   │   └── contact/
│   │       └── page.tsx                  # Contact form
│   │
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── PageLayout.tsx            # Optional page wrapper
│   │   │   └── Breadcrumbs.tsx           # Breadcrumb navigation
│   │   │
│   │   ├── sections/
│   │   │   ├── PageHero.tsx              # Minimal hero for internal pages
│   │   │   ├── StorySection.tsx          # About story section
│   │   │   ├── TeamSection.tsx           # Team member grid
│   │   │   ├── ProgramGrid.tsx           # Filterable program grid
│   │   │   ├── ComparisonTable.tsx       # Program comparison
│   │   │   ├── TestimonialGrid.tsx       # Video testimonial grid
│   │   │   ├── FacilityTour.tsx          # Image gallery/tour
│   │   │   ├── MethodologySection.tsx    # Process breakdown
│   │   │   └── ContactForm.tsx           # Multi-step form
│   │   │
│   │   ├── templates/
│   │   │   └── ProgramDetailTemplate.tsx # Program detail layout
│   │   │
│   │   ├── Hero.tsx                      # Home hero (unchanged)
│   │   ├── SectionRenderer.tsx           # Updated with new sections
│   │   ├── SectionShell.tsx              # Unchanged
│   │   ├── Navbar.tsx                    # Updated navigation
│   │   ├── Footer.tsx                    # Unchanged
│   │   └── ... (existing components)
│   │
│   ├── data/
│   │   ├── site-content.json             # Home page + global config
│   │   ├── pages/
│   │   │   ├── about.json                # About page data
│   │   │   ├── programs.json             # Programs page data
│   │   │   ├── athletes.json             # Athletes page data
│   │   │   ├── facilities.json           # Facilities page data
│   │   │   └── contact.json              # Contact page data
│   │   └── shared/
│   │       ├── navigation.json           # Global navigation
│   │       ├── footer.json               # Footer content
│   │       └── seo-metadata.json         # SEO config
│   │
│   ├── lib/
│   │   ├── content.ts                    # Extended with page functions
│   │   ├── animations.ts                 # Animation preset registry
│   │   ├── theme.ts                      # MUI theme (unchanged)
│   │   └── section-utils.ts              # Utility functions
│   │
│   └── types/
│       ├── content.ts                    # Extended with page types
│       ├── site.ts                       # Global types
│       └── pages.ts                      # NEW: Page-specific types
│
├── public/
│   └── images/
│       ├── about/                        # About page images
│       ├── programs/                     # Program images
│       ├── athletes/                     # Athlete photos
│       ├── facilities/                   # Facility photos
│       └── logos/                        # Existing logos
│
├── ARCHITECTURE.md                       # Existing architecture doc
├── MULTI_PAGE_ARCHITECTURE.md            # This document
└── ... (other config files)
```

---

## Type Definitions

### New Page Types

```typescript
// src/types/pages.ts

/**
 * Page configuration for multi-page architecture
 */
export interface PageConfig {
  slug: string;
  title: string;
  description: string;
  sections: SectionConfig[];
  content: Record<string, any>;
}

/**
 * Page-specific hero variant
 */
export interface PageHero {
  variant: "minimal" | "with-filters" | "stats-heavy" | "full-screen-video";
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  stats?: Stat[];
  filters?: string[];
}

/**
 * Story section for About page
 */
export interface StorySection {
  title: string;
  paragraphs: string[];
  images: string[];
  variant?: "media-left" | "media-right" | "media-center";
}

/**
 * Team member profile
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials?: string[];
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

/**
 * Facility tour content
 */
export interface FacilityTour {
  type: "video" | "images" | "3d";
  media: string[];
  captions?: string[];
}

/**
 * Methodology step
 */
export interface MethodologyStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon?: string;
}

/**
 * Contact form configuration
 */
export interface ContactFormConfig {
  fields: FormField[];
  submitEndpoint: string;
  successMessage: string;
}

export interface FormField {
  id: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[]; // For select fields
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
  };
}
```

---

## Navigation Updates

### Updated Navigation Structure

```json
// src/data/shared/navigation.json
{
  "mainNav": [
    {
      "label": "Programs",
      "href": "/programs",
      "submenu": [
        { "label": "All Programs", "href": "/programs" },
        { "label": "Team Training", "href": "/programs/team-training" },
        { "label": "Small Group", "href": "/programs/small-group" },
        { "label": "1-on-1 Training", "href": "/programs/1-on-1" }
      ]
    },
    {
      "label": "About",
      "href": "/about"
    },
    {
      "label": "Athletes",
      "href": "/athletes"
    },
    {
      "label": "Facilities",
      "href": "/facilities"
    },
    {
      "label": "Contact",
      "href": "/contact"
    }
  ],
  "mobileNav": [
    { "label": "Home", "href": "/" },
    { "label": "Programs", "href": "/programs" },
    { "label": "About", "href": "/about" },
    { "label": "Athletes", "href": "/athletes" },
    { "label": "Facilities", "href": "/facilities" },
    { "label": "Contact", "href": "/contact" }
  ]
}
```

### Navbar Component Updates

```typescript
// src/components/Navbar.tsx
// Add dropdown support for "Programs" menu
// Update mobile menu to show all pages
// Highlight active page based on current route
```

---

## SEO & Metadata Strategy

### Page-Level Metadata

```typescript
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: "About CORE ATHLETE | Elite Athletic Training",
  description:
    "Learn about our training philosophy, team, and commitment to building champions through science-based athletic development.",
  openGraph: {
    title: "About CORE ATHLETE",
    description: "Our story, philosophy, and team",
    images: ["/images/about/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CORE ATHLETE",
    description: "Our story, philosophy, and team",
    images: ["/images/about/twitter-card.jpg"],
  },
};
```

### Structured Data (JSON-LD)

```typescript
// Example for Programs page
const programSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Athletic Training Programs",
  description: "Comprehensive athletic training programs",
  provider: {
    "@type": "Organization",
    name: "CORE ATHLETE",
  },
  areaServed: "...",
};
```

---

## Testing Strategy

### Component Testing

- Test each new section component in isolation
- Verify animations with `prefers-reduced-motion`
- Test responsive breakpoints (xs, sm, md, lg, xl)

### Integration Testing

- Test page-to-page navigation
- Verify SectionRenderer handles all new section types
- Test dynamic routing for programs

### Performance Testing

- Lighthouse audits for all pages
- Image optimization verification
- Bundle size monitoring

### Accessibility Testing

- WCAG AA compliance check
- Screen reader testing
- Keyboard navigation testing
- Color contrast validation

---

## Future Enhancements

### Dynamic Content Management

1. Admin panel for non-technical content editing
2. Preview mode for draft content
3. Version control for content changes
4. Multi-language support (i18n)

### Advanced Features

1. Blog/news section for updates
2. Event calendar for training sessions
3. Online booking/scheduling system
4. Member portal for athlete tracking
5. Video library for training resources

### Performance Optimizations

1. Image CDN integration
2. Incremental static regeneration (ISR)
3. Edge caching strategy
4. Progressive web app (PWA) features

---

## Questions & Decisions Log

| Date       | Question                             | Decision                                          | Rationale                                                               |
| ---------- | ------------------------------------ | ------------------------------------------------- | ----------------------------------------------------------------------- |
| 2025-12-27 | Use Framer Motion or CSS animations? | CSS animations initially, Framer Motion if needed | Keep bundle size small, use library only if complex animations required |
| 2025-12-27 | Single JSON file or multiple?        | Multiple files by page                            | Better organization, easier to manage at scale                          |
| 2025-12-27 | Create PageLayout wrapper?           | Optional wrapper component                        | Provides flexibility without forcing pattern                            |
| 2025-12-27 | Support dynamic program routes?      | Yes, use [slug] pattern                           | Essential for scalability and SEO                                       |

---

## Conclusion

This architecture blueprint provides a complete roadmap for scaling CORE ATHLETE from a single-page website to a multi-page, CMS-ready application while maintaining:

✅ **Home page immutability** - Zero changes to existing implementation  
✅ **Visual consistency** - All pages inherit black backgrounds, athletic motion, MUI styling  
✅ **Content decoupling** - Data-driven rendering via configuration objects  
✅ **Future-proof design** - CMS migration path clearly defined  
✅ **Developer experience** - Reusable components, clear patterns, type safety

**Next Steps:**

1. Review and approve this architecture
2. Begin Phase 1 (Foundation) implementation
3. Build About page as template (Phase 2)
4. Scale to remaining pages (Phases 3-4)

---

**Document Status:** ✅ Complete - Ready for Implementation  
**Maintainer:** Athletic Core Development Team  
**Last Review:** December 27, 2025

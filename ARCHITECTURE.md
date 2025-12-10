# System Architecture Overview

## How the Dynamic Section System Works

```
┌─────────────────────────────────────────────────────────────┐
│                    site-content.json                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ {                                                     │  │
│  │   "sections": [                                      │  │
│  │     { "id": "hero", "type": "hero", "enabled": true, │  │
│  │       "order": 1 },                                  │  │
│  │     { "id": "programs", "type": "programs",          │  │
│  │       "enabled": true, "order": 2 },                 │  │
│  │     ...                                              │  │
│  │   ]                                                   │  │
│  │ }                                                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    (Configuration)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    lib/content.ts                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  getEnabledSections()                                │  │
│  │    - Filters enabled sections                        │  │
│  │    - Sorts by order                                  │  │
│  │    - Returns sorted array                            │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    (Sorted Sections)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    app/page.tsx                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  const sections = getEnabledSections()               │  │
│  │                                                       │  │
│  │  return (                                            │  │
│  │    <>                                                │  │
│  │      {sections.map(section =>                        │  │
│  │        <SectionRenderer section={section} />         │  │
│  │      )}                                              │  │
│  │    </>                                               │  │
│  │  )                                                    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    (Render Each Section)
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              components/SectionRenderer.tsx                  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  switch (section.type) {                             │  │
│  │    case "hero":                                      │  │
│  │      return <Hero />                                 │  │
│  │    case "programs":                                  │  │
│  │      return <ProgramsSection />                      │  │
│  │    case "about":                                     │  │
│  │      return <AboutSection />                         │  │
│  │    ...                                               │  │
│  │  }                                                    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    (Actual Components)
                            ↓
┌──────────────────┬──────────────────┬──────────────────────┐
│   Hero.tsx       │ ProgramsSection  │  AboutSection.tsx    │
│                  │     .tsx         │                      │
│  ┌────────────┐  │  ┌────────────┐  │  ┌────────────┐     │
│  │  Renders   │  │  │  Renders   │  │  │  Renders   │     │
│  │  hero      │  │  │  programs  │  │  │  about     │     │
│  │  section   │  │  │  grid      │  │  │  content   │     │
│  └────────────┘  │  └────────────┘  │  └────────────┘     │
└──────────────────┴──────────────────┴──────────────────────┘
```

## Data Flow

```
User Edits JSON
       ↓
   Saves File
       ↓
Next.js Detects Change
       ↓
Reloads Page Data
       ↓
getEnabledSections() Called
       ↓
Sections Filtered & Sorted
       ↓
SectionRenderer Maps Each Section
       ↓
Correct Component Rendered
       ↓
User Sees Updated Page
```

## Component Hierarchy

```
HomePage (page.tsx)
  └─ SectionRenderer (for each section)
       ├─ Hero
       ├─ ProgramsSection
       │    └─ ProgramCard (for each program)
       ├─ AboutSection
       ├─ ServicesSection
       ├─ PricingSection
       ├─ TestimonialsSection
       ├─ SportsSection
       ├─ CTASection
       └─ ContactSection
```

## File Relationships

```
types/content.ts
    ↓ (defines types)
    ├─→ lib/content.ts (uses types)
    ├─→ lib/section-utils.ts (uses types)
    ├─→ components/SectionRenderer.tsx (uses types)
    └─→ data/site-content.json (implements types)

data/site-content.json
    ↓ (imported by)
    lib/content.ts
    ↓ (provides getters)
    ├─→ app/page.tsx (gets sections)
    └─→ components/SectionRenderer.tsx (gets data)
```

## Edit Flow Example

### Scenario: Move Testimonials before Pricing

```
1. Open: src/data/site-content.json

2. Find sections array

3. Change order values:

   Before:
   { "id": "pricing-section", "order": 5 }
   { "id": "testimonials-section", "order": 6 }

   After:
   { "id": "testimonials-section", "order": 5 }
   { "id": "pricing-section", "order": 6 }

4. Save file

5. Browser refreshes (dev mode)

6. Result: Testimonials now appears before Pricing
```

## Key Concepts

### 1. Separation of Concerns

- **Content** (JSON) ≠ **Structure** (Components) ≠ **Logic** (Utils)
- Edit content without touching code
- Reuse components anywhere
- Utilities handle complex operations

### 2. Type Safety

```
TypeScript Types (content.ts)
        ↓
Validates JSON structure
        ↓
Catches errors at build time
        ↓
Better developer experience
```

### 3. Dynamic Rendering

```
Static Config → Dynamic Output
- No hardcoded section order
- No if/else for visibility
- Configuration-driven UI
```

## Benefits

✅ **Easy to Edit**

- Change JSON, not code
- No developer needed for reordering
- Quick A/B testing

✅ **Type Safe**

- TypeScript catches errors
- IntelliSense support
- Clear data structure

✅ **Maintainable**

- Single source of truth
- Reusable components
- Clear file organization

✅ **Flexible**

- Add custom properties
- Create new section types
- Multiple layout presets

## Adding a New Section Type

```
Step 1: Create Component
components/NewSection.tsx
    ↓
Step 2: Add Type
types/content.ts → Add "new-section" to SectionType
    ↓
Step 3: Add to Renderer
components/SectionRenderer.tsx → Add case for "new-section"
    ↓
Step 4: Add to Config
data/site-content.json → Add section object
    ↓
Step 5: Test
Refresh browser and verify
```

## Summary

This system provides a **config-driven, type-safe, modular architecture** that makes it easy to manage website sections without writing code. Perfect for dynamic websites that need frequent layout changes or A/B testing.

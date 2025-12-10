# Dynamic Section Management Guide

## Overview

Your website now uses a dynamic section management system that allows you to easily:

- ✅ Reorder sections without touching code
- ✅ Enable/disable sections via JSON configuration
- ✅ Customize section properties
- ✅ Add new sections easily

## How It Works

### 1. Section Configuration

All sections are configured in `/src/data/site-content.json` under the `sections` array:

```json
"sections": [
  {
    "id": "hero-section",
    "type": "hero",
    "enabled": true,
    "order": 1
  },
  {
    "id": "programs-section",
    "type": "programs",
    "enabled": true,
    "order": 2
  }
]
```

### 2. Section Properties

Each section has these properties:

- **id**: Unique identifier for the section (e.g., "hero-section")
- **type**: The component type to render (hero, programs, about, services, pricing, testimonials, sports, cta, contact)
- **enabled**: Boolean - show (true) or hide (false) the section
- **order**: Number - determines the order of sections (1 = first, 2 = second, etc.)
- **customProps** (optional): Additional custom properties for the section

## How to Use

### Reordering Sections

Simply change the `order` numbers in the JSON:

**Example: Move Testimonials before Pricing**

```json
{
  "id": "pricing-section",
  "type": "pricing",
  "enabled": true,
  "order": 6  // was 5
},
{
  "id": "testimonials-section",
  "type": "testimonials",
  "enabled": true,
  "order": 5  // was 6
}
```

### Hiding/Showing Sections

Change the `enabled` property:

```json
{
  "id": "sports-section",
  "type": "sports",
  "enabled": false, // This section won't display
  "order": 7
}
```

### Adding Custom Properties

Add section-specific customizations:

```json
{
  "id": "hero-section",
  "type": "hero",
  "enabled": true,
  "order": 1,
  "customProps": {
    "showStats": true,
    "backgroundColor": "blue"
  }
}
```

## Available Section Types

| Type           | Description                                |
| -------------- | ------------------------------------------ |
| `hero`         | Hero banner with title, subtitle, and CTAs |
| `programs`     | Training programs grid                     |
| `about`        | About section with CORE philosophy         |
| `services`     | Services grid with icons                   |
| `pricing`      | Pricing plans cards                        |
| `testimonials` | Customer testimonials carousel             |
| `sports`       | Sports icons grid                          |
| `cta`          | Call-to-action section                     |
| `contact`      | Contact information and form               |

## Quick Examples

### Example 1: Simple Reorder

Want Sports section at the top after Hero?

```json
"sections": [
  {
    "id": "hero-section",
    "type": "hero",
    "enabled": true,
    "order": 1
  },
  {
    "id": "sports-section",
    "type": "sports",
    "enabled": true,
    "order": 2  // Changed from 7
  },
  {
    "id": "programs-section",
    "type": "programs",
    "enabled": true,
    "order": 3  // Changed from 2
  }
  // ... adjust other orders accordingly
]
```

### Example 2: Hide Multiple Sections

Hide Sports and CTA sections:

```json
{
  "id": "sports-section",
  "type": "sports",
  "enabled": false,
  "order": 7
},
{
  "id": "cta-section",
  "type": "cta",
  "enabled": false,
  "order": 8
}
```

### Example 3: Complete Layout Change

Want a simple landing page? Just enable Hero, About, and Contact:

```json
"sections": [
  {
    "id": "hero-section",
    "type": "hero",
    "enabled": true,
    "order": 1
  },
  {
    "id": "about-section",
    "type": "about",
    "enabled": true,
    "order": 2
  },
  {
    "id": "contact-section",
    "type": "contact",
    "enabled": true,
    "order": 3
  },
  // Set all others to enabled: false
]
```

## Adding New Sections

To add a completely new section type:

1. **Create the component** in `/src/components/YourNewSection.tsx`
2. **Add the type** to `/src/types/content.ts`:
   ```typescript
   export type SectionType = "hero" | "programs" | "your-new-section"; // Add here
   // ...
   ```
3. **Add to SectionRenderer** in `/src/components/SectionRenderer.tsx`:
   ```typescript
   case "your-new-section": {
     return <YourNewSection />;
   }
   ```
4. **Add to configuration** in `/src/data/site-content.json`:
   ```json
   {
     "id": "your-new-section",
     "type": "your-new-section",
     "enabled": true,
     "order": 10
   }
   ```

## Tips & Best Practices

1. **Order numbers don't need to be sequential** - You can use 1, 5, 10, 20 to leave room for inserting sections later
2. **Keep unique IDs** - Make sure each section has a unique ID
3. **Test after changes** - Always verify the site renders correctly after reordering
4. **Backup your JSON** - Keep a backup before making major changes
5. **Use descriptive IDs** - Use IDs like "hero-section" rather than "section1"

## Component Files

| File                                  | Purpose                                     |
| ------------------------------------- | ------------------------------------------- |
| `/src/app/page.tsx`                   | Main page that renders sections dynamically |
| `/src/components/SectionRenderer.tsx` | Maps section types to components            |
| `/src/components/SectionWrapper.tsx`  | Wrapper for common section styling          |
| `/src/lib/content.ts`                 | Helper functions to get section data        |
| `/src/types/content.ts`               | TypeScript types for sections               |
| `/src/data/site-content.json`         | Section configuration and content           |

## Troubleshooting

**Section not appearing?**

- Check that `enabled: true`
- Verify the `type` matches available types
- Ensure the order number is within your range

**Wrong order?**

- Check all `order` values
- Make sure they're in the sequence you want
- Remember: lower numbers appear first

**Build errors?**

- Run `npm run build` to check for TypeScript errors
- Verify JSON syntax is correct (no trailing commas)
- Check that all required properties are present

## Need Help?

The system is designed to be simple and maintainable. Most changes only require editing the JSON file. If you need to add custom behavior, you can extend the `customProps` field and handle it in the respective component.

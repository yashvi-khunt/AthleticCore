# Section Configuration Presets

This file contains ready-to-use section configurations for different website layouts. Simply copy the desired preset into your `site-content.json` file under the `sections` key.

## Preset 1: Full Website (Default)

Complete website with all sections enabled:

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
  },
  {
    "id": "about-section",
    "type": "about",
    "enabled": true,
    "order": 3
  },
  {
    "id": "services-section",
    "type": "services",
    "enabled": true,
    "order": 4
  },
  {
    "id": "pricing-section",
    "type": "pricing",
    "enabled": true,
    "order": 5
  },
  {
    "id": "testimonials-section",
    "type": "testimonials",
    "enabled": true,
    "order": 6
  },
  {
    "id": "sports-section",
    "type": "sports",
    "enabled": true,
    "order": 7
  },
  {
    "id": "cta-section",
    "type": "cta",
    "enabled": true,
    "order": 8
  },
  {
    "id": "contact-section",
    "type": "contact",
    "enabled": true,
    "order": 9
  }
]
```

## Preset 2: Simple Landing Page

Minimal landing page with key sections only:

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
    "id": "programs-section",
    "type": "programs",
    "enabled": true,
    "order": 3
  },
  {
    "id": "cta-section",
    "type": "cta",
    "enabled": true,
    "order": 4
  },
  {
    "id": "contact-section",
    "type": "contact",
    "enabled": true,
    "order": 5
  },
  {
    "id": "services-section",
    "type": "services",
    "enabled": false,
    "order": 6
  },
  {
    "id": "pricing-section",
    "type": "pricing",
    "enabled": false,
    "order": 7
  },
  {
    "id": "testimonials-section",
    "type": "testimonials",
    "enabled": false,
    "order": 8
  },
  {
    "id": "sports-section",
    "type": "sports",
    "enabled": false,
    "order": 9
  }
]
```

## Preset 3: Sales-Focused Layout

Optimized for conversions with testimonials and pricing up front:

```json
"sections": [
  {
    "id": "hero-section",
    "type": "hero",
    "enabled": true,
    "order": 1
  },
  {
    "id": "testimonials-section",
    "type": "testimonials",
    "enabled": true,
    "order": 2
  },
  {
    "id": "programs-section",
    "type": "programs",
    "enabled": true,
    "order": 3
  },
  {
    "id": "pricing-section",
    "type": "pricing",
    "enabled": true,
    "order": 4
  },
  {
    "id": "services-section",
    "type": "services",
    "enabled": true,
    "order": 5
  },
  {
    "id": "about-section",
    "type": "about",
    "enabled": true,
    "order": 6
  },
  {
    "id": "cta-section",
    "type": "cta",
    "enabled": true,
    "order": 7
  },
  {
    "id": "contact-section",
    "type": "contact",
    "enabled": true,
    "order": 8
  },
  {
    "id": "sports-section",
    "type": "sports",
    "enabled": true,
    "order": 9
  }
]
```

## Preset 4: Information Focus

Emphasis on programs and services with detailed information:

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
    "id": "sports-section",
    "type": "sports",
    "enabled": true,
    "order": 3
  },
  {
    "id": "programs-section",
    "type": "programs",
    "enabled": true,
    "order": 4
  },
  {
    "id": "services-section",
    "type": "services",
    "enabled": true,
    "order": 5
  },
  {
    "id": "testimonials-section",
    "type": "testimonials",
    "enabled": true,
    "order": 6
  },
  {
    "id": "pricing-section",
    "type": "pricing",
    "enabled": true,
    "order": 7
  },
  {
    "id": "contact-section",
    "type": "contact",
    "enabled": true,
    "order": 8
  },
  {
    "id": "cta-section",
    "type": "cta",
    "enabled": false,
    "order": 9
  }
]
```

## Preset 5: Coming Soon Page

Minimal page for launch or maintenance:

```json
"sections": [
  {
    "id": "hero-section",
    "type": "hero",
    "enabled": true,
    "order": 1,
    "customProps": {
      "showStats": false
    }
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
  {
    "id": "programs-section",
    "type": "programs",
    "enabled": false,
    "order": 4
  },
  {
    "id": "services-section",
    "type": "services",
    "enabled": false,
    "order": 5
  },
  {
    "id": "pricing-section",
    "type": "pricing",
    "enabled": false,
    "order": 6
  },
  {
    "id": "testimonials-section",
    "type": "testimonials",
    "enabled": false,
    "order": 7
  },
  {
    "id": "sports-section",
    "type": "sports",
    "enabled": false,
    "order": 8
  },
  {
    "id": "cta-section",
    "type": "cta",
    "enabled": false,
    "order": 9
  }
]
```

## Preset 6: Event/Workshop Landing

Perfect for promoting specific events or training camps:

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
  },
  {
    "id": "pricing-section",
    "type": "pricing",
    "enabled": true,
    "order": 3
  },
  {
    "id": "services-section",
    "type": "services",
    "enabled": true,
    "order": 4
  },
  {
    "id": "testimonials-section",
    "type": "testimonials",
    "enabled": true,
    "order": 5
  },
  {
    "id": "cta-section",
    "type": "cta",
    "enabled": true,
    "order": 6
  },
  {
    "id": "contact-section",
    "type": "contact",
    "enabled": true,
    "order": 7
  },
  {
    "id": "about-section",
    "type": "about",
    "enabled": false,
    "order": 8
  },
  {
    "id": "sports-section",
    "type": "sports",
    "enabled": false,
    "order": 9
  }
]
```

## How to Use a Preset

1. Open `/src/data/site-content.json`
2. Find the `"sections"` array
3. Replace the entire array with one of the presets above
4. Save the file
5. Refresh your browser to see the changes

## Customizing a Preset

You can modify any preset by:

- Changing the `order` values to reorder sections
- Setting `enabled: false` to hide sections
- Setting `enabled: true` to show sections
- Adding `customProps` for section-specific customization

Example with custom props:

```json
{
  "id": "hero-section",
  "type": "hero",
  "enabled": true,
  "order": 1,
  "customProps": {
    "showStats": false,
    "className": "custom-hero-class"
  }
}
```

# Quick Reference - Section Management

## Common Tasks

### 1. Reorder Sections

**Goal:** Move Testimonials above Pricing

**Before:**
```json
{ "id": "pricing-section", "order": 5 },
{ "id": "testimonials-section", "order": 6 }
```

**After:**
```json
{ "id": "testimonials-section", "order": 5 },
{ "id": "pricing-section", "order": 6 }
```

---

### 2. Hide a Section

**Goal:** Hide Sports section

```json
{
  "id": "sports-section",
  "type": "sports",
  "enabled": false,    // ← Change this to false
  "order": 7
}
```

---

### 3. Show a Hidden Section

**Goal:** Show Sports section

```json
{
  "id": "sports-section",
  "type": "sports",
  "enabled": true,     // ← Change this to true
  "order": 7
}
```

---

### 4. Create Simple Landing Page

Show only: Hero → About → Contact

```json
"sections": [
  { "id": "hero-section", "type": "hero", "enabled": true, "order": 1 },
  { "id": "about-section", "type": "about", "enabled": true, "order": 2 },
  { "id": "contact-section", "type": "contact", "enabled": true, "order": 3 },
  { "id": "programs-section", "type": "programs", "enabled": false, "order": 4 },
  { "id": "services-section", "type": "services", "enabled": false, "order": 5 },
  { "id": "pricing-section", "type": "pricing", "enabled": false, "order": 6 },
  { "id": "testimonials-section", "type": "testimonials", "enabled": false, "order": 7 },
  { "id": "sports-section", "type": "sports", "enabled": false, "order": 8 },
  { "id": "cta-section", "type": "cta", "enabled": false, "order": 9 }
]
```

---

## Section Properties Quick Reference

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | ✅ Yes | Unique identifier (e.g., "hero-section") |
| `type` | string | ✅ Yes | Component type (hero, programs, about, etc.) |
| `enabled` | boolean | ✅ Yes | true = show, false = hide |
| `order` | number | ✅ Yes | Display order (1 = first, 2 = second, etc.) |
| `title` | string | ❌ No | Optional custom title |
| `customProps` | object | ❌ No | Additional custom properties |

---

## Available Section Types

| Type | Name | Description |
|------|------|-------------|
| `hero` | Hero Banner | Main landing section with title and CTAs |
| `programs` | Programs | Training programs grid |
| `about` | About | Company info and CORE philosophy |
| `services` | Services | Services and offerings grid |
| `pricing` | Pricing | Pricing plans and packages |
| `testimonials` | Testimonials | Customer reviews and ratings |
| `sports` | Sports | Supported sports with icons |
| `cta` | Call-to-Action | Conversion-focused section |
| `contact` | Contact | Contact form and information |

---

## Order Number Guidelines

✅ **Good Practice:**
- Use gaps: 1, 5, 10, 15 (easy to insert later)
- Sequential: 1, 2, 3, 4 (simple and clean)

❌ **Avoid:**
- Duplicate order numbers (will cause conflicts)
- Negative numbers
- Missing numbers in enabled sections

---

## File Location

All section configuration is in:
```
/src/data/site-content.json
```

Look for the `"sections"` array:
```json
{
  "site": { ... },
  "navigation": [ ... ],
  "sections": [        ← Edit this array
    { ... },
    { ... }
  ],
  "hero": { ... }
}
```

---

## Testing Your Changes

1. Edit `/src/data/site-content.json`
2. Save the file
3. Go to your browser at `http://localhost:3000`
4. Refresh the page (Cmd/Ctrl + R)
5. Verify the changes

If running dev server (`npm run dev`), changes may auto-refresh!

---

## Troubleshooting

**Section not showing?**
- Check `enabled: true`
- Verify section type is valid
- Check for JSON syntax errors

**Wrong order?**
- Review all `order` values
- Ensure no duplicates
- Lower numbers = higher on page

**Syntax error?**
- Check for missing commas
- Verify quotes around strings
- Use JSON validator online

---

## Need More Help?

- **Full Guide:** See `SECTION_MANAGEMENT.md`
- **Presets:** See `SECTION_PRESETS.md`
- **Examples:** Check the default configuration in `site-content.json`

# CORE ATHLETE Website

A modern, dynamic Next.js website for athletic training and sports performance. Built with TypeScript, React, and Tailwind CSS.

## 🎯 Key Features

- **Dynamic Section Management** - Easily reorder, hide, or show sections via JSON configuration
- **Content-Driven** - All content stored in JSON for easy editing without code changes
- **Responsive Design** - Mobile-first design that works on all devices
- **Type-Safe** - Full TypeScript support for better developer experience
- **Modular Components** - Reusable, maintainable component architecture

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Content Management

### Quick Start

All website content is managed through `/src/data/site-content.json`. This includes:

- Site information
- Navigation links
- Hero section
- Programs
- Services
- Pricing
- Testimonials
- Contact info
- **Section order and visibility**

### Managing Sections

The website uses a dynamic section system. To reorder sections or hide/show them:

1. Open `/src/data/site-content.json`
2. Find the `sections` array
3. Modify the `order` property to reorder sections
4. Set `enabled: false` to hide a section
5. Set `enabled: true` to show a section

**Example:**

```json
{
  "id": "about-section",
  "type": "about",
  "enabled": true,
  "order": 2
}
```

### Documentation

- **[SECTION_MANAGEMENT.md](./SECTION_MANAGEMENT.md)** - Complete guide to managing sections
- **[SECTION_PRESETS.md](./SECTION_PRESETS.md)** - Ready-to-use section configurations

## 🏗️ Project Structure

```
ac_frontend/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Main homepage (uses dynamic sections)
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── SectionRenderer.tsx    # Dynamic section renderer
│   │   ├── SectionWrapper.tsx     # Section wrapper utilities
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   └── ...                # Other section components
│   ├── data/
│   │   └── site-content.json  # ALL website content & config
│   ├── lib/
│   │   ├── content.ts         # Content helper functions
│   │   └── section-utils.ts   # Section management utilities
│   └── types/
│       └── content.ts         # TypeScript type definitions
├── public/                    # Static assets
│   └── images/
├── SECTION_MANAGEMENT.md      # Section management guide
└── SECTION_PRESETS.md         # Pre-configured layouts
```

## 🎨 Available Sections

| Section      | Type           | Description                     |
| ------------ | -------------- | ------------------------------- |
| Hero         | `hero`         | Landing banner with CTA buttons |
| Programs     | `programs`     | Training programs grid          |
| About        | `about`        | CORE philosophy and features    |
| Services     | `services`     | Services offered                |
| Pricing      | `pricing`      | Pricing plans                   |
| Testimonials | `testimonials` | Customer reviews                |
| Sports       | `sports`       | Supported sports icons          |
| CTA          | `cta`          | Call-to-action section          |
| Contact      | `contact`      | Contact information             |

## ⚙️ Configuration Examples

### Hide a Section

```json
{
  "id": "sports-section",
  "type": "sports",
  "enabled": false,
  "order": 7
}
```

### Reorder Sections

Change the `order` values:

```json
[
  { "id": "hero-section", "type": "hero", "enabled": true, "order": 1 },
  {
    "id": "testimonials-section",
    "type": "testimonials",
    "enabled": true,
    "order": 2
  },
  { "id": "programs-section", "type": "programs", "enabled": true, "order": 3 }
]
```

### Add Custom Properties

```json
{
  "id": "hero-section",
  "type": "hero",
  "enabled": true,
  "order": 1,
  "customProps": {
    "showStats": false
  }
}
```

## 🛠️ Development

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

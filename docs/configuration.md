# Configuration Guide

This guide covers all configuration files and their settings for the Astro  theme.

## Main Configuration

**File: `src/consts.ts`**

All site-wide configuration is managed in this central file.

### Metadata Configuration

```typescript
export const metadata = {
  title: "Astro theme with Tailwind CSS",
  description: "A theme for Astro project with Tailwind CSS...",
  keywords: "Astro, theme, basics, tutorial, example",
  robots: "index, follow",
  author: "Your Name",
  image: "/images/site-image.jpg", // Open Graph image
  type: "website",
};
```

### Site Configuration

```typescript
export const config = {
  url: "", // Your site's deploy URL
  base: "/Conor-s-Website/", // Base path (e.g., "/blog")
  postsPerPage: 10, // Posts per page in blog index
  lang: "en", // Site language
  ogLocale: "en_UK", // Open Graph locale
  themeColorLight: "#fafafa", // Light theme color
  themeColorDark: "#1d232a", // Dark theme color
};
```

### Localization Configuration

```typescript
export const locale = {
  default: "en-gb", // Site locale
  date: {
    options: {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    },
  },
};
```

### Analytics Configuration

```typescript
export const analytics = {
  google: {
    id: "GTM-XXXXXXX", // Your Google Tag Manager or GA4 ID
  },
};
```

## Contact Information

**File: `src/data/contacts.json`**

Contact information with flexible format support:

```json
[
  {
    "general": {
      "fullName": ["", "Conor Bell", ""],
      "webSite": ["website", "", "Visit Website"],
      "email": ["email", "666384@Student.bedford.ac.uk"],
      "phone": ["phone", "tel:+"]
    },
    "social": {
      "github": ["", "", "GitHub"],
      "linkedin": ["", "", "LinkedIn"]
    },
    "location": {
      "street": "Cauldwell St",
      "city": "Bedford",
      "country": "United Kingdom",
      "workingHours": [
        "Working hours",
        [
          "Mon-Fri: 9:00-18:00 (UTC-5)",
          "Sat: 10:00-14:00 (UTC-5)",
          "Sun: Closed"
        ]
      ]
    }
  }
]
```

**Supported formats:**

- `["title", "url/data", "display text"]` - Full format with title
- `["url", "display text"]` - Link with custom display text
- `["data"]` - Simple data only
- `"data"` - Plain string format
- `["title", ["line1", "line2"]]` - Multi-line format

## Navigation

**File: `src/components/navigation/NavbarMenuItems.astro`**

Multi-level navigation menu configuration:

```astro
---
const mainMenu = [
  { label: "Home", href: "/website/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/about/" },
];

const { menu = mainMenu, maxLevel = 4 } = Astro.props;
---
```

**Menu item types:**

- `{ label: "Page", href: "/page/" }` - Simple link
- `{ label: "Menu", children: [...] }` - Dropdown menu
- Supports unlimited nesting levels (controlled by `maxLevel`)

## Content Collections

**File: `src/content/config.ts`**

Configure content collections and schemas:

```typescript
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

## Custom Styling

**File: `src/styles/global.css`**

Custom CSS variables and styling:

```css
:root {
  --primary: #your-primary-color;
  --secondary: #your-secondary-color;
  --accent: #your-accent-color;
  --neutral: #your-neutral-color;
  --base-100: #your-background-color;
  --base-content: #your-text-color;
}

/* Custom component styles */
.custom-class {
  /* Your custom styles */
}
```

## Configuration Checklist

**Essential Settings:**

- [ ] Update `metadata` in `src/consts.ts`
- [ ] Set correct `url` and `base` for deployment
- [ ] Configure contact information in `src/data/contacts.json`
- [ ] Customize navigation in `NavbarMenuItems.astro`
- [ ] Set up analytics ID if needed

**Optional Customization:**

- [ ] Add custom themes in `tailwind.config.js`
- [ ] Configure content collections schema
- [ ] Add custom CSS variables
- [ ] Set up environment variables for production

This file-based organization makes it easy to find and update specific configuration settings.

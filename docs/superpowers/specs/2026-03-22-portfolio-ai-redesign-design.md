# Portfolio AI-Themed Redesign — Design Spec

**Date:** 2026-03-22
**Status:** Approved
**Scope:** Full visual redesign + 4 new features (contact form, experience timeline, project modals, blog)

---

## 1. Overview

Redesign Kin's developer portfolio from a blue-accent dark theme to a **minimalist tech / AI-inspired aesthetic** with violet accents, monospace typography, and subtle grid animations. Simultaneously add four high-impact features: a working contact form, an experience timeline, enhanced project showcase with detail modals, and a blog section with MDX.

The site remains a **Next.js static export** hosted on static platforms. No backend is introduced.

## 2. Design System

### 2.1 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#09090b` | Page background |
| `surface` | `#18181b` | Card backgrounds |
| `border` | `#27272a` | Card/section borders |
| `primary` | `#8B5CF6` | Violet accent — links, glows, active states |
| `primary-light` | `#A78BFA` | Lighter violet — hover states, secondary accents |
| `glow` | `rgba(139, 92, 246, 0.15)` | Box-shadow glow on cards/buttons |
| `text-primary` | `#f4f4f5` | Main text |
| `text-secondary` | `#a1a1aa` | Muted/secondary text |
| `status-green` | `#22c55e` | Online/available indicator |

### 2.2 Typography

| Role | Font | Source |
|------|------|--------|
| Headings, nav, labels, code | JetBrains Mono | Google Fonts |
| Body text | Inter | Google Fonts (already present) |

### 2.3 UI Patterns

- Section headings use monospace with `>_` prefix (e.g., `>_ projects`)
- Thin violet border-glow on cards, intensified on hover
- Terminal-style blinking cursor on typed text
- Outlined buttons with violet border, fill on hover
- Minimal color usage — spacing and typography carry the design

## 3. Components

### 3.1 GridBackground (New — replaces ParticleBackground)

**Purpose:** Subtle animated background for the Hero section.

- Pure CSS/SVG grid pattern with subtle dot or line intersections
- Gentle pulse/fade animation on grid lines
- No heavy JS library (replaces tsparticles)
- Responsive — reduced density on mobile
- Rendered as a fixed/absolute positioned layer behind Hero content

**Dependencies removed:** `@tsparticles/react`, `@tsparticles/slim`

### 3.2 Navbar (Restyled)

- Logo: `kin.dev` in JetBrains Mono
- Small green dot (`#22c55e`) next to logo — "available" status indicator
- Nav links in JetBrains Mono, violet underline on active section
- Blurred backdrop stays
- Mobile hamburger menu restyled to match theme

### 3.3 Hero Section (Redesigned)

- GridBackground behind content
- Profile image: circular with violet glow ring (`box-shadow` using `glow` token)
- Name: "Hi, I'm Kin" in JetBrains Mono
- TypedText: JetBrains Mono, blinking `|` cursor
  - Strings: `"Full Stack Developer"`, `"Software Engineer"`, `"Building the future with code"`
- Social links: monospace text-style links with small icons
- CTA buttons: outlined, violet border, fill-on-hover transition
  - "Hire Me" → LinkedIn
  - "Resume" → PDF download
- Scroll chevron: restyled with violet color

### 3.4 Skills Section (Restyled)

- Section label: `>_ skills` in JetBrains Mono
- Keep skillicons.dev grid (functional, no change needed)
- GlowCard wrapper: violet glow replacing blue

### 3.5 Projects Section (Enhanced)

- Section label: `>_ projects` in JetBrains Mono
- Card grid (1/2/3 columns responsive) — restyled:
  - `surface` background, `border` border, violet glow on hover
  - Project title in JetBrains Mono
  - Tech stack as violet-tinted pills
  - Click anywhere on card opens detail modal

#### 3.5.1 ProjectModal (New)

**Purpose:** Full-screen overlay showing detailed project information.

- Triggered by clicking a project card
- Content:
  - Project title and tagline
  - Screenshot carousel (multiple images)
  - Full description (from `longDescription`)
  - Tech stack with role descriptions
  - "Challenges & Learnings" section
  - GitHub and Demo links
- UX:
  - Close via X button, click-outside, or Escape key
  - Framer Motion enter (fade + scale up) / exit (fade + scale down) animation
  - Body scroll locked while open
  - Focus trapped inside modal for accessibility
- Data: `data/projects.ts` extended with new fields

**Extended project interface:**

```typescript
interface Project {
  slug: string;
  title: string;
  description: string;        // Short — for card
  longDescription: string;    // Full — for modal
  image: string;              // Card thumbnail
  screenshots: string[];      // Modal carousel
  techStack: string[];        // Tags for card
  techDetails: { name: string; role: string }[];  // Modal detail
  challenges: string;
  learnings: string;
  github: string;
  demo?: string;
}
```

### 3.6 Experience Section (New)

**Purpose:** Full CV-style timeline showing education, work, certifications, and achievements.

- Section label: `>_ experience` in JetBrains Mono
- Placed between Projects and About in page order
- Vertical timeline layout:
  - Desktop: alternating left/right cards
  - Mobile: single column, all cards on one side
- Timeline line: thin violet line with dot markers at each entry
- Each entry card:
  - Icon based on type (`education` | `work` | `certification` | `achievement`)
  - Date range (e.g., "2023 — Present")
  - Title (e.g., "Computer Engineering")
  - Organization (e.g., "KMUTT")
  - Description paragraph
  - Optional tech tags
- Framer Motion staggered reveal on scroll

**Data structure (`data/experience.ts`):**

```typescript
interface ExperienceEntry {
  type: 'education' | 'work' | 'certification' | 'achievement';
  dateRange: string;
  title: string;
  organization: string;
  description: string;
  techTags?: string[];
}
```

### 3.7 About Section (Restyled)

- Section label: `>_ about` in JetBrains Mono
- Profile photo: violet glow ring
- Bio content: keep existing, restyle text colors
- Add a "Currently" list:
  - Currently learning: [X]
  - Currently building: [X]
  - Currently reading: [X]
- Styled as monospace key-value pairs

### 3.8 Contact Section (Working Form)

- Section label: `>_ contact` in JetBrains Mono
- **ContactForm component (New):**
  - Fields: Name (text), Email (email), Message (textarea)
  - Client-side validation: required fields, email format regex
  - Submit via **EmailJS** (`@emailjs/browser` package)
  - States: idle, sending (spinner), success (green toast), error (red toast)
  - Styled inputs: dark background, violet border on focus
  - Submit button: violet outlined, fill on hover
- Below the form: existing contact info (email, phone, location) displayed as monospace text with icons

**Toast component (New):** Simple notification that auto-dismisses after 4 seconds. Success (green) or error (red). Positioned top-right fixed.

### 3.9 Blog System (New)

#### Homepage Blog Preview

- Section label: `>_ blog` in JetBrains Mono
- Placed between About and Contact
- Shows latest 3 posts as cards: title, date, excerpt, read time
- "View all posts" link to `/blog`

#### Blog Index (`/blog/page.tsx`)

- Lists all posts with title, date, excerpt, read time, tags
- Sorted by date descending
- Minimal layout with Navbar and Footer

#### Blog Post (`/blog/[slug]/page.tsx`)

- Full MDX rendering
- Code syntax highlighting via `rehype-pretty-code` with dark theme
- Reading time estimate (calculated from word count)
- Post metadata: title, date, tags, read time
- "Back to blog" link
- Uses `generateStaticParams` to pre-render all slugs at build time (preserves static export)

#### Content Structure

```
content/
  blog/
    hello-world.mdx        # Example first post
```

**MDX frontmatter:**

```yaml
---
title: "Post Title"
date: "2026-03-22"
excerpt: "Short description for cards"
tags: ["nextjs", "react"]
---
```

**Dependencies added:**
- `next-mdx-remote` — MDX rendering
- `rehype-pretty-code` — Code syntax highlighting
- `shiki` — Syntax highlighter engine
- `gray-matter` — Frontmatter parsing
- `reading-time` — Read time calculation
- `@emailjs/browser` — Contact form email sending

**Dependencies removed:**
- `@tsparticles/react`
- `@tsparticles/slim`

### 3.10 Footer (Restyled)

- Match new theme colors and typography
- Add blog link and key section links
- Social links with violet hover
- JetBrains Mono for footer text

## 4. Page Structure

### Home (`/`)

```
Navbar
Hero (with GridBackground)
Skills
Projects
Experience (NEW)
About
Blog Preview (NEW)
Contact (with form) (ENHANCED)
Footer
```

### Blog Index (`/blog`)

```
Navbar
Blog post list
Footer
```

### Blog Post (`/blog/[slug]`)

```
Navbar
Post content (MDX)
Footer
```

## 5. Data Files

| File | Status | Purpose |
|------|--------|---------|
| `data/projects.ts` | Extended | Add modal fields to existing projects |
| `data/skills.ts` | Unchanged | Skill list |
| `data/social.ts` | Unchanged | Social links |
| `data/experience.ts` | New | Timeline entries |

## 6. Configuration Changes

### tailwind.config.ts

- Replace blue color tokens with violet palette
- Add JetBrains Mono to font family config
- Update card-bg, card-border, glow tokens

### app/layout.tsx

- Add JetBrains Mono font import via `next/font/google`
- Update metadata colors if needed

### next.config.ts

- Keep `output: "export"`
- Keep `images.unoptimized: true`
- Remove skillicons.dev remote pattern if no longer needed (check)
- Add MDX support configuration if needed

### package.json

- Add: `@emailjs/browser`, `next-mdx-remote`, `rehype-pretty-code`, `shiki`, `gray-matter`, `reading-time`
- Remove: `@tsparticles/react`, `@tsparticles/slim`

## 7. Accessibility

- All images have descriptive alt text
- Modal: focus trap, Escape to close, aria-modal="true"
- Form: proper labels, aria-describedby for errors
- Color contrast: violet on dark meets WCAG AA (8B5CF6 on 09090b = 5.2:1)
- Keyboard navigation for all interactive elements
- Skip-to-content link in Navbar

## 8. Performance

- GridBackground is CSS-only (no JS particle library)
- Blog pages statically generated at build time
- Images optimized via next/image (unoptimized flag for static export)
- Dynamic imports for modal component (code split)
- Fonts: `display: swap` for both JetBrains Mono and Inter

## 9. Out of Scope

- Dark/light mode toggle (single dark theme)
- Multilingual support
- Analytics
- Authentication
- CMS integration
- Custom cursor effects
- GitHub activity widget

# Portfolio Next.js Redesign - Design Spec

## Overview

Redesign the existing React+Vite portfolio into a new Next.js project with an AI-themed visual identity. The existing project remains untouched. The new project lives in a separate directory (`C:\Users\kin\Documents\GitHub\Portfolio-Next`).

**Current state:** Single-page React 18 + Vite portfolio with Tailwind CSS, Typed.js, 5 sections (Hero, Skills, Projects, About, Contact), all content hardcoded in one 436-line `Home.jsx`.

**Target state:** Next.js 15 single-page portfolio with AI-themed design (blue/black), particle network background, Framer Motion animations, TypeScript, and modular component architecture.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 (App Router) | Framework, SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| Framer Motion | Scroll reveals, hover effects, staggered animations |
| tsparticles | Neural network particle background |
| Typed.js | Hero typing animation |
| Inter (next/font/google) | Typography |

## Project Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx          # Root layout (navbar, footer, fonts, metadata)
│   ├── page.tsx            # Single-page home (imports all sections)
│   └── globals.css         # Tailwind + custom CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar with scroll-aware active highlighting
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with particles + typed text
│   │   ├── Skills.tsx      # Skills icon grid
│   │   ├── Projects.tsx    # Project showcase cards
│   │   ├── About.tsx       # Bio section
│   │   └── Contact.tsx     # Contact info
│   └── ui/
│       ├── ParticleBackground.tsx  # tsparticles wrapper (client component)
│       ├── TypedText.tsx           # Typed.js wrapper (client component)
│       ├── GlowCard.tsx            # Reusable glowing card
│       └── SectionReveal.tsx       # Framer Motion whileInView wrapper
├── data/
│   ├── projects.ts         # Project data array
│   ├── skills.ts           # Skills list
│   └── social.ts           # Social links + contact info
├── public/
│   ├── images/             # All images copied from existing project
│   └── resume.pdf
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0f` | Page background (near-black with blue undertone) |
| Primary blue | `#00a2ff` | Main accent color |
| Secondary blue | `#0066cc` | Gradients, hover states |
| Glow blue | `#00a2ff33` | Translucent glows and shadows |
| Text primary | `#ffffff` | Headings, primary text |
| Text secondary | `#94a3b8` | Subtitles, descriptions (slate-400) |
| Card bg | `#111827` | Card backgrounds (gray-900, semi-transparent) |
| Card border | `#1e293b` | Card borders (slate-800, glows blue on hover) |

## Typography

- **Font:** Inter via `next/font/google` (zero layout shift)
- **Hero name:** Bold, 4xl-6xl, white, subtle blue text-shadow
- **Section headings:** Semi-bold, 3xl, white, small blue accent underline
- **Body text:** Regular weight, slate-400

## Particle Background

- tsparticles rendering a neural network effect across the full page
- Blue particles with connecting lines between nearby nodes
- Subtle mouse interaction (gentle repel/attract near cursor)
- Semi-transparent so content remains readable
- Particle density reduces on mobile for performance
- Renders behind all content as a fixed/absolute layer

## Section Designs

### Navbar
- Fixed top, dark semi-transparent background with `backdrop-blur`
- Brand text "Kin" on left
- Nav links on right: Home, Skills, Projects, About, Contact
- Active section highlighted in blue (scroll-aware via IntersectionObserver)
- Smooth scroll on click

### Hero Section
- Full viewport height (`min-h-screen`)
- Particle background visible behind
- Profile image: circular with blue ring/glow border
- Name "Kin" - large bold text, fades in first
- TypedText below: cycles "Full Stack Developer" / "Software Engineer" with blue cursor
- Social icons row: GitHub, Facebook, Instagram, LinkedIn - white, glow blue on hover
- Two CTA buttons: "Hire Me" (filled blue) and "Resume" (outlined blue), both with hover glow
- Animated scroll-down chevron at bottom

### Skills Section
- Heading "My Skills" with blue underline accent
- Grid of skill icons from skillicons.dev
- Skills: C, Python, Dart, JavaScript, PHP, HTML, CSS, React, Node.js, Express.js, Flutter, Flask, MySQL, Git
- Each icon in a GlowCard tile
- Staggered fade-in on scroll

### Projects Section
- Heading "Projects" with blue underline
- Responsive grid: 1 col mobile, 2-3 col desktop
- Each project in a GlowCard: image (top), title, description, tech stack tags (blue-outlined pills), GitHub/demo link buttons
- Cards stagger in on scroll

**Project data (same as current):**

1. **Wanjaii** - Dating app with chat and search. Tech: Flutter, MySQL. Links: GitHub, YouTube demo.
2. **ServiceX** - Technician queue/matching app. Tech: React Native, Node.js, Express.js, MySQL. Links: GitHub.
3. **Hotel Management** - Hotel reservation & financial tracking. Tech: HTML, CSS, JavaScript, PHP, MySQL. Links: GitHub.

### About Section
- Heading "About Me" with blue underline
- Two-column layout: profile image + bio text
- Bio: Rujikorn Rujitanont (Kin), 21 years old, 3rd year KMUTT Computer Engineering International Program
- Interests: learning, gaming, video making, app/website development
- Wrapped in a GlowCard

### Contact Section
- Heading "Contact" with blue underline
- Three info items in a row: Email, Phone, Location
- Icons styled in blue, text in white/slate
- Clean and minimal layout

### Footer
- Slim dark footer
- Social icons row (same as hero)
- Copyright: "kinrujikorn - All rights reserved"

## Animations

| Element | Animation | Library | Duration |
|---------|-----------|---------|----------|
| Hero name | Fade-in + slide-up | Framer Motion | 0.5s |
| Typed text | Starts after name appears | Typed.js | continuous |
| Sections | Fade-in-up on scroll into view | Framer Motion `whileInView` | 0.5s |
| Project cards | Staggered fade-in | Framer Motion | 0.1s stagger |
| Skills grid | Staggered fade-in | Framer Motion | 0.05s stagger |
| Card hover | Border glow + scale 1.02x | Framer Motion / CSS | 0.2s |
| Social icons | Scale up + blue tint on hover | CSS transition | 0.2s |
| Scroll chevron | Bounce animation | CSS keyframes | continuous |
| Particles | Continuous ambient motion | tsparticles | continuous |

## Assets

All images copied from the existing project's `public/images/` directory:
- Contact-Profile.jpg, Profile.jpg
- wanjaii.png, servicex.png, hotelmanagement.png
- github.png, facebook.png, instagram.png, linkedin.png
- email.png, download.png, demo.png
- resume.pdf

## Data Architecture

Content extracted from hardcoded JSX into typed data files:

```typescript
// data/projects.ts
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

// data/skills.ts
interface Skill {
  name: string;
  icon: string; // skillicons.dev identifier
}

// data/social.ts
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
```

## Client vs Server Components

| Component | Rendering | Reason |
|-----------|-----------|--------|
| layout.tsx | Server | Static layout shell |
| page.tsx | Server | Assembles sections |
| Navbar.tsx | Client | Scroll detection (IntersectionObserver) |
| Footer.tsx | Server | Static content |
| Hero.tsx | Client | Typed.js, Framer Motion |
| Skills.tsx | Client | Framer Motion animations |
| Projects.tsx | Client | Framer Motion animations |
| About.tsx | Client | Framer Motion animations |
| Contact.tsx | Client | Framer Motion animations |
| ParticleBackground.tsx | Client | tsparticles (canvas/DOM) |
| TypedText.tsx | Client | Typed.js (DOM manipulation) |
| GlowCard.tsx | Client | Framer Motion hover effects |
| SectionReveal.tsx | Client | Framer Motion whileInView |

## Performance Considerations

- tsparticles: reduce particle count on mobile (detect via window width)
- Images: use Next.js `<Image>` component for automatic optimization
- Font: Inter loaded via `next/font/google` for zero CLS
- Framer Motion: use `whileInView` with `once: true` so animations only play once per session
- Bundle: dynamic import ParticleBackground to avoid blocking initial render

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
| Tailwind CSS 3.4 | Styling |
| Framer Motion | Scroll reveals, hover effects, staggered animations |
| @tsparticles/react + @tsparticles/slim | Neural network particle background |
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
- Two CTA buttons: "Hire Me" (filled blue, links to LinkedIn profile) and "Resume" (outlined blue, downloads `resume.pdf`), both with hover glow
- Animated scroll-down chevron at bottom (scrolls to Skills section)

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

Images copied from the existing project:
- `src/Profile.jpg` → `public/images/Profile.jpg` (hero profile image, note: original lives in `src/`, not `public/`)
- `public/images/Contact-Profile.jpg` (contact section profile image)
- `public/images/wanjaii.png`, `servicex.png`, `hotelmanagement.png` (project screenshots)
- `public/images/github.png`, `facebook.png`, `instagram.png`, `linkedin.png` (social icons)
- `public/images/email.png`, `download.png`, `demo.png` (UI icons)
- `public/images/resume.pdf` → `public/resume.pdf` (resume download)

## Data Architecture

Content extracted from hardcoded JSX into typed data files.

### data/projects.ts

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "wanjaii",
    title: "Wanjaii Project",
    description: "We develop dating apps that include a chat system for communication and a search system for finding people. We use Flutter for development and MySQL for the database.",
    techStack: ["Flutter", "MySQL"],
    image: "/images/wanjaii.png",
    githubUrl: "https://github.com/kinrujikorn/wanjaii",
    demoUrl: "https://youtu.be/wxxlVmyokk8",
  },
  {
    id: "servicex",
    title: "ServiceX Project",
    description: "In this project, we are developing an app similar to a Technician Queue. It is an application that facilitates the process of finding technicians or the agency we need. We use React Native as the main language for the front end and Node.js with Express.js for the backend, utilizing MySQL as the database to store data.",
    techStack: ["React Native", "Node.js", "Express.js", "MySQL"],
    image: "/images/servicex.png",
    githubUrl: "https://github.com/kinrujikorn/ServiceX",
  },
  {
    id: "hotelmanagement",
    title: "Hotel Management Project",
    description: "We are creating a website for a hotel management system that includes features like hotel room reservations, financial tracking, and various data entry systems for hotel-related information. To build this, we are using HTML, CSS, and JavaScript for the user interface, and PHP and MySQL for the backend to handle data and process.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/hotelmanagement.png",
    githubUrl: "https://github.com/kinrujikorn/The-Saturn-Hotel-Management",
  },
];
```

### data/skills.ts

```typescript
export const skills = [
  "c", "python", "dart", "javascript", "php", "html", "css",
  "react", "nodejs", "expressjs", "flutter", "flask", "mysql", "git",
];
// Rendered via: https://skillicons.dev/icons?i={skills.join(",")}&perline=7
```

### data/social.ts

```typescript
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

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/kinrujikorn", icon: "/images/github.png" },
  { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=100009686763652", icon: "/images/facebook.png" },
  { platform: "Instagram", url: "https://www.instagram.com/kinrujikorn/", icon: "/images/instagram.png" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/", icon: "/images/linkedin.png" },
];

export const contactInfo: ContactInfo = {
  email: "rujikornkin96@gmail.com",
  phone: "098-936-9396",
  location: "Bangkok, Thailand",
};
```

### Typed.js Configuration

```typescript
{
  strings: ["Full Stack Developer", "Software Engineer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
}
```

## Tailwind Theme Configuration

Register the custom color tokens as Tailwind theme extensions in `tailwind.config.ts`:

```typescript
// tailwind.config.ts
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        "primary-blue": "#00a2ff",
        "secondary-blue": "#0066cc",
        "glow-blue": "#00a2ff33",
        "card-bg": "#111827",
        "card-border": "#1e293b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

## Responsive Breakpoints

Follow Tailwind's default breakpoints:
- `sm` (640px): Stack to single column
- `md` (768px): 2-column layouts
- `lg` (1024px): Full desktop layout, 3-column project grid
- Particle count: 80 on desktop, 30 on mobile (< 768px)

## SEO Metadata

Defined in `layout.tsx`:
- **Title:** "Kin | Full Stack Developer"
- **Description:** "Portfolio of Rujikorn Rujitanont (Kin) - Full Stack Developer & Software Engineer"
- **Open Graph:** title, description, profile image
- **Favicon:** use existing vite.svg or replace with custom

## Client vs Server Components

Section components (`About.tsx`, `Contact.tsx`, `Skills.tsx`, `Projects.tsx`) are Server Components that render static content. They wrap their content in the `<SectionReveal>` client component for animation. Only components that need browser APIs or Framer Motion hooks directly are Client Components.

| Component | Rendering | Reason |
|-----------|-----------|--------|
| layout.tsx | Server | Static layout shell |
| page.tsx | Server | Assembles sections |
| Navbar.tsx | Client | Scroll detection (IntersectionObserver) |
| Footer.tsx | Server | Static content |
| Hero.tsx | Client | Typed.js, Framer Motion, particle integration |
| Skills.tsx | Server | Static content, wrapped in SectionReveal |
| Projects.tsx | Server | Static content, wrapped in SectionReveal |
| About.tsx | Server | Static content, wrapped in SectionReveal |
| Contact.tsx | Server | Static content, wrapped in SectionReveal |
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

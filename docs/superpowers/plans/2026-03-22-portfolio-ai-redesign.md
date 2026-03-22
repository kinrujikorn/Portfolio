# Portfolio AI-Themed Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio with an AI-themed minimalist aesthetic (violet/purple accents, JetBrains Mono typography, animated grid background) and add four high-impact features: working contact form, experience timeline, project detail modals, and MDX blog.

**Architecture:** Incremental reskin of existing Next.js static-export app. Existing component structure is preserved — colors, fonts, and UI patterns are updated across all files. New sections (Experience, Blog preview) are added as components and inserted into the home page. Blog gets dedicated routes under `app/blog/`. Contact form uses EmailJS for client-side email sending.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 3, Framer Motion, Typed.js, EmailJS, next-mdx-remote, rehype-pretty-code, shiki, gray-matter, reading-time

**Spec:** `docs/superpowers/specs/2026-03-22-portfolio-ai-redesign-design.md`

---

## File Structure

### Files to Create

| File | Purpose |
|------|---------|
| `components/ui/GridBackground.tsx` | CSS animated grid background (replaces ParticleBackground) |
| `components/ui/ProjectModal.tsx` | Full-screen project detail modal overlay |
| `components/ui/Toast.tsx` | Auto-dismissing success/error notification |
| `components/ui/ContactForm.tsx` | EmailJS-powered contact form |
| `components/ui/TimelineItem.tsx` | Single timeline entry card |
| `components/ui/BlogCard.tsx` | Blog post preview card |
| `components/sections/Experience.tsx` | Experience timeline section |
| `components/sections/BlogPreview.tsx` | Latest 3 blog posts on homepage |
| `data/experience.ts` | Timeline entries data |
| `lib/blog.ts` | MDX loading utilities (frontmatter, slugs, content) |
| `content/blog/hello-world.mdx` | Starter blog post |
| `app/blog/page.tsx` | Blog index page |
| `app/blog/[slug]/page.tsx` | Individual blog post page |

### Files to Modify

| File | Changes |
|------|---------|
| `tailwind.config.ts` | Replace blue palette with violet, add JetBrains Mono font |
| `app/globals.css` | Update body colors, add grid animation keyframes, cursor blink |
| `app/layout.tsx` | Add JetBrains Mono font import, update CSS variables |
| `app/page.tsx` | Add Experience, BlogPreview sections |
| `components/layout/Navbar.tsx` | Restyle: `kin.dev` logo, violet active, green dot, add experience/blog nav items |
| `components/layout/Footer.tsx` | Restyle: violet hover, add blog/section links |
| `components/sections/Hero.tsx` | Replace ParticleBackground with GridBackground, violet colors |
| `components/sections/Skills.tsx` | Restyle: violet accents, monospace heading |
| `components/sections/Projects.tsx` | Restyle + add modal trigger on card click |
| `components/sections/About.tsx` | Restyle: violet accents, add "Currently" list |
| `components/sections/Contact.tsx` | Add ContactForm component, restyle |
| `components/ui/GlowCard.tsx` | Update blue refs to violet |
| `components/ui/TypedText.tsx` | Update typed strings |
| `data/projects.ts` | Extend interface: rename `id` to `slug`, add modal fields |
| `data/social.ts` | No data changes, styling changes in consuming components |
| `package.json` | Add/remove dependencies |
| `next.config.ts` | Keep static export, no changes needed |

### Files to Delete

| File | Reason |
|------|--------|
| `components/ui/ParticleBackground.tsx` | Replaced by GridBackground |

---

## Task 1: Update Design System (Tailwind + Fonts + CSS)

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update Tailwind color palette**

Replace the blue color tokens with the violet palette in `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: "#18181b",
        "surface-border": "#27272a",
        primary: "#8B5CF6",
        "primary-light": "#A78BFA",
        glow: "rgba(139, 92, 246, 0.15)",
        "text-primary": "#f4f4f5",
        "text-secondary": "#a1a1aa",
        "status-green": "#22c55e",
        "card-bg": "#18181b",
        "card-border": "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
```

- [ ] **Step 1b: Install @tailwindcss/typography**

```bash
npm install -D @tailwindcss/typography
```

This plugin provides the `prose` classes used in blog post rendering.

- [ ] **Step 2: Add JetBrains Mono to layout.tsx**

Update `app/layout.tsx` — add JetBrains Mono import and CSS variable:

```typescript
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Kin | Full Stack Developer",
  description:
    "Portfolio of Rujikorn Rujitanont (Kin) - Full Stack Developer & Software Engineer",
  openGraph: {
    title: "Kin | Full Stack Developer",
    description:
      "Portfolio of Rujikorn Rujitanont (Kin) - Full Stack Developer & Software Engineer",
    images: ["/images/Profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Update globals.css**

Replace `app/globals.css` with new theme base styles and animations:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #09090b;
  color: #f4f4f5;
}

@keyframes bounce-chevron {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

.animate-bounce-chevron {
  animation: bounce-chevron 2s ease-in-out infinite;
}

@keyframes grid-pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-grid-pulse {
  animation: grid-pulse 4s ease-in-out infinite;
}

@keyframes blink-cursor {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink-cursor 1s step-end infinite;
}
```

- [ ] **Step 4: Verify dev server starts**

Run: `npm run dev`
Expected: Server starts without errors, page loads with new background color `#09090b`

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "feat: update design system — violet palette, JetBrains Mono, grid animations"
```

---

## Task 2: Create GridBackground + Restyle GlowCard

**Files:**
- Create: `components/ui/GridBackground.tsx`
- Modify: `components/ui/GlowCard.tsx`
- Delete: `components/ui/ParticleBackground.tsx`

- [ ] **Step 1: Create GridBackground component**

Create `components/ui/GridBackground.tsx`:

```tsx
export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
```

- [ ] **Step 2: Update GlowCard to violet**

Replace all blue references in `components/ui/GlowCard.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GlowCard({ children, className = "", onClick }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`bg-surface/80 border border-surface-border rounded-xl p-6
        hover:border-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
        transition-colors duration-200 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Delete ParticleBackground**

```bash
rm components/ui/ParticleBackground.tsx
```

- [ ] **Step 4: Commit**

```bash
git add components/ui/GridBackground.tsx components/ui/GlowCard.tsx
git rm components/ui/ParticleBackground.tsx
git commit -m "feat: add GridBackground, update GlowCard to violet, remove ParticleBackground"
```

---

## Task 3: Restyle Navbar

**Files:**
- Modify: `components/layout/Navbar.tsx`

- [ ] **Step 1: Update Navbar**

Replace `components/layout/Navbar.tsx` with restyled version — `kin.dev` logo in monospace, green status dot, violet active state, new nav items for Experience and Blog:

```tsx
"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ href }) => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 font-mono text-lg font-bold text-text-primary hover:text-primary transition-colors">
          <span className="inline-block w-2 h-2 rounded-full bg-status-green" />
          kin.dev
        </a>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <li key={id}>
                <a
                  href={href}
                  className={`font-mono text-sm transition-colors ${
                    activeSection === id
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-mono text-sm transition-colors ${
                      activeSection === id
                        ? "text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Verify navbar renders**

Run: `npm run dev`
Expected: Navbar shows `kin.dev` with green dot, violet active link, new Experience and Blog items

- [ ] **Step 3: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat: restyle Navbar — kin.dev logo, violet accents, green status dot"
```

---

## Task 4: Restyle Hero Section

**Files:**
- Modify: `components/sections/Hero.tsx`
- Modify: `components/ui/TypedText.tsx`

- [ ] **Step 1: Update TypedText for monospace cursor**

No code change needed — the cursor is handled by Typed.js. The font change comes from the parent `className`. Keep TypedText as-is.

- [ ] **Step 2: Update Hero.tsx**

Replace `components/sections/Hero.tsx` — swap ParticleBackground for GridBackground, violet colors, monospace fonts:

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypedText from "@/components/ui/TypedText";
import GridBackground from "@/components/ui/GridBackground";
import { socialLinks } from "@/data/social";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <GridBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 relative z-10"
      >
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(139,92,246,0.3)]">
          <Image
            src="/images/Profile.jpg"
            alt="Kin - Full Stack Developer"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="font-mono text-4xl md:text-6xl font-bold text-text-primary" style={{ textShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}>
          Hi, I&apos;m Kin
        </h1>

        {/* Typed Text */}
        <p className="font-mono text-2xl md:text-4xl font-bold text-primary h-12">
          <TypedText strings={["Full Stack Developer", "Software Engineer", "Building the future with code"]} />
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125"
              aria-label={link.platform}
            >
              <Image
                src={link.icon}
                alt={link.platform}
                width={48}
                height={48}
                className="rounded-full hover:shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-shadow"
              />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download="Rujikorn_Rujitanont_Resume.pdf"
            className="font-mono px-8 py-3 border-2 border-surface-border text-text-secondary font-bold rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Chevron */}
      <a
        href="#skills"
        className="absolute bottom-8 animate-bounce-chevron text-primary"
        aria-label="Scroll to skills"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
```

- [ ] **Step 3: Verify Hero renders**

Run: `npm run dev`
Expected: Hero shows animated grid background, violet glow on image, monospace text, violet CTA buttons

- [ ] **Step 4: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: restyle Hero — GridBackground, violet accents, monospace typography"
```

---

## Task 5: Restyle Skills, About, Footer

**Files:**
- Modify: `components/sections/Skills.tsx`
- Modify: `components/sections/About.tsx`
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Update Skills.tsx**

Replace heading with monospace `>_` prefix, update color references:

```tsx
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlowCard className="flex justify-center">
            <Image
              src={`https://skillicons.dev/icons?i=${skills.join(",")}&perline=7`}
              alt="Skills: C, Python, Dart, JavaScript, PHP, HTML, CSS, React, Node.js, Express.js, Flutter, Flask, MySQL, Git"
              width={490}
              height={140}
              unoptimized
            />
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update About.tsx**

Restyle with violet accents and add "Currently" list:

```tsx
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> about
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlowCard className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Image
                src="/images/Contact-Profile.jpg"
                alt="Kin"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-text-secondary leading-relaxed">
                Hello, my name is Rujikorn Rujitanont, but you can call me Kin.
                I am currently 21 years old. My hobbies include learning new
                things, keeping up with computer trends, playing video games,
                and making videos. I am particularly interested in website and
                app development.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                I am a third-year student enrolled in the Computer Engineering
                International Program at KMUTT. I have experience in
                process-oriented tasks, am adept at collaborating with others,
                and I&apos;m committed to continuous self-improvement.
              </p>

              {/* Currently */}
              <div className="mt-6 space-y-2 font-mono text-sm">
                <p><span className="text-primary">currently_learning:</span> <span className="text-text-secondary">"AI & Machine Learning"</span></p>
                <p><span className="text-primary">currently_building:</span> <span className="text-text-secondary">"This portfolio"</span></p>
                <p><span className="text-primary">currently_exploring:</span> <span className="text-text-secondary">"Cloud Architecture"</span></p>
              </div>
            </div>
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update Footer.tsx**

Restyle with violet hovers, add blog link:

```tsx
import Image from "next/image";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label={link.platform}
            >
              <Image
                src={link.icon}
                alt={link.platform}
                width={36}
                height={36}
                className="rounded-full hover:shadow-[0_0_12px_rgba(139,92,246,0.4)] transition-shadow"
              />
            </a>
          ))}
        </div>
        <div className="flex gap-6 font-mono text-xs text-text-secondary">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="font-mono text-text-secondary text-xs">
          &copy; {new Date().getFullYear()} kin.dev &mdash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Verify all sections render**

Run: `npm run dev`
Expected: Skills, About, Footer all show violet accents, monospace headings with `>_` prefix

- [ ] **Step 5: Commit**

```bash
git add components/sections/Skills.tsx components/sections/About.tsx components/layout/Footer.tsx
git commit -m "feat: restyle Skills, About, Footer with violet theme and monospace headings"
```

---

## Task 6: Extend Project Data + Create ProjectModal

**Files:**
- Modify: `data/projects.ts`
- Create: `components/ui/ProjectModal.tsx`

- [ ] **Step 1: Extend project data**

Replace `data/projects.ts` with extended interface (rename `id` to `slug`, add modal fields):

```typescript
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  techStack: string[];
  techDetails: { name: string; role: string }[];
  challenges: string;
  learnings: string;
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "wanjaii",
    title: "Wanjaii Project",
    description:
      "A dating app with chat system and search features, built with Flutter and MySQL.",
    longDescription:
      "We developed a full-featured dating application that includes a real-time chat system for communication and an intelligent search system for finding compatible people. The app features user authentication, profile management, matching algorithms, and push notifications.",
    image: "/images/wanjaii.png",
    screenshots: ["/images/wanjaii.png"],
    techStack: ["Flutter", "MySQL"],
    techDetails: [
      { name: "Flutter", role: "Cross-platform mobile UI framework" },
      { name: "MySQL", role: "Relational database for user data and matches" },
    ],
    challenges: "Implementing real-time chat with efficient message delivery and handling concurrent user matching requests while maintaining database performance.",
    learnings: "Gained deep understanding of Flutter state management, real-time communication patterns, and database optimization for social applications.",
    githubUrl: "https://github.com/kinrujikorn/wanjaii",
    demoUrl: "https://youtu.be/wxxlVmyokk8",
  },
  {
    slug: "servicex",
    title: "ServiceX Project",
    description:
      "A technician queue app connecting users with service providers, built with React Native and Node.js.",
    longDescription:
      "ServiceX is an application that facilitates the process of finding technicians or service agencies. Users can browse available technicians, book appointments, track queue status, and rate service quality. The backend handles real-time queue management and notification delivery.",
    image: "/images/servicex.png",
    screenshots: ["/images/servicex.png"],
    techStack: ["React Native", "Node.js", "Express.js", "MySQL"],
    techDetails: [
      { name: "React Native", role: "Cross-platform mobile frontend" },
      { name: "Node.js", role: "Server-side runtime environment" },
      { name: "Express.js", role: "REST API framework" },
      { name: "MySQL", role: "Database for users, bookings, and queue data" },
    ],
    challenges: "Building a responsive queue management system that updates in real-time across multiple clients while handling edge cases like cancellations and rescheduling.",
    learnings: "Learned full-stack mobile development with React Native, RESTful API design, and real-time state synchronization between client and server.",
    githubUrl: "https://github.com/kinrujikorn/ServiceX",
  },
  {
    slug: "hotelmanagement",
    title: "Hotel Management Project",
    description:
      "A hotel management system with room reservations, financial tracking, and data management.",
    longDescription:
      "A comprehensive hotel management website featuring room reservation systems, financial tracking dashboards, and various data entry systems for hotel operations. The system supports multiple user roles (admin, staff, guest) with appropriate access controls and reporting capabilities.",
    image: "/images/hotelmanagement.png",
    screenshots: ["/images/hotelmanagement.png"],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    techDetails: [
      { name: "HTML/CSS", role: "Frontend structure and styling" },
      { name: "JavaScript", role: "Client-side interactivity and validation" },
      { name: "PHP", role: "Server-side logic and API endpoints" },
      { name: "MySQL", role: "Database for reservations, finances, and guests" },
    ],
    challenges: "Designing a flexible reservation system that handles overlapping bookings, room availability calculations, and financial reporting across different time periods.",
    learnings: "Gained experience with traditional web development stack, database schema design for complex business logic, and role-based access control implementation.",
    githubUrl: "https://github.com/kinrujikorn/The-Saturn-Hotel-Management",
  },
];
```

- [ ] **Step 2: Create ProjectModal component**

Create `components/ui/ProjectModal.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-surface border border-surface-border rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start p-6 border-b border-surface-border">
              <h2 className="font-mono text-2xl font-bold text-text-primary">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary transition-colors p-1"
                aria-label="Close modal"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Screenshot */}
              <div className="rounded-lg overflow-hidden border border-surface-border">
                <Image
                  src={project.screenshots[0] || project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="font-mono text-sm text-primary mb-2">&gt;_ description</h3>
                <p className="text-text-secondary leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="font-mono text-sm text-primary mb-3">&gt;_ tech_stack</h3>
                <div className="space-y-2">
                  {project.techDetails.map((tech) => (
                    <div key={tech.name} className="flex gap-3">
                      <span className="font-mono text-sm text-text-primary min-w-[120px]">{tech.name}</span>
                      <span className="text-sm text-text-secondary">{tech.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="font-mono text-sm text-primary mb-2">&gt;_ challenges</h3>
                <p className="text-text-secondary leading-relaxed">{project.challenges}</p>
              </div>

              {/* Learnings */}
              <div>
                <h3 className="font-mono text-sm text-primary mb-2">&gt;_ learnings</h3>
                <p className="text-text-secondary leading-relaxed">{project.learnings}</p>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
                >
                  GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm px-6 py-2 border-2 border-surface-border text-text-secondary rounded-lg hover:border-primary hover:text-primary transition-all"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add data/projects.ts components/ui/ProjectModal.tsx
git commit -m "feat: extend project data for modals, create ProjectModal component"
```

---

## Task 7: Restyle Projects Section + Wire Modal

**Files:**
- Modify: `components/sections/Projects.tsx`

- [ ] **Step 1: Update Projects.tsx**

Add modal state, restyle cards with violet theme, wire click-to-open:

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.1}>
              <GlowCard
                className="flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-mono text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 border border-primary/30 text-primary-light rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <span className="font-mono text-xs text-text-secondary">
                    Click for details &rarr;
                  </span>
                </div>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
```

- [ ] **Step 2: Verify project cards and modal**

Run: `npm run dev`
Expected: Click a project card → modal opens with full details. Escape/click-outside closes it.

- [ ] **Step 3: Commit**

```bash
git add components/sections/Projects.tsx
git commit -m "feat: restyle Projects section with modal integration"
```

---

## Task 8: Create Experience Timeline Section

**Files:**
- Create: `data/experience.ts`
- Create: `components/ui/TimelineItem.tsx`
- Create: `components/sections/Experience.tsx`

- [ ] **Step 1: Create experience data**

Create `data/experience.ts`:

```typescript
export interface ExperienceEntry {
  type: "education" | "work" | "certification" | "achievement";
  dateRange: string;
  title: string;
  organization: string;
  description: string;
  techTags?: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    type: "education",
    dateRange: "2023 — Present",
    title: "Computer Engineering (International Program)",
    organization: "King Mongkut's University of Technology Thonburi (KMUTT)",
    description:
      "Third-year student specializing in software development, web technologies, and mobile application development. Active participant in university tech projects and hackathons.",
    techTags: ["Python", "JavaScript", "React", "Flutter"],
  },
  {
    type: "achievement",
    dateRange: "2024",
    title: "Wanjaii — Dating App",
    organization: "University Project",
    description:
      "Led the development of a cross-platform dating application with real-time chat and intelligent matching systems.",
    techTags: ["Flutter", "MySQL"],
  },
  {
    type: "achievement",
    dateRange: "2024",
    title: "ServiceX — Technician Queue App",
    organization: "University Project",
    description:
      "Built a full-stack service booking platform connecting users with technicians, featuring real-time queue management.",
    techTags: ["React Native", "Node.js", "Express.js", "MySQL"],
  },
  {
    type: "achievement",
    dateRange: "2023",
    title: "Hotel Management System",
    organization: "University Project",
    description:
      "Developed a comprehensive hotel management website with room reservations, financial tracking, and role-based access control.",
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];
```

- [ ] **Step 2: Create TimelineItem component**

Create `components/ui/TimelineItem.tsx`:

```tsx
import SectionReveal from "@/components/ui/SectionReveal";
import { ExperienceEntry } from "@/data/experience";

const typeIcons: Record<ExperienceEntry["type"], string> = {
  education: "🎓",
  work: "💼",
  certification: "📜",
  achievement: "🏆",
};

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <SectionReveal delay={index * 0.1}>
      <div className="relative flex md:justify-center">
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-6 md:left-1/2 top-12 bottom-0 w-px bg-surface-border md:-translate-x-px" />
        )}

        {/* Timeline dot */}
        <div className="absolute left-6 md:left-1/2 top-5 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 z-10" />

        {/* Card */}
        <div className={`ml-14 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
          <div className="bg-surface/80 border border-surface-border rounded-xl p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{typeIcons[entry.type]}</span>
              <span className="font-mono text-xs text-primary">{entry.dateRange}</span>
            </div>
            <h3 className="font-mono text-base font-bold text-text-primary mb-1">
              {entry.title}
            </h3>
            <p className="font-mono text-sm text-text-secondary mb-3">{entry.organization}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{entry.description}</p>
            {entry.techTags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {entry.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary-light rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
```

- [ ] **Step 3: Create Experience section**

Create `components/sections/Experience.tsx`:

```tsx
import SectionReveal from "@/components/ui/SectionReveal";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <div className="space-y-8">
          {experiences.map((entry, index) => (
            <TimelineItem
              key={`${entry.type}-${entry.dateRange}-${entry.title}`}
              entry={entry}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add data/experience.ts components/ui/TimelineItem.tsx components/sections/Experience.tsx
git commit -m "feat: add Experience timeline section with data-driven entries"
```

---

## Task 9: Create Contact Form with EmailJS

**Files:**
- Create: `components/ui/Toast.tsx`
- Create: `components/ui/ContactForm.tsx`
- Modify: `components/sections/Contact.tsx`

- [ ] **Step 1: Install EmailJS**

```bash
npm install @emailjs/browser
```

- [ ] **Step 2: Create Toast component**

Create `components/ui/Toast.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          className={`fixed top-20 right-4 z-[200] px-6 py-3 rounded-lg border font-mono text-sm ${
            type === "success"
              ? "bg-status-green/10 border-status-green/30 text-status-green"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 3: Create ContactForm component**

Create `components/ui/ContactForm.tsx`:

```tsx
"use client";

import { useState, FormEvent, useCallback } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

// EmailJS configuration — set these in .env.local:
// NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
// Sign up at https://www.emailjs.com/ to get these values
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setToast({ message: "Message sent successfully!", type: "success", visible: true });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setToast({ message: "Failed to send message. Please try again.", type: "error", visible: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="font-mono text-sm text-text-secondary block mb-1">
            name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-sm text-text-secondary block mb-1">
            email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-mono text-sm text-text-secondary block mb-1">
            message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="font-mono w-full px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "sending..." : "send_message()"}
        </button>
      </form>
      <Toast message={toast.message} type={toast.type} visible={toast.visible} onClose={closeToast} />
    </>
  );
}
```

**Note:** Create a `.env.local` file with your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
Get these values from https://www.emailjs.com/ after creating a free account. The `NEXT_PUBLIC_` prefix makes them available client-side (EmailJS public keys are designed to be public).

- [ ] **Step 4: Update Contact.tsx**

Replace `components/sections/Contact.tsx` with form + info layout:

```tsx
import SectionReveal from "@/components/ui/SectionReveal";
import ContactForm from "@/components/ui/ContactForm";
import { contactInfo } from "@/data/social";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> contact
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <SectionReveal delay={0.1}>
            <ContactForm />
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-mono text-sm text-text-secondary">email</p>
                  <p className="text-text-primary">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-mono text-sm text-text-secondary">phone</p>
                  <p className="text-text-primary">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-mono text-sm text-text-secondary">location</p>
                  <p className="text-text-primary">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Verify contact form renders**

Run: `npm run dev`
Expected: Contact section shows form on left, info on right. Form validates required fields. Submit shows toast (will fail with placeholder IDs — expected).

- [ ] **Step 6: Commit**

```bash
git add components/ui/Toast.tsx components/ui/ContactForm.tsx components/sections/Contact.tsx
git commit -m "feat: add working contact form with EmailJS and toast notifications"
```

---

## Task 10: Create Blog System (MDX)

**Files:**
- Create: `lib/blog.ts`
- Create: `content/blog/hello-world.mdx`
- Create: `components/ui/BlogCard.tsx`
- Create: `components/sections/BlogPreview.tsx`
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Install blog dependencies**

```bash
npm install next-mdx-remote gray-matter reading-time rehype-pretty-code shiki
```

- [ ] **Step 2: Create blog utility library**

Create `lib/blog.ts`:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      readTime: stats.text,
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    readTime: stats.text,
    content,
  };
}
```

- [ ] **Step 3: Create starter blog post**

Create `content/blog/hello-world.mdx`:

```mdx
---
title: "Hello World — My First Blog Post"
date: "2026-03-22"
excerpt: "Welcome to my blog! I'll be sharing my journey as a full-stack developer, from university projects to building real-world applications."
tags: ["personal", "introduction"]
---

# Hello World

Welcome to my blog! I'm Kin, a third-year Computer Engineering student at KMUTT, and this is where I'll share my journey in software development.

## What to expect

I'll be writing about:

- **Projects** — Deep dives into what I'm building and the technical decisions behind them
- **Learning** — New technologies and concepts I'm exploring
- **Tips** — Things I wish I knew earlier as a developer

## My stack

I primarily work with:

```javascript
const myStack = {
  frontend: ["React", "React Native", "Flutter"],
  backend: ["Node.js", "Express.js", "PHP"],
  database: ["MySQL"],
  tools: ["Git", "VS Code", "Figma"],
};
```

Stay tuned for more posts. Thanks for reading!
```

- [ ] **Step 4: Create BlogCard component**

Create `components/ui/BlogCard.tsx`:

```tsx
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="block bg-surface/80 border border-surface-border rounded-xl p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-primary">{post.date}</span>
        <span className="text-surface-border">|</span>
        <span className="font-mono text-xs text-text-secondary">{post.readTime}</span>
      </div>
      <h3 className="font-mono text-lg font-bold text-text-primary mb-2">{post.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary-light rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
```

- [ ] **Step 5: Create BlogPreview section for homepage**

Create `components/sections/BlogPreview.tsx`:

```tsx
import SectionReveal from "@/components/ui/SectionReveal";
import BlogCard from "@/components/ui/BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-mono text-3xl font-semibold text-text-primary text-center mb-2">
            <span className="text-primary">&gt;_</span> blog
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <SectionReveal key={post.slug} delay={index * 0.1}>
              <BlogCard post={post} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-8">
            <a
              href="/blog"
              className="font-mono text-sm text-primary hover:text-primary-light transition-colors"
            >
              view_all_posts() &rarr;
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create blog index page**

Create `app/blog/page.tsx`:

```tsx
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/ui/BlogCard";

export const metadata = {
  title: "Blog | kin.dev",
  description: "Thoughts on software development, projects, and learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mono text-4xl font-bold text-text-primary mb-2">
          <span className="text-primary">&gt;_</span> blog
        </h1>
        <p className="text-text-secondary mb-12">
          Thoughts on software development, projects, and learning.
        </p>

        {posts.length === 0 ? (
          <p className="font-mono text-text-secondary">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Create individual blog post page**

Create `app/blog/[slug]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | kin.dev`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <a
          href="/blog"
          className="font-mono text-sm text-primary hover:text-primary-light transition-colors mb-8 inline-block"
        >
          &larr; back_to_blog()
        </a>

        <div className="mb-8">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-text-secondary">
            <span className="font-mono text-sm">{post.date}</span>
            <span className="text-surface-border">|</span>
            <span className="font-mono text-sm">{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary-light rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert prose-violet max-w-none
          prose-headings:font-mono prose-headings:text-text-primary
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-light
          prose-code:text-primary-light prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-surface prose-pre:border prose-pre:border-surface-border prose-pre:rounded-xl
          prose-strong:text-text-primary
          prose-li:text-text-secondary
        ">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypePrettyCode, { theme: "github-dark-dimmed" }],
                ],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
```

- [ ] **Step 8: Verify blog builds**

Run: `npm run dev`
Expected: `/blog` shows the hello-world post. Clicking it opens the full post with syntax-highlighted code.

- [ ] **Step 9: Commit**

```bash
git add lib/blog.ts content/blog/hello-world.mdx components/ui/BlogCard.tsx components/sections/BlogPreview.tsx app/blog/
git commit -m "feat: add MDX blog system with index, post pages, and homepage preview"
```

---

## Task 11: Assemble Home Page + Remove tsparticles

**Files:**
- Modify: `app/page.tsx`
- Modify: `package.json` (via npm uninstall)

- [ ] **Step 1: Update home page with new sections**

Replace `app/page.tsx`:

```tsx
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <BlogPreview />
      <Contact />
    </>
  );
}
```

- [ ] **Step 2: Remove tsparticles packages**

```bash
npm uninstall @tsparticles/react @tsparticles/slim
```

- [ ] **Step 3: Verify full site renders**

Run: `npm run dev`
Expected: All sections render in order. No console errors about tsparticles.

- [ ] **Step 4: Verify static build works**

Run: `npm run build`
Expected: Build succeeds. Blog pages are statically generated.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx package.json package-lock.json
git commit -m "feat: assemble all sections, remove tsparticles dependency"
```

---

## Task 12: Final Polish + Build Verification

**Files:**
- All files (review pass)

- [ ] **Step 1: Run lint**

```bash
npm run lint
```
Expected: No errors. Fix any that appear.

- [ ] **Step 2: Run production build**

```bash
npm run build
```
Expected: Build completes successfully with all pages generated.

- [ ] **Step 3: Test production build locally**

```bash
npx serve out
```
Expected: Site serves from `out/` directory. All sections visible. Blog pages accessible. Modal opens/closes.

- [ ] **Step 4: Final commit (if any lint fixes were needed)**

```bash
git add -A
git commit -m "chore: lint fixes and final polish"
```

# Portfolio Next.js Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new Next.js 15 portfolio at `C:\Users\kin\Documents\GitHub\Portfolio-Next` with an AI-themed design (blue/black, neural network particles, Framer Motion animations), reusing all content from the existing React+Vite portfolio.

**Architecture:** Single-page Next.js App Router application. Server Components for static content sections, Client Components only where browser APIs are needed (particles, typed text, scroll detection, Framer Motion). Data extracted into typed `/data` files. UI built with Tailwind CSS 3.4 custom theme.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS 3.4, Framer Motion, @tsparticles/react + @tsparticles/slim, Typed.js, Inter font

**Spec:** `docs/superpowers/specs/2026-03-22-portfolio-nextjs-redesign-design.md`

**Existing project (DO NOT MODIFY):** `C:\Users\kin\Documents\GitHub\Portfolio`

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/layout.tsx` | Root layout: Inter font, metadata, Navbar, Footer, global styles |
| `app/page.tsx` | Home page: assembles all section components |
| `app/globals.css` | Tailwind directives + custom CSS (scroll chevron bounce, body bg) |
| `components/layout/Navbar.tsx` | Client: fixed nav, scroll-aware active section highlighting |
| `components/layout/Footer.tsx` | Server: social icons row + copyright |
| `components/sections/Hero.tsx` | Client: profile image, typed text, social links, CTA buttons, particles |
| `components/sections/Skills.tsx` | Server: skill icons grid wrapped in SectionReveal |
| `components/sections/Projects.tsx` | Server: project cards grid wrapped in SectionReveal |
| `components/sections/About.tsx` | Server: profile image + bio wrapped in SectionReveal |
| `components/sections/Contact.tsx` | Server: email/phone/location info wrapped in SectionReveal |
| `components/ui/ParticleBackground.tsx` | Client: tsparticles neural network config |
| `components/ui/TypedText.tsx` | Client: Typed.js wrapper with ref |
| `components/ui/GlowCard.tsx` | Client: Framer Motion hover glow card |
| `components/ui/SectionReveal.tsx` | Client: Framer Motion whileInView fade-in-up wrapper |
| `data/projects.ts` | Project data array with types |
| `data/skills.ts` | Skills list for skillicons.dev |
| `data/social.ts` | Social links + contact info with types |
| `tailwind.config.ts` | Custom theme colors + Inter font family |
| `next.config.ts` | Next.js config (minimal) |

---

## Task 1: Project Scaffolding & Configuration

**Files:**
- Create: `C:\Users\kin\Documents\GitHub\Portfolio-Next\` (entire project scaffold)
- Create: `tailwind.config.ts`
- Create: `app/globals.css`
- Create: `next.config.ts`

- [ ] **Step 1: Create Next.js project**

```bash
cd C:\Users\kin\Documents\GitHub
npx create-next-app@latest Portfolio-Next --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

Accept defaults. This creates the project with App Router, TypeScript, Tailwind, and ESLint.

- [ ] **Step 2: Install dependencies**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
npm install framer-motion @tsparticles/react @tsparticles/slim typed.js
```

- [ ] **Step 3: Configure Tailwind theme**

Replace `tailwind.config.ts` with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        "primary-blue": "#00a2ff",
        "secondary-blue": "#0066cc",
        "glow-blue": "rgba(0, 162, 255, 0.2)",
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

export default config;
```

- [ ] **Step 4: Set up globals.css**

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0a0f;
  color: #ffffff;
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
```

- [ ] **Step 5: Copy assets from existing project**

```bash
# Create images directory
mkdir -p C:\Users\kin\Documents\GitHub\Portfolio-Next\public\images

# Copy all images from existing project
cp C:\Users\kin\Documents\GitHub\Portfolio\public\images/*.png C:\Users\kin\Documents\GitHub\Portfolio-Next\public\images/
cp C:\Users\kin\Documents\GitHub\Portfolio\public\images/*.jpg C:\Users\kin\Documents\GitHub\Portfolio-Next\public\images/

# Copy Profile.jpg from src (not public)
cp C:\Users\kin\Documents\GitHub\Portfolio\src\Profile.jpg C:\Users\kin\Documents\GitHub\Portfolio-Next\public\images\Profile.jpg

# Copy resume.pdf to public root
cp C:\Users\kin\Documents\GitHub\Portfolio\public\images\resume.pdf C:\Users\kin\Documents\GitHub\Portfolio-Next\public\resume.pdf
```

- [ ] **Step 6: Update next.config.ts**

Replace `next.config.ts` with:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "skillicons.dev" },
    ],
  },
};

export default nextConfig;
```

Note: `output: "export"` enables static export since this is a static portfolio with no server-side features. `images.unoptimized: true` is required because static export cannot use server-side image optimization. `remotePatterns` allows the skillicons.dev external images.

- [ ] **Step 7: Verify project runs**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
npm run dev
```

Expected: Dev server starts at `http://localhost:3000` with the default Next.js page.

- [ ] **Step 8: Initialize git and commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git init
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind theme and assets"
```

---

## Task 2: Data Files

**Files:**
- Create: `data/projects.ts`
- Create: `data/skills.ts`
- Create: `data/social.ts`

- [ ] **Step 1: Create data directory**

```bash
mkdir -p C:\Users\kin\Documents\GitHub\Portfolio-Next\data
```

- [ ] **Step 2: Create `data/projects.ts`**

```typescript
export interface Project {
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
    description:
      "We develop dating apps that include a chat system for communication and a search system for finding people. We use Flutter for development and MySQL for the database.",
    techStack: ["Flutter", "MySQL"],
    image: "/images/wanjaii.png",
    githubUrl: "https://github.com/kinrujikorn/wanjaii",
    demoUrl: "https://youtu.be/wxxlVmyokk8",
  },
  {
    id: "servicex",
    title: "ServiceX Project",
    description:
      "In this project, we are developing an app similar to a Technician Queue. It is an application that facilitates the process of finding technicians or the agency we need. We use React Native as the main language for the front end and Node.js with Express.js for the backend, utilizing MySQL as the database to store data.",
    techStack: ["React Native", "Node.js", "Express.js", "MySQL"],
    image: "/images/servicex.png",
    githubUrl: "https://github.com/kinrujikorn/ServiceX",
  },
  {
    id: "hotelmanagement",
    title: "Hotel Management Project",
    description:
      "We are creating a website for a hotel management system that includes features like hotel room reservations, financial tracking, and various data entry systems for hotel-related information. To build this, we are using HTML, CSS, and JavaScript for the user interface, and PHP and MySQL for the backend to handle data and process.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/hotelmanagement.png",
    githubUrl: "https://github.com/kinrujikorn/The-Saturn-Hotel-Management",
  },
];
```

- [ ] **Step 3: Create `data/skills.ts`**

```typescript
export const skills = [
  "c", "python", "dart", "javascript", "php", "html", "css",
  "react", "nodejs", "expressjs", "flutter", "flask", "mysql", "git",
];
```

- [ ] **Step 4: Create `data/social.ts`**

```typescript
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
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

- [ ] **Step 5: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add data/
git commit -m "feat: add typed data files for projects, skills, and social links"
```

---

## Task 3: UI Foundation Components

**Files:**
- Create: `components/ui/SectionReveal.tsx`
- Create: `components/ui/GlowCard.tsx`
- Create: `components/ui/TypedText.tsx`
- Create: `components/ui/ParticleBackground.tsx`

- [ ] **Step 1: Create component directories**

```bash
mkdir -p C:\Users\kin\Documents\GitHub\Portfolio-Next\components\ui
mkdir -p C:\Users\kin\Documents\GitHub\Portfolio-Next\components\layout
mkdir -p C:\Users\kin\Documents\GitHub\Portfolio-Next\components\sections
```

- [ ] **Step 2: Create `components/ui/SectionReveal.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create `components/ui/GlowCard.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`bg-card-bg/80 border border-card-border rounded-xl p-6
        hover:border-primary-blue hover:shadow-[0_0_20px_rgba(0,162,255,0.15)]
        transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Create `components/ui/TypedText.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  className?: string;
}

export default function TypedText({ strings, className = "" }: TypedTextProps) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return <span ref={el} className={className} />;
}
```

- [ ] **Step 5: Create `components/ui/ParticleBackground.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#00a2ff" },
          links: {
            color: "#00a2ff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            value: isMobile ? 30 : 80,
            density: { enable: true },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
```

- [ ] **Step 6: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add components/ui/
git commit -m "feat: add UI foundation components (SectionReveal, GlowCard, TypedText, ParticleBackground)"
```

---

## Task 4: Layout Components (Navbar + Footer)

**Files:**
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/Footer.tsx`
- Create: `app/layout.tsx`

- [ ] **Step 1: Create `components/layout/Navbar.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white hover:text-primary-blue transition-colors">
          Kin
        </a>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white"
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
                  className={`text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "text-primary-blue"
                      : "text-slate-400 hover:text-white"
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
        <div className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === id
                        ? "text-primary-blue"
                        : "text-slate-400 hover:text-white"
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

- [ ] **Step 2: Create `components/layout/Footer.tsx`**

```tsx
import Image from "next/image";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
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
                className="rounded-full hover:shadow-[0_0_12px_rgba(0,162,255,0.4)] transition-shadow"
              />
            </a>
          ))}
        </div>
        <p className="text-slate-400 text-sm">
          kinrujikorn &mdash; All rights reserved
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify dev server renders layout**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
npm run dev
```

Expected: Page loads with dark background, navbar at top, footer at bottom.

- [ ] **Step 5: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add components/layout/ app/layout.tsx
git commit -m "feat: add Navbar with scroll-aware highlighting, Footer, and root layout"
```

---

## Task 5: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Create `components/sections/Hero.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import TypedText from "@/components/ui/TypedText";
import { socialLinks } from "@/data/social";

const ParticleBackground = dynamic(
  () => import("@/components/ui/ParticleBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 relative z-10"
      >
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-blue shadow-[0_0_30px_rgba(0,162,255,0.3)]">
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
        <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ textShadow: "0 0 20px rgba(0, 162, 255, 0.3)" }}>
          Hi, I&apos;m Kin
        </h1>

        {/* Typed Text */}
        <p className="text-2xl md:text-4xl font-bold text-primary-blue h-12">
          <TypedText strings={["Full Stack Developer", "Software Engineer"]} />
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
                className="rounded-full hover:shadow-[0_0_12px_rgba(0,162,255,0.5)] transition-shadow"
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
            className="px-8 py-3 bg-primary-blue text-white font-bold rounded-lg hover:bg-secondary-blue hover:shadow-[0_0_20px_rgba(0,162,255,0.4)] transition-all"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download="Rujikorn_Rujitanont_Resume.pdf"
            className="px-8 py-3 border-2 border-primary-blue text-primary-blue font-bold rounded-lg hover:bg-primary-blue/10 hover:shadow-[0_0_20px_rgba(0,162,255,0.2)] transition-all"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Chevron */}
      <a
        href="#skills"
        className="absolute bottom-8 animate-bounce-chevron text-primary-blue"
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

- [ ] **Step 2: Verify hero renders**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
npm run dev
```

Temporarily import Hero in `app/page.tsx` to test:
```tsx
import Hero from "@/components/sections/Hero";
export default function Home() {
  return <Hero />;
}
```

Expected: Full-height hero with particles, profile image, typed text, social icons, buttons, scroll chevron.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with particles, typed text, and social links"
```

---

## Task 6: Skills Section

**Files:**
- Create: `components/sections/Skills.tsx`

- [ ] **Step 1: Create `components/sections/Skills.tsx`**

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
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-12 rounded-full" />
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

- [ ] **Step 2: Add Skills to page.tsx, verify it renders**

Update `app/page.tsx`:
```tsx
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
    </>
  );
}
```

Expected: Skills section appears below hero with skill icons in a glow card.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add components/sections/Skills.tsx app/page.tsx
git commit -m "feat: add Skills section with skillicons.dev grid"
```

---

## Task 7: Projects Section

**Files:**
- Create: `components/sections/Projects.tsx`

- [ ] **Step 1: Create `components/sections/Projects.tsx`**

```tsx
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.1}>
              <GlowCard className="flex flex-col h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-primary-blue text-primary-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary-blue transition-colors"
                  >
                    <Image src="/images/github.png" alt="GitHub" width={20} height={20} className="rounded-full" />
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary-blue transition-colors"
                    >
                      <Image src="/images/demo.png" alt="Demo" width={20} height={20} className="rounded-full" />
                      Demo
                    </a>
                  )}
                </div>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Projects to page.tsx, verify it renders**

Update `app/page.tsx` to include `<Projects />` after `<Skills />`.

Expected: 3 project cards in a responsive grid with images, descriptions, tech tags, and links.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add components/sections/Projects.tsx app/page.tsx
git commit -m "feat: add Projects section with responsive card grid"
```

---

## Task 8: About Section

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Create `components/sections/About.tsx`**

```tsx
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlowCard from "@/components/ui/GlowCard";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <GlowCard className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary-blue shadow-[0_0_20px_rgba(0,162,255,0.2)]">
              <Image
                src="/images/Contact-Profile.jpg"
                alt="Kin"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-400 leading-relaxed">
                Hello, my name is Rujikorn Rujitanont, but you can call me Kin.
                I am currently 21 years old. My hobbies include learning new
                things, keeping up with computer trends, playing video games,
                and making videos. I am particularly interested in website and
                app development.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                I am a third-year student enrolled in the Computer Engineering
                International Program at KMUTT. I have experience in
                process-oriented tasks, am adept at collaborating with others,
                and I&apos;m committed to continuous self-improvement.
              </p>
            </div>
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page.tsx, verify it renders**

Update `app/page.tsx` to include `<About />` after `<Projects />`.

Expected: Two-column card with profile image and bio text.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add components/sections/About.tsx app/page.tsx
git commit -m "feat: add About section with profile image and bio"
```

---

## Task 9: Contact Section

**Files:**
- Create: `components/sections/Contact.tsx`

- [ ] **Step 1: Create `components/sections/Contact.tsx`**

```tsx
import SectionReveal from "@/components/ui/SectionReveal";
import { contactInfo } from "@/data/social";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl font-semibold text-white text-center mb-2">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mb-12 rounded-full" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-slate-400 text-sm">Phone</p>
              <p className="text-white">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="text-white">{contactInfo.location}</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Contact to page.tsx, verify it renders**

Update `app/page.tsx` to include `<Contact />` after `<About />`.

Expected: Three contact items in a row with SVG icons.

- [ ] **Step 3: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add components/sections/Contact.tsx app/page.tsx
git commit -m "feat: add Contact section with email, phone, and location"
```

---

## Task 10: Final Page Assembly & Polish

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Finalize `app/page.tsx`**

```tsx
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
```

- [ ] **Step 2: Run dev server and visually verify all sections**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
npm run dev
```

Verify checklist:
- Particle background renders across the whole page
- Navbar highlights active section on scroll
- Hero: profile image, typed text, social icons, both buttons work
- Skills: icons render from skillicons.dev
- Projects: 3 cards with images, descriptions, tech tags, links
- About: profile image + bio text
- Contact: 3 items in a row
- Footer: social icons + copyright
- Smooth scroll works on nav clicks
- Animations play on scroll

- [ ] **Step 3: Run production build to check for errors**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 4: Commit**

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add app/page.tsx
git commit -m "feat: assemble all sections into final home page"
```

- [ ] **Step 5: Final commit with any polish fixes**

If any issues were found during verification, fix them and commit:

```bash
cd C:\Users\kin\Documents\GitHub\Portfolio-Next
git add -A
git commit -m "fix: polish and fix issues found during visual review"
```

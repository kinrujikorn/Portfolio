"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-[34px] h-[34px]" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ href }) => {
      const id = href.split("#")[1];
      if (!id) return;
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
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.split("#")[1];
    if (isHome && id) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface-border transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-mono text-lg font-bold text-text-primary hover:text-primary transition-colors">
          <span className="inline-block w-2 h-2 rounded-full bg-status-green" />
          kin.dev
        </Link>

        {/* Desktop nav + theme toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map(({ label, href }) => {
              const id = href.split("#")[1];
              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`font-mono text-sm transition-colors ${
                      isHome && activeSection === id
                        ? "text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-text-primary p-2"
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
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map(({ label, href }) => {
              const id = href.split("#")[1];
              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`font-mono text-sm transition-colors ${
                      isHome && activeSection === id
                        ? "text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

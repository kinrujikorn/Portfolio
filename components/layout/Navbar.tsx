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

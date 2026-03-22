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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypedText from "@/components/ui/TypedText";
import GridBackground from "@/components/ui/GridBackground";
import { socialLinks } from "@/data/social";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <GridBackground />

      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary-light/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6 relative z-10"
      >
        {/* Profile Image */}
        <motion.div variants={scaleIn} className="relative">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
            <Image
              src="/images/Profile.jpg"
              alt="Kin - Full Stack Developer"
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Status badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-surface border border-surface-border rounded-full">
            <span className="w-2 h-2 rounded-full bg-status-green animate-pulse" />
            <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">Available</span>
          </div>
        </motion.div>

        {/* Name with gradient */}
        <motion.div variants={fadeUp} className="text-center mt-4">
          <p className="font-mono text-sm text-text-secondary tracking-[0.3em] uppercase mb-3">Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient">
            Kin
          </h1>
        </motion.div>

        {/* Typed Text */}
        <motion.p variants={fadeUp} className="font-mono text-lg md:text-xl text-text-secondary h-8">
          <TypedText strings={["Full Stack Developer", "Software Engineer", "Building the future with code"]} />
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={fadeUp} className="flex gap-3 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-surface-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
              aria-label={link.platform}
            >
              <Image
                src={link.icon}
                alt={link.platform}
                width={24}
                height={24}
                className="rounded-sm opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/rujikorn-rujitanont-b514a0297/"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-mono text-sm px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="/resume.pdf"
            download="Rujikorn_Rujitanont_Resume.pdf"
            className="font-mono text-sm px-8 py-3 border border-surface-border text-text-secondary font-semibold rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors"
        aria-label="Scroll to skills"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce-chevron">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.a>
    </section>
  );
}

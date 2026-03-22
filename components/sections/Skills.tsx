"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { skillCategories } from "@/data/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-2 tracking-tight">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="font-mono text-sm text-text-secondary text-center mb-16">
            Technologies I work with
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <SectionReveal key={category.label} delay={catIndex * 0.1}>
              <div className="p-6 rounded-xl border border-surface-border bg-surface/40 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4">
                  {category.label}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={pillVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-sm font-mono bg-background border border-surface-border rounded-lg text-text-primary hover:border-primary/50 hover:shadow-[0_0_12px_rgba(139,92,246,0.1)] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

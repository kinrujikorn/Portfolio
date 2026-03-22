"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-2 tracking-tight">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="font-mono text-sm text-text-secondary text-center mb-16">Things I&apos;ve built</p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-surface/60 border border-surface-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
              >
                {/* Image with zoom effect */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-mono text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                      View Details &rarr;
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 bg-primary/5 border border-primary/20 text-primary-light rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
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

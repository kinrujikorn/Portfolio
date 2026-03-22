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

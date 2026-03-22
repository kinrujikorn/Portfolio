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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.15 }}
            style={{ willChange: "transform, opacity" }}
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
                  priority
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

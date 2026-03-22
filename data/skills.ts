export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Dart", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "NestJS", "Node.js", "Express.js", "Flutter"],
  },
  {
    label: "Data & Cloud",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Google Cloud"],
  },
  {
    label: "Tools",
    skills: ["Git", "Figma", "VS Code", "Jira"],
  },
];

// Keep flat list for skillicons.dev fallback
export const skills = [
  "javascript", "typescript", "python", "dart", "html", "css",
  "react", "nextjs", "nestjs", "nodejs", "expressjs", "flutter",
  "mysql", "postgresql", "firebase", "gcp", "figma", "git",
];

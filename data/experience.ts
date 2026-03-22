export interface ExperienceEntry {
  type: "education" | "work" | "certification" | "achievement";
  dateRange: string;
  title: string;
  organization: string;
  description: string;
  techTags?: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    type: "education",
    dateRange: "2023 — Present",
    title: "Computer Engineering (International Program)",
    organization: "King Mongkut's University of Technology Thonburi (KMUTT)",
    description:
      "Third-year student specializing in software development, web technologies, and mobile application development. Active participant in university tech projects and hackathons.",
    techTags: ["Python", "JavaScript", "React", "Flutter"],
  },
  {
    type: "achievement",
    dateRange: "2024",
    title: "Wanjaii — Dating App",
    organization: "University Project",
    description:
      "Led the development of a cross-platform dating application with real-time chat and intelligent matching systems.",
    techTags: ["Flutter", "MySQL"],
  },
  {
    type: "achievement",
    dateRange: "2024",
    title: "ServiceX — Technician Queue App",
    organization: "University Project",
    description:
      "Built a full-stack service booking platform connecting users with technicians, featuring real-time queue management.",
    techTags: ["React Native", "Node.js", "Express.js", "MySQL"],
  },
  {
    type: "achievement",
    dateRange: "2023",
    title: "Hotel Management System",
    organization: "University Project",
    description:
      "Developed a comprehensive hotel management website with room reservations, financial tracking, and role-based access control.",
    techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

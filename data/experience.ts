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
    dateRange: "Aug 2021 — May 2025",
    title: "B.Eng. in Computer Engineering",
    organization: "King Mongkut's University of Technology Thonburi (KMUTT)",
    description:
      "3.68 GPAX, First Class Honors anticipated. Relevant coursework: Software Engineering, Object-Oriented Design, Big Data Engineering, Database Systems, Algorithms, Data Structures.",
    techTags: ["Python", "JavaScript", "React", "Flutter"],
  },
  {
    type: "work",
    dateRange: "Aug 2024 — May 2025",
    title: "Full-stack Developer Intern",
    organization: "Ant HR Co., Ltd. (Backed by SCG)",
    description:
      "Developed core features for job posting, role-based access, and interview scheduling across web and mobile platforms. Built AI-powered resume analysis and job matching system using machine learning techniques. Contributed to UI/UX design, system integration, and database structuring.",
    techTags: ["React.js", "Node.js", "Flutter", "Redux", "MySQL", "Google Cloud"],
  },
  {
    type: "work",
    dateRange: "Jun 2024 — Aug 2024",
    title: "Frontend Developer Intern",
    organization: "Huawei Technologies (Thailand) Co., Ltd.",
    description:
      "Redesigned internal dashboard and booking system to enhance user experience. Built interactive components including dark mode, modal forms, heatmap calendar, and user input validation with error handling. Prepared and structured frontend data for backend communication.",
    techTags: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
  },
  {
    type: "achievement",
    dateRange: "Feb 2023 — May 2024",
    title: "Wanjaii — Dating App",
    organization: "Software Engineering Project",
    description:
      "Built a real-time swipe-and-chat app with customizable profiles and match filtering. Integrated Firebase for auth, database, storage, and backend connectivity.",
    techTags: ["Flutter", "Dart", "Firebase", "Express.js"],
  },
  {
    type: "achievement",
    dateRange: "Sep 2023 — Dec 2023",
    title: "ServiceX — Service Booking Platform",
    organization: "Software Engineering Project",
    description:
      "Developed a full-featured service booking platform supporting user registration, authentication, search/filter, and appointment scheduling. Led role-based access and booking flows in a Scrum team of 6.",
    techTags: ["Node.js", "Express.js", "MySQL"],
  },
];

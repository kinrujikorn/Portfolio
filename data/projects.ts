export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  techStack: string[];
  techDetails: { name: string; role: string }[];
  challenges: string;
  learnings: string;
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "wanjaii",
    title: "Wanjaii",
    description:
      "A real-time swipe-and-chat dating app with customizable profiles and match filtering, built with Flutter and Firebase.",
    longDescription:
      "Built a real-time swipe-and-chat app with customizable profiles and match filtering. Integrated Firebase for authentication, database, storage, and backend connectivity. Designed UI and user flows for sign-up, chat, and profile management.",
    image: "/images/wanjaii.png",
    screenshots: ["/images/wanjaii.png"],
    techStack: ["Flutter", "Dart", "Firebase", "Express.js"],
    techDetails: [
      { name: "Flutter", role: "Cross-platform mobile UI framework" },
      { name: "Dart", role: "Programming language for Flutter" },
      { name: "Firebase", role: "Auth, Firestore database, and cloud storage" },
      { name: "Express.js", role: "Backend API connectivity" },
    ],
    challenges: "Implementing real-time swipe mechanics with match filtering and integrating Firebase services (Firestore, Auth, Storage) for seamless authentication and data sync across devices.",
    learnings: "Gained deep understanding of Flutter state management, Firebase integration patterns, real-time data synchronization, and mobile UI/UX design principles.",
    githubUrl: "https://github.com/kinrujikorn/wanjaii",
    demoUrl: "https://youtu.be/wxxlVmyokk8",
  },
  {
    slug: "servicex",
    title: "ServiceX",
    description:
      "A full-featured service booking platform with user registration, authentication, search/filter, and appointment scheduling.",
    longDescription:
      "Developed a full-featured service booking platform supporting user registration, authentication, search/filter, and appointment scheduling. Led the implementation of role-based access and booking flows across both provider and seeker user types with clean UI/UX and secure data handling. Collaborated in a Scrum team of 6 to design system architecture, manage sprints, and deliver production-ready features.",
    image: "/images/servicex.png",
    screenshots: ["/images/servicex.png"],
    techStack: ["Node.js", "Express.js", "MySQL"],
    techDetails: [
      { name: "Node.js", role: "Server-side runtime environment" },
      { name: "Express.js", role: "REST API framework" },
      { name: "MySQL", role: "Database for users, bookings, and queue data" },
    ],
    challenges: "Building role-based access control for provider and seeker user types while maintaining clean booking flows, secure data handling, and Scrum-based delivery in a team of 6.",
    learnings: "Learned Agile/Scrum development practices, system architecture design, RESTful API development, and Git-based version control in a collaborative team environment.",
    githubUrl: "https://github.com/kinrujikorn/ServiceX",
  },
  {
    slug: "hotelmanagement",
    title: "Hotel Management",
    description:
      "A hotel management system with room reservations, financial tracking, and role-based access control.",
    longDescription:
      "A comprehensive hotel management website featuring room reservation systems, financial tracking dashboards, and various data entry systems for hotel operations. The system supports multiple user roles (admin, staff, guest) with appropriate access controls and reporting capabilities.",
    image: "/images/hotelmanagement.png",
    screenshots: ["/images/hotelmanagement.png"],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    techDetails: [
      { name: "HTML/CSS", role: "Frontend structure and styling" },
      { name: "JavaScript", role: "Client-side interactivity and validation" },
      { name: "PHP", role: "Server-side logic and API endpoints" },
      { name: "MySQL", role: "Database for reservations, finances, and guests" },
    ],
    challenges: "Designing a flexible reservation system that handles overlapping bookings, room availability calculations, and financial reporting across different time periods.",
    learnings: "Gained experience with traditional web development stack, database schema design for complex business logic, and role-based access control implementation.",
    githubUrl: "https://github.com/kinrujikorn/The-Saturn-Hotel-Management",
  },
];

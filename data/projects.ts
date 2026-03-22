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
    title: "Wanjaii Project",
    description:
      "A dating app with chat system and search features, built with Flutter and MySQL.",
    longDescription:
      "We developed a full-featured dating application that includes a real-time chat system for communication and an intelligent search system for finding compatible people. The app features user authentication, profile management, matching algorithms, and push notifications.",
    image: "/images/wanjaii.png",
    screenshots: ["/images/wanjaii.png"],
    techStack: ["Flutter", "MySQL"],
    techDetails: [
      { name: "Flutter", role: "Cross-platform mobile UI framework" },
      { name: "MySQL", role: "Relational database for user data and matches" },
    ],
    challenges: "Implementing real-time chat with efficient message delivery and handling concurrent user matching requests while maintaining database performance.",
    learnings: "Gained deep understanding of Flutter state management, real-time communication patterns, and database optimization for social applications.",
    githubUrl: "https://github.com/kinrujikorn/wanjaii",
    demoUrl: "https://youtu.be/wxxlVmyokk8",
  },
  {
    slug: "servicex",
    title: "ServiceX Project",
    description:
      "A technician queue app connecting users with service providers, built with React Native and Node.js.",
    longDescription:
      "ServiceX is an application that facilitates the process of finding technicians or service agencies. Users can browse available technicians, book appointments, track queue status, and rate service quality. The backend handles real-time queue management and notification delivery.",
    image: "/images/servicex.png",
    screenshots: ["/images/servicex.png"],
    techStack: ["React Native", "Node.js", "Express.js", "MySQL"],
    techDetails: [
      { name: "React Native", role: "Cross-platform mobile frontend" },
      { name: "Node.js", role: "Server-side runtime environment" },
      { name: "Express.js", role: "REST API framework" },
      { name: "MySQL", role: "Database for users, bookings, and queue data" },
    ],
    challenges: "Building a responsive queue management system that updates in real-time across multiple clients while handling edge cases like cancellations and rescheduling.",
    learnings: "Learned full-stack mobile development with React Native, RESTful API design, and real-time state synchronization between client and server.",
    githubUrl: "https://github.com/kinrujikorn/ServiceX",
  },
  {
    slug: "hotelmanagement",
    title: "Hotel Management Project",
    description:
      "A hotel management system with room reservations, financial tracking, and data management.",
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

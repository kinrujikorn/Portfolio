export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "wanjaii",
    title: "Wanjaii Project",
    description:
      "We develop dating apps that include a chat system for communication and a search system for finding people. We use Flutter for development and MySQL for the database.",
    techStack: ["Flutter", "MySQL"],
    image: "/images/wanjaii.png",
    githubUrl: "https://github.com/kinrujikorn/wanjaii",
    demoUrl: "https://youtu.be/wxxlVmyokk8",
  },
  {
    id: "servicex",
    title: "ServiceX Project",
    description:
      "In this project, we are developing an app similar to a Technician Queue. It is an application that facilitates the process of finding technicians or the agency we need. We use React Native as the main language for the front end and Node.js with Express.js for the backend, utilizing MySQL as the database to store data.",
    techStack: ["React Native", "Node.js", "Express.js", "MySQL"],
    image: "/images/servicex.png",
    githubUrl: "https://github.com/kinrujikorn/ServiceX",
  },
  {
    id: "hotelmanagement",
    title: "Hotel Management Project",
    description:
      "We are creating a website for a hotel management system that includes features like hotel room reservations, financial tracking, and various data entry systems for hotel-related information. To build this, we are using HTML, CSS, and JavaScript for the user interface, and PHP and MySQL for the backend to handle data and process.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/hotelmanagement.png",
    githubUrl: "https://github.com/kinrujikorn/The-Saturn-Hotel-Management",
  },
];

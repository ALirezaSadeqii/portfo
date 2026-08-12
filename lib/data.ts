// ============================================================
// PORTFOLIO DATA — Edit this file to update your content
// ============================================================

export interface Personal {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  tagline: string;
  bio: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  highlights: string[];
}

export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  image: string | null;
  github: string | null;
  githubBackend?: string | null;
  live: string | null;
  category: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  years: string;
  gpa: string | null;
}

export interface Certification {
  title: string;
  issuer: string | null;
}

export interface Language {
  name: string;
  level: string;
}

export const personal: Personal = {
  name: "Alireza Sadeghi",
  role: "Web & Full-Stack Developer",
  location: "Istanbul, Turkey",
  email: "alirezasadeghi2300@gmail.com",
  phone: "+90 539 364 6090",
  github: "https://github.com/ALirezaSadeqii",
  linkedin: "https://linkedin.com/in/alirezasadeghi", // update if different
  tagline: "Building modern web applications.",
  bio: [
    "Full-Stack Web Developer specializing in modern web applications and business software.",
    "Focused on building complete products across frontend, backend, APIs, databases, and business logic, with a primary stack of React, Next.js, Node.js, and JavaScript.",
    "With 4+ years of professional experience, the work spans real-world business systems and applications across areas such as CRM, ERP, finance, sales, HR, and operations — from complex business requirements to reliable, production-ready software.",
  ],
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Supabase", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Render", "Cursor", "Claude", "devExpress"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Birleşik Yazılım",
    position: "Web Developer",
    location: "Istanbul, Turkey",
    startDate: "August 2022",
    endDate: "September 2026",
    current: false,
    highlights: [
      "Worked across ERP modules including Sales, Purchasing, Human Resources, Finance, Accounting, and Orientation — supporting business operations and system requirements.",
      "Contributed to the development and maintenance of corporate websites built on the .NET Framework using HTML, CSS, JavaScript, and Bootstrap.",
      "Serve as one of the full-stack administrators responsible for maintaining company websites, updating content, and implementing UI improvements.",
      "Designed and implemented BI reports and printer forms using SQL and DevExpress.",
      "Developed and customized business modules within the company's web application to meet operational requirements.",
      "Provided technical support to users through the company's support system and collaborated with customers to resolve application-related issues.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "HamrahStu",
    tagline: "Education & University Data Platform",
    description:
      "A full-stack education platform providing structured information on universities, academic programs, scholarships, and tuition. Built with Next.js and Supabase, it includes a secure admin dashboard for managing platform data and an authenticated user experience backed by a relational PostgreSQL database. Implemented an automated scheduled system for application health and maintenance.",
    techStack: ["Next.js", "JavaScript", "Supabase", "PostgreSQL"],
    features: [
      "University and academic program database",
      "Scholarship and tuition information management",
      "Secure admin dashboard for structured data management",
      "User authentication and access control",
      "Automated scheduled github action and cron jobs",
    ],
    image: "/projects/hamrahstu.png",
    github: null,
    live: null,
    category: "Real Product",
  },
  {
    id: 2,
    name: "Arzino",
    tagline: "Financial Data Platform",
    description:
      "A full-stack financial data platform delivering real-time foreign exchange rates, precious metals pricing, and cryptocurrency data. Built a custom Node.js/Express.js backend to integrate external financial data sources, applying buy/sell pricing logic and response caching to ensure reliability and reduce unnecessary external calls. The Next.js frontend consumes this API to present live market data cleanly.",
    techStack: ["Next.js", "Node.js", "Express.js", "JavaScript", "REST APIs"],
    features: [
      "Real-time foreign exchange rates for major currencies",
      "Gold and silver buy/sell price calculation with spread logic",
      "Cryptocurrency market data including USDT",
      "Custom backend API with data caching for performance",
      "Full-stack architecture with dedicated frontend and backend",
    ],
    image: "/projects/arzino.png",
    github: null,
    live: "https://arzino-eight.vercel.app",
    category: "Real Product",
  },
  {
    id: 3,
    name: "AltikService",
    tagline: "Service & Business Management System",
    description:
      "A full-stack business management application built for a real service operation. Handles customer records, vehicle data, service visit tracking, staff and financial records, and operational reporting. Built on Next.js with a Supabase/PostgreSQL backend, featuring structured relational data, automated scheduled maintenance processes, and a backup system to improve data reliability and recovery.",
    techStack: ["Next.js", "JavaScript", "Supabase", "PostgreSQL"],
    features: [
      "Customer and vehicle record management",
      "Service visit tracking and history",
      "Staff records and financial data management",
      "Operational reporting and business summaries",
      "Automated scheduled maintenance and data backup system",
    ],
    image: null,
    github: null,
    live: null,
    category: "Real Product",
  },
  {
    id: 4,
    name: "NexaCRM",
    tagline: "Full-Stack CRM Application",
    description:
      "A full-stack CRM application built with Next.js and Supabase, demonstrating end-to-end business application development. Covers user authentication, contact and company management, a deal pipeline, activity tracking, and role-based access control enforced through Supabase Row-Level Security policies at the database level.",
    techStack: ["Next.js", "JavaScript", "Supabase", "PostgreSQL"],
    features: [
      "User authentication and session management",
      "Contact and company management with relationship tracking",
      "Deal pipeline with stage management",
      "Activity log for customer interactions",
      "Row-Level Security for data isolation and access control",
    ],
    image: "/projects/nexacrm.png",
    github: "https://github.com/ALirezaSadeqii/nexaCRM",
    live: null,
    category: "Full-Stack",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Istanbul Aydın University",
    degree: "Bachelor of Computer Engineering",
    years: "2023 – 2026",
    gpa: null,
  },
  {
    institution: "Istanbul Aydın University",
    degree: "Associate Degree in Computer Programming",
    years: "2021 – 2023",
    gpa: "3.49 / 4.00",
  },
];

export const certifications: Certification[] = [
  {
    title: "React JS Library",
    issuer: null,
  },
  {
    title: "Backend Development: Node.js, Express, MongoDB & REST APIs",
    issuer: null,
  },
];

export const languages: Language[] = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "C1" },
  { name: "Turkish", level: "C1" },
];

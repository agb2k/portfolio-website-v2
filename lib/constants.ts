import { ENV } from './env';

export const SITE_CONFIG = {
  name: ENV.SITE_NAME,
  title: `${ENV.SITE_NAME} — Portfolio`,
  description: ENV.SITE_DESCRIPTION,
  url: ENV.SITE_URL,
} as const;

export const SOCIAL_LINKS = {
  github: ENV.GITHUB_URL,
  linkedin: ENV.LINKEDIN_URL,
  email: ENV.EMAIL,
} as const;

// Centralized profile data - single source of truth
export const PROFILE_DATA = {
  name: SITE_CONFIG.name,
  headline: "Software Engineer @ MoneyLion",
  tagline: "Full-stack engineer with 4+ years' experience designing and scaling distributed systems handling millions of transactions monthly. Specialized in backend microservices architecture, event-driven systems, ML integration, and modern frontend development.",
  location: "Kuala Lumpur, Malaysia",
  email: SOCIAL_LINKS.email,
  github: SOCIAL_LINKS.github,
  linkedin: SOCIAL_LINKS.linkedin,
  skills: [
    "Java",
    "Spring Boot", 
    "Python",
    "Go",
    "Kafka",
    "AWS",
    "SQS",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Microservices",
    "Event-Driven Systems",
    "Machine Learning",
    "Docker",
    "Kubernetes",
    "REST APIs",
    "GraphQL",
    "Node.js",
    "React",
    "Next.js"
  ],
} as const;

export const NAVIGATION = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export const EXPERIENCE_DATA = [
  {
    company: "MoneyLion (acquired by Gen Digital)",
    role: "Software Engineer (Backend)",
    location: "Kuala Lumpur, Malaysia",
    period: "Feb 2023 – Present",
    logo: "https://logo.clearbit.com/moneylion.com",
    bullets: [
      "Led development of investing/crypto features, boosting user engagement by 80% and transaction volume by 40%.",
      "Architected and implemented revenue-critical microservices using Kafka & AWS, driving 15–20% revenue growth.",
      "Designed high-throughput payment workflows processing 50K+ daily transactions (1.5M+ monthly) with Kafka & SQS.",
      "Scaled platform infrastructure for high-traffic campaigns through load testing, caching optimization, and bottleneck removal.",
      "Championed TDD/shift-left practices and Datadog monitoring; modernized CI/CD pipeline (GitHub Actions), reducing deploy time by 40% and infrastructure costs by 25%.",
      "Collaborated with cross-functional teams and contributed to coding standards for microservices architecture.",
    ],
  },
  {
    company: "Total IT Global",
    role: "Software Engineer (Backend & ML)",
    location: "Kuala Lumpur, Malaysia",
    period: "Aug 2022 – Jan 2023",
    logo: "https://logo.clearbit.com/totalitglobal.com",
    bullets: [
      "Developed production-grade services using FastAPI, Django REST Framework, and NestJS for enterprise clients.",
      "Built ML-powered resume parser with spaCy and scikit-learn, improving parsing accuracy by 20% and reducing manual processing time.",
      "Implemented automated ML data pipelines with Python & Pandas, leading annotation processes with precision/recall tracking and model validation.",
      "Collaborated with cross-functional teams to integrate ML models into existing backend systems.",
    ],
  },
  {
    company: "Wavelet Solutions",
    role: "Software Engineer (Full-Stack, Contract)",
    location: "Subang Jaya, Malaysia",
    period: "May 2022 – Aug 2022",
    logo: "/wavelet_solutions.jpeg",
    bullets: [
      "Optimized Akaun platform performance by ~20% via backend refactors.",
      "Shipped revenue-aligned features contributing to ~15% revenue increase.",
    ],
  },
  {
    company: "Wavelet Solutions",
    role: "Software Engineer Intern (Backend)",
    location: "Subang Jaya, Malaysia",
    period: "Jun 2021 – Sep 2021",
    logo: "/wavelet_solutions.jpeg",
    bullets: [
      "Built & deployed REST APIs with Spring Boot and PostgreSQL.",
      "Improved DB performance ~30% via indexing and partitioning.",
    ],
  },
  {
    company: "University of Nottingham",
    role: "Machine Learning Research Intern",
    location: "Semenyih, Malaysia",
    period: "Jun 2021 – Sep 2021",
    logo: "/uonmalaysia_logo.jpeg",
    bullets: [
      "Improved ML model accuracy 15% and reduced processing time 20% (Scikit-learn, PyTorch).",
      "Deployed models via FastAPI.",
    ],
  },
] as const;

export const PROJECTS_DATA = [
  {
    name: "Roundups Micro-Investing Service",
    description: "Led complete rebuild of micro-investing platform from legacy system, implementing modern microservices architecture with Kafka event streaming and AWS infrastructure.",
    tech: ["Java", "Spring Boot", "Kafka", "AWS", "Microservices", "Event-Driven Architecture"],
    link: undefined, // Professional work - no public repo
    company: "MoneyLion",
    logo: "https://logo.clearbit.com/moneylion.com",
  },
  {
    name: "Bull vs Bear Gamification Platform",
    description: "Designed and developed gamification features for investment education, increasing user engagement by 60% through interactive trading simulations and leaderboards.",
    tech: ["Java", "Spring Boot", "Redis", "WebSocket", "Real-time Data", "Gamification"],
    link: undefined, // Professional work - no public repo
    company: "MoneyLion",
    logo: "https://logo.clearbit.com/moneylion.com",
  },
  {
    name: "Event-Driven Deposits & Withdrawals System",
    description: "Architected migration from legacy cron-based system to modern SQS event-driven architecture, reducing processing time by 40% and improving reliability.",
    tech: ["AWS SQS", "Event-Driven Architecture", "Java", "Spring Boot", "PostgreSQL", "Redis"],
    link: undefined, // Professional work - no public repo
    company: "MoneyLion",
    logo: "https://logo.clearbit.com/moneylion.com",
  },
  {
    name: "ML-Powered ATS Resume Scanner",
    description: "Built production-grade resume parsing system using spaCy and scikit-learn, improving parsing accuracy by 20% and reducing manual processing time. Integrated ML models into existing backend systems.",
    tech: ["Python", "spaCy", "Scikit-learn", "FastAPI", "Machine Learning", "NLP"],
    link: undefined, // Professional work - no public repo
    company: "Total IT Global",
    logo: "https://logo.clearbit.com/totalitglobal.com",
  },
  {
    name: "RecSys Diversification Research (FYP)",
    description: "Final Year Project: Comprehensive study of diversification techniques in recommender systems using Python, scikit-learn, and surprise library. Implemented various algorithms and evaluated their performance.",
    tech: ["Python", "Scikit-learn", "Pandas", "Surprise", "Recommender Systems", "Research"],
    link: "https://github.com/agb2k/RecSys-Diversification-FYP",
    company: "University of Nottingham",
    logo: "/uonmalaysia_logo.jpeg",
  },
  {
    name: "Frogger 2.0 - JavaFX Game Development",
    description: "Enhanced JavaFX game development project featuring 10 levels, MVC architecture, factory design patterns, and comprehensive game mechanics. Includes high score system, pause functionality, and JavaDoc documentation.",
    tech: ["Java", "JavaFX", "MVC Pattern", "Factory Pattern", "Game Development", "FXML"],
    link: "https://github.com/agb2k/Frogger-2.0",
    company: "University of Nottingham",
    logo: "/uonmalaysia_logo.jpeg",
  },
  {
    name: "Local2Spotify Music Migration Tool",
    description: "Automated music migration tool that scrapes local MP3 metadata and syncs equivalent tracks to Spotify playlists. Built to solve personal music management challenges, featuring intelligent track matching and playlist automation.",
    tech: ["Python", "Spotify API", "MP3 Processing", "Metadata Scraping", "Playlist Management"],
    link: "https://github.com/agb2k/Local2Spotify",
    company: "Personal Project",
    logo: "https://img.icons8.com/color/96/spotify.png",
  },
  {
    name: "Meter Ingestor - Streaming Data Pipeline",
    description: "High-performance Java application for transforming NEM12 CSV files into optimized SQL insert statements. Features streaming processing, batch operations, and comprehensive error handling.",
    tech: ["Java", "Streaming Processing", "Apache Commons CSV", "SQL Optimization", "Batch Processing"],
    link: "https://github.com/agb2k/meter-ingestor",
    company: "Personal Project",
    logo: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
  },
  {
    name: "Food Order Chatbot (Hackathon Winner)",
    description: "Top 3 Telegram chatbot for food ordering built for Nott-A-Code competition. Integrates Telegram Bot API with Google Sheets for order management and real-time updates.",
    tech: ["Python", "Telegram Bot API", "Google Sheets API", "Chatbot", "Real-time Processing"],
    link: "https://github.com/agb2k/Food-Order-Chatbot",
    company: "Hackathon Project",
    logo: "https://img.icons8.com/color/96/telegram-app.png",
  },
  {
    name: "Professional Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features dark mode, optimized performance, SEO, and showcases full-stack development capabilities with clean, maintainable code.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Responsive Design", "SEO"],
    link: "https://github.com/agb2k/portfolio-website",
    company: "Personal Project",
    logo: "https://img.icons8.com/color/96/nextjs.png",
  },
] as const;

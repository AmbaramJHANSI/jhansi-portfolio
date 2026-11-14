// Single source of truth for all portfolio content.
// Edit this file to update the site; components contain no hard-coded facts.

export const profile = {
  name: "Ambaram Jhansi Lakshmi",
  shortName: "Jhansi Lakshmi",
  initials: "JL",
  positioning:
    "Computer Science Engineering Student | Cyber Security Enthusiast | Software Developer | Machine Learning Practitioner",
  headline: ["Building Intelligent Solutions.", "Securing Digital Futures."],
  intro:
    "I am a Computer Science and Engineering student specializing in Cyber Security, passionate about developing scalable software applications, intelligent machine learning solutions, and secure digital systems.",
  roles: [
    "Cyber Security Enthusiast",
    "Software Developer",
    "Machine Learning Practitioner",
    "Problem Solver",
  ],
  education: {
    institute: "Institute of Aeronautical Engineering, Hyderabad, India",
    degree: "B.Tech in Computer Science and Engineering (Cyber Security)",
    years: "2023–2027",
    cgpa: "8.84",
    previousEducation: [
      {
        institute: "Akshara Junior College, Andhra Pradesh, India",
        degree: "Intermediate",
        years: "2020–2022",
        percentage: "93.50%",
      },
      {
        institute: "Alpha High School, Andhra Pradesh",
        degree: "SSC",
        years: "2019–2020",
        percentage: "96.50%",
      },
    ],
  },
  email: "jhansi.ambaram@gmail.com",
  linkedin: "https://www.linkedin.com/in/ambaram-jhansi-lakshmi-601714281/",
  github: "https://github.com/AmbaramJHANSI?tab=repositories",
  resumePath: "/resume.pdf",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const aboutPoints = [
  "Pursuing B.Tech in CSE (Cyber Security).",
  "Strong foundation in programming and software engineering.",
  "Experience with machine learning and data analysis.",
  "Interest in network security, intrusion detection, and cybersecurity research.",
  "Passion for solving complex problems through technology.",
  "Continuous learning through competitive programming and practical projects.",
];

export type SkillIcon = "code" | "globe" | "database" | "brain" | "shield";

export const skillGroups: { title: string; icon: SkillIcon; skills: string[] }[] = [
  { title: "Programming Languages", icon: "code", skills: ["Java", "Python", "C++", "C#"] },
  {
    title: "Frontend and Web Technologies",
    icon: "globe",
    skills: ["HTML", "CSS", "JavaScript", "React", "REST APIs", "HTTPS"],
  },
  {
    title: "Backend and Database",
    icon: "database",
    skills: ["Spring Boot", "MySQL", "Redis", "Playwright"],
  },
  {
    title: "AI and Machine Learning",
    icon: "brain",
    skills: [
      "PyTorch",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Scikit-learn",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Cyber Security and Tools",
    icon: "shield",
    skills: ["Wireshark", "SIEM", "Metasploit", "VS Code", "Git", "GitHub", "Azure (Basic)"],
  },
];

export const experience = [
  {
    title: "Summer Research Internship",
    org: "Institute of Aeronautical Engineering, Hyderabad",
    period: "April 2025 – June 2025",
    points: [
      "Identified security weaknesses in distributed firewalls through penetration testing.",
      "Analyzed 20+ firewall configurations to identify rule inconsistencies, access-control weaknesses, and potential network vulnerabilities.",
    ],
  },
];

export type ProjectVisual = "url" | "iris" | "ids";

export interface Project {
  id: string;
  title: string;
  date: string;
  visual: ProjectVisual;
  summary: string;
  points: string[];
  tech: string[];
  metrics: { value: string; label: string }[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "url-shortener",
    title: "Scalable URL Shortener with Redis Caching",
    date: "June 2026",
    visual: "url",
    summary:
      "A URL shortening application built on Java, Spring Boot and MySQL with a layered architecture and Redis-backed lookups.",
    points: [
      "Built a URL shortening application using Java, Spring Boot, MySQL, and layered architecture.",
      "Implemented unique short codes, custom aliases, URL expiration, and QR-code generation.",
      "Integrated Redis caching for faster URL lookups.",
      "Developed click tracking, search, sorting, and an analytics dashboard.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Redis"],
    metrics: [
      { value: "Redis", label: "Cached URL lookups" },
      { value: "QR", label: "Code generation" },
    ],
    github: "https://github.com/AmbaramJHANSI/scalable-url-shortener-redis-caching",
  },
  {
    id: "iris-insight",
    title: "IrisInsight – Machine Learning-Powered Species Classification",
    date: "May 2026",
    visual: "iris",
    summary:
      "An end-to-end Python machine learning pipeline, deployed as a live dashboard with real-time predictions.",
    points: [
      "Developed an end-to-end Python machine learning pipeline covering preprocessing, feature engineering, model training, evaluation, and inference.",
      "Evaluated multiple classification algorithms.",
      "Deployed the best-performing model with 96.67% accuracy.",
      "Implemented real-time predictions and confidence scores.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    metrics: [{ value: "96.67%", label: "Model accuracy" }],
    github: "https://github.com/AmbaramJHANSI/iris-insight-ml-dashboard",
    demo: "https://iris-insight-ml-dashboard.streamlit.app/",
  },
  {
    id: "hybrid-ids",
    title: "Hybrid Intrusion Detection System for Network Traffic Analysis",
    date: "May 2026",
    visual: "ids",
    summary:
      "A hybrid detector combining supervised, anomaly-based and signature-based techniques, with a monitoring dashboard.",
    points: [
      "Developed a hybrid intrusion detection system using Random Forest, Isolation Forest, and signature-based detection.",
      "Analyzed network traffic to identify potential intrusions.",
      "Achieved 97.76% Random Forest accuracy and 98.63% attack recall.",
      "Implemented a web dashboard for anomaly evaluation, feature importance, confusion matrices, and performance monitoring.",
    ],
    tech: ["Python", "Random Forest", "Isolation Forest", "Signature-based Detection"],
    metrics: [
      { value: "97.76%", label: "Random Forest accuracy" },
      { value: "98.63%", label: "Attack recall" },
    ],
    github:
      "https://github.com/AmbaramJHANSI/Hybrid-Intrusion-Detection-Framework-for-Network-Traffic-Analysis",
    demo: "https://hybrid-ids-framework.onrender.com/dashboard",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/Jhansi_ambaram/",
    stats: [
      { value: "450+", label: "Problems solved" },
      { value: "95%", label: "Average accuracy" },
      { value: "6", label: "Skill badges" },
    ],
  },
  {
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/ambaramjhanca1k?tab=activity",
    stats: [
      { value: "400+", label: "Problems solved" },
      { value: "1500+", label: "Coding score" },
      { value: "350+", label: "POTDs" },
    ],
  },
];

export const certifications = [
  {
    title: "Micro-Certification – Welcome to ServiceNow",
    issuer: "ServiceNow",
    date: "November 2026",
    url: "https://drive.google.com/file/d/12nJd8KQTBvOm40KL-XVl_DOcUsYgz-RV/view?usp=sharing",
  },
  {
    title: "AI Essentials",
    issuer: "Google",
    date: "June 2026",
    url: "https://drive.google.com/file/d/1eZyEDegHMtXTJCHarU3jTVDpDFNEA-A2/view?usp=sharing",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JP Morgan Chase & Co.",
    date: "May 2026",
    url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_wDCRuFXSAz8nHmb9E_1779785279973_completion_certificate.pdf",
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "October 2025",
    url: "https://www.credly.com/badges/2fe220f4-c84f-45c1-9ddb-96af36e67b50/public_url",
  },
{
    title: "Jr Penetration Tester",
    issuer: "TryHackMe",
    date: "July 2025",
    url: "https://drive.google.com/file/d/18phAKT2VuS_96vRNJEtwzx0yA8pO8K2c/view?usp=sharing",
  },

];

import {
  Code,
  Server,
  Database,
  Paintbrush,
  Type,
  GitBranch,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Link2Icon,
  CodeIcon,
  GitCommit,
  DockIcon,
} from "lucide-react";


import { 
  SiCoffeescript,
  SiJavascript, 
  SiReact, 
  SiSpringboot, 
  SiMysql, 
  SiTailwindcss, 
  SiGit, 
  SiGithubactions, 
  SiPython, 
  SiDocker 
} from "react-icons/si";

export const fetchData = [
  { label: "User", value: "Sunil@VM" },
  { label: "OS", value: "Garuda Linux Broadwing x86_64" },
  { label: "Host", value: "ASUS TUF Gaming F15 FX506HF" },
  { label: "Kernel", value: "6.14.2-zen1-1-zen" },
  { label: "Packages", value: "1519 (pacman)" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "i5-11400H (12) @ 4.50GHz" },
  { label: "GPU", value: "Intel UHD + RTX 2050" },
  { label: "Memory", value: "15725MiB" },
  { label: "Peak Uptime", value: "13 hour's" },
];

export const skills = [
  { name: "Java", icon: SiCoffeescript },
  { name: "Javascript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  
  { name: "Git", icon: SiGit },
  { name: "CI/CD (GitHub Actions)", icon: SiGithubactions },
  { name: "Python", icon: SiPython },
  { name: "Docker", icon: SiDocker }
];


export const facts = [
  "Student",
  "Full Stack Developer",
  "Exploring Gen AI",
  "DevOps Enthusiast",
];

export const timeline = [
  { year: "2022", detail: "Started coding journey; learned Java and Python fundamentals." },
  { year: "2023", detail: "Built several small projects to apply programming skills." },
  { year: "2024", detail: "Focused on web development (React, Spring Boot) and strengthened DSA knowledge." },
  { year: "2025", detail: "Exploring DevOps, Docker, CI/CD, and Generative AI projects." },
];


export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "sunilsingh81188@gmail.com",
    href: "mailto:sunilsingh81188@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    color: "text-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sunilsingh203",
    href: "https://github.com/sunilsingh203",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sunil-singh",
    href: "https://www.linkedin.com/in/sunil-singh-326992363/",
    color: "text-blue-600",
  },
  
];

export const projectData = [
  {
  name: "Shrinfy – URL Shortener with Analytics",
  description: "Developed a secure, full-stack URL shortener with JWT-based authentication and RESTful APIs. Implemented analytics dashboard using Chart.js to visualize per-link click data in real time. Hosted backend on Azure App Service and frontend built with React and Tailwind CSS. Configured a CI/CD pipeline using GitHub Actions for automated build, test, and deployment.",
  tech: ["Spring Boot", "MySQL", "Azure", "React", "Tailwind CSS", "Chart.js", "GitHub Actions"],
  live: "https://shrinfy.netlify.app",
  github: "https://github.com/sunilsingh203/UrlShortener",
  category: "Web",
  year: "2025"
},

  {
  name: "GennieReply – AI Email Assistant",
  description: "AI-powered email reply generator with Chrome Extension integration.",
  tech: ["Spring Boot", "Gemini API", "Chrome Extension", "Docker", "Azure"],
  live: "https://chromewebstore.google.com/detail/replygenie/kbchlalhigmihfdcmpgcpclopkepkngf",
  github: "https://github.com/sunilsingh203/Ai-Email-Assistant",
  category: "Web",
},

  {
  name: "Java Socket File Transfer System",
  description: "Built a multi-threaded Java client-server system for file transfer and text messaging using socket programming. Enabled secure upload/download with file validation, size limits, and a user-friendly command-line interface. Handled 100k+ concurrent clients with persistent server availability and connection timeout handling.",
  tech: ["Java", "Sockets", "Multi-threading", "File I/O"],
  github: "https://github.com/sunilsingh203/Webserver",
  category: "Desktop/Network",
  year: "2025"
},


  {
  name: "Cricket Score Prediction",
  description: "Predicted the final score in T20 cricket matches using a Random Forest machine learning model. The model was trained on historical match data including current score, deliveries left, run rate, wickets remaining, and last 5 overs performance. Built a web application with Flask that allows users to input live match details and instantly get predicted final scores.",
  tech: ["Python", "Flask", "Machine Learning", "Random Forest", "Pandas", "NumPy"],
  live: "https://dasiladev.pythonanywhere.com/",
  github: "https://github.com/sunilsingh203/CricketScorePrediction/tree/main/backend",
  category: "AI/ML",
  year: "2025"
},

  
];

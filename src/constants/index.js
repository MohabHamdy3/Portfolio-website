import {
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  ROUTE,
  DEPI,
  django,
  express,
  mysql,
  sqlserver,
  mongodb,
  tensorflow,
  sklearn,
  azure,
  github,
  recipefinder,
  freshcart,
  sarahaapp,
  librarymanagementsystem,
  Sprints_ML,
  DC_AI,
  DC_SQL1,
  DC_SQL2
} from "../assets/index.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Experience",
    title: "Experience",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "JS", icon: javascript },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Django", icon: django },
  { name: "Express JS", icon: express },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Python", icon: python },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Machine Learning Engineer Scholar",
    company_name: "Digital Egypt Pioneers Initiative - DEPI",
    icon: DEPI,
    iconBg: "#161329",
    date: "Jul 2025 - Present",
    points: [
      "Built a strong foundation in Mathematics (Statistics, Linear Algebra) and Python programming for data science and AI.",
      "Applied data preprocessing, visualization, and feature engineering techniques on real datasets.",
      "Gained hands-on experience in Machine Learning, Deep Learning, NLP (with Attention Models), and Computer Vision.",
      "Worked with MLOps tools such as MLflow and Hugging Face for model management and deployment.",
      "Leveraged Microsoft Azure AI & Cloud services to deploy scalable ML solutions.",
      "Completed a Capstone Project, integrating the full ML pipeline from raw data to deployment."
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Route Academy",
    icon: ROUTE,
    iconBg: "#161329",
    date: "Sep 2024 - Present",
    points: [
      "Built a strong foundation in HTML, CSS, JavaScript, Bootstrap, and TailwindCSS for responsive front-end development.",
      "Developed interactive single-page applications using React.js with state management and reusable components.",
      "Gained hands-on experience with Node.js, Express.js, and Django for building scalable back-end services and APIs.",
      "Applied SQL and MySQL for database design, queries, and relational data management.",
      "Implemented authentication, role-based access, and CRUD operations across multiple projects.",
      "Completed a Capstone Project, delivering a full-stack web application integrating front-end, back-end, and database layers."
    ],
  },
];

export const projects = [
  {
    name: "Recipe-Finder",
    description:
      "A full-stack recipe web application with user and admin dashboards. Users can browse, search, and manage favorite recipes, while admins can add, edit, or delete recipes. Implemented login/signup with role-based access and localStorage handling.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "SQLite", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
    ],
    image: recipefinder,
    source_code_link: "https://github.com/MohabHamdy3/recipe-finder",
  },
  {
    name: "Fresh-Cart",
    description:
      "A modern e-commerce web application that allows users to browse and purchase products online. Features include product search, filtering, and a shopping cart.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "API", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },

    ],
    image: freshcart,
    source_code_link: "https://github.com/MohabHamdy3/FreshCart-website",
  },
  {
    name: "SarahaApp",
    description:
      "A Node.js based web application that allows users to send and receive anonymous messages. Implemented JWT authentication for login, logout, password updates, and profile management.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "MongoDB", color: "yellow-text-gradient" },
    ],
    image: sarahaapp,
    source_code_link: "https://github.com/MohabHamdy3/SarahaApp",
  },
  {
    name: "Library Management System",
    description:
      "A Node.js based web application that allows users to manage library resources, including books and members. Implemented JWT authentication for secure access and role-based permissions.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "MongoDB", color: "yellow-text-gradient" },
    ],
    image: librarymanagementsystem,
    source_code_link: "https://github.com/MohabHamdy3/library-management",
  },
];

export const certificates = [
  {
    name: "Machine Learning Engineer Scholarship",
    description: "Earned a scholarship for the Machine Learning Engineer program with Digital Egypt Pioneers Initiative - DEPI",
    image: "",
    link: "",
  },
  {
    name: "Full-Stack Development",
    description: "Route Academy certified Full-Stack Developer.",
    image: "" ,
    link: "",
  },
  {
    name: "Sprints AI & ML",
    description: "Completed the Sprints AI & ML program.",
    image: Sprints_ML,
    link: "https://drive.google.com/file/d/1zsnBW_D3lPSpc4yJtf_hJUBSQk7IQ35P/view?usp=sharing",
    date: "2025-08-30"
  },
  {
    name: "DataCamp AI",
    description: "Completed the DataCamp AI program.",
    image: DC_AI,
    link: "https://drive.google.com/file/d/1njtMRf9IjPGn-ygJxe0DXuy3BfF2-Pfv/view?usp=sharing",
    date: "2025-01-29"
  },
  {
    name: "DataCamp SQL1",
    description: "Completed the DataCamp SQL1 program.",
    image: DC_SQL1,
    link: "https://drive.google.com/file/d/1_k2lFjDBXxZKqd0QsI7DqRNBAx6mvDQU/view?usp=sharing",
    date: "2025-02-23"
  },
  {
    name: "DataCamp SQL2",
    description: "Completed the DataCamp SQL2 program.",
    image: DC_SQL2,
    link: "https://drive.google.com/file/d/1zsnBW_D3lPSpc4yJtf_hJUBSQk7IQ35P/view?usp=sharing",
    date: "2025-03-02"
  }
];
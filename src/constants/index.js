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
  heartdisease,
  deepfakedetection,
  Sprints_ML,
  DC_AI,
  DC_SQL1,
  DC_SQL2,
  DEPI_ML,
  DEPI_EN,
  Route_FS,
  Coursera_ML1,
  Coursera_ML2,
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
    id: "Certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "C++", icon: cpp },
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
    date: "Jul 2025 - Dec 2025",
    points: [
      "Built a strong foundation in Mathematics (Statistics, Linear Algebra) and Python programming for data science and AI.",
      "Applied data preprocessing, visualization, and feature engineering techniques on real datasets.",
      "Gained hands-on experience in Machine Learning, Deep Learning, NLP (with Attention Models), and Computer Vision.",
      "Worked with MLOps tools such as MLflow and Hugging Face for model management and deployment.",
      "Leveraged Microsoft Azure AI & Cloud services to deploy scalable ML solutions.",
      "Completed a Capstone Project, integrating the full ML pipeline from raw data to deployment.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Route Academy",
    icon: ROUTE,
    iconBg: "#161329",
    date: "Sep 2024 - Oct 2025",
    points: [
      "Built a strong foundation in HTML, CSS, JavaScript, Bootstrap, and TailwindCSS for responsive front-end development.",
      "Developed interactive single-page applications using React.js with state management and reusable components.",
      "Gained hands-on experience with Node.js, Express.js, and Django for building scalable back-end services and APIs.",
      "Applied SQL and MySQL for database design, queries, and relational data management.",
      "Implemented authentication, role-based access, and CRUD operations across multiple projects.",
      "Completed a Capstone Project, delivering a full-stack web application integrating front-end, back-end, and database layers.",
    ],
  },
];

export const projects = [
  {
    name: "Deepfake Detection System",
    description:
      "A machine learning–based system for detecting deepfake images and videos using deep learning techniques. The project focuses on identifying manipulated media through feature extraction and model training, with an emphasis on accuracy and real-world applicability.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Deep Learning", color: "green-text-gradient" },
      { name: "Computer Vision", color: "pink-text-gradient" },
      { name: "TensorFlow", color: "yellow-text-gradient" },
      { name: "Pytorch", color: "yellow-text-gradient" },
    ],
    image: deepfakedetection,
    source_code_link: "https://github.com/MohabHamdy3/DEPI-Project",
  },
  {
    name: "Heart Disease Prediction",
    description:
      "A machine learning project that predicts the likelihood of heart disease using patient health data. Built with Python and deployed as an interactive web app with Streamlit. Includes a demo and repository link.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
      { name: "Scikit-learn", color: "yellow-text-gradient" },
    ],
    image: heartdisease,
    source_code_link: "https://github.com/MohabHamdy3/Heart_Disease_project",
  },
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
    description:
      "Earned a scholarship for the Machine Learning Engineer program with Digital Egypt Pioneers Initiative - DEPI",
    image: DEPI_ML,
    link: "https://drive.google.com/file/d/1SbsmAG7FwSGq7W-WKsKPm1KogwhFanSm/view?usp=sharing",
    date: "2026-01-25",
  },
  {
    name: "Full-Stack Development",
    description: "Route Academy certified Full-Stack Developer.",
    image: Route_FS,
    link: "https://drive.google.com/file/d/1KKZeDDlpJnyMj6afRW3xX6iQLWkztKqn/view?usp=drive_link",
    date: "2025-12-23",
  },
  {
    name: "Advanced Learning Algorithms",
    description:
      "Completed an advanced Stanford Online course by DeepLearning.AI focusing on neural networks, decision trees, ensemble methods, and practical machine learning optimization techniques.",
    image: Coursera_ML2,
    link: "https://drive.google.com/file/d/1RJebzhbgEgo0VXP0WJwM_QvYkWbueBZj/view?usp=drive_link",
    date: "2025-11-04",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    description:
      "Completed a Stanford Online course by DeepLearning.AI covering supervised learning fundamentals, including linear regression, logistic regression, and classification techniques.",
    image: Coursera_ML1,
    link: "https://drive.google.com/file/d/1BcskM_ILddSNzL2KjDnCrRGYshJkqf1h/view?usp=drive_link",
    date: "2025-10-09",
  },

  {
    name: "Sprints AI & ML",
    description: "Completed the Sprints AI & ML program.",
    image: Sprints_ML,
    link: "https://drive.google.com/file/d/1zsnBW_D3lPSpc4yJtf_hJUBSQk7IQ35P/view?usp=sharing",
    date: "2025-08-30",
  },
  {
    name: "DataCamp AI",
    description: "Completed the DataCamp AI program.",
    image: DC_AI,
    link: "https://drive.google.com/file/d/1njtMRf9IjPGn-ygJxe0DXuy3BfF2-Pfv/view?usp=sharing",
    date: "2025-01-29",
  },
  {
    name: "DataCamp SQL1",
    description: "Completed the DataCamp SQL1 program.",
    image: DC_SQL1,
    link: "https://drive.google.com/file/d/1_k2lFjDBXxZKqd0QsI7DqRNBAx6mvDQU/view?usp=sharing",
    date: "2025-02-23",
  },
  {
    name: "DataCamp SQL2",
    description: "Completed the DataCamp SQL2 program.",
    image: DC_SQL2,
    link: "https://drive.google.com/file/d/14ji2JopnQ0_iPardpA4bb9O7I2wHH6uW/view?usp=drive_link",
    date: "2025-03-02",
  },
  {
    name: "Business English Track - DEPI",
    description:
      "Completed the Business English Track program with Digital Egypt Pioneers Initiative - DEPI",
    image: DEPI_EN,
    link: "https://drive.google.com/file/d/1dDgry6VGPg0bykLPCUiwksQnnLROc0kS/view?usp=drive_link",
    date: "2025-12-01",
  }
];

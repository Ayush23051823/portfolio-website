const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    // TODO: Replace with your actual Google Drive resume link
    link: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view?usp=sharing",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 100, suffix: "+", label: "GitHub Commits" },
  { value: 20, suffix: "+", label: "UI Components" },
  { value: 100, suffix: "%", label: "Commitment to Learning" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Clean Code",
    desc: "Writing scalable, maintainable code with a focus on performance and best practices.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Problem Solver",
    desc: "Strong DSA foundation in C/C++ with a structured approach to solving complex problems.",
  },
  {
    imgPath: "/images/time.png",
    title: "Fast Learner",
    desc: "Continuously picking up new technologies and applying them to build real-world projects.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Version Control",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Sikka is a real-time crypto tracking platform with live WebSocket data streaming, clean React architecture, and solid API design.",
    imgPath: "/images/sikka.svg",
    logoPath: "/images/sikka-logo.svg",  // ← your Sikka logo (rename it to sikka-logo.png for clarity)
    title: "Sikka – Crypto Trading App",
    date: "Oct 2025 – Jan 2026",
    responsibilities: [
      "Developed real-time crypto tracking with live price updates using WebSocket-based data streaming.",
      "Built responsive trading dashboard with reusable React components and dynamic chart rendering.",
      "Implemented RESTful APIs for user authentication, portfolio management, and transaction handling.",
    ],
  },
  {
    review:
      "Mivi is a full-stack OTT platform with clean backend architecture, protected routes, and thoughtful content management.",
    imgPath: "/images/mivi.svg",
    logoPath: "/images/mivi-logo.svg",  // ← whatever you named the Mivi image
    title: "Mivi – OTT Streaming Platform",
    date: "Oct 2025 – Dec 2025",
    responsibilities: [
      "Designed and developed a full-stack OTT platform with user authentication and protected routes.",
      "Developed REST APIs for content management, user profiles, and watch history tracking.",
      "Structured backend with scalable routing and middleware-based request handling.",
    ],
  },
  {
    review:
      "A smart AI-powered irrigation system that predicts water needs using machine learning, helping farmers optimize usage and reduce waste.",
    imgPath: "/images/rootiq-logo.svg",
    logoPath: "/images/irrigation.svg",  // ← already added ✅
    title: "Smart Irrigation System",
    date: "2025",
    responsibilities: [
      "Developed an AI-based irrigation system using Random Forest for both classification and regression tasks.",
      "Built an interactive Streamlit dashboard for real-time prediction and visualization.",
      "Implemented data preprocessing, feature engineering, model evaluation, and CSV report generation.",
      "Deployed the full application on Streamlit Cloud.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/ayush.svtv/",
    imgPath: "/images/insta.png",
  },
  {
    name: "Github",
    url: "https://github.com/Ayush23051823",
    imgPath: "/images/github.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ayush-srivastava-4373662a9",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
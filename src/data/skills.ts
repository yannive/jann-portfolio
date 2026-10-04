export const skills = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  { title: "Backend", items: ["PHP", "Laravel", "CodeIgniter 4", "REST API"] },
  { title: "Database", items: ["MySQL", "Firebase / Firestore"] },
  {
    title: "UI/UX & Design",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "User Interface Design",
      "User Experience Design",
    ],
  },
  {
    title: "Tools",
    items: ["VS Code", "Git", "GitHub", "XAMPP", "npm", "Android Studio"],
  },
];

// Short usage notes shown on hover, focus, or tap. Edit alongside the skill list.
export const skillDescriptions: Record<string, string> = {
  HTML5:
    "Structure pages with semantic elements, accessible forms, and clear content hierarchy.",
  CSS3: "Create responsive layouts, reusable visual styles, and subtle interface transitions.",
  JavaScript:
    "Add interactive behavior, validate inputs, and connect interfaces to data.",
  TypeScript:
    "Make component props and application data easier to understand and check before runtime.",
  React:
    "Build reusable components and state-driven interfaces for modern web experiences.",
  "Vue.js":
    "Build responsive, interactive frontend interfaces, including the MRP ElectroDesk platform.",
  "Tailwind CSS":
    "Compose responsive layouts and consistent interface styles using utility classes.",
  Bootstrap:
    "Build responsive interfaces with familiar components and a flexible grid.",
  PHP: "Handle server-side requests, application logic, and database-backed web features.",
  Laravel:
    "Build backend features, REST APIs, authentication, and business logic.",
  "CodeIgniter 4":
    "Organize PHP application logic, database access, and inventory-system workflows.",
  "REST API":
    "Connect frontend interfaces to backend services through structured HTTP requests.",
  MySQL:
    "Model and query relational data for inventory, transactions, and management systems.",
  "Firebase / Firestore":
    "Work with cloud-hosted document data and application data synchronization.",
  Figma:
    "Create wireframes, interface designs, prototypes, and UI plans before development.",
  Wireframing:
    "Explore page structure and user flows before committing to visual details.",
  Prototyping:
    "Connect screens into interactive flows to review navigation and usability.",
  "Responsive Design":
    "Adapt layouts and interactions to phones, tablets, and larger screens.",
  "User Interface Design":
    "Use typography, spacing, and consistent controls to make interfaces clear.",
  "User Experience Design":
    "Plan understandable journeys around users' tasks and the problems they need to solve.",
  "VS Code":
    "Write, organize, and debug application code in a focused development workspace.",
  Git: "Track code changes, work with branches, and keep a recoverable project history.",
  GitHub:
    "Host repositories, review changes, and organize project collaboration.",
  XAMPP:
    "Run PHP and database-backed applications in a local development environment.",
  npm: "Manage JavaScript dependencies and run development and build scripts.",
  "Android Studio":
    "Work with Android project tooling, emulators, and mobile development workflows.",
};

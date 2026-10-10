export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  featured?: boolean;
  organization?: string;
  status?: "In Development";
  algorithms?: { name: string; description: string }[];
  video?: { src: string; caption: string; captions?: string };
  description: string;
  tech: string[];
  features: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  figmaUrl?: string;
  filters: ProjectFilter[];
  problem: string;
  solution: string;
  role?: string;
  process?: { title: string; description: string }[];
  screenshots?: { src: string; alt: string; caption: string; placeholder?: boolean }[];
};
export const projectFilters = [
  "All",
  "Web Development",
  "UI/UX",
  "Client Projects",
  "School Projects",
  "System Development",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];
export const projects: Project[] = [
  {
    id: "axis-ryu",
    title: "AXIS_Ryu",
    shortTitle: "AXIS_Ryu",
    category: "UI/UX Design",
    description: "A design project created in Figma. Open the design file to explore the work.",
    tech: ["Figma", "UI/UX Design"],
    filters: ["UI/UX"],
    features: [],
    problem: "",
    solution: "",
    figmaUrl: "https://www.figma.com/design/2gJQgNuPRzqg4IedVHF6q3/AXIS_Ryu?node-id=0-1",
  },
  {
    id: "shawarma",
    featured: true,
    status: "In Development",
    algorithms: [{ name: "First Expired, First Out (FEFO)", description: "Prioritize batches by expiration date so stock approaching expiry can be used first." }],
    screenshots: [
      { src: `${import.meta.env.BASE_URL}images/projects/shawarma-dashboard.png`, alt: "Shawarma Shack dashboard showing warehouse status, stock levels, and expiration monitoring", caption: "Inventory dashboard and warehouse status." },
    ],
    process: [
      { title: "Inventory requirements", description: "Define product monitoring, stock quantity, expiration, and batch prioritization requirements." },
      { title: "Data and interface design", description: "Model products and batches in MySQL, and plan clear inventory and expiration views." },
      { title: "Implementation", description: "Build inventory workflows with PHP and CodeIgniter 4, incorporating FEFO batch ordering." },
      { title: "Validation and handover", description: "Plan checks for stock updates, expiration boundaries, and batch ordering before preparing documentation and delivery." },
    ],
    filters: ["Web Development", "Client Projects", "System Development"],
    problem:
      "Staff need a clear way to track stock across batches, deliveries, transfers, and expiration dates, including which items should be used first.",
    solution:
      "Bring stock movements and expiration status into one inventory workspace, with alerts, role-based access, and first-expiry-first-out stock handling.",
    title: "Shawarma Shack Inventory System",
    shortTitle: "Shawarma Shack",
    category: "Client Project",
    description:
      "A web-based inventory management system focused on product monitoring, stock quantities, expiration dates, and batch prioritization.",
    tech: ["PHP", "CodeIgniter 4", "MySQL"],
    features: [
      "Inventory tracking",
      "Batch tracking",
      "Expiration monitoring",
      "Expiring-soon alerts",
      "Stock receiving",
      "Stock transfers",
      "Reports",
      "User roles",
      "FEFO-based stock handling",
    ],
  },
  {
    id: "electrodesk",
    featured: true,
    organization: "MR-PRIDE Electrical Supplies",
    status: "In Development",
    algorithms: [
      { name: "Simple Moving Average (SMA)", description: "Use averages of recent historical demand to support demand forecasting and purchasing decisions." },
      { name: "Analytic Hierarchy Process (AHP)", description: "Support inventory prioritization through structured comparisons of decision criteria." },
    ],
    screenshots: [
      { src: `${import.meta.env.BASE_URL}images/projects/mr-pride-home.png`, alt: "MR-Pride Electrical Supplies homepage with product browsing and quotation requests", caption: "MR-Pride Electrical Supplies customer homepage." },
    ],
    process: [
      { title: "Requirements and scope", description: "Map inventory, sales, purchasing, and forecasting needs for the academic capstone." },
      { title: "System and interface design", description: "Plan the MySQL data model, Laravel application structure, and Vue.js interfaces styled with Tailwind CSS." },
      { title: "Development and decision support", description: "Develop operational workflows and Chart.js visualizations, integrating SMA forecasts and AHP prioritization." },
      { title: "Evaluation and documentation", description: "Plan workflow testing and algorithm checks with sample data, then prepare capstone documentation and delivery materials." },
    ],
    filters: ["Web Development", "School Projects", "System Development"],
    problem:
      "Inventory decisions depend on information from sales, purchasing, quotations, and accounting. These business activities need a shared view alongside demand forecasts.",
    solution:
      "Centralize business operations in MRP ElectroDesk, using Simple Moving Average forecasting and AHP prioritization to support inventory decisions.",
    title: "MRP ElectroDesk",
    shortTitle: "MRP ElectroDesk",
    category: "Academic Capstone Project",
    description:
      "A web-based inventory, sales, purchasing, and demand forecasting system for MR-PRIDE Electrical Supplies.",
    tech: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "Chart.js",
    ],
    features: [
      "Inventory management",
      "Sales management",
      "Procurement",
      "Quotation management",
      "Demand forecasting",
      "Simple Moving Average forecasting",
      "AHP inventory prioritization",
      "Reports and dashboards",
      "Role-based access control",
    ],
  },
  {
    id: "prediqueue",
    screenshots: [
      { src: `${import.meta.env.BASE_URL}images/projects/prediqueue-home.png`, alt: "PrediQueue homepage with cashier, registrar, and admission services and queue ticket instructions", caption: "PrediQueue service selection and queue ticket workflow." },
    ],
    filters: ["Web Development", "System Development"],
    problem:
      "Students need visibility into their place in line, estimated waiting times, and service cut-offs at school offices.",
    solution:
      "Combine digital queue numbers, waiting-time estimates, notifications, and next-day priority with an administrative queue dashboard.",
    title: "PrediQueue",
    shortTitle: "PrediQueue",
    category: "Queue management system",
    description:
      "A predictive queue management system designed to improve waiting-time management for school service offices.",
    tech: ["Web Development", "Database", "Analytics"],
    features: [
      "Digital queue numbers",
      "Estimated waiting time",
      "Queue monitoring",
      "Cut-off management",
      "Next-day priority",
      "Notifications",
      "Admin dashboard",
    ],
  },
];

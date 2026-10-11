export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
  placeholder?: boolean;
  width?: number;
  height?: number;
  crop?: { x: number; y: number; width: number; height: number };
};
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
  demonstrated?: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  figmaUrl?: string;
  filters: ProjectFilter[];
  problem: string;
  solution: string;
  role?: string;
  process?: { title: string; description: string }[];
  screenshots?: ProjectScreenshot[];
};
export const projectFilters = ["All", "Web Development", "UI/UX"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
const projectRecords: Project[] = [
  {
    id: "axis-ryu",
    title: "AXIS",
    shortTitle: "AXIS",
    category: "UI/UX Design",
    description:
      "A design project created in Figma. Open the interactive prototype to explore the work.",
    tech: ["Figma", "UI/UX Design"],
    filters: ["UI/UX"],
    features: [],
    problem: "",
    solution: "",
    figmaUrl:
      "https://www.figma.com/proto/2gJQgNuPRzqg4IedVHF6q3/AXIS?node-id=83-36&p=f&t=kPQBkAWyTumAYivi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=83%3A36&show-proto-sidebar=1",
  },
  {
    id: "shawarma",
    demonstrated: [
      "Warehouse status and inventory counts",
      "Stock-level categories: in stock, low stock, out of stock, and negative stock",
      "Expiration overview and inventory navigation",
    ],
    featured: true,
    status: "In Development",
    algorithms: [
      {
        name: "First Expired, First Out (FEFO)",
        description:
          "Prioritize batches by expiration date so stock approaching expiry can be used first.",
      },
    ],
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/shawarma-dashboard.webp`,
        alt: "Shawarma Shack dashboard showing warehouse status, stock levels, and expiration monitoring",
        caption:
          "Inventory dashboard: warehouse status, stock categories, and expiration monitoring.",
        width: 1920,
        height: 1080,
        crop: { x: 0, y: 112, width: 1900, height: 908 },
      },
    ],
    process: [
      {
        title: "Inventory requirements",
        description:
          "Define product monitoring, stock quantity, expiration, and batch prioritization requirements.",
      },
      {
        title: "Data and interface design",
        description:
          "Model products and batches in MySQL, and plan clear inventory and expiration views.",
      },
      {
        title: "Implementation",
        description:
          "Build inventory workflows with PHP and CodeIgniter 4, incorporating FEFO batch ordering.",
      },
      {
        title: "Validation and handover",
        description:
          "Plan checks for stock updates, expiration boundaries, and batch ordering before preparing documentation and delivery.",
      },
    ],
    filters: ["Web Development"],
    problem:
      "Staff need a clear way to track stock across batches, deliveries, transfers, and expiration dates, including which items should be used first.",
    solution:
      "Bring stock movements and expiration status into one inventory workspace, with alerts, role-based access, and first-expiry-first-out stock handling.",
    title: "Shawarma Shack Inventory System",
    shortTitle: "Shawarma Shack",
    category: "Client Project",
    description:
      "A PHP and CodeIgniter inventory system for tracking stock and expiration dates, with FEFO batch prioritization in its development scope.",
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
    demonstrated: [
      "MR-PRIDE customer homepage",
      "Product-browsing and quotation-request entry points",
      "Company information navigation",
    ],
    featured: true,
    organization: "MR-PRIDE Electrical Supplies",
    status: "In Development",
    algorithms: [
      {
        name: "Simple Moving Average (SMA)",
        description:
          "Use averages of recent historical demand to support demand forecasting and purchasing decisions.",
      },
      {
        name: "Analytic Hierarchy Process (AHP)",
        description:
          "Support inventory prioritization through structured comparisons of decision criteria.",
      },
    ],
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/mr-pride-home.webp`,
        alt: "MR-Pride Electrical Supplies homepage with product browsing and quotation requests",
        caption:
          "Customer homepage with product browsing and quotation entry points.",
        width: 1920,
        height: 1080,
        crop: { x: 0, y: 112, width: 1900, height: 908 },
      },
    ],
    process: [
      {
        title: "Requirements and scope",
        description:
          "Map inventory, sales, purchasing, and forecasting needs for the academic capstone.",
      },
      {
        title: "System and interface design",
        description:
          "Plan the MySQL data model, Laravel application structure, and Vue.js interfaces styled with Tailwind CSS.",
      },
      {
        title: "Development and decision support",
        description:
          "Develop operational workflows and Chart.js visualizations, integrating SMA forecasts and AHP prioritization.",
      },
      {
        title: "Evaluation and documentation",
        description:
          "Plan workflow testing and algorithm checks with sample data, then prepare capstone documentation and delivery materials.",
      },
    ],
    filters: ["Web Development"],
    problem:
      "Inventory decisions depend on information from sales, purchasing, quotations, and accounting. These business activities need a shared view alongside demand forecasts.",
    solution:
      "Centralize business operations in MRP ElectroDesk, using Simple Moving Average forecasting and AHP prioritization to support inventory decisions.",
    title: "MRP ElectroDesk",
    shortTitle: "MRP ElectroDesk",
    category: "Academic Capstone Project",
    description:
      "A Laravel and Vue.js capstone for MR-PRIDE, bringing inventory, sales, purchasing, and forecasting into a shared system.",
    tech: ["Vue.js", "Laravel", "Tailwind CSS", "MySQL", "Chart.js"],
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
    demonstrated: [
      "Cashier, registrar, and admission service selection",
      "Get Number entry point",
      "An explanation of the select-service, ticket, and waiting flow",
    ],
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/prediqueue-home.webp`,
        alt: "PrediQueue homepage with cashier, registrar, and admission services and queue ticket instructions",
        caption: "Service selection and the illustrated queue-ticket flow.",
        width: 2040,
        height: 2048,
      },
    ],
    filters: ["Web Development"],
    problem:
      "Students need visibility into their place in line, estimated waiting times, and service cut-offs at school offices.",
    solution:
      "Combine digital queue numbers, waiting-time estimates, notifications, and next-day priority with an administrative queue dashboard.",
    title: "PrediQueue",
    shortTitle: "PrediQueue",
    category: "Queue management system",
    description:
      "A school-office queue project with a service-selection interface for cashier, registrar, and admission queues.",
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

// Lead with the client project supported by an inventory dashboard and specific technical scope.
export const projects = [
  "shawarma",
  "electrodesk",
  "prediqueue",
  "axis-ryu",
].map((id) => projectRecords.find((project) => project.id === id)!);

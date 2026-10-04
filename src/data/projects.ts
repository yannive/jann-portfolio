export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  filters: ProjectFilter[];
  problem: string;
  solution: string;
  role?: string;
  process?: { title: string; description: string }[];
  screenshots?: { src: string; alt: string; caption: string }[];
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
    id: "shawarma",
    filters: ["Web Development", "Client Projects", "System Development"],
    problem:
      "Staff need a clear way to track stock across batches, deliveries, transfers, and expiration dates, including which items should be used first.",
    solution:
      "Bring stock movements and expiration status into one inventory workspace, with alerts, role-based access, and first-expiry-first-out stock handling.",
    title: "Shawarma Shack Inventory Management System",
    shortTitle: "Shawarma Shack",
    category: "Client project / Inventory system",
    description:
      "A web-based inventory management system designed to monitor stock levels, product batches, deliveries, transfers, and expiration dates. The system helps staff identify expired, expiring, and fresh inventory while supporting efficient stock movement.",
    tech: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "JavaScript"],
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
    filters: ["Web Development", "School Projects", "System Development"],
    problem:
      "Inventory decisions depend on information from sales, purchasing, quotations, and accounting. These business activities need a shared view alongside demand forecasts.",
    solution:
      "Centralize business operations in MRP ElectroDesk, using Simple Moving Average forecasting and AHP prioritization to support inventory decisions.",
    title: "MRP ElectroDesk",
    shortTitle: "MRP ElectroDesk",
    category: "Capstone / Business management",
    description:
      "An AHP-based inventory and demand forecasting system developed for MR-PRIDE Electrical Supplies. The platform centralizes inventory, purchasing, sales, quotations, accounting, and business analytics.",
    tech: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "Chart.js",
      "REST API",
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
  {
    id: "commerce",
    filters: ["Web Development"],
    problem:
      "Shoppers need a clear path from browsing products to viewing details and managing a cart, including on smaller screens.",
    solution:
      "Create a responsive shopping experience with product browsing, individual product pages, and an interactive cart.",
    title: "E-Commerce Website",
    shortTitle: "E-Commerce Website",
    category: "Web development",
    description:
      "A responsive e-commerce website featuring product browsing, product details, shopping cart functionality, and mobile-friendly layouts.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    features: [
      "Product browsing",
      "Product details",
      "Shopping cart",
      "Responsive layouts",
    ],
  },
];

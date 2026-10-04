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
};
export const projects: Project[] = [
  {
    id: "shawarma",
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

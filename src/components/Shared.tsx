import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { contactLinks } from "../data/contact";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="text-link" href={href}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
export function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  const icons = { Facebook, GitHub: Github, Instagram, Email: Mail, Phone };
  return (
    <div className={`socials ${showLabels ? "socials-labeled" : ""}`}>
      {contactLinks.map(({ name, href, external }) => {
        const Icon = icons[name];
        return (
          <a
            key={name}
            href={href}
            aria-label={name}
            title={external ? `${name} (opens in a new tab)` : name}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon size={18} aria-hidden="true" />
            {showLabels && <span>{name}</span>}
          </a>
        );
      })}
    </div>
  );
}

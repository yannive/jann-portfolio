import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Facebook, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "../data/profile";
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
export function SocialLinks() {
  const links = [
    {
      name: "Email",
      url: profile.email ? `mailto:${profile.email}` : null,
      Icon: Mail,
    },
    { name: "GitHub", url: profile.github, Icon: Github },
    { name: "LinkedIn", url: profile.linkedin, Icon: Linkedin },
    { name: "Facebook", url: profile.facebook, Icon: Facebook },
  ];
  return (
    <div className="socials">
      {links.map(({ name, url, Icon }) =>
        url ? (
          <a
            key={name}
            href={url}
            aria-label={name}
            target={name === "Email" ? undefined : "_blank"}
            rel="noreferrer"
          >
            <Icon size={18} />
          </a>
        ) : (
          <span
            key={name}
            className="social-placeholder"
            aria-label={`${name} — link coming soon`}
            title={`${name} — link coming soon`}
          >
            <Icon size={18} />
          </span>
        ),
      )}
    </div>
  );
}

import { Github, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { contactLinks } from "../../data/contact";
export function SocialLinks({
  showLabels = false,
  socialOnly = false,
}: {
  showLabels?: boolean;
  socialOnly?: boolean;
}) {
  const icons = { Facebook, GitHub: Github, Instagram, Email: Mail, Phone };
  return (
    <div className={`socials ${showLabels ? "socials-labeled" : ""}`}>
      {contactLinks
        .filter((link) => !socialOnly || link.external)
        .map(({ name, href, external }) => {
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

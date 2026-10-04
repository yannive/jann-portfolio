import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="nav-shell">
      <nav className="container nav" aria-label="Main navigation">
        <a href="#home" className="logo" aria-label="Jann home">
          JANN<span>.</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div
          id="navigation"
          className={`nav-links ${open ? "open" : ""}`}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              className={active === link.toLowerCase() ? "active" : ""}
              aria-current={
                active === link.toLowerCase() ? "location" : undefined
              }
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}

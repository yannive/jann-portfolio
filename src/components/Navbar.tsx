import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useMediaQuery } from "../hooks/useMediaQuery";

const links = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mobile = useMediaQuery("(max-width: 800px)");
  const reduce = useReducedMotion();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [mobile]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const sections = links
        .map((label) => document.getElementById(label.toLowerCase()))
        .filter((section): section is HTMLElement => Boolean(section))
        .sort((a, b) => a.offsetTop - b.offsetTop);
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= 180)
        .at(-1);
      setActive(current?.id || "home");
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);
  function navigate(id: string) {
    setOpen(false);
    if (mobile) {
      const section = document.getElementById(id);
      if (section) {
        section.tabIndex = -1;
        section.focus({ preventScroll: true });
      }
    }
  }
  return (
    <header
      ref={header}
      className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <nav className="container nav" aria-label="Main navigation">
        <a
          href="#home"
          className="logo"
          aria-label="Jann home"
          onClick={() => setOpen(false)}
        >
          JANN<span>.</span>
        </a>
        <AnimatePresence initial={false}>
          {(!mobile || open) && (
            <motion.div
              id="navigation"
              className={`nav-links ${mobile ? "open" : ""}`}
              initial={mobile && !reduce ? { opacity: 0, y: -10 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10 }}
              transition={{ duration: reduce ? 0 : 0.18 }}
            >
              {links.map((link) => (
                <a
                  key={link}
                  className={active === link.toLowerCase() ? "active" : ""}
                  aria-current={
                    active === link.toLowerCase() ? "location" : undefined
                  }
                  href={`#${link.toLowerCase()}`}
                  onClick={() => navigate(link.toLowerCase())}
                >
                  {link}
                </a>
              ))}
              <a
                className="nav-cta"
                href="#contact"
                onClick={() => navigate("contact")}
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="nav-controls">
          <ThemeToggle />
          <button
            ref={toggle}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={open ? "navigation" : undefined}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

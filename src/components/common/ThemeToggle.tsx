import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );
  const [manual, setManual] = useState(() => {
    try {
      const saved = localStorage.getItem("jann-theme");
      return saved === "light" || saved === "dark";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#191d18" : "#f7f7f2");
  }, [theme]);
  useEffect(() => {
    if (manual) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setTheme(media.matches ? "dark" : "light");
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [manual]);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setManual(true);
    try {
      localStorage.setItem("jann-theme", next);
    } catch {
      /* Session-only when storage is disabled. */
    }
  }
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

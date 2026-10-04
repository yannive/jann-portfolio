import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "./Shared";
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <Reveal>
        <div className="hero-top">
          <p className="availability">
            <span /> Available for freelance projects
          </p>
          <p className="location">
            <MapPin size={14} /> Manila, Philippines
          </p>
        </div>
        <p className="hero-intro">Hi, I'm Jann.</p>
        <h1>
          I design experiences
          <br className="desktop-break" /> and build systems
          <br className="desktop-break" /> that{" "}
          <span className="serif">solve real problems.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            I'm an Information Technology student, UI/UX designer, and web
            developer focused on creating clean, intuitive, and functional
            digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View My Work <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              Contact Me <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <span>DESIGN WITH PURPOSE. BUILD WITH CARE.</span>
          <a href="#projects">
            Scroll to explore <ArrowDown size={15} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

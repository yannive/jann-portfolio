import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import ProfilePhoto from "./ProfilePhoto";
import { SocialLinks } from "../../components/common/SocialLinks";

export default function Hero() {
  const reduce = useReducedMotion();
  const entrance = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="home" className="hero container">
      <motion.div
        initial={reduce ? false : "hidden"}
        animate="visible"
        transition={{ staggerChildren: 0.09, delayChildren: 0.06 }}
      >
        <motion.div variants={entrance} className="hero-top">
          <p className="availability">
            <span /> Available for freelance projects
          </p>
          <p className="location">
            <MapPin size={14} /> Manila, Philippines
          </p>
        </motion.div>
        <div className="hero-layout">
          <motion.div variants={entrance} className="hero-portrait">
            <ProfilePhoto />
          </motion.div>
          <div className="hero-copy">
            <motion.p variants={entrance} className="hero-intro">
              JANN CIPRIANO / DESIGNER & DEVELOPER
            </motion.p>
            <motion.div>
              <h1>
                <motion.span variants={entrance} className="headline-line">
                  Thoughtful design.
                </motion.span>{" "}
                <motion.span variants={entrance} className="headline-line">
                  Purposeful code.
                </motion.span>{" "}
                <motion.span variants={entrance} className="headline-line">
                  <span className="serif">Built for people.</span>
                </motion.span>
              </h1>
            </motion.div>
            <motion.div variants={entrance} className="hero-bottom">
              <p>
                I'm an Information Technology student,{" "}
                <a className="role-link" href="#skills">
                  UI/UX Designer
                </a>
                , and{" "}
                <a className="role-link" href="#projects">
                  Web Developer
                </a>{" "}
                based in Manila. I build thoughtful interfaces and practical web
                systems.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <ArrowUpRight size={18} />
                </a>
                <a className="button secondary" href="#contact">
                  Get in touch <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
            <motion.div variants={entrance} className="hero-socials">
              <SocialLinks socialOnly />
            </motion.div>
          </div>
        </div>
        <motion.div variants={entrance} className="hero-foot">
          <span>UI/UX DESIGN &amp; WEB DEVELOPMENT</span>
          <a href="#projects">
            Scroll to explore <ArrowDown size={15} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

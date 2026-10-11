import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import ProfilePhoto from "./ProfilePhoto";
import { SocialLinks } from "../../components/common/SocialLinks";

export default function Hero() {
  const reduce = useReducedMotion();
  const desktop = useMediaQuery(
    "(hover: hover) and (pointer: fine) and (min-width: 801px)",
  );
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 24 });
  const entrance = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="home"
      className="hero container"
      onPointerMove={(event) => {
        if (!desktop || reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
        y.set(((event.clientY - rect.top) / rect.height - 0.5) * 6);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
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
            <ProfilePhoto /><div className="hero-note">UI/UX Design &amp; Web Development</div>
          </motion.div>
          <div className="hero-copy">
            <motion.p variants={entrance} className="hero-intro">
              JANN CIPRIANO / DESIGNER & DEVELOPER
            </motion.p>
            <motion.div
              style={{
                x: desktop && !reduce ? smoothX : 0,
                y: desktop && !reduce ? smoothY : 0,
              }}
            >
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
                based in Manila. I design clear, accessible interfaces and develop responsive web applications that simplify everyday tasks.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <ArrowUpRight size={18} />
                </a>
                <a className="button secondary" href="#contact">
                  Contact details <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
            <motion.div variants={entrance} className="hero-socials">
              <SocialLinks showLabels />
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

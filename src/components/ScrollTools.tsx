import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollTools() {
  const { scrollYProgress, scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  useMotionValueEvent(scrollY, "change", (value) => setVisible(value > 650));
  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <AnimatePresence>
        {visible && (
          <motion.a
            className="floating-top"
            href="#home"
            aria-label="Back to top"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : 12 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
          >
            <ArrowUp size={19} />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}

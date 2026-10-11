import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

/** A decorative pointer response; the wrapped control owns all interaction. */
export default function InteractivePreview({ children }: { children: ReactNode }) {
  const surface = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const reset = () => {
    surface.current?.style.setProperty("--preview-x", "0deg");
    surface.current?.style.setProperty("--preview-y", "0deg");
  };
  return (
    <div
      ref={surface}
      className="interactive-preview"
      onPointerMove={(event) => {
        if (reduce || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        event.currentTarget.style.setProperty("--preview-x", `${(0.5 - y) * 3}deg`);
        event.currentTarget.style.setProperty("--preview-y", `${(x - 0.5) * 3}deg`);
      }}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </div>
  );
}

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { processSteps } from "../data/process";
import { Reveal, SectionHeading } from "./Shared";
import { handleTabKeys } from "./Tabs";

export default function Process() {
  const [selected, setSelected] = useState(0);
  const reduce = useReducedMotion();
  const step = processSteps[selected];
  return (
    <section className="section container" id="process">
      <Reveal>
        <SectionHeading
          number="05"
          label="THE PROCESS"
          title="Thoughtful at every step."
        >
          <p>
            Every stage has a purpose.
            <br />
            Select one to explore.
          </p>
        </SectionHeading>
        <div
          className="process-tabs"
          role="tablist"
          aria-label="Development process"
          onKeyDown={handleTabKeys}
        >
          {processSteps.map((item, index) => (
            <button
              role="tab"
              key={item.title}
              id={`process-tab-${index}`}
              aria-selected={selected === index}
              aria-controls={`process-panel-${index}`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onPointerEnter={(event) => {
                if (
                  event.pointerType === "mouse" &&
                  !event.currentTarget.parentElement?.contains(
                    document.activeElement,
                  )
                )
                  setSelected(index);
              }}
            >
              <span>0{index + 1}</span>
              <strong>{item.title}</strong>
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>
        {processSteps.map((item, index) => (
          <div
            role="tabpanel"
            key={item.title}
            id={`process-panel-${index}`}
            aria-labelledby={`process-tab-${index}`}
            hidden={selected !== index}
            tabIndex={0}
            className="process-panel"
          >
            {selected === index && (
              <motion.div
                className="process-detail"
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <span className="eyebrow">
                    0{index + 1} / {step.title.toUpperCase()}
                  </span>
                  <h3>{step.summary}</h3>
                </div>
                <div>
                  <p>{step.detail}</p>
                  <div className="process-outcome">
                    <span>THE OUTCOME</span>
                    <p>{step.outcome}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </Reveal>
    </section>
  );
}

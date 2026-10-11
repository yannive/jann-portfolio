import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { skills, skillDescriptions } from "../data/skills";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skills)[number];
  index: number;
}) {
  const [selected, setSelected] = useState(group.items[0]);
  const reduce = useReducedMotion();
  return (
    <div className="skill-row">
      <span className="row-index">0{index + 1}</span>
      <h3>{group.title}</h3>
      <div className="skill-content">
        <div className="tags" role="group" aria-label={`${group.title} skills`}>
          {group.items.map((item) => (
            <button
              key={item}
              aria-pressed={selected === item}
              aria-controls={`skill-description-${index}`}
              aria-describedby={`skill-description-${index}`}
              onClick={() => setSelected(item)}
              onFocus={() => setSelected(item)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setSelected(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div id={`skill-description-${index}`} className="skill-description">
          <motion.p
            key={selected}
            initial={reduce ? false : { opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16 }}
          >
            <ArrowUpRight size={14} />
            <span>
              <strong>{selected}</strong> —{" "}
              {skillDescriptions[selected] ||
                "More about this skill coming soon."}
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="section container">
      <Reveal>
        <SectionHeading
          number="03"
          label="MY TOOLKIT"
          title="The right tools for the idea."
        >
          <p>
            Hover, focus, or tap a skill
            <br />
            to see how I use it.
          </p>
        </SectionHeading>
        <div className="skills-list">
          {skills.map((group, index) => (
            <SkillGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { skills } from "../data/skills";
import { Reveal, SectionHeading } from "./Shared";
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
            From the first wireframe
            <br />
            to the final line of code.
          </p>
        </SectionHeading>
        <div className="skills-list">
          {skills.map((group, i) => (
            <div className="skill-row" key={group.title}>
              <span className="row-index">0{i + 1}</span>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { processSteps } from "../data/process";
import { SectionHeading } from "../components/common/SectionHeading";

export default function Process() {
  return (
    <section className="section container compact-process" id="process">
      <SectionHeading
        number="05"
        label="HOW I WORK"
        title="From understanding to delivery."
      />
      <div className="process-accordion">
        {processSteps.map((step, index) => (
          <details key={step.title}>
            <summary>
              <span className="row-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <span aria-hidden="true">+</span>
            </summary>
            <p>{step.summary}</p>
            <p>{step.detail}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

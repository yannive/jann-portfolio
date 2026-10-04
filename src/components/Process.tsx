import { Reveal, SectionHeading } from "./Shared";
const steps = [
  [
    "Discover",
    "Understand the client's business, problems, users, and requirements.",
  ],
  [
    "Plan",
    "Define system features, user flows, database structure, and project scope.",
  ],
  [
    "Design",
    "Create wireframes and interfaces focused on usability and consistency.",
  ],
  ["Develop", "Turn the design into a responsive and functional application."],
  [
    "Test",
    "Test functionality, responsiveness, usability, and system reliability.",
  ],
  ["Deliver", "Deploy the project and provide documentation and support."],
];
export default function Process() {
  return (
    <section className="section container">
      <Reveal>
        <SectionHeading
          number="05"
          label="THE PROCESS"
          title="Thoughtful at every step."
        />
        <ol className="process-grid">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

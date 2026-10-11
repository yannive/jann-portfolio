import { PenTool, Code2, Layers3, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
const services = [
  {
    title: "UI/UX Design",
    text: "I design clean, intuitive interfaces focused on usability, visual hierarchy, and user experience.",
    Icon: PenTool,
  },
  {
    title: "Web Development",
    text: "I build responsive and functional websites using modern frontend and backend technologies.",
    Icon: Code2,
  },
  {
    title: "System Development",
    text: "I develop web-based management systems that help businesses organize and automate their processes.",
    Icon: Layers3,
  },
];
export default function Services() {
  return (
    <section className="services-band">
      <div className="container section">
        <Reveal>
          <SectionHeading
            number="04"
            label="WHAT I DO"
            title="Good design. Solid foundations."
          />
          <div className="services-grid">
            {services.map(({ title, text, Icon }, i) => (
              <article key={title}>
                <div className="service-top">
                  <Icon size={27} strokeWidth={1.3} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact" aria-label={`Discuss ${title}`}>
                  <ArrowUpRight size={22} />
                </a>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

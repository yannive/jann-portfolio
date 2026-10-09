import { GraduationCap, ArrowUpRight } from "lucide-react";
import { profile, experience, certifications } from "../data/profile";
import { Reveal, SectionHeading } from "./Shared";
export default function Experience() {
  return (
    <section id="experience" className="section container experience">
      <Reveal>
        <SectionHeading
          number="06"
          label="EXPERIENCE & EDUCATION"
          title="Education & practical experience."
        />
        <div className="education-row">
          <div className="education-icon">
            <GraduationCap size={26} />
          </div>
          <div>
            <p className="eyebrow">
              EDUCATION {profile.educationYears && <span> / {profile.educationYears}</span>}
            </p>
            <h3>National Teachers College</h3>
            <p>Bachelor of Science in Information Technology</p>
          </div>
          <span className="student-tag">Currently a student</span>
        </div>
        {experience.map((item) => (
          <div className="experience-entry" key={item.title}>
            <p className="eyebrow">{item.years}</p>
            <h3>
              {item.title} · {item.organization}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
        {certifications.map((c) => (
          <div className="experience-entry" key={c.title}>
            <h3>{c.title}</h3>
            <p>
              {c.issuer} · {c.year}
            </p>
          </div>
        ))}
        <div className="experience-note">
          <p>
            Learning through building.
            <br />
            <span>Explore my client and school projects.</span>
          </p>
          <a className="text-link" href="#projects">
            See the work <ArrowUpRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

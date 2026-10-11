import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal } from "../components/common/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";
export default function About() {
  return (
    <section id="about" className="about-band">
      <div className="container section">
        <Reveal>
          <SectionHeading
            number="02"
            label="ABOUT ME"
            title="A designer's eye. A developer's mind."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="portrait">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt="Jann Eirich Cipriano"
                loading="lazy"
              />
            ) : (
              <div className="portrait-placeholder">
                <span className="portrait-cross">+</span>
                <span className="monogram">
                  jc<span>.</span>
                </span>
                <span className="photo-note">CURIOUS MIND. HANDS-ON MAKER.</span>
              </div>
            )}
            <div className="portrait-caption">
              <span>Jann Eirich N. Cipriano</span>
              <ArrowUpRight size={19} />
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <p className="about-lead">
              Curious by nature.
              <br />
              Thoughtful by design.
            </p>
            <p>
              I'm Jann Eirich N. Cipriano, an Information Technology student at
              National Teachers College with a growing passion for UI/UX design
              and web development.
            </p>
            <p>
              I enjoy transforming ideas and business processes into simple,
              functional, and user-friendly digital solutions. My experience
              includes designing interfaces, developing web applications,
              working with databases, and building inventory and management
              systems.
            </p>
            <p>
              My goal is to continue improving as a designer and developer while
              creating digital products that are both useful and enjoyable to
              use.
            </p>
            <div className="about-facts">
              <span>
                <MapPin size={15} /> Manila, Philippines
              </span>
              <span>BS Information Technology</span>
              <span>UI/UX Design & Web Development</span>
              <span>
                <i className="status-dot" /> Open to freelance opportunities
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

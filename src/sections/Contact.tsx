import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contactInfo } from "../data/contact";
import { Reveal } from "../components/common/Reveal";
import { SocialLinks } from "../components/common/SocialLinks";
import CopyButton from "../components/common/CopyButton";

export default function Contact() {
  return (
    <section id="contact" className="contact-band" aria-labelledby="contact-heading">
      <div className="section container contact-grid direct-contact">
        <Reveal>
          <p className="eyebrow">07 <span> / CONTACT</span></p>
          <h2 id="contact-heading">Get in touch.<br /><span className="serif">Stay connected.</span></h2>
          <p>For project inquiries, freelance work, or internship opportunities, reach me directly by email, phone, or social media.</p>
          <p className="availability"><span /> Open to freelance &amp; internship opportunities</p>
        </Reveal>
        <Reveal className="contact-panel">
          <h3>Contact details</h3>
          <p className="contact-panel-intro">Choose the way that works best for you.</p>
          <dl className="contact-details">
            <div>
              <dt><Mail size={16} aria-hidden="true" /> Email</dt>
              <dd>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}<ArrowUpRight size={17} aria-hidden="true" /></a>
                <CopyButton value={contactInfo.email} label="Copy email" />
              </dd>
            </div>
            <div>
              <dt><Phone size={16} aria-hidden="true" /> Phone</dt>
              <dd>
                <a href={`tel:${contactInfo.phone}`}>+63 942 910 5875<ArrowUpRight size={17} aria-hidden="true" /></a>
                <CopyButton value={contactInfo.phone} label="Copy phone" />
              </dd>
            </div>
          </dl>
          <h4 className="contact-social-heading">Find me on social media</h4>
          <SocialLinks showLabels socialOnly />
        </Reveal>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal, SocialLinks } from "./Shared";
import { submitContact } from "../lib/contact";
export default function Contact() {
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    const data = new FormData(e.currentTarget);
    try {
      const result = await submitContact({
        name: String(data.get("name")),
        email: String(data.get("email")),
        subject: String(data.get("subject")),
        message: String(data.get("message")),
      });
      setDraft(result.draft);
      setStatus(
        "Message prepared. This form is a preview and has not sent your message. You can copy your draft below.",
      );
    } catch {
      setStatus("Your message could not be prepared. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section id="contact" className="contact-band">
      <div className="section container contact-grid">
        <Reveal>
          <p className="eyebrow">
            07 <span> / SAY HELLO</span>
          </p>
          <h2>
            Let's build
            <br />
            something
            <br />
            <span className="serif">together.</span>
            <ArrowUpRight className="contact-arrow" />
          </h2>
          <p>
            Have a project, opportunity, or idea in mind?
            <br />
            I'd love to hear about it.
          </p>
          <p className="availability">
            <span /> Open to freelance & internship opportunities
          </p>
          {profile.email ? (
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={19} />
            </a>
          ) : (
            <p className="contact-placeholder">Email address coming soon</p>
          )}
          <SocialLinks />
        </Reveal>
        <Reveal>
          <form onSubmit={submit} className="contact-form">
            <div className="form-row">
              <label>
                Your name
                <input
                  required
                  autoComplete="name"
                  name="name"
                  placeholder="Alex Morgan"
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  required
                  autoComplete="email"
                  type="email"
                  name="email"
                  placeholder="alex@example.com"
                  maxLength={254}
                />
              </label>
            </div>
            <label>
              Subject
              <input
                required
                name="subject"
                placeholder="A project, an opportunity, or just hello"
                maxLength={200}
              />
            </label>
            <label>
              Your message
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me a little about what you have in mind…"
                maxLength={5000}
              />
            </label>
            <p className="form-note">
              Preview form — messages are not delivered yet.
            </p>
            <button className="button primary" disabled={busy} type="submit">
              {busy ? "Preparing…" : "Send Message"}
              <ArrowUpRight size={18} />
            </button>
            <div role="status" aria-live="polite" className="form-status">
              {status && (
                <p>
                  <Check size={17} />
                  {status}
                </p>
              )}
            </div>
            {draft && (
              <button
                className="text-link"
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(draft);
                    setStatus("Draft copied. No message has been sent.");
                  } catch {
                    setStatus(
                      "Copy is unavailable. Select and copy the draft below.",
                    );
                  }
                }}
              >
                <Copy size={16} /> Copy message draft
              </button>
            )}
            {draft && (
              <details className="draft-details">
                <summary>View message draft</summary>
                <pre>{draft}</pre>
              </details>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

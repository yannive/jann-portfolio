import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, LoaderCircle, CircleAlert } from "lucide-react";
import { contactInfo } from "../data/contact";
import { Reveal, SocialLinks } from "./Shared";
import CopyButton from "./CopyButton";
import {
  submitContact,
  validateContact,
  type ContactMessage,
  type ContactResult,
} from "../lib/contact";

const empty: ContactMessage = { name: "", email: "", subject: "", message: "" };
const fields = [
  {
    name: "name",
    label: "Your name",
    placeholder: "Alex Morgan",
    max: 100,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email address",
    placeholder: "alex@example.com",
    max: 254,
    autoComplete: "email",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "A project, an opportunity, or just hello",
    max: 200,
  },
  {
    name: "message",
    label: "Your message",
    placeholder: "Tell me a little about what you have in mind…",
    max: 5000,
  },
] as const;

export default function Contact() {
  const [values, setValues] = useState<ContactMessage>(empty);
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactMessage, boolean>>
  >({});
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<ContactResult | null>(null);
  const [error, setError] = useState("");
  const inFlight = useRef(false);
  const reduce = useReducedMotion();
  const errors = validateContact(values);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    setTouched({ name: true, email: true, subject: true, message: true });
    const firstError = fields.find((field) => errors[field.name]);
    if (firstError) {
      event.currentTarget
        .querySelector<HTMLElement>(`[name="${firstError.name}"]`)
        ?.focus();
      return;
    }
    inFlight.current = true;
    setBusy(true);
    setError("");
    setResult(null);
    try {
      setResult(await submitContact(values));
    } catch {
      setError(
        "Your message could not be processed. Your text is still here — please try again.",
      );
    } finally {
      inFlight.current = false;
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
          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                <CopyButton value={contactInfo.email} label="Copy email" />
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                <CopyButton value={contactInfo.phone} label="Copy phone" />
              </dd>
            </div>
          </dl>
          <SocialLinks showLabels />
        </Reveal>
        <Reveal>
          <form
            onSubmit={submit}
            className="contact-form"
            noValidate
            aria-busy={busy}
          >
            <fieldset disabled={busy} className="contact-fields">
              <legend className="sr-only">
                Your contact details and message
              </legend>
              {fields.map((field) => {
                const shownError = touched[field.name]
                  ? errors[field.name]
                  : undefined;
                const common = {
                  id: `contact-${field.name}`,
                  name: field.name,
                  required: true,
                  value: values[field.name],
                  maxLength: field.max,
                  placeholder: field.placeholder,
                  "aria-invalid": Boolean(shownError),
                  "aria-describedby": shownError
                    ? `error-${field.name}`
                    : undefined,
                  onBlur: () =>
                    setTouched((previous) => ({
                      ...previous,
                      [field.name]: true,
                    })),
                  onChange: (
                    event: React.ChangeEvent<
                      HTMLInputElement | HTMLTextAreaElement
                    >,
                  ) => {
                    setValues((previous) => ({
                      ...previous,
                      [field.name]: event.target.value,
                    }));
                    setResult(null);
                    setError("");
                  },
                };
                return (
                  <div
                    className={`form-field field-${field.name}`}
                    key={field.name}
                  >
                    <label htmlFor={common.id}>{field.label}</label>
                    {field.name === "message" ? (
                      <textarea {...common} rows={5} />
                    ) : (
                      <input
                        {...common}
                        type={field.name === "email" ? "email" : "text"}
                        autoComplete={
                          "autoComplete" in field
                            ? field.autoComplete
                            : undefined
                        }
                      />
                    )}
                    <div
                      className="field-feedback"
                      id={`error-${field.name}`}
                      aria-live="polite"
                    >
                      {shownError && (
                        <span>
                          <CircleAlert size={12} />
                          {shownError}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </fieldset>
            <p className="form-note">
              Demo form — you can try it, but messages aren't delivered yet.
            </p>
            <button className="button primary" disabled={busy} type="submit">
              {busy ? "Preparing your message…" : "Send Message"}
              {busy ? (
                <LoaderCircle className="loading-spinner" size={18} />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </button>
            <div role="status" aria-live="polite" className="form-status">
              <AnimatePresence>
                {result && (
                  <motion.div
                    className="form-success"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.2 }}
                  >
                    <span className="success-icon">
                      <Check size={19} />
                    </span>
                    <div>
                      <strong>
                        {result.mode === "demo"
                          ? "Demo complete. Your message is ready."
                          : "Message sent. Thank you!"}
                      </strong>
                      <p>
                        {result.mode === "demo"
                          ? "No email was sent. You can keep a copy of your message below."
                          : "I'll get back to you as soon as I can."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {error && (
              <p className="submit-error" role="alert">
                {error}
              </p>
            )}
            {result?.draft && (
              <div className="message-draft">
                <CopyButton value={result.draft} label="Copy message draft" />
                <details className="draft-details">
                  <summary>View message draft</summary>
                  <pre>{result.draft}</pre>
                </details>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

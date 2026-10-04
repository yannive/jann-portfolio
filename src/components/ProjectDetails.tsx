import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { type Project } from "../data/projects";
import { processSteps } from "../data/process";
import ProjectPreview from "./ProjectPreview";
import { handleTabKeys } from "./Tabs";

const tabs = ["Overview", "Features", "Screenshots", "Workflow"] as const;
export default function ProjectDetails({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  const [slide, setSlide] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    setTab("Overview");
    setSlide(0);
    setImageFailed(false);
    if (project) {
      dialog.current?.showModal();
      const before = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = before;
      };
    }
    dialog.current?.close();
  }, [project]);
  const screenshots = project?.screenshots?.length
    ? project.screenshots
    : project?.image
      ? [
          {
            src: project.image,
            alt: `${project.title} interface`,
            caption: "Project overview",
          },
        ]
      : [];
  const changeSlide = (index: number) => {
    setImageFailed(false);
    setSlide((index + screenshots.length) % screenshots.length);
  };
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <>
          <div className="detail-header">
            <p className="eyebrow">{project.category}</p>
            <button
              className="dialog-close"
              onClick={onClose}
              aria-label="Close project details"
              autoFocus
            >
              <X />
            </button>
            <h2 id="project-dialog-title">{project.title}</h2>
          </div>
          <div
            role="tablist"
            className="detail-tabs"
            aria-label="Project details"
            onKeyDown={handleTabKeys}
          >
            {tabs.map((item) => (
              <button
                key={item}
                role="tab"
                id={`detail-tab-${item}`}
                aria-selected={tab === item}
                aria-controls={`detail-panel-${item}`}
                tabIndex={tab === item ? 0 : -1}
                onClick={() => setTab(item)}
              >
                {item}
              </button>
            ))}
          </div>
          {tabs.map((item) => (
            <section
              key={item}
              role="tabpanel"
              id={`detail-panel-${item}`}
              aria-labelledby={`detail-tab-${item}`}
              hidden={tab !== item}
              tabIndex={0}
              className="detail-panel"
            >
              {tab === item && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item === "Overview" && (
                    <>
                      <h3>Project overview</h3>
                      <p>{project.description}</p>
                      <div className="case-grid">
                        <div>
                          <h3>The problem</h3>
                          <p>{project.problem}</p>
                        </div>
                        <div>
                          <h3>Proposed solution</h3>
                          <p>{project.solution}</p>
                        </div>
                      </div>
                      <div className="role-note">
                        <h3>My role</h3>
                        <p>
                          {project.role ||
                            "A detailed breakdown of my contributions will be added here."}
                        </p>
                      </div>
                      <h3>Technologies used</h3>
                      <div className="tags">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </>
                  )}
                  {item === "Features" && (
                    <>
                      <h3>Main features</h3>
                      <p>The core capabilities of {project.shortTitle}.</p>
                      <ul className="feature-list">
                        {project.features.map((feature) => (
                          <li key={feature}>
                            <Check size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <h3>Technology stack</h3>
                      <div className="tags">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </>
                  )}
                  {item === "Screenshots" && (
                    <>
                      <h3>Screenshots & interface</h3>
                      <figure className="screenshot-figure">
                        {screenshots.length > 0 && !imageFailed ? (
                          <motion.img
                            key={slide}
                            initial={{ opacity: reduce ? 1 : 0 }}
                            animate={{ opacity: 1 }}
                            src={screenshots[slide].src}
                            alt={screenshots[slide].alt}
                            onError={() => setImageFailed(true)}
                          />
                        ) : (
                          <div
                            className={`gallery-placeholder project-${project.id}`}
                            aria-hidden="true"
                          >
                            <ProjectPreview id={project.id} />
                          </div>
                        )}
                        <figcaption>
                          {imageFailed
                            ? "This screenshot is unavailable. An illustrative preview is shown instead."
                            : screenshots.length
                              ? screenshots[slide].caption
                              : "Illustrative preview — actual project screenshots will be added here."}
                        </figcaption>
                      </figure>
                      {screenshots.length > 1 && (
                        <div className="gallery-controls">
                          <button
                            onClick={() => changeSlide(slide - 1)}
                            aria-label="Previous screenshot"
                          >
                            <ArrowLeft size={18} />
                          </button>
                          <span role="status">
                            {slide + 1} / {screenshots.length}
                          </span>
                          <button
                            onClick={() => changeSlide(slide + 1)}
                            aria-label="Next screenshot"
                          >
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                  {item === "Workflow" && (
                    <>
                      <h3>Development process</h3>
                      {!project.process && (
                        <p>
                          Project-specific milestones are coming soon. This is
                          the general workflow I follow.
                        </p>
                      )}
                      <ol className="case-process">
                        {(
                          project.process ||
                          processSteps.map((step) => ({
                            title: step.title,
                            description: step.summary,
                          }))
                        ).map((step, index) => (
                          <li key={step.title}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <div>
                              <h4>{step.title}</h4>
                              <p>{step.description}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}
                </motion.div>
              )}
            </section>
          ))}
          <div className="detail-footer">
            <button className="text-link" onClick={onClose}>
              <ArrowLeft size={16} /> Back to projects
            </button>
            <div>
              {project.liveUrl && (
                <a
                  className="text-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live website <ArrowUpRight size={16} />
                </a>
              )}
              {project.github && (
                <a
                  className="text-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}

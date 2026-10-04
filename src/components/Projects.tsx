import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Github, X } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { Reveal, SectionHeading } from "./Shared";
import ProjectPreview from "./ProjectPreview";
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected) {
      dialog.current?.showModal();
      const before = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = before;
      };
    } else dialog.current?.close();
  }, [selected]);
  return (
    <section id="projects" className="section container">
      <Reveal>
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title="Ideas, brought to life."
        >
          <p>
            A selection of interfaces and systems.
            <br />
            Built around real people and real needs.
          </p>
        </SectionHeading>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal className={`project project-${project.id}`} key={project.id}>
            <button
              className="project-visual"
              onClick={() => setSelected(project)}
              aria-label={`View ${project.title}`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
              ) : (
                <>
                  <ProjectPreview id={project.id} />
                  <span className="preview-label">ILLUSTRATIVE PREVIEW</span>
                </>
              )}
              <span className="project-open">
                <ArrowUpRight size={24} />
              </span>
            </button>
            <div className="project-meta">
              <span>{project.category}</span>
              <span>0{i + 1}</span>
            </div>
            <div className="project-title">
              <h3>{project.shortTitle}</h3>
              <button
                className="text-link"
                onClick={() => setSelected(project)}
              >
                View Project <ArrowUpRight size={17} />
              </button>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {project.github && (
              <a
                className="text-link github-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={16} />
              </a>
            )}
          </Reveal>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
        onClose={() => setSelected(null)}
        aria-labelledby="project-dialog-title"
      >
        {selected && (
          <div>
            <button
              className="dialog-close"
              onClick={() => setSelected(null)}
              aria-label="Close project details"
              autoFocus
            >
              <X />
            </button>
            <p className="eyebrow">{selected.category}</p>
            <h2 id="project-dialog-title">{selected.title}</h2>
            <p>{selected.description}</p>
            <h3>Core features</h3>
            <ul className="feature-list">
              {selected.features.map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <h3>Built with</h3>
            <div className="tags">
              {selected.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {(selected.liveUrl || selected.github) && (
              <div className="dialog-actions">
                {selected.liveUrl && (
                  <a
                    className="button primary"
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit website <ArrowUpRight size={16} />
                  </a>
                )}
                {selected.github && (
                  <a
                    className="button secondary"
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}

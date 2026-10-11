import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Github, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { type Project } from "../../data/projects";
import ProjectGallery from "./ProjectGallery";
import { handleTabKeys } from "../../utils/tabKeyboard";

import ProjectPanels from "./ProjectPanels";

const tabs = [
  "Overview",
  "Features",
  "Screenshots",
  "Workflow",
  "Video",
] as const;
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
  const visibleTabs = tabs.filter((item) => {
    if (!project) return false;
    if (item === "Features")
      return Boolean(project.features.length || project.demonstrated?.length);
    if (item === "Screenshots")
      return Boolean(
        project.screenshots?.some((image) => !image.placeholder) ||
        project.image,
      );
    if (item === "Workflow") return Boolean(project.process?.length);
    if (item === "Video") return Boolean(project.video?.src);
    return Boolean(project.description || project.problem || project.solution);
  });
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
    ? project.screenshots.filter((image) => !image.placeholder)
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
    if (screenshots.length)
      setSlide((index + screenshots.length) % screenshots.length);
  };
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not(:disabled), video[controls], [tabindex]:not([tabindex="-1"])',
          ),
        ).filter(
          (element) =>
            element.getClientRects().length > 0 && element.tabIndex >= 0,
        );
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
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
            {(project.status || project.organization) && (
              <div className="project-badges">
                {project.status && (
                  <span className="project-status">{project.status}</span>
                )}
                {project.organization && <span>{project.organization}</span>}
              </div>
            )}
          </div>
          <div
            role="tablist"
            className="detail-tabs"
            aria-label="Project details"
            onKeyDown={handleTabKeys}
          >
            {visibleTabs.map((item) => (
              <button
                key={item}
                role="tab"
                id={`detail-tab-${item}`}
                aria-selected={tab === item}
                aria-controls={`detail-panel-${item}`}
                tabIndex={tab === item ? 0 : -1}
                onClick={() => setTab(item)}
              >
                {item === "Features"
                  ? "Scope"
                  : item === "Workflow"
                    ? "Development plan"
                    : item}
              </button>
            ))}
          </div>
          {visibleTabs.map((item) => (
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
                  transition={{ duration: reduce ? 0 : 0.15 }}
                >
                  {item === "Screenshots" ? (
                    <ProjectGallery
                      screenshots={screenshots}
                      slide={slide}
                      imageFailed={imageFailed}
                      changeSlide={changeSlide}
                      onImageError={() => setImageFailed(true)}
                    />
                  ) : (
                    <ProjectPanels project={project} item={item} />
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

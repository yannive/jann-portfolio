import { ArrowUpRight, Figma, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { type Project } from "../../data/projects";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const reduce = useReducedMotion();
  const cover = project.image || project.screenshots?.[0]?.src;
  const placeholderCover = !project.image && project.screenshots?.[0]?.placeholder;
  if (project.figmaUrl) {
    return (
      <motion.article
        className={`project project-${project.id}`}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.06 }}
        transition={{ duration: 0.4 }}
      >
        <a className="project-visual figma-cover" href={project.figmaUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} in Figma (new tab)`}>
          <Figma size={48} aria-hidden="true" />
          <span className="eyebrow">FIGMA DESIGN</span>
          <strong>{project.title}</strong>
          <span>Explore the design in Figma</span>
          <span className="project-open"><ArrowUpRight size={24} /></span>
        </a>
        <div className="project-meta"><span>{project.category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="project-title">
          <h3>{project.shortTitle}</h3>
          <a className="text-link" href={project.figmaUrl} target="_blank" rel="noreferrer">View in Figma <ArrowUpRight size={17} /></a>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </motion.article>
    );
  }
  return (
    <motion.article
      className={`project project-${project.id}`}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.07 }}
    >
      <button
        className="project-visual"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.title}`}
      >
        {cover ? (
          <>
          <img
            src={cover}
            alt={project.image ? `${project.title} screenshot` : project.screenshots?.[0]?.alt}
            loading="lazy"
          />
          {placeholderCover && <span className="preview-label">SCREENSHOT PLACEHOLDER</span>}
          </>
        ) : (
          <>
            <ProjectPreview id={project.id} />
            <span className="preview-label">ILLUSTRATIVE PREVIEW</span>
          </>
        )}
        <span className="project-open">
          <ArrowUpRight size={24} />
        </span>
        <span className="project-peek">
          <strong>
            Explore the project <ArrowUpRight size={16} />
          </strong>
          <span>{project.features.slice(0, 3).join(" · ")}</span>
        </span>
      </button>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      {(project.featured || project.status) && (
        <div className="project-badges">
          {project.featured && <span>Featured project</span>}
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
      )}
      <div className="project-title">
        <h3>{project.shortTitle}</h3>
        <button className="text-link" onClick={() => onOpen(project)} aria-label={`View Project Details: ${project.title}`}>
          View Project Details <ArrowUpRight size={17} />
        </button>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tags">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
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
    </motion.article>
  );
}

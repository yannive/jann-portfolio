import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { type Project } from "../data/projects";
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
      <div className="project-title">
        <h3>{project.shortTitle}</h3>
        <button className="text-link" onClick={() => onOpen(project)}>
          View Project <ArrowUpRight size={17} />
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

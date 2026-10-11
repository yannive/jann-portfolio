import { ArrowUpRight, Figma, Github } from "lucide-react";
import type { Project } from "../../data/projects";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const cover = project.screenshots?.find((image) => !image.placeholder);
  if (project.figmaUrl)
    return (
      <article className="project prototype-card">
        <div className="prototype-mark" aria-hidden="true">
          <Figma size={32} />
        </div>
        <div>
          <p className="eyebrow">UI/UX DESIGN · INTERACTIVE PROTOTYPE</p>
          <h3>{project.title}</h3>
          <p className="project-description">
            Explore the AXIS interface and connected screens in Figma.
          </p>
        </div>
        <a
          className="button secondary"
          href={project.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore AXIS in Figma (opens in a new tab)"
        >
          View prototype <ArrowUpRight size={18} />
        </a>
      </article>
    );
  return (
    <article
      className={`project project-${project.id} ${project.id === "shawarma" ? "project-lead" : ""}`}
    >
      {cover && (
        <button
          className="project-visual screenshot-cover"
          onClick={() => onOpen(project)}
          aria-label={`View ${project.title}`}
        >
          <ProjectImage image={cover} />
          <span className="project-open" aria-hidden="true">
            <ArrowUpRight size={22} />
          </span>
        </button>
      )}
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3>{project.title}</h3>
        {project.status && (
          <p className="project-status-label">In development</p>
        )}
        <p className="project-description">{project.description}</p>
        <div className="tags">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <button
            className="text-link"
            onClick={() => onOpen(project)}
            aria-label={`View Project Details: ${project.title}`}
          >
            Explore project <ArrowUpRight size={18} />
          </button>
          {project.github && (
            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live website <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

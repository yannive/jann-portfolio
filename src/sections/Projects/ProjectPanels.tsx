import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";

export default function ProjectPanels({
  project,
  item,
}: {
  project: Project;
  item: string;
}) {
  return (
    <>
      {item === "Overview" && (
        <>
          <h3>Project overview</h3>
          <p>{project.description}</p>
          <div className="case-grid">
            {project.problem && (
              <div>
                <h3>The problem</h3>
                <p>{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h3>Proposed solution</h3>
                <p>{project.solution}</p>
              </div>
            )}
          </div>
          {project.role && (
            <div className="role-note">
              <h3>My role</h3>
              <p>{project.role}</p>
            </div>
          )}
          {project.tech.length > 0 && (
            <>
              <h3>Technologies</h3>
              <div className="tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </>
          )}
        </>
      )}
      {item === "Features" && (
        <>
          {Boolean(project.demonstrated?.length) && (
            <>
              <h3>Visible in the interface</h3>
              <p>
                These elements are shown in the supplied screenshot. A
                screenshot does not verify the underlying workflows.
              </p>
              <ul className="scope-list">
                {project.demonstrated?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {project.features.length > 0 && (
            <>
              <h3>
                {project.status
                  ? "Planned and in-development scope"
                  : "Documented project scope"}
              </h3>
              <p>
                {project.status
                  ? "The project is in development; this list describes its intended capabilities, not a completed-feature checklist."
                  : "These capabilities are described in the project notes. Completion and deployment status are not documented."}
              </p>
              <ul className="scope-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {Boolean(project.algorithms?.length) && (
            <>
              <h3>Technical approach</h3>
              <dl className="project-algorithms">
                {project.algorithms?.map((algorithm) => (
                  <div key={algorithm.name}>
                    <dt>{algorithm.name}</dt>
                    <dd>{algorithm.description}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
        </>
      )}
      {item === "Workflow" && Boolean(project.process?.length) && (
        <>
          <h3>Development plan</h3>
          <p>
            The documented approach to this project. These stages are not a
            claim of completed delivery.
          </p>
          <ol className="case-process">
            {project.process?.map((step, index) => (
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
      {item === "Video" && project.video && (
        <>
          <h3>Video demonstration</h3>
          <figure className="project-video">
            <video
              controls
              playsInline
              preload="none"
              aria-label={`${project.title} video demonstration`}
            >
              <source src={project.video.src} />
              {project.video.captions && (
                <track
                  kind="captions"
                  src={project.video.captions}
                  srcLang="en"
                  label="English"
                  default
                />
              )}
            </video>
            <figcaption>{project.video.caption}</figcaption>
            <a
              className="text-link"
              href={project.video.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open video <ArrowUpRight size={16} />
            </a>
          </figure>
        </>
      )}
    </>
  );
}

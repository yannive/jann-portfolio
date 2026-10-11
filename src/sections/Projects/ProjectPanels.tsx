import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../../data/projects";
import { processSteps } from "../../data/process";

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
            <div>
              <h3>The problem</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>Proposed solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>
          {project.role && (
            <div className="role-note">
              <h3>My role</h3>
              <p>{project.role}</p>
            </div>
          )}
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
          <p>
            {project.status
              ? "Planned and in-development capabilities"
              : "The core capabilities"}{" "}
            of {project.shortTitle}.
          </p>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <Check size={16} />
                {feature}
              </li>
            ))}
          </ul>
          {project.algorithms && (
            <>
              <h3>Algorithms & decision support</h3>
              <dl className="project-algorithms">
                {project.algorithms.map((algorithm) => (
                  <div key={algorithm.name}>
                    <dt>{algorithm.name}</dt>
                    <dd>{algorithm.description}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
          <h3>Technology stack</h3>
          <div className="tags">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </>
      )}
      {item === "Workflow" && (
        <>
          <h3>Development process</h3>
          {project.status && (
            <p>
              This project is in development. The process below outlines the
              development plan; it does not imply that every stage is complete.
            </p>
          )}
          {!project.process && (
            <p>
              Project-specific milestones are coming soon. This is the general
              workflow I follow.
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
      {item === "Video" && (
        <>
          <h3>Video demonstration</h3>
          {project.video ? (
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
                Your browser does not support video playback.
              </video>
              <figcaption>{project.video.caption}</figcaption>
              <a
                className="text-link"
                href={project.video.src}
                target="_blank"
                rel="noreferrer"
              >
                Open video <ArrowUpRight size={16} />
              </a>
            </figure>
          ) : (
            <div className="video-placeholder">
              <p>A video walkthrough will be added when it is available.</p>
              <p>
                Explore the overview, features, and planned interface gallery in
                the meantime.
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}

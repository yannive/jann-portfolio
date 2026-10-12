import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  projects,
  projectFilters,
  type Project,
  type ProjectFilter,
} from "../../data/projects";
import { Reveal } from "../../components/common/Reveal";
import { SectionHeading } from "../../components/common/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const reduce = useReducedMotion();
  const filtered = projects.filter(
    (project) => filter === "All" || project.filters.includes(filter),
  );
  return (
    <section id="projects" className="section container">
      <Reveal>
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title="Less talk. More making."
        >
          <p>
            Real problems. Thoughtful solutions.
            <br />
            Take a look at what goes into the work.
          </p>
        </SectionHeading>
      </Reveal>
      <button className="project-tour-start" onClick={() => setSelected(projects.find((project) => !project.figmaUrl) ?? null)}>
        Start project tour <span aria-hidden="true">↗</span>
      </button>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        {projectFilters.map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
            <span aria-hidden="true">
              {item === "All"
                ? projects.length
                : projects.filter((project) => project.filters.includes(item))
                    .length}
            </span>
          </button>
        ))}
      </div>
      <p className="filter-count" role="status">
        {filtered.length
          ? `${filtered.length} ${filtered.length === 1 ? "project" : "projects"} · ${filter}`
          : "No UI/UX case studies added yet."}
      </p>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={filter}
          className={`project-grid ${filter !== "All" ? "is-filtered" : ""}`}
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : -6 }}
          transition={{ duration: reduce ? 0 : 0.18 }}
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelected}
            />
          ))}
          {!filtered.length && (
            <div className="project-empty">
              <span className="eyebrow">MORE TO COME</span>
              <h3>Design stories are on the way.</h3>
              <p>
                In the meantime, explore the interfaces and systems in my
                development projects.
              </p>
              <button
                className="button secondary"
                onClick={() => setFilter("All")}
              >
                Explore all projects
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <ProjectDetails
        project={selected}
        onClose={() => setSelected(null)}
        onNavigate={setSelected}
      />
    </section>
  );
}

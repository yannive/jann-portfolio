import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../../data/projects";
import ProjectPreview from "./ProjectPreview";

export default function ProjectGallery({
  project,
  screenshots,
  slide,
  imageFailed,
  reduce,
  changeSlide,
  onImageError,
}: {
  project: Project;
  screenshots: NonNullable<Project["screenshots"]>;
  slide: number;
  imageFailed: boolean;
  reduce: boolean | null;
  changeSlide: (index: number) => void;
  onImageError: () => void;
}) {
  return (
    <>
      <h3>Screenshots & interface</h3>
      {screenshots.some(
        (screenshot) => "placeholder" in screenshot && screenshot.placeholder,
      ) && (
        <p className="gallery-notice">
          These local placeholders show planned views, not actual application
          screenshots. No client records are displayed.
        </p>
      )}
      <figure className="screenshot-figure">
        {screenshots.length > 0 && !imageFailed ? (
          <motion.img
            key={slide}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            src={screenshots[slide]?.src}
            alt={screenshots[slide]?.alt}
            onError={onImageError}
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
              ? screenshots[slide]?.caption
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
  );
}

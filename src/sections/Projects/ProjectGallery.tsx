import { useState } from "react";
import { ArrowLeft, ArrowRight, Expand, Minimize } from "lucide-react";
import type { ProjectScreenshot } from "../../data/projects";
import ProjectImage from "./ProjectImage";

export default function ProjectGallery({
  screenshots,
  slide,
  imageFailed,
  changeSlide,
  onImageError,
}: {
  screenshots: ProjectScreenshot[];
  slide: number;
  imageFailed: boolean;
  changeSlide: (index: number) => void;
  onImageError: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const image = screenshots[slide];
  if (!image) return null;
  return (
    <>
      <div className="gallery-heading">
        <h3>Interface preview</h3>
        {!imageFailed && (
          <button
            className="text-link"
            aria-pressed={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <Minimize size={18} /> : <Expand size={18} />}
            {expanded ? "Fit to view" : "View larger"}
          </button>
        )}
      </div>
      <figure className="screenshot-figure">
        {imageFailed ? (
          <p role="status">This image could not be loaded.</p>
        ) : (
          <div
            className={`screenshot-scroll ${expanded ? "is-expanded" : ""}`}
            tabIndex={expanded ? 0 : undefined}
            role="region"
            aria-label="Project screenshot"
          >
            <ProjectImage image={image} onError={onImageError} />
          </div>
        )}
        <figcaption>{image.caption}</figcaption>
      </figure>
      {expanded && (
        <p className="gallery-help">
          Scroll across the image to inspect the interface. Choose “Fit to view”
          to return.
        </p>
      )}
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

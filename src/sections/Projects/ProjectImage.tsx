import type { ProjectScreenshot } from "../../data/projects";

/** Display-only crop: original screenshot files are never changed. */
export default function ProjectImage({
  image,
  onError,
}: {
  image: ProjectScreenshot;
  onError?: () => void;
}) {
  const width = image.width ?? 1920;
  const height = image.height ?? 1080;
  const crop = image.crop ?? { x: 0, y: 0, width, height };
  return (
    <span
      className="project-image"
      style={{ aspectRatio: `${crop.width} / ${crop.height}` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onError={onError}
        style={{
          width: `${(width / crop.width) * 100}%`,
          left: `${(-crop.x / crop.width) * 100}%`,
          top: `${(-crop.y / crop.height) * 100}%`,
        }}
      />
    </span>
  );
}

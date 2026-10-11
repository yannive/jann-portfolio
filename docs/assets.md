# Portfolio assets

## Portraits

`src/assets/hero-portrait.webp` supplies both Hero and About. `src/data/profileImage.ts` imports both, so Vite fingerprints them. Keep their crop positions in `src/styles/polish.css`. Hero loads eagerly with high priority; About loads lazily. The Hero also has a runtime image-error fallback.

## Project screenshots

The three supplied screenshots live in `public/images/projects/`. Lossless WebP replacements preserve the original dimensions and decoded pixels; original PNGs remain recoverable in Git history.

Add approved screenshots in this folder, then edit `src/data/projects.ts`:

```ts
screenshots: [
  {
    src: `${import.meta.env.BASE_URL}images/projects/example.webp`,
    alt: "Describe the actual interface shown",
    caption: "Project overview.",
  },
],
```

The first screenshot supplies the card cover unless `image` is set. Cards load lazily; gallery images load when their tab opens. Multiple screenshots enable previous/next controls. `ProjectPreview.tsx` supplies the illustrative fallback for missing/failed gallery images and must remain.

## Optional video

```ts
video: {
  src: `${import.meta.env.BASE_URL}videos/example.mp4`,
  caption: "Project walkthrough using sample data.",
  captions: `${import.meta.env.BASE_URL}videos/example.en.vtt`,
},
```

Create `public/videos/` only when needed. Use browser-playable MP4/WebM or a direct video URL, not a watch-page URL. Captions are optional but recommended. Featured projects retain their availability message when no video exists.

The favicon stays at `public/favicon.svg`; icons use Lucide. System fonts need no font downloads. Keep documentation outside `public/` and check screenshots for private information before publication.

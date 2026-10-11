# Portfolio assets

## Portraits

`src/assets/hero-portrait.webp` supplies the Hero portrait, imported and fingerprinted by Vite. About uses a compact text layout without a repeated portrait. Hero loads eagerly with high priority and retains an image-error fallback.

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

The first non-placeholder screenshot supplies the card cover. Cards load lazily; gallery images load when their tab opens. Multiple screenshots enable previous/next controls. Missing and placeholder galleries are hidden, and load failures show a clear message rather than invented interface artwork.

## Optional video

```ts
video: {
  src: `${import.meta.env.BASE_URL}videos/example.mp4`,
  caption: "Project walkthrough using sample data.",
  captions: `${import.meta.env.BASE_URL}videos/example.en.vtt`,
},
```

Create `public/videos/` only when needed. Use browser-playable MP4/WebM or a direct video URL, not a watch-page URL. Captions are optional but recommended. The Video tab is hidden unless a real video source exists.

The favicon stays at `public/favicon.svg`; icons use Lucide. System fonts need no font downloads. Keep documentation outside `public/` and check screenshots for private information before publication.

## Display-only cropping

Screenshots can declare original `width` and `height`, plus a `crop` rectangle (`x`, `y`, `width`, `height`) in original pixels. `ProjectImage` clips the display without changing the asset. The Shawarma and MR-PRIDE crops exclude browser controls, scrollbars, and the Windows taskbar. The gallery uses the same crop; View larger enables a keyboard-scrollable enlarged view. PrediQueue retains its full-page image in the gallery.

AXIS has a working Figma prototype link but no supplied interface image. Add a genuine export before replacing its compact prototype card with a screenshot. No r?sum? asset exists, so there is no download control.

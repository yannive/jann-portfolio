# Jann Eirich Cipriano — Portfolio

A responsive React, TypeScript, Tailwind CSS and Vite portfolio. Includes Framer Motion, Lucide icons, project filters and case-study tabs, interactive skills and process steps, saved light/dark themes, scroll progress, and a frontend demo contact form.

## Run locally

```sh
npm install
npm run dev
```

On Windows PowerShell with script execution restricted, use `npm.cmd` instead of `npm`.

```sh
npm run build
npm run preview
```

`build` runs strict TypeScript checking before generating `dist/`.

## Personalize

- `src/data/profile.ts`: add your email, social URLs, photo path, education years, work experience, internships, and certifications. Leave unknown values null; no fabricated roles are displayed. Add freelance, internship, and client experience to the `experience` array.
- `src/data/projects.ts`: edit project records, filter categories, problem and solution summaries. Add `role` and `process` when your specific contributions and milestones are ready. Optional `image`, `github`, and `liveUrl` fields connect screenshots and working links. Put images in `public/projects/`. Current previews are illustrative HTML/CSS compositions, not actual screenshots. The UI/UX filter intentionally has an empty state until a case study is added.
- `src/data/skills.ts`: maintain skill groups and their interactive usage descriptions.
- `src/data/process.ts`: edit the six workflow stages and outcomes.
- `src/styles.css`: base responsive layout. `src/interactions.css`: theme tokens, dark palette, interaction states, and responsive details. Tailwind utilities remain available throughout JSX.
- `src/lib/contact.ts`: validation and submission adapter. It currently simulates an 850 ms request and returns `mode: "demo"`; nothing is delivered or stored. Replace the delay with your Formspree, EmailJS, or Laravel/API integration, throw on failure, and return `mode: "sent"` only after the provider confirms success. The UI handles loading, errors, success, and a copyable draft. Validate and protect the real endpoint server-side; keep private credentials off the frontend.
- `index.html`: SEO and social metadata. Add your final canonical URL when publicly deployed.

Social icons without configured URLs are noninteractive, labeled placeholders. The hero is typography-led; the About section contains the photo placeholder. Native dialogs support Escape, focus trapping, and return focus to the launching button. Reduced motion is respected by both CSS and Framer Motion.

The email copy control activates when `profile.email` is configured. It confirms successful clipboard writes and explains how to copy manually if clipboard access fails. Only the theme preference is saved in localStorage (`jann-theme`); form contents are not persisted. The initial theme follows the device and keeps following device changes until the visitor chooses a theme.

### Add project screenshots

Add a `screenshots` array to any project. The detail view automatically displays previous/next controls when there is more than one image:

```ts
screenshots: [
  { src: "/projects/inventory-overview.webp", alt: "Inventory dashboard showing stock levels", caption: "Inventory overview" },
  { src: "/projects/inventory-batches.webp", alt: "Batch list organized by expiration date", caption: "Batch tracking" },
],
role: "Replace with your actual responsibilities.",
process: [
  { title: "Discovery", description: "Replace with your actual project work." },
],
```

Tabs support Left/Right, Home/End and Enter/Space. Skill descriptions respond to hover, focus and tap. All important interactions remain available with reduced motion and on touch devices; no custom cursor replaces the native pointer.

## Deployment

The generated `dist/` folder is a static website and can be deployed to a static host. Sites project identity lives in `.openai/hosting.json`. Its initial audience is private; update sharing when ready for clients and recruiters.

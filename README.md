# Jann Eirich Cipriano — Portfolio

A responsive React, TypeScript, Tailwind CSS and Vite portfolio. Includes Framer Motion, Lucide icons, accessible project dialogs, mobile navigation, and a frontend contact draft form.

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
- `src/data/projects.ts`: edit or add project records. Optional `image`, `github`, and `liveUrl` fields connect screenshots and working links. Put screenshots in `public/projects/` and use paths such as `/projects/shawarma.webp`. Current previews are illustrative HTML/CSS compositions, not actual screenshots.
- `src/data/skills.ts`: maintain skill groups.
- `src/styles.css`: colors, responsive layout and component styling. Tailwind utilities are also available throughout JSX.
- `src/lib/contact.ts`: replace the draft adapter with an API request when ready. It does not currently deliver messages. Implement server-side validation, rate limiting and spam protection with the backend. Never put private API keys in the frontend.
- `index.html`: SEO and social metadata. Add your final canonical URL when publicly deployed.

Social icons without configured URLs are noninteractive, labeled placeholders. The hero is typography-led; the About section contains the photo placeholder. Native dialogs support Escape, focus trapping, and return focus to the launching button. Reduced motion is respected by both CSS and Framer Motion.

## Deployment

The generated `dist/` folder is a static website and can be deployed to a static host. Sites project identity lives in `.openai/hosting.json`. Its initial audience is private; update sharing when ready for clients and recruiters.

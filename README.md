# Jann Eirich Cipriano — Portfolio

React + TypeScript + Vite portfolio with Tailwind CSS, Framer Motion, and Lucide icons. Includes themes, project filters, Figma links, native project dialogs, interactive skills/process steps, and direct contact links with copy controls.

## Development

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run preview
```

Use `npm.cmd` if PowerShell blocks npm scripts. The build also runs strict TypeScript checks and generates `dist/`. No lint script is configured.

## Structure

```text
public/
  favicon.svg
  images/projects/
docs/
  assets.md
src/
  assets/                    Portraits fingerprinted by Vite
  components/
    common/                  Reveal, SectionHeading, SocialLinks, CopyButton, ThemeToggle
    layout/                  Navbar, Footer, ScrollTools
  sections/
    Hero/                    Hero and ProfilePhoto
    Projects/                List, cards, dialog, panels, gallery, illustrative previews
    About.tsx
    Contact.tsx
    Experience.tsx
    Process.tsx
    Services.tsx
    Skills.tsx
  data/                      Portfolio content and image references
  hooks/                     useMediaQuery
  styles/                    Base, interactions, hero/contact, polish
  utils/                     Tab keyboard navigation
  App.tsx                    Section order and motion preferences
  main.tsx                   React entry and stylesheet order
```

Preserve the CSS import order in `main.tsx`: base, interactions, hero/contact, polish. Later layers intentionally override earlier rules.

## Maintaining content

- `src/data/contact.ts`: shared email, phone, and social links. The formatted phone label also lives in `src/sections/Contact.tsx`. There is no contact form/backend; links open email, phone, and social destinations.
- `src/data/projects.ts`: project records, filters, screenshots, Figma links, optional GitHub/live URLs, and workflows. AXIS opens Figma; other cards open dialogs. See [assets](docs/assets.md).
- `src/data/profile.ts`: education, experience, and certifications. Empty arrays hide optional entries.
- `src/data/skills.ts`: skill labels and descriptions. Android Studio remains portfolio content, not an app dependency.
- `src/data/process.ts`: the general workflow.
- `src/data/profileImage.ts`: required portrait imports. Replace `src/assets/profile.jpg` for Hero or `about-portrait.jpg` for About.
- Section components: introduction, About copy, services, and other small related content.

Dialogs retain keyboard tabs, Escape dismissal, scroll locking, and focus restoration. Gallery state remains in the dialog so tab switches preserve the selected slide. Reduced motion and mobile pointer behavior are retained. Only the theme choice is stored in localStorage (`jann-theme`).

## Deployment

The existing Cloudflare Pages build command is compatible with `npm run build`, output `dist/`. The local `portfolio` directory is the Git repository root; do not infer a dashboard root-directory change from the enclosing workspace. Actual dashboard settings and the live domain are not recorded here.

`.openai/hosting.json` contains separate Sites hosting metadata and is preserved. Review this local branch before pushing: a push to a deployment branch may trigger your existing integration. This cleanup does not require DNS or GitHub settings changes.

Keep secrets out of frontend code and `VITE_*` variables, which are public when bundled. `.gitignore` excludes environment files, dependencies, output, logs, and TypeScript build metadata. Documentation belongs outside `public/`, which Vite copies into the production output.

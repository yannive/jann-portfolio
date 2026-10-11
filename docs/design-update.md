# Project-focused portfolio update

Implemented on `design/project-focused-portfolio`. Publication to GitHub and the existing website was subsequently authorized. Domain and hosting configuration remain unchanged.

## What changed

- Shawarma Shack leads the work section because the supplied dashboard and FEFO/CodeIgniter notes provide a concrete project story. MRP ElectroDesk and PrediQueue follow; AXIS remains a direct Figma prototype link.
- Three filters replace six overlapping categories. Cards use clearer descriptions, readable metadata, consistent screenshot framing, and accessible project controls.
- `ProjectImage` applies display-only crop rectangles from `src/data/projects.ts`. Screenshot files remain unchanged; browser controls and taskbars are excluded from the two affected previews. The dialog offers a larger, scrollable view using the same crop.
- Project details separate screenshot-visible interface elements from documented scope and planned work. No roles, outcomes, completion claims, metrics, or responsibilities were invented. Empty workflows, placeholder galleries, and unavailable video tabs are omitted.
- Dialogs retain native modal behavior, Escape dismissal, scroll locking, and focus restoration, with explicit Tab/Shift+Tab wrapping. Image errors show an honest error message; unused illustrative fallback code was removed.
- Hero keeps its primary work/contact actions and one portrait, without pointer-following text or the repeated role label. About uses a compact text layout rather than another portrait.
- Toolkit groups and process steps use keyboard-accessible native disclosure controls; services, spacing, and mobile typography are condensed. All skill content, including Android Studio, remains available.
- Theme colors remain olive/pale green. Muted text, skip-link colors, focus rings, control sizing, and mobile filter layout were refined.

## Maintenance

`src/styles/project-focus.css` is the final refinement layer, imported after the existing styles. Project screenshot dimensions and crops are in `src/data/projects.ts`; `demonstrated` describes only what is visible in supplied screenshots. Do not use it as proof of operational or deployed functionality.

## Validation

- Strict TypeScript and production build pass. No lint script is configured.
- Chrome checks cover light/dark themes at 320, 390, 768, 1024, and 1440 px: navigation, all filters, all three project dialogs, keyboard tabs, focus containment/restoration, Escape, screenshot loading/enlargement, theme persistence, toolkit/process disclosures, and email/phone clipboard controls.
- No horizontal overflow, missing asset responses, page exceptions, or browser console errors in the final matrix.
- Computed foreground/background contrast checks found no failures among rendered text in the tested states. This is a targeted contrast check, not a full accessibility certification.
- Desktop/mobile screenshots and the local QA runner/results are saved outside the repository in the workspace (`portfolio-qa.mjs` and `refactor-qa/focus-results.json`). These are not production assets or application dependencies.

## Gaps

- No genuine AXIS screenshot or résumé exists in the repository. AXIS uses a compact prototype link; a résumé download is omitted.
- Personal roles/contributions, challenges, measured results, and exact completion status are not documented sufficiently to add claims. These can be added when supplied.
- External link destinations were preserved and checked in markup; authenticated Figma/social access was not tested. No actual video sources or multi-image galleries exist in current records.
- Physical devices, Safari/Firefox, and screen readers were not tested.

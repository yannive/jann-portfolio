# Portfolio cleanup report

Date: October 11, 2026 (Asia/Manila)

Branch: `refactor/portfolio-cleanup`, created from `b65226b` before source edits. The cleanup was initially delivered locally for review. The user subsequently approved committing and pushing this branch to GitHub; production deployment was not requested.

## File organization

- Moved Navbar, Footer, and ScrollTools into `src/components/layout/`.
- Moved CopyButton and ThemeToggle into `src/components/common/`. Split Shared into Reveal, SectionHeading, and SocialLinks in that folder; removed its unused ArrowLink export.
- Moved Hero and ProfilePhoto into `src/sections/Hero/`.
- Moved Projects, ProjectCard, ProjectDetails, and ProjectPreview into `src/sections/Projects/`. Extracted ProjectGallery and ProjectPanels from ProjectDetails. Modal lifecycle, selected tab, selected screenshot, error state, and scroll locking remain in ProjectDetails.
- Moved About, Skills, Services, Process, Experience, and Contact into `src/sections/`.
- Moved the keyboard-only Tabs module to `src/utils/tabKeyboard.ts`.
- Moved all four stylesheets into `src/styles/`, preserving their import order.
- Updated App/main/component imports and project screenshot references.
- Consolidated asset documentation into `docs/assets.md` and rewrote README to describe the current application.
- Added `npm run typecheck` using the existing TypeScript dependency. Application dependency declarations and package-lock are unchanged.

## Removed and optimized

- Removed unused `src/lib/contact.ts` and its empty directory. The live Contact section already used direct links and copy controls.
- Removed the four unused illustrative SVG assets: electrodesk-forecast, electrodesk-overview, shawarma-batches, and shawarma-overview. The active JSX-generated fallback previews remain.
- Removed obsolete selectors from 93 CSS rules for the former contact form and commerce/shop illustration, plus the unused spinner keyframes. Shared selectors in mixed rules were retained.
- Converted mr-pride-home, prediqueue-home, and shawarma-dashboard from PNG to lossless WebP at unchanged dimensions. Compared decoded RGBA buffers: all pixels match. Replaced only these referenced images; original PNGs remain in Git history and the local baseline build.
- Removed asset README files from their former locations after consolidating their relevant instructions. The README formerly under public is no longer shipped in production.
- Portrait files, displayed content (including Android Studio), favicon, responsive breakpoints, animation behavior, and deployment configuration are preserved.

## Production size comparison

Sizes are decimal KB/MB. Totals include all files in each production directory, not an initial page-load transfer measurement.

| Metric | Before | After | Change |
| --- | ---: | ---: | ---: |
| Three project screenshots | 1,931,113 bytes | 1,211,894 bytes | 37.2% smaller |
| CSS | 64,359 bytes | 58,011 bytes | 9.9% smaller |
| CSS gzip | 14,225 bytes | 12,899 bytes | 9.3% smaller |
| JavaScript | 420,013 bytes | 420,308 bytes | +295 bytes |
| JavaScript gzip | 132,421 bytes | 132,510 bytes | +89 bytes |
| Entire production output | 3,175,477 bytes | 2,441,784 bytes | 23.1% smaller |

Individual screenshots: MR-Pride 643,995 → 354,920 bytes; PrediQueue 1,052,200 → 683,930 bytes; Shawarma 234,918 → 173,044 bytes. Both portraits remain unchanged.

The main performance benefit is lower image/CSS transfer cost. Component extraction primarily improves maintenance; it does not reduce JavaScript size. No speculative lazy boundaries, new runtime libraries, or animation-library replacements were introduced. Real-world loading speed/Core Web Vitals were not benchmarked.

## Validation completed

- `npm run typecheck`: passed with the existing strict compiler settings.
- `npm run build`: passed.
- `npm audit --json`: zero reported known vulnerabilities.
- `git diff --check`: passed.
- Production Chrome browser checks used the original and refactored static builds on temporary local servers.
- Ten full-page screenshot comparisons: light/dark at 320, 390, 768, 1024, and 1440 px. All screenshots in the final run matched exactly; visible text matched and no horizontal overflow occurred. The harness permits tiny JPEG rasterization variation observed in earlier runs.
- All six filter counts passed, including the existing AXIS UI/UX project.
- All three local project dialogs opened; every available tab rendered; screenshot images decoded. Escape/close controls, keyboard tab activation, body scroll restoration, and focus return passed. A mobile dialog open/close check also passed.
- Desktop anchor targets and mobile menu navigation passed.
- Light/dark switching and persistence across reload passed.
- Email copy, Android Studio skill selection, and process-step selection passed.
- Normal-motion Hero entrance/pointer transforms and dialog-panel transitions passed; the responsive comparisons also exercised reduced-motion rendering.
- All rendered local images decoded; no asset HTTP errors, page exceptions, or console errors were recorded in the final run.
- Figma, GitHub profile, and email href values were checked without changing them.
- Verified no diff in `.openai/hosting.json`, `vite.config.ts`, `index.html`, `package-lock.json`, or `src/data/skills.ts`.

QA tools (Playwright, Sharp, and Prettier) were installed in an isolated sibling `.qa-tools/` directory, not added to this application's dependencies. The local test runner is `../verify-refactor.mjs`; evidence is in `../refactor-qa/`, including `results.json` and before/after screenshots. `../refactor-baseline-dist/` contains the comparison build. These sibling files are outside this Git repository and production output. Temporary test servers and Chrome were closed after testing.

## Validation limits

- Chrome viewport emulation was used; physical Android/iPhone devices and Safari/Firefox were not tested.
- External Figma/social pages were not authenticated or tested for remote availability; their configured destinations were preserved.
- Current project records contain no real video sources or multi-image galleries, so actual video playback and multi-image navigation were not exercised against live content. Their existing code paths remain.
- No lint script exists; strict TypeScript and production/browser checks were used.
- Cloudflare dashboard, DNS, GitHub settings, and live deployment were not accessed or changed. Local static output compatibility was checked, not a deployed build.

## Maintaining the result

Edit portfolio content in `src/data/`, section markup in `src/sections/`, and shared controls in `src/components/`. Keep CSS order unchanged. Read README and `docs/assets.md` for asset paths and deployment notes. Review this branch before committing, pushing, or deploying.

# Portfolio images

Portfolio photos are served from this directory and scanned by
`apps/web/scripts/generate-portfolio.mjs` before dev, typecheck, lint, and build.
The generated manifest feeds `apps/web/src/content/portfolio.ts`, where curated
metadata can override display order, titles, categories, alt text, captions, and
whether an image should appear in the homepage carousel.

Use semantic filenames and keep images at their intended display resolution. New
images will appear automatically with filename-based fallback copy; add a
metadata override in `portfolio.ts` when a photo needs a custom caption,
category, or carousel setting.

June 2026 additions live in `june-2026/`. Those files are full-resolution
JPEGs with orientation normalized for reliable browser display and GPS metadata
removed.

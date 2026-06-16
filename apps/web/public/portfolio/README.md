# Portfolio images

Portfolio photos are served from this directory and declared in
`apps/web/src/content/portfolio.ts`. The content file controls display order,
titles, categories, alt text, captions, dimensions, and whether an image should
appear in the homepage carousel.

Use semantic filenames and keep images at their intended display resolution.
If a replacement changes aspect ratio, update the `width`, `height`, and
`orientation` fields in `portfolio.ts`.

June 2026 additions live in `june-2026/`. Those files are full-resolution
JPEGs with orientation normalized for reliable browser display and GPS metadata
removed.

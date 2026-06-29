# david_website

Stage 1 of the SME website starter: a shallow pnpm workspace monorepo built on
Next.js 16 (App Router) with TypeScript strict mode. This first stage delivers
the smallest production-shaped foundation that builds, lints, type-checks, and
deploys as static files on Cloudflare Pages. Later stages will layer in the
shared UI library, content schemas, forms, and eventually an AWS-backed
application backend.

## Layout

```
.
├── apps/
│   └── web/                Next.js 16 App Router app
├── packages/
│   ├── ui/                 (placeholder) shared UI components
│   ├── site-core/          (placeholder) metadata, schema, analytics helpers
│   ├── contracts/          (placeholder) Zod schemas / DTOs
│   └── config/             (placeholder) shared eslint / typescript config
└── infra/
    └── aws/                (placeholder) future SST / CDK infrastructure
```

`packages/ui`, `packages/site-core`, `packages/contracts`, `packages/config`,
and `infra/aws` are intentional placeholders for future stages and contain no
real implementation yet.

## Commands

Run from the repository root.

| Command | Description |
| --- | --- |
| `pnpm install` | Install all workspace dependencies. |
| `pnpm dev` | Start the `apps/web` dev server via Turborepo. |
| `pnpm build` | Production build of every workspace. |
| `pnpm deploy:cloudflare` | Build and deploy `apps/web/out` to Cloudflare Pages with Wrangler. |
| `pnpm typecheck` | TypeScript strict type checking across workspaces. |
| `pnpm lint` | ESLint across workspaces. |
| `pnpm check` | Runs `typecheck`, `lint`, and `build` in sequence. |

## Cloudflare Pages

The web app is a static Next export. Configure Cloudflare Pages as follows:

| Setting | Value |
| --- | --- |
| Base directory | (blank — repository root) |
| Build command | `pnpm --filter web build` |
| Build output directory | `apps/web/out` |
| Node version | `22` |
| Production branch | `main` |

The repository ships a `wrangler.toml` at the root with the Cloudflare Pages
project name, static output directory, compatibility date, and non-secret
contact form variables.

Notes:

- `apps/web/next.config.ts` sets `output: "export"` and writes static assets to
  `apps/web/out`.
- `next/image` optimization is disabled because static export cannot use the
  default Next image optimization API.
- The `functions/` directory contains the Cloudflare Pages Function for quote
  requests. Deploy with Git integration or Wrangler; Cloudflare dashboard
  drag-and-drop uploads do not compile a `functions/` folder.

## Contact form

The homepage quote form and `/contact` quote form both submit URL-encoded data
to the Cloudflare Pages Function at `/api/contact`. The function validates the
honeypot, preserves the existing field names, and sends the lead to the
configured inbox with Resend.

Required Cloudflare variables/secrets:

```
RESEND_API_KEY=<Resend API key>                 # secret
CONTACT_TO_EMAIL=luibrandtilecompany@gmail.com  # variable
CONTACT_FROM_EMAIL="Luibrand Tile <quotes@luibrandtile.com>" # variable
```

Optional public build variables:

```
NEXT_PUBLIC_SITE_URL=https://luibrandtile.com
NEXT_PUBLIC_SITE_NAME="Luibrand Tile"
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=
NEXT_TELEMETRY_DISABLED=1
```

See [`docs/contact-form-setup.md`](docs/contact-form-setup.md) for the
full setup and verification checklist.

See [`docs/cloudflare-pages-migration.md`](docs/cloudflare-pages-migration.md)
for the full Netlify-to-Cloudflare cutover checklist.

See [`docs/search-indexing-checklist.md`](docs/search-indexing-checklist.md)
for Search Console, Bing Webmaster Tools, and local SEO launch steps.

## Brand and portfolio assets

* Brand mark: `apps/web/public/brand/luibrand-tile-mark.svg` is used for
  metadata/icons. The header mark is rendered code-native for crisp display.
* Portfolio photos live in `apps/web/public/portfolio/`. The set of ten
  images and their semantic filenames are defined in
  `apps/web/src/content/portfolio.ts`. Replacing a file in place keeps
  the same filename and updates the site automatically.

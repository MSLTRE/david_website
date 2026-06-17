# david_website

Stage 1 of the SME website starter: a shallow pnpm workspace monorepo built on
Next.js 16 (App Router) with TypeScript strict mode. This first stage delivers
the smallest production-shaped foundation that builds, lints, type-checks, and
deploys to Netlify. Later stages will layer in the shared UI library, content
schemas, forms, and eventually an AWS-backed application backend.

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
| `pnpm typecheck` | TypeScript strict type checking across workspaces. |
| `pnpm lint` | ESLint across workspaces. |
| `pnpm check` | Runs `typecheck`, `lint`, and `build` in sequence. |

## Netlify

Configure the Netlify site as follows:

| Setting | Value |
| --- | --- |
| Base directory | (blank — repository root) |
| Build command | `pnpm --filter web build` |
| Publish directory | `apps/web/.next` |
| Node version | `22` |

The repository ships a `netlify.toml` at the root that already encodes these
values, so a fresh Netlify site connected to this repo should deploy without
any UI configuration.

Notes:

- No `@netlify/plugin-nextjs` dependency and no `[[plugins]]` block; Netlify's
  built-in adapter handles Next.js automatically.
- `apps/web/next.config.ts` is intentionally minimal and never sets
  `output: "export"`.

## Contact form

The homepage quote form and `/contact` quote form both post to Netlify Forms
using the registered `quote-request` form. Netlify detects the form from
`apps/web/public/forms.html`, and the React forms submit URL-encoded data to
that static file while preserving the same field names and honeypot.

Optional environment variables:

```
NEXT_PUBLIC_SITE_URL=https://luibrandtile.com
NEXT_PUBLIC_SITE_NAME="Luibrand Tile"
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=
```

No email API key is required for the current form flow. Manage notification
delivery, spam controls, and submissions in the Netlify project under Forms.

See [`docs/contact-form-setup.md`](docs/contact-form-setup.md) for the
full setup and verification checklist.

See [`docs/search-indexing-checklist.md`](docs/search-indexing-checklist.md)
for Search Console, Bing Webmaster Tools, and local SEO launch steps.

## Brand and portfolio assets

* Brand mark: `apps/web/public/brand/luibrand-tile-mark.svg` is used for
  metadata/icons. The header mark is rendered code-native for crisp display.
* Portfolio photos live in `apps/web/public/portfolio/`. The set of ten
  images and their semantic filenames are defined in
  `apps/web/src/content/portfolio.ts`. Replacing a file in place keeps
  the same filename and updates the site automatically.

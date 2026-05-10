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

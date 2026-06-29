# Cloudflare Pages Migration Runbook

This project is configured to run as:

```text
GitHub -> Next static export -> Cloudflare Pages CDN -> /api/contact Pages Function -> Resend
```

It should not be redeployed as a Netlify `.next` serverless site.

## 1. Preflight

1. Confirm the working branch contains this migration.
2. Run `pnpm install` if dependencies are missing.
3. Run `pnpm check`.
4. Confirm the build creates `apps/web/out`.
5. Confirm the `functions/api/contact.js` Pages Function is present.

## 2. Create Resend Sending

1. In Resend, add `luibrandtile.com` as a sending domain.
2. Add the DNS records Resend provides.
3. Wait for Resend to show the domain as verified.
4. Create an API key for sending email.

## 3. Create The Cloudflare Pages Project

Preferred path: use Cloudflare Pages Git integration so pushes to `main`
deploy automatically.

| Setting | Value |
| --- | --- |
| Project name | `luibrandtile` |
| Git repo | `MSLTRE/david_website` |
| Production branch | `main` |
| Build command | `pnpm --filter web build` |
| Build output directory | `apps/web/out` |
| Root directory | repository root |
| Node version | `22` |

Set these Cloudflare Pages variables and secrets:

| Name | Type | Value |
| --- | --- | --- |
| `RESEND_API_KEY` | Secret | Resend sending API key |
| `CONTACT_TO_EMAIL` | Variable | `luibrandtilecompany@gmail.com` |
| `CONTACT_FROM_EMAIL` | Variable | `Luibrand Tile <quotes@luibrandtile.com>` |
| `NEXT_TELEMETRY_DISABLED` | Variable | `1` |

Direct upload fallback:

```sh
pnpm --filter web build
pnpm dlx wrangler pages project create
pnpm dlx wrangler pages secret put RESEND_API_KEY --project-name luibrandtile
pnpm dlx wrangler pages deploy apps/web/out --project-name luibrandtile
```

Run Wrangler commands from the repository root so the root `functions/` folder
is uploaded with the static assets.

## 4. Verify The Preview

Before DNS cutover, test the `*.pages.dev` preview:

1. `/`
2. `/services/`
3. `/work/`
4. `/contact/`
5. `/privacy/`
6. `/sitemap.xml`
7. `/robots.txt`
8. Homepage quote form
9. `/contact` quote form
10. Mobile viewport layout

For the API, a `GET /api/contact` request should redirect to `/contact`, and a
valid `POST /api/contact` request should send email and return JSON for
JavaScript submissions.

## 5. Cut Over `luibrandtile.com`

1. Add `luibrandtile.com` to the Cloudflare Pages project under Custom domains.
2. If the apex domain is not already a Cloudflare zone, move the domain's
   authoritative nameservers to Cloudflare.
3. Let Cloudflare create or confirm the Pages CNAME record.
4. Add `www.luibrandtile.com` as a second custom domain if it should redirect
   or resolve.
5. Confirm HTTPS certificate issuance completes.
6. In Cloudflare Bulk Redirects, add 301 redirects:

| Source URL | Target URL | Status |
| --- | --- | --- |
| `www.luibrandtile.com` | `https://luibrandtile.com` | `301` |
| `luibrandtile.pages.dev` | `https://luibrandtile.com` | `301` |

Enable preserve query string, subpath matching, and preserve path suffix.

7. Test the production domain paths and form submissions again.

## 6. Close Netlify Completely

After Cloudflare production is verified:

1. Remove `luibrandtile.com` and any `www` custom domain from the Netlify
   project if Netlify still lists them.
2. Confirm DNS no longer points at Netlify.
3. Delete the Netlify project `luibrandtile`.

Deletion options:

```sh
netlify sites:delete 830c9b35-d01d-43df-b976-8bc9ac54510b
```

or:

```sh
curl --request DELETE \
  "https://api.netlify.com/api/v1/sites/830c9b35-d01d-43df-b976-8bc9ac54510b" \
  --header "Authorization: Bearer $NETLIFY_AUTH_TOKEN"
```

The UI path is Netlify project > Project configuration > General > Danger zone.
Only delete once Cloudflare has the domain and form working, because deletion is
permanent.

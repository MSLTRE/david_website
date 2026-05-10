# Contact form setup (Resend)

The `/contact` quote form is wired through a Next.js Server Action that
delivers each submission as an email via [Resend](https://resend.com).
This file documents the steps to make outbound email work.

## 1. Create a Resend account

1. Sign up at <https://resend.com>.
2. Open **API Keys** and create a new key. Copy it once — Resend shows it
   only once at creation.

## 2. Verify a sending domain (recommended)

Resend will only deliver mail from a verified sender. The cleanest setup
is to verify the production domain (e.g. `luibrandtile.com`):

1. Go to **Domains → Add Domain** and enter the domain.
2. Add the SPF, DKIM, and DMARC records Resend provides to the DNS host
   for the domain.
3. Wait for the records to validate (usually a few minutes).
4. Set `CONTACT_FROM_EMAIL` to a sender at that domain, e.g.
   `"Luibrand Tile <noreply@luibrandtile.com>"`.

If a verified domain is not yet available, Resend allows verifying a
single email address as a sender for testing.

> Until a sender is verified, the API call may be accepted but mail
> delivery will be unreliable. The form will report an error to the user
> and the call/email CTAs remain visible as a fallback.

## 3. Configure environment variables

Set these in Netlify (Site settings → Environment variables) and in any
local `.env.local` used for `pnpm --filter web dev`:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | The API key from step 1. |
| `CONTACT_TO_EMAIL` | `luibrandtilecompany@gmail.com` |
| `CONTACT_FROM_EMAIL` | A verified sender, e.g. `"Luibrand Tile <noreply@luibrandtile.com>"` |
| `NEXT_PUBLIC_SITE_URL` | `https://luibrandtile.netlify.app` (update if a custom domain is used) |
| `NEXT_PUBLIC_SITE_NAME` | `Luibrand Tile` |

Re-deploy after adding or updating environment variables. Netlify reads
them at build/runtime.

`.env.example` at the repo root lists the same variables for reference.

## 4. Test

1. Submit the `/contact` form with a real email address.
2. Confirm the email arrives at `CONTACT_TO_EMAIL` with subject
   "New Luibrand Tile quote request from <name>".
3. Reply directly to the email — replies route to the original sender's
   address (the form sets `Reply-To` to the user's email).

## What happens if Resend is not configured

If `RESEND_API_KEY` is missing or the API call fails, the Server Action
returns a friendly error message in the form. The page does not crash.
The phone and email CTAs on the contact page (and in the header / final
CTA section) keep working, so visitors can still reach David directly.

## Spam protection

* A hidden honeypot field (`website`) is part of the form. If a bot
  fills it in, the request is silently treated as success and no email
  is sent.
* The schema enforces minimum/maximum lengths on the message and other
  fields.
* No CAPTCHA is wired up yet. If volume becomes a problem, the next
  step would be Cloudflare Turnstile or hCaptcha.

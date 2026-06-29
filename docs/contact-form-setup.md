# Contact Form Setup (Cloudflare Pages + Resend)

The homepage hero form and the full `/contact` form submit to the Cloudflare
Pages Function at `/api/contact`. Both forms preserve the original field names
so the lead email remains familiar.

## Current Fields

```text
form-name
subject
bot-field
name
email
phone
city
projectType
timeline
message
```

The honeypot field is `bot-field`. If it is filled, the Function returns
success without sending email.

## How The React Forms Submit

`ContactForm` and `HeroQuoteForm` submit URL-encoded `FormData` to
`/api/contact` with `Accept: application/json`. On success, the forms show an
inline confirmation. If JavaScript is unavailable, the browser posts directly
to `/api/contact` and the Function redirects successful submissions to
`/thanks`.

## Cloudflare Variables

Set these on the Cloudflare Pages project under Settings > Variables and
Secrets:

| Name | Type | Value |
| --- | --- | --- |
| `RESEND_API_KEY` | Secret | Resend API key with email-sending access |
| `CONTACT_TO_EMAIL` | Variable | `luibrandtilecompany@gmail.com` |
| `CONTACT_FROM_EMAIL` | Variable | `Luibrand Tile <quotes@luibrandtile.com>` |
| `NEXT_TELEMETRY_DISABLED` | Variable | `1` |

`CONTACT_FROM_EMAIL` must use a sender or domain verified in Resend before
production messages will deliver reliably.

## Resend Checklist

1. Create or open the Resend account.
2. Add and verify `luibrandtile.com` as a sending domain.
3. Add the DNS records Resend provides.
4. Create an API key.
5. Store the key in Cloudflare Pages as the `RESEND_API_KEY` secret.
6. Keep `CONTACT_FROM_EMAIL` set to a verified sender, such as
   `Luibrand Tile <quotes@luibrandtile.com>`.

## Verification Checklist

1. Deploy the Cloudflare Pages project.
2. Confirm `/api/contact` redirects to `/contact` on a GET request.
3. Submit a test request from the homepage hero form.
4. Submit a test request from `/contact`.
5. Confirm both messages arrive at `luibrandtilecompany@gmail.com`.
6. Confirm the email reply-to points at the visitor's submitted email when one
   is provided.
7. Submit once with `bot-field` filled using dev tools and confirm no email is
   sent.

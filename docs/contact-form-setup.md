# Contact Form Setup (Netlify Forms)

The site uses Netlify Forms for quote requests. Both the homepage hero form and
the full `/contact` form submit to the same registered form:
`quote-request`.

## How Netlify Detects The Form

Netlify detects the form from `apps/web/public/forms.html` during deploy. Keep
that static file in sync with any field names used by the React forms.

Current fields:

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

The honeypot field is `bot-field`.

## How The React Forms Submit

`ContactForm` and `HeroQuoteForm` submit URL-encoded `FormData` to
`/forms.html` with `Content-Type: application/x-www-form-urlencoded`. On
success, the forms show inline confirmation. If JavaScript is unavailable, the
forms still include `action="/thanks"`, `method="POST"`, `data-netlify="true"`,
and `name="quote-request"`.

## Netlify Project Checklist

1. Confirm Forms are enabled for the `luibrandtile` Netlify project.
2. Confirm the `quote-request` form appears under Forms after deploy.
3. Submit a test request from the homepage and from `/contact`.
4. Confirm both submissions appear under the same `quote-request` form.
5. Configure Netlify notification emails for new submissions as needed.

No Resend API key or server action is required for the current form flow.

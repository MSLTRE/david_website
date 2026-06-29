const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_CONTACT_TO_EMAIL = "luibrandtilecompany@gmail.com";
const MAX_FIELD_LENGTH = 2000;

export async function onRequestGet({ request }) {
  return redirectTo(request, "/contact");
}

export async function onRequestHead({ request }) {
  return redirectTo(request, "/contact");
}

export async function onRequestPost({ request, env }) {
  const wantsJson = acceptsJson(request);

  try {
    const submission = await readSubmission(request);

    if (submission["bot-field"]) {
      return successResponse(request, wantsJson);
    }

    const validationError = validateSubmission(submission);

    if (validationError) {
      return errorResponse(validationError, 400, wantsJson);
    }

    const resendApiKey = env.RESEND_API_KEY;
    const from = env.CONTACT_FROM_EMAIL;
    const to = env.CONTACT_TO_EMAIL || DEFAULT_CONTACT_TO_EMAIL;

    if (!resendApiKey || !from) {
      console.error("Missing RESEND_API_KEY or CONTACT_FROM_EMAIL.");
      return errorResponse("Contact form email is not configured.", 500, wantsJson);
    }

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildEmailPayload(submission, { from, to }))
    });

    if (!resendResponse.ok) {
      const body = await resendResponse.text();
      console.error(
        `Resend request failed with ${resendResponse.status}: ${body.slice(0, 500)}`
      );
      return errorResponse("Unable to send quote request.", 502, wantsJson);
    }

    return successResponse(request, wantsJson);
  } catch (error) {
    console.error("Contact form submission failed.", error);
    return errorResponse("Unable to send quote request.", 500, wantsJson);
  }
}

async function readSubmission(request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const json = await request.json();
    return cleanSubmission(json);
  }

  const formData = await request.formData();
  const submission = {};

  for (const [key, value] of formData.entries()) {
    submission[key] = value;
  }

  return cleanSubmission(submission);
}

function cleanSubmission(raw) {
  const submission = {};

  for (const [key, value] of Object.entries(raw || {})) {
    submission[key] = cleanField(value);
  }

  return submission;
}

function cleanField(value) {
  return String(value || "").trim().slice(0, MAX_FIELD_LENGTH);
}

function validateSubmission(submission) {
  if (!submission.name) {
    return "Name is required.";
  }

  if (!submission.email && !submission.phone) {
    return "Email or phone is required.";
  }

  if (submission.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return "A valid email is required.";
  }

  if (!submission.projectType) {
    return "Project type is required.";
  }

  return "";
}

function buildEmailPayload(submission, { from, to }) {
  const subject = `New Luibrand Tile quote request from ${submission.name}`;
  const replyTo = submission.email || undefined;

  return {
    from,
    to: [to],
    subject,
    reply_to: replyTo,
    text: buildTextEmail(submission),
    html: buildHtmlEmail(submission)
  };
}

function buildTextEmail(submission) {
  return [
    "New Luibrand Tile quote request",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email || "Not provided"}`,
    `Phone: ${submission.phone || "Not provided"}`,
    `City: ${submission.city || "Not provided"}`,
    `Project type: ${submission.projectType || "Not provided"}`,
    `Timeline: ${submission.timeline || "Not provided"}`,
    "",
    "Project notes:",
    submission.message || "Not provided"
  ].join("\n");
}

function buildHtmlEmail(submission) {
  const rows = [
    ["Name", submission.name],
    ["Email", submission.email || "Not provided"],
    ["Phone", submission.phone || "Not provided"],
    ["City", submission.city || "Not provided"],
    ["Project type", submission.projectType || "Not provided"],
    ["Timeline", submission.timeline || "Not provided"]
  ]
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 16px 6px 0">${escapeHtml(
          label
        )}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <body>
    <h1>New Luibrand Tile quote request</h1>
    <table>${rows}</table>
    <h2>Project notes</h2>
    <p>${escapeHtml(submission.message || "Not provided").replace(/\n/g, "<br>")}</p>
  </body>
</html>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function acceptsJson(request) {
  return (request.headers.get("accept") || "").includes("application/json");
}

function successResponse(request, wantsJson) {
  if (wantsJson) {
    return jsonResponse({ ok: true }, 200);
  }

  return redirectTo(request, "/thanks");
}

function errorResponse(message, status, wantsJson) {
  if (wantsJson) {
    return jsonResponse({ ok: false, error: message }, status);
  }

  return new Response(message, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

function redirectTo(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  url.search = "";
  return Response.redirect(url.toString(), 303);
}

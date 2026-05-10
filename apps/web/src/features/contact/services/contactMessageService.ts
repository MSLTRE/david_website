import { Resend } from "resend";
import { siteConfig } from "@/config/siteConfig";
import type { ContactFormValues } from "@/features/contact/schemas/contactFormSchema";

export type SendContactMessageInput = ContactFormValues & {
  readonly submittedFromUrl?: string;
  readonly submittedAt: Date;
};

export type SendContactMessageResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: "not-configured" | "send-failed"; readonly message: string };

const DEFAULT_TO = siteConfig.email;
const DEFAULT_FROM = `Luibrand Tile <noreply@luibrandtile.netlify.app>`;

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.length > 0 ? value : undefined;
}

function buildSubject(values: ContactFormValues): string {
  return `New Luibrand Tile quote request from ${values.name}`;
}

function buildPlainText(input: SendContactMessageInput): string {
  const lines = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone ?? "—"}`,
    `City: ${input.city ?? "—"}`,
    `Project type: ${input.projectType}`,
    `Timeline: ${input.timeline}`,
    "",
    "Message:",
    input.message,
    "",
    `Submitted from: ${input.submittedFromUrl ?? "—"}`,
    `Timestamp: ${input.submittedAt.toISOString()}`
  ];
  return lines.join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(input: SendContactMessageInput): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;color:#666;font:14px/1.5 -apple-system,Segoe UI,sans-serif;">${label}</td><td style="padding:6px 12px;color:#111;font:14px/1.5 -apple-system,Segoe UI,sans-serif;">${value}</td></tr>`;
  const message = escapeHtml(input.message).replace(/\n/g, "<br/>");
  return `
    <div style="font:14px/1.6 -apple-system,Segoe UI,sans-serif;color:#111;background:#fafafa;padding:24px;">
      <h1 style="font:600 20px/1.3 Georgia,serif;margin:0 0 16px;">New Luibrand Tile quote request</h1>
      <table style="border-collapse:collapse;background:#fff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
        ${row("Name", escapeHtml(input.name))}
        ${row("Email", escapeHtml(input.email))}
        ${row("Phone", escapeHtml(input.phone ?? "—"))}
        ${row("City", escapeHtml(input.city ?? "—"))}
        ${row("Project type", escapeHtml(input.projectType))}
        ${row("Timeline", escapeHtml(input.timeline))}
      </table>
      <h2 style="font:600 16px/1.3 Georgia,serif;margin:24px 0 8px;">Message</h2>
      <div style="background:#fff;border:1px solid #e5e5e5;border-radius:8px;padding:16px;">${message}</div>
      <p style="margin-top:16px;color:#666;font-size:12px;">Submitted from: ${escapeHtml(input.submittedFromUrl ?? "—")}<br/>Timestamp: ${escapeHtml(input.submittedAt.toISOString())}</p>
    </div>
  `;
}

export async function sendContactMessage(
  input: SendContactMessageInput
): Promise<SendContactMessageResult> {
  const apiKey = getEnv("RESEND_API_KEY");
  if (!apiKey) {
    return {
      ok: false,
      reason: "not-configured",
      message:
        "The contact form is not fully connected yet. Please email or call to reach David directly."
    };
  }

  const to = getEnv("CONTACT_TO_EMAIL") ?? DEFAULT_TO;
  const from = getEnv("CONTACT_FROM_EMAIL") ?? DEFAULT_FROM;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: buildSubject(input),
      text: buildPlainText(input),
      html: buildHtml(input),
      replyTo: input.email
    });

    if (error) {
      return {
        ok: false,
        reason: "send-failed",
        message: "We couldn't deliver your message right now. Please try again, or email or call David directly."
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      reason: "send-failed",
      message: "We couldn't deliver your message right now. Please try again, or email or call David directly."
    };
  }
}

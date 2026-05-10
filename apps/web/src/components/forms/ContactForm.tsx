"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const projectTypes = [
  "Floor tile",
  "Shower or bathroom",
  "Backsplash",
  "Repair or prep",
  "Other"
];

const timelines = ["As soon as possible", "This month", "Planning ahead"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString()
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed.");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action="/thanks"
      className="grid gap-4"
      data-netlify="true"
      method="POST"
      name="quote-request"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <input
        type="hidden"
        name="subject"
        value="New Luibrand Tile quote request"
      />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name">
          <input
            className="h-12 rounded-lg border border-input bg-white px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30"
            name="name"
            required
            type="text"
          />
        </Field>
        <Field label="Email">
          <input
            className="h-12 rounded-lg border border-input bg-white px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30"
            name="email"
            required
            type="email"
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Phone">
          <input
            className="h-12 rounded-lg border border-input bg-white px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30"
            name="phone"
            type="tel"
          />
        </Field>
        <Field label="City">
          <input
            className="h-12 rounded-lg border border-input bg-white px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30"
            name="city"
            type="text"
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Project type">
          <select
            className="h-12 rounded-lg border border-input bg-white px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30"
            name="projectType"
            required
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline">
          <select
            className="h-12 rounded-lg border border-input bg-white px-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30"
            name="timeline"
            required
          >
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project notes">
        <textarea
          className="min-h-36 resize-y rounded-lg border border-input bg-white px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30"
          name="message"
          required
        />
      </Field>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <Button disabled={status === "sending"} type="submit">
          {status === "sending" ? "Sending..." : "Send request"}
        </Button>
        <p aria-live="polite" className="text-sm font-semibold text-muted-foreground">
          {status === "sent"
            ? "Thanks. David will follow up soon."
            : status === "error"
              ? "Something went wrong. Please call or email David directly."
              : "No spam. Just project follow-up."}
        </p>
      </div>
    </form>
  );
}

function Field({
  children,
  label
}: {
  readonly children: React.ReactNode;
  readonly label: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-foreground">
      {label}
      {children}
    </label>
  );
}

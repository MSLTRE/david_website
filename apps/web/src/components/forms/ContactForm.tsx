"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { FormStatus } from "@/components/forms/FormStatus";

export const projectTypes = [...services.map((service) => service.name), "Other", "Not sure yet"];

export const timelines = ["As soon as possible", "Within a month", "Planning ahead", "Not sure yet"];

export function encodeFormData(formData: FormData) {
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    params.append(key, String(value));
  });

  return params.toString();
}

const controlClass =
  "h-12 rounded-xl border border-input bg-card px-4 text-base outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/25";
const textareaClass =
  "min-h-36 resize-y rounded-xl border border-input bg-card px-4 py-3 text-base outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/25";

export function ContactForm() {
  const statusId = useId();
  const messageHelpId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encodeFormData(formData)
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed.");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action="/api/contact"
      aria-label="Estimate request form"
      aria-describedby={statusId}
      className="grid gap-4"
      method="POST"
      name="quote-request"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <input
        type="hidden"
        name="subject"
        value="New Luibrand Tile estimate request"
      />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name">
          <input
            className={controlClass}
            name="name"
            required
            type="text"
          />
        </Field>
        <Field label="Email">
          <input
            className={controlClass}
            name="email"
            required
            type="email"
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Phone (optional)">
          <input
            className={controlClass}
            name="phone"
            type="tel"
          />
        </Field>
        <Field label="City (optional)">
          <input
            className={controlClass}
            name="city"
            type="text"
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Project type">
          <select
            className={controlClass}
            name="projectType"
            defaultValue=""
            required
          >
            <option value="" disabled>Choose a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="When would you like to start? (optional)">
          <select
            className={controlClass}
            name="timeline"
            defaultValue=""
          >
            <option value="">Choose one (optional)</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about the job (optional)">
        <textarea
          className={textareaClass}
          name="message"
          aria-describedby={messageHelpId}
        />
      </Field>
      <p id={messageHelpId} className="-mt-2 text-sm text-muted-foreground">
        A sentence or two is fine.
      </p>

      <div className="flex flex-col gap-3 pt-2 sm:items-start">
        <Button disabled={status === "sending"} type="submit">
          {status === "sending" ? "Sending…" : "Request a free estimate"}
        </Button>
        <p id={statusId} aria-live="polite" aria-atomic="true" className="text-sm font-medium text-muted-foreground">
          <FormStatus status={status} />
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
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      {children}
    </label>
  );
}

"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { encodeFormData, projectTypes } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/siteConfig";

const controlClass =
  "h-12 rounded-xl border border-input bg-card px-4 text-base outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/25";

export function HeroQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const statusId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      aria-describedby={statusId}
      className="grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-[0_24px_70px_rgb(31_25_18/0.10)] sm:p-5"
      method="POST"
      name="quote-request"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <input
        type="hidden"
        name="subject"
        value="New Luibrand Tile quote request"
      />
      <input type="hidden" name="timeline" value="As soon as possible" />
      <input type="hidden" name="message" value="Hero quote request" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Name
          <input className={controlClass} name="name" required type="text" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Phone
          <input className={controlClass} name="phone" required type="tel" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-foreground">
        Project type
        <select className={controlClass} name="projectType" required>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <Button disabled={status === "sending"} type="submit" variant="accent">
        {status === "sending" ? "Sending..." : "Get my free quote"}
      </Button>

      <p
        aria-live="polite"
        className="text-sm font-medium leading-6 text-muted-foreground"
        id={statusId}
      >
        {status === "sent"
          ? "Thanks. We'll follow up soon."
          : status === "error"
            ? `Something went wrong. Please call ${siteConfig.phone}.`
            : `Prefer to talk now? Call ${siteConfig.phone}.`}
      </p>
    </form>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  cloneElement,
  isValidElement,
  useState,
  useTransition,
  type ReactElement
} from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { sendContactMessageAction } from "@/features/contact/actions/sendContactMessageAction";
import {
  contactFormSchema,
  PROJECT_TYPES,
  TIMELINES,
  type ContactFormState,
  type ContactFormValues
} from "@/features/contact/schemas/contactFormSchema";

const INPUT_BASE =
  "w-full min-h-11 rounded-md border border-border bg-background px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>({ status: "idle" });
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      projectType: undefined,
      timeline: undefined,
      message: "",
      website: ""
    }
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (values) => {
    setState({ status: "idle" });
    startTransition(async () => {
      const result = await sendContactMessageAction(values);
      setState(result);
      if (result.status === "success") {
        reset();
      } else if (result.status === "error" && result.fieldErrors) {
        for (const [key, message] of Object.entries(result.fieldErrors)) {
          if (message) {
            setError(key as keyof ContactFormValues, {
              type: "server",
              message
            });
          }
        }
      }
    });
  };

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-border bg-card p-8 md:p-10 text-center flex flex-col gap-3"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Request received
        </p>
        <h3 className="font-display text-2xl md:text-3xl tracking-tight">
          Thanks — David will be in touch.
        </h3>
        <p className="text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
      aria-describedby={state.status === "error" ? "contact-form-error" : undefined}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          id="contact-name"
          label="Full name"
          error={errors.name?.message}
        >
          <input
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={INPUT_BASE}
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name")}
          />
        </FormField>

        <FormField
          id="contact-email"
          label="Email"
          error={errors.email?.message}
        >
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={INPUT_BASE}
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")}
          />
        </FormField>

        <FormField
          id="contact-phone"
          label="Phone"
          optional
          error={errors.phone?.message}
        >
          <input
            type="tel"
            autoComplete="tel"
            placeholder="(512) 555-0000"
            className={INPUT_BASE}
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone")}
          />
        </FormField>

        <FormField
          id="contact-city"
          label="City / service area"
          optional
          error={errors.city?.message}
        >
          <input
            type="text"
            autoComplete="address-level2"
            placeholder="Round Rock, Austin, …"
            className={INPUT_BASE}
            aria-invalid={errors.city ? "true" : "false"}
            {...register("city")}
          />
        </FormField>

        <FormField
          id="contact-project-type"
          label="Project type"
          error={errors.projectType?.message}
        >
          <select
            className={INPUT_BASE}
            defaultValue=""
            aria-invalid={errors.projectType ? "true" : "false"}
            {...register("projectType")}
          >
            <option value="" disabled>
              Select project type
            </option>
            {PROJECT_TYPES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="contact-timeline"
          label="Timeline"
          error={errors.timeline?.message}
        >
          <select
            className={INPUT_BASE}
            defaultValue=""
            aria-invalid={errors.timeline ? "true" : "false"}
            {...register("timeline")}
          >
            <option value="" disabled>
              Select timeline
            </option>
            {TIMELINES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField
        id="contact-message"
        label="Project details"
        helper="Have photos? Mention that in your message and David can follow up by email."
        error={errors.message?.message}
      >
        <textarea
          rows={6}
          placeholder="Tell David about the room, the materials you're considering, and roughly when you'd like to start."
          className={`${INPUT_BASE} resize-y`}
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message")}
        />
      </FormField>

      {/* Honeypot — visually hidden but reachable to bots */}
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="contact-website">
          Leave this field blank
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

      {state.status === "error" ? (
        <p
          id="contact-form-error"
          role="alert"
          className="rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center min-h-12 rounded-pill bg-primary px-7 py-2.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {isPending ? "Sending…" : "Send request"}
        </button>
        <p className="text-xs text-muted-foreground">
          By sending, you agree we may contact you about your project.
        </p>
      </div>
    </form>
  );
}

type FormFieldChildProps = {
  id?: string;
  "aria-describedby"?: string;
};

type FormFieldProps = {
  readonly id: string;
  readonly label: string;
  readonly children: ReactElement<FormFieldChildProps>;
  readonly helper?: string;
  readonly error?: string;
  readonly optional?: boolean;
};

function FormField({
  id,
  label,
  children,
  helper,
  error,
  optional
}: FormFieldProps) {
  const helperId = helper ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  const child = isValidElement(children)
    ? cloneElement(children, {
        id,
        "aria-describedby": describedBy
      })
    : children;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="flex items-baseline justify-between text-sm font-medium text-foreground"
      >
        <span>{label}</span>
        {optional ? (
          <span className="text-xs text-muted-foreground font-normal">
            Optional
          </span>
        ) : null}
      </label>
      {child}
      {helper ? (
        <p id={helperId} className="text-xs text-muted-foreground">
          {helper}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

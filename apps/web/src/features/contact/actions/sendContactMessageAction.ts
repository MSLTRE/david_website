"use server";

import { siteConfig } from "@/config/siteConfig";
import {
  contactFormSchema,
  type ContactFormState,
  type ContactFormValues
} from "@/features/contact/schemas/contactFormSchema";
import { sendContactMessage } from "@/features/contact/services/contactMessageService";

export async function sendContactMessageAction(
  values: unknown
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        (fieldErrors as Record<string, string>)[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors
    };
  }

  // Honeypot — if the website field is non-empty we silently succeed.
  const website = (values as { website?: string })?.website;
  if (typeof website === "string" && website.length > 0) {
    return {
      status: "success",
      message: "Thanks — your request was received."
    };
  }

  const result = await sendContactMessage({
    ...parsed.data,
    submittedFromUrl: siteConfig.url + "/contact",
    submittedAt: new Date()
  });

  if (result.ok) {
    return {
      status: "success",
      message:
        "Thanks — your request was received. David will follow up by email or phone shortly."
    };
  }

  return {
    status: "error",
    message: result.message
  };
}

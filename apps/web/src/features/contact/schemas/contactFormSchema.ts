import { z } from "zod";

export const PROJECT_TYPES = [
  "Floor tile",
  "Bathroom tile",
  "Shower tile",
  "Kitchen backsplash",
  "Fireplace surround",
  "Repair / replacement",
  "Surface preparation",
  "Other"
] as const;

export const TIMELINES = [
  "As soon as possible",
  "This month",
  "1–3 months",
  "Planning ahead"
] as const;

const optionalTrim = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((value) => (value && value.length > 0 ? value : undefined));

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(200, "That email is too long."),
  phone: optionalTrim(40),
  city: optionalTrim(80),
  projectType: z.enum(PROJECT_TYPES, {
    errorMap: () => ({ message: "Please choose a project type." })
  }),
  timeline: z.enum(TIMELINES, {
    errorMap: () => ({ message: "Please choose a timeline." })
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details about your project.")
    .max(3000, "Please keep the message under 3000 characters."),
  // Honeypot — must be empty on submit
  website: z
    .string()
    .max(0, "Spam detected.")
    .optional()
    .or(z.literal(""))
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormState =
  | { readonly status: "idle" }
  | { readonly status: "success"; readonly message: string }
  | {
      readonly status: "error";
      readonly message: string;
      readonly fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
    };

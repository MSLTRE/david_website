import { siteConfig } from "@/config/siteConfig";

export type FormState = "idle" | "sending" | "sent" | "error";

export function FormStatus({ status, showCallHelper = false }: {
  readonly status: FormState;
  readonly showCallHelper?: boolean;
}) {
  if (status === "sent") {
    return <>Thanks! We’ll get back to you about your project.</>;
  }
  if (status === "error") {
    return <>We couldn’t send your request. Please try again, or call <a className="underline underline-offset-4" href={siteConfig.phoneHref}>{siteConfig.phone}</a>.</>;
  }
  if (status === "idle" && showCallHelper) {
    return <>Prefer to call? <a className="underline underline-offset-4" href={siteConfig.phoneHref}>{siteConfig.phone}</a></>;
  }
  return null;
}

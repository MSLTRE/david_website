import { siteConfig } from "@/config/siteConfig";

export type FormState = "idle" | "sending" | "sent" | "error";

export function FormStatus({ status, showCallHelper = false }: {
  readonly status: FormState;
  readonly showCallHelper?: boolean;
}) {
  if (status === "sent") {
    return <>Thanks. Your request has been sent. We’ll get in touch about your project.</>;
  }
  if (status === "error") {
    return <>Something went wrong. Please try again, or call <a className="underline underline-offset-4" href={siteConfig.phoneHref}>{siteConfig.phone}</a>.</>;
  }
  if (status === "idle" && showCallHelper) {
    return <>Prefer to call? <a className="underline underline-offset-4" href={siteConfig.phoneHref}>{siteConfig.phone}</a></>;
  }
  return null;
}

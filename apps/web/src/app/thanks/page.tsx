import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThanksPage() {
  return (
    <section className="mx-auto flex min-h-[58vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 py-20 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        Message received
      </p>
      <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-normal text-foreground md:text-6xl">
        Thanks for reaching out.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
        We&apos;ll follow up to talk through your project, timeline, and next
        steps.
      </p>
      <Button href="/">Back to home</Button>
    </section>
  );
}

import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Request Sent",
    description: "We’ll get in touch about your project.",
    path: "/thanks"
  }),
  robots: {
    index: false,
    follow: false
  }
};

export default function ThanksPage() {
  return (
    <section className="mx-auto flex min-h-[58vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 py-20 md:px-8">
      <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-normal text-foreground md:text-6xl">
        Thanks. Your request has been sent.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
        We’ll get in touch about your project.
      </p>
      <Button href="/">Back to home</Button>
    </section>
  );
}

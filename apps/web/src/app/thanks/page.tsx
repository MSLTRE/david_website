import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Thanks"
};

export default function ThanksPage() {
  return (
    <section className="mx-auto flex min-h-[58vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 py-20 md:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
        Message received
      </p>
      <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
        Thanks for reaching out.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
        David will follow up to talk through your project, timeline, and next
        steps.
      </p>
      <Button href="/">Back to home</Button>
    </section>
  );
}

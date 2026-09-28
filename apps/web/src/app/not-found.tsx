import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[58vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 py-20 md:px-8">
      <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-normal text-foreground md:text-6xl">
        We couldn’t find that page.
      </h1>
      <p className="text-lg leading-8 text-muted-foreground">
        Try the homepage, or get in touch.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="secondary">Contact us</Button>
      </div>
    </section>
  );
}

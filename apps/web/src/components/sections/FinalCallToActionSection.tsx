import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

export function FinalCallToActionSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-primary text-primary-foreground"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2
              id="final-cta-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
            >
              Ready to plan your project?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              Tell us about the room and timeline. We&rsquo;ll follow up to talk
              through layout, materials, and next steps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Button
              href="/contact#quote"
              size="lg"
              shape="pill"
              variant="accent"
              className="w-full sm:w-auto"
            >
              Request a quote
            </Button>
            <Button
              href={siteConfig.phoneHref}
              size="lg"
              shape="pill"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <Badge variant="accent">Tile installation &amp; remodeling</Badge>
            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-semibold"
            >
              {siteConfig.tagline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              {siteConfig.siteName} designs, prepares, and installs bathroom,
              kitchen, and floor tile work that holds up for the long run —
              with the prep work most crews skip.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact" size="lg" shape="pill">
                Request a quote
              </Button>
              <Button href="/work" variant="secondary" size="lg" shape="pill">
                See recent work
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              Serving {siteConfig.serviceArea.toLowerCase()}.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="relative isolate aspect-[5/4] rounded-2xl bg-secondary border border-border overflow-hidden"
          >
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 gap-1 p-2 opacity-90">
              {Array.from({ length: 30 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-card rounded-[3px] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                />
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { findPortfolioImageById } from "@/content/portfolio";

export function HeroSection() {
  const primary = findPortfolioImageById("marble-look-foyer-tile");
  const secondaryA = findPortfolioImageById("arched-stone-shower-tile");
  const secondaryB = findPortfolioImageById("patterned-kitchen-backsplash-detail");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {siteConfig.heroEyebrow}
            </p>
            <h1
              id="hero-heading"
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight font-medium"
            >
              {siteConfig.heroHeadline}
            </h1>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-foreground/85">
              {siteConfig.heroSupporting}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              {siteConfig.heroBody}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact" size="lg" shape="pill">
                Request a quote
              </Button>
              <Button href="#portfolio" variant="secondary" size="lg" shape="pill">
                View portfolio
              </Button>
            </div>
          </div>

          <div className="relative">
            {primary ? (
              <div className="relative isolate aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-secondary shadow-[0_30px_60px_-30px_rgba(40,28,18,0.25)]">
                <Image
                  src={primary.src}
                  alt={primary.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, (min-width: 640px) 80vw, 92vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5"
                />
              </div>
            ) : null}

            {secondaryA ? (
              <div className="hidden md:block absolute -left-6 lg:-left-10 bottom-6 lg:bottom-10 w-[42%] aspect-[3/4] rounded-xl overflow-hidden border border-border bg-secondary shadow-[0_20px_40px_-20px_rgba(40,28,18,0.3)]">
                <Image
                  src={secondaryA.src}
                  alt={secondaryA.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
            ) : null}

            {secondaryB ? (
              <div className="hidden md:block absolute -right-4 lg:-right-8 -top-6 lg:-top-10 w-[40%] aspect-[4/3] rounded-xl overflow-hidden border border-border bg-secondary shadow-[0_20px_40px_-20px_rgba(40,28,18,0.3)]">
                <Image
                  src={secondaryB.src}
                  alt={secondaryB.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bath,
  Flame,
  Grid2X2,
  Layers3,
  ShowerHead,
  Sparkles,
  Sun,
  Waves,
  Wrench
} from "lucide-react";
import Image from "next/image";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { heroImage } from "@/content/portfolio";
import { services, type ServiceCategory } from "@/content/services";

const serviceIcons: Record<ServiceCategory["icon"], LucideIcon> = {
  bath: Bath,
  flame: Flame,
  floor: Layers3,
  grid: Grid2X2,
  shower: ShowerHead,
  sparkles: Sparkles,
  stairs: Layers3,
  sun: Sun,
  waves: Waves,
  wrench: Wrench
};

export function HomeExperience() {
  const featuredServices = ["floors", "showers", "backsplashes", "tub-surrounds", "fireplace-surrounds"]
    .flatMap((slug) => services.filter((service) => service.slug === slug));

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="overflow-hidden border-b border-border bg-background"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-8 md:px-8 md:py-12 lg:grid-cols-[0.96fr_1.04fr] lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:py-14">
          <div className="lg:col-start-2 lg:row-start-1 lg:pl-5">
            <h1
              className="max-w-3xl font-display text-[clamp(2.35rem,8.5vw,4.85rem)] font-medium leading-[1.02] tracking-normal text-foreground md:text-[clamp(3.6rem,6vw,4.85rem)]"
              id="hero-heading"
            >
              {siteConfig.heroHeadline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
              {siteConfig.heroSupporting}
            </p>
            <Button className="mt-5 lg:hidden" href="#home-estimate" variant="accent">
              Request a free estimate
            </Button>
          </div>
          <figure className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_34px_90px_rgb(31_25_18/0.18)] ring-1 ring-border/70 md:min-h-[520px] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-0">
            <Image
              alt={heroImage.alt}
              className="object-cover"
              fill
              fetchPriority="high"
              priority
              quality={86}
              sizes="(min-width: 1024px) 48vw, 100vw"
              src={heroImage.src}
            />
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/45 bg-card/88 p-4 text-sm leading-6 text-muted-foreground shadow-[0_18px_44px_rgb(31_25_18/0.16)] backdrop-blur md:left-5 md:right-auto">
              Marble-look bathroom floor
            </figcaption>
          </figure>
          <div className="lg:col-start-2 lg:row-start-2 lg:self-end lg:pl-5">
            <HeroQuoteForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="home-work-heading" className="overflow-hidden bg-background py-20 md:py-24 lg:py-28" id="work">
        <div className="mx-auto grid w-full max-w-7xl gap-9 px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 id="home-work-heading" className="max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
              Our work
            </h2>
            <Button href="/work" variant="secondary">View all photos</Button>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section aria-labelledby="home-services-heading" className="bg-sand py-20 md:py-24 lg:py-28" id="services">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8">
          <h2 id="home-services-heading" className="max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
            Tile services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featuredServices.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <article
                  className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-[0_18px_46px_rgb(31_25_18/0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgb(31_25_18/0.10)]"
                  key={service.slug}
                >
                  <span className="grid size-10 place-items-center rounded-full bg-secondary text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight tracking-normal">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <Button className="w-fit" href="/services" variant="secondary">
            See all services
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </section>

      <section
        aria-labelledby="home-service-area-heading"
        className="bg-background py-20 md:py-24 lg:py-28"
        id="service-area"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <ServiceAreaOverview headingId="home-service-area-heading" />
        </div>
      </section>

      <FinalCallToActionSection />
    </>
  );
}

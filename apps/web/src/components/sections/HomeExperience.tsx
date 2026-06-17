import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bath,
  BadgeCheck,
  Check,
  Flame,
  Grid2X2,
  Hammer,
  Layers3,
  Ruler,
  ShowerHead,
  Sparkles,
  Sun,
  Waves,
  Wrench
} from "lucide-react";
import Image from "next/image";
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { heroImage } from "@/content/portfolio";
import { services, type ServiceCategory } from "@/content/services";

const trustItems = [
  "Free estimates",
  "Round Rock based",
  "Austin-area service",
  "Careful prep and layout"
];

const craftHighlights = [
  {
    title: "Layout before labor",
    body: "Tile work looks expensive when the lines, cuts, and transitions are planned before the first piece is set.",
    icon: Ruler
  },
  {
    title: "Prepared to last",
    body: "Substrate, waterproofing, leveling, and grout details get the same attention as the finished surface.",
    icon: Hammer
  },
  {
    title: "Straightforward process",
    body: "You get a clear conversation about scope, timing, materials, and the rooms affected by the work.",
    icon: BadgeCheck
  }
];

const processSteps = [
  {
    label: "01",
    title: "Consult",
    body: "Share the room, photos, measurements, goals, and timing."
  },
  {
    label: "02",
    title: "Plan",
    body: "Review materials, layout, prep needs, and project details."
  },
  {
    label: "03",
    title: "Install",
    body: "Set tile with careful lines, waterproofing, and finish details."
  },
  {
    label: "04",
    title: "Walk through",
    body: "Review the finished room, care notes, and final details."
  }
];

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
  const featuredServices = services.slice(0, 5);

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="overflow-hidden border-b border-border bg-background"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-9 md:px-8 md:py-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch lg:py-14">
          <div className="relative order-2 min-h-[320px] overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_34px_90px_rgb(31_25_18/0.18)] ring-1 ring-border/70 md:min-h-[520px] lg:order-1 lg:min-h-0">
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
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/45 bg-card/88 p-4 shadow-[0_18px_44px_rgb(31_25_18/0.16)] backdrop-blur md:left-5 md:right-auto md:min-w-[21rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Recent finish
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {heroImage.room} · {heroImage.material}
              </p>
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {siteConfig.heroEyebrow}
            </p>
            <h1
              className="mt-4 max-w-3xl font-display text-[clamp(2.35rem,8.5vw,4.85rem)] font-medium leading-[1.02] tracking-normal text-foreground md:text-[clamp(3.6rem,6vw,4.85rem)]"
              id="hero-heading"
            >
              {siteConfig.heroHeadline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
              {siteConfig.heroSupporting}
            </p>
            <div className="mt-7">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-3 px-5 py-5 sm:grid-cols-2 md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div
              className="flex min-h-12 items-center gap-3 rounded-full bg-background px-3.5 text-sm font-semibold text-foreground/82"
              key={item}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-sage">
                <Check aria-hidden="true" className="size-4" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 md:py-24 lg:py-28" id="craft">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Craft
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
              Craftsmanship you can stand on
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              A calm, organized project first. Then a finish you notice every
              day.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {craftHighlights.map((item) => (
              <article
                className="rounded-2xl border border-border bg-card p-6 shadow-[0_18px_46px_rgb(31_25_18/0.06)]"
                key={item.title}
              >
                <span className="grid size-11 place-items-center rounded-full bg-secondary text-accent">
                  <item.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24 lg:py-28" id="services">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.88fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Services
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
                Tile work for the rooms you use most
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Floors, showers, tub surrounds, fireplace surrounds, and
              backsplashes planned around prep, layout, and clean finish details.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {featuredServices.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <article
                  className="group flex min-h-52 flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-[0_18px_46px_rgb(31_25_18/0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgb(31_25_18/0.10)]"
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

      <section className="overflow-hidden bg-background py-20 md:py-24 lg:py-28" id="work">
        <div className="mx-auto grid w-full max-w-7xl gap-9 px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Recent work
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
                Finished with European precision
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-base leading-7 text-muted-foreground">
                Browse showers, floors, fireplace surrounds, backsplashes, and
                finish details from Austin-area projects.
              </p>
              <Button className="mt-5" href="/work" variant="secondary">
                View full portfolio
              </Button>
            </div>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section className="bg-card py-20 md:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Process
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
              From the first call to the final grout line
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {processSteps.map((step) => (
              <article
                className="relative rounded-2xl border border-border bg-background p-6"
                key={step.label}
              >
                <p className="text-sm font-semibold text-accent">{step.label}</p>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
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

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
              Let&apos;s make the room feel finished
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/76">
              Tell us about the room, timeline, and project details. We&apos;ll
              follow up with next steps.
            </p>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Button href="/contact#quote" size="lg" variant="accent">
              Get a free quote
            </Button>
            <Button href={siteConfig.phoneHref} size="lg" variant="light">
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

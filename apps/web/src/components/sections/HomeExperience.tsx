import type { LucideIcon } from "lucide-react";
import {
  Bath,
  BadgeCheck,
  Check,
  ClipboardList,
  Flame,
  Grid2X2,
  Hammer,
  Layers3,
  Paintbrush,
  Ruler,
  ShowerHead,
  Sparkles,
  Sun,
  Waves,
  Wrench
} from "lucide-react";
import Image from "next/image";
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { heroImage } from "@/content/portfolio";
import { services, type ServiceCategory } from "@/content/services";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";

const trustItems = [
  "Free estimates",
  "Round Rock based",
  "Austin-area service",
  "Careful prep and layout"
];

const valueProps = [
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
    title: "Clear homeowner path",
    body: "You get a straightforward conversation about scope, timing, materials, and the rooms affected by the work.",
    icon: BadgeCheck
  }
];

const processSteps = [
  {
    label: "01",
    title: "Consult",
    body: "Share the room, photos, measurements, goals, and timing so the scope is clear."
  },
  {
    label: "02",
    title: "Plan",
    body: "Review material, layout, prep needs, and project details before installation starts."
  },
  {
    label: "03",
    title: "Install",
    body: "Set tile with careful lines, transitions, waterproofing, and finish details."
  },
  {
    label: "04",
    title: "Walk through",
    body: "Review the finished work, care notes, and any final details together."
  }
];

const experienceCards = [
  {
    title: "Clean lines",
    body: "Corners, niches, edges, outlets, and transitions are the places where craftsmanship shows first.",
    icon: Paintbrush
  },
  {
    title: "Respect for the home",
    body: "Project flow matters: access, staging, cleanup, and communication all shape the experience.",
    icon: Sparkles
  },
  {
    title: "Useful guidance",
    body: "From porcelain to stone-look tile, the goal is a finish that suits the room and daily use.",
    icon: ClipboardList
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
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="overflow-hidden border-b border-border bg-background"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:py-12">
          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-[0_34px_90px_rgb(31_25_18/0.18)] ring-1 ring-border/70 sm:aspect-[5/4] lg:aspect-square">
              <Image
                alt={heroImage.alt}
                className="h-full w-full object-cover"
                fill
                fetchPriority="high"
                priority
                quality={86}
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={heroImage.src}
              />
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-card p-4 shadow-[0_14px_36px_rgb(31_25_18/0.07)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Recent finish
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {heroImage.room} · {heroImage.material}
              </p>
            </div>
          </div>

          <div className="grid gap-7 lg:pl-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {siteConfig.heroEyebrow}
              </p>
              <h1
                className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,6vw,4.85rem)] font-medium leading-[1.02] tracking-normal text-foreground"
                id="hero-heading"
              >
                {siteConfig.heroHeadline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
                {siteConfig.heroSupporting}
              </p>
              <div className="mt-6 lg:hidden">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary shadow-[0_22px_60px_rgb(31_25_18/0.14)] ring-1 ring-border/70">
                  <Image
                    alt={heroImage.alt}
                    className="h-full w-full object-cover"
                    fill
                    priority
                    quality={86}
                    sizes="(max-width: 1023px) calc(100vw - 40px), 1px"
                    src={heroImage.src}
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Recent finish
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {heroImage.room} · {heroImage.material}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {trustItems.map((item) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground shadow-[0_8px_18px_rgb(31_25_18/0.04)]"
                  key={item}
                >
                  <Check aria-hidden="true" className="size-4 text-sage" />
                  {item}
                </span>
              ))}
            </div>

            <HeroQuoteForm />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 py-6 md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
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

      <section className="bg-background py-20 md:py-28" id="craft">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Craft
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
              Craftsmanship you can stand on.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {valueProps.map((item) => (
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

      <section className="bg-sand py-20 md:py-28" id="services">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Services
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
                Tile work for the rooms that carry your home.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              From simple updates to custom projects, Luibrand Tile focuses on
              clean preparation, precise layout, and finish details that stay
              visible after the tools are packed up.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <article
                  className="group flex min-h-56 flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-[0_18px_46px_rgb(31_25_18/0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgb(31_25_18/0.10)]"
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
        </div>
      </section>

      <section className="overflow-hidden bg-background py-20 md:py-28" id="work">
        <div className="mx-auto grid w-full max-w-7xl gap-9 px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Recent work
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
                Rooms finished with quieter precision.
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-base leading-7 text-muted-foreground">
                Browse a curated set of showers, floors, fireplace surrounds,
                backsplashes, and details from Austin-area projects.
              </p>
              <Button className="mt-5" href="/work" variant="secondary">
                View full portfolio
              </Button>
            </div>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Process
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
              A clear path from idea to finished room.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <article
                className="rounded-2xl border border-border bg-background p-6"
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

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Client experience
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl">
              Premium tile work should feel calm before it looks beautiful.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              From the first call to the final walkthrough, the experience
              should feel organized, direct, and respectful of the home around
              the work.
            </p>
          </div>
          <div className="grid gap-4">
            {experienceCards.map((card) => (
              <article
                className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[0_18px_46px_rgb(31_25_18/0.05)] sm:grid-cols-[auto_1fr] sm:items-start"
                key={card.title}
              >
                <span className="grid size-11 place-items-center rounded-full bg-secondary text-sage">
                  <card.icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="home-service-area-heading"
        className="bg-background py-20 md:py-28"
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
              Let&apos;s make the room feel finished.
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
            <Button
              className="bg-card text-foreground hover:bg-secondary"
              href={siteConfig.phoneHref}
              size="lg"
              variant="light"
            >
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

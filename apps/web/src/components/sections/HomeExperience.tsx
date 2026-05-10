import { Check, Hammer, Layers3, ShowerHead, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { heroImage } from "@/content/portfolio";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";

const services = [
  {
    icon: Layers3,
    title: "Floors",
    copy: "Clean layouts, steady grout lines, and substrate prep for rooms that need to hold up."
  },
  {
    icon: ShowerHead,
    title: "Showers & Bathrooms",
    copy: "Waterproofing, slope, niches, benches, and trim handled with careful sequencing."
  },
  {
    icon: Sparkles,
    title: "Backsplashes",
    copy: "Kitchen tile that looks intentional around outlets, corners, counters, and cabinets."
  },
  {
    icon: Hammer,
    title: "Repair & Prep",
    copy: "Targeted tile repair, grout refreshes, crack isolation, leveling, and surface prep."
  }
];

const principles = [
  "Proper preparation",
  "Precise layout",
  "Clean finish"
];

export function HomeExperience() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-charcoal text-white"
      >
        <Image
          alt={heroImage.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
          fill
          priority
          sizes="100vw"
          src={heroImage.src}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,10,8,0.86),rgba(12,10,8,0.52)_46%,rgba(12,10,8,0.16)),linear-gradient(180deg,rgba(12,10,8,0.15),rgba(12,10,8,0.74))]" />
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-12 pt-24 md:px-8 md:pb-16">
          <div className="max-w-3xl">
            <h1
              className="text-6xl font-black tracking-tight md:text-8xl lg:text-9xl"
              id="hero-heading"
            >
              Luibrand Tile
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-white/88 md:text-4xl">
              Precise tile installation across Austin and Round Rock.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="sm:min-w-44" href="/contact#quote" variant="light">
                Request a quote
              </Button>
              <Button className="sm:min-w-44" href={siteConfig.phoneHref} variant="light">
                Call {siteConfig.phone}
              </Button>
              <Button className="sm:min-w-44" href="#work" variant="secondary">
                View work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" id="craft">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
              Craftsmanship
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight md:text-6xl">
              Quality starts with the right foundation.
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-xl leading-9 text-muted-foreground">
              Luibrand Tile is built around careful prep, square layouts, and
              finish details that still look right after daily use. The work is
              practical, clean, and direct: plan the surface well, set the tile
              precisely, and leave the room ready to live in.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  className="rounded-lg border border-border bg-secondary p-4"
                  key={principle}
                >
                  <Check aria-hidden="true" className="mb-3 text-accent" />
                  <h3 className="font-black tracking-tight">{principle}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 md:py-24" id="work">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
                Work
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Real tile work from Austin-area homes.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Fireplace surrounds, showers, foyers, backsplashes, and
              wood-look floors, all shown from real project photos.
            </p>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" id="services">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Tile work for the rooms people actually use.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                className="rounded-lg border border-border bg-white p-5 shadow-[0_16px_40px_rgba(30,24,18,0.06)]"
                key={service.title}
              >
                <service.icon aria-hidden="true" className="mb-5 text-accent" />
                <h3 className="text-xl font-black tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="home-service-area-heading"
        className="py-16 md:py-24"
        id="service-area"
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <ServiceAreaOverview headingId="home-service-area-heading" />
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground md:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 px-5 md:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Ready to plan your project?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
              Tell David about the room, timeline, and what you want the tile to
              solve.
            </p>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:min-w-[420px]">
            <Button href="/contact#quote" variant="light">
              Request a quote
            </Button>
            <Button href={siteConfig.phoneHref} variant="light">
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

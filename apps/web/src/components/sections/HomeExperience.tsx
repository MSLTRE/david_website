import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { heroImage } from "@/content/portfolio";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";
import { services } from "@/content/services";

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
              Precise tile installation across the greater Austin area.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="sm:min-w-44" href="/contact#quote" variant="light">
                Request a quote
              </Button>
              <Button className="sm:min-w-44" href={siteConfig.phoneHref} variant="light">
                Call {siteConfig.phone}
              </Button>
              <Button className="sm:min-w-44" href="#work" variant="secondary">
                View portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" id="craft">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="max-w-xl text-4xl font-black tracking-tight md:text-6xl">
              Craftsmanship you can stand on.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-muted-foreground">
              Quality tile work starts with proper preparation and attention to
              detail. From the layout of the first tile to the final finishing
              touches, every step matters. At Luibrand Tile, we take pride in
              delivering clean, professional work that&apos;s built to last and
              made to be enjoyed every day.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 md:py-24" id="work">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
                Portfolio
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Recent work throughout the Greater Austin area.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Take a look at some of our recent work throughout the Greater
              Austin area. From custom showers and fireplace surrounds to
              backsplashes, foyers, and wood-look tile floors, these projects
              highlight the craftsmanship and attention to detail that go into
              every installation.
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
              If something can be tiled, we&apos;ve almost certainly done it.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              From simple updates to custom projects, we take pride in
              delivering clean, professional work that&apos;s built to last.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article
                className="flex min-h-24 items-end rounded-lg border border-border bg-white p-5 shadow-[0_16px_40px_rgba(30,24,18,0.05)]"
                key={service.slug}
              >
                <h3 className="text-lg font-black leading-tight tracking-tight">
                  {service.name}
                </h3>
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
              Tell us about the room, timeline, and project details.
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

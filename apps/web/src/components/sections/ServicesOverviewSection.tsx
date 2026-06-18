import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
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
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { services, type ServiceCategory } from "@/content/services";

type ServicesOverviewSectionProps = {
  readonly showCta?: boolean;
  readonly heading?: string;
  readonly eyebrow?: string;
  readonly description?: string;
};

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

export function ServicesOverviewSection({
  showCta = true,
  heading = "Tile work for the whole house, done one job at a time.",
  eyebrow = "Services",
  description = "From simple updates to custom rooms, each service starts with prep, layout, and the finish details that make tile work feel intentional."
}: ServicesOverviewSectionProps = {}) {
  return (
    <SectionContainer
      ariaLabelledBy="services-heading"
      className="pt-12 md:pt-16 lg:pt-20"
    >
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2
          id="services-heading"
          className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
        >
          {heading}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          {description}
        </p>
      </div>

      <ul
        aria-label="Tile installation and repair services"
        className="flex flex-wrap gap-3 md:gap-4"
      >
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <li key={service.slug}>
              <a
                aria-label={`Request a quote for ${service.name}`}
                className="group inline-flex min-h-14 items-center gap-3 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-[0_12px_30px_rgb(31_25_18/0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_20px_46px_rgb(178_106_57/0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:min-h-16 md:px-5 md:text-base"
                href="/contact"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-accent transition duration-300 group-hover:bg-accent-foreground/16 group-hover:text-accent-foreground md:size-10">
                  <Icon aria-hidden="true" className="size-4 md:size-5" />
                </span>
                <span>{service.name}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 opacity-45 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </a>
            </li>
          );
        })}
      </ul>

      {showCta ? (
        <div className="mt-10">
          <Button href="/services" variant="secondary" shape="pill">
            See all services
          </Button>
        </div>
      ) : null}
    </SectionContainer>
  );
}

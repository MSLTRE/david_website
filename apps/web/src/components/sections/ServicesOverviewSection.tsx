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
import { Button } from "@/components/ui/Button";
import { services, type ServiceCategory } from "@/content/services";

type ServicesOverviewSectionProps = {
  readonly showCta?: boolean;
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
  showCta = true
}: ServicesOverviewSectionProps = {}) {
  return (
    <div className="mt-8">
      <ul
        aria-label="Tile installation and repair services"
        className="flex flex-wrap gap-3 md:gap-4"
      >
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <li key={service.slug}>
              <a
                aria-label={`Request an estimate for ${service.name.toLowerCase()}`}
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
    </div>
  );
}

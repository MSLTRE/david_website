import { MapPin, Navigation } from "lucide-react";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

type ServiceAreaOverviewProps = {
  readonly headingId?: string;
};

export function ServiceAreaOverview({
  headingId = "service-area-heading"
}: ServiceAreaOverviewProps) {
  return (
    <div className="grid w-full gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Service area
        </p>
        <h2
          className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
          id={headingId}
        >
          Austin-area tile installation, based in Round Rock
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Luibrand Tile serves homeowners within roughly 35 miles of Round Rock,
          including Austin, Georgetown, Cedar Park, Pflugerville, Leander, Hutto,
          and nearby Central Texas communities.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {siteConfig.serviceAreas.map((area) => (
            <span
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground/82 shadow-[0_8px_18px_rgb(31_25_18/0.04)]"
              key={area.label}
            >
              <MapPin aria-hidden="true" className="size-4 text-accent" />
              {area.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">
            Get a quote
          </Button>
          <Button
            href="https://serviceareamaps.com/map/60505d4b99ca"
            external
            variant="secondary"
          >
            Open full map
            <Navigation aria-hidden="true" className="size-4" />
          </Button>
        </div>

        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Nearby projects are reviewed by scope, schedule, material handling,
          and drive time.
        </p>
      </div>

      <ServiceAreaMap />
    </div>
  );
}

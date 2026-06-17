import { MapPin } from "lucide-react";
import { ClientServiceAreaMap } from "@/components/sections/ClientServiceAreaMap";
import { siteConfig } from "@/config/siteConfig";

type ServiceAreaOverviewProps = {
  readonly headingId?: string;
};

export function ServiceAreaOverview({
  headingId = "service-area-heading"
}: ServiceAreaOverviewProps) {
  return (
    <div className="grid w-full gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Service area
        </p>
        <h2
          className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
          id={headingId}
        >
          Austin-area tile installation, based in Round Rock.
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Luibrand Tile operates across Round Rock, Austin, Georgetown, Cedar Park,
          Leander, Pflugerville, Hutto, Lakeway, Liberty Hill, Jarrell,
          Salado, and nearby communities.
        </p>
        <div
          aria-label="Cities in the Luibrand Tile service area"
          className="mt-8 flex flex-wrap gap-2"
        >
          {siteConfig.serviceAreas.map((area) => (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium shadow-[0_8px_18px_rgb(31_25_18/0.04)]"
              key={area.label}
            >
              <MapPin aria-hidden="true" className="size-4 text-accent" />
              {area.label}
            </span>
          ))}
        </div>
      </div>

      <ClientServiceAreaMap />
    </div>
  );
}

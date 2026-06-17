"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils/cn";

type ServiceAreaOverviewProps = {
  readonly headingId?: string;
};

export function ServiceAreaOverview({
  headingId = "service-area-heading"
}: ServiceAreaOverviewProps) {
  const [activeArea, setActiveArea] = useState("Round Rock");

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
          Austin-area tile installation, based in Round Rock
        </h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Hover or focus a community to see where Luibrand Tile works across the
          Central Texas corridor.
        </p>
        <div
          aria-label="Cities in the Luibrand Tile service area"
          className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3"
        >
          {siteConfig.serviceAreas.map((area) => {
            const isActive = area.label === activeArea;

            return (
              <button
                aria-pressed={isActive}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-[0_8px_18px_rgb(31_25_18/0.04)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive
                    ? "border-accent bg-accent text-accent-foreground shadow-[0_14px_32px_rgb(178_106_57/0.20)]"
                    : "border-border bg-card text-foreground hover:border-accent/55 hover:bg-secondary"
                )}
                key={area.label}
                onFocus={() => setActiveArea(area.label)}
                onMouseEnter={() => setActiveArea(area.label)}
                type="button"
              >
                <MapPin aria-hidden="true" className="size-4 shrink-0" />
                {area.label}
              </button>
            );
          })}
        </div>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Nearby projects are reviewed by scope, schedule, and drive time.
        </p>
      </div>

      <ServiceAreaMap
        activeLabel={activeArea}
        onActiveChange={setActiveArea}
      />
    </div>
  );
}

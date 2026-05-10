"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import type { ServiceArea } from "@/content/serviceAreas";

type CityCoord = {
  readonly cx: number;
  readonly cy: number;
};

type ServiceAreaSelectorProps = {
  readonly areas: readonly ServiceArea[];
  readonly cityCoordinates: Readonly<Record<string, CityCoord>>;
};

export function ServiceAreaSelector({
  areas,
  cityCoordinates
}: ServiceAreaSelectorProps) {
  const initialCity = areas[0]?.city ?? "Round Rock";
  const [activeCity, setActiveCity] = useState<string>(initialCity);
  const active = areas.find((area) => area.city === activeCity) ?? areas[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-stretch">
      {/* Stylized map card */}
      <figure
        aria-label="Stylized map of the Austin-area service region"
        className="relative isolate overflow-hidden rounded-2xl border border-border bg-foreground text-background aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-background) 1px, transparent 1px), linear-gradient(90deg, var(--color-background) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        <svg
          viewBox="0 0 400 320"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="corridor" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(201, 140, 90, 0.15)" />
              <stop offset="100%" stopColor="rgba(201, 140, 90, 0.05)" />
            </linearGradient>
          </defs>
          {/* I-35 / IH-35 corridor curve through the region */}
          <path
            d="M70 280 C 130 230, 170 200, 200 170 S 290 90, 340 50"
            fill="none"
            stroke="rgba(201, 140, 90, 0.55)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M70 280 C 130 230, 170 200, 200 170 S 290 90, 340 50"
            fill="none"
            stroke="url(#corridor)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          {areas.map((area) => {
            const coord = cityCoordinates[area.city];
            if (!coord) return null;
            const isActive = active?.city === area.city;
            return (
              <g key={area.city}>
                <circle
                  cx={coord.cx}
                  cy={coord.cy}
                  r={isActive ? 7 : 4}
                  fill={isActive ? "rgb(201, 140, 90)" : "rgba(245, 239, 230, 0.85)"}
                  stroke={isActive ? "rgba(245, 239, 230, 0.95)" : "transparent"}
                  strokeWidth={isActive ? 2 : 0}
                />
                <text
                  x={coord.cx + 10}
                  y={coord.cy + 4}
                  fill={isActive ? "rgb(245, 239, 230)" : "rgba(245, 239, 230, 0.7)"}
                  fontSize="11"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontWeight={isActive ? 600 : 400}
                >
                  {area.label}
                </text>
              </g>
            );
          })}
        </svg>

        <figcaption className="absolute left-5 bottom-4 right-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-background/60">
              Service region
            </p>
            <p className="font-display text-xl tracking-tight">
              Austin-area corridor
            </p>
          </div>
          <span className="text-[0.65rem] text-background/50">
            Stylized — not to scale
          </span>
        </figcaption>
      </figure>

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Pick a city
          </p>
          <ul className="flex flex-wrap gap-2">
            {areas.map((area) => {
              const isActive = active?.city === area.city;
              return (
                <li key={area.city}>
                  <button
                    type="button"
                    onClick={() => setActiveCity(area.city)}
                    aria-pressed={isActive}
                    className={`min-h-11 px-3.5 py-1.5 rounded-pill text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background text-foreground border-border hover:bg-muted"
                    }`}
                  >
                    {area.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Now showing
          </p>
          <p className="mt-1 font-display text-2xl tracking-tight">
            {active?.label}
          </p>
          <p className="mt-3 text-sm md:text-base text-foreground/80 leading-relaxed">
            {active?.description}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Serving tile projects in {active?.label} and nearby communities.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            href={siteConfig.googleMapsUrl}
            external
            variant="secondary"
            shape="pill"
          >
            Open in Google Maps
          </Button>
          <Button
            href={siteConfig.appleMapsUrl}
            external
            variant="ghost"
            shape="pill"
          >
            Open in Apple Maps
          </Button>
        </div>
      </div>
    </div>
  );
}

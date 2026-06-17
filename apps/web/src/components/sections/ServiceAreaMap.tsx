"use client";

import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils/cn";

type ServiceAreaMapProps = {
  readonly activeLabel: string;
  readonly onActiveChange: (label: string) => void;
};

const viewBox = {
  width: 760,
  height: 520,
  minLat: 30.18,
  maxLat: 31,
  minLng: -98.04,
  maxLng: -97.48
};

const labelOffsets: Record<string, { readonly x: number; readonly y: number }> = {
  Austin: { x: 12, y: 18 },
  "Round Rock": { x: 12, y: -20 },
  Pflugerville: { x: 12, y: 18 },
  Georgetown: { x: 14, y: -14 },
  "Cedar Park": { x: -104, y: -14 },
  Leander: { x: -82, y: -18 },
  Lakeway: { x: -82, y: 18 },
  "Liberty Hill": { x: -104, y: -16 },
  Hutto: { x: 14, y: 18 },
  Jarrell: { x: 14, y: -16 },
  Salado: { x: 14, y: -18 }
};

function project(lat: number, lng: number) {
  const x =
    76 +
    ((lng - viewBox.minLng) / (viewBox.maxLng - viewBox.minLng)) *
      (viewBox.width - 152);
  const y =
    66 +
    ((viewBox.maxLat - lat) / (viewBox.maxLat - viewBox.minLat)) *
      (viewBox.height - 132);

  return { x, y };
}

const projectedAreas = siteConfig.serviceAreas.map((area) => ({
  ...area,
  point: project(area.lat, area.lng)
}));

const coverageLabels = [
  "Salado",
  "Jarrell",
  "Hutto",
  "Austin",
  "Lakeway",
  "Liberty Hill",
  "Salado"
];

const coveragePath =
  coverageLabels
    .map((label, index) => {
      const area = projectedAreas.find((item) => item.label === label);
      if (!area) return "";
      return `${index === 0 ? "M" : "L"} ${area.point.x.toFixed(1)} ${area.point.y.toFixed(1)}`;
    })
    .join(" ") + " Z";

const roundRock = projectedAreas.find((area) => area.label === "Round Rock");
const austin = projectedAreas.find((area) => area.label === "Austin");
const salado = projectedAreas.find((area) => area.label === "Salado");
const lakeway = projectedAreas.find((area) => area.label === "Lakeway");
const hutto = projectedAreas.find((area) => area.label === "Hutto");

export function ServiceAreaMap({
  activeLabel,
  onActiveChange
}: ServiceAreaMapProps) {
  const activeArea =
    projectedAreas.find((area) => area.label === activeLabel) ?? roundRock;

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-border bg-[linear-gradient(135deg,rgb(255_255_255/0.96),rgb(244_240_232/0.96))] shadow-[0_28px_80px_rgb(31_25_18/0.12)] md:min-h-[540px]">
      <svg
        aria-labelledby="service-map-title service-map-desc"
        className="absolute inset-0 h-full w-full"
        role="img"
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      >
        <title id="service-map-title">Luibrand Tile service area map</title>
        <desc id="service-map-desc">
          Stylized Central Texas coverage map with Round Rock as the home base.
        </desc>
        <defs>
          <linearGradient id="coverage-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#b26a39" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#4f7a61" stopOpacity="0.16" />
          </linearGradient>
          <filter id="map-shadow" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" floodColor="#1f1912" floodOpacity="0.13" stdDeviation="16" />
          </filter>
        </defs>

        <rect fill="#fbfaf6" height="520" rx="34" width="760" />
        <path
          d={coveragePath}
          fill="url(#coverage-gradient)"
          filter="url(#map-shadow)"
          stroke="#b26a39"
          strokeDasharray="9 10"
          strokeLinecap="round"
          strokeOpacity="0.58"
          strokeWidth="2"
        />

        {roundRock && salado ? (
          <path
            d={`M ${roundRock.point.x} ${roundRock.point.y} C ${roundRock.point.x + 26} ${roundRock.point.y - 92}, ${salado.point.x - 44} ${salado.point.y + 84}, ${salado.point.x} ${salado.point.y}`}
            fill="none"
            stroke="#1f1912"
            strokeOpacity="0.16"
            strokeWidth="7"
          />
        ) : null}
        {austin && roundRock && hutto ? (
          <path
            d={`M ${austin.point.x} ${austin.point.y} C ${austin.point.x + 64} ${austin.point.y - 32}, ${roundRock.point.x - 50} ${roundRock.point.y + 58}, ${roundRock.point.x} ${roundRock.point.y} C ${roundRock.point.x + 44} ${roundRock.point.y - 8}, ${hutto.point.x - 40} ${hutto.point.y + 18}, ${hutto.point.x} ${hutto.point.y}`}
            fill="none"
            stroke="#b26a39"
            strokeOpacity="0.24"
            strokeWidth="5"
          />
        ) : null}
        {lakeway && roundRock ? (
          <path
            d={`M ${lakeway.point.x} ${lakeway.point.y} C ${lakeway.point.x + 72} ${lakeway.point.y - 12}, ${roundRock.point.x - 92} ${roundRock.point.y + 44}, ${roundRock.point.x} ${roundRock.point.y}`}
            fill="none"
            stroke="#4f7a61"
            strokeOpacity="0.18"
            strokeWidth="5"
          />
        ) : null}

        <g opacity="0.45">
          <path d="M 78 394 L 682 394" stroke="#1f1912" strokeDasharray="2 14" strokeLinecap="round" />
          <path d="M 120 82 L 120 444" stroke="#1f1912" strokeDasharray="2 14" strokeLinecap="round" />
          <path d="M 640 90 L 640 432" stroke="#1f1912" strokeDasharray="2 14" strokeLinecap="round" />
        </g>
      </svg>

      <div className="absolute inset-0">
        {projectedAreas.map((area) => {
          const isBase = area.label === "Round Rock";
          const isActive = area.label === activeArea?.label;
          const offset = labelOffsets[area.label] ?? { x: 12, y: -16 };

          return (
            <button
              aria-pressed={isActive}
              className={cn(
                "group absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full text-left outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                isActive && "z-20"
              )}
              key={area.label}
              onFocus={() => onActiveChange(area.label)}
              onMouseEnter={() => onActiveChange(area.label)}
              style={{
                left: `${(area.point.x / viewBox.width) * 100}%`,
                top: `${(area.point.y / viewBox.height) * 100}%`
              }}
              type="button"
            >
              <span
                className={cn(
                  "block rounded-full border-2 border-white bg-primary shadow-[0_12px_28px_rgb(31_25_18/0.22)] transition duration-200",
                  isBase ? "size-5 bg-accent" : "size-3.5",
                  isActive && "scale-150 bg-accent shadow-[0_16px_36px_rgb(178_106_57/0.35)]"
                )}
              />
              <span
                className={cn(
                  "pointer-events-none absolute whitespace-nowrap rounded-full border border-border bg-card/94 px-2.5 py-1 text-[0.68rem] font-semibold text-foreground opacity-0 shadow-[0_10px_22px_rgb(31_25_18/0.10)] backdrop-blur transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:opacity-100",
                  isActive && "opacity-100"
                )}
                style={{
                  left: `${offset.x}px`,
                  top: `${offset.y}px`
                }}
              >
                {area.label}
              </span>
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="absolute inset-x-4 top-4 z-30 rounded-2xl border border-border bg-card/94 p-4 shadow-[0_18px_46px_rgb(31_25_18/0.12)] backdrop-blur md:inset-x-auto md:left-4 md:max-w-[24rem]">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          <MapPin aria-hidden="true" className="size-4" />
          Round Rock base · Austin-area service
        </p>
        <p className="mt-2 text-lg font-semibold text-foreground">
          {activeArea?.label ?? "Round Rock"}
        </p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {activeArea?.label === "Round Rock"
            ? "Home base for estimating, scheduling, and project planning."
            : `Projects in ${activeArea?.label ?? "nearby communities"} are reviewed by scope, schedule, and drive time.`}
        </p>
      </div>
    </div>
  );
}

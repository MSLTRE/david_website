"use client";

import { Circle, CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { siteConfig } from "@/config/siteConfig";

const roundRock: [number, number] = [30.5083, -97.6789];
const serviceRadiusMeters = 85000;

export function ServiceAreaMap() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-lg border border-border bg-white shadow-[0_20px_55px_rgba(30,24,18,0.08)] md:h-[520px]">
      <MapContainer
        attributionControl
        center={[30.58, -97.73]}
        className="z-0"
        maxZoom={12}
        minZoom={7}
        scrollWheelZoom={false}
        zoom={8}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Circle
          center={roundRock}
          pathOptions={{
            color: "#b56c35",
            fillColor: "#b56c35",
            fillOpacity: 0.12,
            opacity: 0.74,
            weight: 2
          }}
          radius={serviceRadiusMeters}
        />
        {siteConfig.serviceAreas.map((area) => (
          <CircleMarker
            center={[area.lat, area.lng]}
            key={area.label}
            pathOptions={{
              color: "#ffffff",
              fillColor: area.label === "Round Rock" ? "#b56c35" : "#1f2b25",
              fillOpacity: 0.96,
              opacity: 1,
              weight: 2
            }}
            radius={area.label === "Round Rock" ? 9 : 6}
          >
            <Popup>{area.label}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      <div className="pointer-events-none absolute left-4 top-4 z-[401] rounded-lg border border-border bg-white/95 px-4 py-3 shadow-[0_12px_28px_rgba(30,24,18,0.1)]">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
          Round Rock base
        </p>
        <p className="mt-1 text-sm font-extrabold text-foreground">
          Approximate Austin-area service zone
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 z-[401] max-w-[18rem] rounded-lg border border-border bg-white/92 px-3 py-2 text-xs font-semibold leading-5 text-muted-foreground shadow-[0_12px_28px_rgba(30,24,18,0.08)]">
        General coverage map. Availability depends on project scope, schedule,
        and drive time.
      </div>
    </div>
  );
}

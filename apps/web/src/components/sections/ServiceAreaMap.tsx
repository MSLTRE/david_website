"use client";

import { latLngBounds, type LatLngExpression } from "leaflet";
import { useEffect } from "react";
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  Tooltip,
  useMap
} from "react-leaflet";
import { siteConfig } from "@/config/siteConfig";

const serviceCoordinates = siteConfig.serviceAreas.map(
  (area) => [area.lat, area.lng] as LatLngExpression
);
const serviceBounds = latLngBounds(serviceCoordinates);
const serviceCenter = serviceBounds.getCenter();
const maxServiceBounds = serviceBounds.pad(0.16);

function FitServiceAreaBounds() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(serviceBounds, {
      animate: false,
      maxZoom: 9,
      padding: [30, 30]
    });
  }, [map]);

  return null;
}

export function ServiceAreaMap() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-lg border border-border bg-white shadow-[0_20px_55px_rgba(30,24,18,0.08)] md:h-[520px]">
      <MapContainer
        attributionControl
        center={serviceCenter}
        className="z-0"
        maxBounds={maxServiceBounds}
        maxBoundsViscosity={0.7}
        maxZoom={13}
        minZoom={8}
        scrollWheelZoom={false}
        zoom={9}
        zoomDelta={0.5}
        zoomControl={false}
        zoomSnap={0.25}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        />
        <FitServiceAreaBounds />
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
            <Tooltip
              className="service-area-tooltip"
              direction="top"
              offset={[0, -8]}
              opacity={1}
            >
              {area.label}
            </Tooltip>
            <Popup>{area.label}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      <div className="pointer-events-none absolute left-4 top-4 z-[401] rounded-lg border border-border bg-white/95 px-4 py-3 shadow-[0_12px_28px_rgba(30,24,18,0.1)]">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
          Greater Austin service area
        </p>
        <p className="mt-1 text-sm font-extrabold text-foreground">
          Listed communities shown
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 z-[401] max-w-[18rem] rounded-lg border border-border bg-white/92 px-3 py-2 text-xs font-semibold leading-5 text-muted-foreground shadow-[0_12px_28px_rgba(30,24,18,0.08)]">
        Markers show the current service-area cities. Nearby projects are
        reviewed by scope, schedule, and drive time.
      </div>
    </div>
  );
}

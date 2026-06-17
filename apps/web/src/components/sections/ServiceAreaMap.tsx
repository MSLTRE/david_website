"use client";

import { latLngBounds, type LatLngExpression } from "leaflet";
import { useEffect } from "react";
import {
  CircleMarker,
  MapContainer,
  Popup,
  Polygon,
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
const coveragePolygon: LatLngExpression[] = [
  [30.9471, -97.5386],
  [30.8249, -97.6045],
  [30.5427, -97.5467],
  [30.2672, -97.7431],
  [30.363, -97.9796],
  [30.6649, -97.9225],
  [30.6333, -97.6772]
];

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
    <div className="relative h-[430px] overflow-hidden rounded-2xl border border-border bg-sand shadow-[0_28px_80px_rgb(31_25_18/0.12)] md:h-[540px]">
      <MapContainer
        attributionControl
        center={serviceCenter}
        className="service-area-map z-0"
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
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <FitServiceAreaBounds />
        <Polygon
          pathOptions={{
            color: "#b26a39",
            fillColor: "#b26a39",
            fillOpacity: 0.12,
            opacity: 0.42,
            weight: 2
          }}
          positions={coveragePolygon}
        />
        {siteConfig.serviceAreas.map((area) => (
          <CircleMarker
            center={[area.lat, area.lng]}
            key={area.label}
            pathOptions={{
              color: "#ffffff",
              fillColor: area.label === "Round Rock" ? "#b26a39" : "#241d16",
              fillOpacity: 0.96,
              opacity: 1,
              weight: 2
            }}
            radius={area.label === "Round Rock" ? 10 : 6.5}
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
      <div className="pointer-events-none absolute inset-x-4 bottom-4 z-[401] rounded-2xl border border-border bg-card/94 p-4 shadow-[0_18px_46px_rgb(31_25_18/0.12)] backdrop-blur md:inset-x-auto md:left-4 md:max-w-[22rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Greater Austin service area
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">
          11 listed communities · Round Rock base
        </p>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">
          Nearby projects are reviewed by scope, schedule, and drive time.
        </p>
      </div>
    </div>
  );
}

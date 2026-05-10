"use client";

import L, { type LatLngExpression } from "leaflet";
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import { siteConfig } from "@/config/siteConfig";

const polygon: LatLngExpression[] = [
  [30.9471, -97.5386],
  [30.8249, -97.6045],
  [30.6649, -97.9225],
  [30.363, -97.9796],
  [30.2672, -97.7431],
  [30.4394, -97.62],
  [30.5427, -97.5467],
  [30.9471, -97.5386]
];

function markerIcon(label: string, primary = false) {
  return L.divIcon({
    className: `service-marker${primary ? " primary" : ""}`,
    html: label
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2),
    iconAnchor: primary ? [19, 19] : [15, 15],
    iconSize: primary ? [38, 38] : [30, 30]
  });
}

export function ServiceAreaMap() {
  return (
    <div className="h-[420px] overflow-hidden rounded-lg border border-border bg-secondary shadow-[0_20px_55px_rgba(30,24,18,0.08)] md:h-[520px]">
      <MapContainer
        attributionControl
        center={[30.54, -97.74]}
        scrollWheelZoom={false}
        zoom={9}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon
          pathOptions={{
            color: "#b56c35",
            fillColor: "#b56c35",
            fillOpacity: 0.18,
            opacity: 0.82,
            weight: 3
          }}
          positions={polygon}
        />
        {siteConfig.serviceAreas.map((area) => (
          <Marker
            icon={markerIcon(area.label, area.label === "Round Rock")}
            key={area.label}
            position={[area.lat, area.lng]}
          >
            <Popup>{area.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

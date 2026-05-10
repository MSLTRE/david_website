import { SectionContainer } from "@/components/layout/SectionContainer";
import { ServiceAreaSelector } from "@/components/service-area/ServiceAreaSelector";
import { serviceAreas } from "@/content/serviceAreas";

// Stylized coordinate placement on a 400x320 SVG canvas. Approximate
// relative position only — labelled "stylized, not to scale" in the UI.
const cityCoordinates: Record<string, { cx: number; cy: number }> = {
  Salado: { cx: 60, cy: 32 },
  Jarrell: { cx: 100, cy: 70 },
  "Liberty Hill": { cx: 70, cy: 130 },
  Georgetown: { cx: 150, cy: 100 },
  Leander: { cx: 110, cy: 160 },
  "Cedar Park": { cx: 145, cy: 175 },
  "Round Rock": { cx: 195, cy: 165 },
  Hutto: { cx: 245, cy: 165 },
  Pflugerville: { cx: 220, cy: 200 },
  Lakeway: { cx: 95, cy: 240 },
  Austin: { cx: 230, cy: 250 }
};

export function ServiceAreaSection() {
  return (
    <SectionContainer ariaLabelledBy="service-area-heading">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Service area
        </p>
        <h2
          id="service-area-heading"
          className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
        >
          Tile work across the Austin-area corridor.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          Based in Round Rock and serving the surrounding cities along the I-35
          corridor and the Hill Country edge.
        </p>
      </div>

      <ServiceAreaSelector
        areas={serviceAreas}
        cityCoordinates={cityCoordinates}
      />
    </SectionContainer>
  );
}

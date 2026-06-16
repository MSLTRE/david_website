import { SectionContainer } from "@/components/layout/SectionContainer";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Tile Installation Services in Austin & Round Rock",
  description:
    "Professional tile installation services for floors, showers, tub surrounds, fireplace surrounds, patios, backsplashes, pool surrounds, stairways, tile repair, and grout repair across the Greater Austin area.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <SectionContainer ariaLabelledBy="services-page-heading">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </p>
          <h1
            id="services-page-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
          >
            Tile work, end to end.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            If something can be tiled, we&apos;ve almost certainly done it. From
            simple updates to custom projects, we take pride in delivering
            clean, professional work that&apos;s built to last.
          </p>
        </div>
      </SectionContainer>
      <ServicesOverviewSection
        showCta={false}
        eyebrow="What we do"
        heading="A straightforward list of tile services."
        description="Floors, showers, tub surrounds, fireplace surrounds, patios, backsplashes, pool surrounds, stairways, tile repair, and grout repair or replacement."
      />
      <ServiceAreaSection />
      <FinalCallToActionSection />
    </>
  );
}

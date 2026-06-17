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
      <SectionContainer
        ariaLabelledBy="services-page-heading"
        className="pb-12 md:pb-16 lg:pb-20"
      >
        <div className="flex max-w-3xl flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Services
          </p>
          <h1
            id="services-page-heading"
            className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
          >
            Tile work, end to end
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Floors, showers, backsplashes, fireplace surrounds, repairs, and
            specialty tile work planned around the room, not a template.
          </p>
        </div>
      </SectionContainer>
      <ServicesOverviewSection
        showCta={false}
        eyebrow="What we do"
        heading="Services for the rooms you use most"
        description="A practical list of tile installation and repair work, from full-room finishes to targeted fixes."
      />
      <ServiceAreaSection />
      <FinalCallToActionSection />
    </>
  );
}

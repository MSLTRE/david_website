import { SectionContainer } from "@/components/layout/SectionContainer";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Tile Installation Services",
  description:
    "Tile floor, shower, backsplash, fireplace surround, repair, and surface preparation services across Round Rock, Austin, and surrounding communities.",
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
            Floors, showers, backsplashes, fireplace surrounds, repair, and the
            substrate prep work that decides how long a tile job lasts.
          </p>
        </div>
      </SectionContainer>
      <ServicesOverviewSection
        showCta={false}
        eyebrow="What I do"
        heading="A focused list, every job done the same way."
        description="Every category below is the same standards: proper preparation, precision layout, and a clean finish."
      />
      <ServiceAreaSection />
      <FinalCallToActionSection />
    </>
  );
}

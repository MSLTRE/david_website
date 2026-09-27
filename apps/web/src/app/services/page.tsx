import { SectionContainer } from "@/components/layout/SectionContainer";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Tile Installation & Repair in Austin & Round Rock",
  description:
    "Explore Luibrand Tile’s installation and repair services, including floors, showers, backsplashes, fireplace surrounds, outdoor tile, and grout repair.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <SectionContainer
        ariaLabelledBy="services-page-heading"
        className="pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12"
      >
        <div className="flex max-w-3xl flex-col gap-3">
          <h1
            id="services-page-heading"
            className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
          >
            Tile installation and repair
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Serving Austin, Round Rock, and nearby communities.
          </p>
        </div>
        <ServicesOverviewSection showCta={false} />
      </SectionContainer>
      <ServiceAreaSection />
      <FinalCallToActionSection />
    </>
  );
}

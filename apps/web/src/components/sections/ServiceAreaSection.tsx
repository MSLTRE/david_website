import { SectionContainer } from "@/components/layout/SectionContainer";
import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";

export function ServiceAreaSection() {
  return (
    <SectionContainer
      ariaLabelledBy="service-area-heading"
      className="bg-white"
      id="service-area"
    >
      <ServiceAreaOverview headingId="service-area-heading" />
    </SectionContainer>
  );
}

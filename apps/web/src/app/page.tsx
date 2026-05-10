import { CraftsmanshipSection } from "@/components/sections/CraftsmanshipSection";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CraftsmanshipSection />
      <PortfolioSection />
      <ServicesOverviewSection />
      <ServiceAreaSection />
      <FinalCallToActionSection />
    </>
  );
}

import { BentoProofSection } from "@/components/sections/BentoProofSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { FrequentlyAskedQuestionsSection } from "@/components/sections/FrequentlyAskedQuestionsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustBarSection } from "@/components/sections/TrustBarSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ServicesOverviewSection />
      <DifferentiatorsSection />
      <BentoProofSection />
      <ProcessSection />
      <CaseStudiesSection limit={2} />
      <TestimonialsSection />
      <FrequentlyAskedQuestionsSection />
      <FinalCallToActionSection />
    </>
  );
}

import { SectionContainer } from "@/components/layout/SectionContainer";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Tile Installation Photos",
  description:
    "Take a look at our tile work, including floors, showers, backsplashes, and fireplace surrounds.",
  path: "/work"
});

export default function WorkPage() {
  return (
    <>
      <SectionContainer
        ariaLabelledBy="work-heading"
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="flex max-w-3xl flex-col gap-3">
          <h1
            id="work-heading"
            className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
          >
            Our tile work
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Open a photo for a closer look.
          </p>
        </div>
        <PortfolioSection showCta={false} />
      </SectionContainer>
      <FinalCallToActionSection />
    </>
  );
}

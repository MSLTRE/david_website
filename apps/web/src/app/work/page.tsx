import { SectionContainer } from "@/components/layout/SectionContainer";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Tile Portfolio",
  description:
    "Tile portfolio from Luibrand Tile — bathroom floors, kitchen floors, showers, backsplashes, and fireplace surrounds across the Austin area.",
  path: "/work"
});

export default function WorkPage() {
  return (
    <>
      <SectionContainer ariaLabelledBy="work-heading">
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio
          </p>
          <h1
            id="work-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
          >
            A few rooms from recent work.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Bathrooms, kitchens, showers, backsplashes, and fireplace
            surrounds. Click any image to view it full-size.
          </p>
        </div>
      </SectionContainer>
      <PortfolioSection
        showCta={false}
        heading="Selected projects"
        description="A current sampling of recent installations. More available on request."
        eyebrow="Selected work"
      />
      <FinalCallToActionSection />
    </>
  );
}

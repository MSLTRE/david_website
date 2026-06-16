import { SectionContainer } from "@/components/layout/SectionContainer";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Tile Portfolio in Austin & Round Rock",
  description:
    "Tile portfolio from Luibrand Tile across Austin, Round Rock, and the Greater Austin area, including custom showers, fireplace surrounds, backsplashes, foyers, and wood-look tile floors.",
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
            Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Take a look at some of our recent work throughout the Greater
            Austin area. From custom showers and fireplace surrounds to
            backsplashes, foyers, and wood-look tile floors, these projects
            highlight the craftsmanship and attention to detail that go into
            every installation.
          </p>
        </div>
      </SectionContainer>
      <PortfolioSection
        showCta={false}
        heading="Recent tile projects"
        eyebrow="Selected portfolio"
      />
      <FinalCallToActionSection />
    </>
  );
}

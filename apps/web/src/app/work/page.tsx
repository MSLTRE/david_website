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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Portfolio
          </p>
          <h1
            id="work-heading"
            className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
          >
            Recent tile work throughout the Austin area.
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl">
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

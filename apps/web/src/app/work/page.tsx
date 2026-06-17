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
      <SectionContainer
        ariaLabelledBy="work-heading"
        className="pb-12 md:pb-16 lg:pb-20"
      >
        <div className="flex max-w-3xl flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Portfolio
          </p>
          <h1
            id="work-heading"
            className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
          >
            Recent tile work throughout the Austin area
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Showers, floors, backsplashes, fireplace surrounds, and detail work
            finished with careful prep and clean layout.
          </p>
        </div>
      </SectionContainer>
      <PortfolioSection
        showCta={false}
        heading="Project gallery"
        eyebrow="Selected work"
        description="Open any photo for a closer view of materials, edges, transitions, and finished room details."
      />
      <FinalCallToActionSection />
    </>
  );
}

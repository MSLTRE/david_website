import { SectionContainer } from "@/components/layout/SectionContainer";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { Button } from "@/components/ui/Button";
import { portfolioImages } from "@/content/portfolio";

type PortfolioSectionProps = {
  readonly limit?: number;
  readonly showCta?: boolean;
  readonly heading?: string;
  readonly eyebrow?: string;
  readonly description?: string;
  readonly id?: string;
};

export function PortfolioSection({
  limit,
  showCta = true,
  heading = "Project gallery",
  eyebrow = "Portfolio",
  description = "A closer look at showers, floors, fireplace surrounds, backsplashes, and finish details from Austin-area projects.",
  id = "portfolio"
}: PortfolioSectionProps = {}) {
  const items = limit ? portfolioImages.slice(0, limit) : portfolioImages;

  return (
    <SectionContainer
      id={id}
      ariaLabelledBy="portfolio-heading"
      className="pt-12 md:pt-16 lg:pt-20"
      tone="muted"
    >
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2
          id="portfolio-heading"
          className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
        >
          {heading}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          {description}
        </p>
      </div>

      <PortfolioGallery images={items} />

      {showCta ? (
        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
          <Button href="/work" variant="secondary" shape="pill">
            See full portfolio
          </Button>
          <Button href="/contact" variant="ghost" shape="pill">
            Start a project
          </Button>
        </div>
      ) : null}
    </SectionContainer>
  );
}

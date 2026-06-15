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
  heading = "A few rooms from recent work.",
  eyebrow = "Portfolio",
  description = "Bathroom floors, kitchen floors, showers, backsplashes, and fireplace surrounds. Real projects, real materials, real layouts.",
  id = "portfolio"
}: PortfolioSectionProps = {}) {
  const items = limit ? portfolioImages.slice(0, limit) : portfolioImages;

  return (
    <SectionContainer id={id} ariaLabelledBy="portfolio-heading" tone="muted">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2
          id="portfolio-heading"
          className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
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

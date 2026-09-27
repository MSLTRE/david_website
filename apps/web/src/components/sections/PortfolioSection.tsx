import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { Button } from "@/components/ui/Button";
import { portfolioImages } from "@/content/portfolio";

type PortfolioSectionProps = {
  readonly limit?: number;
  readonly showCta?: boolean;
  readonly id?: string;
};

export function PortfolioSection({
  limit,
  showCta = true,
  id = "portfolio"
}: PortfolioSectionProps = {}) {
  const items = limit ? portfolioImages.slice(0, limit) : portfolioImages;

  return (
    <div id={id} role="region" aria-label="Tile installation photo gallery" className="mt-8">
      <PortfolioGallery images={items} />

      {showCta ? (
        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
          <Button href="/work" variant="secondary" shape="pill">
            View all photos
          </Button>
          <Button href="/contact#quote" variant="ghost" shape="pill">
            Request a free estimate
          </Button>
        </div>
      ) : null}
    </div>
  );
}

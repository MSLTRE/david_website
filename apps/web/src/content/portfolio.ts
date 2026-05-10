export type PortfolioCategory =
  | "Fireplace"
  | "Shower"
  | "Floor"
  | "Backsplash";

export type PortfolioImage = {
  readonly id: string;
  readonly title: string;
  readonly category: PortfolioCategory;
  readonly src: string;
  readonly alt: string;
  readonly description: string;
  readonly featured?: boolean;
  readonly orientation: "landscape" | "portrait";
  readonly width: number;
  readonly height: number;
};

export const portfolioImages: readonly PortfolioImage[] = [
  {
    id: "precision-tile-project-2025-11",
    title: "Precision tile installation",
    category: "Floor",
    src: "/portfolio/20251114_154302.jpg",
    alt: "Completed Luibrand Tile installation with clean layout and grout lines.",
    description: "Clean layout, tight spacing, and a finished surface built to last.",
    featured: true,
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "tile-project-detail-2025-12",
    title: "Tile detail work",
    category: "Backsplash",
    src: "/portfolio/20251201_125707.jpg",
    alt: "Luibrand Tile detail work showing precise tile placement.",
    description: "A polished detail view from a recent Austin-area tile project.",
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "tile-installation-2025-12",
    title: "Finished tile surface",
    category: "Floor",
    src: "/portfolio/20251217_172615.jpg",
    alt: "Finished Luibrand Tile surface with aligned grout and clean transitions.",
    description: "Consistent grout lines and careful finish work across the surface.",
    featured: true,
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "tile-project-2026-02-a",
    title: "Austin-area tile work",
    category: "Shower",
    src: "/portfolio/20260204_114751.jpg",
    alt: "Recent Luibrand Tile installation in the Austin and Round Rock service area.",
    description: "A recent project showing the preparation and finish standards.",
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "tile-project-2026-02-b",
    title: "Tile installation detail",
    category: "Fireplace",
    src: "/portfolio/20260204_114801.jpg",
    alt: "Detailed Luibrand Tile installation with a clean finished edge.",
    description: "Detail work focused on alignment, edges, and a clean final look.",
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "finished-tile-project-2026-02",
    title: "Completed tile project",
    category: "Floor",
    src: "/portfolio/20260219_115805.jpg",
    alt: "Completed Luibrand Tile project ready for everyday use.",
    description: "A completed installation from David Luibrand's recent work.",
    featured: true,
    orientation: "landscape",
    width: 1600,
    height: 1200
  }
];

export const portfolioCategories: readonly PortfolioCategory[] = [
  "Floor",
  "Shower",
  "Backsplash",
  "Fireplace"
];

export function findPortfolioImageById(
  id: string
): PortfolioImage | undefined {
  return portfolioImages.find((image) => image.id === id);
}

export const heroImage =
  portfolioImages.find((image) => image.featured) ?? portfolioImages[0];

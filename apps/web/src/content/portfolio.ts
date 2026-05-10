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
    id: "marble-fireplace-surround",
    title: "Marble fireplace surround",
    category: "Fireplace",
    src: "/portfolio/20251114_154302.jpg",
    alt: "Marble-look tile fireplace surround with clean miters and a raised hearth.",
    description: "A finished fireplace surround with balanced cuts and clean grout lines.",
    featured: true,
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  {
    id: "gray-shower-bench-niche",
    title: "Gray shower with bench and niche",
    category: "Shower",
    src: "/portfolio/20251201_125707.jpg",
    alt: "Gray tile shower with a built-in bench, recessed niche, and mosaic floor.",
    description: "A shower installation with wall tile, a bench, niche, and mosaic pan.",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  {
    id: "diagonal-entry-tile-floor",
    title: "Diagonal entry tile floor",
    category: "Floor",
    src: "/portfolio/20251217_172615.jpg",
    alt: "Entry tile floor installed on a diagonal layout through a tall foyer.",
    description: "A diagonal floor layout with clean transitions at the surrounding rooms.",
    featured: true,
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  {
    id: "arched-stone-shower",
    title: "Arched stone shower",
    category: "Shower",
    src: "/portfolio/20260204_114751.jpg",
    alt: "Tall arched shower with dark stone tile, shelves, bench, and pebble floor.",
    description: "A tall shower with an arched opening, dark wall tile, and pebble floor.",
    orientation: "portrait",
    width: 1655,
    height: 3547
  },
  {
    id: "shower-niche-bench-detail",
    title: "Shower niche and bench detail",
    category: "Shower",
    src: "/portfolio/20260204_114801.jpg",
    alt: "Close-up of a dark tile shower corner with a recessed niche, bench, and pebble floor.",
    description: "Shower detail work around a niche, corner bench, and pebble floor.",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  {
    id: "marble-look-foyer-floor",
    title: "Marble-look foyer floor",
    category: "Floor",
    src: "/portfolio/20260219_115805.jpg",
    alt: "Large foyer floor finished with white marble-look tile and dark veining.",
    description: "A bright foyer floor with a marble-look finish and careful alignment.",
    featured: true,
    orientation: "landscape",
    width: 4000,
    height: 3000
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

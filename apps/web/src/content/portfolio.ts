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
    id: "marble-look-foyer-tile",
    title: "Marble-look foyer",
    category: "Floor",
    src: "/portfolio/marble-look-foyer-tile.jpeg",
    alt: "Marble-look foyer and entry tile installation with clean grout lines.",
    description: "Marble-look foyer and entry tile installation.",
    featured: true,
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "marble-look-entry-tile-angle",
    title: "Entry tile, alternate angle",
    category: "Floor",
    src: "/portfolio/marble-look-entry-tile-angle.jpeg",
    alt: "Marble-look entry tile floor photographed from an alternate angle.",
    description: "Marble-look entry tile from alternate angle.",
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "open-plan-wood-look-tile-floor",
    title: "Open-plan wood-look tile floor",
    category: "Floor",
    src: "/portfolio/open-plan-wood-look-tile-floor.jpeg",
    alt: "Open-plan kitchen and living area with continuous wood-look tile flooring.",
    description: "Open-plan kitchen and living area with wood-look tile floor.",
    featured: true,
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "patterned-kitchen-backsplash-detail",
    title: "Patterned backsplash detail",
    category: "Backsplash",
    src: "/portfolio/patterned-kitchen-backsplash-detail.jpeg",
    alt: "Patterned white kitchen backsplash detail around the range and countertops.",
    description: "Kitchen backsplash detail around range and counters.",
    featured: true,
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "patterned-kitchen-backsplash-wide",
    title: "Patterned backsplash, wide view",
    category: "Backsplash",
    src: "/portfolio/patterned-kitchen-backsplash-wide.jpeg",
    alt: "Wide view of a white patterned kitchen backsplash spanning the prep wall.",
    description: "White patterned kitchen backsplash, wide view.",
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "fireplace-marble-tile-surround",
    title: "Marble fireplace surround",
    category: "Fireplace",
    src: "/portfolio/fireplace-marble-tile-surround.jpeg",
    alt: "Marble-look fireplace surround and matching hearth tile.",
    description: "Marble-look fireplace surround and hearth tile.",
    featured: true,
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "arched-stone-shower-tile",
    title: "Arched stone-look shower",
    category: "Shower",
    src: "/portfolio/arched-stone-shower-tile.jpeg",
    alt: "Arched shower opening with dark stone-look wall tile and pebble floor.",
    description: "Arched shower with dark stone-look wall tile and pebble floor.",
    orientation: "portrait",
    width: 1200,
    height: 1600
  },
  {
    id: "arched-shower-niche-bench-detail",
    title: "Shower niche and bench detail",
    category: "Shower",
    src: "/portfolio/arched-shower-niche-bench-detail.jpeg",
    alt: "Detail of shower niche, bench, pebble floor, and stone-look wall tile.",
    description: "Shower niche, bench, pebble floor, and stone-look wall tile detail.",
    orientation: "portrait",
    width: 1200,
    height: 1600
  },
  {
    id: "gray-shower-tile-bench-niche",
    title: "Gray shower with bench and niche",
    category: "Shower",
    src: "/portfolio/gray-shower-tile-bench-niche.jpeg",
    alt: "Gray shower tile installation featuring a built-in bench and wall niche.",
    description: "Gray shower tile installation with bench and wall niche.",
    orientation: "landscape",
    width: 1600,
    height: 1200
  },
  {
    id: "diagonal-entry-tile-before",
    title: "Entry tile, alternate condition",
    category: "Floor",
    src: "/portfolio/diagonal-entry-tile-before.jpeg",
    alt: "Entry tile project showing an alternate or existing-condition view.",
    description: "Entry tile project before or alternate existing condition.",
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

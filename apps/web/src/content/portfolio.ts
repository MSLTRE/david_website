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
  readonly showInCarousel?: boolean;
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
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  {
    id: "diagonal-entry-tile-floor",
    title: "Diagonal entry tile floor",
    category: "Floor",
    src: "/portfolio/20251217_172615.jpg",
    alt: "Entry tile floor installed on a diagonal layout through a tall foyer.",
    description: "A diagonal floor layout with clean transitions at the surrounding rooms.",
    featured: true,
    orientation: "portrait",
    width: 3000,
    height: 4000
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
    orientation: "portrait",
    width: 3000,
    height: 4000
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
  },
  {
    id: "marble-bathroom-floor-freestanding-tub",
    title: "Marble bathroom floor",
    category: "Floor",
    src: "/portfolio/june-2026/marble-bathroom-floor-freestanding-tub.jpg",
    alt: "Marble-look bathroom floor tile in a bright bathroom with a freestanding tub and arched shower.",
    description: "A polished bathroom floor with marble-look tile, balanced cuts, and clean transitions.",
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  {
    id: "dark-stone-kitchen-floor-window-view",
    title: "Dark stone kitchen floor",
    category: "Floor",
    src: "/portfolio/june-2026/dark-stone-kitchen-floor-window-view.jpg",
    alt: "Dark large-format kitchen floor tile extending toward windows and a kitchen island.",
    description: "A wide kitchen floor view showing dark stone-look tile through the main work area.",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  {
    id: "dark-stone-kitchen-floor-island-detail",
    title: "Dark stone kitchen floor detail",
    category: "Floor",
    src: "/portfolio/june-2026/dark-stone-kitchen-floor-island-detail.jpg",
    alt: "Dark stone-look kitchen floor tile around a wood island and cabinets.",
    description: "Large-format kitchen tile set around cabinets, island edges, and room transitions.",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  {
    id: "dark-stone-kitchen-floor-overview",
    title: "Dark stone kitchen floor",
    category: "Floor",
    src: "/portfolio/june-2026/dark-stone-kitchen-floor-overview.jpg",
    alt: "Overview of dark stone-look kitchen floor tile from above the kitchen counters.",
    description: "An overhead kitchen view showing the tile field across the cooking and dining area.",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  {
    id: "hex-marble-kitchen-backsplash-range",
    title: "Hex marble kitchen backsplash",
    category: "Backsplash",
    src: "/portfolio/june-2026/hex-marble-kitchen-backsplash-range.jpg",
    alt: "Hex marble mosaic kitchen backsplash installed behind a range with dark cabinets.",
    description: "Hex mosaic backsplash work around the range, outlets, hood, and cabinet lines.",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  {
    id: "light-bathroom-floor-vanity-view",
    title: "Light bathroom floor",
    category: "Floor",
    src: "/portfolio/june-2026/light-bathroom-floor-vanity-view.jpg",
    alt: "Light bathroom floor tile installed through a vanity area and doorway.",
    description: "A light bathroom floor installation with clean grout lines and doorway transitions.",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  {
    id: "light-bathroom-floor-long-view",
    title: "Light bathroom floor",
    category: "Floor",
    src: "/portfolio/june-2026/light-bathroom-floor-long-view.jpg",
    alt: "Long view of light bathroom floor tile with a vanity and built-in shelving.",
    description: "A longer bathroom view showing the tile running cleanly through a narrow room.",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
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

export const carouselImages = portfolioImages.filter(
  (image) => image.showInCarousel !== false
);

export const heroImage =
  portfolioImages.find((image) => image.featured) ?? portfolioImages[0];

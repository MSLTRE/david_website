import { generatedPortfolioImages } from "@/content/portfolio.generated";

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
  readonly room?: string;
  readonly material?: string;
  readonly location?: string;
  readonly featured?: boolean;
  readonly showInCarousel?: boolean;
  readonly orientation: "landscape" | "portrait";
  readonly width: number;
  readonly height: number;
};

type PortfolioMetadata = Partial<Omit<PortfolioImage, "src">> & {
  readonly order?: number;
  readonly showInPortfolio?: boolean;
};

const metadataBySrc: Record<string, PortfolioMetadata> = {
  "/portfolio/20251114_154302.jpg": {
    order: 10,
    id: "marble-fireplace-surround",
    title: "Marble-look fireplace surround",
    category: "Fireplace",
    alt: "Marble-look tile around a fireplace and raised hearth.",
    description: "Marble-look tile around a fireplace and raised hearth.",
    room: "Living room",
    material: "Marble-look tile",
    location: "Greater Austin",
    featured: true,
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/20251201_125707.jpg": {
    order: 20,
    id: "gray-shower-bench-niche",
    title: "Gray tile shower",
    category: "Shower",
    alt: "Gray tile shower with a bench, built-in shelf, and mosaic floor.",
    description: "Gray tile shower with a bench, built-in shelf, and mosaic floor.",
    room: "Bathroom",
    material: "Gray tile and mosaic floor",
    location: "Greater Austin",
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/20251217_172615.jpg": {
    order: 30,
    id: "diagonal-entry-tile-floor",
    title: "Entry floor tile",
    category: "Floor",
    alt: "Tile laid diagonally across an entry floor.",
    description: "Tile laid diagonally across an entry floor.",
    room: "Entry",
    material: "Floor tile",
    location: "Greater Austin",
    featured: true,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/20260204_114751.jpg": {
    order: 40,
    id: "arched-stone-shower",
    title: "Arched tile shower",
    category: "Shower",
    alt: "Shower with an arched opening, dark wall tile, a bench, and pebble floor.",
    description: "Shower with an arched opening, dark wall tile, a bench, and pebble floor.",
    room: "Bathroom",
    material: "Dark tile and pebble floor",
    location: "Greater Austin",
    orientation: "portrait",
    width: 1655,
    height: 3547
  },
  "/portfolio/20260204_114801.jpg": {
    order: 50,
    id: "shower-niche-bench-detail",
    title: "Shower bench and shelf",
    category: "Shower",
    alt: "Tiled shower shelf, corner bench, and pebble floor.",
    description: "Tiled shower shelf, corner bench, and pebble floor.",
    room: "Bathroom",
    material: "Dark tile and pebble floor",
    location: "Greater Austin",
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/20260219_115805.jpg": {
    order: 60,
    id: "marble-look-foyer-floor",
    title: "Marble-look entry floor",
    category: "Floor",
    alt: "Entry floor with white marble-look tile and dark veining.",
    description: "Entry floor with white marble-look tile and dark veining.",
    room: "Foyer",
    material: "Marble-look tile",
    location: "Greater Austin",
    featured: true,
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/marble-bathroom-floor-freestanding-tub.jpg": {
    order: 70,
    id: "marble-bathroom-floor-freestanding-tub",
    title: "Marble-look bathroom floor",
    category: "Floor",
    alt: "Marble-look bathroom floor beside a freestanding tub and arched shower.",
    description: "Marble-look bathroom floor beside a freestanding tub and arched shower.",
    room: "Primary bathroom",
    material: "Marble-look tile",
    location: "Greater Austin",
    featured: true,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/june-2026/dark-stone-kitchen-floor-window-view.jpg": {
    order: 80,
    id: "dark-stone-kitchen-floor-window-view",
    title: "Kitchen floor tile",
    category: "Floor",
    alt: "Dark floor tile in a kitchen and dining area.",
    description: "Dark floor tile in a kitchen and dining area.",
    room: "Kitchen",
    material: "Dark floor tile",
    location: "Greater Austin",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/june-2026/dark-stone-kitchen-floor-island-detail.jpg": {
    order: 90,
    id: "dark-stone-kitchen-floor-island-detail",
    title: "Kitchen floor tile",
    category: "Floor",
    alt: "Dark kitchen floor tile around a wood island and cabinets.",
    description: "Dark kitchen floor tile around a wood island and cabinets.",
    room: "Kitchen",
    material: "Dark floor tile",
    location: "Greater Austin",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/dark-stone-kitchen-floor-overview.jpg": {
    order: 100,
    id: "dark-stone-kitchen-floor-overview",
    title: "Kitchen floor tile",
    category: "Floor",
    alt: "Dark kitchen floor tile between wood cabinets and a refrigerator.",
    description: "Dark kitchen floor tile between wood cabinets and a refrigerator.",
    room: "Kitchen",
    material: "Dark floor tile",
    location: "Greater Austin",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/june-2026/hex-marble-kitchen-backsplash-range.jpg": {
    order: 110,
    id: "hex-marble-kitchen-backsplash-range",
    title: "Hexagon tile backsplash",
    category: "Backsplash",
    alt: "Hexagon mosaic tile backsplash behind a range between dark cabinets.",
    description: "Hexagon mosaic tile backsplash behind a range between dark cabinets.",
    room: "Kitchen",
    material: "Hexagon mosaic tile",
    location: "Greater Austin",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/light-bathroom-floor-vanity-view.jpg": {
    order: 120,
    id: "light-bathroom-floor-vanity-view",
    title: "Bathroom floor tile",
    category: "Floor",
    alt: "Bathroom floor with light rectangular tile and a wall-mounted vanity.",
    description: "Bathroom floor with light rectangular tile and a wall-mounted vanity.",
    room: "Bathroom",
    material: "Light floor tile",
    location: "Greater Austin",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/light-bathroom-floor-long-view.jpg": {
    order: 130,
    id: "light-bathroom-floor-long-view",
    title: "Bathroom floor tile",
    category: "Floor",
    alt: "Light rectangular floor tile in a bathroom with built-in shelves.",
    description: "Light rectangular floor tile in a bathroom with built-in shelves.",
    room: "Bathroom",
    material: "Light floor tile",
    location: "Greater Austin",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/diagonal-entry-tile-before.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/fireplace-marble-tile-surround.jpeg": {
    showInPortfolio: false
  },
  // Legacy generated placeholders: valid JPEGs, but visually blank or flat.
  "/portfolio/arched-shower-niche-bench-detail.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/arched-stone-shower-tile.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/gray-shower-tile-bench-niche.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/marble-look-entry-tile-angle.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/marble-look-foyer-tile.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/open-plan-wood-look-tile-floor.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/patterned-kitchen-backsplash-detail.jpeg": {
    showInPortfolio: false
  },
  "/portfolio/patterned-kitchen-backsplash-wide.jpeg": {
    showInPortfolio: false
  }
};

export const portfolioCategories: readonly PortfolioCategory[] = [
  "Floor",
  "Shower",
  "Backsplash",
  "Fireplace"
];

function inferCategory(text: string): PortfolioCategory {
  const value = text.toLowerCase();

  if (value.includes("fireplace")) return "Fireplace";
  if (value.includes("shower") || value.includes("bath")) return "Shower";
  if (value.includes("backsplash") || value.includes("kitchen")) {
    return "Backsplash";
  }

  return "Floor";
}

export const portfolioImages: readonly PortfolioImage[] = generatedPortfolioImages
  .map((image, generatedIndex) => {
    const metadata = metadataBySrc[image.src] ?? {};
    const title = metadata.title ?? "Tile installation photo";
    const category = metadata.category ?? inferCategory(`${image.id} ${title}`);
    const room = metadata.room;
    const material = metadata.material;
    const order = metadata.order ?? 1000 + generatedIndex;

    return {
      order,
      showInPortfolio: metadata.showInPortfolio,
      id: metadata.id ?? image.id,
      title,
      category,
      src: image.src,
      alt: metadata.alt ?? title,
      description: metadata.description ?? metadata.alt ?? title,
      room,
      material,
      location: metadata.location,
      featured: metadata.featured,
      showInCarousel: metadata.showInCarousel,
      orientation: image.orientation,
      width: image.width,
      height: image.height
    };
  })
  .filter((image) => image.showInPortfolio !== false)
  .sort((a, b) => a.order - b.order)
  .map((image) => ({
    id: image.id,
    title: image.title,
    category: image.category,
    src: image.src,
    alt: image.alt,
    description: image.description,
    room: image.room,
    material: image.material,
    location: image.location,
    featured: image.featured,
    showInCarousel: image.showInCarousel,
    orientation: image.orientation,
    width: image.width,
    height: image.height
  }));

export function findPortfolioImageById(
  id: string
): PortfolioImage | undefined {
  return portfolioImages.find((image) => image.id === id);
}

export const carouselImages = portfolioImages.filter(
  (image) => image.showInCarousel !== false
);

export const heroImage =
  findPortfolioImageById("marble-bathroom-floor-freestanding-tub") ??
  findPortfolioImageById("marble-look-foyer-floor") ??
  portfolioImages.find((image) => image.featured) ??
  portfolioImages[0];

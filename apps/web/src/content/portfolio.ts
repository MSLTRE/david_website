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
    title: "Marble fireplace surround",
    category: "Fireplace",
    alt: "Marble-look tile fireplace surround with clean miters and a raised hearth.",
    description: "A finished fireplace surround with balanced cuts and clean grout lines.",
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
    title: "Gray shower with bench and niche",
    category: "Shower",
    alt: "Gray tile shower with a built-in bench, recessed niche, and mosaic floor.",
    description: "A shower installation with wall tile, a bench, niche, and mosaic pan.",
    room: "Bathroom",
    material: "Gray wall tile and mosaic pan",
    location: "Greater Austin",
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/20251217_172615.jpg": {
    order: 30,
    id: "diagonal-entry-tile-floor",
    title: "Diagonal entry tile floor",
    category: "Floor",
    alt: "Entry tile floor installed on a diagonal layout through a tall foyer.",
    description: "A diagonal floor layout with clean transitions at the surrounding rooms.",
    room: "Entry",
    material: "Diagonal floor tile",
    location: "Greater Austin",
    featured: true,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/20260204_114751.jpg": {
    order: 40,
    id: "arched-stone-shower",
    title: "Arched stone shower",
    category: "Shower",
    alt: "Tall arched shower with dark stone tile, shelves, bench, and pebble floor.",
    description: "A tall shower with an arched opening, dark wall tile, and pebble floor.",
    room: "Bathroom",
    material: "Stone-look shower tile",
    location: "Greater Austin",
    orientation: "portrait",
    width: 1655,
    height: 3547
  },
  "/portfolio/20260204_114801.jpg": {
    order: 50,
    id: "shower-niche-bench-detail",
    title: "Shower niche and bench detail",
    category: "Shower",
    alt: "Close-up of a dark tile shower corner with a recessed niche, bench, and pebble floor.",
    description: "Shower detail work around a niche, corner bench, and pebble floor.",
    room: "Bathroom",
    material: "Stone tile and pebble floor",
    location: "Greater Austin",
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/20260219_115805.jpg": {
    order: 60,
    id: "marble-look-foyer-floor",
    title: "Marble-look foyer floor",
    category: "Floor",
    alt: "Large foyer floor finished with white marble-look tile and dark veining.",
    description: "A bright foyer floor with a marble-look finish and careful alignment.",
    room: "Foyer",
    material: "Marble-look floor tile",
    location: "Greater Austin",
    featured: true,
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/marble-bathroom-floor-freestanding-tub.jpg": {
    order: 70,
    id: "marble-bathroom-floor-freestanding-tub",
    title: "Marble bathroom floor",
    category: "Floor",
    alt: "Marble-look bathroom floor tile in a bright bathroom with a freestanding tub and arched shower.",
    description: "A polished bathroom floor with marble-look tile, balanced cuts, and clean transitions.",
    room: "Primary bathroom",
    material: "Marble-look floor tile",
    location: "Greater Austin",
    featured: true,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/june-2026/dark-stone-kitchen-floor-window-view.jpg": {
    order: 80,
    id: "dark-stone-kitchen-floor-window-view",
    title: "Dark stone kitchen floor",
    category: "Floor",
    alt: "Dark large-format kitchen floor tile extending toward windows and a kitchen island.",
    description: "A wide kitchen floor view showing dark stone-look tile through the main work area.",
    room: "Kitchen",
    material: "Large-format stone-look tile",
    location: "Greater Austin",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/june-2026/dark-stone-kitchen-floor-island-detail.jpg": {
    order: 90,
    id: "dark-stone-kitchen-floor-island-detail",
    title: "Dark stone kitchen floor detail",
    category: "Floor",
    alt: "Dark stone-look kitchen floor tile around a wood island and cabinets.",
    description: "Large-format kitchen tile set around cabinets, island edges, and room transitions.",
    room: "Kitchen",
    material: "Large-format stone-look tile",
    location: "Greater Austin",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/dark-stone-kitchen-floor-overview.jpg": {
    order: 100,
    id: "dark-stone-kitchen-floor-overview",
    title: "Dark stone kitchen floor",
    category: "Floor",
    alt: "Overview of dark stone-look kitchen floor tile from above the kitchen counters.",
    description: "An overhead kitchen view showing the tile field across the cooking and dining area.",
    room: "Kitchen",
    material: "Stone-look floor tile",
    location: "Greater Austin",
    showInCarousel: false,
    orientation: "portrait",
    width: 3000,
    height: 4000
  },
  "/portfolio/june-2026/hex-marble-kitchen-backsplash-range.jpg": {
    order: 110,
    id: "hex-marble-kitchen-backsplash-range",
    title: "Hex marble kitchen backsplash",
    category: "Backsplash",
    alt: "Hex marble mosaic kitchen backsplash installed behind a range with dark cabinets.",
    description: "Hex mosaic backsplash work around the range, outlets, hood, and cabinet lines.",
    room: "Kitchen",
    material: "Hex marble mosaic",
    location: "Greater Austin",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/light-bathroom-floor-vanity-view.jpg": {
    order: 120,
    id: "light-bathroom-floor-vanity-view",
    title: "Light bathroom floor",
    category: "Floor",
    alt: "Light bathroom floor tile installed through a vanity area and doorway.",
    description: "A light bathroom floor installation with clean grout lines and doorway transitions.",
    room: "Bathroom",
    material: "Light stone-look floor tile",
    location: "Greater Austin",
    orientation: "landscape",
    width: 4000,
    height: 3000
  },
  "/portfolio/june-2026/light-bathroom-floor-long-view.jpg": {
    order: 130,
    id: "light-bathroom-floor-long-view",
    title: "Light bathroom floor",
    category: "Floor",
    alt: "Long view of light bathroom floor tile with a vanity and built-in shelving.",
    description: "A longer bathroom view showing the tile running cleanly through a narrow room.",
    room: "Bathroom",
    material: "Light stone-look floor tile",
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

function fallbackRoom(text: string) {
  const value = text.toLowerCase();

  if (value.includes("kitchen")) return "Kitchen";
  if (value.includes("bath") || value.includes("shower")) return "Bathroom";
  if (value.includes("fireplace")) return "Living room";
  if (value.includes("foyer") || value.includes("entry")) return "Entry";

  return "Austin-area home";
}

function fallbackMaterial(text: string) {
  const value = text.toLowerCase();

  if (value.includes("marble")) return "Marble-look tile";
  if (value.includes("stone")) return "Stone-look tile";
  if (value.includes("hex")) return "Hex mosaic tile";
  if (value.includes("wood")) return "Wood-look tile";
  if (value.includes("backsplash")) return "Backsplash tile";

  return "Tile installation";
}

export const portfolioImages: readonly PortfolioImage[] = generatedPortfolioImages
  .map((image, generatedIndex) => {
    const metadata = metadataBySrc[image.src] ?? {};
    const title = (metadata.title ?? image.title) || "Tile project photo";
    const category = metadata.category ?? inferCategory(`${image.id} ${title}`);
    const room = metadata.room ?? fallbackRoom(`${image.id} ${title}`);
    const material = metadata.material ?? fallbackMaterial(`${image.id} ${title}`);
    const order = metadata.order ?? 1000 + generatedIndex;

    return {
      order,
      showInPortfolio: metadata.showInPortfolio,
      id: metadata.id ?? image.id,
      title,
      category,
      src: image.src,
      alt:
        metadata.alt ??
        `${title} by Luibrand Tile in the Greater Austin area.`,
      description:
        metadata.description ??
        `${title} with careful layout, clean grout lines, and a finished edge.`,
      room,
      material,
      location: metadata.location ?? "Greater Austin",
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

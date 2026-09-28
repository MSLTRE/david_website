export type ServiceCategory = {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly icon: "floor" | "shower" | "bath" | "flame" | "sun" | "grid" | "waves" | "stairs" | "wrench" | "sparkles";
};

export const services: readonly ServiceCategory[] = [
  {
    slug: "floors",
    name: "Floors",
    description: "Ceramic and porcelain floors, including large-format tile.",
    icon: "floor"
  },
  {
    slug: "showers",
    name: "Showers",
    description: "Shower walls and floors, benches, recessed shelves, and waterproofing.",
    icon: "shower"
  },
  {
    slug: "tub-surrounds",
    name: "Tub surrounds",
    description: "Tile walls around bathtubs.",
    icon: "bath"
  },
  {
    slug: "fireplace-surrounds",
    name: "Fireplace surrounds",
    description: "Tile for fireplace surrounds and hearths.",
    icon: "flame"
  },
  {
    slug: "patios",
    name: "Patios",
    description: "Tile for patios and outdoor seating areas.",
    icon: "sun"
  },
  {
    slug: "backsplashes",
    name: "Backsplashes",
    description: "Tile backsplashes for kitchens and utility rooms.",
    icon: "grid"
  },
  {
    slug: "pool-surrounds",
    name: "Pool surrounds",
    description: "Tile around pools.",
    icon: "waves"
  },
  {
    slug: "stairways",
    name: "Stairways",
    description: "Tile for steps and landings.",
    icon: "stairs"
  },
  {
    slug: "tile-repair-and-replacement",
    name: "Tile repair and replacement",
    description: "We repair or replace broken or damaged tiles.",
    icon: "wrench"
  },
  {
    slug: "grout-repair-or-replacement",
    name: "Grout repair and replacement",
    description: "We repair or replace damaged grout.",
    icon: "sparkles"
  }
];

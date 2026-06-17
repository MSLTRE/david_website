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
    description: "Large-format, marble-look, ceramic, porcelain, and stone-look floors with layout-first planning.",
    icon: "floor"
  },
  {
    slug: "showers",
    name: "Showers",
    description: "Custom shower walls, pans, benches, niches, shelves, and clean waterproof transitions.",
    icon: "shower"
  },
  {
    slug: "tub-surrounds",
    name: "Tub surrounds",
    description: "Polished bath surrounds with careful edges, fixtures, trim, and grout-line alignment.",
    icon: "bath"
  },
  {
    slug: "fireplace-surrounds",
    name: "Fireplace surrounds",
    description: "Fireplace faces, hearths, miters, returns, and material transitions made to read cleanly.",
    icon: "flame"
  },
  {
    slug: "patios",
    name: "Patios",
    description: "Outdoor tile projects planned around drainage, prep, and durable finish details.",
    icon: "sun"
  },
  {
    slug: "backsplashes",
    name: "Backsplashes",
    description: "Kitchen and utility backsplashes with outlet, cabinet, range, and edge details handled neatly.",
    icon: "grid"
  },
  {
    slug: "pool-surrounds",
    name: "Pool surrounds",
    description: "Tile work around pool-adjacent spaces where surface, edge, and exposure details matter.",
    icon: "waves"
  },
  {
    slug: "stairways",
    name: "Stairways",
    description: "Treads, risers, landings, and transitions planned for repeatable lines and durable use.",
    icon: "stairs"
  },
  {
    slug: "tile-repair-and-replacement",
    name: "Tile repair and replacement",
    description: "Targeted repairs and replacements where matching, prep, and finish quality are visible.",
    icon: "wrench"
  },
  {
    slug: "grout-repair-or-replacement",
    name: "Grout repair or replacement",
    description: "Grout repair and refresh work to tighten the look and extend the life of installed tile.",
    icon: "sparkles"
  }
];

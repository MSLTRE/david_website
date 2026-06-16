export type ServiceCategory = {
  readonly slug: string;
  readonly name: string;
};

export const services: readonly ServiceCategory[] = [
  {
    slug: "floors",
    name: "Floors"
  },
  {
    slug: "showers",
    name: "Showers"
  },
  {
    slug: "tub-surrounds",
    name: "Tub surrounds"
  },
  {
    slug: "fireplace-surrounds",
    name: "Fireplace surrounds"
  },
  {
    slug: "patios",
    name: "Patios"
  },
  {
    slug: "backsplashes",
    name: "Backsplashes"
  },
  {
    slug: "pool-surrounds",
    name: "Pool surrounds"
  },
  {
    slug: "stairways",
    name: "Stairways"
  },
  {
    slug: "tile-repair-and-replacement",
    name: "Tile repair and replacement"
  },
  {
    slug: "grout-repair-or-replacement",
    name: "Grout repair or replacement"
  }
];

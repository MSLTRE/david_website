export type ServiceCategory = {
  readonly slug: string;
  readonly name: string;
  readonly summary: string;
  readonly highlights: readonly string[];
};

export const services: readonly ServiceCategory[] = [
  {
    slug: "floor-tile-installation",
    name: "Floor tile installation",
    summary:
      "Porcelain, ceramic, and natural-stone floor tile installed flat, square, and built to last.",
    highlights: [
      "Subfloor leveling and prep",
      "Large-format and standard tile",
      "Crack isolation and waterproofing"
    ]
  },
  {
    slug: "bathroom-tile-installation",
    name: "Bathroom tile installation",
    summary:
      "Full bathroom tile work — floors, walls, niches, and trim — designed and installed end to end.",
    highlights: [
      "Full bath remodels",
      "Niche and bench detailing",
      "Linear-drain ready installations"
    ]
  },
  {
    slug: "kitchen-backsplash-installation",
    name: "Kitchen backsplash installation",
    summary:
      "Clean, precise backsplash work that finishes a kitchen without disrupting your week.",
    highlights: [
      "Subway, mosaic, and large-format",
      "Outlet and seam planning",
      "Same-day or next-day grout"
    ]
  },
  {
    slug: "shower-and-wet-room-tile",
    name: "Shower and wet-room tile",
    summary:
      "Custom showers and wet rooms, built on properly waterproofed assemblies for long service life.",
    highlights: [
      "Schluter and Wedi systems",
      "Curbless and barrier-free designs",
      "Slope-to-drain with linear or center drains"
    ]
  },
  {
    slug: "tile-repair-and-replacement",
    name: "Tile repair and replacement",
    summary:
      "Targeted repair of cracked, loose, or failing tile work without redoing the whole room.",
    highlights: [
      "Single-tile and section repair",
      "Grout replacement and color matching",
      "Caulk and silicone refresh"
    ]
  },
  {
    slug: "surface-preparation",
    name: "Surface preparation",
    summary:
      "Proper substrate prep — the difference between a tile job that lasts five years and one that lasts thirty.",
    highlights: [
      "Self-leveling underlayment",
      "Crack isolation membranes",
      "Backer board and waterproofing"
    ]
  }
];

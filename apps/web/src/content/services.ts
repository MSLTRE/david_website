export type ServiceCategory = {
  readonly slug: string;
  readonly name: string;
  readonly summary: string;
  readonly highlights: readonly string[];
};

export const services: readonly ServiceCategory[] = [
  {
    slug: "tile-floor-installation",
    name: "Tile floor installation",
    summary:
      "Floor tile installed on a properly prepared substrate, with careful layout and clean grout lines.",
    highlights: [
      "Subfloor prep and leveling",
      "Careful tile layout",
      "Clean grout and finish work"
    ]
  },
  {
    slug: "bathroom-tile-installation",
    name: "Bathroom tile installation",
    summary:
      "Bathroom tile work — floors, walls, niches, and trim — installed end to end.",
    highlights: [
      "Floors, walls, and niches",
      "Bench and detail work",
      "Tight, square layouts"
    ]
  },
  {
    slug: "shower-tile-installation",
    name: "Shower tile installation",
    summary:
      "Shower tile installed with attention to slope, layout, and waterproofing detail.",
    highlights: [
      "Wall and floor tile",
      "Niches and benches",
      "Careful waterproofing prep"
    ]
  },
  {
    slug: "kitchen-backsplash-installation",
    name: "Kitchen backsplash installation",
    summary:
      "Backsplash installation that finishes a kitchen cleanly without weeks of disruption.",
    highlights: [
      "Pattern, subway, and mosaic",
      "Outlet and seam planning",
      "Clean grout finish"
    ]
  },
  {
    slug: "tile-repair-and-replacement",
    name: "Tile repair and replacement",
    summary:
      "Targeted repair of cracked, loose, or failing tile work — without redoing the whole room.",
    highlights: [
      "Single-tile and section repair",
      "Grout replacement",
      "Caulk and silicone refresh"
    ]
  },
  {
    slug: "surface-preparation",
    name: "Surface preparation",
    summary:
      "Proper substrate preparation — the foundation that decides how long the work lasts.",
    highlights: [
      "Substrate inspection and prep",
      "Crack isolation",
      "Clean, square layout"
    ]
  }
];

export type CaseStudy = {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly scope: readonly string[];
  readonly outcome: string;
  readonly tags: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "primary-bath-renovation",
    title: "Primary bath, full tile replacement",
    summary:
      "Stripped and rebuilt a 1990s primary bath with a curbless shower, large-format porcelain floors, and a floating vanity surround.",
    scope: ["Demolition", "Waterproofing", "Floor and wall tile", "Shower build"],
    outcome:
      "Delivered on schedule with a tight grout pattern across 280 sq ft of tile.",
    tags: ["Bathroom", "Curbless shower", "Large-format"]
  },
  {
    slug: "kitchen-backsplash-refresh",
    title: "Kitchen backsplash refresh",
    summary:
      "Replaced an outdated tumbled-stone backsplash with a clean stacked porcelain field around custom cabinetry.",
    scope: ["Tear-out", "Outlet repositioning", "New backsplash install"],
    outcome:
      "Two-day install with no kitchen downtime overnight.",
    tags: ["Kitchen", "Backsplash"]
  },
  {
    slug: "open-plan-floor-tile",
    title: "Open-plan main floor tile",
    summary:
      "Self-leveled and tiled an entire main floor in 24x48 porcelain across kitchen, dining, and entry.",
    scope: ["Self-leveling underlayment", "Crack isolation", "Large-format install"],
    outcome:
      "Single-pass layout from front door through to the back patio with no transition strips.",
    tags: ["Floor", "Large-format", "Open plan"]
  },
  {
    slug: "wet-room-conversion",
    title: "Wet-room conversion",
    summary:
      "Converted a tub-and-surround into a fully tiled wet room with bench seat and niche detailing.",
    scope: ["Demo", "Wet-room waterproofing", "Bench and niche"],
    outcome:
      "Watertight, accessible bathing space with a modern, gallery-style tile pattern.",
    tags: ["Bathroom", "Wet room", "Accessibility"]
  }
];

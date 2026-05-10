// Placeholder content. The values below are illustrative examples for the
// Stage 2 scaffold and intentionally avoid claims that would need verification
// before launch. Replace with real, owner-approved copy in a later stage.

export type ProofPoint = {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly description: string;
};

export const proofPoints: readonly ProofPoint[] = [
  {
    id: "experience",
    label: "Experience",
    value: "Experienced",
    description:
      "Years of hands-on residential and light commercial tile work."
  },
  {
    id: "projects",
    label: "Projects",
    value: "Many",
    description: "Bathrooms, kitchens, and floors completed across the region."
  },
  {
    id: "warranty",
    label: "Warranty",
    value: "Workmanship",
    description: "Workmanship warranty on every installation we complete."
  },
  {
    id: "rating",
    label: "Reputation",
    value: "Word of mouth",
    description: "Most new work comes from referrals and repeat clients."
  }
];

export type Differentiator = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export const differentiators: readonly Differentiator[] = [
  {
    id: "preparation",
    title: "Preparation, then tile",
    description:
      "Most failures start under the tile. We do the prep work other crews skip — leveling, waterproofing, crack isolation."
  },
  {
    id: "ownership",
    title: "Owner on every job",
    description:
      "The same person who quoted your project is on site setting tile and answering questions."
  },
  {
    id: "schedule",
    title: "Schedules you can plan around",
    description:
      "Realistic timelines, daily clean-up, and clear communication when something needs to change."
  },
  {
    id: "finish",
    title: "Finish-grade detailing",
    description:
      "Tight grout lines, planned cuts, hand-finished edges, and silicone joints in the right places."
  }
];

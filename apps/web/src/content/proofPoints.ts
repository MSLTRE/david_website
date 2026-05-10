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
    value: "20+ yrs",
    description: "Two decades of residential and light commercial tile work."
  },
  {
    id: "projects",
    label: "Projects",
    value: "500+",
    description: "Bathrooms, kitchens, and floors completed across the region."
  },
  {
    id: "warranty",
    label: "Warranty",
    value: "5 years",
    description: "Workmanship warranty on every installation we complete."
  },
  {
    id: "rating",
    label: "Rating",
    value: "4.9 / 5",
    description: "Average customer rating across recent project reviews."
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

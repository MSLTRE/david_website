export type ProcessStep = {
  readonly number: number;
  readonly name: string;
  readonly description: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    number: 1,
    name: "Consultation",
    description:
      "We talk through the room, the look you want, and the constraints so the plan fits your home and budget."
  },
  {
    number: 2,
    name: "Measurement",
    description:
      "On-site measurement and substrate inspection so the quote and material order are accurate from day one."
  },
  {
    number: 3,
    name: "Material planning",
    description:
      "Tile, trim, grout, and underlayment chosen and ordered together so nothing holds up the install."
  },
  {
    number: 4,
    name: "Surface preparation",
    description:
      "Leveling, waterproofing, and substrate work done properly before a single tile is set."
  },
  {
    number: 5,
    name: "Installation",
    description:
      "Layout planned for the eye line, tile set tight and flat, grout cleaned the same day."
  },
  {
    number: 6,
    name: "Final walkthrough",
    description:
      "We walk the finished space with you, address punch-list items, and leave the work ready to use."
  }
];

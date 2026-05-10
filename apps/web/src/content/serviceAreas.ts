export type ServiceArea = {
  readonly city: string;
  readonly label: string;
  readonly description: string;
};

export const serviceAreas: readonly ServiceArea[] = [
  {
    city: "Round Rock",
    label: "Round Rock",
    description: "Home base. Quick scheduling and on-site visits across Round Rock."
  },
  {
    city: "Austin",
    label: "Austin",
    description: "Tile work across central, north, and east Austin neighborhoods."
  },
  {
    city: "Pflugerville",
    label: "Pflugerville",
    description: "Bath, kitchen, and floor projects throughout Pflugerville."
  },
  {
    city: "Georgetown",
    label: "Georgetown",
    description: "Tile installation and repair throughout Georgetown."
  },
  {
    city: "Cedar Park",
    label: "Cedar Park",
    description: "Showers, floors, and backsplashes across Cedar Park."
  },
  {
    city: "Leander",
    label: "Leander",
    description: "New-build and remodel tile work in Leander."
  },
  {
    city: "Lakeway",
    label: "Lakeway",
    description: "Custom tile detail in Lakeway and the lake communities."
  },
  {
    city: "Liberty Hill",
    label: "Liberty Hill",
    description: "Tile installation in Liberty Hill and nearby communities."
  },
  {
    city: "Hutto",
    label: "Hutto",
    description: "Bathroom and floor tile across Hutto."
  },
  {
    city: "Jarrell",
    label: "Jarrell",
    description: "Tile installation throughout Jarrell."
  },
  {
    city: "Salado",
    label: "Salado",
    description: "Tile installation and repair in Salado."
  }
];

export type SocialLink = {
  readonly label: string;
  readonly href: string;
};

export type SiteConfig = {
  readonly siteName: string;
  readonly legalName: string;
  readonly description: string;
  readonly tagline: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly serviceArea: string;
  readonly social: readonly SocialLink[];
};

export const siteConfig: SiteConfig = {
  siteName: "Lui Brand Tile",
  legalName: "Lui Brand Tile",
  tagline: "Premium tile installation, done right the first time.",
  description:
    "Lui Brand Tile is a premium tile installation and remodeling specialist. We design, prepare, and install bathroom, kitchen, and floor tile work that lasts a generation.",
  url: "https://luibrandtile.netlify.app",
  email: "hello@luibrandtile.example",
  phone: "(555) 010-0000",
  serviceArea: "Greater metro area and surrounding communities",
  social: []
};

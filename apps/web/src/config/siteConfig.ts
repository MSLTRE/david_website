export type SocialLink = {
  readonly label: string;
  readonly href: string;
};

export type SiteAddress = {
  readonly line1: string;
  readonly line2?: string;
  readonly city: string;
  readonly region: string;
  readonly short: string;
};

export type SiteConfig = {
  readonly siteName: string;
  readonly legalName: string;
  readonly description: string;
  readonly tagline: string;
  readonly heroEyebrow: string;
  readonly heroHeadline: string;
  readonly heroSupporting: string;
  readonly heroBody: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly serviceArea: string;
  readonly owner: string;
  readonly address: SiteAddress;
  readonly googleMapsUrl: string;
  readonly appleMapsUrl: string;
  readonly social: readonly SocialLink[];
};

const PHONE_DISPLAY = "(512) 843-9364";

export const siteConfig: SiteConfig = {
  siteName: "Luibrand Tile",
  legalName: "Luibrand Tile Company",
  owner: "David Luibrand",
  tagline: "Craftsmanship you can stand on.",
  heroEyebrow: "Austin-area tile installation",
  heroHeadline: "Luibrand Tile",
  heroSupporting: "Craftsmanship you can stand on.",
  heroBody:
    "Precision tile installation for floors, showers, backsplashes, and fireplace surrounds across Round Rock, Austin, and the surrounding communities.",
  description:
    "Tile floor, shower, backsplash, fireplace surround, repair, and preparation work by Luibrand Tile in Round Rock, Austin, and surrounding communities.",
  url: "https://luibrandtile.netlify.app",
  email: "luibrandtilecompany@gmail.com",
  phone: PHONE_DISPLAY,
  phoneHref: `tel:${PHONE_DISPLAY.replace(/[^+\d]/g, "")}`,
  serviceArea: "Round Rock, Austin, and surrounding communities",
  address: {
    line1: "1525 East Palm Valley Blvd.",
    line2: "Apt. 1101",
    city: "Round Rock",
    region: "TX",
    short: "Round Rock, TX"
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Luibrand%20Tile%201525%20East%20Palm%20Valley%20Blvd%20Round%20Rock%20TX",
  appleMapsUrl:
    "https://maps.apple.com/?q=Luibrand%20Tile&address=1525%20East%20Palm%20Valley%20Blvd%2C%20Apt.%201101%2C%20Round%20Rock%2C%20TX",
  social: []
};

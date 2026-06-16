export const serviceAreas = [
  { label: "Austin", lat: 30.2672, lng: -97.7431 },
  { label: "Round Rock", lat: 30.5083, lng: -97.6789 },
  { label: "Pflugerville", lat: 30.4394, lng: -97.62 },
  { label: "Georgetown", lat: 30.6333, lng: -97.6772 },
  { label: "Cedar Park", lat: 30.5052, lng: -97.8203 },
  { label: "Leander", lat: 30.5788, lng: -97.8531 },
  { label: "Lakeway", lat: 30.363, lng: -97.9796 },
  { label: "Liberty Hill", lat: 30.6649, lng: -97.9225 },
  { label: "Hutto", lat: 30.5427, lng: -97.5467 },
  { label: "Jarrell", lat: 30.8249, lng: -97.6045 },
  { label: "Salado", lat: 30.9471, lng: -97.5386 }
] as const;

export const siteConfig = {
  siteName: "Luibrand Tile",
  legalName: "Luibrand Tile Company",
  owner: "Luibrand Tile",
  url: "https://luibrandtile.com",
  description:
    "Luibrand Tile provides professional tile installation, shower tile, floor tile, backsplashes, fireplace surrounds, patios, pool surrounds, tile repair, and grout repair across Austin, Round Rock, Georgetown, Cedar Park, Pflugerville, and nearby Central Texas communities.",
  tagline: "Craftsmanship you can stand on.",
  seoTitle: "Luibrand Tile | Tile Contractor in Austin & Round Rock, TX",
  logoImage: "/brand/LuibrandTileIcon.jpg",
  openGraphImage: "/portfolio/20251114_154302.jpg",
  phone: "(512) 843-9364",
  phoneHref: "tel:+15128439364",
  email: "luibrandtilecompany@gmail.com",
  heroEyebrow: "Austin-area tile installation",
  heroHeadline: "Luibrand Tile",
  heroSupporting: "Precise tile installation across the greater Austin area.",
  heroBody:
    "Floors, showers, backsplashes, fireplace surrounds, repairs, and preparation work handled with clean layout and lasting detail.",
  address: {
    short: "Round Rock, TX",
    line1: "Round Rock",
    line2: "Austin-area service",
    city: "Round Rock",
    region: "TX",
    country: "US"
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/Austin+Round+Rock+Texas",
  appleMapsUrl: "https://maps.apple.com/?q=Austin%20Round%20Rock%20Texas",
  serviceArea:
    "Based in Round Rock and serving Austin, Georgetown, Cedar Park, Leander, Pflugerville, Hutto, Lakeway, Liberty Hill, Jarrell, Salado, and nearby communities.",
  serviceAreas,
  social: [],
  navItems: [
    { label: "Portfolio", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Area", href: "/#service-area" },
    { label: "Contact", href: "/contact" }
  ]
} as const;

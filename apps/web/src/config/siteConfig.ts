export type SiteConfig = {
  readonly siteName: string;
  readonly legalName: string;
  readonly description: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly serviceArea: string;
};

export const siteConfig: SiteConfig = {
  siteName: "SME Website Starter",
  legalName: "SME Website Starter",
  description:
    "A clean foundation for fast, modern business websites built on Next.js.",
  url: "https://example.com",
  email: "hello@example.com",
  phone: "+1 (555) 010-0000",
  serviceArea: "Local service area"
};

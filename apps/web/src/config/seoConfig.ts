import { siteConfig } from "./siteConfig";

export type SeoConfig = {
  readonly defaultTitle: string;
  readonly titleTemplate: string;
  readonly defaultDescription: string;
  readonly defaultOpenGraphType: "website";
  readonly twitterCard: "summary_large_image";
  readonly locale: string;
};

export const seoConfig: SeoConfig = {
  defaultTitle: siteConfig.siteName,
  titleTemplate: `%s · ${siteConfig.siteName}`,
  defaultDescription: siteConfig.description,
  defaultOpenGraphType: "website",
  twitterCard: "summary_large_image",
  locale: "en_US"
};

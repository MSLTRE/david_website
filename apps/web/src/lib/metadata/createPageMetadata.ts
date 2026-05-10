import type { Metadata } from "next";
import { seoConfig } from "@/config/seoConfig";
import { siteConfig } from "@/config/siteConfig";

export type PageMetadataInput = {
  readonly title?: string;
  readonly description?: string;
  readonly path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/"
}: PageMetadataInput = {}): Metadata {
  const pageTitle = title
    ? seoConfig.titleTemplate.replace("%s", title)
    : seoConfig.defaultTitle;
  const pageDescription = description ?? seoConfig.defaultDescription;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      type: seoConfig.defaultOpenGraphType,
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.siteName,
      locale: seoConfig.locale
    },
    twitter: {
      card: seoConfig.twitterCard,
      title: pageTitle,
      description: pageDescription
    }
  };
}

import type { Metadata } from "next";
import { seoConfig } from "@/config/seoConfig";
import { siteConfig } from "@/config/siteConfig";

export type PageMetadataInput = {
  readonly title?: string;
  readonly description?: string;
  readonly path?: string;
};

/**
 * Build per-page Metadata. The root layout sets `title.template`, so we return
 * the raw page title as a string and let Next.js apply the template once. For
 * the home page (no `title` provided), we omit `title` so the layout's
 * `title.default` is used instead. The full branded title is composed locally
 * for OpenGraph/Twitter, since those fields don't inherit the title template.
 */
export function createPageMetadata({
  title,
  description,
  path = "/"
}: PageMetadataInput = {}): Metadata {
  const fullTitle = title
    ? seoConfig.titleTemplate.replace("%s", title)
    : seoConfig.defaultTitle;
  const pageDescription = description ?? seoConfig.defaultDescription;
  const url = new URL(path, siteConfig.url).toString();

  return {
    ...(title ? { title } : {}),
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      type: seoConfig.defaultOpenGraphType,
      title: fullTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.siteName,
      locale: seoConfig.locale
    },
    twitter: {
      card: seoConfig.twitterCard,
      title: fullTitle,
      description: pageDescription
    }
  };
}

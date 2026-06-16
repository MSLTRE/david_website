import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return STATIC_ROUTES.map(({ changeFrequency, path, priority }) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency,
    priority
  }));
}

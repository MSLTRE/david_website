import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

const STATIC_ROUTES = ["/", "/services", "/work", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return STATIC_ROUTES.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified
  }));
}

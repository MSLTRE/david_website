import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { seoConfig } from "@/config/seoConfig";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate
  },
  description: seoConfig.defaultDescription,
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    locale: seoConfig.locale,
    url: siteConfig.url,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription
  },
  twitter: {
    card: seoConfig.twitterCard,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/siteConfig";
import { services } from "@/content/services";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"]
});

const ogImageUrl = new URL(siteConfig.openGraphImage, siteConfig.url).toString();
const logoImageUrl = new URL(siteConfig.logoImage, siteConfig.url).toString();
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
const verification: Metadata["verification"] = {
  ...(googleVerification ? { google: googleVerification } : {}),
  ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {})
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.siteName}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url
  },
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.owner }],
  ...(Object.keys(verification).length ? { verification } : {}),
  icons: {
    icon: [{ url: "/brand/luibrand-tile-mark.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    title: siteConfig.seoTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: ogImageUrl,
        width: 4000,
        height: 3000,
        alt: "Luibrand Tile marble-look foyer floor project"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.description,
    images: [ogImageUrl]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.siteName,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#business`
        }
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.siteName,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: logoImageUrl,
        image: ogImageUrl,
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Round Rock",
          addressRegion: "TX",
          addressCountry: "US"
        },
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "City",
          name: `${area.label}, Texas`
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "customer service",
          areaServed: "Central Texas",
          availableLanguage: "English"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tile installation services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              areaServed: "Greater Austin, Texas"
            }
          }))
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

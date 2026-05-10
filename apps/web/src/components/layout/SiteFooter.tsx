import Link from "next/link";
import { footerNavigation } from "@/config/navigationConfig";
import { siteConfig } from "@/config/siteConfig";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3 max-w-md">
            <span className="font-display text-lg font-semibold tracking-tight">
              {siteConfig.siteName}
            </span>
            <p className="text-muted-foreground text-sm">
              {siteConfig.description}
            </p>
            <p className="text-muted-foreground text-sm">
              Serving {siteConfig.serviceArea.toLowerCase()}.
            </p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Site
            </h2>
            <ul className="flex flex-col gap-2">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-foreground/70 inline-flex min-h-11 items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Contact
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-h-11 items-center"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex min-h-11 items-center"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

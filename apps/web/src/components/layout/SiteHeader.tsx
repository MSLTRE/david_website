import Link from "next/link";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-base md:text-lg font-semibold tracking-tight"
        >
          {siteConfig.siteName}
        </Link>
        <div className="flex items-center gap-3">
          <DesktopNavigation />
          <Button
            href="/contact"
            size="sm"
            shape="pill"
            className="hidden md:inline-flex"
          >
            Request a quote
          </Button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

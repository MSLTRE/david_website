import { BrandMark } from "@/components/layout/BrandMark";
import { siteConfig } from "@/config/siteConfig";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-7 px-5 py-10 md:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <BrandMark />
          <div className="flex flex-col gap-2 text-sm font-medium text-foreground/78 md:items-end">
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-border pt-5 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>Round Rock based tile installation across Austin-area homes.</p>
          <p>© 2026 Luibrand Tile Company.</p>
        </div>
      </div>
    </footer>
  );
}

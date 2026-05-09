import Link from "next/link";
import { primaryNavigation } from "@/config/navigationConfig";
import { siteConfig } from "@/config/siteConfig";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand">
          {siteConfig.siteName}
        </Link>
        <nav aria-label="Primary">
          <ul className="site-header__nav">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

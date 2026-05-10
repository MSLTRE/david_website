import { siteConfig } from "@/config/siteConfig";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          &copy; {year} {siteConfig.legalName}. All rights reserved.
        </p>
        <p className="site-footer__contact">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span aria-hidden="true"> · </span>
          <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>
            {siteConfig.phone}
          </a>
        </p>
      </div>
    </footer>
  );
}

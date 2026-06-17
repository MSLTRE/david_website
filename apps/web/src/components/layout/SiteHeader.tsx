"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/layout/BrandMark";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-3 px-4 md:px-8">
        <Link href="/" aria-label="Luibrand Tile home">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/72 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              className="transition hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Button
            aria-label={`Call Luibrand Tile at ${siteConfig.phone}`}
            className="min-h-11 px-3 sm:px-4"
            href={siteConfig.phoneHref}
            variant="secondary"
          >
            <Phone data-icon="inline-start" />
            <span className="hidden min-[520px]:inline">{siteConfig.phone}</span>
          </Button>
          <Button
            className="hidden min-h-11 px-4 sm:inline-flex"
            href="/contact#quote"
            variant="accent"
          >
            Get a quote
          </Button>

          <button
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-[0_8px_22px_rgb(31_25_18/0.06)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 py-5 shadow-[0_24px_60px_rgb(31_25_18/0.12)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                className="rounded-lg px-3 py-3 text-base font-semibold hover:bg-secondary"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Button href={siteConfig.phoneHref} variant="secondary">
                Call {siteConfig.phone}
              </Button>
              <Button href="/contact#quote" variant="accent">
                Get a quote
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

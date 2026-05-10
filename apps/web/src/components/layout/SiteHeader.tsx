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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-5 px-5 md:px-8">
        <Link href="/" aria-label="Luibrand Tile home">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-foreground/75 lg:flex">
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

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={siteConfig.phoneHref} variant="secondary">
            <Phone data-icon="inline-start" />
            {siteConfig.phone}
          </Button>
          <Button href="/contact#quote">Request a quote</Button>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-white text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white px-5 py-5 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                className="rounded-lg px-3 py-3 text-base font-extrabold hover:bg-secondary"
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
              <Button href="/contact#quote">Request a quote</Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

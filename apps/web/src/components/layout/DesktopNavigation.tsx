import Link from "next/link";
import { primaryNavigation } from "@/config/navigationConfig";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm font-medium">
        {primaryNavigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex items-center min-h-11 px-2 text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

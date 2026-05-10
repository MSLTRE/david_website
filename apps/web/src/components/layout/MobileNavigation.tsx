import Link from "next/link";
import { primaryNavigation } from "@/config/navigationConfig";

export function MobileNavigation() {
  return (
    <details className="md:hidden group relative">
      <summary
        aria-label="Toggle navigation menu"
        className="list-none cursor-pointer inline-flex items-center justify-center h-11 w-11 rounded-md border border-border bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span aria-hidden="true" className="block group-open:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </span>
        <span aria-hidden="true" className="hidden group-open:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </span>
      </summary>
      <nav
        aria-label="Mobile primary"
        className="absolute right-0 top-[calc(100%+0.5rem)] w-screen max-w-xs rounded-xl border border-border bg-background shadow-lg p-2"
      >
        <ul className="flex flex-col">
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted min-h-11"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}

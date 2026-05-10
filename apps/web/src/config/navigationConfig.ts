export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" }
];

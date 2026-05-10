export type ThemeConfig = {
  readonly maxContentWidth: string;
  readonly sectionPadding: {
    readonly mobile: string;
    readonly tablet: string;
    readonly desktop: string;
  };
  readonly brandAccentLabel: string;
};

export const themeConfig: ThemeConfig = {
  maxContentWidth: "max-w-6xl",
  sectionPadding: {
    mobile: "py-16",
    tablet: "md:py-20",
    desktop: "lg:py-28"
  },
  brandAccentLabel: "Bronze"
};

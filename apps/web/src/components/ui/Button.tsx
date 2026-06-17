import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "accent";

type ButtonProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly external?: boolean;
  readonly href?: string;
  readonly shape?: "rounded" | "pill";
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: ButtonVariant;
  readonly type?: "button" | "submit";
  readonly disabled?: boolean;
  readonly onClick?: () => void;
  readonly style?: React.CSSProperties;
  readonly "aria-label"?: string;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_32px_rgb(31_25_18/0.18)] hover:bg-primary/90",
  secondary:
    "border border-border bg-card text-foreground hover:border-accent/50 hover:bg-secondary",
  ghost: "text-foreground hover:bg-secondary",
  light:
    "bg-card text-foreground shadow-[0_12px_30px_rgb(0_0_0/0.16)] hover:bg-secondary",
  accent: "bg-accent text-accent-foreground shadow-[0_14px_34px_rgb(178_106_57/0.24)] hover:bg-accent-hover"
};

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-6 text-sm",
  lg: "min-h-14 px-8 text-base"
};

const shapes = {
  rounded: "rounded-lg",
  pill: "rounded-full"
};

export function Button({
  children,
  className,
  external,
  href,
  shape = "pill",
  size = "md",
  variant = "primary",
  type = "button",
  disabled,
  onClick,
  style,
  "aria-label": ariaLabel
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold tracking-normal transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    sizes[size],
    shapes[shape],
    variants[variant],
    className
  );

  if (href) {
    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");
    if (isExternal) {
      return (
        <a aria-label={ariaLabel} className={classes} href={href} rel={external ? "noreferrer" : undefined} style={style} target={external ? "_blank" : undefined}>
          {children}
        </a>
      );
    }

    return (
      <Link aria-label={ariaLabel} className={classes} href={href} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} disabled={disabled} onClick={onClick} style={style} type={type}>
      {children}
    </button>
  );
}

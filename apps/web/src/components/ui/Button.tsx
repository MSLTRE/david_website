import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly external?: boolean;
  readonly href?: string;
  readonly shape?: "rounded" | "pill";
  readonly size?: "sm" | "md" | "lg";
  readonly variant?: "primary" | "secondary" | "ghost" | "light" | "accent";
  readonly type?: "button" | "submit";
  readonly disabled?: boolean;
  readonly onClick?: () => void;
};

const variants = {
  primary:
    "bg-[#17120e] text-white shadow-[0_14px_32px_rgba(27,22,18,0.2)] hover:bg-[#2a2119]",
  secondary:
    "border border-[#ded8cf] bg-white text-[#17120e] hover:border-[#b56c35] hover:bg-[#f3eee7]",
  ghost: "text-[#17120e] hover:bg-[#f3eee7]",
  light:
    "bg-white text-[#17120e] shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:bg-[#f3eee7]",
  accent: "bg-[#b56c35] text-white hover:bg-[#9c5928]"
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
  onClick
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-extrabold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
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
        <a
          className={classes}
          href={href}
          rel={external ? "noreferrer" : undefined}
          target={external ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

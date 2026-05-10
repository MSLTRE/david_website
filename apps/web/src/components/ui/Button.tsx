import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/95"
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-md",
        md: "h-12 px-5 text-[0.95rem] rounded-md",
        lg: "h-14 px-7 text-base rounded-md"
      },
      shape: {
        rounded: "",
        pill: "!rounded-pill"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "rounded"
    }
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonStyles>;

type CommonStyleProps = ButtonVariantProps & {
  className?: string;
  children: ReactNode;
};

export type ButtonAsButtonProps = CommonStyleProps & {
  href?: undefined;
  external?: never;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonAsLinkProps = CommonStyleProps & {
  href: string;
  external?: boolean;
  type?: never;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  const classes = cn(
    buttonStyles({
      variant: props.variant,
      size: props.size,
      shape: props.shape
    }),
    props.className
  );

  if (typeof props.href === "string") {
    const { variant, size, shape, className, children, href, external, ...linkRest } = props;
    void variant;
    void size;
    void shape;
    void className;
    if (external) {
      return (
        <a {...linkRest} href={href} className={classes} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link {...linkRest} href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant, size, shape, className, children, type = "button", ...buttonRest } = props;
  void variant;
  void size;
  void shape;
  void className;
  return (
    <button {...buttonRest} type={type} className={classes}>
      {children}
    </button>
  );
}

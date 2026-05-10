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

type ButtonAsButtonProps = {
  href?: undefined;
  external?: never;
} & ComponentPropsWithoutRef<"button"> &
  ButtonVariantProps & {
    children: ReactNode;
  };

type ButtonAsLinkProps = {
  href: string;
  external?: boolean;
  type?: never;
} & Omit<ComponentPropsWithoutRef<"a">, "href"> &
  ButtonVariantProps & {
    children: ReactNode;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  const { className, variant, size, shape, children } = props;
  const classes = cn(buttonStyles({ variant, size, shape }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a
          {...rest}
          href={href}
          className={classes}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link {...rest} href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButtonProps;
  return (
    <button {...rest} type={type} className={classes}>
      {children}
    </button>
  );
}

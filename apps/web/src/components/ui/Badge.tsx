import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

const badgeStyles = cva(
  "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-pill border",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-secondary-foreground border-border",
        outline: "bg-transparent text-foreground border-border",
        accent:
          "bg-accent/10 text-accent border-accent/20 normal-case tracking-normal text-[0.72rem]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

type BadgeProps = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeStyles>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span {...props} className={cn(badgeStyles({ variant }), className)} />
  );
}

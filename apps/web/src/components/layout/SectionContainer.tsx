import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionContainerProps = {
  readonly id?: string;
  readonly as?: ElementType;
  readonly children: ReactNode;
  readonly className?: string;
  readonly tone?: "default" | "muted" | "inverted";
  readonly ariaLabelledBy?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "className">;

export function SectionContainer({
  id,
  as: Tag = "section",
  children,
  className,
  tone = "default",
  ariaLabelledBy
}: SectionContainerProps) {
  const toneClasses =
    tone === "muted"
      ? "bg-muted text-foreground"
      : tone === "inverted"
        ? "bg-primary text-primary-foreground"
        : "bg-background text-foreground";

  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("py-16 md:py-20 lg:py-28", toneClasses, className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </Tag>
  );
}

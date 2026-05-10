import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { proofPoints } from "@/content/proofPoints";

export function BentoProofSection() {
  return (
    <SectionContainer ariaLabelledBy="bento-heading">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-14">
        <Badge>By the numbers</Badge>
        <h2
          id="bento-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          Two decades of getting it right.
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:auto-rows-fr">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[14rem]">
          <Badge variant="accent">Workmanship</Badge>
          <div>
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">
              Built on prep, finished by hand.
            </p>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Every job starts with the substrate. Self-leveling, crack
              isolation, waterproofing — handled before the first tile is set.
            </p>
          </div>
        </div>
        {proofPoints.slice(0, 4).map((point) => (
          <div
            key={point.id}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col gap-2"
          >
            <span className="text-2xl md:text-3xl font-semibold tracking-tight">
              {point.value}
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {point.label}
            </span>
            <p className="text-sm text-foreground/80 mt-1">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

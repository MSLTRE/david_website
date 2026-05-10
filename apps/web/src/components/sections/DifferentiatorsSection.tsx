import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { differentiators } from "@/content/proofPoints";

export function DifferentiatorsSection() {
  return (
    <SectionContainer ariaLabelledBy="diff-heading" tone="muted">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-14">
        <Badge variant="outline">Why us</Badge>
        <h2
          id="diff-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          The difference is everything you don&apos;t see.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Tile is finish work. The longevity of finish work is decided by what
          happens before the tile goes down.
        </p>
      </div>
      <ul className="grid gap-6 md:grid-cols-2">
        {differentiators.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}

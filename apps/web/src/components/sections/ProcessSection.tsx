import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { processSteps } from "@/content/processSteps";

export function ProcessSection() {
  return (
    <SectionContainer ariaLabelledBy="process-heading" tone="muted">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-14">
        <Badge variant="outline">Process</Badge>
        <h2
          id="process-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          Six steps from first call to final walkthrough.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Predictable, organized, and quiet enough that you can keep living in
          the house.
        </p>
      </div>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <li
            key={step.number}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {step.number}
            </span>
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              {step.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}

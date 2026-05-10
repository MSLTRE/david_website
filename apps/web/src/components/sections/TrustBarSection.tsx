import { proofPoints } from "@/content/proofPoints";

export function TrustBarSection() {
  return (
    <section
      aria-label="Trust indicators"
      className="border-y border-border bg-muted"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8 py-8 md:py-10">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {proofPoints.map((point) => (
            <li key={point.id} className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-semibold tracking-tight">
                {point.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {point.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

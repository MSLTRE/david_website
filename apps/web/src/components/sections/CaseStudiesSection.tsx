import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/content/caseStudies";

type CaseStudiesSectionProps = {
  readonly limit?: number;
  readonly showCta?: boolean;
};

export function CaseStudiesSection({
  limit,
  showCta = true
}: CaseStudiesSectionProps = {}) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <SectionContainer ariaLabelledBy="case-studies-heading">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-14">
        <Badge>Recent work</Badge>
        <h2
          id="case-studies-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          A few projects from the last year.
        </h2>
      </div>
      <ul className="grid gap-6 md:grid-cols-2">
        {items.map((study) => (
          <li
            key={study.slug}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col gap-4"
          >
            <div
              aria-hidden="true"
              className="aspect-[16/9] w-full rounded-lg bg-muted border border-border"
            />
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              {study.title}
            </h3>
            <p className="text-muted-foreground">{study.summary}</p>
            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">Outcome: </span>
              {study.outcome}
            </p>
          </li>
        ))}
      </ul>
      {showCta ? (
        <div className="mt-10">
          <Button href="/work" variant="secondary" shape="pill">
            See all work
          </Button>
        </div>
      ) : null}
    </SectionContainer>
  );
}

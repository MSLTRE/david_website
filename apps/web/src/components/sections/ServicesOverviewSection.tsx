import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";

type ServicesOverviewSectionProps = {
  readonly showCta?: boolean;
  readonly heading?: string;
  readonly eyebrow?: string;
  readonly description?: string;
};

export function ServicesOverviewSection({
  showCta = true,
  heading = "Tile work for the whole house, done one job at a time.",
  eyebrow = "Services",
  description = "If something can be tiled, we've almost certainly done it. From simple updates to custom projects, we take pride in delivering clean, professional work that's built to last."
}: ServicesOverviewSectionProps = {}) {
  return (
    <SectionContainer ariaLabelledBy="services-heading">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2
          id="services-heading"
          className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
        >
          {heading}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          {description}
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => (
          <li
            key={service.slug}
            className="flex min-h-24 items-end rounded-lg border border-border bg-background p-5 shadow-[0_12px_32px_rgba(30,24,18,0.04)]"
          >
            <h3 className="font-display text-lg md:text-xl leading-tight tracking-tight">
              {service.name}
            </h3>
          </li>
        ))}
      </ul>

      {showCta ? (
        <div className="mt-10">
          <Button href="/services" variant="secondary" shape="pill">
            See all services
          </Button>
        </div>
      ) : null}
    </SectionContainer>
  );
}

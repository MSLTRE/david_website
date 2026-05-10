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
  description = "Floors, showers, backsplashes, fireplace surrounds, repair, and substrate prep — every job built on the same standards."
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

      <ul className="grid gap-px bg-border rounded-2xl overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.slug}
            className="flex flex-col gap-4 bg-background p-6 md:p-7"
          >
            <h3 className="font-display text-xl md:text-2xl tracking-tight">
              {service.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {service.summary}
            </p>
            <ul className="mt-auto flex flex-col gap-1.5 pt-2 text-sm text-foreground/75">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    ·
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
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

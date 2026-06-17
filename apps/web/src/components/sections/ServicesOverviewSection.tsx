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
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2
          id="services-heading"
          className="font-display text-4xl font-medium leading-[1.06] tracking-normal md:text-6xl"
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
            className="flex min-h-44 flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-[0_18px_46px_rgb(31_25_18/0.05)]"
          >
            <h3 className="text-lg font-semibold leading-tight tracking-normal">
              {service.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {service.description}
            </p>
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

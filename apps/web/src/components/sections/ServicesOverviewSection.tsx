import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/Card";
import { services } from "@/content/services";

export function ServicesOverviewSection() {
  return (
    <SectionContainer ariaLabelledBy="services-heading">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-14">
        <Badge>Services</Badge>
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          Tile work for the whole house, done one job at a time.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Bathrooms, kitchens, floors, and repairs. We focus on tile so we can
          do it right — from substrate prep through final grout.
        </p>
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.slug}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.summary}</CardDescription>
              </CardHeader>
              <ul className="flex flex-col gap-2 text-sm text-foreground/80 mt-auto">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      ◆
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Button href="/services" variant="secondary" shape="pill">
          See all services
        </Button>
      </div>
    </SectionContainer>
  );
}

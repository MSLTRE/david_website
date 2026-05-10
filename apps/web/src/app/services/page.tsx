import { SectionContainer } from "@/components/layout/SectionContainer";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/Card";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Bathroom, kitchen, and floor tile installation, plus repairs and substrate prep, by an experienced tile-only crew.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <SectionContainer ariaLabelledBy="services-page-heading">
        <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-14">
          <Badge>Services</Badge>
          <h1
            id="services-page-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Tile work, end to end.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            We focus on the work we do best. Every category below is the same
            crew, the same prep standards, and the same finish quality.
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
      </SectionContainer>
      <FinalCallToActionSection />
    </>
  );
}

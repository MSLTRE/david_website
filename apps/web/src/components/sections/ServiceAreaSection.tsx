import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";

export function ServiceAreaSection() {
  return (
    <section
      aria-labelledby="service-area-heading"
      className="bg-background"
      id="service-area"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pt-12 pb-16 md:px-8 md:pt-14 md:pb-20 lg:pt-16 lg:pb-28">
        <ServiceAreaOverview headingId="service-area-heading" />
      </div>
    </section>
  );
}

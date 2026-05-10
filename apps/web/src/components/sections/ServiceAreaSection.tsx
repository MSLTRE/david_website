import { ServiceAreaOverview } from "@/components/sections/ServiceAreaOverview";

export function ServiceAreaSection() {
  return (
    <section
      aria-labelledby="service-area-heading"
      className="bg-white"
      id="service-area"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:py-28">
        <ServiceAreaOverview headingId="service-area-heading" />
      </div>
    </section>
  );
}

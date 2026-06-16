import { SectionContainer } from "@/components/layout/SectionContainer";

export function CraftsmanshipSection() {
  return (
    <SectionContainer ariaLabelledBy="craftsmanship-heading">
      <div className="grid gap-8 lg:gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <h2
            id="craftsmanship-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
          >
            Craftsmanship you can stand on.
          </h2>
        </div>

        <div>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Quality tile work starts with proper preparation and attention to
            detail. From the layout of the first tile to the final finishing
            touches, every step matters. At Luibrand Tile, we take pride in
            delivering clean, professional work that&apos;s built to last and made
            to be enjoyed every day.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

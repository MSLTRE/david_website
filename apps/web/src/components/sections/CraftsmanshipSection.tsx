import { SectionContainer } from "@/components/layout/SectionContainer";

const principles = [
  {
    title: "Proper preparation",
    body: "Substrate inspection, leveling, and waterproofing where it matters."
  },
  {
    title: "Precision layout",
    body: "Square, plumb, and balanced. Cuts planned before tile is set."
  },
  {
    title: "Clean finish",
    body: "Tight joints, even grout, and details that hold up over years."
  }
];

export function CraftsmanshipSection() {
  return (
    <SectionContainer ariaLabelledBy="craftsmanship-heading">
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Craftsmanship
          </p>
          <h2
            id="craftsmanship-heading"
            className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
          >
            Quality starts with the right foundation.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            At Luibrand Tile Company, quality starts with the right foundation.
            I was trained under a world-class European tile professional, where
            I learned the importance of precision, proper preparation, and
            lasting craftsmanship. With over two years of hands-on experience,
            I bring a strong attention to detail and a commitment to doing
            every job right—delivering clean, durable, and professional
            results you can trust.
          </p>

          <ul className="grid gap-6 sm:grid-cols-3 pt-2 border-t border-border">
            {principles.map((principle) => (
              <li key={principle.title} className="flex flex-col gap-2 pt-6">
                <span
                  aria-hidden="true"
                  className="block w-8 h-px bg-accent"
                />
                <h3 className="font-display text-xl tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}

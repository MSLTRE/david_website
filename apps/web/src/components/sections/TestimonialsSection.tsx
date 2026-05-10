import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <SectionContainer ariaLabelledBy="testimonials-heading" tone="muted">
      <div className="flex flex-col gap-3 max-w-3xl mb-10 md:mb-14">
        <Badge variant="outline">Word of mouth</Badge>
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          What clients say after the dust settles.
        </h2>
      </div>
      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.id}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col gap-4"
          >
            <p className="text-base md:text-lg leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="text-sm text-muted-foreground mt-auto">
              <span className="font-semibold text-foreground block">
                {testimonial.author}
              </span>
              <span>{testimonial.role}</span>
            </footer>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}

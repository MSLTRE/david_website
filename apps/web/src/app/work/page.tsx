import { SectionContainer } from "@/components/layout/SectionContainer";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { FinalCallToActionSection } from "@/components/sections/FinalCallToActionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Badge } from "@/components/ui/Badge";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Recent tile installation, bathroom remodel, and floor projects with substrate prep, layout, and finish work done by hand.",
  path: "/work"
});

export default function WorkPage() {
  return (
    <>
      <SectionContainer ariaLabelledBy="work-heading">
        <div className="flex flex-col gap-3 max-w-3xl">
          <Badge>Work</Badge>
          <h1
            id="work-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Recent projects.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A selection of bathrooms, kitchens, and floors completed in the
            last year. More projects available on request.
          </p>
        </div>
      </SectionContainer>
      <CaseStudiesSection showCta={false} />
      <TestimonialsSection />
      <FinalCallToActionSection />
    </>
  );
}

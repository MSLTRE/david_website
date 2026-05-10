import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Reach out to plan a tile installation, request an on-site estimate, or ask a question about an upcoming project.",
  path: "/contact"
});

export default function ContactPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`;

  return (
    <SectionContainer ariaLabelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div className="flex flex-col gap-4 max-w-xl">
          <Badge>Contact</Badge>
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Let&apos;s plan your project.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            On-site estimates are free in our service area. Tell us about the
            room and timeline and we&apos;ll be in touch.
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-base">
            <li>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <a className="font-medium" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                Phone
              </span>
              <a className="font-medium" href={phoneHref}>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                Service area
              </span>
              <span className="font-medium">{siteConfig.serviceArea}</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button href={`mailto:${siteConfig.email}`} shape="pill" size="lg">
              Email us
            </Button>
            <Button
              href={phoneHref}
              variant="secondary"
              shape="pill"
              size="lg"
            >
              Call now
            </Button>
          </div>
        </div>
        <aside
          aria-label="Quote request preview"
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Quote request form
          </h2>
          <p className="mt-2 text-muted-foreground">
            A guided quote form is on the way. For now, the fastest way to
            start a project is to email or call.
          </p>
          <ul className="mt-6 flex flex-col gap-4 text-sm text-foreground/80">
            <li className="rounded-md border border-dashed border-border p-3">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Coming soon
              </span>
              <p className="mt-1">
                Project type, room dimensions, tile preferences, and timeline.
              </p>
            </li>
            <li className="rounded-md border border-dashed border-border p-3">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Coming soon
              </span>
              <p className="mt-1">Photo upload for current condition.</p>
            </li>
            <li className="rounded-md border border-dashed border-border p-3">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Coming soon
              </span>
              <p className="mt-1">Same-day acknowledgement on submitted requests.</p>
            </li>
          </ul>
        </aside>
      </div>
    </SectionContainer>
  );
}

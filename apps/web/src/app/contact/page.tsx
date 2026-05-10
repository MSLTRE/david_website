import { ContactForm } from "@/components/forms/ContactForm";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { serviceAreas } from "@/content/serviceAreas";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Request a Tile Quote",
  description:
    "Request a tile quote from Luibrand Tile in Round Rock. Floors, showers, backsplashes, fireplace surrounds, and tile repair across the Austin area.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <SectionContainer ariaLabelledBy="contact-heading">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h1
              id="contact-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            >
              Tell David about your tile project.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Share a few details and David will follow up by phone or email to
              talk through layout, materials, and next steps.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              <ContactCard
                eyebrow="Call or text"
                title={siteConfig.phone}
                href={siteConfig.phoneHref}
                helper="Fastest way to reach David."
              />
              <ContactCard
                eyebrow="Email"
                title={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
                helper="Best for photos and longer notes."
              />
              <ContactCard
                eyebrow="Based in"
                title={siteConfig.address.short}
                helper={`${siteConfig.address.line1}${
                  siteConfig.address.line2 ? `, ${siteConfig.address.line2}` : ""
                }`}
              />
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                href={siteConfig.googleMapsUrl}
                external
                variant="secondary"
                shape="pill"
              >
                Open in Google Maps
              </Button>
              <Button
                href={siteConfig.appleMapsUrl}
                external
                variant="ghost"
                shape="pill"
              >
                Open in Apple Maps
              </Button>
            </div>

            <div className="mt-2 pt-4 border-t border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Service area
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {serviceAreas.map((area) => area.label).join(" · ")}
              </p>
            </div>
          </div>

          <aside
            aria-label="Quote request form"
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <header className="mb-6 flex flex-col gap-1.5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Request a quote
              </p>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight">
                Quote request form
              </h2>
              <p className="text-sm text-muted-foreground">
                Fields marked optional are helpful but not required.
              </p>
            </header>
            <ContactForm />
          </aside>
        </div>
      </SectionContainer>
    </>
  );
}

type ContactCardProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly helper?: string;
  readonly href?: string;
};

function ContactCard({ eyebrow, title, helper, href }: ContactCardProps) {
  const content = (
    <>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </span>
      <span className="font-display text-xl tracking-tight">{title}</span>
      {helper ? (
        <span className="text-sm text-muted-foreground">{helper}</span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="flex flex-col gap-1 rounded-xl border border-border bg-background px-4 py-3 hover:border-foreground/30 transition-colors"
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex flex-col gap-1 rounded-xl border border-border bg-background px-4 py-3">
      {content}
    </li>
  );
}

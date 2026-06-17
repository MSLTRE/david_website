import { ContactForm } from "@/components/forms/ContactForm";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Request a Tile Quote",
  description:
    "Request a tile installation quote from Luibrand Tile for showers, floors, backsplashes, fireplace surrounds, tile repair, and grout repair across Austin and Round Rock.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <SectionContainer ariaLabelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="flex max-w-xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <h1
            className="font-display text-4xl font-medium leading-[1.06] tracking-normal text-foreground md:text-6xl"
            id="contact-heading"
          >
            Tell us about your tile project.
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Share the room, timeline, and a few project details. We&apos;ll
            follow up by phone or email.
          </p>

          <ul className="grid gap-3 text-sm">
            <ContactCard
              eyebrow="Phone"
              href={siteConfig.phoneHref}
              title={siteConfig.phone}
            />
            <ContactCard
              eyebrow="Email"
              href={`mailto:${siteConfig.email}`}
              title={siteConfig.email}
            />
            <ContactCard
              eyebrow="Service area"
              helper="Round Rock base with service across the Austin-area corridor."
              title="Austin, Round Rock, and nearby communities"
            />
          </ul>

          <div className="flex flex-wrap gap-2 pt-1">
            {siteConfig.serviceAreas.slice(0, 7).map((area) => (
              <span
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium"
                key={area.label}
              >
                {area.label}
              </span>
            ))}
          </div>

          <Button className="w-fit" href="/#work" variant="secondary">
            View the portfolio
          </Button>
        </div>

        <aside
          aria-label="Quote request form"
          className="rounded-2xl border border-border bg-card p-5 shadow-[0_24px_70px_rgb(31_25_18/0.08)] md:p-8"
          id="quote"
        >
          <header className="mb-6 grid gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Request a quote
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-normal">
              Quote request form
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              A few details are enough to start the conversation.
            </p>
          </header>
          <ContactForm />
        </aside>
      </div>
    </SectionContainer>
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
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </span>
      <span className="text-lg font-semibold tracking-normal">{title}</span>
      {helper ? (
        <span className="text-sm font-semibold leading-6 text-muted-foreground">
          {helper}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <li>
        <a
          className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4 transition hover:border-accent"
          href={href}
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4">
      {content}
    </li>
  );
}

import { ContactForm } from "@/components/forms/ContactForm";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Request a Free Tile Estimate",
  description: "Contact us for a free estimate on tile work in Austin, Round Rock, and nearby towns.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <SectionContainer ariaLabelledBy="contact-heading" className="py-10 md:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:items-start">
        <div className="flex max-w-xl flex-col gap-5">
          <h1
            className="font-display text-4xl font-medium leading-[1.06] tracking-normal text-foreground md:text-6xl"
            id="contact-heading"
          >
            Request a free estimate
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Tell us what you have in mind and where the job is. We’ll get in touch about an estimate.
          </p>
          <ul className="grid gap-1 text-sm">
            <li><a className="inline-flex min-h-11 items-center gap-2 hover:underline" href={siteConfig.phoneHref}><span className="font-semibold">Phone:</span> {siteConfig.phone}</a></li>
            <li><a className="inline-flex min-h-11 items-center gap-2 break-all hover:underline" href={`mailto:${siteConfig.email}`}><span className="font-semibold">Email:</span> {siteConfig.email}</a></li>
          </ul>
          <p className="text-sm leading-6 text-muted-foreground">We’re based in Round Rock and serve Austin and nearby towns.</p>
        </div>
        <div
          className="rounded-2xl border border-border bg-card p-5 shadow-[0_24px_70px_rgb(31_25_18/0.08)] md:p-8"
          id="quote"
        >
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
}

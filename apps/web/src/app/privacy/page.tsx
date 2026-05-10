import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: `Privacy notice for ${siteConfig.siteName}.`,
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <SectionContainer ariaLabelledBy="privacy-heading">
      <article className="mx-auto max-w-3xl flex flex-col gap-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Privacy
        </p>
        <h1
          id="privacy-heading"
          className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight"
        >
          Privacy notice
        </h1>
        <p className="text-muted-foreground">
          {siteConfig.siteName} respects your privacy. This page explains what
          information is collected through this website and how it is used.
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">
            What we collect
          </h2>
          <p>
            When you use the contact form, email, or call, we receive the
            contact information and message you provide. The website itself
            does not set marketing or analytics cookies and does not collect
            personal information beyond standard server logs needed to deliver
            the site.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">How we use it</h2>
          <p>
            Information you send is used only to respond to your inquiry,
            schedule visits, and complete projects. It is not sold or shared
            with third parties for marketing.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">Cookies</h2>
          <p>
            This website does not currently set marketing or analytics cookies.
            If that ever changes, this notice will be updated.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">Contact</h2>
          <p>
            Questions about this notice can be sent to{" "}
            <a className="underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </article>
    </SectionContainer>
  );
}

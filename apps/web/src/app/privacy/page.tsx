import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: `Placeholder privacy notice for ${siteConfig.siteName}.`,
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <SectionContainer ariaLabelledBy="privacy-heading">
      <article className="mx-auto max-w-3xl flex flex-col gap-6">
        <Badge>Privacy</Badge>
        <h1
          id="privacy-heading"
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Privacy notice
        </h1>
        <p className="text-muted-foreground">
          This is a placeholder privacy notice for {siteConfig.siteName}. It
          will be replaced with a complete privacy policy before launch.
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            What we collect
          </h2>
          <p>
            When you contact us by email or phone, we receive the contact
            information you provide along with the message itself. We do not
            collect personal information through this website beyond standard
            server logs.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            How we use it
          </h2>
          <p>
            We use the information you send us only to respond to your inquiry,
            schedule estimates, and complete projects. We do not sell or share
            personal information with third parties for marketing purposes.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Cookies</h2>
          <p>
            This website does not currently set marketing or analytics cookies.
            If that changes, this notice will be updated and a banner will be
            shown.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
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

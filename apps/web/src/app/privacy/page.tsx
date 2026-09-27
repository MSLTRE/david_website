import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: "How Luibrand Tile uses information received through this website.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <SectionContainer ariaLabelledBy="privacy-heading" className="py-12 md:py-16 lg:py-20">
      <article className="mx-auto flex max-w-3xl flex-col gap-6 leading-7">
        <h1 id="privacy-heading" className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
          Privacy notice
        </h1>
        <p className="text-muted-foreground">
          This notice explains how Luibrand Tile uses information received through this website.
        </p>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">What you send us</h2>
          <p>When you contact us by form, phone, or email, we receive the contact details and project information you provide.</p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">How we use it</h2>
          <p>We use this information to respond to inquiries, arrange visits, and carry out projects. We do not sell your information or share it with third parties for marketing.</p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">Website services</h2>
          <p>
            <a className="underline" href="https://www.cloudflare.com/privacypolicy/">Cloudflare</a> hosts this website and provides usage and performance statistics. Form submissions pass through Cloudflare and <a className="underline" href="https://resend.com/legal/privacy-policy">Resend</a> to our Gmail inbox. The embedded ServiceAreaMaps map loads map tiles from OpenStreetMap and supporting files from UNPKG. These providers receive technical information, such as your IP address, when your browser connects to their services.
          </p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">Contact</h2>
          <p>Questions about this notice? Email <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        </section>
      </article>
    </SectionContainer>
  );
}

import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/siteConfig";
import { createPageMetadata } from "@/lib/metadata/createPageMetadata";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: "How we use the information you share with Luibrand Tile.",
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
          Here’s how we use the information you share with us.
        </p>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">What you send us</h2>
          <p>If you fill out a form, call, or email us, we receive the contact details and job information you share.</p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">How we use it</h2>
          <p>We use it to answer questions, plan visits, and work on your project. We don’t sell your information or share it with anyone else for marketing.</p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-2xl tracking-tight">Services this website uses</h2>
          <p>
            <a className="underline" href="https://www.cloudflare.com/privacypolicy/">Cloudflare</a> hosts this website and helps us see how it’s used and how well it works. Messages from the forms go through Cloudflare and <a className="underline" href="https://resend.com/legal/privacy-policy">Resend</a> to our Gmail inbox.
          </p>
          <p>
            The map uses ServiceAreaMaps, OpenStreetMap, and files from UNPKG. These services receive technical details, such as your IP address, when your browser connects to them.
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

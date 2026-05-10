import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { faqs } from "@/content/faqs";

export function FrequentlyAskedQuestionsSection() {
  return (
    <SectionContainer ariaLabelledBy="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="flex flex-col gap-3 max-w-md">
          <Badge>FAQ</Badge>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            Quick answers to common questions.
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t see your question? Get in touch and we&apos;ll answer it
            directly.
          </p>
        </div>
        <ul className="flex flex-col">
          {faqs.map((faq) => (
            <li key={faq.id} className="border-b border-border last:border-b-0">
              <details className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 text-left text-lg font-semibold tracking-tight focus-visible:outline-none">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-2xl leading-none transition-transform group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground">{faq.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";
import { PageHero, Section, CTABand } from "@/components/Bits";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Abbey Electrical Services Hull" },
      {
        name: "description",
        content:
          "Common questions about Abbey Electrical Services: NICEIC approval, free quotes, areas covered, emergency call-outs and certification.",
      },
      { property: "og:title", content: "FAQs | Abbey Electrical Services Hull" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently asked questions" />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-xl border border-border bg-card shadow-sm">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-ink">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-secondary transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
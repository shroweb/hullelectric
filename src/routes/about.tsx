import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHero, Section, SectionHeading, CTABand } from "@/components/Bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Abbey Electrical Services Hull" },
      {
        name: "description",
        content:
          "Abbey Electrical Services has served Hull and East Yorkshire since 2007. NICEIC approved electricians for domestic, commercial and industrial work.",
      },
      { property: "og:title", content: "About | Abbey Electrical Services Hull" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  "Free written quotes before any work starts",
  "Clean, tidy work and we leave on time",
  "Honest advice, even when the fix is simple",
  "One team for domestic, commercial and industrial",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Abbey Electrical Services"
        intro="Established in 2007, we are electricians and electrical contractors serving Hull and the East Riding of Yorkshire."
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading title="Local electricians since 2007" />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We work across the commercial, domestic and industrial sectors in Hull and East Yorkshire.
                With over 25 years of experience, there are few electrical tasks we cannot take on.
              </p>
              <p>
                We carry out work large and small, from replacing a light switch to a full new-build design
                and installation. Every quote is free of charge, and we set out a clear price before we start.
              </p>
              <p>
                We pride ourselves on customer satisfaction and our ability to deliver on our promises.
                As a NICEIC approved contractor, all work meets current wiring regulations and comes with the
                right certification.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-3 py-1.5 text-sm font-semibold text-secondary">
              <ShieldCheck className="h-4 w-4" /> NICEIC Approved Contractor
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold text-ink">How we work</h3>
            <ul className="mt-4 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section dark>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "2007", label: "Established" },
            { value: "1000+", label: "Happy Customers" },
            { value: "5.0", label: "Star Rated" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
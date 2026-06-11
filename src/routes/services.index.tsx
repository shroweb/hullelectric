import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { services, serviceCategories, company } from "@/lib/site-data";
import { PageHero, Section, ServiceCard, CTABand } from "@/components/Bits";
import { ButtonAnchor } from "@/components/Button";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Hull | Abbey Electrical Services" },
      {
        name: "description",
        content:
          "Domestic, commercial and industrial electrical services in Hull and East Yorkshire. Fuse boards, rewires, testing, EV chargers and more. Call 01482 440210.",
      },
      { property: "og:title", content: "Electrical Services in Hull | Abbey Electrical Services" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical services in Hull & East Yorkshire"
        intro="From small domestic jobs to large commercial contracts, our NICEIC electricians cover it. Can't see what you need? Call us."
      />
      {serviceCategories.map((cat) => (
        <Section key={cat}>
          <h2 className="mb-8 font-display text-2xl font-bold text-ink sm:text-3xl">{cat}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.category === cat)
              .map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
          </div>
        </Section>
      ))}
      <section className="bg-slate-surface text-background">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-lg font-semibold">
            Emergency call-out service across Hull and East Yorkshire.
          </p>
          <ButtonAnchor href={company.phoneHref}>
            <Phone className="h-4 w-4" /> {company.phone}
          </ButtonAnchor>
        </div>
      </section>
      <CTABand />
    </>
  );
}
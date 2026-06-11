import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { areas, company, images } from "@/lib/site-data";
import { PageHero, Section, CTABand } from "@/components/Bits";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas We Cover | Abbey Electrical Services Hull" },
      {
        name: "description",
        content:
          "Electricians covering Hull, Beverley, Cottingham, Hessle, Bridlington, Driffield and across East Yorkshire. Call 01482 440210.",
      },
      { property: "og:title", content: "Areas We Cover | Abbey Electrical Services Hull" },
      { property: "og:url", content: "/areas" },
    ],
    links: [{ rel: "canonical", href: "/areas" }],
  }),
  component: Areas,
});

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Areas Covered"
        title="Areas we cover"
        intro="Based in Hull, we work within roughly a 20-mile radius across East Yorkshire and the surrounding region."
      />
      <Section>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <div
              key={a}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium text-ink">{a}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          Not sure if we cover your area? Call us on{" "}
          <a href={company.phoneHref} className="font-semibold text-secondary">
            {company.phone}
          </a>
          .
        </p>
      </Section>
      <Section dark className="!py-0">
        <img
          src={images.humber}
          alt="The Humber Bridge near Hull in East Yorkshire"
          loading="lazy"
          width={1600}
          height={900}
          className="my-12 w-full rounded-xl object-cover"
        />
      </Section>
      <CTABand />
    </>
  );
}
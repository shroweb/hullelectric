import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { company } from "@/lib/site-data";
import { PageHero, Section } from "@/components/Bits";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Abbey Electrical Services Hull" },
      {
        name: "description",
        content:
          "Contact Abbey Electrical Services in Hull. Call 01482 440210, WhatsApp us or request a free quote online. Covering Hull and East Yorkshire.",
      },
      { property: "og:title", content: "Contact | Abbey Electrical Services Hull" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Call, WhatsApp or request a free quote. We are here to help with all your electrical needs."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Contact details</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Telephone</p>
                  <a href={company.phoneHref} className="text-secondary">{company.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a href={company.emailHref} className="break-all text-secondary">{company.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Area</p>
                  <p className="text-muted-foreground">{company.area}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Opening hours</p>
                  <p className="text-muted-foreground">{company.hours}</p>
                  <p className="text-muted-foreground">Sat to Sun: Closed (emergency call-outs available)</p>
                </div>
              </li>
            </ul>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-trust px-5 py-3 text-sm font-semibold text-trust transition-colors hover:bg-trust hover:text-background"
            >
              <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
            </a>
          </div>
          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-ink">Request a callback</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
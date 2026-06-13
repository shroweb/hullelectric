import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { company, services, areas } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-background/80">
      {/* primary accent rule */}
      <div className="h-1 bg-[image:var(--gradient-primary)]" />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <img
            src="/logo.webp"
            alt="Abbey Electrical Services"
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed">
            NICEIC approved electricians serving Hull and the East Riding since {company.established}.
          </p>
          <span className="mt-4 inline-flex items-center rounded-md border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
            NICEIC Approved
          </span>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-background">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-background">
            Areas Covered
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-background">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={company.phoneHref} className="hover:text-primary">{company.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={company.emailHref} className="break-all hover:text-primary">{company.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {company.area}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> {company.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-5 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>&copy; {new Date().getFullYear()} {company.legal} All rights reserved.</p>
          <p>Web design in Hull by <a href="https://swift7.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-background/80 underline underline-offset-2">Swift7</a></p>
        </div>
      </div>
    </footer>
  );
}
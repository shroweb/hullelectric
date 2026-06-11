import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { company, services } from "@/lib/site-data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/areas", label: "Areas" },
  { to: "/reviews", label: "Reviews" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/logo.webp"
            alt="Abbey Electrical Services"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-primary [&.active]:text-primary"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col px-4 py-2 sm:px-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-base font-medium text-ink/80 [&.active]:text-primary"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export const headerServices = services;
export { ChevronDown };
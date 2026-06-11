import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { serviceFormOptions } from "@/lib/site-data";

type Errors = Partial<Record<"firstName" | "lastName" | "phone" | "email" | "service", string>>;

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    const firstName = (data.get("firstName") as string)?.trim();
    const lastName = (data.get("lastName") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const service = (data.get("service") as string)?.trim();

    if (!firstName) next.firstName = "Please enter your first name.";
    if (!lastName) next.lastName = "Please enter your last name.";
    if (!phone || phone.replace(/\D/g, "").length < 7) next.phone = "Please enter a valid phone number.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (!service) next.service = "Please choose a service.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="h-12 w-12 text-trust" />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Thanks, request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We will call you back during working hours. For anything urgent, call 01482 440210.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          First name *
          <input name="firstName" type="text" className={inputClass} />
          {errors.firstName && <span className="mt-1 block text-xs text-destructive">{errors.firstName}</span>}
        </label>
        <label className="block text-sm font-medium text-ink">
          Last name *
          <input name="lastName" type="text" className={inputClass} />
          {errors.lastName && <span className="mt-1 block text-xs text-destructive">{errors.lastName}</span>}
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone *
          <input name="phone" type="tel" className={inputClass} />
          {errors.phone && <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>}
        </label>
        <label className="block text-sm font-medium text-ink">
          Email *
          <input name="email" type="email" className={inputClass} />
          {errors.email && <span className="mt-1 block text-xs text-destructive">{errors.email}</span>}
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink">
        Service required *
        <select name="service" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Choose a service
          </option>
          {serviceFormOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <span className="mt-1 block text-xs text-destructive">{errors.service}</span>}
      </label>
      <label className="mt-4 block text-sm font-medium text-ink">
        Message
        <textarea name="message" rows={4} className={inputClass} />
      </label>
      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        Send Request
      </button>
    </form>
  );
}
import {
  services,
  servicesDisclaimer,
  servicesIntro,
} from "@/data/services";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="bg-paper-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Automotive Services"
          title="Automotive Repair and Support"
          description={servicesIntro}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-xl border border-slate-200 bg-paper p-6 transition-shadow hover:shadow-md"
            >
              <div
                className="mb-4 h-1 w-10 rounded-full bg-accent"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-xl border border-slate-200 bg-paper p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <p className="text-sm leading-relaxed text-slate-500">
            {servicesDisclaimer}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block shrink-0 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-bright sm:mt-0"
          >
            Request Service Information
          </a>
        </div>
      </div>
    </section>
  );
}

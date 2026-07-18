import { company } from "@/data/company";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="About the Company"
          title="Built From Real Automotive Experience"
        />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
          <p>
            {company.legalName} was founded by {company.founder.name} as an
            independently owned Louisiana automotive company. The business
            combines hands-on automotive knowledge, customer service
            experience, sales experience, and technology development.
          </p>
          <p>
            What began as an automotive service company has grown into a
            foundation for developing practical platforms designed around real
            problems faced by vehicle owners, independent mechanics, automotive
            businesses, and enthusiasts.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {company.values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-slate-200 bg-paper-soft p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

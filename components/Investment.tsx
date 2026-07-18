import { company } from "@/data/company";
import {
  focusAreas,
  investmentDisclaimer,
  investmentIntro,
} from "@/data/investment";
import { SectionHeading } from "./SectionHeading";

export function Investment() {
  return (
    <section id="investment" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Investment and Partnerships"
          title="Building Practical Automotive Companies"
          description={investmentIntro}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-slate-200 bg-paper-soft p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {area.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border-l-4 border-accent bg-paper-soft p-6">
          <p className="leading-relaxed text-slate-700">
            {company.ownershipStatement} Their ownership or corporate structure
            may change in the future as the brands grow.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Discuss an Opportunity
          </a>
          <p className="text-sm leading-relaxed text-slate-500">
            {investmentDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

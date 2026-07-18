import { company } from "@/data/company";

/**
 * Decorative blueprint-style line drawing of a vehicle on a service lift.
 * Purely visual (aria-hidden); replaceable with a real photo later if desired.
 */
function WorkshopGraphic() {
  return (
    <svg
      viewBox="0 0 640 400"
      className="h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0H0v40"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="640" height="400" fill="url(#grid)" />
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Lift posts and arms */}
        <path d="M96 330V120M544 330V120" strokeOpacity="0.5" />
        <path d="M96 250h60M544 250h-60" strokeOpacity="0.5" />
        {/* Lift platform */}
        <path d="M140 268h360" strokeOpacity="0.7" />
        {/* Car body */}
        <path
          d="M168 252c-14 0-20-10-17-21 4-13 22-21 48-25l52-8 46-38c9-7 19-11 31-11h86c11 0 21 4 29 11l40 38 54 8c26 4 42 12 46 25 3 11-3 21-17 21"
          strokeOpacity="0.95"
        />
        {/* Greenhouse */}
        <path d="M310 152v46M254 198l42-40M420 198l-34-38" strokeOpacity="0.6" />
        {/* Rocker line */}
        <path d="M238 252h74M330 252h74" strokeOpacity="0.95" />
        {/* Wheels */}
        <circle cx="207" cy="252" r="30" strokeOpacity="0.95" />
        <circle cx="207" cy="252" r="12" strokeOpacity="0.5" />
        <circle cx="433" cy="252" r="30" strokeOpacity="0.95" />
        <circle cx="433" cy="252" r="12" strokeOpacity="0.5" />
        {/* Floor line */}
        <path d="M60 330h520" strokeOpacity="0.35" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,111,235,0.14),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:pb-28">
        <div className="animate-rise">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            Automotive Service.{" "}
            <span className="text-accent-bright">Technology.</span> Opportunity.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {company.legalName} is a Louisiana-based automotive service and
            technology company providing dependable automotive solutions while
            developing the next generation of automotive platforms.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#companies"
              className="rounded-md bg-accent px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-accent-bright"
            >
              Explore Our Companies
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-6 py-3 text-center text-base font-semibold text-slate-200 transition-colors hover:border-accent-bright hover:text-white"
            >
              Contact Sid Mobile Mechanic
            </a>
          </div>
          <p className="mt-10 text-sm font-medium tracking-wide text-slate-400">
            {company.trustLine}
          </p>
        </div>
        <div className="animate-rise-delayed hidden text-accent-bright lg:block">
          <div className="rounded-xl border border-line bg-ink-soft/60 p-6">
            <WorkshopGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

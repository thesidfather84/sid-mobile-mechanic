import Image from "next/image";
import { company } from "@/data/company";
import { publicFileExists } from "@/lib/publicFile";
import { SectionHeading } from "./SectionHeading";

export function Founder() {
  const { founder } = company;
  const hasPhoto = publicFileExists(founder.photo);

  return (
    <section id="founder" className="bg-paper-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Leadership" title="Founder and Owner" />
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[280px_1fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-paper">
            {hasPhoto ? (
              <Image
                src={`/${founder.photo}`}
                alt={founder.photoAlt}
                width={1122}
                height={1402}
                sizes="(min-width: 1024px) 280px, 100vw"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[7/8] flex-col items-center justify-center gap-3 bg-paper-soft px-6 text-center">
                <svg
                  className="h-16 w-16 text-slate-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6Z" />
                </svg>
                <span className="text-sm leading-relaxed text-slate-500">
                  Photo placeholder — add a portrait at{" "}
                  <code className="text-slate-600">public/{founder.photo}</code>
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {founder.name}
            </h3>
            <p className="mt-1 text-sm font-semibold tracking-wide text-accent uppercase">
              {founder.role}
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-slate-600">
              {founder.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

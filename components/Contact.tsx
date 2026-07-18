import { contact } from "@/data/contact";
import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Contact Sid Mobile Mechanic LLC"
          description="Contact us regarding automotive service, BIDWRENX, HoundMoto, partnerships, investment discussions, or general business inquiries."
          tone="dark"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border border-line bg-ink-soft p-6 sm:p-8">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-line p-6">
              <h3 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
                Location
              </h3>
              <p className="mt-2 text-lg text-white">{contact.location}</p>
            </div>
            <div className="rounded-xl border border-line p-6">
              <h3 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
                Email
              </h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-base break-all text-accent-bright hover:underline"
              >
                {contact.email}
              </a>
            </div>
            <div className="rounded-xl border border-line p-6">
              <h3 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
                Phone
              </h3>
              <p className="mt-2 text-lg text-white">
                {contact.phone ?? "Available on request"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

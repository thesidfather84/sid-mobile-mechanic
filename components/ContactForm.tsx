"use client";

import { useState, type FormEvent } from "react";
import { contact, inquiryTypes } from "@/data/contact";

const inputClasses =
  "w-full rounded-md border border-line bg-ink px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-accent-bright";

/**
 * Simple static-site contact form.
 *
 * Default behavior: builds a mailto link from the fields and opens the
 * visitor's email app addressed to `contact.email` (data/contact.ts).
 *
 * Future backend: set `contact.formEndpoint` in data/contact.ts to a
 * Formspree endpoint (or your own API route) and the form will POST
 * there instead — no component changes needed.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const inquiry = String(data.get("inquiry") ?? "");
    const message = String(data.get("message") ?? "");

    if (contact.formEndpoint) {
      // POST to the configured backend (e.g. Formspree)
      setStatus("sending");
      try {
        const response = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // Default: open the visitor's email app with the message pre-filled
    const subject = `[${inquiry}] Website inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Inquiry type: ${inquiry}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-slate-300">
            Phone <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-inquiry" className="mb-1.5 block text-sm font-medium text-slate-300">
            Inquiry type
          </label>
          <select id="contact-inquiry" name="inquiry" required className={inputClasses}>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={inputClasses}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {!contact.formEndpoint ? (
          <p className="text-sm text-slate-500">
            Submitting opens your email app with the message pre-filled.
          </p>
        ) : null}
        {status === "sent" ? (
          <p className="text-sm font-medium text-accent-bright" role="status">
            Message sent — thank you.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-red-400" role="alert">
            Something went wrong. Please email us directly at {contact.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}

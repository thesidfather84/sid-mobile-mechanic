"use client";

import { useState, type FormEvent } from "react";
import { contact, inquiryTypes } from "@/data/contact";

const inputClasses =
  "w-full rounded-md border border-line bg-ink px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-accent-bright";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form for a static site.
 *
 * Submissions POST to `contact.formEndpoint` (a Formspree endpoint —
 * see data/contact.ts for setup steps). While no endpoint is configured,
 * the form falls back to opening the visitor's email app addressed to
 * `contact.email` so inquiries still arrive.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [emailError, setEmailError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const inquiry = String(data.get("inquiry") ?? "");
    const message = String(data.get("message") ?? "").trim();

    if (!email) {
      setEmailError("Please enter your email address so we can reply.");
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      setEmailError(
        "That email address doesn't look valid — please check it and try again.",
      );
      return;
    }
    setEmailError(null);

    if (contact.formEndpoint) {
      setStatus("sending");
      try {
        const response = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!response.ok) {
          throw new Error(`Form endpoint returned ${response.status}`);
        }
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // Fallback while no form endpoint is configured: open the visitor's
    // email app addressed to the business inbox.
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
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? "contact-email-error" : undefined}
            onChange={() => setEmailError(null)}
            className={inputClasses}
          />
          {emailError ? (
            <p
              id="contact-email-error"
              className="mt-1.5 text-sm font-medium text-red-400"
              role="alert"
            >
              {emailError}
            </p>
          ) : null}
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
        {status === "idle" || status === "sending" ? (
          <p className="text-sm text-slate-500">
            We&rsquo;ll reply to the email address you provide.
          </p>
        ) : null}
        {status === "sent" ? (
          <p className="text-sm font-medium text-accent-bright" role="status">
            Message sent — thank you. We&rsquo;ll reply to the email address you
            provided.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-red-400" role="alert">
            Something went wrong sending your message. Please email us directly
            at {contact.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}

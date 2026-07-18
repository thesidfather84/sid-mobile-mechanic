/**
 * All editable contact details live here.
 *
 * - `email` powers the contact form (mailto) and the displayed email address.
 * - `phone` is optional: set it to a string like "(504) 555-0100" to display it,
 *   or leave it null to show "Available on request".
 * - `formEndpoint` is a documented placeholder for a future backend form:
 *   if you later create a Formspree form (https://formspree.io) or your own
 *   API route, set the endpoint URL here and the form will POST to it
 *   instead of opening the visitor's email app.
 */
export const contact = {
  location: "Louisiana, United States",
  email: "contact@sidmobilemechanic.net", // TODO: replace with the real inbox
  phone: null as string | null, // TODO: e.g. "(504) 555-0100"
  /**
   * Optional future form backend (Formspree / Resend / Vercel function).
   * Example: "https://formspree.io/f/your-form-id"
   * Leave null to use the built-in mailto behavior.
   */
  formEndpoint: null as string | null,
};

export const inquiryTypes = [
  "Automotive Service",
  "BIDWRENX",
  "HoundMoto",
  "Investment or Partnership",
  "General Business Inquiry",
] as const;

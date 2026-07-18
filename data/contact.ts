/**
 * All editable contact details live here.
 *
 * - `email` is the business inbox: shown on the site, used as the mailto
 *   fallback target, and where form submissions should be delivered.
 * - `phone` is optional: set it to a string like "(504) 555-0100" to display it,
 *   or leave it null to show "Available on request".
 * - `formEndpoint` — the contact form POSTs submissions here (Formspree).
 *
 *   TO ACTIVATE REAL FORM DELIVERY:
 *   1. Sign up at https://formspree.io and set the form's delivery
 *      address to contact@sidmobilemechanic.net
 *   2. Create a new form; Formspree gives you an endpoint like
 *      "https://formspree.io/f/abcdwxyz"
 *   3. Paste that endpoint below and redeploy.
 *
 *   Until an endpoint is set (null), the form falls back to opening the
 *   visitor's email app addressed to `email`, so no inquiry is lost.
 */
export const contact = {
  location: "Louisiana, United States",
  email: "contact@sidmobilemechanic.net",
  phone: null as string | null, // TODO: e.g. "(504) 555-0100"
  formEndpoint: null as string | null, // TODO: "https://formspree.io/f/YOUR_FORM_ID"
};

export const inquiryTypes = [
  "Automotive Service",
  "BIDWRENX",
  "HoundMoto",
  "Investment or Partnership",
  "General Business Inquiry",
] as const;

/**
 * Automotive services shown in the "Automotive Repair and Support" section.
 */
export type Service = {
  title: string;
  description: string;
};

export const servicesIntro =
  "Sid Mobile Mechanic LLC provides automotive repair, diagnostic, maintenance, and automotive support services based on availability and service area.";

export const services: Service[] = [
  {
    title: "Automotive Diagnostics",
    description:
      "Identifying vehicle issues through hands-on inspection and diagnostic tools, with clear explanations of what we find.",
  },
  {
    title: "Maintenance and Minor Repair",
    description:
      "Routine maintenance and minor repair work to help keep vehicles dependable and road-ready.",
  },
  {
    title: "Parts and Repair Guidance",
    description:
      "Practical guidance on parts, repair options, and priorities, drawn from real automotive parts and service experience.",
  },
  {
    title: "Mobile Automotive Support",
    description:
      "Automotive help that can come to you, depending on location, vehicle, and the service requested.",
  },
  {
    title: "Automotive Technology Consulting",
    description:
      "Consulting on automotive technology, platforms, and digital tools for automotive businesses and professionals.",
  },
];

export const servicesDisclaimer =
  "Service availability, vehicle eligibility, and travel area may vary. Customers should contact Sid Mobile Mechanic LLC to discuss their vehicle and requested service.";

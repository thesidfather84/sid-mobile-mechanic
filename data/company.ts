/**
 * Core company information.
 * Edit this file to update company copy used across the site.
 */
export const company = {
  legalName: "Sid Mobile Mechanic LLC",
  shortName: "Sid Mobile Mechanic",
  domain: "sidmobilemechanic.net",
  url: "https://sidmobilemechanic.net",
  entityType: "Louisiana Limited Liability Company",
  location: "Louisiana, United States",
  founder: {
    name: "Sidney Impastato",
    role: "Founder and Sole Owner",
    // Replace this photo: drop a real image at public/founder/sidney-impastato.webp
    photo: "founder/sidney-impastato.webp",
    photoAlt: "Portrait of Sidney Impastato, founder and sole owner of Sid Mobile Mechanic LLC",
    bio: [
      "Sidney Impastato brings experience across automotive repair operations, automotive parts, dealership sales, commercial sales, customer support, technology, and business development.",
      "Sid Mobile Mechanic LLC was created to combine that practical automotive experience with modern technology and new business opportunities.",
    ],
  },
  tagline: "Automotive Service. Technology. Opportunity.",
  description:
    "Sid Mobile Mechanic LLC is a Louisiana automotive service and technology company and the owner of BIDWRENX and HoundMoto.",
  trustLine: "Louisiana-Owned • Independently Operated • Automotive Focused",
  ownershipStatement:
    "BIDWRENX and HoundMoto are currently owned and operated by Sid Mobile Mechanic LLC.",
  values: [
    {
      title: "Automotive Experience",
      description:
        "Solutions are based on real automotive service, parts, sales, and customer experience.",
    },
    {
      title: "Practical Technology",
      description:
        "We build tools that make automotive services easier to access, manage, and understand.",
    },
    {
      title: "Independent Ownership",
      description:
        "Sid Mobile Mechanic LLC is independently owned and operated in Louisiana.",
    },
  ],
} as const;

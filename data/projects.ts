/**
 * Owned projects shown in the "Our Companies" section.
 *
 * `url` is the live site each card's "Visit Website" button opens.
 * To update a screenshot, overwrite the image at the `screenshot`
 * path inside /public (see README: "Replacing the screenshots").
 */
export type Project = {
  name: string;
  tagline: string;
  description: string;
  status: string;
  /** Full URL of the live site. */
  url: string;
  /** Path inside /public, e.g. "projects/bidwrenx-homepage.webp" */
  screenshot: string;
  screenshotAlt: string;
  /** Intrinsic pixel size of the screenshot file (keeps layout stable). */
  screenshotWidth: number;
  screenshotHeight: number;
};

export const projectsIntro =
  "Sid Mobile Mechanic LLC owns and develops automotive brands designed to address different parts of the vehicle ownership and repair experience.";

export const projects: Project[] = [
  {
    name: "BIDWRENX",
    tagline: "Competitive Automotive Repair Bidding",
    description:
      "BIDWRENX is an automotive marketplace being developed to connect vehicle owners with independent automotive professionals. Customers can post repair needs, receive competitive bids, communicate with service providers, and manage their repair experience through one platform.",
    status: "In Development",
    url: "https://bidwrenx.com",
    screenshot: "projects/bidwrenx-homepage.webp",
    screenshotAlt:
      "BIDWRENX homepage — post your repair and let local mechanics bid for your job",
    screenshotWidth: 1823,
    screenshotHeight: 892,
  },
  {
    name: "HoundMoto",
    tagline: "Automotive Community and Technology",
    description:
      "HoundMoto is an automotive brand focused on building useful digital experiences for vehicle owners, enthusiasts, and automotive professionals.",
    status: "In Development",
    url: "https://houndmoto.com",
    screenshot: "projects/houndmoto-homepage.png",
    screenshotAlt:
      "HoundMoto homepage — one search bar for auto specs, fluids, tires, parts, and trouble codes",
    screenshotWidth: 1857,
    screenshotHeight: 1076,
  },
];

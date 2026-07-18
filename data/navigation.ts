/**
 * Site navigation. Anchor links target section ids on the one-page layout.
 */
export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Automotive Services", href: "#services" },
  { label: "Our Companies", href: "#companies" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Automotive Services", href: "#services" },
  { label: "BIDWRENX", href: "#companies" },
  { label: "HoundMoto", href: "#companies" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
];

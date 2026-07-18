import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { company } from "@/data/company";
import { contact } from "@/data/contact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: "Sid Mobile Mechanic LLC | Automotive Service and Technology",
  description: company.description,
  keywords: [
    "Sid Mobile Mechanic LLC",
    "Louisiana automotive service",
    "mobile mechanic",
    "BIDWRENX",
    "HoundMoto",
    "automotive technology",
  ],
  openGraph: {
    type: "website",
    url: company.url,
    siteName: company.legalName,
    title: "Sid Mobile Mechanic LLC | Automotive Service and Technology",
    description: company.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sid Mobile Mechanic LLC | Automotive Service and Technology",
    description: company.description,
  },
  alternates: {
    canonical: "/",
  },
};

/**
 * Structured data uses only facts provided by the company:
 * legal name, founder, Louisiana location, and owned brands.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${company.url}/#organization`,
      name: company.legalName,
      legalName: company.legalName,
      url: company.url,
      email: contact.email,
      founder: {
        "@type": "Person",
        name: company.founder.name,
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "LA",
        addressCountry: "US",
      },
      brand: [
        { "@type": "Brand", name: "BIDWRENX" },
        { "@type": "Brand", name: "HoundMoto" },
      ],
    },
    {
      "@type": "AutoRepair",
      "@id": `${company.url}/#localbusiness`,
      name: company.legalName,
      url: company.url,
      email: contact.email,
      parentOrganization: { "@id": `${company.url}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressRegion: "LA",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "State",
        name: "Louisiana",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-ink font-sans text-slate-200 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

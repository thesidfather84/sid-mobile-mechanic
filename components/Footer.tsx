import { company } from "@/data/company";
import { footerLinks } from "@/data/navigation";
import { socialLinks } from "@/data/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="privacy" className="border-t border-line bg-[#0a0e13]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold tracking-tight text-white">
              {company.legalName}
            </p>
            <p className="mt-1 text-sm text-slate-400">{company.entityType}</p>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              {company.ownershipStatement}
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            © {year} {company.legalName}. All rights reserved. Investment and
            partnership inquiries are discussions only and do not constitute an
            offer to sell securities.
          </p>
        </div>
      </div>
    </footer>
  );
}

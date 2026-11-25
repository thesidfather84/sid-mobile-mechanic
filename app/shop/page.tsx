import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ShopCatalog } from "./shop-catalog";
import { orderPhone } from "./shop-phone";

export const metadata: Metadata = {
  title: "Car Audio Shop | Sid Mobile Mechanic LLC",
  description: "Browse car radios, speakers, subwoofers and amplifiers. Call for pricing, compatibility and orders.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <Header sectionPath="/" />
      <main>
        <section className="relative isolate overflow-hidden border-b border-line bg-[#0b1525] bg-[url('/shop/cabin.webp')] bg-cover bg-center">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-[#080e18] via-[#080e18]/90 to-[#080e18]/25" />
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Sid’s Car Audio</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-white sm:text-7xl">Upgrade Your Drive.</h1>
            <p className="mt-5 max-w-md text-lg text-slate-200">Shop car stereos, speakers and bass upgrades. Call to find the right setup for your vehicle.</p>
            <a href={orderPhone.href} className="mt-8 inline-flex min-h-12 items-center rounded-md bg-sky-300 px-5 font-bold text-slate-950 hover:bg-sky-200">
              Call to Order · {orderPhone.display}
            </a>
          </div>
        </section>
        <section aria-labelledby="fitment-title" className="border-b border-line bg-ink-soft">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 id="fitment-title" className="text-xl font-bold text-white">Find What Fits Your Vehicle</h2>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-300">
                Enter your year, make, model and factory audio options in a free fit guide. Check speaker sizes and locations, radio fit, dash kits and wiring adapters.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.crutchfield.com/car/carselector.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm font-semibold text-white hover:border-sky-300">
                Speaker &amp; Radio Fit
                <span className="sr-only"> on Crutchfield (opens in a new tab)</span>
              </a>
              <a href="https://www.metraonline.com/vehicle-fit-guide" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-md border border-line px-4 text-sm font-semibold text-white hover:border-sky-300">
                Dash Kits &amp; Adapters
                <span className="sr-only"> on Metra (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>
        <ShopCatalog />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-8 text-sm text-slate-300 sm:px-6">
          <a href="/#top" className="font-semibold text-white hover:underline">Sid Mobile Mechanic LLC</a>
          <a href={orderPhone.href} className="hover:underline">{orderPhone.display}</a>
        </div>
      </footer>
    </>
  );
}

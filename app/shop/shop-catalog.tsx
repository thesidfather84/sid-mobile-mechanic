"use client";

import Image from "next/image";
import { useState } from "react";
import productData from "@/data/shop-products.json";
import { orderPhone } from "./shop-phone";

type Product = {
  sku: string;
  brand: string;
  model: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  image: string | null;
  retailPrice: number | null;
  availability: string;
};

const products: Product[] = productData;
const categories = ["All products", ...new Set(products.map((product) => product.category))];
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function ShopCatalog() {
  const [category, setCategory] = useState(categories[0]);
  const visible = category === categories[0] ? products : products.filter((product) => product.category === category);

  return (
    <section aria-labelledby="catalog-title" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 id="catalog-title" className="text-3xl font-bold tracking-tight text-white">Car Audio Catalog</h2>
      <p className="mt-3 text-slate-300">Call to confirm pricing, availability and vehicle compatibility.</p>
      <div role="group" aria-label="Product categories" className="mt-7 flex flex-wrap gap-2">
        {categories.map((name) => (
          <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)}
            className="min-h-11 rounded-full border border-line px-4 text-sm font-semibold text-slate-200 hover:border-sky-300 aria-pressed:border-sky-300 aria-pressed:bg-sky-300 aria-pressed:text-slate-950">
            {name}
          </button>
        ))}
      </div>
      <p role="status" className="my-5 text-sm text-slate-400">{visible.length} {visible.length === 1 ? "product" : "products"}</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <article key={product.sku} className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-ink-soft">
            {product.image && (
              <div className="relative aspect-[4/3] bg-white">
                <Image src={product.image} alt={`${product.brand} ${product.model}`} fill className="object-contain p-5"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px" />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-300">{product.brand}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-slate-300">{product.model} · {product.sku}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{product.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.specifications.map((spec) => <li key={spec} className="rounded-md border border-line px-2 py-1 text-xs text-slate-200">{spec}</li>)}
              </ul>
              <div className="mt-auto pt-6">
                <p className="font-semibold text-white">{product.retailPrice === null ? "Call for Pricing" : currency.format(product.retailPrice)}</p>
                <p className="mt-1 text-sm text-slate-400">{product.availability}</p>
                <a href={orderPhone.href} aria-label={`Call to order ${product.brand} ${product.model} at ${orderPhone.display}`}
                  className="mt-4 flex min-h-11 items-center justify-center rounded-md border border-sky-300/45 px-3 text-center text-sm font-semibold text-sky-200 hover:bg-sky-300 hover:text-slate-950">
                  Call to Order · {orderPhone.display}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

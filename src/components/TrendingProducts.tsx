import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function TrendingProducts() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-3">// Trending now</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">
              GEAR THAT<br />
              <span className="text-secondary text-glow-lime">PERFORMS</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Curated by athletes. Tested in the field. The most-loved drops from the Titan lineup right now.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

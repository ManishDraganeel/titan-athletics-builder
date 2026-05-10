import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Titan Athletics" },
      { name: "description", content: "Browse premium performance gear, athletic apparel, footwear and equipment from Titan Athletics." },
      { property: "og:title", content: "Shop — Titan Athletics" },
      { property: "og:description", content: "Browse premium performance gear from Titan Athletics." },
    ],
  }),
  component: Shop,
});

const categories = ["All", "Running", "Training", "Gym", "Cricket", "Apparel"];

function Shop() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    (active === "All" || p.category === active) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Shop all</p>
            <h1 className="font-display text-6xl md:text-8xl leading-none mb-6">
              THE FULL <span className="text-primary text-glow-electric">ARSENAL</span>
            </h1>
            <p className="text-foreground/70 max-w-xl">Engineered gear for every discipline. Filter, find, conquer.</p>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search gear..."
                className="w-full glass rounded-full pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all ${
                    active === c
                      ? "bg-primary text-primary-foreground glow-electric"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <button className="lg:ml-auto inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-xs uppercase tracking-wider font-bold hover:bg-white/10">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing <span className="text-primary font-semibold">{filtered.length}</span> products
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} p={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No products match your filters.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

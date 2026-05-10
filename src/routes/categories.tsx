import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import basketball from "@/assets/cat-basketball.jpg";
import running from "@/assets/cat-running.jpg";
import gym from "@/assets/cat-gym.jpg";
import cricket from "@/assets/cat-cricket.jpg";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Titan Athletics" },
      { name: "description", content: "Browse Titan Athletics categories: Running, Gym, Cricket, Apparel and more." },
    ],
  }),
  component: CategoriesPage,
});

const cats = [
  { name: "Running", img: running, blurb: "Race-day shoes, breathable kits, recovery essentials." },
  { name: "Gym", img: gym, blurb: "Forged iron, power racks, ropes — built for hypertrophy." },
  { name: "Cricket", img: cricket, blurb: "Pro bats, gloves and pads engineered for the crease." },
  { name: "Training", img: basketball, blurb: "Cross-train kits and recovery gear for daily warriors." },
  { name: "Apparel", img: basketball, blurb: "Cinematic streetwear forged from premium technical fabrics." },
  { name: "Basketball", img: basketball, blurb: "Court-ready footwear and indoor training gear." },
];

function CategoriesPage() {
  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// All disciplines</p>
          <h1 className="font-display text-6xl md:text-8xl leading-none mb-12">PICK YOUR <span className="text-secondary text-glow-lime">ARENA</span></h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cats.map((c) => {
              const count = products.filter((p) => p.category === c.name).length;
              return (
                <Link
                  key={c.name}
                  to="/shop"
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 hover:border-primary/60 transition"
                >
                  <img src={c.img} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-titan via-titan/40 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <p className="text-xs uppercase tracking-widest text-primary mb-2">{count} products</p>
                    <h2 className="font-display text-4xl mb-2 group-hover:text-primary transition">{c.name}</h2>
                    <p className="text-sm text-foreground/70">{c.blurb}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

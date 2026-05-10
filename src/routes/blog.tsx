import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hero from "@/assets/hero-athlete.jpg";
import athlete from "@/assets/athlete-1.jpg";
import gym from "@/assets/cat-gym.jpg";
import running from "@/assets/cat-running.jpg";
import cricket from "@/assets/cat-cricket.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Journal — Titan Athletics" }] }),
  component: BlogPage,
});

const posts = [
  { id: "1", title: "Inside the Velocity Pro: Engineering a Sub-3 Marathon Shoe", excerpt: "How our R&D team shaved 14 grams while adding 18% energy return.", img: hero, date: "May 06, 2026", read: "8 min", tag: "Innovation" },
  { id: "2", title: "Hypertrophy Protocols Used by Titan Athletes", excerpt: "The exact 12-week split powering our Olympic lineup.", img: gym, date: "May 02, 2026", read: "12 min", tag: "Training" },
  { id: "3", title: "From the Crease: Champion Edition Bat Story", excerpt: "Hand-pressed English willow, willow-grain mapping, and balance physics.", img: cricket, date: "Apr 28, 2026", read: "6 min", tag: "Cricket" },
  { id: "4", title: "Recovery Stack: Sleep, Sauna, Strength", excerpt: "Why elite athletes treat recovery as the third workout of the day.", img: athlete, date: "Apr 21, 2026", read: "10 min", tag: "Performance" },
  { id: "5", title: "Trail Running Essentials for Brutal Terrain", excerpt: "Gear, hydration, and pace strategy for ultras above 50km.", img: running, date: "Apr 15, 2026", read: "9 min", tag: "Running" },
  { id: "6", title: "Building the Titan Power Rack: A Lab Tour", excerpt: "Aerospace-grade steel, 1500lb load tests, and modular design.", img: gym, date: "Apr 09, 2026", read: "7 min", tag: "Innovation" },
];

function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// The journal</p>
          <h1 className="font-display text-6xl md:text-8xl leading-none mb-12">FIELD <span className="text-primary text-glow-electric">NOTES</span></h1>

          <article className="group grid md:grid-cols-2 gap-8 glass rounded-2xl overflow-hidden mb-16 hover:border-primary/40 transition">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img src={feature.img} alt={feature.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-secondary mb-3">{feature.tag} · Featured</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4 group-hover:text-primary transition">{feature.title}</h2>
              <p className="text-foreground/70 mb-6">{feature.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{feature.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{feature.read}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">Read story <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </article>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <a href="#" key={p.id} className="group glass rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-secondary">{p.tag}</span>
                  <h3 className="font-display text-2xl mt-2 mb-3 leading-tight group-hover:text-primary transition">{p.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.date}</span><span>{p.read}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

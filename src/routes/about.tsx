import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Globe, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hero from "@/assets/hero-athlete.jpg";
import athlete from "@/assets/athlete-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Titan Athletics" },
      { name: "description", content: "The story of Titan Athletics — engineered for elite performance, built for modern athletes." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
          <div className="mx-auto max-w-5xl px-6 text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Founded 2018 · Engineered worldwide</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-6xl md:text-9xl leading-none mb-6">
              BUILT IN THE LAB.<br /><span className="text-primary text-glow-electric">TESTED IN THE ARENA.</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Titan Athletics exists for one reason: to engineer the most uncompromising performance gear on earth. From sub-3 marathoners to Olympic lifters and pro cricketers — we obsess over the millimeters that separate good from legendary.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { Icon: Users, n: "2.4M+", l: "Athletes worldwide" },
              { Icon: Globe, n: "84", l: "Countries served" },
              { Icon: Trophy, n: "127", l: "Olympic medals worn" },
              { Icon: Zap, n: "320+", l: "Pro endorsements" },
            ].map(({ Icon, n, l }) => (
              <div key={l} className="glass rounded-2xl p-6 text-center">
                <Icon className="h-6 w-6 mx-auto mb-3 text-primary" />
                <p className="font-display text-4xl md:text-5xl text-primary">{n}</p>
                <p className="text-xs uppercase tracking-widest text-foreground/60 mt-2">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={hero} alt="Titan athletes" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-3">// The story</p>
              <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">FORGED FROM<br /><span className="text-stroke">FRUSTRATION</span></h2>
              <div className="space-y-4 text-foreground/80">
                <p>Titan started in a Brooklyn garage in 2018 when our founders — a biomechanics engineer and a sub-elite marathoner — got tired of choosing between hype and performance.</p>
                <p>Today we operate three R&D labs, partner with seven Olympic federations, and ship to 84 countries. But the obsession is the same: gear that earns its place in your bag.</p>
                <p>Every product we make passes 200+ hours of athlete field-testing before it hits the site. No shortcuts. No marketing fluff. Just gear that performs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-titan-gray/30">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-5xl md:text-6xl mb-12 text-center">THE TITAN <span className="text-primary">CODE</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "Performance First", d: "If it doesn't make you faster, stronger, or sharper, it doesn't ship." },
                { t: "Athlete-Engineered", d: "Every product is co-designed with the athletes who depend on it." },
                { t: "Built to Last", d: "Lifetime craftsmanship guarantee. We stand behind every stitch." },
              ].map((v) => (
                <div key={v.t} className="glass rounded-2xl p-8 hover:border-primary/40 transition">
                  <h3 className="font-display text-3xl mb-3 text-primary">{v.t}</h3>
                  <p className="text-foreground/70">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Athlete spotlight CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={athlete} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-titan via-titan/70 to-transparent" />
              <div className="relative p-12 md:p-20 max-w-2xl">
                <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">JOIN THE<br /><span className="text-primary">EMPIRE</span></h2>
                <p className="text-foreground/80 mb-8">Become a Titan member for early drops, athlete content, and exclusive training kits.</p>
                <Link to="/shop" className="inline-flex bg-primary text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 transition glow-electric">
                  Shop the arsenal
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

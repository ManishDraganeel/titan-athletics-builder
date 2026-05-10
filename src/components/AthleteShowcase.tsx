import { motion } from "framer-motion";
import athlete from "@/assets/athlete-1.jpg";

export default function AthleteShowcase() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <img src={athlete} alt="Titan athlete" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-titan via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">// Titan Athlete</p>
              <h3 className="font-display text-4xl">Marcus Reid</h3>
              <p className="text-sm text-foreground/70 mt-1">Sprinter · 100m World Champion</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">// Athlete collection</p>
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">
            BUILT BY<br />
            <span className="text-primary text-glow-electric">CHAMPIONS</span>
          </h2>

          <blockquote className="text-2xl font-light text-foreground/90 italic border-l-2 border-primary pl-6 mb-8">
            "Every gram matters. Every stitch counts. Titan gear isn't equipment — it's an extension of who I am on the track."
          </blockquote>

          <div className="grid grid-cols-3 gap-px bg-white/10 mb-8">
            {[
              { v: "9.58s", l: "Personal Best" },
              { v: "12", l: "Gold Medals" },
              { v: "8 yrs", l: "With Titan" },
            ].map((s) => (
              <div key={s.l} className="bg-titan p-5">
                <div className="font-display text-3xl text-secondary">{s.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <a href="/shop" className="inline-flex items-center gap-2 glass rounded-full px-7 py-3 font-bold uppercase tracking-wider text-sm hover:bg-primary hover:text-titan transition">
            Shop Marcus's Gear →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

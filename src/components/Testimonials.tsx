import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Alex Chen", sport: "Marathon Runner", text: "These shoes feel like running on clouds. Cut 4 minutes off my PR in my first race.", rating: 5 },
  { name: "Priya Singh", sport: "CrossFit Athlete", text: "The build quality is unreal. Titan gear handles everything I throw at it and looks elite doing it.", rating: 5 },
  { name: "Jordan Lee", sport: "Basketball Player", text: "Game-changer. The grip, the cushioning, the look — Titan delivers on every single front.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Reviews</p>
          <h2 className="font-display text-5xl md:text-7xl leading-none">
            TRUSTED BY<br />
            <span className="text-stroke">THE RELENTLESS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-foreground/90 mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary grid place-items-center font-bold text-titan">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.sport}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

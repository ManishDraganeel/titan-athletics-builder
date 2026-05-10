import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import basketball from "@/assets/cat-basketball.jpg";
import running from "@/assets/cat-running.jpg";
import gym from "@/assets/cat-gym.jpg";
import cricket from "@/assets/cat-cricket.jpg";

const cats = [
  { name: "Running", count: "240+", img: running, accent: "primary" },
  { name: "Gym & Fitness", count: "380+", img: gym, accent: "secondary" },
  { name: "Basketball", count: "120+", img: basketball, accent: "primary" },
  { name: "Cricket", count: "95+", img: cricket, accent: "secondary" },
];

export default function Categories() {
  return (
    <section id="collection" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Shop by sport</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none">
              FORGED FOR<br />
              <span className="text-stroke">EVERY ARENA</span>
            </h2>
          </div>
          <a href="/categories" className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold hover:text-primary transition">
            View all categories
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cats.map((c, i) => (
            <motion.a
              key={c.name}
              href="/shop"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 hover:border-primary/60 transition-all"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-titan via-titan/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 left-4 text-xs uppercase tracking-widest glass rounded-full px-3 py-1">
                {c.count} items
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-primary transition-colors">
                  {c.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground transition">
                  <span>Explore</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

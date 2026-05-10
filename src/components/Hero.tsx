import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-athlete.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Titan athlete sprinting"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-titan via-titan/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-titan via-transparent to-titan/40" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-[140px] animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 self-start glass rounded-full px-4 py-2 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/80">New Drop · SS26 Collection</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.85] tracking-tight max-w-5xl"
        >
          UNLEASH THE
          <br />
          <span className="text-glow-electric text-primary">TITAN</span>{" "}
          <span className="text-stroke">WITHIN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-xl text-lg text-foreground/70"
        >
          Elite performance gear engineered for champions. Precision-built. Battle-tested. Worn by the relentless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/shop"
            className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground uppercase tracking-wider text-sm transition-all hover:scale-105 hover:glow-electric animate-pulse-glow"
          >
            Shop Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#collection"
            className="group inline-flex items-center gap-3 glass rounded-full px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-titan">
              <Play className="h-3 w-3 fill-current" />
            </span>
            Explore Collection
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 max-w-3xl"
        >
          {[
            { num: "2M+", label: "Athletes" },
            { num: "180+", label: "Countries" },
            { num: "4.9★", label: "Rated" },
            { num: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label} className="bg-titan/80 backdrop-blur-sm px-6 py-5">
              <div className="font-display text-3xl text-primary">{s.num}</div>
              <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side label */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right text-xs uppercase tracking-[0.4em] text-foreground/40">
        Engineered · Performance · Apparel
      </div>
    </section>
  );
}

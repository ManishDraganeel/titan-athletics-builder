import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden border-primary/20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

          <div className="relative text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Members only</p>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
              JOIN THE<br />
              <span className="text-primary text-glow-electric">TITAN COMMUNITY</span>
            </h2>
            <p className="text-foreground/70 mb-10">
              Exclusive launches, athlete tips, early access — and 10% off your first drop.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full glass rounded-full pl-12 pr-4 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-electric transition"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-4 font-bold uppercase tracking-wider text-sm hover:scale-105 transition"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

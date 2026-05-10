import { useEffect, useState } from "react";
import { Flame, Zap } from "lucide-react";
import shoe from "@/assets/product-shoe.jpg";

function useCountdown(target: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

export default function FlashSale() {
  const target = useState(() => Date.now() + 11 * 3600_000 + 27 * 60000)[0];
  const { h, m, s } = useCountdown(target);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-flame/10 via-titan to-destructive/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-flame to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border-flame/40">
              <Flame className="h-4 w-4 text-flame" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-flame">Flash Sale · Live</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
              UP TO <span className="text-flame">60% OFF</span><br />
              <span className="text-stroke">LIMITED STOCK</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-md">
              The biggest performance gear drop of the season. When it's gone, it's gone.
            </p>

            <div className="flex gap-3 mb-8">
              {[
                { v: String(h).padStart(2, "0"), l: "Hours" },
                { v: String(m).padStart(2, "0"), l: "Minutes" },
                { v: String(s).padStart(2, "0"), l: "Seconds" },
              ].map((t) => (
                <div key={t.l} className="glass-strong rounded-xl px-5 py-4 min-w-[88px] text-center border-flame/30">
                  <div className="font-display text-4xl text-flame">{t.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-foreground/60 mt-1">{t.l}</div>
                </div>
              ))}
            </div>

            <a
              href="/shop"
              className="inline-flex items-center gap-2 bg-flame text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition"
              style={{ boxShadow: "0 0 40px oklch(0.7 0.22 45 / 0.5)" }}
            >
              <Zap className="h-4 w-4 fill-current" />
              Grab the Deal
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-flame/20 blur-[100px] rounded-full" />
            <div className="relative glass-strong rounded-3xl p-8 border-flame/30">
              <img src={shoe} alt="Sale item" loading="lazy" className="w-full aspect-square object-cover rounded-2xl" />
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-flame mb-1">Featured Deal</p>
                  <h3 className="font-display text-2xl">Velocity Pro X1</h3>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl text-flame">$96</div>
                  <div className="text-sm text-muted-foreground line-through">$240</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-foreground/60 uppercase tracking-widest">Stock Left</span>
                  <span className="text-flame font-bold">12 / 100</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-flame to-destructive rounded-full" style={{ width: "12%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

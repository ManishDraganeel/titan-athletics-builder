const brands = ["NIKE", "ADIDAS", "PUMA", "REEBOK", "UNDER ARMOUR", "YONEX", "NEW BALANCE", "ASICS"];

export default function BrandMarquee() {
  return (
    <section className="py-12 border-y border-white/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <div key={i} className="flex items-center gap-16 mx-8">
            <span className="font-display text-4xl md:text-5xl text-foreground/30 hover:text-primary transition-colors duration-500 tracking-widest">
              {b}
            </span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

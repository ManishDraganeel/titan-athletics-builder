import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-titan-gray/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img src="/logo.png" alt="Titan Athletics" className="h-14 sm:h-16 w-auto object-contain" />
            </Link>
            <p className="text-sm text-foreground/60 max-w-xs mb-6">
              Elite performance gear engineered for champions. Built in the lab. Tested in the arena.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-primary hover:text-titan transition" aria-label="Social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Shop", links: ["Running", "Gym & Fitness", "Cricket", "Basketball", "Football"] },
            { title: "Support", links: ["Contact", "Shipping", "Returns", "FAQ", "Size Guide"] },
            { title: "Company", links: ["About", "Athletes", "Careers", "Press", "Sustainability"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-lg tracking-widest mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/60 hover:text-primary transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-foreground/50">© 2026 Titan Athletics. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-foreground/50">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/10">
        <div className="font-display text-[clamp(4rem,18vw,18rem)] leading-none text-center text-stroke whitespace-nowrap py-4 select-none">
          TITAN ATHLETICS
        </div>
      </div>
    </footer>
  );
}

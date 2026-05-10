import { Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export type { Product };

export default function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
  const { add } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 hover:glow-electric"
    >
      <Link to="/product/$slug" params={{ slug: p.slug }} className="block relative aspect-square overflow-hidden bg-titan-gray">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {p.badge && (
            <span className="bg-secondary text-titan text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              {p.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-destructive text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full glass-strong hover:bg-primary hover:text-titan transition"
          aria-label="Wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-3 bottom-3 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              add(p, 1);
            }}
            className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </Link>

      <Link to="/product/$slug" params={{ slug: p.slug }} className="block p-5">
        <p className="text-[10px] uppercase tracking-widest text-primary mb-1.5">{p.category}</p>
        <h3 className="font-semibold text-base mb-2 line-clamp-1 group-hover:text-primary transition">{p.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.floor(p.rating) ? "fill-secondary text-secondary" : "text-muted"}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{p.rating.toFixed(1)} ({p.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-primary">${p.price}</span>
          {p.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">${p.oldPrice}</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

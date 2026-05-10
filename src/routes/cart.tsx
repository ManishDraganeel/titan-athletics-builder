import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Bag — Titan Athletics" }] }),
  component: CartPage,
});

function CartPage() {
  const { items, update, remove, subtotal, clear } = useCart();
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(0);

  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - applied;

  const applyPromo = () => {
    if (promo.toUpperCase() === "TITAN10") setApplied(subtotal * 0.1);
  };

  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-6xl md:text-7xl mb-2">YOUR <span className="text-primary">BAG</span></h1>
          <p className="text-muted-foreground mb-12">{items.length} item{items.length !== 1 && "s"} ready for war</p>

          {items.length === 0 ? (
            <div className="text-center py-20 glass rounded-2xl">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl mb-6 text-muted-foreground">Your bag is empty</p>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 transition">
                Shop the arsenal <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="glass rounded-2xl p-4 flex gap-4 items-center">
                    <Link to="/product/$slug" params={{ slug: item.product.slug }} className="h-28 w-28 rounded-xl overflow-hidden bg-titan-gray shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-primary">{item.product.category}</p>
                      <Link to="/product/$slug" params={{ slug: item.product.slug }} className="font-semibold hover:text-primary line-clamp-1">{item.product.name}</Link>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.size && <>Size: {item.size}</>}{item.color && <> · {item.color}</>}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="flex items-center glass rounded-full">
                          <button onClick={() => update(item.id, item.quantity - 1)} className="h-8 w-8 grid place-items-center"><Minus className="h-3 w-3" /></button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => update(item.id, item.quantity + 1)} className="h-8 w-8 grid place-items-center"><Plus className="h-3 w-3" /></button>
                        </div>
                        <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-destructive transition">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl text-primary">${(item.product.price * item.quantity).toFixed(0)}</p>
                      <p className="text-xs text-muted-foreground">${item.product.price} each</p>
                    </div>
                  </div>
                ))}
                <button onClick={clear} className="text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive">Clear bag</button>
              </div>

              <aside className="glass-strong rounded-2xl p-6 h-fit lg:sticky lg:top-28">
                <h2 className="font-display text-3xl mb-6 tracking-wider">ORDER SUMMARY</h2>

                <div className="flex gap-2 mb-6">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Try TITAN10"
                      className="w-full glass rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <button onClick={applyPromo} className="bg-secondary text-titan font-bold uppercase tracking-wider text-xs px-5 rounded-full hover:scale-105 transition">Apply</button>
                </div>

                <div className="space-y-3 text-sm border-y border-white/10 py-6 mb-6">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tax (est.)</span><span>${tax.toFixed(2)}</span></div>
                  {applied > 0 && <div className="flex justify-between text-secondary"><span>Discount</span><span>-${applied.toFixed(2)}</span></div>}
                </div>

                <div className="flex justify-between items-baseline mb-6">
                  <span className="font-display text-2xl">TOTAL</span>
                  <span className="font-display text-4xl text-primary">${total.toFixed(2)}</span>
                </div>

                <Link to="/checkout" className="block w-full bg-primary text-primary-foreground text-center font-bold uppercase tracking-wider py-4 rounded-full hover:scale-[1.02] transition glow-electric">
                  Checkout
                </Link>
                <Link to="/shop" className="block text-center mt-3 text-sm text-muted-foreground hover:text-primary">Continue shopping</Link>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

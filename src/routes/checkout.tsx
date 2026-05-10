import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Lock, Check, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Titan Athletics" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [done, setDone] = useState(false);

  const shipping = subtotal > 100 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    clear();
  };

  if (done) {
    return (
      <div className="bg-titan min-h-screen">
        <Navbar />
        <main className="pt-40 pb-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="h-20 w-20 mx-auto mb-6 rounded-full bg-secondary grid place-items-center">
              <Check className="h-10 w-10 text-titan" />
            </div>
            <h1 className="font-display text-6xl mb-4">ORDER <span className="text-primary">CONFIRMED</span></h1>
            <p className="text-muted-foreground mb-8">Order #TTN-{Math.floor(Math.random() * 90000 + 10000)} · Receipt sent to your email.</p>
            <Link to="/shop" className="inline-flex bg-primary text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 transition">
              Keep shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-titan min-h-screen">
        <Navbar />
        <main className="pt-40 text-center">
          <p className="text-xl mb-6">Your bag is empty.</p>
          <Link to="/shop" className="text-primary underline">Shop now</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-display text-5xl md:text-6xl mb-2">SECURE <span className="text-primary">CHECKOUT</span></h1>
          <p className="text-muted-foreground mb-10 flex items-center gap-2"><Lock className="h-4 w-4" /> 256-bit SSL encrypted payment</p>

          <div className="grid lg:grid-cols-3 gap-8">
            <form onSubmit={submit} className="lg:col-span-2 space-y-6">
              {/* Steps indicator */}
              <div className="flex gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`flex-1 h-1 rounded-full ${s <= 1 ? "bg-primary" : "bg-white/10"}`} />
                ))}
              </div>

              <Section title="01 / Contact">
                <Field label="Email" type="email" required placeholder="champion@titan.com" />
                <Field label="Phone" type="tel" placeholder="+1 555 000 0000" />
              </Section>

              <Section title="02 / Shipping">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First name" required />
                  <Field label="Last name" required />
                </div>
                <Field label="Address" required />
                <div className="grid sm:grid-cols-3 gap-4">
                  <Field label="City" required />
                  <Field label="ZIP" required />
                  <Field label="Country" defaultValue="United States" required />
                </div>
              </Section>

              <Section title="03 / Payment">
                <div className="glass rounded-xl p-4 flex items-center gap-3 mb-4">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Credit / Debit Card</span>
                </div>
                <Field label="Card number" placeholder="4242 4242 4242 4242" required />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Expiry" placeholder="MM/YY" required />
                  <Field label="CVC" placeholder="123" required />
                </div>
              </Section>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest py-5 rounded-full hover:scale-[1.01] transition glow-electric flex items-center justify-center gap-2"
              >
                <Lock className="h-4 w-4" /> Place order · ${total.toFixed(2)}
              </button>
            </form>

            <aside className="glass-strong rounded-2xl p-6 h-fit lg:sticky lg:top-28">
              <h2 className="font-display text-2xl mb-5 tracking-wider">ORDER</h2>
              <div className="space-y-3 mb-5 max-h-72 overflow-auto">
                {items.map((i) => (
                  <div key={i.id} className="flex gap-3 items-center">
                    <div className="h-14 w-14 rounded-lg bg-titan-gray overflow-hidden shrink-0">
                      <img src={i.product.image} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{i.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty {i.quantity}{i.size && ` · ${i.size}`}</p>
                    </div>
                    <p className="text-sm font-bold">${(i.product.price * i.quantity).toFixed(0)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "FREE" : `$${shipping}`}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="flex justify-between items-baseline pt-3 border-t border-white/10 mt-3">
                  <span className="font-display text-xl">TOTAL</span>
                  <span className="font-display text-3xl text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2"><Truck className="h-4 w-4" /> Delivery in 2-4 days</p>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      <h3 className="font-display text-xl tracking-wider text-primary">{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input {...rest} className="mt-1 w-full bg-titan-gray/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
    </label>
  );
}

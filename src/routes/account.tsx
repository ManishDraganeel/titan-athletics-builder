import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Package, Heart, MapPin, LogOut, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Account — Titan Athletics" }] }),
  component: AccountPage,
});

const tabs = [
  { id: "orders", label: "Orders", Icon: Package },
  { id: "wishlist", label: "Wishlist", Icon: Heart },
  { id: "addresses", label: "Addresses", Icon: MapPin },
  { id: "settings", label: "Settings", Icon: Settings },
] as const;

const orders = [
  { id: "TTN-49281", date: "May 04, 2026", total: 318, status: "Delivered", items: 2 },
  { id: "TTN-48104", date: "Apr 18, 2026", total: 189, status: "Shipped", items: 1 },
  { id: "TTN-47003", date: "Mar 29, 2026", total: 549, status: "Delivered", items: 3 },
];

function AccountPage() {
  const [tab, setTab] = useState<typeof tabs[number]["id"]>("orders");

  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-5 mb-12">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary grid place-items-center">
              <User className="h-10 w-10 text-titan" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary">Titan Member · Tier 02</p>
              <h1 className="font-display text-5xl">WELCOME BACK, <span className="text-primary">CHAMPION</span></h1>
              <p className="text-sm text-muted-foreground">2,480 Titan points · $124 lifetime savings</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="space-y-2">
              {tabs.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition ${tab === id ? "bg-primary text-primary-foreground" : "glass hover:bg-white/10"}`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider glass hover:bg-destructive/20 hover:text-destructive transition mt-6">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </aside>

            <section className="lg:col-span-3">
              {tab === "orders" && (
                <div className="space-y-3">
                  {orders.map((o) => (
                    <div key={o.id} className="glass rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 hover:border-primary/40 transition">
                      <div>
                        <p className="font-display text-2xl tracking-wider">{o.id}</p>
                        <p className="text-xs text-muted-foreground">{o.date} · {o.items} items</p>
                      </div>
                      <span className={`text-xs uppercase tracking-widest px-3 py-1 rounded-full ${o.status === "Delivered" ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"}`}>{o.status}</span>
                      <p className="font-display text-2xl text-primary">${o.total}</p>
                      <button className="text-xs uppercase tracking-wider font-bold hover:text-primary">View →</button>
                    </div>
                  ))}
                </div>
              )}
              {tab === "wishlist" && (
                <div className="glass rounded-2xl p-12 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">Your wishlist is empty.</p>
                  <Link to="/shop" className="text-primary underline text-sm">Find your gear</Link>
                </div>
              )}
              {tab === "addresses" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-6">
                    <p className="text-xs uppercase tracking-widest text-primary mb-2">Default · Shipping</p>
                    <p className="font-semibold">Champion User</p>
                    <p className="text-sm text-muted-foreground mt-1">247 Performance Ave<br />Brooklyn, NY 11201<br />United States</p>
                  </div>
                  <button className="glass rounded-2xl p-6 border-dashed text-muted-foreground hover:text-primary hover:border-primary transition">
                    + Add new address
                  </button>
                </div>
              )}
              {tab === "settings" && (
                <div className="glass rounded-2xl p-6 space-y-4 max-w-xl">
                  <h3 className="font-display text-2xl tracking-wider">PROFILE</h3>
                  <Field label="Display name" defaultValue="Champion" />
                  <Field label="Email" type="email" defaultValue="champion@titan.com" />
                  <button className="bg-primary text-primary-foreground font-bold uppercase tracking-widest px-6 py-3 rounded-full text-sm">Save changes</button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input {...rest} className="mt-1 w-full bg-titan-gray/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" />
    </label>
  );
}

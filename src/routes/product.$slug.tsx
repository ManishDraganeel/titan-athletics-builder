import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ShoppingBag, Heart, Truck, Shield, RotateCcw, Check, Minus, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProduct, relatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product, related: relatedProducts(product) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Titan Athletics` },
      { name: "description", content: loaderData?.product.description ?? "" },
      { property: "og:title", content: loaderData?.product.name ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-titan">
      <div className="text-center">
        <h1 className="font-display text-7xl mb-4">PRODUCT NOT FOUND</h1>
        <Link to="/shop" className="text-primary underline">Back to shop</Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product, qty, { size, color });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <div className="bg-titan min-h-screen">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/shop" className="hover:text-primary">Shop</Link> / <span className="text-primary">{product.category}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl glass">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-secondary text-titan text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[product.image, product.image, product.image, product.image].map((src, i) => (
                  <div key={i} className="aspect-square rounded-lg glass overflow-hidden cursor-pointer hover:border-primary transition">
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{product.category} · {product.sku}</p>
              <h1 className="font-display text-5xl md:text-6xl leading-none mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-muted"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} · {product.reviews} reviews</span>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-5xl text-primary">${product.price}</span>
                {product.oldPrice && <span className="text-xl text-muted-foreground line-through">${product.oldPrice}</span>}
                {discount > 0 && <span className="bg-destructive text-white text-xs font-bold px-2 py-1 rounded">-{discount}%</span>}
              </div>

              <p className="text-foreground/70 mb-8 leading-relaxed">{product.description}</p>

              {/* Color */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest mb-3">Color: <span className="text-primary">{color}</span></p>
                <div className="flex gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.name)}
                      className={`h-10 w-10 rounded-full border-2 transition ${color === c.name ? "border-primary scale-110" : "border-white/20"}`}
                      style={{ background: c.hex }}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-widest">Size</p>
                  <button className="text-xs text-primary hover:underline">Size guide</button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-3 rounded-lg text-sm font-bold transition ${size === s ? "bg-primary text-primary-foreground" : "glass hover:bg-white/10"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Qty + add */}
              <div className="flex gap-3 mb-6">
                <div className="flex items-center glass rounded-full">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-12 w-12 grid place-items-center hover:text-primary"><Minus className="h-4 w-4" /></button>
                  <span className="w-10 text-center font-bold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="h-12 w-12 grid place-items-center hover:text-primary"><Plus className="h-4 w-4" /></button>
                </div>
                <button
                  onClick={onAdd}
                  className="flex-1 bg-primary text-primary-foreground font-bold uppercase tracking-wider py-4 rounded-full hover:scale-[1.02] transition flex items-center justify-center gap-2 glow-electric"
                >
                  {added ? <><Check className="h-5 w-5" /> Added to Bag</> : <><ShoppingBag className="h-5 w-5" /> Add to Bag · ${(product.price * qty).toFixed(0)}</>}
                </button>
                <button className="glass rounded-full h-14 w-14 grid place-items-center hover:text-primary transition">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-secondary mb-8">⚡ {product.stock} in stock · Ships in 24h</p>

              {/* Trust */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { Icon: Truck, label: "Free shipping over $100" },
                  { Icon: RotateCcw, label: "30-day returns" },
                  { Icon: Shield, label: "2-year warranty" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="glass rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-[10px] uppercase tracking-wider text-foreground/70">{label}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="glass rounded-xl p-6">
                <h3 className="font-display text-2xl mb-4 tracking-wider">KEY FEATURES</h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-24">
              <h2 className="font-display text-4xl md:text-5xl mb-10">YOU MIGHT ALSO <span className="text-primary">CRUSH</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {related.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

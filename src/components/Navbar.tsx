import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/categories", label: "Categories" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center group">
          <img src="/logo.png" alt="Titan Athletics" className="h-12 sm:h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm uppercase tracking-wider font-semibold text-foreground/80 hover:text-primary transition-colors group"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:grid place-items-center h-10 w-10 rounded-full hover:bg-white/5 transition" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden sm:grid place-items-center h-10 w-10 rounded-full hover:bg-white/5 transition" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
          </button>
          <Link to="/cart" className="grid place-items-center h-10 w-10 rounded-full hover:bg-white/5 transition relative" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-secondary text-[10px] font-bold text-titan grid place-items-center">{count}</span>
            )}
          </Link>
          <Link to="/account" className="hidden sm:grid place-items-center h-10 w-10 rounded-full hover:bg-white/5 transition" aria-label="Account">
            <User className="h-5 w-5" />
          </Link>
          <button
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-white/5 transition"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-strong border-t border-white/10 mt-3">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-wider hover:text-primary transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

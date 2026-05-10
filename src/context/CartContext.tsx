import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
};

type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty?: number, opts?: { size?: string; color?: string }) => void;
  remove: (id: string) => void;
  update: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "titan_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add: CartCtx["add"] = (p, qty = 1, opts) => {
    const key = `${p.id}-${opts?.size ?? ""}-${opts?.color ?? ""}`;
    setItems((cur) => {
      const i = cur.findIndex((c) => c.id === key);
      if (i >= 0) {
        const next = [...cur];
        next[i] = { ...next[i], quantity: next[i].quantity + qty };
        return next;
      }
      return [...cur, { id: key, product: p, quantity: qty, size: opts?.size, color: opts?.color }];
    });
  };

  const value = useMemo<CartCtx>(
    () => ({
      items,
      add,
      remove: (id) => setItems((c) => c.filter((x) => x.id !== id)),
      update: (id, qty) =>
        setItems((c) => c.map((x) => (x.id === id ? { ...x, quantity: Math.max(1, qty) } : x))),
      clear: () => setItems([]),
      count: items.reduce((s, i) => s + i.quantity, 0),
      subtotal: items.reduce((s, i) => s + i.quantity * i.product.price, 0),
    }),
    [items],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}

import shoe from "@/assets/product-shoe.jpg";
import jacket from "@/assets/product-jacket.jpg";
import gym from "@/assets/product-gym.jpg";
import cricket from "@/assets/product-cricket.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  badge?: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  stock: number;
  sku: string;
};

const mk = (p: Partial<Product> & Pick<Product, "id" | "name" | "category" | "price" | "image">): Product => ({
  slug: p.name!.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  rating: 4.7,
  reviews: 128,
  description:
    "Engineered in the Titan performance lab and field-tested by elite athletes. Premium materials, aggressive geometry, and pro-grade construction deliver a competition-ready edge in every session.",
  features: [
    "Pro-grade construction",
    "Lightweight breathable build",
    "Engineered for elite performance",
    "Sweat-wicking & quick-dry",
    "Lifetime craftsmanship guarantee",
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Stealth Black", hex: "#0A0A0A" },
    { name: "Electric Blue", hex: "#00BFFF" },
    { name: "Neon Lime", hex: "#A3FF12" },
  ],
  stock: 24,
  sku: `TTN-${p.id!.padStart(4, "0")}`,
  ...p,
});

export const products: Product[] = [
  mk({ id: "1", name: "Velocity Pro Runner X1", category: "Running", price: 189, oldPrice: 240, rating: 4.9, reviews: 412, image: shoe, badge: "New" }),
  mk({ id: "2", name: "Apex Performance Jacket", category: "Training", price: 129, oldPrice: 159, rating: 4.7, reviews: 287, image: jacket, badge: "Hot" }),
  mk({ id: "3", name: "Titan Forged Dumbbell 20kg", category: "Gym", price: 89, rating: 4.8, reviews: 156, image: gym, sizes: ["10kg", "15kg", "20kg", "25kg"] }),
  mk({ id: "4", name: "Striker Pro Cricket Bat", category: "Cricket", price: 219, oldPrice: 279, rating: 4.9, reviews: 198, image: cricket, badge: "Pro", sizes: ["SH", "Harrow", "Youth"] }),
  mk({ id: "5", name: "Stealth Trainer Lite", category: "Running", price: 149, oldPrice: 189, rating: 4.6, reviews: 321, image: shoe }),
  mk({ id: "6", name: "Phantom Zip Hoodie", category: "Apparel", price: 99, rating: 4.8, reviews: 245, image: jacket, badge: "New" }),
  mk({ id: "7", name: "Iron Core Kettlebell", category: "Gym", price: 69, oldPrice: 89, rating: 4.7, reviews: 142, image: gym, sizes: ["8kg", "12kg", "16kg", "24kg"] }),
  mk({ id: "8", name: "Champion Edition Bat", category: "Cricket", price: 299, rating: 5.0, reviews: 89, image: cricket, badge: "Elite" }),
  mk({ id: "9", name: "Endurance Pro Trail", category: "Running", price: 179, rating: 4.7, reviews: 203, image: shoe, badge: "Trail" }),
  mk({ id: "10", name: "Titanium Compression Tee", category: "Apparel", price: 59, oldPrice: 79, rating: 4.6, reviews: 318, image: jacket }),
  mk({ id: "11", name: "Ironclad Bench Pro", category: "Gym", price: 449, rating: 4.9, reviews: 76, image: gym, badge: "Pro" }),
  mk({ id: "12", name: "Power Strike Helmet", category: "Cricket", price: 159, rating: 4.8, reviews: 112, image: cricket }),
  mk({ id: "13", name: "Slipstream Running Shorts", category: "Running", price: 49, rating: 4.5, reviews: 287, image: jacket }),
  mk({ id: "14", name: "Apex Tech Track Pants", category: "Apparel", price: 89, oldPrice: 119, rating: 4.7, reviews: 195, image: jacket, badge: "Sale" }),
  mk({ id: "15", name: "Battle Rope Pro 12m", category: "Gym", price: 79, rating: 4.6, reviews: 98, image: gym }),
  mk({ id: "16", name: "Pro Series Batting Gloves", category: "Cricket", price: 79, rating: 4.7, reviews: 134, image: cricket }),
  mk({ id: "17", name: "Hyperdrive Marathon", category: "Running", price: 219, oldPrice: 259, rating: 4.9, reviews: 412, image: shoe, badge: "Elite" }),
  mk({ id: "18", name: "Stealth Windbreaker", category: "Apparel", price: 119, rating: 4.6, reviews: 156, image: jacket }),
  mk({ id: "19", name: "Titan Power Rack", category: "Gym", price: 899, rating: 4.9, reviews: 54, image: gym, badge: "Pro" }),
  mk({ id: "20", name: "Velocity Wicketkeeper Pads", category: "Cricket", price: 189, rating: 4.8, reviews: 67, image: cricket }),
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug || p.id === slug);
export const relatedProducts = (p: Product, n = 4) =>
  products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, n);

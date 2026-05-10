import shoe from "@/assets/product-shoe.jpg";
import jacket from "@/assets/product-jacket.jpg";
import gym from "@/assets/product-gym.jpg";
import cricket from "@/assets/product-cricket.jpg";
import type { Product } from "@/components/ProductCard";

export const products: Product[] = [
  { id: "1", name: "Velocity Pro Runner X1", category: "Running", price: 189, oldPrice: 240, rating: 4.9, image: shoe, badge: "New" },
  { id: "2", name: "Apex Performance Jacket", category: "Training", price: 129, oldPrice: 159, rating: 4.7, image: jacket, badge: "Hot" },
  { id: "3", name: "Titan Forged Dumbbell 20kg", category: "Gym", price: 89, rating: 4.8, image: gym },
  { id: "4", name: "Striker Pro Cricket Bat", category: "Cricket", price: 219, oldPrice: 279, rating: 4.9, image: cricket, badge: "Pro" },
  { id: "5", name: "Stealth Trainer Lite", category: "Running", price: 149, oldPrice: 189, rating: 4.6, image: shoe },
  { id: "6", name: "Phantom Zip Hoodie", category: "Apparel", price: 99, rating: 4.8, image: jacket, badge: "New" },
  { id: "7", name: "Iron Core Kettlebell", category: "Gym", price: 69, oldPrice: 89, rating: 4.7, image: gym },
  { id: "8", name: "Champion Edition Bat", category: "Cricket", price: 299, rating: 5.0, image: cricket, badge: "Elite" },
];

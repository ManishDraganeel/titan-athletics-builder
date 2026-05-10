import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingProducts from "@/components/TrendingProducts";
import FlashSale from "@/components/FlashSale";
import AthleteShowcase from "@/components/AthleteShowcase";
import BrandMarquee from "@/components/BrandMarquee";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Titan Athletics — Unleash the Titan Within" },
      { name: "description", content: "Elite performance gear engineered for champions. Shop premium athletic apparel, footwear and equipment." },
      { property: "og:title", content: "Titan Athletics — Unleash the Titan Within" },
      { property: "og:description", content: "Elite performance gear engineered for champions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-titan text-foreground">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <Categories />
        <TrendingProducts />
        <FlashSale />
        <AthleteShowcase />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

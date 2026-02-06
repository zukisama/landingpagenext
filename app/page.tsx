import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSlider from "@/components/services/ServicesSlider";
import PortfolioSlider from "@/components/portfolio/PortfolioSlider";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesSlider />
        <PortfolioSlider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

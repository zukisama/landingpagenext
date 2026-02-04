import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/services/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
    </>
  );
}

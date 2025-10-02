import Bestselling from "@/components/Bestselling";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <WhyChoose />
      <Bestselling />
      <Experience />
      <Materials />
      <Testimonials />
      <Footer />
    </div>
  );
}

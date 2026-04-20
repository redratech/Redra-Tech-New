import { Navbar } from "@/components/redra/Navbar";
import { Hero } from "@/components/redra/Hero";
import { About } from "@/components/redra/About";
import { Services } from "@/components/redra/Services";
import { WhyUs } from "@/components/redra/WhyUs";
import { Testimonials } from "@/components/redra/Testimonials";
import { Pricing } from "@/components/redra/Pricing";
import { Contact } from "@/components/redra/Contact";
import { Footer } from "@/components/redra/Footer";
import { BackToTop } from "@/components/redra/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

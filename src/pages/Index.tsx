import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GlobalOperations from "@/components/GlobalOperations";
import FindUsOn from "@/components/FindUsOn";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GlobalOperations />
        <FindUsOn />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
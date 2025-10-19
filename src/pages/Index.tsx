import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GlobalOperations from "@/components/GlobalOperations";
import GlobalCertifications from "@/components/GlobalCertifications";
import FindUsOn from "@/components/FindUsOn";
import CookiesBanner from "@/components/CookiesBanner";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GlobalOperations className="bg-blue-800" />
        <GlobalCertifications />
        <FindUsOn />
      </main>
      <Footer />
      <CookiesBanner />
    </div>;
};
export default Index;
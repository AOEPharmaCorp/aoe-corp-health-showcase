import ProductSearchAndDisplay from "@/components/ProductSearchAndDisplay";
import ProductsHero from "@/components/ProductsHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProductsHero />
      <ProductSearchAndDisplay />
      <Footer />
    </div>
  );
};

export default Products;
import ProductCatalogEnhanced from "@/components/ProductCatalogEnhanced";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductCatalogEnhanced />
      <QuoteRequestForm />
      <Footer />
    </div>
  );
};

export default Products;
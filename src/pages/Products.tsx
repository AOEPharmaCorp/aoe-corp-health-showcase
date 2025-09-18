import ProductCatalog from "@/components/ProductCatalog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductCatalog />
      <Footer />
    </div>
  );
};

export default Products;
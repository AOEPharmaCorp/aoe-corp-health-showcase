import ProductSearchAndDisplay from "@/components/ProductSearchAndDisplay";
import TherapeuticExpertise from "@/components/TherapeuticExpertise";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TherapeuticExpertise />
      <ProductSearchAndDisplay />
      <QuoteRequestForm />
      <Footer />
    </div>
  );
};

export default Products;
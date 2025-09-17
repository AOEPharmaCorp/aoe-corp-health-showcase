import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import FindUsOn from "@/components/FindUsOn";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactForm />
        <FindUsOn />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
import { Building2, Mail, MapPin, Phone, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import companyLogo from "@/assets/company-logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={companyLogo} 
              alt="APC AOE Pharma Corporation" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/products" className="text-foreground hover:text-primary transition-colors font-medium">
                Products
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>
            
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+971-488-29480</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@aoepharma.com</span>
              </div>
            </div>
            
            <Button 
              asChild 
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white"
            >
              <a href="/contact">Get Quote</a>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background">
                <nav className="flex flex-col gap-6 mt-6">
                  <a href="/" className="text-lg font-medium text-foreground hover:text-primary">
                    Home
                  </a>
                  <a href="/products" className="text-lg font-medium text-foreground hover:text-primary">
                    Products
                  </a>
                  <a href="/contact" className="text-lg font-medium text-foreground hover:text-primary">
                    Contact
                  </a>
                  <div className="pt-4 border-t border-border">
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+971-488-29480</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>info@aoepharma.com</span>
                      </div>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
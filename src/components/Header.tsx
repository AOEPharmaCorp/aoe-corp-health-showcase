import { Building2, Mail, MapPin, Phone, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import companyLogo from "@/assets/apc-logo-new.png";
const Header = () => {
  return <header className="bg-white shadow-corporate sticky top-0 z-50 border-b border-corporate-gray">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src={companyLogo} alt="APC AOE Pharma Corporation" className="h-16 w-auto object-contain" />
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="nav-link text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider">
                Home
              </Link>
              <Link to="/about" className="nav-link text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider">
                About Us
              </Link>
              <Link to="/products" className="nav-link text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider">
                Products
              </Link>
              <Link to="/quality" className="nav-link text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider">
                Quality & Compliance
              </Link>
              <Link to="/careers" className="nav-link text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider">
                Careers
              </Link>
              <Link to="/contact" className="nav-link text-foreground hover:text-primary font-medium text-sm uppercase tracking-wider">
                Contact
              </Link>
            </nav>
            
            
            
            <Button asChild className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-white font-medium tracking-wide shadow-corporate">
              <Link to="/contact">Get Quote</Link>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background">
                <nav className="flex flex-col gap-6 mt-6">
                  <Link to="/" className="text-lg font-medium text-foreground hover:text-primary">
                    Home
                  </Link>
                  <Link to="/about" className="text-lg font-medium text-foreground hover:text-primary">
                    About Us
                  </Link>
                  <Link to="/products" className="text-lg font-medium text-foreground hover:text-primary">
                    Products
                  </Link>
                  <Link to="/quality" className="text-lg font-medium text-foreground hover:text-primary">
                    Quality & Compliance
                  </Link>
                  <Link to="/careers" className="text-lg font-medium text-foreground hover:text-primary">
                    Careers
                  </Link>
                  <Link to="/contact" className="text-lg font-medium text-foreground hover:text-primary">
                    Contact
                  </Link>
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
    </header>;
};
export default Header;
import { Building2, Mail, MapPin, Phone, Globe, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import companyLogo from "@/assets/apc-logo-new.png";
import sapAribaLogo from "@/assets/sap-ariba-logo.png";
import zakupivliLogo from "@/assets/zakupivli-pro-logo.png";
import prozorroLogo from "@/assets/prozorro-logo.svg";
const Footer = () => {
  return <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <img src={companyLogo} alt="AOE Pharma Corporation" className="h-16 w-auto" />
            <p className="max-w-md leading-relaxed text-muted-foreground">Leading global provider of high-quality, affordable healthcare solutions. We are committed to enhancing quality of life through innovative pharmaceutical products and strategic services.</p>
            <div className="text-sm text-accent font-medium">
              Rising Strong in Global Healthcare Since 2018
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Trade Centre 1, Sheikh Zayed Road</p>
                  <p className="text-sm text-muted-foreground">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-muted-foreground">Operations</p>
                  <p className="text-sm text-muted-foreground">Asia, GCC, West Africa, Eastern EU, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">+971-488-29480</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors">Products</Link>
              <Link to="/quality" className="block text-muted-foreground hover:text-primary transition-colors">Quality & Compliance</Link>
              <Link to="/careers" className="block text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        
        {/* Connect With Us Section - Horizontal */}
        <div className="border-t border-border pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4 flex-wrap">
              <h4 className="text-sm font-semibold text-foreground">Connect With Us:</h4>
              <a href="https://www.linkedin.com/company/aoe-pharma-corporation-llc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="text-sm">Instagram</span>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-sm font-semibold text-foreground">Find Us On:</span>
              <a href="https://service.ariba.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <img src={sapAribaLogo} alt="SAP Ariba" className="h-6 w-auto object-contain" />
              </a>
              <a href="https://zakupivli.pro/en" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <img src={zakupivliLogo} alt="Zakupivli" className="h-6 w-auto object-contain" />
              </a>
              <a href="https://prozorro.gov.ua/en" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <img src={prozorroLogo} alt="ProZorro" className="h-6 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 AOE Pharma Corporation. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Quality Assured</span>
              <span>•</span>
              <span>Fully compliant with local regulatory requirements*</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
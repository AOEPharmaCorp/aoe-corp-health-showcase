import { Building2, Mail, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import companyLogo from "@/assets/apc-logo-new.png";
const Footer = () => {
  return <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12 bg-white">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <img src={companyLogo} alt="AOE Pharma Corporation" className="h-16 w-auto" />
            <p className="max-w-md leading-relaxed text-gray-400">Leading global provider of high-quality, affordable healthcare solutions. We are committed to enhancing quality of life through innovative pharmaceutical products and strategic services, with a strong presence across Asia, Western Africa, Eastern Europe, the UAE, and the wider GCC region.</p>
            <div className="text-sm text-accent font-medium">
              Rising Strong in Global Healthcare Since 2018
            </div>
          </div>
          
          <div className="space-y-6 bg-white">
            <h4 className="text-lg font-semibold text-gray-400">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Trade Centre 1, Sheikh Zayed Road</p>
                  <p className="text-sm text-gray-400">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Operations</p>
                  <p className="text-sm text-gray-400">Asia, GCC, West Africa, Eastern EU, UAE</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-zinc-400">+971-488-29480</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-zinc-400">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-primary transition-colors">About Us</Link>
              <Link to="/products" className="block text-gray-400 hover:text-primary transition-colors">Products</Link>
              <Link to="/quality" className="block text-gray-400 hover:text-primary transition-colors">Quality & Compliance</Link>
              <Link to="/careers" className="block text-gray-400 hover:text-primary transition-colors">Careers</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        
        {/* Global Manufacturing Accreditations */}
        
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 AOE Pharma Corporation. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <span>Quality Assured</span>
              <span>•</span>
              <span className="text-gray-400 px-0 my-0 mx-0 py-[11px]">Fully compliant with local regulatory requirements*</span>
              <span>•</span>
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
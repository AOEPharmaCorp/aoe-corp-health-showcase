import { Building2, Mail, MapPin, Phone, Globe } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";
const Footer = () => {
  return <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img src={companyLogo} alt="APC AOE Pharma Corporation" className="h-20 w-auto object-contain filter contrast-125" />
            </div>
            <p className="text-white/80 max-w-md leading-relaxed">Leading global provider of high-quality, affordable healthcare solutions. We are committed to enhancing quality of life through innovative pharmaceutical products and strategic services, with a strong presence across Asia, Western Africa, Eastern Europe, the UAE, and the wider GCC region.</p>
            <div className="text-sm text-accent font-medium">
              Rising Strong in Global Healthcare Since 2018
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white/90">Trade Centre 1, Sheikh Zayed Road</p>
                  <p className="text-sm text-white/70">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white/90">Operations</p>
                  <p className="text-sm text-white/70">Asia, GCC, West Africa, Eastern EU, UAE</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white/90">+971-488-29480</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Key Areas</h4>
            <div className="space-y-2 text-white/80">
              <p>• Pharmaceutical Products</p>
              <p>• Specialty Medicines</p>
              <p>• Generic Medications</p>
              <p>• Active Pharmaceutical Ingredients</p>
              <p>• Cosmeceuticals</p>
              <p>• Research & Development</p>
              <p>• Quality Control</p>
              <p>• Regulatory Compliance</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 AOE Pharma Corporation. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <span>Quality Assured</span>
              <span>•</span>
              <span>EU, USFDA, WHO GMP Compliant Facilities</span>
              <span>•</span>
              <span>Globally Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
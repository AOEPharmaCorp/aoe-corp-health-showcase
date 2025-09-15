import { Building2, Mail, MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <Building2 className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-2xl font-bold">AOE</h3>
                <p className="text-sm font-medium text-accent">PHARMA CORPORATION</p>
              </div>
            </div>
            <p className="text-white/80 max-w-md leading-relaxed">
              Leading global provider of high-quality, affordable healthcare solutions. 
              Committed to enhancing quality of life through innovative pharmaceutical products 
              and services across Asia, GCC, and MENA regions.
            </p>
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
                  <p className="text-sm text-white/70">Asia, GCC, MENA</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white/90">info@aoepharma.ae</p>
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
    </footer>
  );
};

export default Footer;
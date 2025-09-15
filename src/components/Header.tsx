import { Building2, Mail, MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-soft">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">APC AOE</h1>
              <p className="text-sm font-medium text-primary">PHARMA CORPORATION</p>
            </div>
          </div>
          
          <nav className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>India & UAE | Asia, GCC, MENA</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Global Operations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@aoepharma.com</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
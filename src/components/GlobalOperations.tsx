import { MapPin, Building, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
const GlobalOperations = () => {
  return <section className="py-20 text-white bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Global Operations & Markets
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">Strategically positioned across key regions to serve diverse healthcare needs with offices in India &amp; UAE and operations spanning Asia, GCC, West Africa, Eastern EU and the UAE.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
            <CardContent className="p-8 text-center">
              <Building className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-50">Regional Offices</h3>
              <p className="text-2xl font-bold text-accent mb-1">2+</p>
              <p className="text-sm text-white/70">India & UAE</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
            <CardContent className="p-8 text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-50">Market Presence</h3>
              <p className="text-2xl font-bold text-accent mb-1">3</p>
              <p className="text-sm text-white/70">Major Regions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
            <CardContent className="p-8 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-50">Healthcare Impact</h3>
              <p className="text-2xl font-bold text-accent mb-1">1M+</p>
              <p className="text-sm text-white/70">Patients Served</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
            <CardContent className="p-8 text-center">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-50">Growth</h3>
              <p className="text-2xl font-bold text-accent mb-1">2018</p>
              <p className="text-sm text-white/70">Since Establishment</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold">Asia Pacific</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• Strategic manufacturing hub in India</li>
              <li>• Research & development centers</li>
              <li>• Supply chain optimization</li>
              <li>• Regulatory compliance across markets</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold">GCC Region</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• UAE operational headquarters</li>
              <li>• Distribution network expansion</li>
              <li>• Partnership development</li>
              <li>• Market penetration strategies</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold">MENA Markets</h3>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• Emerging market recognition</li>
              <li>• Healthcare accessibility programs</li>
              <li>• Local partnership initiatives</li>
              <li>• Affordable medication solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default GlobalOperations;
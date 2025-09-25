import { Shield, Globe, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
const GlobalCertifications = () => {
  const certifications = ["WHO-GMP", "ISO 9001:2015", "ISO 14001:2015", "GLP", "ANVISA", "NAFDAC", "FDA", "PIC/S", "TFDA", "DPML", "BoMRA", "SFDA", "INVIMA", "UAE GMP", "UGANDA GMP", "RWANDA GMP", "EU GMP", "Colombia Potencia de la Vida GMP"];
  const regions = [{
    name: "Brazil",
    flag: "🇧🇷"
  }, {
    name: "Nigeria",
    flag: "🇳🇬"
  }, {
    name: "Ghana",
    flag: "🇬🇭"
  }, {
    name: "Peru",
    flag: "🇵🇪"
  }, {
    name: "Cambodia",
    flag: "🇰🇭"
  }, {
    name: "Iran",
    flag: "🇮🇷"
  }, {
    name: "Saudi Arabia",
    flag: "🇸🇦"
  }, {
    name: "Colombia",
    flag: "🇨🇴"
  }, {
    name: "Tanzania",
    flag: "🇹🇿"
  }, {
    name: "Uganda",
    flag: "🇺🇬"
  }, {
    name: "Rwanda",
    flag: "🇷🇼"
  }, {
    name: "UAE",
    flag: "🇦🇪"
  }];
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
            <Globe className="w-10 h-10 text-primary" />
            Global Quality Standards You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            At AOE Pharma, we deliver pharmaceutical products meeting the highest quality, safety, 
            and regulatory standards via globally accredited facilities.
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Key Regulatory Accreditations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
              {certifications.map((cert, index) => <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-3 text-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 bg-slate-300">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xs font-medium text-foreground">{cert}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>

        {/* Visual World Map Style */}
        

        {/* Callout Quote */}
        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <blockquote className="text-xl italic text-foreground mb-4">
              "We ensure every product is manufactured with integrity, precision, and full regulatory 
              compliance—because your trust is our greatest asset."
            </blockquote>
            <p className="text-sm text-muted-foreground font-medium">
              — AOE Pharma Corporation Quality Commitment
            </p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default GlobalCertifications;
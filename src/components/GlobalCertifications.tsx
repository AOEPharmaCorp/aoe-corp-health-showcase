import { Shield, Globe, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

// Import regulatory logos
import whoGmpLogo from "@/assets/regulatory/who-gmp.jpg";
import anvisaLogo from "@/assets/regulatory/anvisa.jpg";
import glpLogo from "@/assets/regulatory/glp.png";
import tfdaLogo from "@/assets/regulatory/tfda.jpg";
import dpmlLogo from "@/assets/regulatory/dpml.png";
import bomraLogo from "@/assets/regulatory/bomra.png";
import uaeGmpLogo from "@/assets/regulatory/uae-gmp.png";
import picsIranLogo from "@/assets/regulatory/pics-iran.png";
import peruLogo from "@/assets/regulatory/peru.jpg";
import bulgariaLogo from "@/assets/regulatory/bulgaria.png";
import fdaPhilippinesLogo from "@/assets/regulatory/fda-philippines.jpg";
import colombiaPotenciaLogo from "@/assets/regulatory/colombia-potencia.png";
import invimaColombiaLogo from "@/assets/regulatory/invima-colombia.png";
import cambodiaGmpLogo from "@/assets/regulatory/cambodia-gmp.png";
import fdaGhanaLogo from "@/assets/regulatory/fda-ghana.png";
import iso9001Logo from "@/assets/regulatory/iso-9001.png";
import iso14001Logo from "@/assets/regulatory/iso-14001.jpg";
import rwandaGmpLogo from "@/assets/regulatory/rwanda-gmp.jpeg";
import nafdacNigeriaLogo from "@/assets/regulatory/nafdac-nigeria.jpg";
import sfdaLogo from "@/assets/regulatory/sfda.png";
const GlobalCertifications = () => {
  const certifications = [{
    name: "WHO-GMP",
    logo: whoGmpLogo
  }, {
    name: "PIC/S",
    logo: picsIranLogo
  }, {
    name: "ANVISA",
    logo: anvisaLogo
  }, {
    name: "GLP",
    logo: glpLogo
  }, {
    name: "TFDA",
    logo: tfdaLogo
  }, {
    name: "DPML",
    logo: dpmlLogo
  }, {
    name: "BoMRA",
    logo: bomraLogo
  }, {
    name: "UAE GMP",
    logo: uaeGmpLogo
  }, {
    name: "Peru DIGEMID",
    logo: peruLogo
  }, {
    name: "Bulgaria GMP",
    logo: bulgariaLogo
  }, {
    name: "ISO 9001:2015",
    logo: iso9001Logo
  }, {
    name: "ISO 14001:2015",
    logo: iso14001Logo
  }, {
    name: "NAFDAC Nigeria",
    logo: nafdacNigeriaLogo
  }, {
    name: "FDA Philippines",
    logo: fdaPhilippinesLogo
  }, {
    name: "FDA Ghana",
    logo: fdaGhanaLogo
  }, {
    name: "SFDA Saudi Arabia",
    logo: sfdaLogo
  }, {
    name: "INVIMA Colombia",
    logo: invimaColombiaLogo
  }, {
    name: "Colombia GMP",
    logo: colombiaPotenciaLogo
  }, {
    name: "Cambodia GMP",
    logo: cambodiaGmpLogo
  }, {
    name: "Rwanda GMP",
    logo: rwandaGmpLogo
  }];
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
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3 text-blue-800">
            
            Global Quality Standards You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">At AOE Pharma, we manufacture pharmaceutical products in facilities certified by leading global health authorities. Our commitment to quality, safety, and regulatory excellence is backed by a broad portfolio of international accreditations.</p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-blue-800">
              <CheckCircle className="w-6 h-6 text-primary" />
              Key Regulatory Accreditations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
              {certifications.map((cert, index) => <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-3 text-center">
                    {cert.logo ? <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                        <img src={cert.logo} alt={`${cert.name} logo`} className="max-w-full max-h-full object-contain" />
                      </div> : <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 bg-primary/10">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>}
                    <p className="text-xs font-medium text-foreground">{cert.name}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>

        {/* Visual World Map Style */}
        

        {/* Callout Quote */}
        
      </div>
    </section>;
};
export default GlobalCertifications;
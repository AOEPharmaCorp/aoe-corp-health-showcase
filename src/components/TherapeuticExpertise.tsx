import { Microscope, Pill, Dna, Syringe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
const TherapeuticExpertise = () => {
  const segments = [{
    icon: Dna,
    title: "Oncology",
    description: "Advanced cancer therapeutics with rigorous quality standards",
    certifications: ["EU GMP", "ANVISA", "DIGEMED", "COFEPRIS"],
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  }, {
    icon: Pill,
    title: "Generics & Antiretrovirals",
    description: "Affordable, high-quality medications for global access",
    certifications: ["SFDA", "ANVISA", "DIGEMED", "BoMRA"],
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  }, {
    icon: Microscope,
    title: "Beta-Lactam Products",
    description: "Specialized antibiotic manufacturing with contamination control",
    certifications: ["SFDA", "ANVISA"],
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  }, {
    icon: Syringe,
    title: "Cephalosporins",
    description: "Injectable antibiotics for critical care applications",
    certifications: ["EU GMP", "UAE", "INVIMA", "NAFDAC", "TMDA", "IRAQ", "MCAZ"],
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }];
  return <section className="py-16 bg-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3 text-neutral-50">
            
            Therapeutic Expertise Across Key Segments
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Specialized manufacturing capabilities across critical therapeutic areas with 
            comprehensive regulatory approvals worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => {
          const IconComponent = segment.icon;
          return <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${segment.borderColor} border-2`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${segment.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${segment.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{segment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {segment.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                      Regulatory Approvals:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {segment.certifications.map((cert, certIndex) => <Badge key={certIndex} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>)}
                    </div>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        
      </div>
    </section>;
};
export default TherapeuticExpertise;
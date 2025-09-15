import { ArrowLeft, Pill, Heart, Stethoscope, FlaskConical, Microscope, Shield, Activity } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const ProductCatalog = () => {
  const productCategories = [
    {
      title: "Pharmaceutical Products",
      icon: Pill,
      percentage: 45,
      products: [
        "Specialty Medicines",
        "Generic Medications", 
        "Over-the-Counter Medications",
        "Active Pharmaceutical Ingredients"
      ],
      description: "Comprehensive pharmaceutical solutions for various therapeutic areas"
    },
    {
      title: "Anti Retro Viral Medications", 
      icon: Shield,
      percentage: 33,
      products: [
        "HIV Treatment Medications",
        "Antiviral Therapies",
        "Combination Therapies",
        "Research Collaborations"
      ],
      description: "Advanced antiviral treatments and therapeutic solutions"
    },
    {
      title: "FMCG & Cosmeceuticals",
      icon: Heart,
      percentage: 22,
      products: [
        "Cosmeceutical Products",
        "Nutraceuticals", 
        "Dental Care Products",
        "Consumer Health Products"
      ],
      description: "Consumer healthcare and beauty solutions"
    }
  ];

  const therapeuticAreas = [
    { name: "Cardiovascular", icon: Heart, count: "15+ Products" },
    { name: "Respiratory", icon: Activity, count: "12+ Products" },
    { name: "Gastroenterology", icon: Stethoscope, count: "18+ Products" },
    { name: "Dermatology", icon: Microscope, count: "8+ Products" },
    { name: "Oncology", icon: Shield, count: "6+ Products" },
    { name: "Neurology", icon: FlaskConical, count: "10+ Products" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.history.back()}
            className="border-primary/20 text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive pharmaceutical solutions spanning multiple therapeutic areas 
            with a focus on quality, innovation, and global accessibility.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="shadow-medium border-0 bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-12 h-12 text-primary" />
                    <Badge variant="secondary" className="text-lg font-bold">
                      {category.percentage}%
                    </Badge>
                  </div>
                  <CardTitle className="text-foreground text-xl mb-2">
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-foreground">{product}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Therapeutic Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Therapeutic Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapeuticAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2 text-lg">
                      {area.name}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {area.count}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Customer Profile */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-medium">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Our Customer Base
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="space-y-3">
              <Stethoscope className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Healthcare Professionals</h4>
              <p className="text-sm text-muted-foreground">Doctors, specialists, and medical practitioners</p>
            </div>
            <div className="space-y-3">
              <Heart className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Hospitals & Clinics</h4>
              <p className="text-sm text-muted-foreground">Medical institutions and care facilities</p>
            </div>
            <div className="space-y-3">
              <Shield className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Government Agencies</h4>
              <p className="text-sm text-muted-foreground">Public health organizations</p>
            </div>
            <div className="space-y-3">
              <Pill className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Pharmacies & Distributors</h4>
              <p className="text-sm text-muted-foreground">Retail and wholesale partners</p>
            </div>
            <div className="space-y-3">
              <FlaskConical className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">Insurance & Payers</h4>
              <p className="text-sm text-muted-foreground">Healthcare insurance providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
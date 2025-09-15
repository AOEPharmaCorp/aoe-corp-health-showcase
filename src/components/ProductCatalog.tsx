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
        "Amlodipine & Telmisartan Tablets",
        "Atorvastatin Tablets 10mg & 20mg", 
        "Azithromycin Tablets 250mg & 500mg",
        "Esomeprazole Tablets 20mg & 40mg",
        "Fluconazole Tablets 100mg & 200mg",
        "Losartan Potassium Tablets",
        "Rosuvastatin Tablets 10mg & 20mg"
      ],
      description: "Comprehensive pharmaceutical solutions for cardiovascular, GI, and anti-infective therapies"
    },
    {
      title: "Softgel Capsules & Nutraceuticals", 
      icon: Shield,
      percentage: 33,
      products: [
        "Vitamin D3 Capsules (800 IU - 60,000 IU)",
        "Vitamin E Capsules (200 IU - 1000 IU)",
        "Fish Oil & Omega-3 Capsules",
        "Multivitamin with Minerals",
        "Glucosamine & Chondroitin Capsules",
        "Methylcobalamin & B-Complex Formulations"
      ],
      description: "Premium nutritional supplements and wellness products"
    },
    {
      title: "Injectable Medications",
      icon: Heart,
      percentage: 22,
      products: [
        "Acyclovir for Injection 250mg",
        "Esomeprazole for Injection 40mg",
        "Iron Sucrose Injection 100mg/5ml",
        "Furosemide Injection 20mg/2ml",
        "Artemether Injection 80mg",
        "Bupivacaine with Dextrose Injection"
      ],
      description: "Critical care and hospital-grade injectable solutions"
    }
  ];

  const therapeuticAreas = [
    { 
      name: "Cardiovascular", 
      icon: Heart, 
      count: "25+ Products",
      products: ["Amlodipine", "Telmisartan", "Atorvastatin", "Losartan", "Rosuvastatin", "Clopidogrel"]
    },
    { 
      name: "Gastroenterology", 
      icon: Stethoscope, 
      count: "18+ Products",
      products: ["Esomeprazole", "Omeprazole", "Pantoprazole", "Domperidone", "Carbocisteine"]
    },
    { 
      name: "Anti-Infectives", 
      icon: Shield, 
      count: "15+ Products",
      products: ["Azithromycin", "Ciprofloxacin", "Fluconazole", "Clarithromycin", "Levofloxacin"]
    },
    { 
      name: "Neurology & Pain Management", 
      icon: FlaskConical, 
      count: "20+ Products",
      products: ["Pregabalin", "Gabapentin", "Tramadol", "Levetiracetam", "Celecoxib"]
    },
    { 
      name: "Diabetes & Endocrinology", 
      icon: Microscope, 
      count: "12+ Products",
      products: ["Glimepiride + Metformin", "Pioglitazone", "Levothyroxine", "Dutasteride"]
    },
    { 
      name: "Critical Care & Injections", 
      icon: Activity, 
      count: "30+ Products",
      products: ["Artemether", "Iron Sucrose", "Acyclovir", "Furosemide", "Dexamethasone"]
    }
  ];

  const productsByCategory = {
    tablets: [
      "Amlodipine 5mg & Telmisartan 80mg Tablets",
      "Atorvastatin Tablets 10mg & 20mg",
      "Azithromycin Tablets 250mg & 500mg",
      "Esomeprazole Tablets 20mg & 40mg",
      "Fluconazole Tablets 100mg & 200mg",
      "Glimepiride + Metformin SR Tablets",
      "Losartan Potassium Tablets 25mg, 50mg, 100mg",
      "Rosuvastatin Tablets 10mg & 20mg",
      "Clopidogrel Tablets 75mg",
      "Pregabalin Capsules 75mg, 150mg, 300mg",
      "Gabapentin Capsules 100mg, 300mg, 400mg",
      "Celecoxib Capsules 200mg"
    ],
    softgels: [
      "Vitamin D3 Capsules (800 IU to 60,000 IU)",
      "Vitamin E Capsules (200 IU to 1000 IU)",
      "Fish Oil Capsules 1000mg",
      "Cod Liver Oil Capsules 300mg & 1000mg",
      "Multivitamin with Antioxidants & Minerals",
      "Glucosamine 500mg + Chondroitin 400mg",
      "Evening Primrose Oil Capsules",
      "Omega-3 Fatty Acids with Vitamins",
      "Methylcobalamin 1500mcg Capsules",
      "Essential Phospholipids 300mg & 500mg"
    ],
    injections: [
      "Acyclovir for Injection 250mg (Lyophilized)",
      "Esomeprazole for Injection 40mg",
      "Iron Sucrose Injection 100mg/5ml",
      "Furosemide Injection 20mg/2ml",
      "Artemether Injection 80mg",
      "Bupivacaine with Dextrose Injection",
      "Dexamethasone Injection 4mg/ml",
      "Diclofenac Sodium Injection 25mg/ml",
      "Gentamycin Injection 40mg/ml",
      "Ondansetron Injection 2mg/ml"
    ]
  };

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

        {/* Detailed Product Lists by Category */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-medium border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Pill className="w-6 h-6 text-primary" />
                Tablets & Capsules
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {productsByCategory.tablets.map((product, idx) => (
                  <div key={idx} className="flex items-start gap-2 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground leading-tight">{product}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <FlaskConical className="w-6 h-6 text-primary" />
                Softgel Capsules & Nutraceuticals
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {productsByCategory.softgels.map((product, idx) => (
                  <div key={idx} className="flex items-start gap-2 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground leading-tight">{product}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Microscope className="w-6 h-6 text-primary" />
                Injectable Medications
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {productsByCategory.injections.map((product, idx) => (
                  <div key={idx} className="flex items-start gap-2 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground leading-tight">{product}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 bg-white/90 backdrop-blur-sm group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon className="w-10 h-10 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">
                          {area.name}
                        </h4>
                        <Badge variant="outline" className="text-xs mb-3">
                          {area.count}
                        </Badge>
                        <div className="space-y-1">
                          {area.products.slice(0, 4).map((product, idx) => (
                            <div key={idx} className="text-xs text-muted-foreground">
                              • {product}
                            </div>
                          ))}
                          {area.products.length > 4 && (
                            <div className="text-xs text-primary font-medium">
                              +{area.products.length - 4} more products
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
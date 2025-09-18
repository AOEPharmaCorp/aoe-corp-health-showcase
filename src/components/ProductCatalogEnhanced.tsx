import { ArrowLeft, Pill, Package, Syringe, Heart, Brain, Shield, Activity, Zap, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Comprehensive product data from the Excel file
const productCategories = [{
  title: "Tablets",
  icon: Pill,
  count: 50,
  description: "Comprehensive range of oral solid dosage forms",
  products: ["Amlodipine & Telmisartan Combination", "Amlodipine Besylate (5mg, 10mg)", "Atorvastatin (10mg, 20mg)", "Azithromycin (250mg, 500mg)", "Ciprofloxacin 500mg", "Clarithromycin 500mg", "Clopidogrel 75mg", "Esomeprazole (20mg, 40mg)", "Fluconazole (100mg, 200mg)", "Glimepiride & Metformin Combination", "Hydrochlorothiazide 25mg", "Levofloxacin (250mg, 500mg)", "Losartan Potassium (25mg, 50mg, 100mg)", "Losartan & HCTZ Combination", "Pioglitazone (15mg, 30mg)", "Rosuvastatin (10mg, 20mg)", "Tadalafil 20mg", "Telmisartan (40mg, 80mg)", "Telmisartan & HCTZ Combination", "Celecoxib 200mg", "Cetrizine HCL", "Clobazam 10mg", "Clomifene 50mg", "Cotrimoxazole 480mg", "Domperidone 10mg", "Tacrolimus (0.5mg, 1mg)"]
}, {
  title: "Softgel Capsules",
  icon: Package,
  count: 15,
  description: "Advanced delivery systems for enhanced bioavailability",
  products: ["Ibuprofen (200mg, 400mg, 600mg)", "Cetirizine Hydrochloride 10mg", "Fluconazole Suppositories 150mg", "Clindamycin (150mg, 300mg)", "Gabapentin (100mg, 300mg)", "Pregabalin (75mg, 150mg)", "Vitamin D3 preparations", "Omega-3 fatty acids", "Coenzyme Q10", "Alpha Lipoic Acid", "Evening Primrose Oil", "Fish Oil concentrates", "Multivitamin combinations", "Calcium & Vitamin D", "Iron supplements"]
}, {
  title: "Injectables & Liquids",
  icon: Syringe,
  count: 25,
  description: "Sterile preparations for critical care",
  products: ["Artemether & Lumifantrine Suspension", "Carbocisteine Syrup 2%", "Cetrizine HCL Syrup 5mg/ml", "DXM, Phenylephrine & Cetirizine Syrup", "Terbinaβine Hydrochloride Cream 1%", "Amoxicillin Oral Suspension", "Azithromycin Oral Suspension", "Cefixime Oral Suspension", "Clarithromycin Granules", "Metronidazole Suspension", "Paracetamol Suspension", "Ibuprofen Suspension", "Ondansetron Injection", "Diclofenac Injection", "Tramadol Injection", "Ketorolac Injection", "Ranitidine Injection", "Pantoprazole Injection", "Ceftriaxone Injection", "Cefotaxime Injection", "Gentamicin Injection", "Dexamethasone Injection", "Methylprednisolone Injection", "Insulin preparations", "Heparin formulations"]
}];
const therapeuticAreas = [{
  name: "Cardiovascular",
  icon: Heart,
  productCount: 25,
  color: "text-red-500",
  bgColor: "bg-red-50",
  products: ["Amlodipine", "Telmisartan", "Losartan", "Atorvastatin", "Rosuvastatin", "Clopidogrel", "HCTZ combinations"]
}, {
  name: "Central Nervous System",
  icon: Brain,
  productCount: 18,
  color: "text-purple-500",
  bgColor: "bg-purple-50",
  products: ["Gabapentin", "Pregabalin", "Clobazam", "Tadalafil", "Clomifene", "Pain management combinations"]
}, {
  name: "Anti-Infectives",
  icon: Shield,
  productCount: 22,
  color: "text-blue-500",
  bgColor: "bg-blue-50",
  products: ["Azithromycin", "Ciprofloxacin", "Levofloxacin", "Clarithromycin", "Fluconazole", "Clindamycin", "Cotrimoxazole"]
}, {
  name: "Metabolic & Endocrine",
  icon: Activity,
  productCount: 15,
  color: "text-green-500",
  bgColor: "bg-green-50",
  products: ["Glimepiride", "Metformin", "Pioglitazone", "Insulin preparations", "Thyroid medications"]
}, {
  name: "Gastroenterology",
  icon: Zap,
  productCount: 12,
  color: "text-orange-500",
  bgColor: "bg-orange-50",
  products: ["Esomeprazole", "Pantoprazole", "Domperidone", "Ranitidine", "Digestive enzymes"]
}, {
  name: "Respiratory Care",
  icon: Globe,
  productCount: 10,
  color: "text-cyan-500",
  bgColor: "bg-cyan-50",
  products: ["Carbocisteine", "Artemether-Lumifantrine", "Bronchodilators", "Anti-histamines"]
}];
const facilityApprovals = [{
  name: "EU GMP",
  status: "Certified",
  color: "bg-green-100 text-green-800"
}, {
  name: "USFDA",
  status: "Approved",
  color: "bg-blue-100 text-blue-800"
}, {
  name: "WHO GMP",
  status: "Certified",
  color: "bg-purple-100 text-purple-800"
}, {
  name: "Health Canada",
  status: "Approved",
  color: "bg-red-100 text-red-800"
}, {
  name: "TGA Australia",
  status: "Listed",
  color: "bg-yellow-100 text-yellow-800"
}, {
  name: "UAE MOH",
  status: "Licensed",
  color: "bg-indigo-100 text-indigo-800"
}];
const ProductCatalogEnhanced = () => {
  return <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-6">
          
          
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Global Product Portfolio
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive range of high-quality pharmaceutical products manufactured 
              in fully compliant facilities across multiple therapeutic areas. Our portfolio 
              includes over 90 products with EU, USFDA, and WHO GMP certifications.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Regulatory Approvals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Regulatory Approvals & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilityApprovals.map((approval, index) => <Card key={index} className="corporate-card text-center p-4">
                <Badge className={`${approval.color} mb-2 text-xs font-medium`}>
                  {approval.status}
                </Badge>
                <p className="font-semibold text-sm">{approval.name}</p>
              </Card>)}
          </div>
        </section>

        {/* Product Categories Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return <Card key={index} className="corporate-card hover:shadow-large transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {category.count} Products Available
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="space-y-2">
                      {category.products.slice(0, 5).map((product, productIndex) => <div key={productIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span>{product}</span>
                        </div>)}
                      {category.products.length > 5 && <p className="text-sm text-muted-foreground font-medium">
                          +{category.products.length - 5} more products
                        </p>}
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </section>

        {/* Therapeutic Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Therapeutic Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapeuticAreas.map((area, index) => {
            const IconComponent = area.icon;
            return <Card key={index} className="corporate-card hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${area.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${area.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{area.name}</CardTitle>
                        <CardDescription>{area.productCount} Products</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {area.products.slice(0, 4).map((product, productIndex) => <span key={productIndex} className="inline-block text-xs bg-muted px-2 py-1 rounded mr-1 mb-1">
                          {product}
                        </span>)}
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </section>

        {/* Global Distribution */}
        <section className="text-center">
          <Card className="corporate-card p-8">
            <h2 className="text-3xl font-bold mb-6">Global Distribution Network</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our products are distributed across Asia, Western Africa, Eastern Europe, 
              UAE, and the wider GCC region through our established network of partners 
              and regulatory-approved channels.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">90+</div>
                <div className="text-sm text-muted-foreground">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Therapeutic Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Global Regions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">GMP Compliant</div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>;
};
export default ProductCatalogEnhanced;
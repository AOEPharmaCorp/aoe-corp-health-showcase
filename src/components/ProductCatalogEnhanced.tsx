import { ArrowLeft, Pill, Package, Syringe, Heart, Brain, Shield, Activity, Zap, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Comprehensive product data from the Excel file
const productCategories = [{
  title: "Tablets",
  icon: Pill,
  count: 85,
  description: "Comprehensive range of oral solid dosage forms",
  products: ["Amlodipine 5mg & Telmisartan 80mg", "Amlodipine 5mg & Telmisartan 40mg", "Amlodipine Besylate 10mg", "Amlodipine Besylate 5mg", "Atorvastatin 10mg", "Atorvastatin 20mg", "Azithromycin 250mg", "Azithromycin 500mg", "Ciprofloxacin 500mg", "Clarithromycin 500mg", "Clopidogrel 75mg", "Esomeprazole 20mg", "Esomeprazole 40mg", "Fluconazole 100mg", "Fluconazole 200mg", "Glimepiride 1mg & Metformin 500mg SR", "Glimepiride 2mg & Metformin 500mg SR", "Hydrochlorothiazide 25mg", "Levofloxacin 250mg", "Levofloxacin 500mg", "Losartan Potassium 25mg", "Losartan Potassium 50mg", "Losartan Potassium 100mg", "Losartan 50mg & HCTZ 12.5mg", "Pioglitazone 15mg", "Pioglitazone 30mg", "Rosuvastatin 10mg", "Rosuvastatin 20mg", "Tadalafil 20mg", "Telmisartan 40mg", "Telmisartan 80mg", "Telmisartan 40mg & HCTZ 12.5mg", "Telmisartan 80mg & HCTZ 12.5mg", "Celecoxib 200mg", "Clobazam 10mg", "Clomifene 50mg", "Cotrimoxazole 480mg", "Domperidone 10mg", "Metformin 500mg", "Metformin 850mg", "Metformin 1000mg", "Gliclazide 80mg", "Glibenclamide 5mg", "Vildagliptin 50mg", "Sitagliptin 50mg", "Sitagliptin 100mg", "Empagliflozin 10mg", "Empagliflozin 25mg", "Dapagliflozin 10mg", "Canagliflozin 100mg", "Linagliptin 5mg", "Saxagliptin 5mg", "Repaglinide 1mg", "Repaglinide 2mg", "Acarbose 50mg", "Acarbose 100mg", "Miglitol 25mg", "Miglitol 50mg", "Nateglinide 60mg", "Nateglinide 120mg", "Tolbutamide 500mg", "Chlorpropamide 250mg", "Glipizide 5mg", "Glipizide 10mg", "Glyburide 2.5mg", "Glyburide 5mg", "Tolazamide 250mg", "Acetohexamide 250mg", "Gliquidone 30mg", "Glisoxepide 5mg", "Glyclopyramide 5mg", "Glisentide 5mg", "Glibornuride 25mg", "Glymidine 500mg", "Glibuzole 100mg", "Glisoxepide 2.5mg", "Glipentide 2.5mg", "Gliquidone 15mg", "Gliflumide 5mg", "Glipizide Extended Release 5mg", "Glipizide Extended Release 10mg", "Metformin Extended Release 500mg", "Metformin Extended Release 750mg", "Metformin Extended Release 1000mg", "Glimepiride Extended Release 1mg", "Glimepiride Extended Release 2mg", "Glimepiride Extended Release 4mg"]
}, {
  title: "Softgel Capsules",
  icon: Package,
  count: 65,
  description: "Advanced delivery systems for enhanced bioavailability",
  products: ["Ibuprofen 200mg", "Ibuprofen 400mg", "Ibuprofen 600mg", "Cetirizine Hydrochloride 10mg", "Fluconazole Suppositories 150mg", "Clindamycin 150mg", "Clindamycin 300mg", "Gabapentin 100mg", "Gabapentin 300mg", "Pregabalin 75mg", "Pregabalin 150mg", "Tacrolimus 0.5mg", "Tacrolimus 1mg", "Vitamin D3 1000 IU", "Vitamin D3 2000 IU", "Vitamin D3 5000 IU", "Omega-3 1000mg", "Omega-3 500mg", "Coenzyme Q10 100mg", "Coenzyme Q10 200mg", "Alpha Lipoic Acid 300mg", "Alpha Lipoic Acid 600mg", "Evening Primrose Oil 500mg", "Evening Primrose Oil 1000mg", "Fish Oil 1000mg", "Fish Oil 500mg", "Multivitamin Complete", "Multivitamin Men", "Multivitamin Women", "Calcium 600mg & Vitamin D3", "Calcium 1200mg & Vitamin D3", "Iron 65mg", "Iron 325mg", "Folic Acid 5mg", "Vitamin B12 1000mcg", "Vitamin B Complex", "Vitamin C 500mg", "Vitamin C 1000mg", "Vitamin E 400 IU", "Vitamin E 800 IU", "Zinc 50mg", "Zinc 25mg", "Magnesium 400mg", "Magnesium 200mg", "Potassium 99mg", "Chromium 200mcg", "Selenium 200mcg", "Biotin 5000mcg", "Lutein 20mg", "Lycopene 10mg", "Resveratrol 100mg", "Turmeric 500mg", "Garlic Extract 1000mg", "Ginkgo Biloba 120mg", "Milk Thistle 175mg", "Saw Palmetto 320mg", "Cranberry Extract 500mg", "Green Tea Extract 500mg", "Grape Seed Extract 100mg", "Pine Bark Extract 100mg", "Bilberry Extract 80mg", "Quercetin 500mg", "Rutin 500mg", "Hesperidin 500mg", "Citrus Bioflavonoids 1000mg"]
}, {
  title: "Injectables & Liquids",
  icon: Syringe,
  count: 78,
  description: "Sterile preparations for critical care",
  products: ["Artemether & Lumifantrine Suspension", "Carbocisteine Syrup 2%", "Cetirizine HCL Syrup 5mg/ml", "DXM, Phenylephrine & Cetirizine Syrup", "Terbinafine Hydrochloride Cream 1%", "Amoxicillin Oral Suspension 125mg/5ml", "Amoxicillin Oral Suspension 250mg/5ml", "Azithromycin Oral Suspension 200mg/5ml", "Cefixime Oral Suspension 100mg/5ml", "Clarithromycin Granules 125mg/5ml", "Metronidazole Suspension 200mg/5ml", "Paracetamol Suspension 120mg/5ml", "Paracetamol Suspension 250mg/5ml", "Ibuprofen Suspension 100mg/5ml", "Ondansetron Injection 4mg/2ml", "Diclofenac Injection 75mg/3ml", "Tramadol Injection 100mg/2ml", "Ketorolac Injection 30mg/ml", "Ranitidine Injection 50mg/2ml", "Pantoprazole Injection 40mg", "Ceftriaxone Injection 1g", "Cefotaxime Injection 1g", "Gentamicin Injection 80mg/2ml", "Dexamethasone Injection 4mg/ml", "Methylprednisolone Injection 40mg", "Insulin Rapid Acting", "Insulin Long Acting", "Heparin 5000 IU/ml", "Normal Saline 0.9%", "Dextrose 5%", "Ringer's Lactate", "Mannitol 20%", "Furosemide Injection 20mg/2ml", "Morphine Injection 10mg/ml", "Pethidine Injection 100mg/2ml", "Atropine Injection 0.6mg/ml", "Epinephrine Injection 1mg/ml", "Norepinephrine Injection 4mg/4ml", "Dopamine Injection 200mg/5ml", "Dobutamine Injection 250mg/20ml", "Digoxin Injection 0.25mg/ml", "Lidocaine Injection 2%", "Bupivacaine Injection 0.5%", "Midazolam Injection 5mg/5ml", "Diazepam Injection 10mg/2ml", "Lorazepam Injection 4mg/ml", "Phenytoin Injection 250mg/5ml", "Valproic Acid Injection 500mg/5ml", "Levetiracetam Injection 500mg/5ml", "Vancomycin Injection 500mg", "Teicoplanin Injection 200mg", "Lincomycin Injection 600mg/2ml", "Clindamycin Injection 300mg/2ml", "Metronidazole Injection 500mg/100ml", "Ciprofloxacin Injection 200mg/100ml", "Levofloxacin Injection 500mg/100ml", "Moxifloxacin Injection 400mg/250ml", "Fluconazole Injection 200mg/100ml", "Amphotericin B Injection 50mg", "Acyclovir Injection 250mg", "Ganciclovir Injection 500mg", "Ribavirin Injection 200mg", "Interferon Alpha 3MIU", "Interferon Beta 8MIU", "Erythropoietin 2000 IU", "Filgrastim 300mcg", "Pegfilgrastim 6mg", "Rituximab 100mg/10ml", "Trastuzumab 150mg", "Bevacizumab 100mg/4ml", "Cetuximab 100mg/20ml", "Paclitaxel 100mg/16.7ml", "Docetaxel 80mg/2ml", "Carboplatin 150mg/15ml", "Cisplatin 50mg/50ml", "Oxaliplatin 100mg/20ml", "5-Fluorouracil 500mg/10ml", "Gemcitabine 1000mg", "Methotrexate 50mg/2ml", "Cyclophosphamide 500mg", "Doxorubicin 50mg/25ml"]
}];
const therapeuticAreas = [{
  name: "Cardiovascular",
  icon: Heart,
  productCount: 45,
  color: "text-red-500",
  bgColor: "bg-red-50",
  products: ["Amlodipine combinations", "Telmisartan", "Losartan", "Atorvastatin", "Rosuvastatin", "Clopidogrel", "HCTZ combinations", "ACE inhibitors", "Beta blockers", "Calcium channel blockers", "Diuretics", "Anticoagulants"]
}, {
  name: "Central Nervous System",
  icon: Brain,
  productCount: 38,
  color: "text-purple-500",
  bgColor: "bg-purple-50",
  products: ["Gabapentin", "Pregabalin", "Clobazam", "Tadalafil", "Clomifene", "Anticonvulsants", "Antidepressants", "Anxiolytics", "Analgesics", "Muscle relaxants", "Neuroprotectants", "Cognitive enhancers"]
}, {
  name: "Anti-Infectives",
  icon: Shield,
  productCount: 52,
  color: "text-blue-500",
  bgColor: "bg-blue-50",
  products: ["Azithromycin", "Ciprofloxacin", "Levofloxacin", "Clarithromycin", "Fluconazole", "Clindamycin", "Cotrimoxazole", "Beta-lactams", "Quinolones", "Macrolides", "Antifungals", "Antivirals", "Antimalarials"]
}, {
  name: "Metabolic & Endocrine",
  icon: Activity,
  productCount: 35,
  color: "text-green-500",
  bgColor: "bg-green-50",
  products: ["Glimepiride", "Metformin", "Pioglitazone", "Insulin preparations", "Thyroid medications", "SGLT-2 inhibitors", "DPP-4 inhibitors", "GLP-1 agonists", "Alpha-glucosidase inhibitors", "Meglitinides"]
}, {
  name: "Gastroenterology",
  icon: Zap,
  productCount: 28,
  color: "text-orange-500",
  bgColor: "bg-orange-50",
  products: ["Esomeprazole", "Pantoprazole", "Domperidone", "Ranitidine", "Digestive enzymes", "H2 blockers", "Antacids", "Prokinetics", "Antispasmodics", "Hepatoprotectants"]
}, {
  name: "Respiratory Care",
  icon: Globe,
  productCount: 24,
  color: "text-cyan-500",
  bgColor: "bg-cyan-50",
  products: ["Carbocisteine", "Artemether-Lumifantrine", "Bronchodilators", "Anti-histamines", "Mucolytics", "Expectorants", "Corticosteroids", "Leukotriene inhibitors", "Mast cell stabilizers"]
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
  status: "Approved",
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
                <div className="text-3xl font-bold text-primary">228+</div>
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
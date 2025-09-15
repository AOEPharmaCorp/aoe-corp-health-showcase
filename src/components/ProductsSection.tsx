import { Pill, Heart, Stethoscope, FlaskConical, Shield, Microscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const ProductsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive pharmaceutical solutions spanning multiple therapeutic areas 
            with a focus on quality, innovation, and accessibility.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Pharmaceutical Products</span>
                <span className="text-primary font-bold">45%</span>
              </div>
              <Progress value={45} className="h-3" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Generics & Differentiated</span>
                <span className="text-primary font-bold">33%</span>
              </div>
              <Progress value={33} className="h-3" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">FMCG & Cosmeceuticals</span>
                <span className="text-primary font-bold">22%</span>
              </div>
              <Progress value={22} className="h-3" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Pill className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Specialty Medicines</h4>
                <p className="text-sm text-muted-foreground">Advanced therapeutic solutions</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Generic Medications</h4>
                <p className="text-sm text-muted-foreground">Affordable treatment options</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Stethoscope className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">OTC Medications</h4>
                <p className="text-sm text-muted-foreground">Over-the-counter solutions</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <FlaskConical className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Active Ingredients</h4>
                <p className="text-sm text-muted-foreground">Quality API manufacturing</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-medium border-0 bg-gradient-subtle">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-foreground">Research & Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Continuous innovation in pharmaceutical research, developing next-generation 
                treatments and therapeutic solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-medium border-0 bg-gradient-subtle">
            <CardHeader>
              <Microscope className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-foreground">Quality Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Rigorous testing and quality assurance protocols ensuring every product 
                meets international standards and safety requirements.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-medium border-0 bg-gradient-subtle">
            <CardHeader>
              <FlaskConical className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-foreground">Manufacturing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                State-of-the-art manufacturing facilities with advanced technology 
                and compliance with global pharmaceutical standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
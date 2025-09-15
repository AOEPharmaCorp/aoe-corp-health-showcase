import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At AOE Pharma Corporation, we believe in delivering high-quality, affordable, 
            and accessible healthcare solutions to patients worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make a positive impact on the world by enhancing the quality of life 
                for patients and their families through our products and services.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a driving force for positive change in the world of healthcare,
                leading innovation and excellence in pharmaceutical solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading global provider of high-quality, affordable, 
                and accessible healthcare solutions across all markets we serve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
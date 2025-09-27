import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";
import heroLabImage from "@/assets/hero-lab.jpg";
import brandImage from "@/assets/aoe-pharma-brand.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroLabImage})`
    }}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight lg:text-8xl">
                Rising Strong in
                <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent text-8xl">
                  Global Healthcare
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">Leading provider of high-quality, affordable healthcare solutions globally. Enhancing quality of life through innovative pharmaceutical products since 2018.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-glow group" onClick={() => window.location.href = '/products'}>
                Explore Our Products 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm bg-sky-500 hover:bg-sky-400" onClick={() => window.location.href = '/contact'}>Contact Us</Button>
            </div>
            
            
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl"></div>
              <img src={brandImage} alt="APC AOE Pharma Corporation - Molecular Innovation" className="relative rounded-2xl shadow-2xl max-w-md w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TherapeuticExpertise from "@/components/TherapeuticExpertise";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, Target, Award, Building, Heart } from "lucide-react";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-primary text-white py-20 bg-blue-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                About AOE Pharma Corporation
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Leading global provider of high-quality, affordable healthcare solutions. 
                We are committed to enhancing quality of life through innovative pharmaceutical 
                products and strategic services since 2018.
              </p>
            </div>
          </div>
        </div>

        {/* About Section Component */}
        <AboutSection />

        {/* Therapeutic Expertise Section */}
        <TherapeuticExpertise />

        {/* Company Values */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="corporate-card text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Quality First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unwavering commitment to pharmaceutical excellence and patient safety in every product we manufacture.
                  </p>
                </CardContent>
              </Card>

              <Card className="corporate-card text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Expanding access to healthcare across Asia, Western Africa, Eastern Europe, the UAE, and the broader GCC region.</p>
                </CardContent>
              </Card>

              <Card className="corporate-card text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Patient-Centric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every decision we make is guided by our commitment to improving patient outcomes and quality of life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Leadership Excellence</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="corporate-card">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Executive Leadership</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Our leadership team brings decades of combined experience in pharmaceutical 
                        manufacturing, regulatory compliance, and global market expansion. With deep 
                        expertise across therapeutic areas and regulatory landscapes, we ensure 
                        strategic growth while maintaining the highest quality standards.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="text-sm">25+ Years Combined Industry Experience</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Building className="w-5 h-5 text-primary" />
                          <span className="text-sm">Global Regulatory Expertise</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Target className="w-5 h-5 text-primary" />
                          <span className="text-sm">Strategic Market Development</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-subtle rounded-lg p-8">
                        <h4 className="text-xl font-semibold mb-2">Global Presence</h4>
                        <p className="text-muted-foreground mb-4">
                          Operational excellence across multiple continents
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">5+</div>
                            <div className="text-sm text-muted-foreground">Regions</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">1000+</div>
                            <div className="text-sm text-muted-foreground">Products</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <Card className="corporate-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        2018
                      </div>
                      <h3 className="text-xl font-semibold">Foundation & Vision</h3>
                    </div>
                    <p className="text-muted-foreground">
                      AOE Pharma Corporation was established with a clear mission: to provide high-quality, 
                      affordable pharmaceutical solutions to global markets, beginning our journey towards 
                      becoming a trusted healthcare partner.
                    </p>
                  </CardContent>
                </Card>

                <Card className="corporate-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        2020
                      </div>
                      <h3 className="text-xl font-semibold">Regulatory Excellence</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Achieved major regulatory milestones with EU GMP, USFDA, and WHO GMP certifications, 
                      establishing our commitment to international quality standards and opening global market opportunities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="corporate-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">2023</div>
                      <h3 className="text-xl font-semibold">Global Expansion</h3>
                    </div>
                    <p className="text-muted-foreground">Today, we serve multiple regions with a comprehensive portfolio of 1000+ products across various therapeutic areas, maintaining our position as a trusted global pharmaceutical partner.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;
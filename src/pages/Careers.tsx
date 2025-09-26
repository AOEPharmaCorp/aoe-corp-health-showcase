import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Globe, Award, Building, BookOpen, TrendingUp, Shield } from "lucide-react";
const Careers = () => {
  const benefits = [{
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support for all employees."
  }, {
    icon: TrendingUp,
    title: "Career Development",
    description: "Professional development opportunities, training programs, and clear career advancement paths."
  }, {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work with international teams across Asia, Western Africa, Eastern Europe, UAE, and GCC regions."
  }, {
    icon: BookOpen,
    title: "Learning & Education",
    description: "Continuous learning opportunities, conference attendance, and educational assistance programs."
  }];
  const openPositions = [{
    title: "Global Supply Chain Coordinator",
    department: "Supply Chain & Logistics",
    location: "Remote/Dubai",
    type: "Full-time",
    experience: "3+ years",
    description: "Coordinate global supply chain operations, manage vendor relationships, and optimize logistics across international markets."
  }, {
    title: "Packaging Supervisor",
    department: "Production",
    location: "Manufacturing Facility",
    type: "Full-time",
    experience: "3+ years",
    description: "Oversees pharmaceutical packaging operations, ensuring products are packed in compliance with regulatory standards and internal SOPs. Coordinates with production, quality, and logistics teams to ensure timely and accurate packaging of goods for domestic and international distribution."
  }, {
    title: "Manufacturing Supervisor",
    department: "Production",
    location: "Manufacturing Facility",
    type: "Full-time",
    experience: "3+ years",
    description: "Oversee production operations and ensure adherence to manufacturing standards."
  }];
  const values = [{
    icon: Shield,
    title: "Quality Excellence",
    description: "Commitment to the highest pharmaceutical standards"
  }, {
    icon: Users,
    title: "Team Collaboration",
    description: "Working together toward common healthcare goals"
  }, {
    icon: Award,
    title: "Innovation",
    description: "Driving pharmaceutical innovation and advancement"
  }, {
    icon: Building,
    title: "Global Impact",
    description: "Making healthcare accessible worldwide"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-primary text-white py-20 bg-blue-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Join Our Global Team
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Build your career with a leading pharmaceutical company committed to improving 
                global healthcare. Discover opportunities to make a meaningful impact while 
                growing professionally in a dynamic, international environment.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>

        {/* Why Join Us */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose AOE Pharma?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
              const IconComponent = value.icon;
              return <Card key={index} className="corporate-card text-center">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Employee Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return <Card key={index} className="corporate-card">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Current Opportunities</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => <Card key={index} className="corporate-card hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{position.title}</h3>
                          <Badge variant="secondary">{position.type}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <span>📍 {position.location}</span>
                          <span>🏢 {position.department}</span>
                          <span>💼 {position.experience}</span>
                        </div>
                        <p className="text-muted-foreground">{position.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button>Apply Now</Button>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Application Process */}
        

        {/* Contact for Careers */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't see the perfect role? We're always looking for talented individuals 
                to join our growing team. Send us your resume and tell us how you'd like 
                to contribute to global healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Submit General Application
                </Button>
                <Button size="lg" variant="outline">
                  Contact HR Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Careers;
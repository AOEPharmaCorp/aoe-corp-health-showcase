import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Award, FileCheck, Globe, Building, Users, Zap } from "lucide-react";
const Quality = () => {
  const certifications = [{
    name: "EU GMP",
    description: "European Good Manufacturing Practices",
    status: "Certified",
    color: "bg-green-100 text-green-800",
    year: "2020"
  }, {
    name: "USFDA",
    description: "US Food and Drug Administration",
    status: "Approved",
    color: "bg-blue-100 text-blue-800",
    year: "2021"
  }, {
    name: "WHO GMP",
    description: "World Health Organization Good Manufacturing Practices",
    status: "Certified",
    color: "bg-purple-100 text-purple-800",
    year: "2020"
  }, {
    name: "Health Canada",
    description: "Health Canada Approval",
    status: "Approved",
    color: "bg-red-100 text-red-800",
    year: "2022"
  }, {
    name: "TGA Australia",
    description: "Therapeutic Goods Administration",
    status: "Listed",
    color: "bg-yellow-100 text-yellow-800",
    year: "2022"
  }, {
    name: "UAE MOH",
    description: "UAE Ministry of Health",
    status: "Approved",
    color: "bg-indigo-100 text-indigo-800",
    year: "2019"
  }];
  const qualityStandards = [{
    icon: Shield,
    title: "Quality Management System",
    description: "ISO 9001:2015 certified quality management system ensuring consistent product quality and continuous improvement."
  }, {
    icon: FileCheck,
    title: "Documentation Control",
    description: "Comprehensive documentation and traceability systems from raw materials to finished products."
  }, {
    icon: Users,
    title: "Personnel Training",
    description: "Regular training and qualification programs for all staff involved in pharmaceutical manufacturing."
  }, {
    icon: Building,
    title: "Facility Standards",
    description: "State-of-the-art manufacturing facilities designed to meet international GMP requirements."
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-primary text-white py-20 bg-blue-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Quality & Compliance
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Committed to the highest standards of pharmaceutical quality, safety, and regulatory compliance. 
                Our fully compliant facilities ensure every product meets international standards for 
                global market distribution.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Regulatory Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => <Card key={index} className="corporate-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className={`${cert.color} mb-2`}>
                      {cert.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">Certified since {cert.year}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Quality Management Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return <Card key={index} className="corporate-card">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{standard.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{standard.description}</p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Compliance Framework */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Compliance Framework</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Global Regulatory Excellence</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Manufacturing Compliance</h4>
                        <p className="text-muted-foreground">
                          All manufacturing processes follow strict GMP guidelines with continuous monitoring and validation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Quality Control Testing</h4>
                        <p className="text-muted-foreground">
                          Comprehensive testing protocols ensure every batch meets specification requirements before release.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Supply Chain Integrity</h4>
                        <p className="text-muted-foreground">
                          Qualified suppliers and rigorous incoming material testing maintain supply chain quality standards.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Regulatory Submissions</h4>
                        <p className="text-muted-foreground">
                          Expert regulatory affairs team ensures compliant submissions across all target markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Card className="corporate-card p-8">
                    <h3 className="text-xl font-bold mb-6 text-center">Quality Metrics</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">100%</div>
                        <div className="text-sm text-muted-foreground">GMP Compliance Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">99.8%</div>
                        <div className="text-sm text-muted-foreground">Batch Release Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">7</div>
                        <div className="text-sm text-muted-foreground">Major Regulatory Approvals</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Quality Monitoring</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance Process */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Quality Assurance Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <Card className="corporate-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h3 className="text-xl font-semibold">Raw Material Qualification</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Comprehensive testing and qualification of all incoming raw materials and packaging components 
                      according to established specifications and pharmacopeial standards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="corporate-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h3 className="text-xl font-semibold">In-Process Control</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Continuous monitoring of critical process parameters during manufacturing to ensure 
                      consistent product quality and adherence to validated procedures.
                    </p>
                  </CardContent>
                </Card>

                <Card className="corporate-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <h3 className="text-xl font-semibold">Finished Product Testing</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Complete analytical testing of finished products including identity, purity, potency, 
                      and safety parameters before batch release for distribution.
                    </p>
                  </CardContent>
                </Card>

                <Card className="corporate-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <h3 className="text-xl font-semibold">Stability Studies</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Ongoing stability monitoring programs ensure product quality and efficacy throughout 
                      the established shelf life under various storage conditions.
                    </p>
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
export default Quality;
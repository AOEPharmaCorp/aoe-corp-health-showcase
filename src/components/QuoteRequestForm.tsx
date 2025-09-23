import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Send, Package, Clock } from "lucide-react";
import { useToast } from "./ui/use-toast";

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "",
    productDetails: "",
    quantity: "",
    timeline: "",
    additionalInfo: "",
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the Privacy Policy and Terms of Service.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Submitted Successfully!",
          description: "Thank you for your interest. Our sales team will prepare a detailed quote and respond within 24-48 hours with pricing and availability information.",
        });
        
        // Reset form
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          country: "",
          productCategory: "",
          productDetails: "",
          quantity: "",
          timeline: "",
          additionalInfo: "",
          consent: false
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your quote request. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const productCategories = [
    "Tablets",
    "Softgel Capsules", 
    "Injectables & Liquids",
    "Cardiovascular Products",
    "CNS Products",
    "Anti-Infectives",
    "Metabolic & Endocrine",
    "Gastroenterology",
    "Respiratory Care",
    "Custom Product Development"
  ];

  const timelineOptions = [
    "Immediate (1-2 weeks)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)",
    "Ongoing partnership"
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
            <p className="text-lg text-muted-foreground">
              Get competitive pricing for our pharmaceutical products. Our sales team will 
              provide detailed quotes with volume discounts and delivery timelines.
            </p>
          </div>

          <Card className="corporate-card">
            <CardHeader className="text-center bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Package className="w-6 h-6" />
                Product Quote Request
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form 
                name="quote-request" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="quote-request" />
                <input type="hidden" name="bot-field" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-base font-medium">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="h-12"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="text-base font-medium">
                      Contact Person *
                    </Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                      className="h-12"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="h-12"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="h-12"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-base font-medium">
                      Country/Region *
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                      className="h-12"
                      placeholder="Country/Region"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="productCategory" className="text-base font-medium">
                      Product Category *
                    </Label>
                    <select 
                      name="productCategory" 
                      required 
                      value={formData.productCategory}
                      onChange={(e) => setFormData(prev => ({ ...prev, productCategory: e.target.value }))}
                      className="h-12 px-3 border border-input bg-background rounded-md"
                    >
                      <option value="" disabled>Select product category</option>
                      {productCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productDetails" className="text-base font-medium">
                    Specific Products & Specifications *
                  </Label>
                  <Textarea
                    id="productDetails"
                    name="productDetails"
                    required
                    value={formData.productDetails}
                    onChange={(e) => setFormData(prev => ({ ...prev, productDetails: e.target.value }))}
                    rows={4}
                    placeholder="Please specify the exact products you need, dosage forms, strengths, and any specific requirements..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-base font-medium">
                      Estimated Quantity *
                    </Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                      className="h-12"
                      placeholder="e.g., 100,000 tablets, 50,000 bottles"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-base font-medium">
                      Required Timeline *
                    </Label>
                    <select 
                      name="timeline" 
                      required 
                      value={formData.timeline}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                      className="h-12 px-3 border border-input bg-background rounded-md"
                    >
                      <option value="" disabled>Select timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-base font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    rows={3}
                    placeholder="Any additional requirements, regulatory needs, packaging preferences, etc."
                  />
                </div>

                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the Privacy Policy and Terms of Service. I consent to AOE Pharma Corporation 
                    processing my information for quote preparation and communication purposes. *
                  </Label>
                </div>

                <div className="bg-gradient-subtle p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Quote Processing Information</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Standard quotes delivered within 24-48 hours</li>
                    <li>• Complex requests may require 3-5 business days</li>
                    <li>• Volume discounts available for large orders</li>
                    <li>• Regulatory documentation included with quotes</li>
                    <li>• Quotes valid for 30 days from issue date</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    "Submitting Quote Request..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestForm;
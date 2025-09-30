import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "./ui/use-toast";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    contactMethod: "email",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
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
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(data as any).toString()
      });
      if (response.ok) {
        toast({
          title: "Thank You!",
          description: "We've received your inquiry and will get back to you within 24 hours. Our typical response time is 2-4 hours during business hours."
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          subject: "",
          message: "",
          contactMethod: "email",
          consent: false
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your inquiry. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const productCategories = ["Product Information", "Pharmaceutical Products", "Specialty Medicines", "Generic Medications", "Active Pharmaceutical Ingredients", "Cosmeceuticals", "Partnership Inquiry", "Technical Support", "General Questions", "Feedback"];
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ready to partner with us or learn more about our pharmaceutical solutions? Get in touch with our team of experts.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@aoepharma.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+971-488-29480</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        Trade Centre 1, Sheikh Zayed Road<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-blue-800">Business Hours</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM GST</p>
                    <p>Saturday: 9:00 AM - 1:00 PM GST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Send Us Your Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-base font-medium">
                          Your Full Name *
                        </Label>
                        <Input id="fullName" name="fullName" required value={formData.fullName} onChange={e => setFormData(prev => ({
                        ...prev,
                        fullName: e.target.value
                      }))} className="h-12" placeholder="Enter your full name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-medium">
                          Your Email Address *
                        </Label>
                        <Input id="email" type="email" required value={formData.email} onChange={e => setFormData(prev => ({
                        ...prev,
                        email: e.target.value
                      }))} className="h-12" placeholder="your.email@company.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-medium">
                          Your Phone Number (Optional)
                        </Label>
                         <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={e => setFormData(prev => ({
                        ...prev,
                        phone: e.target.value
                      }))} className="h-12" placeholder="+971 XX XXX XXXX" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organization" className="text-base font-medium">
                          Your Organization (Optional)
                        </Label>
                         <Input id="organization" name="organization" value={formData.organization} onChange={e => setFormData(prev => ({
                        ...prev,
                        organization: e.target.value
                      }))} className="h-12" placeholder="Company or organization name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base font-medium">
                        Subject of Your Inquiry *
                      </Label>
                       <select name="subject" value={formData.subject} onChange={e => setFormData(prev => ({
                      ...prev,
                      subject: e.target.value
                    }))} required className="h-12 px-3 border border-input bg-background rounded-md">
                         <option value="" disabled>Select inquiry type</option>
                           {productCategories.map(category => <option key={category} value={category}>
                               {category}
                             </option>)}
                       </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-medium">
                        Your Message *
                      </Label>
                       <Textarea id="message" name="message" required value={formData.message} onChange={e => setFormData(prev => ({
                      ...prev,
                      message: e.target.value
                    }))} placeholder="Please provide details about your inquiry, including specific products or services you're interested in..." className="min-h-[120px]" />
                    </div>

                    <div className="space-y-4">
                      <Label className="text-base font-medium">
                        How would you like to be contacted? (Optional)
                      </Label>
                       <div className="flex gap-6">
                         <div className="flex items-center space-x-2">
                           <input type="radio" name="contactMethod" value="email" id="email-contact" checked={formData.contactMethod === "email"} onChange={e => setFormData(prev => ({
                          ...prev,
                          contactMethod: e.target.value
                        }))} />
                           <Label htmlFor="email-contact">Email</Label>
                         </div>
                         <div className="flex items-center space-x-2">
                           <input type="radio" name="contactMethod" value="phone" id="phone-contact" checked={formData.contactMethod === "phone"} onChange={e => setFormData(prev => ({
                          ...prev,
                          contactMethod: e.target.value
                        }))} />
                           <Label htmlFor="phone-contact">Phone</Label>
                         </div>
                       </div>
                    </div>

                     <div className="flex items-start space-x-3">
                       <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={e => setFormData(prev => ({
                      ...prev,
                      consent: e.target.checked
                    }))} className="mt-1" />
                       <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                         I agree to the Privacy Policy and Terms of Service, and consent to AOE Pharma 
                         Corporation processing my personal data for the purpose of responding to my inquiry. *
                       </Label>
                     </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white shadow-glow group">
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;
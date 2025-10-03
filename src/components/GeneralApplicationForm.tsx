import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Upload } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface GeneralApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeneralApplicationForm = ({ isOpen, onClose }: GeneralApplicationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedinProfile: "",
    positionOfInterest: "",
    yearsOfExperience: "",
    coverLetter: "",
    cv: null as File | null,
    portfolio: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'cv' | 'portfolio') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please select a file smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      setFormData(prev => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.cv) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload your CV.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Application Submitted!",
        description: "Your general application has been submitted successfully. We'll review it and get back to you soon."
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedinProfile: "",
        positionOfInterest: "",
        yearsOfExperience: "",
        coverLetter: "",
        cv: null,
        portfolio: null
      });
      onClose();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Submit General Application</DialogTitle>
          <DialogDescription>
            Fill out the form below to apply for a position at AOE Pharma Corporation
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h3 className="text-base font-semibold">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
              <Input
                id="linkedinProfile"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>
          </div>

          {/* Position Details */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h3 className="text-base font-semibold">Position Details</h3>
            
            <div>
              <Label htmlFor="positionOfInterest">Position of Interest</Label>
              <Select value={formData.positionOfInterest} onValueChange={(value) => setFormData(prev => ({ ...prev, positionOfInterest: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a position or type General Application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Application</SelectItem>
                  <SelectItem value="supply-chain">Global Supply Chain Coordinator</SelectItem>
                  <SelectItem value="packaging">Packaging Supervisor</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing Supervisor</SelectItem>
                  <SelectItem value="quality">Quality Control</SelectItem>
                  <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
              <Select value={formData.yearsOfExperience} onValueChange={(value) => setFormData(prev => ({ ...prev, yearsOfExperience: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h3 className="text-base font-semibold">Documents</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>CV/Resume * (PDF, DOC, DOCX)</Label>
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center hover:border-primary/40 transition-colors mt-2">
                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'cv')}
                    className="hidden"
                    required
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {formData.cv ? formData.cv.name : "Click to upload CV"}
                    </p>
                  </label>
                </div>
              </div>

              <div>
                <Label>Portfolio (Optional)</Label>
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center hover:border-primary/40 transition-colors mt-2">
                  <input
                    id="portfolio-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, 'portfolio')}
                    className="hidden"
                  />
                  <label htmlFor="portfolio-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {formData.portfolio ? formData.portfolio.name : "Click to upload portfolio"}
                    </p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h3 className="text-base font-semibold">Cover Letter</h3>
            <div>
              <Label htmlFor="coverLetter">Why do you want to join AOE Pharma Corporation? *</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us about your motivation, relevant experience, and what you can bring to our team..."
                rows={6}
                className="resize-none mt-2"
                required
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GeneralApplicationForm;

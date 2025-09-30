import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Upload, FileText, User, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "./ui/use-toast";
interface JobApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}
const JobApplicationForm = ({
  isOpen,
  onClose,
  jobTitle
}: JobApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    coverLetter: "",
    cv: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast({
          title: "File Too Large",
          description: "Please select a file smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.cv) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload your CV.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Application Submitted!",
        description: `Your application for ${jobTitle} has been submitted successfully. We'll review it and get back to you soon.`
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        coverLetter: "",
        cv: null
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
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Apply for {jobTitle}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="flex items-center gap-2 mx-[11px] px-[11px]">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" required />
              </div>
              
              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" />
              </div>
              
              <div>
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Current Location
                </Label>
                <Input id="location" name="location" value={formData.location} onChange={handleInputChange} placeholder="City, Country" />
              </div>
            </div>
          </div>

          {/* CV Upload */}
          <div>
            <Label htmlFor="cv" className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4" />
              Upload CV/Resume *
            </Label>
            <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
              <input id="cv" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" required />
              <label htmlFor="cv" className="cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-medium">
                  {formData.cv ? formData.cv.name : "Click to upload your CV"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, DOC, or DOCX (max 5MB)
                </p>
              </label>
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Tell us why you're interested in this position and what makes you a great fit..." rows={6} className="resize-none" />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </> : "Submit Application"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
};
export default JobApplicationForm;
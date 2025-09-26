import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Building, Clock, Briefcase, CheckCircle } from "lucide-react";

interface JobDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
  };
  onApply: () => void;
}

const JobDetailsDialog = ({ isOpen, onClose, job, onApply }: JobDetailsDialogProps) => {
  const responsibilities = [
    "Lead cross-functional teams to achieve operational excellence",
    "Implement and maintain quality management systems",
    "Ensure compliance with regulatory standards and SOPs",
    "Collaborate with international teams and stakeholders",
    "Drive continuous improvement initiatives",
    "Monitor performance metrics and KPIs",
    "Provide leadership and mentorship to team members"
  ];

  const requirements = [
    "Bachelor's degree in relevant field",
    `${job.experience} of relevant experience`,
    "Strong leadership and communication skills",
    "Knowledge of pharmaceutical regulations",
    "Experience with quality management systems",
    "Ability to work in a global environment",
    "Proficiency in English (additional languages a plus)"
  ];

  const benefits = [
    "Competitive salary and benefits package",
    "Health insurance and wellness programs",
    "Professional development opportunities",
    "International career growth prospects",
    "Flexible working arrangements",
    "Annual leave and holiday benefits"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">{job.title}</DialogTitle>
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Building className="w-3 h-3" />
              {job.department}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {job.location}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {job.type}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Briefcase className="w-3 h-3" />
              {job.experience}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Job Overview */}
          <section>
            <h3 className="text-lg font-semibold mb-3">Job Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {job.description}
            </p>
          </section>

          {/* Key Responsibilities */}
          <section>
            <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <h3 className="text-lg font-semibold mb-3">Requirements</h3>
            <ul className="space-y-2">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{requirement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          <section>
            <h3 className="text-lg font-semibold mb-3">What We Offer</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Application CTA */}
          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-2">Ready to Apply?</h3>
            <p className="text-muted-foreground mb-4">
              Join our team and contribute to improving global healthcare. We're looking for 
              passionate individuals who share our commitment to excellence.
            </p>
            <div className="flex gap-3">
              <Button onClick={onApply} size="lg">
                Apply for This Position
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsDialog;
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Send, Package, Clock, X } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface Product {
  id: string;
  product_code?: string | null;
  generic_name?: string;
  name?: string;
  dosage_form: string;
  category: string;
}

interface ProductDetails {
  quantity: string;
  deliveryLocation: string;
  deliverySchedule: string;
}

interface QuoteRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Product[];
  onProductRemove: (productId: string) => void;
}

const QuoteRequestForm = ({ isOpen, onClose, selectedProducts, onProductRemove }: QuoteRequestFormProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "",
    additionalInfo: "",
    consent: false
  });
  
  const [productDetails, setProductDetails] = useState<Record<string, ProductDetails>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const updateProductDetail = (productId: string, field: keyof ProductDetails, value: string) => {
    setProductDetails(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        quantity: prev[productId]?.quantity || "",
        deliveryLocation: prev[productId]?.deliveryLocation || "",
        deliverySchedule: prev[productId]?.deliverySchedule || "",
        [field]: value
      }
    }));
  };

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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
        additionalInfo: "",
        consent: false
      });
      setProductDetails({});
      
      onClose();
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Package className="w-6 h-6" />
            Request a Quote
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to receive a detailed quote for the selected products
          </DialogDescription>
        </DialogHeader>

        {/* Selected Products Table */}
        {selectedProducts.length > 0 && (
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Selected Products ({selectedProducts.length})
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Dosage Form</TableHead>
                    <TableHead>Quantity *</TableHead>
                    <TableHead>Delivery Location *</TableHead>
                    <TableHead>Delivery Schedule *</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedProducts.map(product => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.generic_name || product.name}
                      </TableCell>
                      <TableCell>{product.dosage_form}</TableCell>
                      <TableCell>
                        <Input
                          type="text"
                          placeholder="e.g., 10,000 units"
                          value={productDetails[product.id]?.quantity || ""}
                          onChange={(e) => updateProductDetail(product.id, "quantity", e.target.value)}
                          required
                          className="min-w-[150px]"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="text"
                          placeholder="City, Country"
                          value={productDetails[product.id]?.deliveryLocation || ""}
                          onChange={(e) => updateProductDetail(product.id, "deliveryLocation", e.target.value)}
                          required
                          className="min-w-[150px]"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="text"
                          placeholder="e.g., Within 2 weeks"
                          value={productDetails[product.id]?.deliverySchedule || ""}
                          onChange={(e) => updateProductDetail(product.id, "deliverySchedule", e.target.value)}
                          required
                          className="min-w-[150px]"
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => onProductRemove(product.id)}
                          className="h-8 w-8"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >

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

            <div className="flex gap-3">
              <Button 
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="flex-1"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Quote Request
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestForm;
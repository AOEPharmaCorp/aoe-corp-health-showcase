import React, { useState, useEffect } from "react";
import { Search, Filter, Plus, Eye, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

interface Product {
  id: string;
  product_code?: string | null;
  name: string;
  dosage_form: string;
  category: string;
  moq: string | null;
  pricing: string | null;
  serial_number?: number | null;
  created_at?: string;
  updated_at?: string;
}

const ProductSearchAndDisplay = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dosageFilter, setDosageFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState<Product[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');
      
      if (error) throw error;
      
      setProducts(data || []);
      setFilteredProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error", 
        description: "Failed to load products. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.product_code && product.product_code.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    if (dosageFilter !== "all") {
      filtered = filtered.filter(product => product.dosage_form === dosageFilter);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, dosageFilter, products]);

  const addToQuote = (product: Product) => {
    if (!quote.find(p => p.id === product.id)) {
      setQuote([...quote, product]);
      toast({
        title: "Added to Quote",
        description: `${product.name} has been added to your quote request.`
      });
    }
  };

  const removeFromQuote = (productId: string) => {
    setQuote(quote.filter(p => p.id !== productId));
  };

  const categories = [...new Set(products.map(p => p.category))];
  const dosageForms = [...new Set(products.map(p => p.dosage_form))];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-2xl font-bold mb-6">Search Products</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by product name or strength..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={dosageFilter} onValueChange={setDosageFilter}>
                <SelectTrigger>
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Forms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Forms</SelectItem>
                  {dosageForms.map(form => (
                    <SelectItem key={form} value={form}>{form}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {/* Quote Summary */}
        {quote.length > 0 && (
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Quote Request ({quote.length} items)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {quote.map(product => (
                  <Badge key={product.id} variant="secondary" className="text-sm">
                    {product.name}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer" 
                      onClick={() => removeFromQuote(product.id)}
                    />
                  </Badge>
                ))}
              </div>
              <Button onClick={() => setQuote([])}>
                Clear All
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {product.product_code && (
                        <span className="font-medium text-primary">
                          {product.product_code}
                        </span>
                      )}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {product.dosage_form}
                  </Badge>
                </div>
                <Badge className="w-fit" variant="secondary">
                  {product.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">MOQ:</span> {product.moq || "Based on Standard Manufacturing Batch (Inquire for Details)"}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Pricing:</span> {product.pricing || "As per FOB / CIF / CNF"}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      onClick={() => addToQuote(product)}
                      disabled={quote.find(p => p.id === product.id) !== undefined}
                      className="flex-1"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      {quote.find(p => p.id === product.id) ? "Added" : "Add to Quote"}
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" onClick={() => setSelectedProduct(product)}>
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-xl">
                            {product.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="flex gap-2">
                            <Badge variant="outline">{product.dosage_form}</Badge>
                            <Badge variant="secondary">{product.category}</Badge>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-semibold text-lg mb-3 flex items-center">
                                <div className="w-6 h-6 mr-2 rounded bg-primary/10 flex items-center justify-center">
                                  📋
                                </div>
                                Technical Specifications
                              </h3>
                              <div className="space-y-2 text-sm">
                                <p><span className="font-medium">Product Code:</span> {product.product_code || "Contact for details"}</p>
                                <p><span className="font-medium">Product Name:</span> {product.name}</p>
                                <p><span className="font-medium">Dosage Form:</span> {product.dosage_form}</p>
                                <p><span className="font-medium">Category:</span> {product.category}</p>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-lg mb-3 flex items-center">
                                <div className="w-6 h-6 mr-2 rounded bg-primary/10 flex items-center justify-center">
                                  ⚖️
                                </div>
                                Regulatory Compliance
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Complies with applicable regulatory standards in manufacturing country.
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-lg mb-3">Commercial Information</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <span className="font-medium">MOQ:</span>
                                <p className="text-sm text-muted-foreground">
                                  {product.moq || "Based on Standard Manufacturing Batch (Inquire for Details)"}
                                </p>
                              </div>
                              <div>
                                <span className="font-medium">Pricing:</span>
                                <p className="text-sm text-muted-foreground">
                                  {product.pricing || "As per FOB / CIF / CNF"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setDosageFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearchAndDisplay;
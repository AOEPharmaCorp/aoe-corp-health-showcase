-- Enable RLS on products table (if not already enabled)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access to all products
CREATE POLICY "Allow public read access to products"
ON public.products
FOR SELECT
TO public
USING (true);
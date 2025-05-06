
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription?: string;
  images: string[];
  category: string;
  subcategory?: string;
  colors?: string[];
  sizes?: string[];
  material?: string;
  isBestseller?: boolean;
  isNew?: boolean;
  inStock: boolean;
  details?: {
    material?: string;
    care?: string[];
    fit?: string;
    features?: string[];
  };
  related?: string[];
}

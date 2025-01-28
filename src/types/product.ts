export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  specs: {
    weight: string;
    material: string;
    duration: string;
    composition: string;
    country: string;
  };
  variants?: {
    color?: string;
    size?: string;
  }[];
  stock: number;
  sku: string;
  category: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

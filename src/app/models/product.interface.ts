// models/product.interface.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  thumbnail: string;
  category: string;
  brand: string;
  rating: number;
  discountPercentage: number;
  images: string[]; // Added for carousel
  quantity?: number;
}
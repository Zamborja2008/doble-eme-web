import { Category } from './Category';
import { NutritionalInfo } from './NutritionalInfo';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  discountPrice?: number | null;
  category: Category;
  imageUrl: string;
  images?: string[];
  nutritionalInfo?: NutritionalInfo;
  characteristics: string[];
  stock: number;
  isNew: boolean;
  isFeatured: boolean;
  salesCount: number;
  createdAt: string;
  updatedAt: string;
}
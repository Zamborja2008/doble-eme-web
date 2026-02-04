export interface Promotion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  discountPercentage?: number;
  startDate: string;
  endDate: string;
  products?: string[]; // IDs de productos
  isActive: boolean;
}
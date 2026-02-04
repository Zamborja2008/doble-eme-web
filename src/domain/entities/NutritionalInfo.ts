// src/domain/entities/NutritionalInfo.ts
export interface NutritionalInfo {
  servingSize: string;
  calories: number;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  cholesterol: string;
  sodium: string;
  totalCarbohydrate: string;
  dietaryFiber: string;
  sugars: string;
  protein: string;
  vitamins?: Record<string, string>;
}
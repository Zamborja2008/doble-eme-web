// src/domain/repositories/IProductRepository.ts
import { Product, Category } from '../entities';

export interface IProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
  getBySlug(slug: string): Promise<Product | null>;
  getByCategory(categorySlug: string): Promise<Product[]>;
  getFeatured(): Promise<Product[]>;
  getNew(): Promise<Product[]>;
  getBestSellers(limit?: number): Promise<Product[]>;
  search(query: string): Promise<Product[]>;
}
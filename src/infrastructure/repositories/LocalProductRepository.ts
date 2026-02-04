// src/infrastructure/repositories/LocalProductRepository.ts
import { IProductRepository } from '@/domain/repositories/IProductRepository';
import { Product } from '@/domain/entities';
import productsData from '../data/products.json';

export class LocalProductRepository implements IProductRepository {
  private products: Product[] = productsData.products;

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async getById(id: string): Promise<Product | null> {
    return this.products.find(p => p.id === id) || null;
  }

  async getBySlug(slug: string): Promise<Product | null> {
    return this.products.find(p => p.slug === slug) || null;
  }

  async getByCategory(categorySlug: string): Promise<Product[]> {
    return this.products.filter(p => p.category.slug === categorySlug);
  }

  async getFeatured(): Promise<Product[]> {
    return this.products.filter(p => p.isFeatured);
  }

  async getNew(): Promise<Product[]> {
    return this.products
      .filter(p => p.isNew)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getBestSellers(limit: number = 10): Promise<Product[]> {
    return this.products
      .sort((a, b) => b.salesCount - a.salesCount)
      .slice(0, limit);
  }

  async search(query: string): Promise<Product[]> {
    const searchTerm = query.toLowerCase();
    return this.products.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.name.toLowerCase().includes(searchTerm)
    );
  }
}
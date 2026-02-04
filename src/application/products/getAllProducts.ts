// src/application/products/getAllProducts.ts
import { LocalProductRepository } from '@/infrastructure/repositories';
import { Product } from '@/domain/entities';

const repository = new LocalProductRepository();

export async function getAllProducts(): Promise<Product[]> {
  return await repository.getAll();
}
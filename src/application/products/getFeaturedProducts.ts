import { LocalProductRepository } from '@/infrastructure/repositories';
import { Product } from '@/domain/entities';

const repository = new LocalProductRepository();

export async function getFeaturedProducts(): Promise<Product[]> {
  return await repository.getFeatured();
}
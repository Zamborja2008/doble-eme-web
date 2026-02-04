import { LocalProductRepository } from '@/infrastructure/repositories';
import { Product } from '@/domain/entities';

const repository = new LocalProductRepository();

export async function getBestSellers(limit: number = 10): Promise<Product[]> {
  return await repository.getBestSellers(limit);
}
import { LocalProductRepository } from '@/infrastructure/repositories';
import { Product } from '@/domain/entities';

const repository = new LocalProductRepository();

export async function getNewProducts(): Promise<Product[]> {
  return await repository.getNew();
}
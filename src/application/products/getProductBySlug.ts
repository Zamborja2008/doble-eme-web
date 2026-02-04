import { LocalProductRepository } from '@/infrastructure/repositories';
import { Product } from '@/domain/entities';

const repository = new LocalProductRepository();

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return await repository.getBySlug(slug);
}
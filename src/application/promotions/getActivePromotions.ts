import { LocalPromotionRepository } from '@/infrastructure/repositories';
import { Promotion } from '@/domain/entities';

const repository = new LocalPromotionRepository();

export async function getActivePromotions(): Promise<Promotion[]> {
  return await repository.getActive();
}
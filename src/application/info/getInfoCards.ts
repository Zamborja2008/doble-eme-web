import { LocalInfoCardRepository } from '@/infrastructure/repositories/LocalInfoCardRepository';
import { InfoCard } from '@/domain/entities';

const repository = new LocalInfoCardRepository();

export async function getInfoCards(): Promise<InfoCard[]> {
  return await repository.getAll();
}
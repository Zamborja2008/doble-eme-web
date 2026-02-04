import { IInfoCardRepository } from '@/domain/repositories/IInfoCardRepository';
import { InfoCard } from '@/domain/entities';
import cardsData from '../data/info-cards.json';

export class LocalInfoCardRepository implements IInfoCardRepository {
  async getAll(): Promise<InfoCard[]> {
    return cardsData.cards.sort((a: InfoCard, b: InfoCard) => a.order - b.order);
  }
}
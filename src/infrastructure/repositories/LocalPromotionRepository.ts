import { IPromotionRepository } from '@/domain/repositories/IPromotionRepository';
import { Promotion } from '@/domain/entities';
import promotionsData from '../data/promotions.json';

export class LocalPromotionRepository implements IPromotionRepository {
  private promotions: Promotion[] = promotionsData.promotions;

  async getAll(): Promise<Promotion[]> {
    return this.promotions;
  }

  async getActive(): Promise<Promotion[]> {
    const now = new Date();
    return this.promotions.filter(p => {
      const start = new Date(p.startDate);
      const end = new Date(p.endDate);
      return p.isActive && now >= start && now <= end;
    });
  }

  async getById(id: string): Promise<Promotion | null> {
    return this.promotions.find(p => p.id === id) || null;
  }
}
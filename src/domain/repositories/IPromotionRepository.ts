import { Promotion } from '../entities';

export interface IPromotionRepository {
  getAll(): Promise<Promotion[]>;
  getActive(): Promise<Promotion[]>;
  getById(id: string): Promise<Promotion | null>;
}
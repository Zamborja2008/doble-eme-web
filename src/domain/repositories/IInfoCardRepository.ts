import { InfoCard } from '../entities';

export interface IInfoCardRepository {
  getAll(): Promise<InfoCard[]>;
}
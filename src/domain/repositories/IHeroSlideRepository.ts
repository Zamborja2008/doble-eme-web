import { HeroSlide } from '../entities';

export interface IHeroSlideRepository {
  getAll(): Promise<HeroSlide[]>;
}
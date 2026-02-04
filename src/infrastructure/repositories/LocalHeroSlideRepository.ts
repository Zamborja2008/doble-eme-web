import { IHeroSlideRepository } from '@/domain/repositories/IHeroSlideRepository';
import { HeroSlide } from '@/domain/entities';
import slidesData from '../data/hero-slides.json';

export class LocalHeroSlideRepository implements IHeroSlideRepository {
  async getAll(): Promise<HeroSlide[]> {
    return slidesData.slides.sort((a: HeroSlide, b: HeroSlide) => a.order - b.order);
  }
}
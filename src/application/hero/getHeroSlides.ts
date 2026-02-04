import { LocalHeroSlideRepository } from '@/infrastructure/repositories/LocalHeroSlideRepository';
import { HeroSlide } from '@/domain/entities';

const repository = new LocalHeroSlideRepository();

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return await repository.getAll();
}
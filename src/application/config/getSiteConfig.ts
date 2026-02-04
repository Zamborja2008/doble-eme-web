import { LocalSiteConfigRepository } from '@/infrastructure/repositories/LocalSiteConfigRepository';
import { SiteConfig } from '@/domain/entities';

const repository = new LocalSiteConfigRepository();

export async function getSiteConfig(): Promise<SiteConfig> {
  return await repository.get();
}
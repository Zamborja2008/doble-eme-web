import { ISiteConfigRepository } from '@/domain/repositories/ISiteConfigRepository';
import { SiteConfig } from '@/domain/entities';
import configData from '../data/site-config.json';

export class LocalSiteConfigRepository implements ISiteConfigRepository {
  async get(): Promise<SiteConfig> {
    return configData;
  }
}
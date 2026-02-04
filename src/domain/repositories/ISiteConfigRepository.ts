import { SiteConfig } from '../entities';

export interface ISiteConfigRepository {
  get(): Promise<SiteConfig>;
}
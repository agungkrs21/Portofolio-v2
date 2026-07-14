import { siteConfig } from '@/config/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/en`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/id`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/en/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/id/about`,
      lastModified: new Date(),
    },
  ];
}

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/editor/',
    },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thinkr.pro'

  const routes = [
    '/',
    '/alert-agent',
    '/all-in-one-chat',
    '/autopilot',
    '/blog',
    '/company',
    '/contact',
    '/custom-reports',
    '/deep-reporting',
    '/learn-more',
    '/privacy',
    '/terms',
    '/webinars',
    // locale routes
    '/es',
    '/es/webinars',
  ] as const

  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
}



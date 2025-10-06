/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://meniva.net',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/thank-you'],
  robotsTxtOptions: { policies: [{ userAgent: '*', allow: '/' }] },
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }),
}

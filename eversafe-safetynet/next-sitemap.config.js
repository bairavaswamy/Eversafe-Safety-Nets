/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://eversafesafetynets.com', // 🔗 Replace with your real domain
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 15000,
  changefreq: 'weekly',
  priority: 0.9,
  exclude: ['/admin/*', '/private/*', '/404',
    '/500',], // Optional: exclude pages
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/private'] },
    ],
  },
  trailingSlash: true,
  outDir: './out', 
};

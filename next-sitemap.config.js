/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://intigrate.in/",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ["/protected-page", "/awesome/secret-page"],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/additional-page"),
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://intigrate.in/sitemap-1.xml",
      "https://intigrate.in/sitemap-2.xml",
      "https://intigrate.in/sitemap-3.xml",
    ],
  },
};

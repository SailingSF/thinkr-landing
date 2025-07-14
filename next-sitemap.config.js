const config = {
  siteUrl: "https://thinkr.pro",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/api/*",
    "/admin/*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
  },
}

export default config; 
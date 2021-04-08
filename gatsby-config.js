require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Emili's Café",
    description: "Starter for Reflexjs.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `gatsby-plugin-reflexjs`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://emiliscafe.com.com',
        sitemap: 'https://emiliscafe.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}

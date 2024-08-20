/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `personal portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-image`,
      options: {
        // Configuration options (if any) can be added here
      },
    },
    // Other plugins can be added here
  ],
}

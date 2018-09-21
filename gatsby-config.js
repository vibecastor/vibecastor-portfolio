module.exports = {
  siteMetadata: {
    title: 'Mike Castor - Software Developer',
  },
  pathPrefix: '/portfolio-mc',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-126231172-1',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/profile-1500x1500.jpeg',
        // WebApp Manifest Configuration
        appName: null, // Inferred from package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
  ],
};

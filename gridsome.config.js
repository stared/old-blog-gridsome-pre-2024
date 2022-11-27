// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Piotr Migdał - Homepage',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'TextComponent',
        path: './content/text-components/**/*.md',
      }
    },
    ,
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'p.migdal.pl',
        outboundLinkTracking: true
      }
    }
  ],
  templates: {
    BlogPost: '/:year/:month/:slug'
  },
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-remark-figure-caption",
          {
            // All the options here are optional
            figureClassName: "md-figure-block",
            imageClassName: "md-figure-image",
            captionClassName: "md-figure-caption",
          },
        ],
        'gridsome-remark-unwrap-images',
        'remark-attr',
      ],
    },
  },
}

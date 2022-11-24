// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Piotr Migdał - Homepage',
  siteUrl: 'https://stared.github.io',
  pathPrefix: '/migdal-blog-gridsome',
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
    }
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug'
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
      ],
    },
  },
}

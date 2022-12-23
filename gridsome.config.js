// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Piotr Migdał',
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
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'p.migdal.pl',
        outboundLinkTracking: true
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        latest: true,
        feedOptions: {
          title: 'Piotr Migdał blog',
          feed_url: 'https://p.migdal.pl/rss.xml',
          site_url: 'https://p.migdal.pl'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://p.migdal.pl/' + node.path,
          author: node.author || "Piotr Migdał"
        }),
        output: {
          dir: './dist',
          name: 'rss.xml'
        }
      }
    }
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:slug'
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
        'gridsome-remark-katex',
      ],
    },
  },
}

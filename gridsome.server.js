// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allBlogPost {
        edges {
          node {
            slug
            path
            year: date(format: "YYYY")
            month: date(format: "MM")
            day: date(format: "DD")
          }
        }
      }
    }`);

    data.allBlogPost.edges.forEach(({ node }) => {
      // without HTML it works also in gridsome develop
      // with HTML it works only after build
      createPage({
        path: `/${node.year}/${node.month}/${node.day}/${node.slug}.html`,
        component: './src/templates/BlogPost.vue',
        context: {
          id: node.id,
          path: node.path
        }
      });

    })
  });
};


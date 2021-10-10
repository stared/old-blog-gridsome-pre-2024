<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>

    <h2>Blog posts</h2>

    <div class="post-list">
      <div v-for="(edge, index) in $page.allBlogPost.edges" :key="index">
        <p class="title">
          <g-link :to="edge.node.path" class="read">{{
            edge.node.title
          }}</g-link
          ><br />
          <span class="description" v-html="edge.node.description" />
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<page-query>
query {
  allBlogPost {
    edges {
      node {
        id
        title
        description
        path
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

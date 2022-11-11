<template>
  <Layout>
    <h1>Blog posts</h1>

    <p>
      Blog posts from the most recent.
    </p>
    <p>
      Filter:
      <span v-on:click="selectTag(null)">all</span>,
      <span v-on:click="selectTag('deep-learning')">deep learning</span>,
      <span v-on:click="selectTag('dating')">dating</span>
    </p>

    <div class="post-list">
      <div v-for="(post, index) in filteredPosts" :key="index">
        <p class="title">
          <g-link :to="post.path" class="read">{{
              post.title
          }}</g-link><br />
          <span class="description" v-html="post.description" />
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
  data: function () {
    return {
      tagSelected: null
    }
  },
  methods: {
    selectTag(tag) {
      console.log(tag);
      this.tagSelected = tag;
    }
  },
  computed: {
    filteredPosts: function () {
      const posts = this.$page.allBlogPost.edges.map((edge) => edge.node);
      if (this.tagSelected === null) {
        return posts;
      } else {
        return posts.filter((post) => !!post.tags && post.tags.includes(this.tagSelected))
      }
    }
  }
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
        tags
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

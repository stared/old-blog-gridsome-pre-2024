<template>
  <Layout>
    <h1>Blog posts</h1>

    <p>
      Blog posts from the most recent.
    </p>
    <p>
      <span v-for="tag in allTagsCounted" @click="selectTag(tag.name)" class="tag"
        :class="{ selected: tag.name === tagSelected }">{{ tag.name
        }}</span>
    </p>

    <div class="post-list">
      <div v-for="(post, index) in filteredPosts" :key="index">
        <p class="title">
          <g-link :to="post.path" class="read">{{
              post.title
          }}</g-link><span class="date">{{ post.dateDisplay }}</span>
          <span v-for="tagName in post.tags" @click="selectTag(tagName)" class="tag"
            :class="{ selected: tagName === tagSelected }">{{ tagName
            }}</span>
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo() {
    const title = "Piotr Migdał - blog";
    const description = "Read blog posts by Piotr Migdał.";
    const baseUrl = "https://p.migdal.pl/"
    const url = `${baseUrl}/blog/`;

    // quick and dirty
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

    return {
      title: title,
      meta: [
        { name: "og:title", content: title },
        { name: "twitter:title", content: title },
        { name: "description", content: description },
        { name: "og:description", content: description },
        { name: "twitter:description", content: description },
        { name: "url", content: url },
        { name: "og:url", content: url },
        { name: "twitter:url", content: url },
        { name: "og:image", content: image },
        { name: "twitter:image", content: image },
      ],
    };
  },
  data: function () {
    return {
      tagSelected: 'all'
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
      const posts = this.$page.allBlogPost.edges
        .map((edge) => edge.node)
        .sort((a, b) => +(a.date < b.date) - 0.5);
      if (this.tagSelected === 'all') {
        return posts;
      } else {
        return posts.filter((post) => !!post.tags && post.tags.includes(this.tagSelected))
      }
    },
    allTagsCounted: function () {
      const counter = {};
      this.$page.allBlogPost.edges.forEach((edge) => edge.node.tags.forEach((tag) => {
        if (tag in counter) {
          counter[tag] += 1;
        } else {
          counter[tag] = 1;
        }
      }))
      counter['all'] = this.$page.allBlogPost.edges.length;
      return Object.entries(counter).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
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
        dateDisplay: date(format: "MMM YYYY")
        date
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}

.post-list .date {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: #828282;
}

.tag {
  background-color: #2a7ae2;
  color: white;
  opacity: 0.5;
  font-size: 0.7rem;
  padding-left: 3px;
  padding-right: 3px;
  margin-right: 5px;
  cursor: pointer;
  display: inline-block;

}

.tag:hover {
  opacity: 1;
}

.tag.selected {
  background-color: #23c390;
}
</style>

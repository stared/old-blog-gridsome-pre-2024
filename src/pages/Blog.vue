<template>
  <Layout>
    <h1>Blog posts</h1>

    <p>
      Blog posts from the most recent.
    </p>
    <p>
      <span v-for="tag in allTagsCounted" @click="selectTag(tag.name)" class="tag"
        :class="{ selected: tag.name === tagSelected }">[{{ tag.name
        }}]</span>
    </p>

    <div class="post-list">
      <div v-for="(post, index) in filteredPosts" :key="index">
        <p class="title">
          <g-link :to="post.path" class="read">{{
              post.title
          }}</g-link>
          <span v-for="tagName in post.tags" @click="selectTag(tagName)" class="tag"
            :class="{ selected: tagName === tagSelected }">[{{ tagName
            }}]</span>
          <span class="date">{{ post.dateDisplay }}</span>
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import { socialMeta } from '@/scripts/helpers';

export default {
  metaInfo() {
    const title = "Piotr Migdał - Blog";
    const description = "Read blog posts by Piotr Migdał.";
    const baseUrl = "https://p.migdal.pl/"
    const url = `${baseUrl}/blog/`;
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

    return socialMeta(title, url, description, image);
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
    allPosts: function () {
      const localPosts = this.$page.allBlogPost.edges.map((edge) => edge.node);
      return localPosts
    },
    filteredPosts: function () {
      const posts = this.allPosts
        .sort((a, b) => +(a.date < b.date) - 0.5);
      if (this.tagSelected === 'all') {
        return posts;
      } else {
        return posts.filter((post) => !!post.tags && post.tags.includes(this.tagSelected))
      }
    },
    allTagsCounted: function () {
      const counter = {};
      this.allPosts.forEach((post) => post.tags.forEach((tag) => {
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

.tag {
  opacity: 0.5;
  font-size: 0.8rem;
  cursor: pointer;
  display: inline-block;
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.post-list .date {
  opacity: 0.5;
  font-size: 0.8rem;
}

.tag:hover {
  opacity: 1;
}

.tag.selected {
  opacity: 0.9;
}
</style>

<template>
  <Layout>
    <h1>Blog posts</h1>

    <p>
      Filter posts by selecting a relevant tag. (Beware - as a serious tagsonomist, I may retag things at some point!)
    </p>
    <p>
      <span v-for="tag in allTagsCounted" @click="selectTag(tag.name)" class="tag"
        :class="{ selected: tag.name === tagSelected }">[{{ tag.name
        }}]</span>
    </p>

    <p>
      Sort by a custom combination of date, popularity, and mentions.
    </p>

    <div class="post-list">
      <div v-for="(post, index) in filteredPosts" :key="index" class="post">
        <span v-if="!post.isExternal" class="title">
          <g-link :to="post.path">{{
              post.title
          }}</g-link>
        </span>
        <span v-else class="title">
          <a :href="post.href">{{
              post.title
          }}</a>
        </span>
        <span v-for="tagName in post.tags" @click="selectTag(tagName)" class="tag"
          :class="{ selected: tagName === tagSelected }">[{{ tagName
          }}]</span>
        <span v-if="post.hn" class="hn">[HN]</span>
        <span class="date">{{ post.dateDisplay }}</span>
        <span v-if="post.isExternal" class="source">@ {{ post.source }}</span>
      </div>
    </div>
  </Layout>
</template>

<script>
import { socialMeta } from '@/scripts/helpers';
import externalPosts from '@/../content/external-articles.json';

const isHN = (extras) => {
  return !!extras && extras.some((extras) => extras.href.includes("news.ycombinator"));
};

export default {
  metaInfo() {
    const title = "Blog";
    const description = "Read blog posts by Piotr Migdał.";
    const baseUrl = "https://p.migdal.pl/"
    const url = `${baseUrl}/blog/`;
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

    return socialMeta(title, description, url, image);
  },
  data: function () {
    return {
      tagSelected: 'all'
    }
  },
  methods: {
    selectTag(tag) {
      this.tagSelected = tag;
    }
  },
  computed: {
    allPosts: function () {
      const localPosts = this.$page.allBlogPost.edges.map((edge) => edge.node).map(({ title, path, tags, date, dateDisplay, extras, views_k }) => {
        const hn = isHN(extras);
        return { title, path, date, dateDisplay, hn, tags, views_k, isExternal: false };
      });
      const externalPostsProcessed = externalPosts.map(({ title, source, href, date, tags, extras, views_k }) => {
        const hn = isHN(extras);
        const dateDisplay = new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short" });
        return { title, source, href, date, dateDisplay, tags, hn, views_k, isExternal: true };
      })
      return localPosts.concat(externalPostsProcessed);
    },
    filteredPosts: function () {
      const postValue = (post) => {
        const popularity = post.views_k ? Math.log2(post.views_k) : 0;
        const mentions = post.extras ? post.extras?.length : 0;
        const now = new Date();
        const postDate = new Date(post.date);
        const yearsSince = (now - postDate) / (1000 * 60 * 60 * 24 * 365.25);
        const age = Math.log2(yearsSince);
        return popularity + mentions - 2 * age;
      }
      const posts = this.allPosts
        .sort((a, b) => +(postValue(a) < postValue(b)) - 0.5);
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
        title
        path
        tags
        dateDisplay: date(format: "MMM YYYY")
        date
        extras {
          href
        }
        views_k
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

.post {
  padding-bottom: 0.7em;
}

.post-list .date {
  opacity: 0.5;
  font-size: 0.8rem;
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.post-list .source {
  opacity: 0.5;
  font-size: 0.8rem;
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.post-list .hn {
  font-size: 0.8em;
  color: #ff6600;
  padding-left: 0.2em;
  padding-right: 0.2em;
}

.tag:hover {
  opacity: 1;
}

.tag.selected {
  opacity: 0.9;
}
</style>

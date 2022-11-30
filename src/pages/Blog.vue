<template>
  <Layout>
    <h1>Blog posts</h1>

    <p>
      Sort and filter posts according to your preferences.
    </p>

    <p>

    <div class="slider-flexbox">
      <div class="slider">
        <span class="slider-label">log(popularity)</span>
        <vue-slider v-model="weigthPopularity" :min="-5" :max="5" width="150px" :process="sliderLine" />
      </div>
      <div class="slider">
        <span class="slider-label">sqrt(mentions)</span>
        <vue-slider v-model="weigthMentions" :min="-5" :max="5" width="150px" :process="sliderLine" />
      </div>
      <div class="slider">
        <span class="slider-label">log(age)</span>
        <vue-slider v-model="weigthAge" :min="-10" :max="10" width="150px" :process="sliderLine" />
      </div>
      <div class="slider">
        <span class="slider-label">author's bias</span>
        <vue-slider v-model="migdalWeigth" :min="-5" :max="5" width="150px" :process="sliderLine" />
      </div>
    </div>
    </p>

    <p>
      <span v-for="tag in allTagsCounted" @click="selectTag(tag.name)" class="tag"
        :class="{ selected: tag.name === tagSelected }">[{{ tag.name
        }}]</span>
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
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/antd.css'

import { socialMeta } from '@/scripts/helpers';
import externalPosts from '@/../content/external-articles.json';

const isHN = (extras) => {
  return !!extras && extras.some((extras) => extras.href.includes("news.ycombinator"));
};

export default {
  components: {
    VueSlider,
  },
  metaInfo() {
    const title = "Blog";
    const description = "Read blog posts by Piotr Migdał.";
    const baseUrl = "https://p.migdal.pl/"
    const url = `${baseUrl}/blog/`;
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-thumbnail.jpg");

    return socialMeta(title, description, url, image);
  },
  data: function () {
    return {
      tagSelected: 'all',
      weigthPopularity: 2,
      weigthMentions: 1,
      weigthAge: -4,
      migdalWeigth: 1,
      sliderLine: (dotPos) => [[50, dotPos[0], { backgroundColor: dotPos[0] < 50 ? 'pink' : '' }]],
    }
  },
  methods: {
    selectTag(tag) {
      this.tagSelected = tag;
    }
  },
  computed: {
    allPosts: function () {
      const localPosts = this.$page.allBlogPost.edges.map((edge) => edge.node).map(({ title, path, tags, date, dateDisplay, extras, views_k, migdal_score }) => {
        const hn = isHN(extras);
        return { title, path, date, dateDisplay, hn, tags, views_k, extras, migdal_score, isExternal: false };
      });
      const externalPostsProcessed = externalPosts.map(({ title, source, href, date, tags, extras, views_k, migdal_score }) => {
        const hn = isHN(extras);
        const dateDisplay = new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short" });
        return { title, source, href, date, dateDisplay, tags, hn, views_k, extras, migdal_score, isExternal: true };
      })
      return localPosts.concat(externalPostsProcessed);
    },
    filteredPosts: function () {
      const postValue = (post) => {
        console.log(post);
        const popularity = post.views_k ? Math.log2(post.views_k) : 0;
        const mentions = Math.sqrt(post.extras ? post.extras?.length : 0);
        const now = new Date();
        const postDate = new Date(post.date);
        const yearsSince = (now - postDate) / (1000 * 60 * 60 * 24 * 365.25);
        const age = Math.log2(yearsSince);
        const migdalBias = post.migdal_score ? post.migdal_score : 0;
        return this.weigthPopularity * popularity + this.weigthMentions * mentions + this.weigthAge * age + this.migdalWeigth * migdalBias;
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
        migdal_score
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

.slider-flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.slider {
  flex-shrink: 1;
}

.slider-label {
  font-size: 0.8em;
}
</style>

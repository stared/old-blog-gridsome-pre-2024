<template>
  <Layout>
    <div class="markdown-header">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="post-date">
        {{ $page.blogPost.date }} | {{ $page.blogPost.timeToRead }} min read
      </p>
    </div>
    <div class="markdown" v-html="htmlCollectedImages"></div>
  </Layout>
</template>

<script>
import { socialMeta } from '@/scripts/helpers';

export default {
  metaInfo() {
    const title = this.$page.blogPost.title;
    const description = this.$page.blogPost.description;
    const baseUrl = "https://p.migdal.pl"
    const url = `${baseUrl}${this.$page.blogPost.path}`;
    const imgRelPath = !!this.$page.blogPost.image ? this.$page.blogPost.image.src : require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

    return socialMeta(title, url, description, baseUrl + imgRelPath);
  },
  computed: {
    htmlCollectedImages() {
      // this is dirty and I am aware of that
      // it wraps all consequtive images in an div.images block
      // a cilvilized way is my writing a remark plugin
      return this.$page.blogPost.content
        .replaceAll(/<img(?:(?!<p>)(?!<h\d).*\n)+/g, '<div class="images">\n$&</div>');
    }
  }
}
</script>

<page-query>
query BlogPost ($path: String!) {
   blogPost (path: $path) {
    id
    title
    description
    path
    content
    date (format: "D MMMM YYYY")
    timeToRead
    image
  }
}
</page-query>

<style>
.markdown blockquote {
  font-style: italic;
}

.markdown .images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.markdown .images img {
  flex-shrink: 1;
}

.markdown .images img.width-max-half {
  max-width: 50%;
}

.markdown .images img.width-max-third {
  max-width: 33.33%;
}
</style>
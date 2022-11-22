<template>
  <Layout>
    <div class="markdown-header">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="post-date">
        {{ $page.blogPost.date }} | {{ $page.blogPost.timeToRead }} min read
      </p>
    </div>
    <div class="markdown" v-html="$page.blogPost.content"></div>
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
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

    return socialMeta(title, url, description, image);
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
  }
}
</page-query>

<style>
.markdown img {
  max-width: 100%;
  margin: auto;
  display: block
}

.markdown blockquote {
  font-style: italic;
}
</style>
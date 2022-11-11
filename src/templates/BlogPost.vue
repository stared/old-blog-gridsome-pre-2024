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

<page-query>
query BlogPost ($path: String!) {
   blogPost (path: $path) {
    id
    title
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
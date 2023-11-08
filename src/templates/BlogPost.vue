<template>
  <Layout>
    <div class="markdown-header">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="header-information">
        {{ $page.blogPost.date }} | by {{ author($page.blogPost) }}
        <span v-if="$page.blogPost.medium_url">
          &nbsp;| <a :href="$page.blogPost.medium_url">orginally posted at Medium</a>
        </span>
        | {{ $page.blogPost.timeToRead }} min read
      <ul v-if="$page.blogPost.mentions.length > 0" class="header-mentions">
        <li v-for="extra in $page.blogPost.mentions">
          <a :href="extra.href">{{ extra.text }}</a>
        </li>
      </ul>
      </p>
    </div>
    <div class="markdown" v-html="htmlCollectedImages"></div>
    <footer>
      By <g-link to="/">Piotr Migdał</g-link>, a curious being, doctor of
      sorcery. See <g-link to="/blog">my other blog posts</g-link>.
    </footer>
  </Layout>
</template>

<script>
import { SocialMeta } from '@/scripts/helpers';

export default {
  metaInfo() {
    return SocialMeta.defaultMigdal()
      .setTitle(this.$page.blogPost.title)
      .setDescription(this.$page.blogPost.description)
      .setRelativeURL(this.$page.blogPost.path)
      .maybeSetRelativeImage(this.$page.blogPost.image?.src)
      .getMeta();
  },
  computed: {
    htmlCollectedImages() {
      // this is dirty and I am aware of that
      // it wraps all consequtive images in an div.images block
      // a cilvilized way is my writing a remark plugin
      return this.$page.blogPost.content;
      // .replaceAll(/<img(?:(?!<p>)(?!<h\d).*\n)+/g, '<div class="images">\n$&</div>');
    }
  },
  methods: {
    author(post) {
      // the default author
      return post.author || "Piotr Migdał";
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
    author
    medium_url
    mentions {
      text
      href
    }
  }
}
</page-query>

<style>
.markdown-header .header-mentions {
  font-size: 0.8em;
}

.markdown blockquote {
  font-style: italic;
}

.markdown img {
  max-width: 100%;
  margin: auto;
  display: block;
}

/* displaying only .katex-mathml */
.markdown .katex .katex-html {
  display: none;
}

p:has(> span.katex-display) {
  text-align: center;
}

/* .markdown .images {
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
} */

footer {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
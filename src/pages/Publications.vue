<template>
  <Layout>
    <div class="markdown" v-html="$page.textComponent.content"></div>

    <ul class="publications">
      <li v-for="(publication, index) in publications" :key="index" class="publication">
        <span class="authors">{{ publication.authors }}</span>,
        <br>
        <a class="title" :href="publicationHref(publication)">{{ publication.title }}</a>,
        <span class="journal">{{ publication.journal }}</span>
        <span class="year">({{ publication.year }})</span>
        <span v-if="publication.arxiv" class="arxiv">
          <a :href="`https://arxiv.org/abs/${publication.arxiv}`">arXiv:{{ publication.arxiv }}</a>
        </span>
      </li>
    </ul>
  </Layout>
</template>
  
<script>
import { SocialMeta } from '@/scripts/helpers';
import publications from '@/../content/publications.json'

export default {
  metaInfo() {
    return SocialMeta.defaultMigdal()
      .setTitle("Publications")
      .setDescription(`Dr. Piotr Migdał wrote ${publications.length} publications.`)
      .setRelativeURL("/publications/")
      .getMeta();
  },
  data() { return { publications } },
  methods: {
    publicationHref(publication) {
      if (publication.doi) {
        return `https://doi.org/${publication.doi}`;
      } else {
        return `https://arxiv.org/abs/${publication.arxiv}`;
      }
    }
  }
};
</script>

<page-query>
  query TextComponent {
     textComponent (id: "publications") {
      id
      content
    }
  }
</page-query>
  
<style>
li.publication {
  color: #828282;
  font-size: 0.9rem;
  list-style: none;
  padding-bottom: 1rem;
}

.journal,
.year {
  margin-right: 0.3rem;
}
</style>
  
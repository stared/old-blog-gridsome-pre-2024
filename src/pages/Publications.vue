<template>
  <Layout>
    <div class="markdown" v-html="mdText"></div>

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
import { socialMeta } from '@/scripts/helpers';
import publications from '@/../content/publications.json'

export default {
  metaInfo() {
    const title = "Piotr Migdał - Publications";
    const description = `Dr. Piotr Migdał wrote ${publications.length} publications.`;
    const baseUrl = "https://p.migdal.pl/"
    const url = `${baseUrl}/publications/`;
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

    return socialMeta(title, url, description, image);
  },
  data() { return { publications } },
  computed: {
    mdText() {
      return this.$page.allTextComponent.edges
        .map((edge) => edge.node)
        .filter((node) => node.name === 'publications')[0].content;
    }
  },
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
query {
  allTextComponent {
    edges {
      node {
        id
        name
        content
      }
    }
  }
}
</page-query>

<!-- <page-query>
  # no idea what this does not work - no name or content in textComponents
  query TextComponent ($name: String!) {
     textComponent (name: "publications") {
      name
      content
    }
  }
  </page-query> -->
  
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
  
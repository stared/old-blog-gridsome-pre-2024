<template>
  <Layout>
    <h2>Publications</h2>

    <ul class="publications">
      <li v-for="(publication, index) in publications" :key="index">
        <span class="authors">{{ publication.authors }}</span>,
        <span class="title">{{ publication.title }}</span>,
        <span class="journal">{{ publication.journal }}</span>
        <span class="year">({{ publication.year }})</span>
        <span v-if="publication.doi" class="doi">
          <a :href="`https://doi.org/${publication.doi}`">{{ publication.doi }} </a>
        </span>
        <span v-if="publication.arxiv" class="arxiv">
          <a :href="`https://arxiv.org/abs/${publication.arxiv}`">arXiv:{{ publication.arxiv }}</a>
        </span>
      </li>
    </ul>
  </Layout>
</template>
  
<script>
import publications from '@/../content/publications.json'


export default {
  metaInfo: {
    title: "Research publications",
  },
  data() { return { publications } }
};
</script>
  

  
<style>
.home-links a {
  margin-right: 1rem;
}

.publications .title {
  font-weight: bold;
}
</style>
  
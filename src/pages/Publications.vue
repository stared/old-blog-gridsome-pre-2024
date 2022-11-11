<template>
  <Layout>
    <h2>Research publications</h2>

    <p>
      My list of a academic publications (quantum optics & information, complex systems, mathematical psychology). See
      also <a href="https://scholar.google.pl/citations?user=JUwBsPAAAAAJ">my Google Scholar profile</a> and <a
        href="http://arxiv.org/a/migdal_p_1.html">arXiv account</a>.
    </p>

    <ul class="publications">
      <li v-for="(publication, index) in publications" :key="index">
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
import publications from '@/../content/publications.json'


export default {
  metaInfo: {
    title: "Research publications",
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
  

  
<style>
li {
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
  
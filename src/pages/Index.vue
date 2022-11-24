<template>
  <Layout>
    <div class="flex">
      <div class="flex-column text">
        <p>
          I am excited to look for new, ambitious challenges in projects combining advanced data science with end-user
          experience.
        </p>
      </div>
      <div class="flex-column image">
        <g-image alt="A photo of Piotr Migdał by Agnieszka Cytacka (2022)"
          src="~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg" width="400" />
      </div>
    </div>
  </Layout>
</template>

<script>
import { socialMeta } from '@/scripts/helpers';

export default {
  metaInfo() {
    const title = "Piotr Migdał - Homepage";
    const description = "Piotr Migdał - blog posts and stuff.";
    const baseUrl = "https://p.migdal.pl/"
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

    return socialMeta(title, baseUrl, description, image);
  },
}
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}

.flex-column {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 160px;
}
</style>

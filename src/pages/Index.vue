<template>
  <Layout>
    <div class="flex">
      <div class="flex-column text">
        <div class="markdown" v-html="$page.textComponent.content"></div>
      </div>
      <div class="flex-column image">
        <g-image
          class="main-img"
          alt="A photo of Piotr Migdał by Agnieszka Cytacka (2022)"
          src="~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import { SocialMeta } from "@/scripts/helpers";

export default {
  metaInfo() {
    return SocialMeta.defaultMigdal()
      .setTitle("Homepage")
      .setDescription("Piotr Migdał - blog posts and stuff.")
      .getMeta();
  },
};
</script>

<page-query>
  query TextComponent {
      textComponent (id: "me") {
          id
          content
      }
  }
  </page-query>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.flex-column {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
}

.main-img {
  max-width: 100%;
}
</style>

<template>
  <Layout>
    <div class="flex">
      <div class="flex-column text">
        <p>
          Piotr Migdał /<a href="https://en.wiktionary.org/wiki/Piotr">pjɔtr</a>&nbsp;<a
            href="https://en.wiktionary.org/wiki/migda%C5%82">ˈmig.daw</a>/ - a curious being, doctor of sorcery.
        </p>
        <p>
          <b>Profesionally:</b> I am looking for ambitious challenges combining advanced data
          science with end-user
          experience. More in <g-link to="/resume">my resume</g-link>.
        </p>
        <p>
          <b>Previously:</b> Co-founder & CTO of <a href="https://quantumflytrap.com/">Quantum Flytrap</a>, deep
          learning consultant, data viz specialist, quantum physics PhD.
        </p>
        <p>
          <b>Personally:</b> I dance balfolk and
          fusion (<i>pretending to dance but actually doing contact improv</i>). I do weekly sauna rituals, among trees,
          ponds and streams. A bit more in <g-link to="/blog/2021/09/embodiment-for-nerds/">this post</g-link>.
        </p>
        <p>
          <b>Here:</b> I invite you to read <g-link to="/blog">my stuff</g-link>, take a look at <g-link to="/projects">
            my projects</g-link>, skim abstracts of <g-link to="/publications">my academic publications</g-link>.
        </p>
        <p>
          <b>Socially:</b> I love emails, and it is the preferred way to approach me, <code>pmigdal@gmail.com</code>.
          GitHub is my favorite social network, and here are <a href="https://github.com/stared/">my repos</a>. See also
          my other accounts:
          personal
          <a href="https://www.facebook.com/piotr.migdal.9/">Facebook</a>, professional <a
            href="https://www.linkedin.com/in/piotrmigdal/">LinkedIn</a>, semi-used <a
            href="https://twitter.com/pmigdal">Twitter</a>, freshly-created <a
            href="https://mathstodon.xyz/@pmigdal">Mastodon</a>, and link-hoarding <a
            href="https://pinboard.in/u:pmigdal/">Pinboard</a>.
        </p>
      </div>
      <div class="flex-column image">
        <g-image class="main-img" alt="A photo of Piotr Migdał by Agnieszka Cytacka (2022)"
          src="~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg" />
      </div>
    </div>
  </Layout>
</template>

<script>
import { socialMeta } from '@/scripts/helpers';

export default {
  metaInfo() {
    const title = "Homepage";
    const description = "Piotr Migdał - blog posts and stuff.";
    const baseUrl = "https://p.migdal.pl/"
    const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-thumbnail.jpg");

    return socialMeta(title, description, baseUrl, image);
  },
}
</script>

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

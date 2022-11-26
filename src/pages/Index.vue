<template>
  <Layout>
    <div class="flex">
      <div class="flex-column text">
        <p>
          A doctor of sorcery.
        </p>
        <p>
          <b>Profesionally:</b> I am looking for ambitious challenges combining advanced data
          science with end-user
          experience. More in <g-link to="/resume">my resume</g-link>.
        </p>
        <p>
          <b>Previously:</b> Co-founder & CTO of <a href="https://quantumflytrap.com/">Quantum Flytrap</a>, deep
          learning consultant, data viz specialist, and quantum physics PhD.
        </p>
        <p>
          <b>Personally:</b> I dance balfolk and
          fusion (<i>pretending to dance but actually doing contact improv</i>). I do weekly sauna rituals, among trees,
          ponds and streams.
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
          <a href="https://www.facebook.com/piotr.migdal.9/">Facebook</a>, semi-used <a
            href="https://twitter.com/pmigdal">Twitter</a>, professional <a
            href="https://www.linkedin.com/in/piotrmigdal/">LinkedIn</a>, and link-hoarding <a
            href="https://pinboard.in/u:pmigdal/">Pinboard</a>.
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

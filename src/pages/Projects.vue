<template>
    <Layout>
        <h2>Public projects</h2>

        <p>
            My public projects with a certain overrepresentation of data visualizations (easy to share, easy to explain,
            eye-candy). For more open-source projects, see <a href="https://github.com/stared/">my repos at
                github.com/stared</a>. My professional projects are <g-link to="/resume">here</g-link>.
        </p>

        <p>
            More on <a href="https://github.com/stared">my GitHub account</a>. Other are mentioned in <g-link
                to="/resume">my blog posts</g-link>.
            For professional work, take a look at my <g-link to="/resume">Resume</g-link>.
        </p>

        <p>If you like these, <a href="https://github.com/sponsors/stared/">consider supporting me on GitHub</a>! I will
            feel appreciated and have more time to polish the existing, and start more.
        </p>

        <ul class="projects">
            <li v-for="(project, index) in projects" :key="index" class="project">
                <a class="title" :href="project.href">{{ project.title }}</a>&nbsp;
                <span class="status">{{ formatDate(project.dateStart) }}-{{ formatDate(project.dateEnd) }} </span>
                <span class="status">({{ project.status }})</span>
                <br />
                <span class="description">{{ project.desc }}</span>
                <span v-if="project.hn" class="hn">
                    see <a :href="project.hn">HN discussion</a>
                </span>
            </li>
        </ul>
    </Layout>
</template>
    
<script>
import { socialMeta } from '@/scripts/helpers';
import projects from '@/../content/projects.json'

export default {
    metaInfo() {
        const title = "Piotr Migdał - Projects";
        const description = `Numerous projects by Piotr Migdał.`;
        const baseUrl = "https://p.migdal.pl/"
        const url = `${baseUrl}/projects/`;
        const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

        return socialMeta(title, url, description, image);
    },
    data() { return { projects } },
    methods: {
        formatDate(x) {
            if (!!x) {
                const date = new Date(x);
                return date.getFullYear().toString();
            } else {
                return "";
            }
        }
    }
};
</script>
    
  
    
<style>
li.project {
    color: #828282;
    font-size: 0.9rem;
    list-style: none;
    padding-bottom: 1rem;
}

.post-meta {
    font-size: 14px;
    color: #828282;
}
</style>
    
<template>
    <Layout>
        <div class="markdown" v-html="$page.textComponent.content"></div>

        <ul class="projects">
            <li v-for="(project, index) in projects" :key="index" class="project">
                <a class="title" :href="project.href">{{ project.title }}</a>&nbsp;
                <span class="status">{{ formatDate(project.dateStart) }}-{{ formatDate(project.dateEnd) }} </span>
                <span class="status">({{ project.status }})</span>
                <br />
                <span class="description">{{ project.desc }}</span>
                <span v-if="!!project.mentions" class="mentions">
                    <a v-for="mention in project.mentions" :href="mention.href" class="mention">[{{ mention.text
                    }}]</a>
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
        const title = "Projects";
        const description = `Numerous projects by Piotr Migdał.`;
        const baseUrl = "https://p.migdal.pl/"
        const url = `${baseUrl}/projects/`;
        const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-thumbnail.jpg");

        return socialMeta(title, description, url, image);
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

<page-query>
query TextComponent {
    textComponent (id: "projects") {
        id
        content
    }
}
</page-query>
  
    
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

a.mention {
    font-size: 0.8em;
    color: #ff6600;
    padding-left: 0.2em;
    padding-right: 0.2em;
}
</style>
    
<template>
    <Layout>
        <div class="markdown" v-html="$page.intro.content"></div>

        <h2>Recent experience</h2>

        <ul class="experiences">
            <li v-for="exp in experiences">
                <span class="period">{{ exp.period }}</span> <span class="position">{{ exp.position }}</span> <span
                    class="company">{{ exp.company }}</span> <br />
                <span class="describtion">{{ exp.description }}</span> <br />
                <span class="stack">{{ exp.stack }}</span>
            </li>
        </ul>

        <div class="markdown" v-html="$page.highlights.content"></div>

    </Layout>
</template>
  
<script>
import { socialMeta } from '@/scripts/helpers';

const experiences = [
    {
        period: "2019-2022",
        position: "co-founder & CTO",
        company: "Quantum Flytrap",
        description: "A startup making quantum easy for business - by developing a quantum computing IDE.",
        stack: "Basecamp, Linear.app, TypeScript, Vue, Rust",
    },
    {
        period: "2020-2021",
        position: "AI researcher",
        company: "ECC Games",
        description: "Deep learning models for simulating racing car physics & unsupervised image segmentation.",
        stack: "Python, PyTorch",
    },
    {
        period: "2015-2019",
        position: "machine and deep learning consulting",
        company: "self-employed",
        description: "Selected clients: Intel, Nielsen, Samsung Research, and BCG.",
        stack: "Python, Jupyter Notebook, Scikit Learn, PyTorch, Keras",
    }, {
        period: "2014-2015",
        position: "data science and data viz freelancing",
        company: "self-employed",
        description: "Selected clients: Data4Cure, deepsense.ai, Startup Compass.",
        stack: "Python, Pandas, NumPy, SciPy, JavaScript, D3.js",
    }, {
        period: "2011-2014",
        position: "PhD in quantum optics theory",
        company: "ICFO",
        description: 'Thesis: "Symmetries and self-similarity of many-body wavefunctions"; advisors: Maciej Lewenstein, Javier Rodriguez-Laguna; reviewers: Seth Lloyd (MIT), Karol Życzkowski (Jagiellonian Univ.).',
        stack: "Mathematica, LaTeX, Python",
    },
];


export default {
    metaInfo() {
        const title = "Resume";
        const description = "Piotr Migdał's career.";
        const baseUrl = "https://p.migdal.pl/"
        const url = `${baseUrl}/career/`;
        const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-thumbnail.jpg");

        return socialMeta(title, description, url, image);
    },
    data: function () {
        return { experiences };
    },
};
</script>

<page-query>
query {
    intro: textComponent (id: "resume-intro") {
        id
        content
    }
    highlights: textComponent (id: "resume-highlights") {
        id
        content
    }
}
</page-query>

<style>
.experiences li {
    list-style: none;
    padding-bottom: 1rem;
}

.experiences .period {
    margin-right: 2rem;
}

.experiences .position {
    margin-right: 1rem;
}

.experiences .describtion {
    color: #828282;
}

.experiences .stack {
    color: #828282;
    font-size: 0.8rem;
}
</style>
  
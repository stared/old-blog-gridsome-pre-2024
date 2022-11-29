<template>
    <Layout>
        <h1>Resume (kind of)</h1>

        <p>I am looking for ambitious challenges combining advanced data
            science with end-user
            experience. As a technical visionary, I will drive your product from 0 to 1!</p>

        <p>While most of my experience is in machine learning, deep learning, data viz and quantum computing - these
            tools, as useful as they help our clients.
            Industries I would happily consider include medtech, biotech, and user-centric AI. Ideal roles include
            Technical Product Manager, CTO, and Data Science Tech Lead.</p>

        <p>If there is a match, contact me at <code>pmigdal@gmail.com</code>.</p>

        <p>See more on my <a href="https://www.linkedin.com/in/piotrmigdal/">LinkedIn profile</a>. A few highlights
            below.</p>

        <h2>Recent experience</h2>

        <ul class="experiences">
            <li v-for="exp in experiences">
                <span class="period">{{ exp.period }}</span> <span class="position">{{ exp.position }}</span> <span
                    class="company">{{ exp.company }}</span> <br />
                <span class="describtion">{{ exp.description }}</span> <br />
                <span class="stack">{{ exp.stack }}</span>
            </li>
        </ul>

        <div class="markdown" v-html="mdText"></div>

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
        const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

        return socialMeta(title, description, url, image);
    },
    data: function () {
        return { experiences };
    },
    computed: {
        mdText() {
            return this.$page.allTextComponent.edges
                .map((edge) => edge.node)
                .filter((node) => node.name === 'resume-highlights')[0].content;
        }
    },
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
  
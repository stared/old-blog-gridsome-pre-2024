<template>
    <Layout>
        <h1>Resume (kind of)</h1>

        <p>I am excited to look for new, ambitious challenges in projects combining advanced data science with end-user
            experience. As a data science visionary, I will drive your product from 0 to 1!</p>

        <p>I am most interested in impactful projects combining advanced science and technology with AI ad data viz.
            Industries I would happily consider include medtech, biotech, and user-centric AI. Ideal roles include
            Technical Product Manager, CTO, and Data Science Tech Lead.</p>

        <p>See more on my <a href="https://www.linkedin.com/in/piotrmigdal/">LinkedIn profile</a>. A few highlights
            below:</p>

        <h2>Recent experience</h2>

        <ul class="experiences">
            <li v-for="exp in experiences">
                <span class="period">{{ exp.period }}</span> <span class="position">{{ exp.position }}</span> <span
                    class="company">{{ exp.company }}</span> <br />
                <span class="describtion">{{ exp.description }}</span> <br />
                <span class="stack">{{ exp.stack }}</span>
            </li>
        </ul>

        <h2>A few highlights</h2>

        <ul>
            <li>
                <a href="https://github.com/stared/livelossplot">livelossplot</a>, a Python library for visualizing deep
                learning model training, got over 1M installations.
            </li>
            <li>
                over 12 of my projects and posts ended up on the Hacker News front page
            </li>
            <li>
                created <a href="https://www.facebook.com/groups/datasciencepl/">Data Science PL</a>, the largest data
                science community in Poland, over 20k members
            </li>
            <li>
                Research Science Institute at MIT alumnus, bronze medal in the International Physics Olympiad
            </li>
            <li>
                my research publications span from quantum physics, through mathematical psychology, to educational
                games and data viz
            </li>
        </ul>
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
    },
    {
        period: "2014-2015",
        position: "data science and data viz freelancing",
        company: "self-employed",
        description: "Selected clients: Data4Cure, deepsense.ai, Startup Compass.",
        stack: "Python, Pandas, NumPy, SciPy, JavaScript, D3.js",
    },
    {
        period: "2011-2014",
        position: "PhD in quantum optics theory",
        company: "ICFO",
        description: 'Thesis: "Symmetries and self-similarity of many-body wavefunctions"; advisors: Maciej Lewenstein, Javier Rodriguez-Laguna; reviewers: Seth Lloyd (MIT), Karol Życzkowski (Jagiellonian Univ.).',
        stack: "Mathematica, LaTeX, Python",
    },
];


export default {
    metaInfo() {
        const title = "Piotr Migdał - Resume";
        const description = "Piotr Migdał's career.";
        const baseUrl = "https://p.migdal.pl/"
        const url = `${baseUrl}/career/`;
        const image = baseUrl + require("~/imgs/piotr-migdal-direct-smiling-2022-by-cytacka-600px.jpg");

        return socialMeta(title, url, description, image);
    },
    data: function () {
        return { experiences };
    }
};
</script>
  
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
  
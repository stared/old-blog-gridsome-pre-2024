<template>
    <Layout>
        <div class="markdown" v-html="$page.intro.content"></div>

        <h2>Recent experience</h2>

        <ul class="experiences">
            <li v-for="exp in experiences">
                <span class="period">{{ exp.period }}</span> <span class="position">{{ exp.position }}</span> <a
                    :href="exp.href" class="company">{{ exp.company }}</a> <br />
                <span class="describtion">{{ exp.description }}</span> <br />
                <span v-if="!!exp.mentions" class="mentions">
                    • <span v-for="mention in exp.mentions" class="mention"><a :href="mention.href">{{ mention.text
                    }}</a>&nbsp;•
                    </span>
                    <br />
                </span>
                <span class="stack">{{ exp.stack }}</span>
            </li>
        </ul>

        <div class="markdown" v-html="$page.highlights.content"></div>

    </Layout>
</template>
  
<script>
import { SocialMeta } from '@/scripts/helpers';

const experiences = [
    {
        period: "2019-2022",
        position: "co-founder & CTO",
        company: "Quantum Flytrap",
        href: "https://quantumflytrap.com",
        description: "A startup making quantum easy for business - by developing a quantum computing IDE.",
        stack: "Basecamp, Linear.app, TypeScript, Vue, Rust",
        mentions: [
            {
                "text": "Interviewed by Shaping the Future of Computing",
                "href": "https://www.future-of-computing.com/quantum-flytrap-shaping-the-future-of-quantum-devtools/"
            },
            {
                "text": "Closing and a summary",
                "href": "https://quantumflytrap.com/blog/closing-quantum-flytrap/"
            }
        ]
    },
    {
        period: "2020-2021",
        position: "AI researcher",
        company: "ECC Games",
        href: "https://eccgames.com/en/",
        description: "Deep learning models for simulating racing car physics & unsupervised image segmentation.",
        stack: "Python, PyTorch",
        mentions: [
            {
                "text": "Level generation and style enhancement - deep learning for game development overview, arXiv:2107.07397",
                "href": "https://arxiv.org/abs/2107.07397"
            }
        ]
    },
    {
        period: "2015-2019",
        position: "machine and deep learning consulting",
        company: "self-employed",
        href: "https://p.migdal.pl",
        description: "Selected clients: deepsense.ai, Intel, Nielsen, Samsung Research, and BCG.",
        stack: "Python, Jupyter Notebook, Scikit Learn, PyTorch, Keras",
        mentions: [
            {
                "text": "Thinking in tensors, writing in PyTorch",
                "href": "https://github.com/stared/thinking-in-tensors-writing-in-pytorch"
            }
        ]
    }, {
        period: "2014-2015",
        position: "data science and data viz freelancing",
        company: "self-employed",
        href: "https://p.migdal.pl",
        description: "Selected clients: Data4Cure, Startup Compass, Laboratorium EE.",
        stack: "Python, Pandas, NumPy, SciPy, JavaScript, D3.js",
    }, {
        period: "2011-2014",
        position: "PhD in quantum optics theory",
        company: "ICFO - The Institute of Photonic Sciences",
        href: "https://www.icfo.eu/",
        description: 'Advisors: Maciej Lewenstein, Javier Rodriguez-Laguna; reviewers: Seth Lloyd (MIT), Karol Życzkowski (UJ).',
        stack: "Mathematica, LaTeX, Python",
        mentions: [
            {
                "text": "Thesis: \"Symmetries and self-similarity of many-body wavefunctions\" arXiv:2107.07397",
                "href": "https://arxiv.org/abs/2107.07397"
            }
        ]
    },
];


export default {
    metaInfo() {
        return SocialMeta.defaultMigdal()
            .setTitle("Resume")
            .setDescription("Piotr Migdał's career.")
            .setRelativeURL("/resume/")
            .getMeta();
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

.experiences .mentions {
    color: #828282;
    font-size: 0.8rem;
}

.experiences .stack {
    color: #828282;
    font-size: 0.8rem;
}
</style>
  
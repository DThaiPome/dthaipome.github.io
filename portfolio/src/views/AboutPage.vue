<template>
    <common-body class="about-container">
        <div class="about-image">
            <img :src="aboutImage" v-fix-footer-on-load />
        </div>
        <div class="about-text">
            <p v-for="(block, index) in aboutParagraphs" :key="index" v-text="block" />
        </div>
    </common-body>
</template>

<script>
import aboutContent from '../assets/json/main-content';
import CommonBody from '../components/CommonBody.vue';

import FixFooterOnLoad from '../directives/FixFooterOnLoad';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonBody
    },
    computed: {
        aboutParagraphs() {
            return aboutContent.about.body;
        },
        aboutImage() {
            return require('@/assets/img/headshot.png');
        }
    }
}

</script>

<style lang="less" scoped>
    @import '../assets/style/colors';

    .about-text {
        color: @TEXT-COLOR-2;
        font-size: 16pt;
        text-align: center;
    }
    
    .about-image {
        width: 300pt;
        margin: auto;
    }

    .about-image img {
        width: 100%;
        border-radius: 30pt;
        border: 1pt solid black;
    }

    @media only screen and (max-width: 760px) {
        .about-container div {
            margin: 0;
        }

        .about-text {
            font-size: 12pt;
        }

        .about-image {
            visibility: hidden;
            width: 0;
        }
    }

</style>
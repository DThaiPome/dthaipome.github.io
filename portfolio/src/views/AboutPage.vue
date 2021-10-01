<template>
    <div id="about-container">
        <div class="about-text">
            <p v-for="(block, index) in aboutParagraphs" :key="index" v-text="block" />
        </div>
        <div class="about-image">
            <img :src="aboutImage" v-fix-footer-on-load />
        </div>
    </div>
</template>

<script>
import aboutContent from '../assets/json/main-content';

import FixFooterOnLoad from '../directives/FixFooterOnLoad';

export default {
    directives: {
        FixFooterOnLoad
    },
    computed: {
        aboutParagraphs() {
            return aboutContent.about.body;
        },
        aboutImage() {
            return require('@/assets/BARRA R A AR AR A RAR A.png');
        }
    }
}

</script>

<style lang="less" scoped>
    @import '../assets/style/colors';

    #about-container {
        display: flex;
        width: 70%;
        margin: auto;
        padding: 2pt;
        background-color: @BG-COLOR;
        border: 4pt solid @BORDER-COLOR;
        border-radius: 40pt;
        min-width: 80%;
        
        div {
            margin: 20pt;
        }

        .about-text {
            color: @TEXT-COLOR-2;
            font-size: 16pt;
            text-align: center;
        }
    }

</style>
<template>
    <div id="about-container">
        <div class="about-text">
            <p v-for="(block, index) in aboutParagraphs" :key="index" v-text="block" />
        </div>
        <div class="about-image">
            <img ref="imgEl" :src="aboutImage" />
        </div>
    </div>
</template>

<script>
import aboutContent from '../assets/json/main-content';

import { mapActions } from 'vuex';

export default {
    computed: {
        aboutParagraphs() {
            return aboutContent.about.body;
        },
        aboutImage() {
            return require('@/assets/BARRA R A AR AR A RAR A.png');
        },
        imgEl() {
            return this.$refs.imgEl;
        }
    },
    mounted() {
        this.imgEl.onload = this.repositionFooter;
    },
    methods: {
        ...mapActions('global', [ 'repositionFooter' ]),
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
        min-width: 720pt;
        
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
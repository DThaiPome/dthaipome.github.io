<template>
    <div id="home-container">
        <span class="home-header" v-text="'Featured Projects'" />
        <hr noshade />
        <div id="project-container">
            <img v-for="proj in projects"
                :key="proj.title"
                :src="proj.src"
                class="project"
                v-fix-footer-on-load />
        </div>
        <span class="home-header" v-text="'Work Experience'" />
        <hr noshade />
    </div>
</template>

<script>
import FixFooterOnLoad from '../directives/FixFooterOnLoad';

export default {
    directives: {
        FixFooterOnLoad
    },
    computed: {
        projects() {
            const projs = [];
            for(let i = 0; i < 2; i++) {
                projs.push({
                    title: `Test${i + 1}`,
                    src: require('@/assets/BARRA R A AR AR A RAR A.png')
                });
            }
            return projs;
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../assets/style/colors';

    #home-container {
        width: 95%;
        margin: auto;
        padding: 10pt;
        background-color: @BG-COLOR;
        border: 4pt solid @BORDER-COLOR;
        border-radius: 40pt;
        min-width: 80%;

        hr {
            color: @BORDER-COLOR;
        }
    }

    .home-header {
        font-size: 36px;
        font-weight: bold;
    }

    #project-container {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20pt;
    }

    .project {
        width: 320px;
        height: 200px;
        margin: auto;
        margin-bottom: 30pt;
    }
</style>
<template>
    <common-body>
        <span class="home-header" v-text="'Featured Projects'" />
        <hr noshade />
        <project-panels :filter="projectFilter" />
        <router-link :to="'/projects'" tag="div" id="all-projects-link" v-text="'See all projects 🡆'" />
        <hr noshade />
        <div class="home-text-container">
            <p v-for="block in homeText"
                :key="block"
                v-text="block" />
        </div>
    </common-body>
</template>

<script>
import FixFooterOnLoad from '../directives/FixFooterOnLoad';
import CommonBody from '../components/CommonBody.vue';
import ProjectPanels from '../components/projects/ProjectPanels.vue';
import content from '../assets/json/main-content';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonBody,
        ProjectPanels
    },
    computed: {
        homeText() {
            return content.home.intro;
        },
        projectFilter() {
            return {
                featured: true
            };
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../assets/style/colors';

    .home-header {
        font-size: 36px;
        font-weight: bold;
    }

    .project {
        width: 320px;
        height: 200px;
        margin: auto;
        margin-bottom: 30pt;
    }

    #all-projects-link {
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        margin-top: 10pt;
        
        &:hover {
            text-decoration: underline;
        }
    }

    .home-text-container {
        color: @TEXT-COLOR-2;
        font-size: 16pt;
        text-align: center;
        width: 75%;
        margin: auto;
    }

    @media only screen and (max-width: 600px) {
        .home-text-container {
            width: 100%;
            font-size: 12pt;
        }
        
        #all-projects-link {
            text-decoration: underline;
        }
    }
</style>
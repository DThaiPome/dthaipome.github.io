<template>
    <common-body>
        <div>
            <p v-for="block in homeText"
                :key="block"
                v-text="block" />
        </div>
        <hr noshade />
        <span class="home-header" v-text="'Featured Projects'" />
        <hr noshade />
        <project-panels :filter="projectFilter" />
        <router-link :to="'/projects'" tag="div" id="all-projects-link" v-text="'See all projects 🡆'" />
    </common-body>
</template>

<script>
import FixFooterOnLoad from '../directives/FixFooterOnLoad';
import CommonBody from '../components/CommonBody.vue';
import ProjectPanels from '../components/projects/ProjectPanels.vue';
import { mapGetters } from 'vuex';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonBody,
        ProjectPanels
    },
    computed: {
        ...mapGetters('home', [ 'homeText' ]),
        projectFilter() {
            return {
                featured: true
            };
        }
    }
}
</script>

<style lang="less" scoped>
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
        
        &:hover {
            text-decoration: underline;
        }
    }
</style>
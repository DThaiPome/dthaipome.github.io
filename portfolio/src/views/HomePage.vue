<template>
    <common-body>
        <span class="home-header" v-text="'Featured Projects'" />
        <hr noshade />
        <project-panels :filter="projectFilter" />
        <span class="home-header" v-text="'Work Experience'" />
        <hr noshade />
    </common-body>
</template>

<script>
import FixFooterOnLoad from '../directives/FixFooterOnLoad';
import CommonBody from '../components/CommonBody.vue';
import ProjectPanels from '../components/ProjectPanels.vue';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonBody,
        ProjectPanels
    },
    computed: {
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
</style>
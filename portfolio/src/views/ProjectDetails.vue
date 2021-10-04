<template>
    <common-body>
        <div id="error-container" v-if="error" v-text="'An error occurred while finding this project...'" />
        <template v-if="!error">
            <span class="project-header" v-text="project.title" />
            <div id="details-top">
                <img id="details-image" :src="project.imgSrc" v-fix-footer-on-load />
            </div>
            <hr noshade />
        </template>
    </common-body>
</template>

<script>
import CommonBody from '../components/CommonBody.vue';
import FixFooterOnLoad from '../directives/FixFooterOnLoad';
import { mapGetters } from 'vuex';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonBody
    },
    data() {
        return {
            project: null,
            error: false
        };
    },
    computed: {
        ...mapGetters('project', [ 'projects']),
        id() {
            return this.$route.params.id;
        }
    },
    beforeMount() {
        this.project = this.findProject();
    },
    methods: {
        findProject() {
            const filtered = this.projects.filter(proj => proj.id === this.id);
            if (filtered[0]) {
                return filtered[0];
            }
            this.error = true;
            return null;
        }
    }
}
</script>

<style lang="less" scoped>
    #details-top {
        width: 100%;
        display: flex;
        align-content: center;
    }

    #details-image {
        max-width: 750px;
        height: 391px;
    }

    .project-header {
        font-size: 36px;
        font-weight: bold;
    }
</style>
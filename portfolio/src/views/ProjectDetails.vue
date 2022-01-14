<template>
    <common-body>
        <div id="error-container" v-if="error" v-text="'An error occurred while finding this project...'" />
        <template v-if="!error">
            <span class="project-header" v-text="project.title" />
            <div id="details-top">
                <img id="details-image" :src="project.imgSrc" v-fix-footer-on-load />
                <div class="image-caption" v-html="imageCaption" />
            </div>
            <hr noshade />
            <component :is="`project-details-body-${project.bodyComp}`"
                       :project="project" />
        </template>
    </common-body>
</template>

<script>
import CommonBody from '../components/CommonBody.vue';
import FixFooterOnLoad from '../directives/FixFooterOnLoad';
import ProjectDetailsBodyA from '../components/projects/ProjectDetailsBodyA.vue';
import ProjectDetailsBodyB from '../components/projects/ProjectDetailsBodyB.vue';
import ProjectDetailsBodyC from '../components/projects/ProjectDetailsBodyC.vue';
import { mapGetters } from 'vuex';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonBody,
        ProjectDetailsBodyA,
        ProjectDetailsBodyB,
        ProjectDetailsBodyC
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
        },
        imageCaption() {
            return this.project.imageCaption;
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
        flex-direction: column;
        align-items: center;
    }

    #details-image {
        max-width: 750px;
        height: 391px;
    }

    .project-header {
        font-size: 36px;
        font-weight: bold;
    }

    .image-caption {
        font-size: 24px;
        font-weight: bold;
        font-style: italic;
        text-align: center;
    }
</style>
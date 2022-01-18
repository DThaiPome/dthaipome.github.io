<template>
    <div id="projects-container">
        <div class="panel" v-for="panel in panels" :key="panel.id">
            <router-link :to="`/projects/${panel.id}`">
                <img class="project-img" :src="panel.imgSrc" v-fix-footer-on-load /> <br>
                <a class="project-label" v-text="panel.title" />
            </router-link> <br>
            <div class="project-label project-blurb" v-text="panel.blurb" />
        </div>
    </div>
</template>

<script>
import FixFooterOnLoad from '../../directives/FixFooterOnLoad';
import { mapGetters } from 'vuex';

export default {
    directives: {
        FixFooterOnLoad
    },
    props: {
        filter: {
            type: Object,
            default: () => { return {}; }
        }
    },
    computed: {
        ...mapGetters('project', [ 'projects' ]),
        panels() {
            return this.projects.filter(proj => {
                if (this.filter === {}) {
                    return true;
                }
                return Object.keys(this.filter).every(key => proj[key] === this.filter[key]);
            });
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/style/mixins';

    .panel {
        margin: auto;
        margin-bottom: 30pt;
        margin-top: 0;
        text-align: center;
    }

    .project-label {
        display: block;
        width: 325px;
    }

    .project-img {
        width: 325px;
        height: 200px;
        .rounded-img-1;
    }

    #projects-container {
        display: flex;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 760px) {
        .project-img {
            width: 100px;
            height: 61.538px;
            .rounded-img-2;
        }

        .project-label {
            width: 100px;
        }

        .panel {
            margin-bottom: 0;
        }

        .project-blurb {
            visibility: hidden;
            height: 0;
        }
    }
</style>
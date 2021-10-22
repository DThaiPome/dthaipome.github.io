<template>
    <div id="projects-container">
        <div class="panel" v-for="panel in panels" :key="panel.id">
            <router-link :to="`/projects/${panel.id}`">
                <img class="project-img" :src="panel.imgSrc" v-fix-footer-on-load /> <br>
                <a v-text="panel.title" />
            </router-link> <br>
            <div v-text="panel.blurb" />
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
    .panel {
        margin: auto;
        margin-bottom: 30pt;
        text-align: center;
    }

    .project-img {
        width: 375px;
        height: 250px;
    }

    #projects-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>
<template>
    <div id="description-container">
        <div class="description-panel">
            <h3> Summary </h3>
            <div class="description-text" v-html="project.summary" />
            <h3> Accomplishments </h3>
            <common-unordered-list :items="project.responsibilities" 
                       :classes="description-text" />
            <br>
            <h3> Technology Used </h3>
            <common-unordered-list :items="project.tech" 
                       :classes="description-text" />
        </div>
        <img class="details-body-image" 
                v-if="project.bodyImgSrcA"
                :src="project.bodyImgSrcA" 
                v-fix-footer-on-load />
        <div class="description-panel">
            <img class="details-body-image" 
                 v-if="project.bodyImgSrcB"
                 :src="project.bodyImgSrcB" 
                 v-fix-footer-on-load />
        </div>
    </div>
</template>

<script>
import FixFooterOnLoad from '../../directives/FixFooterOnLoad';
import CommonUnorderedList from '../CommonUnorderedList.vue';

export default {
    directives: {
        FixFooterOnLoad
    },
    components: {
        CommonUnorderedList
    },
    props: {
        project: {
            type: Object,
            default: () => { return {}; }
        }
    }
}
</script>
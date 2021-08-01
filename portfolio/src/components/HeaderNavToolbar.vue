<template>
    <div class="toolbar-container">
        <span v-for="(button, idx) in buttons" 
            :key="idx" 
            class="nav-button-container">
            <header-nav-button class="nav-button" 
                :route="button.route" 
                :label="button.label"/>
            <span class="vertical-rule" v-if="idx != buttons.length - 1"/>
        </span>
    </div>
</template>

<script>
import HeaderNavButton from './HeaderNavButton.vue';
import navButtons from '../assets/json/navButtons';
export default {
    components: {
        HeaderNavButton
    },
    computed: {
        buttons: () => navButtons
    }
}
</script>

<style lang="less" scoped>
@import '../assets/style/colors';
.toolbar-container {
    .nav-button-container {
        margin: auto;

        :hover .nav-button {
            background: white;
        }

        .vertical-rule {
            border: 1pt solid @BORDER-COLOR;
            height: 40pt;
        }
    }
}
</style>
<template>
    <div class="dropdown-container">
        <div v-for="(button, idx) in buttons"
            :key="button.label"
            :class="`nav-button-container ${buttonClass(idx)}`">
            <header-nav-button class="nav-button"
                :route="button.route"
                :label="button.label"/>
        </div>
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
    },
    methods: {
        buttonClass(idx) {
            return idx % 2 === 0 ? 'bg-1' : 'bg-2';
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/style/colors';
.dropdown-container {
    position: fixed;
    width: 100%;
}

.nav-button-container {
    height: 20pt;

    &.bg-1 {
        background-color: @BG-COLOR-2;
    }

    &.bg-2 {
        background-color: @BG-COLOR-3;
    }
}
</style>
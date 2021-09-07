<template>
    <div v-if="headerShowHeader" class="header-container">
            <div v-if="headerShowTitle" class="header-title">Ryan Gehrlein</div>
            <div v-if="headerShowTitle" class="subheader-title">Game Programmer &amp; Software Engineer</div>
            <hr v-if="headerShowTitle" noshade>
            <header-nav-toolbar/>
        </div>
</template>

<script>
import HeaderNavToolbar from './HeaderNavToolbar.vue';
import { mapGetters } from 'vuex';

export default {
  components: { HeaderNavToolbar },
    props: {
        pageName: {
            type: String,
            default: ''
        }
    },
    computed: {
        ...mapGetters('global', [
            'headerShowTitle',
            'headerShowHeader'
        ])
    }
}
</script>

<style lang='less' scoped>
    @import '../assets/style/colors';

    .header-container {
        text-align: center;
        background-color: @BG-COLOR;
        border: 4pt solid @BORDER-COLOR;
        border-radius: 40pt;
        width: auto;
        margin: auto;
        margin-bottom: 15pt;
        padding: 10pt;

        .header-title {
            font-weight: bolder;
            font-size: 60px;
        }

        .subheader-title {
            font-size: 24px;
        }

        hr {
            color: @BORDER-COLOR;
        }
    }
</style>
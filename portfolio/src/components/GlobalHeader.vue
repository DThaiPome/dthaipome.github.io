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
    @import '../assets/style/animations';

    .header-container {
        text-align: center;
        .infinite-background(
            url('../assets/img/backgrounds/subtle background-small.png'),
            url('../assets/img/backgrounds/subtle background-smaller.png'),
            url('../assets/img/backgrounds/subtle background.png'),
            0 0, -2pt, -1pt);
        border: 4pt solid @BORDER-COLOR;
        border-radius: 40pt;
        width: auto;
        margin: auto;
        margin-bottom: 15pt;
        padding: 10pt;
        overflow: hidden;

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
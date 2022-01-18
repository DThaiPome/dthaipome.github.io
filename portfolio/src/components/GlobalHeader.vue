<template>
    <div v-if="headerShowHeader" class="header-container">
            <div v-if="headerShowTitle" class="header-title">Ryan Gehrlein</div>
            <div v-if="headerShowTitle" class="subheader-title">Game Programmer &amp; Software Engineer</div>
            <hr v-if="headerShowTitle" noshade>
            <header-nav-toolbar class="desktop-nav" v-if="!isMobileView" />
            <header-nav-mobile-dropdown class="mobile-nav" v-if="isMobileView"/>
        </div>
</template>

<script>
import HeaderNavToolbar from './HeaderNavToolbar.vue';
import HeaderNavMobileDropdown from './HeaderNavMobileDropdown.vue'
import { mapGetters } from 'vuex';

export default {
    components: { 
        HeaderNavToolbar,
        HeaderNavMobileDropdown
    },
    props: {
        pageName: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isMobileView: false
        };
    },
    computed: {
        ...mapGetters('global', [
            'headerShowTitle',
            'headerShowHeader'
        ])
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    unmounted() {
        window.addEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.isMobileView = window.innerWidth <= 760;
        }
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
        overflow: visible;

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

    .desktop-nav {
        visibility: visible;
    }

    .mobile-nav {
        visibility: hidden;
    }

    @media only screen and (max-width: 760px) {
        .desktop-nav {
            visibility: hidden;
        }

        .mobile-nav {
            visibility: visible;
        }
    }
</style>
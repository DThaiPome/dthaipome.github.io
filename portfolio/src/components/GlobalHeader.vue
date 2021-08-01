<template>
    <div class="header-container">
            <div class="header-title">Ryan Gehrlein</div>
            <div class="subheader-title">Game Programmer &amp; Software Engineer</div>
            <hr noshade>
            <header-nav-toolbar/>
        </div>
</template>

<script>
import HeaderNavToolbar from './HeaderNavToolbar.vue';
export default {
  components: { HeaderNavToolbar },
    props: {
        pageName: {
            type: String,
            default: ''
        }
    },
    computed: {
        buttons: () => {
            return [
                'Home',
                'About',
                'Resume',
                'Contact',
                'Featured Code'
            ];
        }
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
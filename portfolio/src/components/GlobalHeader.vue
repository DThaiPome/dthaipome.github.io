<template>
    <div class="header-container">
            <div class="header-title">Ryan Gehrlein</div>
            <div class="subheader-title">Game Programmer &amp; Software Engineer</div>
            <hr noshade>
            <div class="links-container">
                <span class="link-box" v-for="(button, idx) in buttons" :key="idx">
                    <span class="link-text" v-text="button"/>
                    <span class="vertical-rule" v-if="idx != buttons.length - 1"/>
                </span>
            </div>
        </div>
</template>

<script>
export default {
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
        
        .links-container {
            .link-box {
                .link-text {
                    margin: 10pt;
                }

                .vertical-rule {
                    border: 1pt solid @BORDER-COLOR;
                    height: 40pt;
                }
            }
        }
    }
</style>
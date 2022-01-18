<template>
    <div ref="container" :class="this.footerClasses">
        <p>ryan.gehrlein@gmail.com</p>
        <p>203-274-0985</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addFooterScroll: false
        };
    },
    computed: {
        container() {
            return this.$refs.container;
        },
        footerClasses() {
            return [ 'footer-container', { 'footer-scroll' : this.addFooterScroll }];
        }
    },
    methods: {
        reposition(height) {
            const viewHeight = window.innerHeight
            this.addFooterScroll = viewHeight < height + this.container.offsetHeight;
            const style = this.addFooterScroll
                ? `top: ${height}px`
                : ``;
            this.container.style = style;
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../assets/style/colors';

    .footer-container {
        text-align: center;
        background-color: @BG-COLOR;
        color: @TEXT-COLOR-2;
        width: 100%;

        position: absolute;
        bottom: 0;
        margin-top: 15pt;

        &.footer-scroll {
            bottom: auto;
        }
    }
</style>
<template>
    <div id="body-container">
        <slot />
    </div>
</template>

<style lang="less" scoped>
    @import '../assets/style/colors';

    #body-container {
        width: 95%;
        margin: auto;
        padding: 10pt;
        background-color: @BG-COLOR;
        border: 4pt solid @BORDER-COLOR;
        border-radius: 40pt;
        min-width: 80%;

        hr {
            color: @BORDER-COLOR;
        }
    }
</style>
<template>
    <div id="body-container">
        <slot />
    </div>
</template>

<style lang="less" scoped>
    @import '../assets/style/colors';

    #body-container {
        width: 80%;
        max-width: 1200px;
        margin: auto;
        padding: 10pt;
        background-color: @BG-COLOR;
        border: 4pt solid @BORDER-COLOR;
        border-radius: 40pt;

        hr {
            color: @BORDER-COLOR;
        }
    }
</style>
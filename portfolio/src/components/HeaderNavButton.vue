<template>
    <span class="nav-button-container">
        <router-link :to="route" tag="span" class="nav-button">
            {{label}}
        </router-link>
    </span>
</template>

<script>
export default {
    props: {
        route: {
            type: String,
            default: '/'
        },
        label: {
            type: String,
            default: 'Home'
        }
    }
}
</script>

<style lang="less" scoped>
    .nav-button-container {
        .nav-button {
            margin: 10pt;
            cursor: pointer;
            padding: 5pt;
            border-radius: 10pt
        }

        :hover .nav-button {
            background: rgb(27, 27, 27);
        }
    }
</style>
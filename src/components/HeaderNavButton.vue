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

    @media only screen and (max-width: 760px) {
        .nav-button-container {
            display: block;
            width: 100%;
            height: 100%;

            .nav-button {
                background: none;
                margin: 0;
                padding: 0;
                display: inline-block;
                width: 100%;
                height: 100%;
                border-radius: none;
            }

            :hover .nav-button {
                background: none;
            }
        }
    }
</style>
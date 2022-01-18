<template>
    <ul>
        <li v-for="item in items"
            :key="item"
            :class="classes"
            v-text="item" />
    </ul>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => { return []; }
        },
        classes: {
            type: String,
            default: ''
        }
    }
}
</script>
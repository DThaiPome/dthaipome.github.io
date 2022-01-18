<template>
    <div class="dropdown-container">
        <button class="dropdown-button" v-text="menuText"
            v-on:click="onClick"
            v-on:blur="onBlur" />
        <div v-show="!collapsed" class="dropdown-elements" ref="menu">
            <button v-for="(button, idx) in buttons"
                :key="button.label"
                class="dropdown-element"
                :class="buttonClasses(idx)"
                v-on:blur="onBlur">
                <header-nav-button
                    :route="button.route"
                    :label="button.label"/>
            </button>
        </div>
    </div>
</template>

<script>
import HeaderNavButton from './HeaderNavButton.vue';
import navButtons from '../assets/json/navButtons';

export default {
    components: {
        HeaderNavButton
    },
    data() {
        return {
            collapsed: true,
            dropdownElements: []
        };
    },
    computed: {
        buttons: () => navButtons,
        menuText() {
            const arrow = this.collapsed ? '🡅' : '🡇';
            return `${arrow} Menu ${arrow}`;
        }
    },
    watch: {
        $route() {
            this.collapsed = true;
        }
    },
    mounted() {
        this.dropdownElements = this.$refs.menu.querySelector('.dropdown-element');
    },
    methods: {
        buttonClasses(idx) {
            return {
                'bg-1': idx % 2 === 0,
                'bg-2': idx % 2 === 1
            };
        },
        onClick() {
            this.collapsed = !this.collapsed;
        },
        onBlur(event) {
            if (!this.$refs.menu.contains(event.relatedTarget)) {
                this.collapsed = true;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/style/colors';
.dropdown-container {
    width: 100%;
    position: relative;
}

.dropdown-button {
    border: none;
    width: 100%;
    font-size: 16px;
    color: white;

    background-color: @BG-COLOR-3;
    line-height: 20pt;
    text-align: center;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
}

.dropdown-elements {
    position: absolute;
    width: 100%;
}

.dropdown-element {
    height: 20pt;
    position: relative;
    width: 100%;
    border: none;
    font-size: 16px;
    color: white;
    padding: 0;

    &.bg-1 {
        background-color: @BG-COLOR-2;
    }

    &.bg-2 {
        background-color: @BG-COLOR-3;
    }
}
</style>
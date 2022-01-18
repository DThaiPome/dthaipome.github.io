export default {
    inserted(el, binding, vnode) {
        el.onload = () => {
            vnode.context.$store.dispatch('global/repositionFooter');
        }
    }
};
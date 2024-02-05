<template lang="">
    <customPageSwitcher/>
    <slot></slot>
</template>
<script>
import customPageSwitcher from "@/components/common/customPageSwitcher.vue";
export default {
    components: {
        customPageSwitcher
    },
    mounted() {
        document.body.classList.add('landing-body');
    },
    unmounted() {
        document.body.classList.remove('landing-body');
    },
};
</script>
<style lang=""></style>

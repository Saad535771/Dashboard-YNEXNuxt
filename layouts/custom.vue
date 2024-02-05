<template lang="">
    <slot></slot>
</template>
<script>
import { switcherStore } from '@/stores/switcher';
export default {
    data() {
        return {
            switcher: switcherStore(),
        }
    },
    methods: {
        retrieveFromLocalStorage() {
            this.switcher.retrieveFromLocalStorage();
        },
    },
    mounted() {
        this.retrieveFromLocalStorage();
    }

};
</script>
<style lang=""></style>

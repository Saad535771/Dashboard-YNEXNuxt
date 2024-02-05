<template>
    <div class="toggle" :class="[customClass, { 'on': isActive }]" @click="toggleState">
        <span></span>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isActive: this.isOn,
        }
    },
    props: {
        customClass: {
            type: String,
            default: '',
        },
        isOn: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        toggleState() {
            this.isActive = !this.isActive;
        }
    },
};
</script>
  
<style scoped></style>
  
<template lang="">
   <!-- Scroll To Top -->
   <div ref="scrollToTop" class="scrollToTop">
        <span class="arrow"><i class="ri-arrow-up-s-fill fs-20"></i></span>
    </div>
    <!-- Scroll To Top -->
</template>
<script>
export default {
    methods: {
        onScroll() {
            const scrollToTop = this.$refs["scrollToTop"];
            if (scrollToTop) {
                if (window.scrollY > 100) {
                    scrollToTop.style.display = "flex";
                } else {
                    scrollToTop.style.display = "none";
                }
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
        const scrollToTop = this.$refs["scrollToTop"];
        scrollToTop.onclick = () => {
            window.scrollTo(0, 0);
        };
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
    },
}
</script>
<style lang="">
    
</style>
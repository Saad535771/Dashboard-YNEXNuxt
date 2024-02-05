<template lang="">
  <Switcher />
  <div class="page">
    <Header />
    <Sidebar />
    
        <!-- Start::app-content -->
        <div class="main-content app-content">
            <div class="container-fluid">
              <slot></slot>
            </div>
        </div>
        <!-- End::app-content -->
      <Footer />
  </div>
  <BackToTop />
</template>
<script>
import Header from "@/components/common/header.vue";
import Sidebar from "@/components/common/sidebar.vue";
import Footer from "@/components/common/footer.vue";
import Switcher from "@/components/common/switcher.vue";
import BackToTop from "@/components/common/backtotop.vue";
export default {
  components: {
    Header,
    Sidebar,
    Footer,
    Switcher,
    BackToTop
  },
};
</script>
<style lang=""></style>

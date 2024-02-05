<template lang="">
  <Switcher />
  <div class="page">
    <Header />
    <Sidebar />
    
        <!-- Start::app-content -->
        <div class="main-content app-content">
            <div class="container-fluid">
              <!-- Start::page-header -->
              <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                <div>
                    <p class="fw-semibold fs-18 mb-0">Welcome back, Json Taylor !</p>
                    <span class="fs-semibold text-muted">Track your sales activity, leads and deals here.</span>
                </div>
                <div class="btn-list mt-md-0 mt-2">
                    <button type="button" class="btn btn-primary btn-wave">
                        <i class="ri-filter-3-fill me-2 align-middle"></i>Filters
                    </button>
                    <button type="button" class="btn btn-outline-secondary btn-wave">
                        <i class="ri-upload-cloud-line me-2 align-middle"></i>Export
                    </button>
                </div>
              </div>
              <!-- End::page-header -->
              <slot></slot>
            </div>
        </div>
        <!-- End::app-content -->
      <Footer />
  </div>
  <BackToTop />
</template>
<script lang="ts">
import Header from "@/components/common/header.vue";
import Sidebar from "@/components/common/sidebar.vue";
import Footer from "@/components/common/footer.vue";
import Switcher from "@/components/common/switcher.vue";
import BackToTop from "@/components/common/backtotop.vue";
import PageHeader from "@/components/common/pageheader.vue";
export default {
  components: {
    Header,
    Sidebar,
    Footer,
    Switcher,
    PageHeader,
    BackToTop
  },
};
</script>
<script lang="ts" setup>
</script>
<style lang=""></style>

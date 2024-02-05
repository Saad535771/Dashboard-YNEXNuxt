<script lang="ts" >
export default {
  props: {
    jobsListData : Object,
  }
}
</script>

<template>
  <div class="card custom-card featured-jobs">
    <div class="card-body">
      <div class="btn-list float-end">
        <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light text-default "><v-tooltip activator="parent" location="top">Add to wishlist</v-tooltip><span><i class="bi bi-heart"></i></span></a>
        <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-warning-transparent"><v-tooltip activator="parent" location="top">Featured Jobs</v-tooltip><span><i class="bi bi-star-fill"></i></span></a>
      </div>
      <div class="d-flex mb-3 flex-wrap gap-2 align-items-center">
        <span class="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border" v-html="jobsListData?.logo"></span>
        <div>
          <h5 class="fw-semibold mb-0 d-flex align-items-center"><a href="javascript:void(0);"> {{jobsListData?.role}}</a></h5>
          <a href="javascript:void(0);">{{jobsListData?.company}}</a>
        </div>
      </div>
      <div class="popular-tags mb-3">
        <a href="javascript:void(0);" class="badge rounded-pill bg-light text-default me-2"  v-for="(val, key) in jobsListData?.details" :key="key"><i
            class="bi  text-muted me-1" :class="val.icon"></i> {{val.name}}</a>
    </div>
    <div class="d-flex justify-content-between">
      <h6 class="fw-semibold mb-0">${{jobsListData?.from}} - ${{ jobsListData?.to }}</h6>
      <a href="" class="text-primary fw-semibold fs-14 d-inline-flex">Apply Now <i class="fe fe-arrow-right transform-arrow ms-2 lh-base"></i></a>  
    </div>
  </div>
</div></template>

<style style scoped></style>
<script lang="ts" >
export default {
  props: {
    companyListData: Object,
  }
}
</script>

<template>
  <div v-for="(value, key) in companyListData" :key="key" class="card custom-card">
    <div class="card-body">
      <div class="btn-list float-end">
        <a href="javascript:void(0);" class="avatar avatar-rounded bg-light text-default avatar-sm"><v-tooltip activator="parent" location="top">Add to Wishlist</v-tooltip><span><i
              class="bi bi-heart"></i></span></a>
        <a v-if="value.share" href="javascript:void(0);" class="avatar avatar-rounded bg-light text-default avatar-sm"><v-tooltip activator="parent" location="top">Share this company</v-tooltip><span><i
              class="bi bi-share"></i></span></a>
      </div>
      <div class="d-flex align-items-center flex-wrap gap-2">
        <span class="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
          <img :src="value.logo" alt="">
        </span>
        <div class="ms-2">
          <h5 class="fw-semibold mb-0 d-flex align-items-center"><a href="javascript:void(0);"> {{ value.name }} <i class="bi bi-check-circle-fill text-success fs-16"><v-tooltip activator="parent" location="top">Verified company</v-tooltip></i></a></h5>
          <div class="d-flex gap-2">
            <a href="javascript:void(0);"><i class="bi bi-geo-alt fs-11"></i>{{value.location}} </a>
            <p class="mb-0 text-muted">{{value.establishment}}</p>
          </div>
          <div class="d-flex align-items-center fs-12 text-muted">
            <p class="fs-12 mb-0">Ratings : </p>
            <div class="min-w-fit-content ms-2">
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-half"></i></span>
            </div>
            <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
              <span>({{value.reviews}})</span>
              <span>Ratings</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="d-flex align-items-center flex-wrap gap-2">
        <div class="flex-grow-1">
          <a href="javascript:void(0);" class="badge badge-md rounded-pill bg-info-transparent me-2"><v-tooltip activator="parent" location="top">No of employees</v-tooltip><i class="bi bi-people me-1"></i>No. of Emp : {{value.employees}}</a>
          <a href="javascript:void(0);" class="badge badge-md rounded-pill bg-primary-transparent"><i
              class="bi bi-briefcase me-1"></i>Vacancies : {{value.vacancies}}</a>
        </div>
        <a href="javascript:void(0);" class="btn btn-wave btn-primary">
          View Profile <i class="ri-arrow-right-line align-middle"></i>
        </a>
      </div>
    </div>
</div></template>

<style scoped></style>

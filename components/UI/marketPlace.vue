<script lang="ts" >
export default {
  props: {
    marketPlaceData: Object
  }
}
</script>

<template >
  <div v-for="(value, key) in marketPlaceData" :key="key" class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
    <div class="card custom-card">
      <img :src="value.bg" class="card-img-top" alt="...">
      <div class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
        <div class="flex-fill">
          <button type="button" class="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
            <i class="ri-heart-fill"> </i>
          </button>
        </div>
        <div div>
          <span class="badge nft-like-badge text-fixed-white"> <i
              class="ri-heart-fill me-1 text-danger align-middle"> </i>{{ value.likes }}k</span>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex align-items-center mb-3">
          <div class="me-2 lh-1">
            <span class="avatar avatar-rounded avatar-md">
              <img :src="value.image" alt="">
            </span>
          </div>
          <div>
            <p class="mb-0 fw-semibold"> {{ value.name }} </p>
            <p class="fs-12 text-muted mb-0"> {{ value.cId }} </p>
          </div>
        </div>
        <p class="mb-0 text-fixed-white nft-auction-time">
          {{ value.auctionTime }}
        </p>
        <p class="fs-15 fw-semibold mb-2"> <a href="javascript:void(0);"> {{ value.title }}</a>
        </p>
        <div class="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
          <div class="fw-semibold">
            {{ value.subtitle }} -
          </div>
          <div class="d-flex flex-wrap align-items-center lh-1">
            <span class="avatar avatar-xs me-1">
              <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
            </span>{{ value.price }}ETH
          </div>
        </div>
        <div class="d-grid">
          <button type="button" class="btn btn-primary-light btn-wave waves-effect waves-light"> Place Bid </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style style scoped></style>
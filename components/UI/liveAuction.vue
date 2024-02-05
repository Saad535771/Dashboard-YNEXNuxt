<script lang="ts" >
export default {
  props: {
    liveAuctionData: Object
  },
  methods: {
  },
}
</script>

<template >
  <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12" v-for="(value, key) in liveAuctionData" :key="key">
    <div class="card custom-card">
      <div class="card-body p-3">
        <div class="mb-3 overflow-hidden position-relative">
          <a href="javascript:void(0);" class="stretched-link"></a>
          <img :src="value.bg" alt="img" class="nft-img img-fluid">
          <a href="javascript:void(0);" class="nft-btn"><v-tooltip activator="parent" location="top">Like</v-tooltip><i
              class="ti ti-heart"></i></a>
          <span class="nft-timer-container">
            <i class="ti ti-bolt fs-14"></i>
            <span class="nft-timer ms-1 fs-11">{{value.auctionTime}}</span>
          </span>
        </div>
        <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap">
          <div class="d-inline-flex align-items-start position-relative">
            <NuxtLink to="/pages/profile" class="stretched-link"></NuxtLink>
            <div class="me-2">
              <span class="avatar avatar-rounded">
                <img :src="value.image" alt="img">
              </span>
            </div>
            <div class="flex-grow-1">
              <span class="mb-0 d-block fs-14 fw-semibold">{{value.name}}</span>
              <span class="fs-13 text-muted">{{value.cId}}<i
                  class="bi bi-patch-check-fill text-success ms-1 fs-15"></i></span>
            </div>
          </div>
          <span class="fs-13 text-muted">{{value.likes}}K Likes</span>
        </div>
        <div class="fs-15 fw-semibold mb-2"><a href="javascript:void(0);">{{ value.title }}</a></div>
        <div class="d-flex align-items-end flex-wrap gap-2">
          <div class="flex-fill">
            <p class="fs-14 mb-1 text-muted">{{value.subtitle}}</p>
            <div class="fs-16 mb-0 d-flex align-items-center fw-semibold">
              <span class="avatar avatar-xs me-1"><img src="/images/nft-images/34.png" alt=""></span>
              {{value.price}}ETH
            </div>
          </div>
          <a href="javascript:void(0);" class="btn btn-primary-light btn-wave">Place Bid</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style style scoped></style>
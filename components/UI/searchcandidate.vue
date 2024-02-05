<script lang="ts" >
export default {
  props: {
    candidatesListData: Object,
  },
  created() {
  }
}
</script>

<template>
  <div v-for="(value, key) in candidatesListData" :key="key" class="card custom-card">
    <div class="card-body">
      <div class="btn-list float-end">
        <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-primary text-fixed-white"><v-tooltip
            activator="parent" location="top">Download Resume</v-tooltip><span><i class="bi bi-download"></i></span></a>
        <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light text-default"><v-tooltip
            activator="parent" location="top">Add to Wishlist</v-tooltip><span><i class="bi bi-heart"></i></span></a>
        <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-light text-default"><v-tooltip
            activator="parent" location="top">View Profile</v-tooltip><span><i class="bi bi-eye"></i></span></a>
      </div>
      <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
        <div>
          <span class="avatar avatar-lg avatar-rounded">
            <img :src="value.image" alt="">
          </span>
        </div>
        <div>
          <h5 class="fw-semibold mb-0 d-flex align-items-center">
            <NuxtLink to="/apps/jobs/candidate-details">
              {{ value.name }} <i class="bi bi-check-circle-fill text-success fs-16"><v-tooltip activator="parent" location="top">Verified candidate</v-tooltip></i></NuxtLink>
          </h5>
          <div class="d-flex gap-2 flex-wrap">
            <a href="javascript:void(0);">{{ value.role }}</a>
            <p class="mb-0 fs-12 text-muted"><i class="bi bi-geo-alt fs-11"></i> {{ value.location }}
            </p>
          </div>
          <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
            <p class="fs-12 mb-0">Ratings : </p>
            <div class="min-w-fit-content ms-2">
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-half"></i></span>
            </div>
            <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
              <span>({{ value.review }})</span>
              <span>Ratings</span>
            </a>
          </div>
        </div>
      </div>
      <div class="popular-tags mb-4">
        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
            class="bi bi-mortarboard text-muted me-1"></i> Graduate</a>
        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
            class="bi bi-moon-stars text-muted me-1"></i> flexible-shift</a>
        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
            class="bi bi-clock text-muted me-1"></i> Immediate Joinee</a>
        <a href="javascript:void(0);" class="me-1 badge rounded-pill bg-light text-default"><i
            class="bi bi-broadcast text-muted me-1"></i> Good at English</a>
      </div>
      <div class="d-flex align-items-center">
        <p class="mb-0 flex-grow-1"><span class="text-muted">Package (Yearly) :</span> <span class="fw-semibold"> <v-tooltip activator="parent" location="top">Current</v-tooltip>{{ value.packageFrom }}</span> - <span class="fw-semibold"><v-tooltip activator="parent" location="top">Expected</v-tooltip> {{ value.packageTo }}</span> </p>
        <p class="mb-0"><span class="text-muted"> Languages :</span> <span class="fw-semibold">
            <template v-for="(language, key) in value.languages" :key="key">
              {{ language }}
            </template></span></p>
      </div>
    </div>
    <div class="card-footer">
      <div class="d-flex align-items-center gap-3 flex-wrap">
        <h6 class="mb-0 fw-semibold">Skills :</h6>
        <div class="popular-tags flex-grow-1">
          <a v-for="(skill, key) in value.skills.slice(0, 3)" :key="key" href="javascript:void(0);"
            class="me-1 badge rounded-pill bg-light text-default">{{ skill }}</a>
          <a v-if="value.skills.length > 3" href="javascript:void(0);"
            class="me-1 badge rounded-pill bg-primary-transparent">More</a>
        </div>
        <div>
          <a v-if="value.bondAccept != 0" href="javascript:void(0);"
            class="me-1 badge badge-md rounded-pill bg-info-transparent"><v-tooltip activator="parent" location="top">1 year bond accepted</v-tooltip><i class="bi bi-hand-thumbs-up me-1"></i>{{ value.bondAccept }} year bond
            accepted</a>
          <a href="javascript:void(0);" class="me-1 badge badge-md rounded-pill bg-primary-transparent"><i
              class="bi bi-briefcase me-1"></i>Exp : {{ value.experience }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

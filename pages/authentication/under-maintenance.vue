<script lang="ts">

export default {

    setup() {
        definePageMeta({
            layout: 'custom'
        })

    },
};
</script>

<template>
    <div class="row authentication under-maintenance mx-0">

        <div class="col-xxl-8 col-xl-8 col-lg-8 col-12">
            <div class="authentication-cover">
                <div class="aunthentication-cover-content text-center">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-xxl-6 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            <div class="mb-2">
                                <NuxtLink to='/'>
                                    <img src="/images/brand-logos/toggle-logo.png" alt="" class="authentication-brand">
                                </NuxtLink>
                            </div>
                            <p class="fw-semibold fs-12 mb-1 op-4">STAY TUNED</p>
                            <h1 class="fw-bold mb-3">Under Maintenance</h1>
                            <p class="mb-4">Our website is under maintenance, wait for some time.</p>
                            <div class="row mt-4 gy-xxl-0 gy-3 mb-5" id="timer">
                                <Countdown />
                            </div>
                            <div class="mt-5">
                                <div class="btn-list">
                                    <button class="btn btn-icon btn-primary btn-wave waves-effect waves-light">
                                        <i class="ri-facebook-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-secondary btn-wave waves-effect waves-light">
                                        <i class="ri-twitter-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-warning btn-wave waves-effect waves-light">
                                        <i class="ri-instagram-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-success btn-wave waves-effect waves-light">
                                        <i class="ri-github-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-danger btn-wave waves-effect waves-light">
                                        <i class="ri-youtube-line fw-bold"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none px-0">
            <div
                class="bg-light w-100 h-100 d-flex align-items-center justify-content-center under-maintenance-image-container">
                <img src="/images/media/media-88.svg" alt="" class="imig-fluid">
            </div>
        </div>

    </div>
</template>

<style scoped></style>


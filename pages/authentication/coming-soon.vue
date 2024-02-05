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
    <div class="row authentication coming-soon mx-0">

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
                            <h1 class="fw-bold mb-3">Coming Soon</h1>
                            <p class="mb-4">Our website is currently under construction, enter your email id to get latest
                                updates and notifications about the website.</p>
                            <div class="input-group mb-5">
                                <input type="email" class="form-control form-control-lg" placeholder="info@gmail.com"
                                    aria-label="info@gmail.com" aria-describedby="button-addon2">
                                <button class="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                            </div>
                            <div class="row mt-4 mb-5 gy-xxl-0 gy-3 justify-content-center" id="timer">
                                <Countdown />
                            </div>
                            <div class="mt-5">
                                <div class="btn-list">
                                    <button class="btn btn-icon btn-primary btn-wave">
                                        <i class="ri-facebook-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-secondary btn-wave">
                                        <i class="ri-twitter-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-warning btn-wave">
                                        <i class="ri-instagram-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-success btn-wave">
                                        <i class="ri-github-line fw-bold"></i>
                                    </button>
                                    <button class="btn btn-icon btn-danger btn-wave">
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
            <div class="bg-light w-100 h-100 d-flex align-items-center justify-content-center coming-soom-image-container">
                <img src="/images/media/media-87.svg" alt="" class="imig-fluid">
            </div>
        </div>

    </div>
</template>

<style scoped></style>


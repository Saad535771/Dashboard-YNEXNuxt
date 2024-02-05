<script lang="ts">
import passwordInput from '@/components/UI/passwordInput.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

export default {
    setup() {
        definePageMeta({
            layout: 'custom'
        });
        return {
            pagination: {
                clickable: true,
            },
            modules: [Navigation, Pagination, Keyboard]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        passwordInput
    },
    mounted() {
        document.body.classList.add('bg-white');
    },
    unmounted() {
        document.body.classList.remove('bg-white');
    },
}
</script>

<template>
    <div class="row authentication mx-0">

        <div class="col-xxl-7 col-xl-7 col-lg-7">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-7 col-sm-8 col-12">
                    <div class="p-5">
                        <div class="mb-3">
                            <NuxtLink to='/'>
                                <img src="/images/brand-logos/desktop-logo.png" alt=""
                                    class="authentication-brand desktop-logo">
                                <img src="/images/brand-logos/desktop-dark.png" alt=""
                                    class="authentication-brand desktop-dark">
                            </NuxtLink>
                        </div>
                        <p class="h5 fw-semibold mb-2">Lock Screen</p>
                        <p class="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
                        <div class="d-flex align-items-center mb-4">
                            <div class="lh-1">
                                <span class="avatar avatar-md avatar-rounded">
                                    <img src="/images/faces/15.jpg" alt="">
                                </span>
                            </div>
                            <div class="ms-3">
                                <p class="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
                            </div>
                        </div>
                        <div class="row gy-3">
                            <div class="col-xl-12 mb-3">
                                <label for="lockscreen-password" class="form-label text-default">Password</label>
                                <div class="input-group">
                                    <passwordInput initialValue="" name="password" id="password" placeholder="Password" />
                                </div>
                                <div class="mt-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label text-muted fw-normal" for="defaultCheck1">
                                            Remember password ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 d-grid mt-2">
                                <NuxtLink to='/' class="btn btn-lg btn-primary">Unlock</NuxtLink>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="fs-12 text-muted mt-4">Try unlock with different methods <a class="text-success"
                                    href="javascript:void(0);"><u>Finger print</u></a> / <a class="text-success"
                                    href="javascript:void(0);"><u>Face Id</u></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5 d-lg-block d-none px-0">
            <div class="authentication-cover">
                <div class="aunthentication-cover-content rounded">
                    <swiper :navigation="true" :pagination="pagination" :keyboard="{ enabled: true, }" :modules="modules"
                        class="swiper-wrapper">
                        <swiper-slide>
                            <div class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="/images/authentication/2.png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Lockscreen</h6>
                                    <p class="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                                        voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at
                                        ratione.</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="/images/authentication/3.png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Lockscreen</h6>
                                    <p class="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                                        voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at
                                        ratione.</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="/images/authentication/2.png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Lockscreen</h6>
                                    <p class="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                                        voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at
                                        ratione.</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped></style>

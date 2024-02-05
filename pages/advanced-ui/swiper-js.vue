<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, EffectCube, EffectFade, EffectCoverflow, EffectFlip, FreeMode, Thumbs } from 'swiper/modules';
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper: any) => {
            thumbsSwiper.value = swiper;
        };
        return {
            thumbsSwiper,
            setThumbsSwiper,
            pagination: {
                clickable: true,
            },
            modules: [Autoplay, Navigation, Pagination, Scrollbar, Mousewheel, Keyboard, EffectCube, EffectFade, EffectCoverflow, EffectFlip, FreeMode, Thumbs],
        };

    },
    components: {
        PageHeader,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            dataToPass: {
                current: "SwiperJs",
                list: [
                    'AdvancedUI', 'SwiperJs'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Swiper
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider">
                        <swiper-slide>
                            <img src="/images/media/media-27.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-26.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-25.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Swiper With Navigation
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" :navigation="true" :modules="modules" class="notification-slider">
                        <swiper-slide>
                            <img src="/images/media/media-29.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-28.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-30.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Swiper with Pagination
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :pagination="pagination" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-23.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-31.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-33.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Dynamic Pagination
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :pagination="{
                        dynamicBullets: true,
                    }" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-21.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-17.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-16.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Pagination With Progress
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :pagination="{
                        type: 'progressbar',
                    }" :navigation="true" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-12.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-8.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-5.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Pagination Fraction
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :pagination="{
                        type: 'fraction',
                    }" :navigation="true" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-6.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-30.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-31.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Custom Paginatioin
                    </div>
                </div>
                <div class="card-body">

                    <swiper :autoplay="true" class="notification-slider custom-pagination" :pagination="pagination"
                        :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-25.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-5.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-33.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Scrollbar Swiper
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :scrollbar="{
                        hide: true,
                    }" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-30.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-28.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-29.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Vertical Swiper
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :pagination="{
                        clickable: true,
                    }" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-8.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-32.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-17.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Mouse Wheel Control
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :slidesPerView="1" :spaceBetween="30"
                        :mousewheel="true" :pagination="{
                            clickable: true,
                        }" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-28.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-30.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-32.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Keyboard Control
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :slidesPerView="1" :spaceBetween="30" :keyboard="{
                        enabled: true,
                    }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-31.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-12.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-8.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Nested Swiper</div>
                </div>
                <div class="card-body">

                    <swiper :autoplay="true" class="notification-slider" :slidesPerView="1" :spaceBetween="30"
                        :keyboard="{ enabled: true, }" :pagination="{ clickable: true, }" :navigation="true"
                        :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-30.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <swiper :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }" class="mySwiper2 swiper-v" :spaceBetween="50" :pagination="{
    clickable: true,
}" :modules="modules">
                                <swiper-slide><img src="/images/media/media-25.jpg" alt=""></swiper-slide>
                                <swiper-slide><img src="/images/media/media-31.jpg" alt=""></swiper-slide>
                                <swiper-slide><img src="/images/media/media-32.jpg" alt=""></swiper-slide>
                            </swiper>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-28.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-29.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Effect Cube
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :effect="'cube'" :grabCursor="true" :cubeEffect="{
                        shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94
                    }" :pagination="pagination" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-62.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-63.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-64.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Effect Fade
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :spaceBetween="30" :effect="'fade'"
                        :navigation="true" :pagination="{
                            clickable: true,
                        }" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-18.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-19.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-20.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Effect Flip
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :effect="'flip'" :grabCursor="true"
                        :pagination="pagination" :navigation="true" :modules="modules">
                        <swiper-slide>
                            <img src="/images/media/media-20.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-62.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/media/media-63.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Effect Coverflow
                    </div>
                </div>
                <div class="card-body">
                    <swiper :autoplay="true" class="notification-slider" :effect="'coverflow'" :grabCursor="true"
                        :centeredSlides="false" :autoHeight="true" :slidesPerView="'auto'" :coverflowEffect="{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }" :pagination="pagination" :modules="modules">
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-40.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-41.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-42.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-43.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-44.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-59.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-49.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide height="100px">
                            <img class="img-fluid" src="/images/media/media-61.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Thumbs Gallery
                    </div>
                </div>
                <div class="card-body">

                    <swiper :autoplay="true" :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2">
                        <swiper-slide><img class="img-fluid rounded" src="/images/media/media-1.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid rounded" src="/images/media/media-2.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid rounded" src="/images/media/media-6.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid rounded" src="/images/media/media-7.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid rounded" src="/images/media/media-10.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid rounded" src="/images/media/media-11.jpg" /></swiper-slide>
                    </swiper>
                    <swiper :autoplay="true" @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4"
                        :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                        <swiper-slide><img class="img-fluid" src="/images/media/media-1.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid" src="/images/media/media-2.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid" src="/images/media/media-6.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid" src="/images/media/media-7.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid" src="/images/media/media-10.jpg" /></swiper-slide>
                        <swiper-slide><img class="img-fluid" src="/images/media/media-11.jpg" /></swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->
</template>

<style scoped lang="scss">
.notification-slider .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
}
</style>


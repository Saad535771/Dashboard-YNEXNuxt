<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation } from 'swiper/modules';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
        return {
            modules: [Navigation],
        };
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Blog",
                list: [
                    'Pages', 'Blog', 'Blog'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <div class="container-lg my-5">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xxl-6 col-xl-12 ">
                <div class="card custom-card overflow-hidden">
                    <div class="card-body p-0">
                        <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-70.jpg" class="d-block w-100" alt="...">
                                        <div class="carousel-caption blog-caption text-start">
                                            <p class="mb-2">The agency has a diverse workforce of just under 18,000 civil
                                                servants, and works with many more U.S.</p>
                                            <h6 class="fw-semibold mb-2 text-fixed-white">N.A.S.A</h6>
                                            <div class="d-flex align-items-center">
                                                <span>
                                                    <img src="/images/faces/15.jpg" alt=""
                                                        class="avatar avatar-sm avatar-rounded me-2">
                                                </span>
                                                <div class="fw-semibold">Json Taylor - <span
                                                        class="fs-11 op-7 fw-normal">12,Dec
                                                        2022 - 04:34PM</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-71.jpg" class="d-block w-100" alt="...">
                                        <div class="carousel-caption blog-caption text-start">
                                            <p class="mb-2">NASA is committed to providing all categories of businesses in
                                                both
                                                NASA prime contracts and subcontracts. </p>
                                            <h6 class="fw-semibold mb-2 text-fixed-white">NASA Businesses</h6>
                                            <div class="d-flex align-items-center">
                                                <span>
                                                    <img src="/images/faces/15.jpg" alt=""
                                                        class="avatar avatar-sm avatar-rounded me-2">
                                                </span>
                                                <div class="fw-semibold">Elisha Keens - <span
                                                        class="fs-11 op-7 fw-normal">23,Dec 2022 - 11:27AM</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-72.jpg" class="d-block w-100" alt="...">
                                        <div class="carousel-caption blog-caption text-start">
                                            <p class="mb-2">NASA Nelson served in the U.S. Senate for 18 years from Florida
                                                space shuttle mission 61-C in 1986.</p>
                                            <h6 class="fw-semibold mb-2 text-fixed-white">NASA Leadership</h6>
                                            <div class="d-flex align-items-center">
                                                <span>
                                                    <img src="/images/faces/4.jpg" alt=""
                                                        class="avatar avatar-sm avatar-rounded me-2">
                                                </span>
                                                <div class="fw-semibold">Melissa Blue - <span
                                                        class="fs-11 op-7 fw-normal">16,Dec 2022 - 9:45AM</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-xl-12">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div class="card custom-card">
                            <a href="javascript:void(0);">
                                <img src="/images/media/media-36.jpg" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1">Touring
                                    excites
                                    in winter !</NuxtLink>
                                <p class="card-text text-muted mb-3">The holographic principle, theorized to be a property
                                    of
                                    quantum gravity, postulates that the description.</p>
                                <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-sm avatar-rounded me-2">
                                            <img src="/images/faces/10.jpg" alt="">
                                        </div>
                                        <div>
                                            <p class="mb-0 fw-semibold">Justin Kim</p>
                                            <p class="text-muted fs-10 mb-0">20,Dec 2022 - 16:32</p>
                                        </div>
                                    </div>
                                    <div class="btn-list">
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-thumb-up-line"></i></button>
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-chat-2-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div class="card custom-card">
                            <a href="javascript:void(0);">
                                <img src="/images/media/media-35.jpg" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1"> Boat
                                    manufacutrers are in debt !</NuxtLink>
                                <p class="card-text text-muted mb-3">when an unknown printer took a galley of type and
                                    scrambled
                                    it to make a type specimen book.</p>
                                <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-sm avatar-rounded me-2">
                                            <img src="/images/faces/5.jpg" alt="">
                                        </div>
                                        <div>
                                            <p class="mb-0 fw-semibold">Monika Karen</p>
                                            <p class="text-muted fs-10 mb-0">25,Dec 2022 - 12:45</p>
                                        </div>
                                    </div>
                                    <div class="btn-list">
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-thumb-up-line"></i></button>
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-chat-2-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="mb-0 fw-semibold">Popular Topics</h5>
                    <p class="mb-0 fw-semibold">
                        <a href="javascript:void(0);" class="text-primary"><u>View All</u></a>
                    </p>
                </div>
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6">
                        <a href="javascript:void(0);">
                            <div class="card custom-card bg-dark overlay-card text-fixed-white">
                                <img src="/images/media/media-73.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                    <div class="card-footer border-top-0">
                                        <h6 class="fw-semibold mb-0 text-fixed-white">Nature</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6">
                        <a href="javascript:void(0);">
                            <div class="card custom-card bg-dark overlay-card text-fixed-white">
                                <img src="/images/media/media-74.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                    <div class="card-footer border-top-0">
                                        <h6 class="fw-semibold mb-0 text-fixed-white">Sports</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6">
                        <a href="javascript:void(0);">
                            <div class="card custom-card bg-dark overlay-card text-fixed-white">
                                <img src="/images/media/media-75.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                    <div class="card-footer border-top-0">
                                        <h6 class="fw-semibold mb-0 text-fixed-white">Food</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6">
                        <a href="javascript:void(0);">
                            <div class="card custom-card bg-dark overlay-card text-fixed-white">
                                <img src="/images/media/media-76.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                    <div class="card-footer border-top-0">
                                        <h6 class="fw-semibold mb-0 text-fixed-white">Travel</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6">
                        <a href="javascript:void(0);">
                            <div class="card custom-card bg-dark overlay-card text-fixed-white">
                                <img src="/images/media/media-77.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                    <div class="card-footer border-top-0">
                                        <h6 class="fw-semibold mb-0 text-fixed-white">Fashion</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6">
                        <a href="javascript:void(0);">
                            <div class="card custom-card bg-dark overlay-card text-fixed-white">
                                <img src="/images/media/media-78.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                    <div class="card-footer border-top-0">
                                        <h6 class="fw-semibold mb-0 text-fixed-white">Animals</h6>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="row">
                    <div class="col-xl-6 col-xxl-8 col-lg-12 col-md-12">
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="card custom-card">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-26.jpg" class="card-img-top" alt="...">
                                    </a>
                                    <div class="card-body">
                                        <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1">
                                            Features of new car !</NuxtLink>
                                        <p class="card-text text-muted mb-3">The holographic principle, theorized to be a
                                            property of quantum gravity, postulates that the description.</p>
                                        <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar avatar-sm avatar-rounded me-2">
                                                    <img src="/images/faces/11.jpg" alt="">
                                                </div>
                                                <div>
                                                    <p class="mb-0 fw-semibold">Alister Chuk</p>
                                                    <p class="text-muted fs-10 mb-0">18,Dec 2022 - 12:25</p>
                                                </div>
                                            </div>
                                            <div class="btn-list">
                                                <button aria-label="button" type="button"
                                                    class="btn btn-icon btn-light btn-sm m-1"><i
                                                        class="ri-thumb-up-line"></i></button>
                                                <button aria-label="button" type="button"
                                                    class="btn btn-icon btn-light btn-sm m-1"><i
                                                        class="ri-chat-2-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div class="card custom-card">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-31.jpg" class="card-img-top" alt="...">
                                    </a>
                                    <div class="card-body">
                                        <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1">
                                            Beautiful beach on a sunny day !</NuxtLink>
                                        <p class="card-text text-muted mb-3">The holographic principle, theorized to be a
                                            property of quantum gravity, postulates that the description.</p>
                                        <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar avatar-sm avatar-rounded me-2">
                                                    <img src="/images/faces/3.jpg" alt="">
                                                </div>
                                                <div>
                                                    <p class="mb-0 fw-semibold">Samantha Nans</p>
                                                    <p class="text-muted fs-10 mb-0">25,Dec 2022 - 04:25</p>
                                                </div>
                                            </div>
                                            <div class="btn-list">
                                                <button aria-label="button" type="button"
                                                    class="btn btn-icon btn-light btn-sm m-1"><i
                                                        class="ri-thumb-up-line"></i></button>
                                                <button aria-label="button" type="button"
                                                    class="btn btn-icon btn-light btn-sm m-1"><i
                                                        class="ri-chat-2-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-4 col-lg-12 col-md-12">
                        <div class="card custom-card">
                            <div class="card-header d-flex align-items-center justify-content-between">
                                <div class="card-title">
                                    Featured Blogs
                                </div>
                                <div>
                                    <span class="badge bg-primary-transparent">32 Blogs</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-xl me-3">
                                                <img src="/images/media/media-39.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Samantha
                                                    Jack</a>
                                                <p class="mb-1 popular-blog-content text-truncate">
                                                    There are many variations of passages of Lorem Ipsum available
                                                </p>
                                                <span class="text-muted fs-11">24,Nov 2022 - 18:27</span>
                                            </div>
                                            <div>
                                                <button class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                                        class="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-xl me-3">
                                                <img src="/images/media/media-56.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Kirsten Sam</a>
                                                <p class="mb-1 popular-blog-content text-truncate">
                                                    Latin words, combined with a handful of model sentence
                                                </p>
                                                <span class="text-muted fs-11">28,Nov 2022 - 10:45</span>
                                            </div>
                                            <div>
                                                <button class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                                        class="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-xl me-3">
                                                <img src="/images/media/media-54.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Jessica
                                                    Karon</a>
                                                <p class="mb-1 popular-blog-content text-truncate">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                </p>
                                                <span class="text-muted fs-11">30,Nov 2022 - 08:32</span>
                                            </div>
                                            <div>
                                                <button class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                                        class="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-xl me-3">
                                                <img src="/images/media/media-52.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">Broad
                                                    Stuart</a>
                                                <p class="mb-1 popular-blog-content text-truncate">
                                                    It was popularised in the 1960s with the release of Letraset sheets
                                                    containing
                                                </p>
                                                <span class="text-muted fs-11">3,Dec 2022 - 12:56</span>
                                            </div>
                                            <div>
                                                <button class="btn btn-icon btn-light btn-sm rtl-rotate"><i
                                                        class="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item text-center">
                                        <button class="btn btn-primary-light">Load more</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="row">
                    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="card custom-card">
                            <a href="javascript:void(0);">
                                <img src="/images/media/media-40.jpg" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1">Strawberry
                                    juice recipe.</NuxtLink>
                                <p class="card-text text-muted mb-3">Want to have something different but healthy to drink?
                                    Then
                                    look no further!! Strawberry Juice is rich in vitamin C.</p>
                                <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-sm avatar-rounded me-2">
                                            <img src="/images/faces/7.jpg" alt="">
                                        </div>
                                        <div>
                                            <p class="mb-0 fw-semibold">Maria Bose</p>
                                            <p class="text-muted fs-10 mb-0">17,Dec 2022 - 12:32</p>
                                        </div>
                                    </div>
                                    <div class="btn-list">
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-thumb-up-line"></i></button>
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-chat-2-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="card custom-card">
                            <a href="javascript:void(0);">
                                <img src="/images/media/media-61.jpg" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1">Night Sky
                                    is
                                    pleasent to watch.</NuxtLink>
                                <p class="card-text text-muted mb-3">Sky map showing the night sky tonight from any
                                    location.
                                    What planets are visible tonight? Where is Mars. </p>
                                <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-sm avatar-rounded me-2">
                                            <img src="/images/faces/2.jpg" alt="">
                                        </div>
                                        <div>
                                            <p class="mb-0 fw-semibold">Helsenky</p>
                                            <p class="text-muted fs-10 mb-0">24,Dec 2022 - 14:21</p>
                                        </div>
                                    </div>
                                    <div class="btn-list">
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-thumb-up-line"></i></button>
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-chat-2-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="card custom-card">
                            <a href="javascript:void(0);">
                                <img src="/images/media/media-42.jpg" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1">Is fashion
                                    industry growing ?</NuxtLink>
                                <p class="card-text text-muted mb-3">The holographic principle, theorized to be a property
                                    of
                                    quantum gravity, postulates that the description.</p>
                                <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-sm avatar-rounded me-2">
                                            <img src="/images/faces/12.jpg" alt="">
                                        </div>
                                        <div>
                                            <p class="mb-0 fw-semibold">Jason Mama</p>
                                            <p class="text-muted fs-10 mb-0">19,Dec 2022 - 15:48</p>
                                        </div>
                                    </div>
                                    <div class="btn-list">
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-thumb-up-line"></i></button>
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-chat-2-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="card custom-card">
                            <a href="javascript:void(0);">
                                <img src="/images/media/media-59.jpg" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <NuxtLink to="/pages/blog/blog-details" class="fw-semibold fs-14 text-dark mb-1">Raising sun
                                    is
                                    a blessing to watch ..</NuxtLink>
                                <p class="card-text text-muted mb-3">Rising Sun is a 1993 American buddy cop crime thriller
                                    film
                                    directed by Philip Kaufman.</p>
                                <a href="javascript:void(0);" class="btn btn-primary-light">Read More</a>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-sm avatar-rounded me-2">
                                            <img src="/images/faces/16.jpg" alt="">
                                        </div>
                                        <div>
                                            <p class="mb-0 fw-semibold">Stuart Hall</p>
                                            <p class="text-muted fs-10 mb-0">13,Dec 2022 - 19:08</p>
                                        </div>
                                    </div>
                                    <div class="btn-list">
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-thumb-up-line"></i></button>
                                        <button aria-label="button" type="button" class="btn btn-icon btn-light btn-sm"><i
                                                class="ri-chat-2-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End::row-1 -->

        <!-- Start: pagination -->
        <div class="float-end mb-4">
            <nav aria-label="Page navigation" class="">
                <ul class="pagination mb-0">
                    <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);">
                            Prev
                        </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">
                            <i class="bi bi-three-dots"></i>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                    <li class="page-item">
                        <a class="page-link text-primary" href="javascript:void(0);">
                            next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- End: pagination -->
    </div>
</template>

<style scoped></style>


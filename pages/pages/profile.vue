<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Profile",
                list: [
                    'Pages', 'Profile'
                ]
            },
            lightbox: null,
            images: [
                { src: `${import.meta.env.BASE_URL}/images/media/media-40.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-40.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-41.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-41.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-42.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-42.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-43.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-43.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-44.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-44.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-45.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-45.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-46.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-46.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-60.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-60.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-26.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-26.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-32.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-32.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-30.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-30.jpg`, alt: 'alt' },
                { src: `${import.meta.env.BASE_URL}/images/media/media-31.jpg`, w: 600, h: 400, thumbnail: `${import.meta.env.BASE_URL}/images/media/media-31.jpg`, alt: 'alt' },
            ],
        };
    },
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#RandomUniqueId',
                children: 'a',
                pswpModule: () => import('photoswipe'),
                bgOpacity: 0.8,
                wheelToZoom: true,
                zoomTitle: 'Zoom',
            });
            this.lightbox.init();
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
        }
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-4 col-xl-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-body p-0">
                    <div class="d-sm-flex align-items-top p-4 border-bottom-0 main-profile-cover">
                        <div>
                            <span class="avatar avatar-xxl avatar-rounded online me-3">
                                <img src="/images/faces/9.jpg" alt="">
                            </span>
                        </div>
                        <div class="flex-fill main-profile-info">
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="fw-semibold mb-1 text-fixed-white">Json Taylor</h6>
                                <button class="btn btn-light btn-wave"><i
                                        class="ri-add-line me-1 align-middle"></i>Follow</button>
                            </div>
                            <p class="mb-1 text-muted text-fixed-white op-7">Chief Executive Officer (C.E.O)</p>
                            <p class="fs-12 text-fixed-white mb-4 op-5">
                                <span class="me-3"><i class="ri-building-line me-1 align-middle"></i>Georgia</span>
                                <span><i class="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                            </p>
                            <div class="d-flex mb-0">
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">113</p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Projects</p>
                                </div>
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">12.2k</p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Followers</p>
                                </div>
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">128</p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed">
                        <div class="mb-4">
                            <p class="fs-15 mb-2 fw-semibold">Professional Bio :</p>
                            <p class="fs-12 text-muted op-7 mb-0">
                                I am <b class="text-default">Sonya Taylor,</b> here by conclude that,i am the founder and
                                managing director of the prestigeous company name laugh at all and acts as the cheif
                                executieve officer of the company.
                            </p>
                        </div>
                        <div class="mb-0">
                            <p class="fs-15 mb-2 fw-semibold">Links :</p>
                            <div class="mb-0">
                                <p class="mb-1">
                                    <a href="javascript:;"
                                        class="text-primary"><u>https://www.spruko.com/</u></a>
                                </p>
                                <p class="mb-0">
                                    <a href="javascript:;"
                                        class="text-primary"><u>https://themeforest.net/user/spruko/portfolio</u></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Contact Information :</p>
                        <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i class="ri-mail-line align-middle fs-14"></i>
                                </span>
                                sonyataylor2531@gmail.com
                            </p>
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i class="ri-phone-line align-middle fs-14"></i>
                                </span>
                                +(555) 555-1234
                            </p>
                            <p class="mb-0">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i class="ri-map-pin-line align-middle fs-14"></i>
                                </span>
                                MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                            </p>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Social Networks :</p>
                        <div class="btn-list mb-0">
                            <button class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                <i class="ri-facebook-line fw-semibold"></i>
                            </button>
                            <button class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                <i class="ri-twitter-line fw-semibold"></i>
                            </button>
                            <button class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                <i class="ri-instagram-line fw-semibold"></i>
                            </button>
                            <button class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                <i class="ri-github-line fw-semibold"></i>
                            </button>
                            <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                <i class="ri-youtube-line fw-semibold"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Skills :</p>
                        <div>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Cloud computing</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Data analysis</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">DevOps</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Machine learning</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Programming</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Security</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Python</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">JavaScript</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Ruby</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">PowerShell</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">Statistics</span>
                            </a>
                            <a href="javascript:void(0);">
                                <span class="badge bg-light text-muted m-1">SQL</span>
                            </a>
                        </div>
                    </div>
                    <div class="p-4">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Followers :</p>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <div class="d-sm-flex align-items-top">
                                    <span class="avatar avatar-sm">
                                        <img src="/images/faces/1.jpg" alt="img">
                                    </span>
                                    <div class="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                        <p class="mb-0 lh-1">Alicia Sierra</p>
                                        <span class="fs-11 text-muted op-7">aliciasierra389@gmail.com</span>
                                    </div>
                                    <button class="btn btn-light btn-wave btn-sm">Follow</button>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-sm-flex align-items-top">
                                    <span class="avatar avatar-sm">
                                        <img src="/images/faces/3.jpg" alt="img">
                                    </span>
                                    <div class="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                        <p class="mb-0 lh-1">Samantha Mery</p>
                                        <span class="fs-11 text-muted op-7">samanthamery@gmail.com</span>
                                    </div>
                                    <button class="btn btn-light btn-wave btn-sm">Follow</button>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-sm-flex align-items-top">
                                    <span class="avatar avatar-sm">
                                        <img src="/images/faces/6.jpg" alt="img">
                                    </span>
                                    <div class="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                        <p class="mb-0 lh-1">Juliana Pena</p>
                                        <span class="fs-11 text-muted op-7">juliapena555@gmail.com</span>
                                    </div>
                                    <button class="btn btn-light btn-wave btn-sm">Follow</button>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-sm-flex align-items-top">
                                    <span class="avatar avatar-sm">
                                        <img src="/images/faces/15.jpg" alt="img">
                                    </span>
                                    <div class="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                        <p class="mb-0 lh-1">Adam Smith</p>
                                        <span class="fs-11 text-muted op-7">adamsmith99@gmail.com</span>
                                    </div>
                                    <button class="btn btn-light btn-wave btn-sm">Follow</button>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="d-sm-flex align-items-top">
                                    <span class="avatar avatar-sm">
                                        <img src="/images/faces/13.jpg" alt="img">
                                    </span>
                                    <div class="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                        <p class="mb-0 lh-1">Farhaan Amhed</p>
                                        <span class="fs-11 text-muted op-7">farhaanahmed989@gmail.com</span>
                                    </div>
                                    <button class="btn btn-light btn-wave btn-sm">Follow</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-8 col-xl-12">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div
                                class="p-3 border-bottom border-block-end-dashed d-flex align-items-center justify-content-between">
                                <div>
                                    <ul class="nav nav-tabs mb-0 tab-style-6 justify-content-start" id="myTab"
                                        role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="activity-tab" data-bs-toggle="tab"
                                                data-bs-target="#activity-tab-pane" type="button" role="tab"
                                                aria-controls="activity-tab-pane" aria-selected="true"><i
                                                    class="ri-gift-line me-1 align-middle "></i>Activity</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="posts-tab" data-bs-toggle="tab"
                                                data-bs-target="#posts-tab-pane" type="button" role="tab"
                                                aria-controls="posts-tab-pane" aria-selected="false"><i
                                                    class="ri-bill-line me-1 align-middle "></i>Posts</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="followers-tab" data-bs-toggle="tab"
                                                data-bs-target="#followers-tab-pane" type="button" role="tab"
                                                aria-controls="followers-tab-pane" aria-selected="false"><i
                                                    class="ri-money-dollar-box-line me-1 align-middle "></i>Friends</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="gallery-tab" data-bs-toggle="tab"
                                                data-bs-target="#gallery-tab-pane" type="button" role="tab"
                                                aria-controls="gallery-tab-pane" aria-selected="false"><i
                                                    class="ri-exchange-box-line me-1 align-middle "></i>Gallery</button>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="fw-semibold mb-2">Profile 60% completed - <a href="javascript:void(0);"
                                            class="text-primary fs-12">Finish now</a></p>
                                    <div class="progress progress-xs progress-animate">
                                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane show active fade p-0 border-0" id="activity-tab-pane"
                                        role="tabpanel" aria-labelledby="activity-tab" tabindex="0">
                                        <ul class="list-unstyled profile-timeline">
                                            <li>
                                                <div>
                                                    <span
                                                        class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                                        E
                                                    </span>
                                                    <p class="mb-2">
                                                        <b>You</b> Commented on <b>alexander taylor</b> post <a
                                                            class="text-secondary" href="javascript:void(0);"><u>#beautiful
                                                                day</u></a>.<span class="float-end fs-11 text-muted">24,Dec
                                                            2022 - 14:34</span>
                                                    </p>
                                                    <p class="profile-activity-media mb-0">
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-17.jpg" alt="">
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-18.jpg" alt="">
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                        <img src="/images/faces/11.jpg" alt="">
                                                    </span>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-default"><b>Json Smith</b> reacted to the post
                                                            &#128077;</span>.<span class="float-end fs-11 text-muted">18,Dec
                                                            2022 - 12:16</span>
                                                    </p>
                                                    <p class="text-muted mb-0">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Repudiandae, repellendus rem rerum excepturi aperiam ipsam
                                                        temporibus inventore ullam tempora eligendi libero sequi dignissimos
                                                        cumque, et a sint tenetur consequatur omnis!
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                        <img src="/images/faces/4.jpg" alt="">
                                                    </span>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-default"><b>Alicia Keys</b> shared a document with
                                                            <b>you</b></span>.<span
                                                            class="float-end fs-11 text-muted">21,Dec 2022 - 15:32</span>
                                                    </p>
                                                    <p class="profile-activity-media mb-0">
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/file-manager/3.png" alt="">
                                                        </a>
                                                        <span class="fs-11 text-muted">432.87KB</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <span
                                                        class="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                                        P
                                                    </span>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-default"><b>You</b> shared a post with 4 people
                                                            <b>Simon,Sasha,Anagha,Hishen</b></span>.<span
                                                            class="float-end fs-11 text-muted">28,Dec 2022 - 18:46</span>
                                                    </p>
                                                    <p class="profile-activity-media mb-2">
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-75.jpg" alt="">
                                                        </a>
                                                    </p>
                                                    <div>
                                                        <div class="avatar-list-stacked">
                                                            <span class="avatar avatar-sm avatar-rounded">
                                                                <img src="/images/faces/2.jpg" alt="img">
                                                            </span>
                                                            <span class="avatar avatar-sm avatar-rounded">
                                                                <img src="/images/faces/8.jpg" alt="img">
                                                            </span>
                                                            <span class="avatar avatar-sm avatar-rounded">
                                                                <img src="/images/faces/2.jpg" alt="img">
                                                            </span>
                                                            <span class="avatar avatar-sm avatar-rounded">
                                                                <img src="/images/faces/10.jpg" alt="img">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                        <img src="/images/faces/5.jpg" alt="">
                                                    </span>
                                                    <p class="text-muted mb-1">
                                                        <span class="text-default"><b>Melissa Blue</b> liked your post
                                                            <b>travel excites</b></span>.<span
                                                            class="float-end fs-11 text-muted">11,Dec 2022 - 11:18</span>
                                                    </p>
                                                    <p class="text-muted">you are already feeling the tense atmosphere of
                                                        the video playing in the background</p>
                                                    <p class="profile-activity-media mb-0">
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-59.jpg" class="m-1" alt="">
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-60.jpg" class="m-1" alt="">
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-61.jpg" class="m-1" alt="">
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                        <img src="/images/media/media-39.jpg" alt="">
                                                    </span>
                                                    <p class="mb-1">
                                                        <b>You</b> Commented on <b>Peter Engola</b> post <a
                                                            class="text-secondary" href="javascript:void(0);"><u>#Mother
                                                                Nature</u></a>.<span
                                                            class="float-end fs-11 text-muted">24,Dec 2022 - 14:34</span>
                                                    </p>
                                                    <p class="text-muted">Technology id developing rapidly kepp uo your work
                                                        &#128076;</p>
                                                    <p class="profile-activity-media mb-0">
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-26.jpg" alt="">
                                                        </a>
                                                        <a href="javascript:void(0);">
                                                            <img src="/images/media/media-29.jpg" alt="">
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade p-0 border-0" id="posts-tab-pane" role="tabpanel"
                                        aria-labelledby="posts-tab" tabindex="0">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <div class="d-sm-flex align-items-center lh-1">
                                                    <div class="me-3">
                                                        <span class="avatar avatar-md avatar-rounded">
                                                            <img src="/images/faces/9.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill me-sm-2 mt-1 mt-sm-0">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                placeholder="Recipient's username"
                                                                aria-label="Recipient's username with two button addons">
                                                            <button class="btn btn-light btn-wave d-none d-sm-block"
                                                                type="button"><i class="bi bi-emoji-smile"></i></button>
                                                            <button class="btn btn-light btn-wave" type="button"><i
                                                                    class="bi bi-paperclip"></i></button>
                                                            <button class="btn btn-light btn-wave" type="button"><i
                                                                    class="bi bi-camera"></i></button>
                                                            <button class="btn btn-primary btn-wave"
                                                                type="button">Post</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <PerfectScrollbar>
                                                <li class="list-group-item border-top-0 border-bottom-0"
                                                    id="profile-posts-scroll">
                                                    <div class="row gy-3">
                                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="rounded border">
                                                                <div class="p-3 d-flex align-items-top flex-wrap">
                                                                    <div class="me-2">
                                                                        <span class="avatar avatar-sm avatar-rounded">
                                                                            <img src="/images/faces/9.jpg" alt="">
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-fill">
                                                                        <p class="mb-1 fw-semibold lh-1">You</p>
                                                                        <p class="fs-11 mb-2 text-muted">24, Dec - 04:32PM
                                                                        </p>
                                                                        <p class="fs-12 text-muted mb-0">Lorem ipsum dolor
                                                                            sit
                                                                            amet consectetur adipisicing elit.</p>
                                                                        <p class="fs-12 text-muted mb-3">As opposed to using
                                                                            'Content here &#128076;</p>
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                            <div>
                                                                                <div class="btn-list">
                                                                                    <button
                                                                                        class="btn btn-primary-light btn-sm btn-wave">
                                                                                        Comment
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                        <i class="ri-thumb-up-line"></i>
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                        <i class="ri-share-line"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex align-items-top">
                                                                        <div>
                                                                            <span
                                                                                class="badge bg-primary-transparent me-2">Fashion</span>
                                                                        </div>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                class="btn btn-sm btn-icon btn-light btn-wave"
                                                                                type="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                                <i class="ti ti-dots-vertical"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu">
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Delete</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Hide</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Edit</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="rounded border">
                                                                <div class="p-3 d-flex align-items-top flex-wrap">
                                                                    <div class="me-2">
                                                                        <span class="avatar avatar-sm avatar-rounded">
                                                                            <img src="/images/faces/9.jpg" alt="">
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-fill">
                                                                        <p class="mb-1 fw-semibold lh-1">You</p>
                                                                        <p class="fs-11 mb-2 text-muted">26, Dec - 12:45PM
                                                                        </p>
                                                                        <p class="fs-12 text-muted mb-1">Shared pictures
                                                                            with 4
                                                                            of friends <span>Hiren,Sasha,Biden,Thara</span>.
                                                                        </p>
                                                                        <div
                                                                            class="d-flex lh-1 justify-content-between mb-3">
                                                                            <div>
                                                                                <a href="javascript:void(0);">
                                                                                    <span class="avatar avatar-md me-1">
                                                                                        <img src="/images/media/media-52.jpg"
                                                                                            alt="">
                                                                                    </span>
                                                                                </a>
                                                                                <a href="javascript:void(0);">
                                                                                    <span class="avatar avatar-md me-1">
                                                                                        <img src="/images/media/media-56.jpg"
                                                                                            alt="">
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                            <div>
                                                                                <div class="btn-list">
                                                                                    <button
                                                                                        class="btn btn-primary-light btn-sm btn-wave">
                                                                                        Comment
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                        <i class="ri-thumb-up-line"></i>
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                        <i class="ri-share-line"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="d-flex align-items-top">
                                                                            <div>
                                                                                <span
                                                                                    class="badge bg-success-transparent me-2">Nature</span>
                                                                            </div>
                                                                            <div class="dropdown">
                                                                                <button
                                                                                    class="btn btn-sm btn-icon btn-light btn-wave"
                                                                                    type="button" data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                    <i class="ti ti-dots-vertical"></i>
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Delete</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Hide</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Edit</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="avatar-list-stacked d-block mt-4 text-end">
                                                                            <span class="avatar avatar-xs avatar-rounded">
                                                                                <img src="/images/faces/2.jpg" alt="img">
                                                                            </span>
                                                                            <span class="avatar avatar-xs avatar-rounded">
                                                                                <img src="/images/faces/8.jpg" alt="img">
                                                                            </span>
                                                                            <span class="avatar avatar-xs avatar-rounded">
                                                                                <img src="/images/faces/2.jpg" alt="img">
                                                                            </span>
                                                                            <span class="avatar avatar-xs avatar-rounded">
                                                                                <img src="/images/faces/10.jpg" alt="img">
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="rounded border">
                                                                <div class="p-3 d-flex align-items-top flex-wrap">
                                                                    <div class="me-2">
                                                                        <span class="avatar avatar-sm avatar-rounded">
                                                                            <img src="/images/faces/9.jpg" alt="">
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-fill">
                                                                        <p class="mb-1 fw-semibold lh-1">You</p>
                                                                        <p class="fs-11 mb-2 text-muted">29, Dec - 09:53AM
                                                                        </p>
                                                                        <p class="fs-12 text-muted mb-1">Sharing an article
                                                                            that
                                                                            excites me about nature more than what i
                                                                            thought.
                                                                        </p>
                                                                        <p class="mb-3 profile-post-link">
                                                                            <a href="javascript:void(0);"
                                                                                class="fs-12 text-primary">
                                                                                <u>https://www.discovery.com/nature/caring-for-coral</u>
                                                                            </a>
                                                                        </p>
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                            <div>
                                                                                <div class="btn-list">
                                                                                    <button
                                                                                        class="btn btn-primary-light btn-sm btn-wave">
                                                                                        Comment
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                        <i class="ri-thumb-up-line"></i>
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                        <i class="ri-share-line"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex align-items-top">
                                                                        <div>
                                                                            <span
                                                                                class="badge bg-secondary-transparent me-2">Travel</span>
                                                                        </div>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                class="btn btn-sm btn-icon btn-light btn-wave"
                                                                                type="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                                <i class="ti ti-dots-vertical"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu">
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Delete</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Hide</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Edit</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="rounded border">
                                                                <div class="p-3 d-flex align-items-top flex-wrap">
                                                                    <div class="me-2">
                                                                        <span class="avatar avatar-sm avatar-rounded">
                                                                            <img src="/images/faces/9.jpg" alt="">
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-fill">
                                                                        <p class="mb-1 fw-semibold lh-1">You</p>
                                                                        <p class="fs-11 mb-2 text-muted">22, Dec - 11:22PM
                                                                        </p>
                                                                        <p class="fs-12 text-muted mb-1">Shared pictures
                                                                            with 3
                                                                            of your friends <span>Maya,Jacob,Amanda</span>.
                                                                        </p>
                                                                        <div
                                                                            class="d-flex lh-1 justify-content-between mb-3">
                                                                            <div>
                                                                                <a href="javascript:void(0);">
                                                                                    <span class="avatar avatar-md me-1">
                                                                                        <img src="/images/media/media-40.jpg"
                                                                                            alt="">
                                                                                    </span>
                                                                                </a>
                                                                                <a href="javascript:void(0);">
                                                                                    <span class="avatar avatar-md me-1">
                                                                                        <img src="/images/media/media-45.jpg"
                                                                                            alt="">
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                            <div>
                                                                                <div class="btn-list">
                                                                                    <button
                                                                                        class="btn btn-primary-light btn-sm btn-wave">
                                                                                        Comment
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                        <i class="ri-thumb-up-line"></i>
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                        <i class="ri-share-line"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="d-flex align-items-top">
                                                                            <div>
                                                                                <span
                                                                                    class="badge bg-success-transparent me-2">Nature</span>
                                                                            </div>
                                                                            <div class="dropdown">
                                                                                <button
                                                                                    class="btn btn-sm btn-icon btn-light btn-wave"
                                                                                    type="button" data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                    <i class="ti ti-dots-vertical"></i>
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Delete</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Hide</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Edit</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="avatar-list-stacked d-block mt-4 text-end">
                                                                            <span class="avatar avatar-xs avatar-rounded">
                                                                                <img src="/images/faces/1.jpg" alt="img">
                                                                            </span>
                                                                            <span class="avatar avatar-xs avatar-rounded">
                                                                                <img src="/images/faces/5.jpg" alt="img">
                                                                            </span>
                                                                            <span class="avatar avatar-xs avatar-rounded">
                                                                                <img src="/images/faces/16.jpg" alt="img">
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="rounded border">
                                                                <div class="p-3 d-flex align-items-top flex-wrap">
                                                                    <div class="me-2">
                                                                        <span class="avatar avatar-sm avatar-rounded">
                                                                            <img src="/images/faces/9.jpg" alt="">
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-fill">
                                                                        <p class="mb-1 fw-semibold lh-1">You</p>
                                                                        <p class="fs-11 mb-2 text-muted">18, Dec - 12:28PM
                                                                        </p>
                                                                        <p class="fs-12 text-muted mb-1">Followed this
                                                                            author
                                                                            for top class themes with best code you can get
                                                                            in
                                                                            the market.</p>
                                                                        <p class="mb-3 profile-post-link">
                                                                            <a href="javascript:;"
                                                                                target="_blank" class="fs-12 text-primary">
                                                                                <u>https://themeforest.net/user/spruko/portfolio</u>
                                                                            </a>
                                                                        </p>
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                            <div>
                                                                                <div class="btn-list">
                                                                                    <button
                                                                                        class="btn btn-primary-light btn-sm btn-wave">
                                                                                        Comment
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                        <i class="ri-thumb-up-line"></i>
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                        <i class="ri-share-line"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex align-items-top">
                                                                        <div>
                                                                            <span
                                                                                class="badge bg-secondary-transparent me-2">Travel</span>
                                                                        </div>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                class="btn btn-sm btn-icon btn-light btn-wave"
                                                                                type="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                                <i class="ti ti-dots-vertical"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu">
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Delete</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Hide</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Edit</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="rounded border">
                                                                <div class="p-3 d-flex align-items-top flex-wrap">
                                                                    <div class="me-2">
                                                                        <span class="avatar avatar-sm avatar-rounded">
                                                                            <img src="/images/faces/9.jpg" alt="">
                                                                        </span>
                                                                    </div>
                                                                    <div class="flex-fill">
                                                                        <p class="mb-1 fw-semibold lh-1">You</p>
                                                                        <p class="fs-11 mb-2 text-muted">02, Dec - 06:32AM
                                                                        </p>
                                                                        <p class="fs-12 text-muted mb-0">Lorem ipsum dolor
                                                                            sit
                                                                            amet consectetur adipisicing elit.</p>
                                                                        <p class="fs-12 text-muted mb-3">There are many
                                                                            variations of passages &#128079;&#128525;</p>
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                            <div>
                                                                                <div class="btn-list">
                                                                                    <button
                                                                                        class="btn btn-primary-light btn-sm btn-wave">
                                                                                        Comment
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                        <i class="ri-thumb-up-line"></i>
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                        <i class="ri-share-line"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex align-items-top">
                                                                        <div>
                                                                            <span
                                                                                class="badge bg-primary-transparent me-2">Fashion</span>
                                                                        </div>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                class="btn btn-sm btn-icon btn-light btn-wave"
                                                                                type="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                                <i class="ti ti-dots-vertical"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu">
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Delete</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Hide</a>
                                                                                </li>
                                                                                <li><a class="dropdown-item"
                                                                                        href="javascript:void(0);">Edit</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </PerfectScrollbar>
                                            <li class="list-group-item">
                                                <div class="text-center">
                                                    <button class="btn btn-primary-light btn-wave">Show All</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade p-0 border-0" id="followers-tab-pane" role="tabpanel"
                                        aria-labelledby="followers-tab" tabindex="0">
                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card shadow-none border">
                                                    <div class="card-body p-4">
                                                        <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded">
                                                                <img src="/images/faces/2.jpg" alt="">
                                                            </span>
                                                            <div class="mt-2">
                                                                <p class="mb-0 fw-semibold">Samantha May</p>
                                                                <p class="fs-12 op-7 mb-1 text-muted">
                                                                    samanthamay2912@gmail.com</p>
                                                                <span class="badge bg-info-transparent rounded-pill">Team
                                                                    Member</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-center">
                                                        <div class="btn-list">
                                                            <button class="btn btn-sm btn-light btn-wave">Block</button>
                                                            <button
                                                                class="btn btn-sm btn-primary btn-wave">Unfollow</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card shadow-none border">
                                                    <div class="card-body p-4">
                                                        <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded">
                                                                <img src="/images/faces/15.jpg" alt="">
                                                            </span>
                                                            <div class="mt-2">
                                                                <p class="mb-0 fw-semibold">Andrew Garfield</p>
                                                                <p class="fs-12 op-7 mb-1 text-muted">
                                                                    andrewgarfield98@gmail.com</p>
                                                                <span class="badge bg-success-transparent rounded-pill">Team
                                                                    Lead</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-center">
                                                        <div class="btn-list">
                                                            <button class="btn btn-sm btn-light btn-wave">Block</button>
                                                            <button
                                                                class="btn btn-sm btn-primary btn-wave">Unfollow</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card shadow-none border">
                                                    <div class="card-body p-4">
                                                        <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded">
                                                                <img src="/images/faces/5.jpg" alt="">
                                                            </span>
                                                            <div class="mt-2">
                                                                <p class="mb-0 fw-semibold">Jessica Cashew</p>
                                                                <p class="fs-12 op-7 mb-1 text-muted">
                                                                    jessicacashew143@gmail.com</p>
                                                                <span class="badge bg-info-transparent rounded-pill">Team
                                                                    Member</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-center">
                                                        <div class="btn-list">
                                                            <button class="btn btn-sm btn-light btn-wave">Block</button>
                                                            <button
                                                                class="btn btn-sm btn-primary btn-wave">Unfollow</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card shadow-none border">
                                                    <div class="card-body p-4">
                                                        <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded">
                                                                <img src="/images/faces/11.jpg" alt="">
                                                            </span>
                                                            <div class="mt-2">
                                                                <p class="mb-0 fw-semibold">Simon Cowan</p>
                                                                <p class="fs-12 op-7 mb-1 text-muted">
                                                                    jessicacashew143@gmail.com</p>
                                                                <span class="badge bg-warning-transparent rounded-pill">Team
                                                                    Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-center">
                                                        <div class="btn-list">
                                                            <button class="btn btn-sm btn-light btn-wave">Block</button>
                                                            <button
                                                                class="btn btn-sm btn-primary btn-wave">Unfollow</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card shadow-none border">
                                                    <div class="card-body p-4">
                                                        <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded">
                                                                <img src="/images/faces/7.jpg" alt="">
                                                            </span>
                                                            <div class="mt-2">
                                                                <p class="mb-0 fw-semibold">Amanda nunes</p>
                                                                <p class="fs-12 op-7 mb-1 text-muted">
                                                                    amandanunes45@gmail.com</p>
                                                                <span class="badge bg-info-transparent rounded-pill">Team
                                                                    Member</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-center">
                                                        <div class="btn-list">
                                                            <button class="btn btn-sm btn-light btn-wave">Block</button>
                                                            <button
                                                                class="btn btn-sm btn-primary btn-wave">Unfollow</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card shadow-none border">
                                                    <div class="card-body p-4">
                                                        <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded">
                                                                <img src="/images/faces/12.jpg" alt="">
                                                            </span>
                                                            <div class="mt-2">
                                                                <p class="mb-0 fw-semibold">Mahira Hose</p>
                                                                <p class="fs-12 op-7 mb-1 text-muted">
                                                                    mahirahose9456@gmail.com</p>
                                                                <span class="badge bg-info-transparent rounded-pill">Team
                                                                    Member</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer text-center">
                                                        <div class="btn-list">
                                                            <button class="btn btn-sm btn-light btn-wave">Block</button>
                                                            <button
                                                                class="btn btn-sm btn-primary btn-wave">Unfollow</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="text-center mt-4">
                                                    <button class="btn btn-primary-light btn-wave">Show All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade p-0 border-0" id="gallery-tab-pane" role="tabpanel"
                                        aria-labelledby="gallery-tab" tabindex="0">
                                        <div class="row" id="RandomUniqueId">
                                            <div class="col-lg-3 col-md-3 col-sm-6 col-12 pb-2"
                                                v-for="(image, key) in images" :key="key">
                                                <a :href="image.src" :data-pswp-width="image.w" :data-pswp-height="image.h"
                                                    target="_blank" rel="noreferrer">
                                                    <img :src="image.thumbnail" alt=""
                                                        style="width:100%; border-radius:0.25rem;overflow:hidden" />
                                                </a>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="text-center mt-4">
                                                    <button
                                                        class="btn btn-primary-light btn-wave waves-effect waves-light">Show
                                                        All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-xl-">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Personal Info
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="me-2 fw-semibold">
                                            Name :
                                        </div>
                                        <span class="fs-12 text-muted">Sonya Taylor</span>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="me-2 fw-semibold">
                                            Email :
                                        </div>
                                        <span class="fs-12 text-muted">sonyataylor231@gmail.com</span>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="me-2 fw-semibold">
                                            Phone :
                                        </div>
                                        <span class="fs-12 text-muted">+(555) 555-1234</span>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="me-2 fw-semibold">
                                            Designation :
                                        </div>
                                        <span class="fs-12 text-muted">C.E.O</span>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="me-2 fw-semibold">
                                            Age :
                                        </div>
                                        <span class="fs-12 text-muted">28</span>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="me-2 fw-semibold">
                                            Experience :
                                        </div>
                                        <span class="fs-12 text-muted">10 Years</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="card-title">
                                Recent Posts
                            </div>
                            <div>
                                <span class="badge bg-primary-transparent">Today</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <a href="javascript:void(0);">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-md me-3">
                                                <img src="/images/media/media-39.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0">Animals</p>
                                                <p class="mb-1 fs-12 profile-recent-posts text-truncate text-muted">
                                                    There are many variations of passages of Lorem Ipsum available
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a href="javascript:void(0);">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-md me-3">
                                                <img src="/images/media/media-56.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0">Travel</p>
                                                <p class="mb-1 fs-12 profile-recent-posts text-truncate text-muted">
                                                    Latin words, combined with a handful of model sentence
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a href="javascript:void(0);">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-md me-3">
                                                <img src="/images/media/media-54.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0">Interior</p>
                                                <p class="mb-1 fs-12 profile-recent-posts text-truncate text-muted">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a href="javascript:void(0);">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-md me-3">
                                                <img src="/images/media/media-64.jpg" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0">Nature</p>
                                                <p class="mb-1 fs-12 profile-recent-posts text-truncate text-muted">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="card-title">
                                Suggestions
                            </div>
                            <div>
                                <button class="btn btn-sm btn-success-light btn-wave">View All</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-semibold d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="/images/faces/15.jpg" alt="">
                                            </span>Alister
                                        </div>
                                        <div>
                                            <button class="btn btn-sm btn-icon btn-primary-light">
                                                <i class="ri-add-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-semibold d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="/images/faces/4.jpg" alt="">
                                            </span>Samantha Sams
                                        </div>
                                        <div>
                                            <button class="btn btn-sm btn-icon btn-primary-light">
                                                <i class="ri-add-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-semibold d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="/images/faces/11.jpg" alt="">
                                            </span>Jason Mama
                                        </div>
                                        <div>
                                            <button class="btn btn-sm btn-icon btn-primary-light">
                                                <i class="ri-add-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-semibold d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="/images/faces/5.jpg" alt="">
                                            </span>Alicia Sierra
                                        </div>
                                        <div>
                                            <button class="btn btn-sm btn-icon btn-primary-light">
                                                <i class="ri-add-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-semibold d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2">
                                                <img src="/images/faces/7.jpg" alt="">
                                            </span>Kiara Advain
                                        </div>
                                        <div>
                                            <button class="btn btn-sm btn-icon btn-primary-light">
                                                <i class="ri-add-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>


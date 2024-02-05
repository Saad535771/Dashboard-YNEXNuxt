<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/badge.js';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Badges",
                list: [
                    'UI-Elements', 'Badges'
                ]
            },
            prism
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.badges">
                <span class="badge bg-primary">Primary</span>
                <span class="badge bg-secondary">Secondary</span>
                <span class="badge bg-success">Success</span>
                <span class="badge bg-danger">Danger</span>
                <span class="badge bg-warning">Warning</span>
                <span class="badge bg-info">Info</span>
                <span class="badge bg-light text-dark">Light</span>
                <span class="badge bg-dark text-white">Dark</span>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.pillBadges">
                <div class="">
                    <span class="badge rounded-pill bg-primary">Primary</span>
                    <span class="ms-1 badge rounded-pill bg-secondary">Secondary</span>
                    <span class="ms-1 badge rounded-pill bg-success">Success</span>
                    <span class="ms-1 badge rounded-pill bg-danger">Danger</span>
                    <span class="ms-1 badge rounded-pill bg-warning">Warning</span>
                    <span class="ms-1 badge rounded-pill bg-info">Info</span>
                    <span class="ms-1 badge rounded-pill bg-light text-dark">Light</span>
                    <span class="ms-1 badge rounded-pill bg-dark text-white">Dark</span>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Light Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.lightBadges">
                <span class="badge bg-primary-transparent">Primary</span>
                <span class="badge bg-secondary-transparent">Secondary</span>
                <span class="badge bg-success-transparent">Success</span>
                <span class="badge bg-danger-transparent">Danger</span>
                <span class="badge bg-warning-transparent">Warning</span>
                <span class="badge bg-info-transparent">Info</span>
                <span class="badge bg-light-transparent text-dark">Light</span>
                <span class="badge bg-dark-transparent">Dark</span>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Light Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.lightPillBadges">
                <span class="badge rounded-pill bg-primary-transparent">Primary</span>
                <span class="badge rounded-pill bg-secondary-transparent">Secondary</span>
                <span class="badge rounded-pill bg-success-transparent">Success</span>
                <span class="badge rounded-pill bg-danger-transparent">Danger</span>
                <span class="badge rounded-pill bg-warning-transparent">Warning</span>
                <span class="badge rounded-pill bg-info-transparent">Info</span>
                <span class="badge rounded-pill bg-light-transparent text-dark">Light</span>
                <span class="badge rounded-pill bg-dark-transparent">Dark</span>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Gradient Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.gradientBadges">
                <span class="badge bg-primary-gradient">Primary</span>
                <span class="badge bg-secondary-gradient">Secondary</span>
                <span class="badge bg-success-gradient">Success</span>
                <span class="badge bg-danger-gradient">Danger</span>
                <span class="badge bg-warning-gradient">Warning</span>
                <span class="badge bg-info-gradient">Info</span>
                <span class="badge bg-orange-gradient">orange</span>
                <span class="badge bg-purple-gradient">purple</span>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Gradient Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.gradientPillBadges">
                <span class="badge rounded-pill bg-primary-gradient">Primary</span>
                <span class="badge rounded-pill bg-secondary-gradient">Secondary</span>
                <span class="badge rounded-pill bg-success-gradient">Success</span>
                <span class="badge rounded-pill bg-danger-gradient">Danger</span>
                <span class="badge rounded-pill bg-warning-gradient">Warning</span>
                <span class="badge rounded-pill bg-info-gradient">Info</span>
                <span class="badge rounded-pill bg-orange-gradient">orange</span>
                <span class="badge rounded-pill bg-purple-gradient">purple</span>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-3 -->

    <!-- Start::row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Outline Badges" customCardBodyClass="d-flex flex-wrap gap-2" :code="prism.outlineBadges">
                <span class="badge bg-outline-primary">Primary</span>
                <span class="badge bg-outline-secondary">Secondary</span>
                <span class="badge bg-outline-success">Success</span>
                <span class="badge bg-outline-danger">Danger</span>
                <span class="badge bg-outline-warning">Warning</span>
                <span class="badge bg-outline-info">Info</span>
                <span class="badge bg-outline-light text-dark">Light</span>
                <span class="badge bg-outline-dark">Dark</span>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Outline Pill Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.outlinePillBadges">
                <span class="badge rounded-pill bg-outline-primary">Primary</span>
                <span class="badge rounded-pill bg-outline-secondary">Secondary</span>
                <span class="badge rounded-pill bg-outline-success">Success</span>
                <span class="badge rounded-pill bg-outline-danger">Danger</span>
                <span class="badge rounded-pill bg-outline-warning">Warning</span>
                <span class="badge rounded-pill bg-outline-info">Info</span>
                <span class="badge rounded-pill bg-outline-light text-dark">Light</span>
                <span class="badge rounded-pill bg-outline-dark">Dark</span>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-4 -->

    <!-- Start::row-5 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Buttons With Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.buttonsWithBadges">
                <button type="button" class="btn btn-primary my-1 me-2">
                    Notifications <span class="badge ms-2 bg-secondary">4</span>
                </button>
                <button type="button" class="btn btn-secondary my-1 me-2">
                    Notifications <span class="badge ms-2 bg-primary">7</span>
                </button>
                <button type="button" class="btn btn-success my-1 me-2">
                    Notifications <span class="badge ms-2 bg-danger">12</span>
                </button>
                <button type="button" class="btn btn-info my-1 me-2">
                    Notifications <span class="badge ms-2 bg-warning">32</span>
                </button>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Outline Button Badges" customCardBodyClass="d-flex flex-wrap gap-2"
                :code="prism.outlineButtonBadges">
                <button type="button" class="btn btn-outline-primary my-1 me-2">
                    Notifications <span class="badge ms-2">4</span>
                </button>
                <button type="button" class="btn btn-outline-secondary my-1 me-2">
                    Notifications <span class="badge ms-2">7</span>
                </button>
                <button type="button" class="btn btn-outline-success my-1 me-2">
                    Notifications <span class="badge ms-2">12</span>
                </button>
                <button type="button" class="btn btn-outline-info my-1 me-2">
                    Notifications <span class="badge ms-2">32</span>
                </button>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-5 -->

    <!-- Start::row- -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Headings" :code="prism.headings">
                <h1>Example heading <span class="badge bg-primary">New</span></h1>
                <h2>Example heading <span class="badge bg-primary">New</span></h2>
                <h3>Example heading <span class="badge bg-primary">New</span></h3>
                <h4>Example heading <span class="badge bg-primary">New</span></h4>
                <h5>Example heading <span class="badge bg-primary">New</span></h5>
                <h6>Example heading <span class="badge bg-primary">New</span></h6>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <showcodeCard title="Positioned Badges" customCardBodyClass="d-flex flex-wrap gap-4"
                        :code="prism.positionedBadges">
                        <button type="button" class="btn btn-primary position-relative">
                            Inbox
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        <button type="button" class="btn btn-secondary position-relative">
                            Profile
                            <span
                                class="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                        <span class="avatar">
                            <img src="/images/faces/2.jpg" alt="img">
                            <span
                                class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </span>
                        <span class="avatar avatar-rounded">
                            <img src="/images/faces/15.jpg" alt="img">
                            <span
                                class="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light              rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </span>
                        <span class="avatar avatar-rounded">
                            <img src="/images/faces/10.jpg" alt="img">
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </span>
                    </showcodeCard>
                </div>
                <div class="col-xl-12">
                    <showcodeCard title="Custom Badges" :code="prism.customBadges">
                        <div class="d-flex align-items-center gap-5 flex-wrap">
                            <div>
                                <span
                                    class="badge bg-outline-secondary custom-badge fs-15 d-inline-flex align-items-center"><i
                                        class="ti ti-flame me-1"></i>Hot</span>
                            </div>
                            <div>
                                <span class="icon-badge">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                        width="24px" fill="#000000">
                                        <path
                                            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                                    </svg>
                                    <span class="badge rounded-pill bg-success">14</span>
                                </span>
                            </div>
                            <div>
                                <span class="badge border bg-light text-default custom-badge"><i
                                        class="fe fe-eye me-2 d-inline-block"></i>13.2k</span>
                            </div>
                            <div>
                                <span class="text-badge">
                                    <span class="text fs-18">Inbox</span>
                                    <span class="badge rounded-pill bg-success">32</span>
                                </span>
                            </div>
                        </div>
                    </showcodeCard>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row- --></template>

<style scoped></style>


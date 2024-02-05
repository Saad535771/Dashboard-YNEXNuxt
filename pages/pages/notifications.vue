<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
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
                current: "Notifications",
                list: [
                    'Pages', 'Notifications'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container-lg">
        <!-- Start::row-1 -->
        <div class="row justify-content-center">
            <div class="col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <ul class="list-unstyled mb-0 notification-container">
                    <li>
                        <div class="card custom-card un-read">
                            <div class="card-body p-3">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top mt-0 flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md online me-3 avatar-rounded">
                                                <img alt="avatar" src="/images/faces/4.jpg">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center">
                                                <div class="mt-sm-0 mt-2">
                                                    <p class="mb-0 fs-14 fw-semibold">Emperio</p>
                                                    <p class="mb-0 text-muted">Project assigned by the manager all<span
                                                            class="badge bg-primary-transparent fw-semibold mx-1">files</span>and<span
                                                            class="badge bg-primary-transparent fw-semibold mx-1">folders</span>were
                                                        included</p>
                                                    <span class="mb-0 d-block text-muted fs-12">12 mins ago</span>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="float-end badge bg-light text-muted">
                                                        24,Oct 2022
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card custom-card un-read">
                            <div class="card-body p-3">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top mt-0 flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md offline me-3 avatar-rounded">
                                                <img alt="avatar" src="/images/faces/15.jpg">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center">
                                                <div class="mt-sm-0 mt-2">
                                                    <p class="mb-0 fs-14 fw-semibold">Dwayne Bero</p>
                                                    <p class="mb-0 text-muted">Admin and other team accepted your work
                                                        request</p>
                                                    <span class="mb-0 d-block text-muted fs-12">17 mins ago</span>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="float-end badge bg-light text-muted">
                                                        30,Sep 2022
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card custom-card un-read">
                            <div class="card-body p-3">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top mt-0 flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md offline me-3 avatar-rounded">
                                                <img alt="avatar" src="/images/faces/11.jpg">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center">
                                                <div class="mt-sm-0 mt-2">
                                                    <p class="mb-0 fs-14 fw-semibold">Alister Chuk</p>
                                                    <p class="mb-0 text-muted">Temporary data will be <span
                                                            class="badge bg-danger-transparent fw-semibold mx-1">deleted</span>
                                                        once dedicated time complated</p>
                                                    <span class="mb-0 d-block text-muted fs-12">4 hrs ago</span>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="float-end badge bg-light text-muted">
                                                        11,Sep 2021
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card custom-card un-read">
                            <div class="card-body p-3">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top mt-0 flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-md online me-3 avatar-rounded">
                                                <img alt="avatar" src="/images/faces/5.jpg">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center">
                                                <div class="mt-sm-0 mt-2">
                                                    <p class="mb-0 fs-14 fw-semibold">Melissa Blue</p>
                                                    <p class="mb-0 text-muted">Approved date for sanction of loan is
                                                        verified <i
                                                            class="ri-checkbox-circle-line text-success ms-1 fs-16 align-middle"></i>
                                                    </p>
                                                    <span class="mb-0 d-block text-muted fs-12">5 hrs ago</span>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="float-end badge bg-light text-muted">
                                                        18,Sep 2021
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card custom-card un-read">
                            <div class="card-body p-3">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top mt-0 flex-wrap">
                                        <div class="avatar avatar-md bg-primary online me-3 avatar-rounded">
                                            ZS
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center">
                                                <div class="mt-sm-0 mt-2">
                                                    <p class="mb-0 fs-14 fw-semibold">Zack Slayer</p>
                                                    <p class="mb-0 text-muted">Social network accounts are at risk check
                                                        your <span
                                                            class="badge bg-success-transparent fw-semibold mx-1">login</span>
                                                        details</p>
                                                    <span class="mb-0 d-block text-muted fs-12">9 hrs ago</span>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="float-end badge bg-light text-muted">
                                                        15,Sep 2021
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card custom-card un-read">
                            <div class="card-body p-3">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top mt-0 flex-wrap">
                                        <div class="avatar avatar-md online me-3 avatar-rounded">
                                            <img alt="avatar" src="/images/faces/2.jpg">
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center">
                                                <div class="mt-sm-0 mt-2">
                                                    <p class="mb-0 fs-14 fw-semibold">Monika Karen</p>
                                                    <p class="mb-0 text-muted">Changed the password of gmail 4 hrs ago.
                                                        <span class="badge bg-secondary">Update</span></p>
                                                    <span class="mb-0 d-block text-muted fs-12">12 hrs ago</span>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="float-end badge bg-light text-muted">
                                                        12,Sep 2021
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="text-center">
                    <button class="btn btn-info-transparent btn-loader my-3 mx-auto">
                        <span class="me-2">Loading</span>
                    <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
                </button>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</div></template>

<style scoped></style>


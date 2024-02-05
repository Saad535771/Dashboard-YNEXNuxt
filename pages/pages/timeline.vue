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
                current: "Timeline",
                list: [
                    'Pages', 'Timeline'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <ul class="timeline list-unstyled">
            <li>
                <div class="timeline-time text-end">
                    <span class="date">FRIDAY</span>
                    <span class="time d-inline-block">02:31</span>
                </div>
                <div class="timeline-icon">
                    <a href="javascript:void(0);"></a>
                </div>
                <div class="timeline-body">
                    <div class="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                        <div class="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                            <img alt="avatar" src="/images/faces/4.jpg">
                        </div>
                        <div class="flex-fill">
                            <div class="d-flex align-items-center">
                                <div class="mt-sm-0 mt-2">
                                    <p class="mb-0 fs-14 fw-semibold">Emperio</p>
                                    <p class="mb-0 text-muted">Project assigned by the manager all<span
                                            class="badge bg-primary-transparent fw-semibold mx-1">files</span>and<span
                                            class="badge bg-primary-transparent fw-semibold mx-1">folders</span>were
                                        included</p>
                                </div>
                                <div class="ms-auto">
                                    <span class="float-end badge bg-light text-muted timeline-badge">
                                        24,Oct 2022
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-time text-end">
                    <span class="date">MONDAY</span>
                    <span class="time d-inline-block">08:47</span>
                </div>
                <div class="timeline-icon">
                    <a href="javascript:void(0);"></a>
                </div>
                <div class="timeline-body">
                    <div class="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                        <div class="avatar avatar-md offline me-3 avatar-rounded mt-sm-0 mt-4">
                            <img alt="avatar" src="/images/faces/15.jpg">
                        </div>
                        <div class="flex-fill">
                            <div class="d-flex align-items-center">
                                <div class="mt-sm-0 mt-2">
                                    <p class="mb-0 fs-14 fw-semibold">Dwayne Bero</p>
                                    <p class="mb-0 text-muted">Admin and other team accepted your work request</p>
                                </div>
                                <div class="ms-auto">
                                    <span class="float-end badge bg-light text-muted timeline-badge">
                                        30,Sep 2022
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-time text-end">
                    <span class="date">YESTERDAY</span>
                    <span class="time d-inline-block">18:43</span>
                </div>
                <div class="timeline-icon">
                    <a href="javascript:void(0);"></a>
                </div>
                <div class="timeline-body">
                    <div class="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                        <div class="avatar avatar-md offline me-3 avatar-rounded mt-sm-0 mt-4">
                            <img alt="avatar" src="/images/faces/11.jpg">
                        </div>
                        <div class="flex-fill">
                            <div class="d-flex align-items-center">
                                <div class="mt-sm-0 mt-2">
                                    <p class="mb-0 fs-14 fw-semibold">Alister Chuk</p>
                                    <p class="mb-0 text-muted">Temporary data will be <span
                                            class="badge bg-danger-transparent fw-semibold mx-1">deleted</span> once
                                        dedicated time complated</p>
                                </div>
                                <div class="ms-auto">
                                    <span class="float-end badge bg-light text-muted timeline-badge">
                                        11,Sep 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-time text-end">
                    <span class="date">TODAY</span>
                    <span class="time d-inline-block">03:18</span>
                </div>
                <div class="timeline-icon">
                    <a href="javascript:void(0);"></a>
                </div>
                <div class="timeline-body">
                    <div class="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                        <div class="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                            <img alt="avatar" src="/images/faces/5.jpg">
                        </div>
                        <div class="flex-fill">
                            <div class="d-flex align-items-center">
                                <div class="mt-sm-0 mt-2">
                                    <p class="mb-0 fs-14 fw-semibold">Melissa Blue</p>
                                    <p class="mb-0 text-muted">Approved date for sanction of loan is verified <i
                                            class="ri-checkbox-circle-line text-success ms-1 fs-16 align-middle"></i></p>
                                </div>
                                <div class="ms-auto">
                                    <span class="float-end badge bg-light text-muted timeline-badge">
                                        18,Sep 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-time text-end">
                    <span class="date">TODAY</span>
                    <span class="time d-inline-block">12:24</span>
                </div>
                <div class="timeline-icon">
                    <a href="javascript:void(0);"></a>
                </div>
                <div class="timeline-body">
                    <div class="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                        <div class="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                            <img alt="avatar" src="/images/faces/10.jpg">
                        </div>
                        <div class="flex-fill">
                            <div class="d-flex align-items-center">
                                <div class="mt-sm-0 mt-2">
                                    <p class="mb-0 fs-14 fw-semibold">Zack Slayer</p>
                                    <p class="mb-0 text-muted">Social network accounts are at risk check your <span
                                            class="badge bg-success-transparent fw-semibold mx-1">login</span> details</p>
                                </div>
                                <div class="ms-auto">
                                    <span class="float-end badge bg-light text-muted timeline-badge">
                                        15,Sep 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="timeline-time text-end">
                    <span class="date">TODAY</span>
                    <span class="time d-inline-block">04:11</span>
                </div>
                <div class="timeline-icon">
                    <a href="javascript:void(0);"></a>
                </div>
                <div class="timeline-body">
                    <div class="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                        <div class="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                            <img alt="avatar" src="/images/faces/2.jpg">
                        </div>
                        <div class="flex-fill">
                            <div class="d-flex align-items-center">
                                <div class="mt-sm-0 mt-2">
                                    <p class="mb-0 fs-14 fw-semibold">Monika Karen</p>
                                    <p class="mb-0 text-muted">Changed the password of gmail 4 hrs ago. <span
                                            class="badge bg-secondary">Update</span></p>
                                </div>
                                <div class="ms-auto">
                                    <span class="float-end badge bg-light text-muted timeline-badge">
                                        12,Sep 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="timeline-loadmore-container">
            <button class="btn btn-info-transparent btn-loader mx-auto">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
            </button>
    </div>
</div></template>

<style scoped></style>


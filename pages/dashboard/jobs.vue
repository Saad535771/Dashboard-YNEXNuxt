<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as jobsData from '@/data/dashboards/jobs.js';
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
                current: "Jobs",
                list: [
                    'Dashboards', 'Jobs'
                ]
            },
            jobsData: jobsData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-6 col-xl-12">
            <div class="row row-cols-12">
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-top">
                                <div class="me-3">
                                    <span class="avatar avatar-md p-2 bg-primary">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px"
                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex mb-1 align-items-top justify-content-between">
                                        <h5 class="fw-semibold mb-0 lh-1">256</h5>
                                        <div class="text-danger fw-semibold"><i
                                                class="ri-arrow-down-s-fill me-1 align-middle"></i>-1.05%</div>
                                    </div>
                                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL EMPLOYERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-top">
                                <div class="me-3">
                                    <span class="avatar avatar-md p-2 bg-secondary">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"
                                            fill="#000000">
                                            <rect fill="none" height="24" width="24" />
                                            <g>
                                                <path
                                                    d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex mb-1 align-items-top justify-content-between">
                                        <h5 class="fw-semibold mb-0 lh-1">4,026</h5>
                                        <div class="text-success fw-semibold"><i
                                                class="ri-arrow-up-s-fill me-1 align-middle"></i>+0.40%</div>
                                    </div>
                                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL CANDIDATES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-top">
                                <div class="me-3">
                                    <span class="avatar avatar-md p-2 bg-warning">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px"
                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex mb-1 align-items-top justify-content-between">
                                        <h5 class="fw-semibold mb-0 lh-1">48</h5>
                                        <div class="text-success fw-semibold"><i
                                                class="ri-arrow-up-s-fill me-1 align-middle"></i>+0.82%</div>
                                    </div>
                                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL LOCATIONS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-top">
                                <div class="me-3">
                                    <span class="avatar avatar-md p-2 bg-success">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"
                                            fill="#000000">
                                            <g>
                                                <rect fill="none" height="24" width="24" />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M9,14c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S7.35,14,9,14z M9,10c0.54,0,1,0.46,1,1s-0.46,1-1,1s-1-0.46-1-1 S8.46,10,9,10z" />
                                                    <path
                                                        d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99-0.9,1.99-2L24,5C24,3.9,23.1,3,22,3z M4.54,19 c1.1-1.22,2.69-2,4.46-2s3.36,0.78,4.46,2H4.54z M22,19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54,1.61-6.92,4H2V5h20V19z" />
                                                    <polygon
                                                        points="15.78,11.15 17.25,10.3 17.25,12 18.75,12 18.75,10.3 20.22,11.15 20.97,9.85 19.5,9 20.97,8.15 20.22,6.85 18.75,7.7 18.75,6 17.25,6 17.25,7.7 15.78,6.85 15.03,8.15 16.5,9 15.03,9.85" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex mb-1 align-items-top justify-content-between">
                                        <h5 class="fw-semibold mb-0 lh-1">1,116</h5>
                                        <div class="text-success fw-semibold"><i
                                                class="ri-arrow-up-s-fill me-1 align-middle"></i>+0.21%</div>
                                    </div>
                                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL RECRUITERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-top">
                                <div class="me-3">
                                    <span class="avatar avatar-md p-2 bg-pink">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px"
                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex mb-1 align-items-top justify-content-between">
                                        <h5 class="fw-semibold mb-0 lh-1">1,468</h5>
                                        <div class="text-danger fw-semibold"><i
                                                class="ri-arrow-down-s-fill me-1 align-middle"></i>-0.153%</div>
                                    </div>
                                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL SUBSCRIPTIONS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-top">
                                <div class="me-3">
                                    <span class="avatar avatar-md p-2 bg-teal">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"
                                            fill="#000000">
                                            <g>
                                                <rect fill="none" height="24" width="24" />
                                                <g>
                                                    <path
                                                        d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
                                                </g>
                                                <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <div class="d-flex mb-1 align-items-top justify-content-between">
                                        <h5 class="fw-semibold mb-0 lh-1">34%</h5>
                                        <div class="text-success fw-semibold"><i
                                                class="ri-arrow-up-s-fill me-1 align-middle"></i>+0.165%</div>
                                    </div>
                                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">RESSUME UPLOAD RATIO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">Subscriptions Overview</div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body p-1">
                            <div class="row border-bottom border-block-end-dashed">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div class="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                        <p class="fs-20 fw-semibold mb-0">1,117</p>
                                        <p class="mb-0 text-muted">Total Subscriptions</p>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div class="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                        <p class="fs-20 fw-semibold mb-0"><span class="basic-subscription">742</span></p>
                                        <p class="mb-0 text-muted">Basic Subscriptions</p>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div class="p-3 text-sm-start text-center">
                                        <p class="fs-20 fw-semibold mb-0"><span class="pro-subscription">259</span></p>
                                        <p class="mb-0 text-muted">Pro Subscriptions</p>
                                    </div>
                                </div>
                            </div>
                            <apexchart height="280px" type="line" :options="jobsData.subscriptionOverviewOptions"
                                :series="jobsData.subscriptionOverviewSeries"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-12">
            <div class="row">
                <div class="col-xxl-6 col-xl-6">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Recent Jobs
                            </div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a>
                                    </li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <PerfectScrollbar>
                                <ul class="list-group list-group-flush" id="recent-jobs">
                                    <li class="list-group-item border-top-0 border-start-0 border-end-0">
                                        <a href="javascript:void(0);">
                                            <div class="d-flex align-items-center">
                                                <div class="me-2 lh-1">
                                                    <span class="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                        AC
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <p class="mb-0 fw-semibold">Ui Developer</p>
                                                    <p class="fs-12 text-muted mb-0">Achies - 12 hrs ago</p>
                                                </div>
                                                <div class="text-end">
                                                    <p class="mb-0 fs-12">Full Time</p>
                                                    <span class="badge bg-success-transparent">Fresher</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item border-start-0 border-end-0">
                                        <a href="javascript:void(0);">
                                            <div class="d-flex align-items-center">
                                                <div class="me-2 lh-1">
                                                    <span class="avatar avatar-md avatar-rounded bg-secondary-transparent">
                                                        SI
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <p class="mb-0 fw-semibold">AWS Engineer</p>
                                                    <p class="fs-12 text-muted mb-0">Siachles - 2 hrs ago</p>
                                                </div>
                                                <div class="text-end">
                                                    <p class="mb-0 fs-12">Part Time</p>
                                                    <span class="badge bg-info-transparent">+1 yrs - Experience</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item border-start-0 border-end-0">
                                        <a href="javascript:void(0);">
                                            <div class="d-flex align-items-center">
                                                <div class="me-2 lh-1">
                                                    <span class="avatar avatar-md avatar-rounded bg-success">
                                                        LS
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <p class="mb-0 fw-semibold">React Developer</p>
                                                    <p class="fs-12 text-muted mb-0">LifeSpace - 6 hrs ago</p>
                                                </div>
                                                <div class="text-end">
                                                    <p class="mb-0 fs-12 text-primary fw-semibold">Freelancer</p>
                                                    <span class="badge bg-success-transparent">Fresher</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item border-start-0 border-end-0">
                                        <a href="javascript:void(0);">
                                            <div class="d-flex align-items-center">
                                                <div class="me-2 lh-1">
                                                    <span class="avatar avatar-md avatar-rounded bg-warning-transparent">
                                                        MS
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <p class="mb-0 fw-semibold">Angular Developer</p>
                                                    <p class="fs-12 text-muted mb-0">MegaSoft - 14 hrs ago</p>
                                                </div>
                                                <div class="text-end">
                                                    <p class="mb-0 fs-12">Full Time</p>
                                                    <span class="badge bg-info-transparent">+2 yrs - Experience</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item border-start-0 border-end-0">
                                        <a href="javascript:void(0);">
                                            <div class="d-flex align-items-center">
                                                <div class="me-2 lh-1">
                                                    <span class="avatar avatar-md avatar-rounded bg-danger-transparent">
                                                        J
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <p class="mb-0 fw-semibold">UI Tester</p>
                                                    <p class="fs-12 text-muted mb-0">Joggle - 2 days ago</p>
                                                </div>
                                                <div class="text-end">
                                                    <p class="mb-0 fs-12">Full Time</p>
                                                    <span class="badge bg-info-transparent">+3 yrs - Experience</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item border-start-0 border-end-0 border-bottom-0">
                                        <a href="javascript:void(0);">
                                            <div class="d-flex align-items-center">
                                                <div class="me-2 lh-1">
                                                    <span class="avatar avatar-md avatar-rounded bg-info-transparent">
                                                        NL
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <p class="mb-0 fw-semibold">Php - Laravel Develope</p>
                                                    <p class="fs-12 text-muted mb-0">Nirlog - 2 days ago</p>
                                                </div>
                                                <div class="text-end">
                                                    <p class="mb-0 fs-12">Part Time Time</p>
                                                    <span class="badge bg-success-transparent">Fresher</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">Candidates</div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a>
                                    </li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="p-3">
                                <apexchart height="250px" type="donut" :options="jobsData.candidatesOptions"
                                    :series="jobsData.candidatesSeries"></apexchart>
                            </div>
                            <div class="row row-cols-12 border-top border-block-start-dashed">
                                <div class="col">
                                    <div class="p-3 border-end border-inline-end-dashed">
                                        <div class="text-muted fs-12 text-center mb-1">Male Candidates
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center"> <span
                                                class="me-3 fs-26 fw-semibold">1,234</span> <span
                                                class="text-success fw-semibold"><i
                                                    class="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <div class="text-muted fs-12 text-center mb-1">Female Candidates
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center"> <span
                                                class="me-3 fs-26 fw-semibold">1,754</span> <span
                                                class="text-danger fw-semibold"><i
                                                    class="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-12 col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Recent Recruiter Registrations
                            </div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body p-0 recruiter">
                            <div class="row row-cols-12">
                                <div class="col">
                                    <div class="p-3 border-md-end border-inline-end-dashed">
                                        <div class="d-flex align-items-top mb-4">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/faces/4.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="recent-recruiter">
                                                    <a href="javascript:void(0);"
                                                        class="fw-semibold mb-0 text-truncate">Hr@Spruko</a>
                                                    <p class="mb-0 fs-12 text-muted text-truncate">hr.spruko@gmail.com</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button"
                                                    class="btn btn-icon btn-sm btn-light btn-wave">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-top justify-content-between mb-2">
                                            <div class="text-muted fs-12">
                                                Vacancies
                                            </div>
                                            <div class="fw-semibold">
                                                07
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-top justify-content-between mb-0">
                                            <div class="text-muted fs-12">
                                                Position
                                            </div>
                                            <div>
                                                <span class="badge bg-info-transparent">Aws Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3 border-md-end border-inline-end-dashed">
                                        <div class="d-flex align-items-top mb-4">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/faces/21.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="recent-recruiter">
                                                    <a href="javascript:void(0);"
                                                        class="fw-semibold mb-0 text-truncate">Hr@Nicero</a>
                                                    <p class="mb-0 fs-12 text-muted text-truncate">nicero.help@gmail.com</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" aria-label="button"
                                                    class="btn btn-icon btn-sm btn-light btn-wave">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-top justify-content-between mb-2">
                                            <div class="text-muted fs-12">
                                                Vacancies
                                            </div>
                                            <div class="fw-semibold">
                                                16
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-top justify-content-between mb-0">
                                            <div class="text-muted fs-12">
                                                Position
                                            </div>
                                            <div>
                                                <span class="badge bg-warning-transparent">React Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <div class="d-flex align-items-top mb-4">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/faces/15.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <div class="recent-recruiter">
                                                    <a href="javascript:void(0);"
                                                        class="fw-semibold mb-0 text-truncate">JosephSmith</a>
                                                    <p class="mb-0 fs-12 text-muted text-truncate">josephsmith@gmail.com</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button" aria-label="button"
                                                    class="btn btn-icon btn-sm btn-light btn-wave">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-top justify-content-between mb-2">
                                            <div class="text-muted fs-12">
                                                Vacancies
                                            </div>
                                            <div class="fw-semibold">
                                                32
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-top justify-content-between mb-0">
                                            <div class="text-muted fs-12">
                                                Position
                                            </div>
                                            <div>
                                                <span class="badge bg-primary-transparent">UI Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card overflow-hidden">
                <div class="card-header">
                    <div class="card-title">
                        Registers By Country
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Country</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Total Registers</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/flags/us_flag.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fw-semibold">
                                                    U.S.A
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td>21,Dec 2022</td>
                                    <td>782</td>
                                    <td>
                                        <button type="button" class="btn btn-success-light btn-wave btn-sm">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/flags/french_flag.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fw-semibold">
                                                    France
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td>29,April 2023</td>
                                    <td>53</td>
                                    <td>
                                        <button type="button" class="btn btn-success-light btn-wave btn-sm">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/flags/uae_flag.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fw-semibold">
                                                    U.A.E
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td>30,Nov 2023</td>
                                    <td>15</td>
                                    <td>
                                        <button type="button" class="btn btn-success-light btn-wave btn-sm">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/flags/germany_flag.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fw-semibold">
                                                    Germany
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td>18,Mar 2023</td>
                                    <td>19</td>
                                    <td>
                                        <button type="button" class="btn btn-success-light btn-wave btn-sm">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/flags/argentina_flag.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fw-semibold">
                                                    Argentina
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td>25,Apr 2023</td>
                                    <td>92</td>
                                    <td>
                                        <button type="button" class="btn btn-success-light btn-wave btn-sm">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-5">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Top Companies
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Subscription</th>
                                    <th scope="col">Total Employees</th>
                                    <th scope="col">Recruiter Since</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/4.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="fw-semibold mb-0">Obligation Pvt.Ltd</p>
                                                <p class="fs-12 text-muted mb-0">Remote/Onsite</p>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <span class="badge bg-primary-transparent">Basic</span>
                                    </td>
                                    <td>547</td>
                                    <td>24,Nov 2021</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/10.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="fw-semibold mb-0">Voluptatem Pvt.Ltd</p>
                                                <p class="fs-12 text-muted mb-0">Remote/Onsite</p>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <span class="badge bg-secondary-transparent">Pro</span>
                                    </td>
                                    <td>223</td>
                                    <td>13,Jan 2020</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/8.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="fw-semibold mb-0">BloomTech.Inc</p>
                                                <p class="fs-12 text-muted mb-0">Remote/Onsite</p>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <span class="badge bg-primary-transparent">Basic</span>
                                    </td>
                                    <td>189</td>
                                    <td>06,Sep 2020</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/1.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="fw-semibold mb-0">Beatae Industries</p>
                                                <p class="fs-12 text-muted mb-0">Remote/Onsite</p>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <span class="badge bg-primary-transparent">Basic</span>
                                    </td>
                                    <td>106</td>
                                    <td>19,Mar 2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Acquisitions
                    </div>
                </div>
                <div class="card-body">
                    <div class="progress progress-lg mb-4">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 52%" aria-valuenow="52"
                            aria-valuemin="0" aria-valuemax="100">52%</div>
                        <div class="progress-bar bg-secondary" role="progressbar" style="width: 12%" aria-valuenow="12"
                            aria-valuemin="0" aria-valuemax="100">12%</div>
                        <div class="progress-bar bg-success" role="progressbar" style="width: 16%" aria-valuenow="16"
                            aria-valuemin="0" aria-valuemax="100">16%</div>
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 12%" aria-valuenow="12"
                            aria-valuemin="0" aria-valuemax="100">12%</div>
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 8%" aria-valuenow="8"
                            aria-valuemin="0" aria-valuemax="100">8%</div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            Total Applications
                            <span class="badge float-end bg-primary-transparent">1,982</span>
                        </li>
                        <li class="list-group-item">
                            Recruited
                            <span class="badge float-end bg-secondary-transparent">214</span>
                        </li>
                        <li class="list-group-item">
                            Short Listed
                            <span class="badge float-end bg-success-transparent">262</span>
                        </li>
                        <li class="list-group-item">
                            Rejected
                            <span class="badge float-end bg-warning-transparent">395</span>
                        </li>
                        <li class="list-group-item">
                            Blocked
                            <span class="badge float-end bg-danger-transparent">79</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Recent Employers
                    </div>
                    <div class="d-flex">
                        <div class="me-3">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-hover border table-bordered">
                            <thead>
                                <tr>
                                    <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox"
                                            id="checkboxNoLabel1" value="" aria-label="..."></th>
                                    <th scope="col">Employer</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Mail</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox"
                                            id="checkboxNoLabel12" value="" aria-label="..."></th>
                                    <td>
                                        <div class="d-flex align-items-center fw-semibold">
                                            <span class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="img">
                                            </span>Mayor Kelly
                                        </div>
                                    </td>
                                    <td>Manufacture</td>
                                    <td><span class="badge bg-primary-transparent">Team Lead</span></td>
                                    <td>mayorkelly@gmail.com</td>
                                    <td>
                                        <div class="d-inline-flex align-items-center">
                                            <i class="ri-map-pin-fill text-muted fs-10"></i>
                                            <span class="ms-1">Germany</span>
                                        </div>
                                    </td>
                                    <td>Sep 15 - Oct 12, 2023</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox"
                                            id="checkboxNoLabel22" value="" aria-label="..." checked></th>
                                    <td>
                                        <div class="d-flex align-items-center fw-semibold">
                                            <span class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="img">
                                            </span>Andrew Garfield
                                        </div>
                                    </td>
                                    <td>Development</td>
                                    <td><span class="badge bg-secondary-transparent">Director</span></td>
                                    <td>andrewgarfield@gmail.com</td>
                                    <td>
                                        <div class="d-inline-flex align-items-center">
                                            <i class="ri-map-pin-fill text-muted fs-10"></i>
                                            <span class="ms-1">Canada</span>
                                        </div>
                                    </td>
                                    <td>Apr 10 - Dec 12, 2023</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox"
                                            id="checkboxNoLabel3" value="" aria-label="..."></th>
                                    <td>
                                        <div class="d-flex align-items-center fw-semibold">
                                            <span class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="img">
                                            </span>Simon Cowel
                                        </div>
                                    </td>
                                    <td>Service</td>
                                    <td><span class="badge bg-success-transparent">Manager</span></td>
                                    <td>simoncowel234@gmail.com</td>
                                    <td>
                                        <div class="d-inline-flex align-items-center">
                                            <i class="ri-map-pin-fill text-muted fs-10"></i>
                                            <span class="ms-1">Europe</span>
                                        </div>
                                    </td>
                                    <td>Sep 15 - Oct 12, 2023</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox"
                                            id="checkboxNoLabel13" value="" aria-label="..." checked></th>
                                    <td>
                                        <div class="d-flex align-items-center fw-semibold">
                                            <span class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>Mirinda Hers
                                        </div>
                                    </td>
                                    <td>Marketing</td>
                                    <td><span class="badge bg-danger-transparent">Employee</span></td>
                                    <td>mirindahers@gmail.com</td>
                                    <td>
                                        <div class="d-inline-flex align-items-center">
                                            <i class="ri-map-pin-fill text-muted fs-10"></i>
                                            <span class="ms-1">USA</span>
                                        </div>
                                    </td>
                                    <td>Apr 10 - Dec 12, 2023</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="ps-4"><input class="form-check-input" type="checkbox"
                                            id="checkboxNoLabel2" value="" aria-label="..." checked></th>
                                    <td>
                                        <div class="d-flex align-items-center fw-semibold">
                                            <span class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/16.jpg" alt="img">
                                            </span>Andrew Garfield
                                        </div>
                                    </td>
                                    <td>Development</td>
                                    <td><span class="badge bg-warning-transparent">Director</span></td>
                                    <td>andrewgarfield@gmail.com</td>
                                    <td>
                                        <div class="d-inline-flex align-items-center">
                                            <i class="ri-map-pin-fill text-muted fs-10"></i>
                                            <span class="ms-1">London</span>
                                        </div>
                                    </td>
                                    <td>Jun 10 - Dec 12, 2022</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-success-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center">
                        <div>
                            Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
                        </div>
                        <div class="ms-auto">
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0);">
                                            Prev
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link text-primary" href="javascript:void(0);">
                                            next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-3 -->
</template>

<style scoped></style>

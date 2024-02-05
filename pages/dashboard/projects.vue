<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as projectsData from '@/data/dashboards/projects.js';
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
                current: "Projects",
                list: [
                    'Dashboards', 'Projects'
                ]
            },
            projectsData: projectsData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9">
            <div class="row">
                <div class="col-xxl-5">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-2">Completed Projects</p>
                                        <h4 class="mb-0 fw-semibold mb-2">109</h4>
                                        <span class="badge bg-success-transparent">1.5% <i
                                                class="ti ti-trending-up"></i></span><span
                                            class="text-muted fs-11 ms-1">this month</span>
                                    </div>
                                    <div>
                                        <span class="avatar avatar-md bg-primary p-2">
                                            <i class="ti ti-file-check fs-20 op-7"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-2">Overdue Projects</p>
                                        <h4 class="mb-0 fw-semibold mb-2">18</h4>
                                        <span class="badge bg-danger-transparent">0.23% <i
                                                class="ti ti-trending-down"></i></span><span
                                            class="text-muted fs-11 ms-1">this month</span>
                                    </div>
                                    <div>
                                        <span class="avatar avatar-md bg-secondary p-2">
                                            <i class="ti ti-briefcase fs-20 op-7"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-2">Total Projects</p>
                                        <h4 class="mb-0 fw-semibold mb-2">389</h4>
                                        <span class="badge bg-success-transparent">0.67% <i
                                                class="ti ti-trending-up"></i></span><span
                                            class="text-muted fs-11 ms-1">this month</span>
                                    </div>
                                    <div>
                                        <span class="avatar avatar-md bg-success p-2">
                                            <i class="ti ti-album fs-20 op-7"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="mb-2">Pending Projects</p>
                                        <h4 class="mb-0 fw-semibold mb-2">227</h4>
                                        <span class="badge bg-success-transparent">0.53% <i
                                                class="ti ti-trending-up"></i></span><span
                                            class="text-muted fs-11 ms-1">this month</span>
                                    </div>
                                    <div>
                                        <span class="avatar avatar-md bg-warning p-2">
                                            <i class="ti ti-chart-pie-2 fs-20 op-7"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Project Analysis
                                    </div>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted"
                                            data-bs-toggle="dropdown">
                                            View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <apexchart height="300px" type="line" :options="projectsData.projectAnalysisOptions"
                                        :series="projectsData.projectAnalysisSeries"></apexchart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Team Members
                                    </div>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled team-members-card mb-0">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="d-flex align-items-center justify-content-between sparkline">
                                                    <div class="d-flex align-items-top">
                                                        <span class="avatar avatar-sm lh-1">
                                                            <img src="/images/faces/2.jpg" alt="">
                                                        </span>
                                                        <div class="ms-3 lh-1">
                                                            <span class="fw-semibold">Melissa Smith</span>
                                                            <span class="d-block fs-11 text-muted mt-2">Ui Developer</span>
                                                        </div>
                                                    </div>
                                                    <apexchart width="80px" height="20px" type="line"
                                                        :options="projectsData.user1Options"
                                                        :series="projectsData.user1Series"></apexchart>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="d-flex align-items-center justify-content-between sparkline">
                                                    <div class="d-flex align-items-top">
                                                        <span class="avatar avatar-sm lh-1">
                                                            <img src="/images/faces/12.jpg" alt="">
                                                        </span>
                                                        <div class="ms-3 lh-1">
                                                            <span class="fw-semibold">Jason Momoa</span>
                                                            <span class="d-block fs-11 text-muted mt-2">React
                                                                Developer</span>
                                                        </div>
                                                    </div>
                                                    <apexchart width="80px" height="20px" type="line"
                                                        :options="projectsData.user2Options"
                                                        :series="projectsData.user2Series"></apexchart>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="d-flex align-items-center justify-content-between sparkline">
                                                    <div class="d-flex align-items-top">
                                                        <span class="avatar avatar-sm lh-1">
                                                            <img src="/images/faces/1.jpg" alt="">
                                                        </span>
                                                        <div class="ms-3 lh-1">
                                                            <span class="fw-semibold">Kamala Hars</span>
                                                            <span class="d-block fs-11 text-muted mt-2">Testing</span>
                                                        </div>
                                                    </div>
                                                    <apexchart width="80px" height="20px" type="line"
                                                        :options="projectsData.user3Options"
                                                        :series="projectsData.user3Series"></apexchart>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="d-flex align-items-center justify-content-between sparkline">
                                                    <div class="d-flex align-items-top">
                                                        <span class="avatar avatar-sm lh-1">
                                                            <img src="/images/faces/15.jpg" alt="">
                                                        </span>
                                                        <div class="ms-3 lh-1">
                                                            <span class="fw-semibold">Diego Sanch</span>
                                                            <span class="d-block fs-11 text-muted mt-2">Angular
                                                                Developer</span>
                                                        </div>
                                                    </div>
                                                    <apexchart width="80px" height="20px" type="line"
                                                        :options="projectsData.user4Options"
                                                        :series="projectsData.user4Series"></apexchart>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <div class="d-flex align-items-center justify-content-between sparkline">
                                                    <div class="d-flex align-items-top">
                                                        <span class="avatar avatar-sm lh-1">
                                                            <img src="/images/faces/10.jpg" alt="">
                                                        </span>
                                                        <div class="ms-3 lh-1">
                                                            <span class="fw-semibold">Jake Sully</span>
                                                            <span class="d-block fs-11 text-muted mt-2">Web Designer</span>
                                                        </div>
                                                    </div>
                                                    <apexchart width="80px" height="20px" type="line"
                                                        :options="projectsData.user5Options"
                                                        :series="projectsData.user5Series"></apexchart>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Main Tasks
                                    </div>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Today<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled projects-maintask-card">
                                        <li>
                                            <div class="d-flex align-items-top">
                                                <div class="d-flex align-items-top flex-fill">
                                                    <span class="me-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="checkboxNoLabel1" value="" aria-label="...">
                                                    </span>
                                                    <div class="flex-fill">
                                                        <span>
                                                            Designing a landing page
                                                        </span>
                                                        <span class="d-block mt-1">
                                                            <span class="avatar-list-stacked">
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/2.jpg" alt="img">
                                                                </span>
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/8.jpg" alt="img">
                                                                </span>
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/2.jpg" alt="img">
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="badge bg-primary-transparent">
                                                        In progress
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-top">
                                                <div class="d-flex align-items-top flex-fill">
                                                    <span class="me-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="checkboxNoLabel2" value="" aria-label="..." checked>
                                                    </span>
                                                    <div class="flex-fill">
                                                        <span>
                                                            Testing of new project ui
                                                        </span>
                                                        <span class="d-block mt-1">
                                                            <span class="avatar-list-stacked">
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/10.jpg" alt="img">
                                                                </span>
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/15.jpg" alt="img">
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="badge bg-success-transparent">
                                                        Completed
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-top">
                                                <div class="d-flex align-items-top flex-fill">
                                                    <span class="me-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="checkboxNoLabel3" value="" aria-label="...">
                                                    </span>
                                                    <div class="flex-fill">
                                                        <span>
                                                            Fixing bugs in registration page
                                                        </span>
                                                        <span class="d-block mt-1">
                                                            <span class="avatar-list-stacked">
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/11.jpg" alt="img">
                                                                </span>
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/4.jpg" alt="img">
                                                                </span>
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/8.jpg" alt="img">
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="badge bg-warning-transparent">
                                                        pending
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-top">
                                                <div class="d-flex align-items-top flex-fill">
                                                    <span class="me-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="checkboxNoLabel4" value="" aria-label="..." checked>
                                                    </span>
                                                    <div class="flex-fill">
                                                        <span>
                                                            Designing new dashboard
                                                        </span>
                                                        <span class="d-block mt-1">
                                                            <span class="avatar-list-stacked">
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/10.jpg" alt="img">
                                                                </span>
                                                                <span class="avatar avatar-xs avatar-rounded">
                                                                    <img src="/images/faces/11.jpg" alt="img">
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="badge bg-primary-transparent">
                                                        In progress
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Daily Tasks
                            </div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled daily-task-card">
                                <li>
                                    <div class="card border border-primary border-opacity-25 shadow-none custom-card mb-0">
                                        <div class="card-body">
                                            <p
                                                class="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">
                                                Home Page Design
                                                <a aria-label="anchor" href="javascript:void(0);"><i
                                                        class="bi bi-plus-square float-end text-primary fs-18"></i></a>
                                            </p>
                                            <div class="d-flex flex-wrap gap-2 mb-4">
                                                <span class="badge bg-primary-transparent">Framework</span>
                                                <span class="badge bg-secondary-transparent">Angular</span>
                                                <span class="badge bg-info-transparent">Php</span>
                                            </div>
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
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="card border border-warning border-opacity-25 shadow-none custom-card">
                                        <div class="card-body">
                                            <p
                                                class="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">
                                                About Us Page redesign
                                                <a aria-label="anchor" href="javascript:void(0);"><i
                                                        class="bi bi-plus-square float-end text-warning fs-18"></i></a>
                                            </p>
                                            <div class="d-flex flex-wrap gap-2 mb-4">
                                                <span class="badge bg-danger-transparent">Html</span>
                                                <span class="badge bg-warning-transparent">Symphony</span>
                                                <span class="badge bg-success-transparent">Php</span>
                                            </div>
                                            <div class="avatar-list-stacked">
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/6.jpg" alt="img">
                                                </span>
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/9.jpg" alt="img">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="card border border-success border-opacity-25 shadow-none custom-card">
                                        <div class="card-body">
                                            <p
                                                class="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">
                                                About Us Page redesign
                                                <a aria-label="anchor" href="javascript:void(0);"><i
                                                        class="bi bi-plus-square float-end text-success fs-18"></i></a>
                                            </p>
                                            <div class="d-flex flex-wrap gap-2 mb-4">
                                                <span class="badge bg-danger-transparent">Html</span>
                                                <span class="badge bg-warning-transparent">Symphony</span>
                                                <span class="badge bg-success-transparent">Php</span>
                                            </div>
                                            <div class="avatar-list-stacked">
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/6.jpg" alt="img">
                                                </span>
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/9.jpg" alt="img">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="card border border-secondary border-opacity-25 shadow-none custom-card">
                                        <div class="card-body">
                                            <p class="fs-14 fw-semibold mb-2 lh-1">New Project Discussion
                                                <a aria-label="anchor" href="javascript:void(0);"><i
                                                        class="bi bi-plus-square float-end text-secondary fs-18"></i></a>
                                            </p>
                                            <div class="d-flex flex-wrap gap-2 mb-4">
                                                <span class="badge bg-info-transparent">React</span>
                                                <span class="badge bg-primary-transparent">Typescript</span>
                                            </div>
                                            <div class="avatar-list-stacked">
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/3.jpg" alt="img">
                                                </span>
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/14.jpg" alt="img">
                                                </span>
                                                <span class="avatar avatar-sm avatar-rounded">
                                                    <img src="/images/faces/11.jpg" alt="img">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="card custom-card shadow-none projects-tracking-card overflow-hidden text-center">
                        <div class="card-body">
                            <img src="/images/media/media-86.svg" alt="" class="mb-1">
                            <div>
                                <span class="fs-15 fw-semibold d-block mt-4 mb-3">Track your work progress here</span>
                                <button type="button" class="btn btn-primary btn-sm btn-wave">Track Here</button>
                            </div>
                            <span class="shape-1 text-primary"><i class="ti ti-circle fs-20 fw-bold"></i></span>
                            <span class="shape-2 text-secondary"><i class="ti ti-triangle fs-20 fw-bold"></i></span>
                            <span class="shape-3 text-warning"><i class="ti ti-square fs-20 fw-bold"></i></span>
                            <span class="shape-4 text-info"><i class="ti ti-square-rotated fs-20 fw-bold"></i></span>
                            <span class="shape-5 text-success"><i class="ti ti-pentagon fs-20 fw-bold"></i></span>
                            <span class="shape-6 text-danger"><i class="ti ti-star fs-20 fw-bold"></i></span>
                            <span class="shape-7 text-pink"><i class="ti ti-hexagon fs-20 fw-bold"></i></span>
                            <span class="shape-8 text-teal"><i class="ti ti-octagon fs-20 fw-bold"></i></span>
                            <span class="shape-9 text-primary"><i class="ti ti-circle fs-20 fw-bold"></i></span>
                            <span class="shape-10 text-secondary"><i class="ti ti-triangle fs-20 fw-bold"></i></span>
                            <span class="shape-11 text-warning"><i class="ti ti-square fs-20 fw-bold"></i></span>
                            <span class="shape-12 text-info"><i class="ti ti-square-rotated fs-20 fw-bold"></i></span>
                            <span class="shape-13 text-success"><i class="ti ti-pentagon fs-20 fw-bold"></i></span>
                            <span class="shape-14 text-danger"><i class="ti ti-star fs-20 fw-bold"></i></span>
                            <span class="shape-15 text-pink"><i class="ti ti-hexagon fs-20 fw-bold"></i></span>
                            <span class="shape-16 text-teal"><i class="ti ti-octagon fs-20 fw-bold"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Recent Transactions
                            </div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled project-transactions-card">
                                <li>
                                    <div class="d-flex align-items-top">
                                        <div class="me-3">
                                            <span class="avatar avatar-rounded fw-bold avatar-md bg-primary-transparent">
                                                S
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="d-block fw-semibold">Simon Cowall</span>
                                            <span class="d-block text-muted fs-11">Feb 28,2023 - 12:54PM</span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold">$21,442</h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-top">
                                        <div class="me-3">
                                            <span class="avatar avatar-rounded fw-bold avatar-md bg-secondary-transparent">
                                                M
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="d-block fw-semibold">Melissa Blue</span>
                                            <span class="d-block text-muted fs-11">Mar 28,2023 - 10:14AM</span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold">$8,789</h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-top">
                                        <div class="me-3">
                                            <span class="avatar avatar-rounded fw-bold avatar-md bg-success-transparent">
                                                G
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="d-block fw-semibold">Gabriel Shin</span>
                                            <span class="d-block text-muted fs-11">Mar 16,2023 - 05:27PM</span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold">$13,677</h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-top">
                                        <div class="me-3">
                                            <span class="avatar avatar-rounded fw-bold avatar-md bg-warning-transparent">
                                                Y
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="d-block fw-semibold">Yohasimi Nakiyaro</span>
                                            <span class="d-block text-muted fs-11">Mar 19,2023 - 04:45PM</span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold">$3,543</h6>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-top">
                                        <div class="me-3">
                                            <span class="avatar avatar-rounded fw-bold avatar-md bg-info-transparent">
                                                B
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="d-block fw-semibold">Brenda Lynn</span>
                                            <span class="d-block text-muted fs-11">Mar 10,2023 - 05:25PM</span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold">$7,890</h6>
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

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xxl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Projects Summary
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="me-3 my-1">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown my-1">
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
                        <table class="table table-hover text-nowrap table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Assigned To</th>
                                    <th scope="col">Tasks</th>
                                    <th scope="col">Progress</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        Home Page
                                    </td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                                                href="javascript:void(0);">
                                                +2
                                            </a>
                                        </div>
                                    </td>
                                    <td>110/180</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="progress progress-animate progress-xs w-100" role="progressbar"
                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    style="width: 0%"></div>
                                            </div>
                                            <div class="ms-2">0%</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">In Progress</span>
                                    </td>
                                    <td>
                                        14-04-2023
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        Landing Design
                                    </td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/5.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/9.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="img">
                                            </span>
                                        </div>
                                    </td>
                                    <td>95/100</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="progress progress-animate progress-xs w-100" role="progressbar"
                                                aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    style="width: 95%"></div>
                                            </div>
                                            <div class="ms-2">95%</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">In Progress</span>
                                    </td>
                                    <td>
                                        20-04-2023
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        New Template Design
                                    </td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="img">
                                            </span>
                                        </div>
                                    </td>
                                    <td>90/100</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="progress progress-animate progress-xs w-100" role="progressbar"
                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    style="width: 0%"></div>
                                            </div>
                                            <div class="ms-2">0%</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-transparent">Pending</span>
                                    </td>
                                    <td>
                                        29-05-2023
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        4
                                    </th>
                                    <td>
                                        HR Management Template Design
                                    </td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/10.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                                                href="javascript:void(0);">
                                                +5
                                            </a>
                                        </div>
                                    </td>
                                    <td>26/71</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="progress progress-animate progress-xs w-100" role="progressbar"
                                                aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    style="width: 35%"></div>
                                            </div>
                                            <div class="ms-2">35%</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">In Progress</span>
                                    </td>
                                    <td>
                                        18-04-2023
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        5
                                    </th>
                                    <td>
                                        Designing New Template
                                    </td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/9.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/16.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                                                href="javascript:void(0);">
                                                +3
                                            </a>
                                        </div>
                                    </td>
                                    <td>26/71</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="progress progress-animate progress-xs w-100" role="progressbar"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    style="width: 100%"></div>
                                            </div>
                                            <div class="ms-2">100%</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Completed</span>
                                    </td>
                                    <td>
                                        11-04-2023
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        6
                                    </th>
                                    <td>
                                        Documentation Project
                                    </td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/7.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/13.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="img">
                                            </span>
                                        </div>
                                    </td>
                                    <td>45/90</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="progress progress-animate progress-xs w-100" role="progressbar"
                                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    style="width: 50%"></div>
                                            </div>
                                            <div class="ms-2">50%</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">In Progress</span>
                                    </td>
                                    <td>
                                        18-04-2023
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

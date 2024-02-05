<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as coursesData from '@/data/dashboards/courses.js';
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
                current: "Courses",
                list: [
                    'Dashboards', 'Courses'
                ]
            },
            coursesData: coursesData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-7 col-xl-7 col-lg-12">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Top Categories
                            </div>
                            <div>
                                <button type="button" class="btn btn-light btn-wave btn-sm">View All</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row gy-xxl-0 gy-3">
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div>
                                        <a href="javascript:void(0);" class="category-link primary text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="category-svg"
                                                viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                <path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3">
                                                </path>
                                                <path
                                                    d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z">
                                                </path>
                                            </svg>
                                            <p class="fs-14 mb-1 text-default fw-semibold">UI/UX Design</p>
                                            <span class="fs-11 text-muted">1000+ Courses</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div>
                                        <a href="javascript:void(0);" class="category-link secondary text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="category-svg"
                                                enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                                <g>
                                                    <rect fill="none" height="24" width="24"></rect>
                                                </g>
                                                <g>
                                                    <g opacity=".3">
                                                        <path
                                                            d="M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5 l-0.82-1.91c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M19.99,4.01c0,0-3.55-0.69-8.23,3.99 c-1.32,1.32-2.4,3.38-2.73,4.04l2.93,2.93c0.65-0.32,2.71-1.4,4.04-2.73C20.68,7.56,19.99,4.01,19.99,4.01z M15,11 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C17,10.1,16.1,11,15,11z">
                                                        </path>
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p class="fs-14 mb-1 text-default fw-semibold">Digital Marketing</p>
                                            <span class="fs-11 text-muted">90+ Courses</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div>
                                        <a href="javascript:void(0);" class="category-link warning text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="category-svg"
                                                enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="swatchbook">
                                                <path opacity="0.2"
                                                    d="M9 22H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v14a3.003 3.003 0 0 1-3 3z">
                                                </path>
                                                <path opacity="0.4"
                                                    d="m20.293 6.535-2.828-2.828a3.004 3.004 0 0 0-4.243 0l-1.229 1.228c0 .022.007.043.007.065v14c0 .027-.007.052-.008.08l8.301-8.302a3.004 3.004 0 0 0 0-4.243z">
                                                </path>
                                                <circle cx="7" cy="17" r="1" opacity="1"></circle>
                                                <path opacity="1"
                                                    d="m19.065 12.007-7.073 7.072c0-.027.008-.052.008-.079a3.003 3.003 0 0 1-3 3h10a3.003 3.003 0 0 0 3-3v-4a3 3 0 0 0-2.935-2.993z">
                                                </path>
                                            </svg>
                                            <p class="fs-14 mb-1 text-default fw-semibold">Web Development</p>
                                            <span class="fs-11 text-muted">250+ Courses</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div>
                                        <a href="javascript:void(0);" class="category-link success">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="category-svg"
                                                enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                                <rect fill="none" height="24" width="24"></rect>
                                                <g opacity=".3">
                                                    <path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z">
                                                    </path>
                                                </g>
                                            </svg>
                                            <p class="fs-14 mb-1 text-default fw-semibold">Stocks &amp; Trading</p>
                                            <span class="fs-11 text-muted">100+ Courses</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">Earnings Report</div>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary btn-sm btn-wave">1M</button>
                                <button type="button" class="btn btn-primary-light btn-sm btn-wave">6M</button>
                                <button type="button" class="btn btn-primary-light btn-sm btn-wave">1Y</button>
                                <button type="button" class="btn btn-primary-light btn-sm btn-wave">All</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <apexchart height="335px" type="bar" :options="coursesData.earningsReportOptions"
                                :series="coursesData.earningsReportSeries"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-12">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap align-items-top gap-2">
                                <div class="me-1">
                                    <span class="avatar avatar-lg bg-primary">
                                        <i class="ti ti-wallet fs-20"></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <h5 class="d-block fw-semibold fs-18 mb-1">$98,312</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="text-muted fs-12">YTD Earnings</div>
                                        <div class="text-success"><i
                                                class="ti ti-trending-up fs-16 me-1 align-middle d-inline-flex"></i>+2.02%
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="text-primary fs-12">View All<i
                                            class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap gap-2 align-items-top">
                                <div class="me-1">
                                    <span class="avatar avatar-lg bg-secondary">
                                        <i class="ti ti-users fs-20"></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <h5 class="d-block fw-semibold fs-18 mb-1">35,393</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="text-muted fs-12">Total Students</div>
                                        <div class="text-danger"><i
                                                class="ti ti-trending-down fs-16 me-1 align-middle d-inline-flex"></i>-0.24%
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="text-secondary fs-12">View All<i
                                            class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap gap-2 align-items-top">
                                <div class="me-1">
                                    <span class="avatar avatar-lg bg-warning">
                                        <i class="ti ti-id fs-20"></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <h5 class="d-block fw-semibold fs-18 mb-1">573</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="text-muted fs-12">Total Instructors</div>
                                        <div class="text-danger"><i
                                                class="ti ti-trending-down fs-16 me-1 align-middle d-inline-flex"></i>-1.32%
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="text-warning fs-12">View All<i
                                            class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap gap-2 align-items-top">
                                <div class="me-1">
                                    <span class="avatar avatar-lg bg-danger">
                                        <i class="ti ti-gift fs-20"></i>
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <h5 class="d-block fw-semibold fs-18 mb-1">2,389</h5>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="text-muted fs-12">Total Courses</div>
                                        <div class="text-success"><i
                                                class="ti ti-trending-up fs-16 me-1 align-middle d-inline-flex"></i>+0.89%
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="text-danger fs-12">View All<i
                                            class="ti ti-arrow-narrow-right ms-2 fw-semibold"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                My Courses
                            </div>
                            <div>
                                <button type="button" class="btn btn-light btn-sm">View All</button>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Instructor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <div>
                                                        ui/ux Designing
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="progress progress-xs course-status-progress progress-animate me-2"
                                                        role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <div class="progress-bar progress-bar-striped bg-primary"
                                                            style="width: 60%"></div>
                                                    </div>
                                                    <div>60%</div>
                                                </div>
                                            </td>
                                            <td>3 Months</td>
                                            <td><span class="badge bg-outline-primary">Full Time</span></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/2.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="fw-semibold">Sarah Taylor</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <div>
                                                        Project Management
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="progress progress-xs course-status-progress progress-animate me-2"
                                                        role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <div class="progress-bar progress-bar-striped bg-success"
                                                            style="width: 100%"></div>
                                                    </div>
                                                    <div>100%</div>
                                                </div>
                                            </td>
                                            <td>45 Days</td>
                                            <td><span class="badge bg-outline-success">Completed</span></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/11.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="fw-semibold">Jason Smith</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <div>
                                                        Python
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="progress progress-xs course-status-progress progress-animate me-2"
                                                        role="progressbar" aria-valuenow="38" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <div class="progress-bar progress-bar-striped bg-warning"
                                                            style="width: 38%"></div>
                                                    </div>
                                                    <div>38%</div>
                                                </div>
                                            </td>
                                            <td>90 Days</td>
                                            <td><span class="badge bg-outline-warning">Part Time</span></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/14.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="fw-semibold">Alex Perira</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <div>
                                                        Digital Marketing
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="progress progress-xs course-status-progress progress-animate me-2"
                                                        role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <div class="progress-bar progress-bar-striped bg-info"
                                                            style="width: 75%"></div>
                                                    </div>
                                                    <div>75%</div>
                                                </div>
                                            </td>
                                            <td>24 Days</td>
                                            <td><span class="badge bg-outline-info">Week End</span></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/8.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="fw-semibold">Kamala Singh</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <div>
                                                        Full Stack Development
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="progress progress-xs course-status-progress progress-animate me-2"
                                                        role="progressbar" aria-valuenow="55" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <div class="progress-bar progress-bar-striped bg-primary"
                                                            style="width: 55%"></div>
                                                    </div>
                                                    <div>55%</div>
                                                </div>
                                            </td>
                                            <td>6 Months</td>
                                            <td><span class="badge bg-outline-primary">Full Time</span></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/4.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="fw-semibold">Jessica Leon</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="border-bottom-0">
                                                <div>
                                                    <div>
                                                        Stocks & Trading
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="border-bottom-0">
                                                <div class="d-flex align-items-center">
                                                    <div class="progress progress-xs course-status-progress progress-animate me-2"
                                                        role="progressbar" aria-valuenow="29" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <div class="progress-bar progress-bar-striped bg-danger"
                                                            style="width: 29%"></div>
                                                    </div>
                                                    <div>29%</div>
                                                </div>
                                            </td>
                                            <td class="border-bottom-0">1 Month</td>
                                            <td class="border-bottom-0"><span class="badge bg-outline-danger">Stopped</span>
                                            </td>
                                            <td class="border-bottom-0">
                                                <div class="d-flex align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-sm avatar-rounded">
                                                            <img src="/images/faces/12.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="fw-semibold">Israel Khan</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Top Instructors</div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled courses-instructors mb-0">
                        <li>
                            <div class="d-flex">
                                <div class="d-flex flex-fill align-items-center">
                                    <div class="me-2">
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/1.jpg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">John Henry</span>
                                        <span class="text-muted">M.Tech</span>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <span class="d-block text-primary fw-semibold">321 Classes</span>
                                    <span class="text-muted">Digital Marketing</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="d-flex flex-fill align-items-center">
                                    <div class="me-2">
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/5.jpg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">Mortal Yun</span>
                                        <span class="text-muted">P.H.D</span>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <span class="d-block text-primary fw-semibold">25 Classes</span>
                                    <span class="text-muted">Stocks &amp; Trading</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="d-flex flex-fill align-items-center">
                                    <div class="me-2">
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/8.jpg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">Trex Con</span>
                                        <span class="text-muted">MBBS</span>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <span class="d-block text-primary fw-semibold">39 Classes</span>
                                    <span class="text-muted">Science</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="d-flex flex-fill align-items-center">
                                    <div class="me-2">
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/12.jpg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">Saiu Sarah</span>
                                        <span class="text-muted">P.H.D</span>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <span class="d-block text-primary fw-semibold">11 Classes</span>
                                    <span class="text-muted">Science</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="d-flex flex-fill align-items-center">
                                    <div class="me-2">
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/15.jpg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">Ion Hau</span>
                                        <span class="text-muted">M.Tech</span>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <span class="d-block text-primary fw-semibold">124 Classes</span>
                                    <span class="text-muted">Web Development</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-5">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        New Students
                    </div>
                    <div>
                        <button type="button" class="btn btn-sm btn-light">View All</button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="bg-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Courses</th>
                                    <th scope="col">Completed</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/faces/13.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-blockfw-semibold">Richard Dom</span>
                                                <span class="d-block fs-12 text-muted">richarddom1116@demo.com</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="">9</td>
                                    <td class="">1</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/faces/5.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-blockfw-semibold">Alicia Keys</span>
                                                <span class="d-block fs-12 text-muted">aliciakeys89@gmail.com</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="">1</td>
                                    <td class="">0</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/faces/10.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-blockfw-semibold">Robert Brook</span>
                                                <span class="d-block fs-12 text-muted">robertbrook95@gmail.com</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="">15</td>
                                    <td class="">0</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="border-bottom-0">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/faces/9.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-blockfw-semibold">Alex Boi</span>
                                                <span class="d-block fs-12 text-muted">alexboi555@gmail.com</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="border-bottom-0">16</td>
                                    <td class="border-bottom-0">3</td>
                                    <td class="border-bottom-0">
                                        <div class="hstack gap-2 fs-15">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Payouts
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary btn-sm btn-wave waves-effect waves-light">1M</button>
                        <button type="button"
                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                        <button type="button"
                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</button>
                    </div>
                </div>
                <div class="card-body">
                    <apexchart height="270px" type="line" :options="coursesData.payoutsOptions2"
                        :series="coursesData.payoutsSeries"></apexchart>
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
                        Course List
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="me-3 my-1">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown m-1">
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
                        <table class="table text-nowrap table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Classes</th>
                                    <th scope="col">Last Updated</th>
                                    <th scope="col">Instructor</th>
                                    <th scope="col">Students</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center lh-1">
                                            <div class="me-2">
                                                <span class="avatar avatar-xs">
                                                    <img src="/images/nft-images/1.png" alt="">
                                                </span>
                                            </div>
                                            <div>Ray Optics &amp; Optical Fibre Master Class</div>
                                        </div>
                                    </td>
                                    <td>
                                        Science
                                    </td>
                                    <td>
                                        20
                                    </td>
                                    <td>
                                        29-05-2023
                                    </td>
                                    <td>
                                        Shin Opran
                                    </td>
                                    <td>
                                        25
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-1">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center lh-1">
                                            <div class="me-2">
                                                <span class="avatar avatar-xs">
                                                    <img src="/images/nft-images/2.png" alt="">
                                                </span>
                                            </div>
                                            <div>Master Linear Alzebra Medium Level</div>
                                        </div>
                                    </td>
                                    <td>
                                        Mathematics
                                    </td>
                                    <td>
                                        90
                                    </td>
                                    <td>
                                        11-06-2023
                                    </td>
                                    <td>
                                        Arya Neo
                                    </td>
                                    <td>
                                        773
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-1">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center lh-1">
                                            <div class="me-2">
                                                <span class="avatar avatar-xs">
                                                    <img src="/images/nft-images/8.png" alt="">
                                                </span>
                                            </div>
                                            <div>Learn How To Trade And Invest For-Absolute Beginners</div>
                                        </div>
                                    </td>
                                    <td>
                                        Stocks &amp; Trading
                                    </td>
                                    <td>
                                        161
                                    </td>
                                    <td>
                                        10-06-2023
                                    </td>
                                    <td>
                                        Sia Niu
                                    </td>
                                    <td>
                                        51
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-1">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center lh-1">
                                            <div class="me-2">
                                                <span class="avatar avatar-xs">
                                                    <img src="/images/nft-images/7.png" alt="">
                                                </span>
                                            </div>
                                            <div>Digital Marketing Course from Scratch</div>
                                        </div>
                                    </td>
                                    <td>
                                        Marketing
                                    </td>
                                    <td>
                                        115
                                    </td>
                                    <td>
                                        21-06-2023
                                    </td>
                                    <td>
                                        Stuart George
                                    </td>
                                    <td>
                                        1,189
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-1">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center lh-1">
                                            <div class="me-2">
                                                <span class="avatar avatar-xs">
                                                    <img src="/images/nft-images/5.png" alt="">
                                                </span>
                                            </div>
                                            <div>Data Structures &amp; Algorithms For Beginners</div>
                                        </div>
                                    </td>
                                    <td>
                                        Programming
                                    </td>
                                    <td>
                                        30
                                    </td>
                                    <td>
                                        15-06-2023
                                    </td>
                                    <td>
                                        Boran Ray
                                    </td>
                                    <td>
                                        3,368
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-1">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        6
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center lh-1">
                                            <div class="me-2">
                                                <span class="avatar avatar-xs">
                                                    <img src="/images/nft-images/6.png" alt="">
                                                </span>
                                            </div>
                                            <div>Css Zero to Hero Master Class</div>
                                        </div>
                                    </td>
                                    <td>
                                        UI/UX
                                    </td>
                                    <td>
                                        51
                                    </td>
                                    <td>
                                        22-06-2023
                                    </td>
                                    <td>
                                        Burak Oin
                                    </td>
                                    <td>
                                        252
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-1">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i
                                                    class="ri-edit-line"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex flex-wrap align-items-center">
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

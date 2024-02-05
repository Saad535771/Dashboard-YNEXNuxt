<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as analyticsData from '@/data/dashboards/analytics.js';
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
                current: "Analytics",
                list: [
                    'Dashboards', 'Analytics'
                ]
            },
            analyticsData: analyticsData,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-7">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap align-items-center justify-content-between">
                                <div>
                                    <h6 class="fw-semibold mb-3">Total Users</h6>
                                    <span class="fs-25 fw-semibold">9,789</span>
                                    <span class="d-block text-success fs-12">+0.892 <i
                                            class="ti ti-trending-up ms-1"></i></span>
                                </div>
                                <div id="analytics-users">
                                    <apexchart width="120px" height="40px" type="line"
                                        :options="analyticsData.totalUsersOptions" :series="analyticsData.totalUsersSeries">
                                    </apexchart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6 class="fw-semibold mb-3">Live Visitors</h6>
                                    <span class="fs-25 fw-semibold">12,240</span>
                                    <span class="d-block text-danger fs-12">+0.59<i
                                            class="ti ti-trending-down ms-1 d-inline-flex"></i></span>
                                </div>
                                <div>
                                    <span class="avatar avatar-md bg-primary">
                                        <i class="ri-user-3-line"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-body mb-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6 class="fw-semibold text-primary mb-3">Bounce Rate</h6>
                                    <span class="fs-25 d-flex align-items-center">77.3% <span
                                            class="fs-12 text-warning op-7 ms-2">+0.59<i
                                                class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                </div>
                            </div>
                        </div>
                        <div id="analytics-bouncerate" class="mt-1 w-100">
                            <apexchart height="45px" type="line" :options="analyticsData.bouncerateOptions"
                                :series="analyticsData.bouncerateSeries"></apexchart>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Audience Report
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary-light btn-wave"><i
                                        class="ri-share-forward-line me-1 align-middle"></i>Export</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <apexchart height="250px" type="line" :options="analyticsData.AudienceOptions"
                                :series="analyticsData.AudienceSeries"></apexchart>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Top Countries Sessions vs Bounce Rate
                            </div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Day</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <apexchart height="308px" type="line" :options="analyticsData.CountryOptions"
                                :series="analyticsData.CountrySeries"></apexchart>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Traffic Sources
                            </div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Browser</th>
                                            <th scope="col">Sessions</th>
                                            <th scope="col">Traffic</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                        <i class="ri-google-fill fs-18 text-primary"></i>
                                                    </span>
                                                    <div class="fw-semibold">Google</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i
                                                        class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>23,379</span>
                                            </td>
                                            <td>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar bg-primary" role="progressbar"
                                                        style="width: 78%" aria-valuenow="78" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                        <i class="ri-safari-line fs-18 text-secondary"></i>
                                                    </span>
                                                    <div class="fw-semibold">Safari</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i
                                                        class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>78,973</span>
                                            </td>
                                            <td>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar bg-primary" role="progressbar"
                                                        style="width: 32%" aria-valuenow="32" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                        <i class="ri-opera-fill fs-18 text-success"></i>
                                                    </span>
                                                    <div class="fw-semibold">Opera</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i
                                                        class="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18"></i>12,457</span>
                                            </td>
                                            <td>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar bg-primary" role="progressbar"
                                                        style="width: 21%" aria-valuenow="21" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                        <i class="ri-edge-fill fs-18 text-info"></i>
                                                    </span>
                                                    <div class="fw-semibold">Edge</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i
                                                        class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>8,570</span>
                                            </td>
                                            <td>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar bg-primary" role="progressbar"
                                                        style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                        <i class="ri-firefox-fill fs-18 text-warning"></i>
                                                    </span>
                                                    <div class="fw-semibold">Firefox</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i
                                                        class="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18"></i>6,135</span>
                                            </td>
                                            <td>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar bg-primary" role="progressbar"
                                                        style="width: 35%" aria-valuenow="35" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-bottom-0">
                                                <div class="d-flex align-items-center">
                                                    <span class="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                        <i class="ri-ubuntu-fill fs-18 text-danger"></i>
                                                    </span>
                                                    <div class="fw-semibold">Ubuntu</div>
                                                </div>
                                            </td>
                                            <td class="border-bottom-0">
                                                <span><i
                                                        class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>4,789</span>
                                            </td>
                                            <td class="border-bottom-0">
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar bg-primary" role="progressbar"
                                                        style="width: 12%" aria-valuenow="12" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                    </div>
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
        <div class="col-xl-5">
            <div class="row">
                <div class="col-xxl-5 col-xl-12">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="card custom-card upgrade-card text-fixed-white">
                                <div class="card-body text-fixed-white">
                                    <span class="avatar avatar-xxl">
                                        <img src="/images/media/media-84.png" alt="">
                                    </span>
                                    <div class="upgrade-card-content">
                                        <span class="op-7 fw-normal mb-1">Plan is expiring !</span>
                                        <span class="fs-15 fw-semibold d-block mb-5 upgrade-text">Upgrade to premium</span>
                                        <button type="button" class="btn btn-sm btn-light btn-wave">Upgrade Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-6 col-md-6 col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body p-1">
                                    <div class="d-flex align-items-center flex-wrap">
                                        <div id="analytics-followers">
                                            <apexchart width="100px" height="120px" type="radialBar"
                                                :options="analyticsData.impressionsOptions"
                                                :series="analyticsData.impressionsSeries"></apexchart>
                                        </div>
                                        <div class="p-2">
                                            <p class="mb-1 text-muted">Impressions</p>
                                            <h5 class="fw-semibold mb-0">9,903</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-6 col-md-6 col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body p-1">
                                    <div class="d-flex align-items-center flex-wrap">
                                        <div id="analytics-views">
                                            <apexchart width="100px" height="120px" type="radialBar"
                                                :options="analyticsData.clicksOptions" :series="analyticsData.clicksSeries">
                                            </apexchart>
                                        </div>
                                        <div class="p-2">
                                            <p class="mb-1 text-muted">Clicks</p>
                                            <h5 class="fw-semibold mb-0">16,789</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Sessions By Device
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary-light">View All</button>
                            </div>
                        </div>
                        <div class="card-body my-2 py-4 px-2">
                            <apexchart width="100%" height="255px" type="donut" :options="analyticsData.SessionsOptions"
                                :series="analyticsData.SessionsSeries"></apexchart>
                        </div>
                        <div class="card-footer p-0">
                            <div class="row row-cols-12 justify-content-center">
                                <div class="col pe-0 text-center">
                                    <div class="p-sm-3 p-2 ">
                                        <span class="text-muted fs-11">Mobile</span>
                                        <span class="d-block fs-16 fw-semibold">68.3%</span>
                                    </div>
                                </div>
                                <div class="col px-0 text-center">
                                    <div class="p-sm-3 p-2 ">
                                        <span class="text-muted fs-11">Tablet</span>
                                        <span class="d-block fs-16 fw-semibold">17.68%</span>
                                    </div>
                                </div>
                                <div class="col px-0 text-center">
                                    <div class="p-sm-3 p-2 ">
                                        <span class="text-muted fs-11">Desktop</span>
                                        <span class="d-block fs-16 fw-semibold">10.5%</span>
                                    </div>
                                </div>
                                <div class="col ps-0 text-center">
                                    <div class="p-sm-3 p-2">
                                        <span class="text-muted fs-11">Others</span>
                                        <span class="d-block fs-16 fw-semibold">5.16%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">Sessions Duration By New Users</div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
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
                            <apexchart height="387px" type="line" :options="analyticsData.newUsersOptions"
                                :series="analyticsData.newUsersSeries"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-9">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Visitors By Channel Report
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
                                    <th scope="col">Channel</th>
                                    <th scope="col">Sessions</th>
                                    <th scope="col">Bounce Rate</th>
                                    <th scope="col">Avg Session Duration</th>
                                    <th scope="col">Goal Completed</th>
                                    <th scope="col">Pages Per Session</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-primary-transparent avatar-rounded">
                                                <i class="ri-search-2-line fs-15 fw-semibiold text-primary"></i>
                                            </span>
                                            <span class="ms-2">
                                                Organic Search
                                            </span>
                                        </div>
                                    </td>
                                    <td>782</td>
                                    <td>32.09%</td>
                                    <td>
                                        0 hrs : 0 mins : 32 secs
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">278</span>
                                    </td>
                                    <td>
                                        2.9
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-secondary-transparent avatar-rounded">
                                                <i class="ri-globe-line fs-15 fw-semibiold text-secondary"></i>
                                            </span>
                                            <span class="ms-2">
                                                Direct
                                            </span>
                                        </div>
                                    </td>
                                    <td>882</td>
                                    <td>39.38%</td>
                                    <td>
                                        0 hrs : 2 mins : 45 secs
                                    </td>
                                    <td>
                                        <span class="badge bg-secondary-transparent">782</span>
                                    </td>
                                    <td>
                                        1.5
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-success-transparent avatar-rounded">
                                                <i class="ri-share-forward-line fs-15 fw-semibiold text-success"></i>
                                            </span>
                                            <span class="ms-2">
                                                Referral
                                            </span>
                                        </div>
                                    </td>
                                    <td>322</td>
                                    <td>22.67%</td>
                                    <td>
                                        0 hrs : 38 mins : 28 secs
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">622</span>
                                    </td>
                                    <td>
                                        3.2
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        4
                                    </th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-info-transparent avatar-rounded">
                                                <i class="ri-reactjs-line fs-15 fw-semibiold text-info"></i>
                                            </span>
                                            <span class="ms-2">
                                                Social
                                            </span>
                                        </div>
                                    </td>
                                    <td>389</td>
                                    <td>25.11%</td>
                                    <td>
                                        0 hrs : 12 mins : 89 secs
                                    </td>
                                    <td>
                                        <span class="badge bg-info-transparent">142</span>
                                    </td>
                                    <td>
                                        1.4
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        5
                                    </th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-warning-transparent avatar-rounded">
                                                <i class="ri-mail-line fs-15 fw-semibiold text-warning"></i>
                                            </span>
                                            <span class="ms-2">
                                                Email
                                            </span>
                                        </div>
                                    </td>
                                    <td>378</td>
                                    <td>23.79%</td>
                                    <td>
                                        0 hrs : 14 mins : 27 secs
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-transparent">178</span>
                                    </td>
                                    <td>
                                        1.6
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        6
                                    </th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-sm bg-danger-transparent avatar-rounded">
                                                <i class="ri-bank-card-line fs-15 fw-semibiold text-danger"></i>
                                            </span>
                                            <span class="ms-2">
                                                Paid Search
                                            </span>
                                        </div>
                                    </td>
                                    <td>488</td>
                                    <td>28.77%</td>
                                    <td>
                                        0 hrs : 16 mins : 28 secs
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-transparent">578</span>
                                    </td>
                                    <td>
                                        2.5
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
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Visitors By Countries
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Day</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mb-0 analytics-visitors-countries">
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/us_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">United States</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">32,190</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/germany_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">Germany</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">8,798</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/mexico_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">Mexico</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">16,885</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/uae_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">Uae</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">14,885</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/argentina_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">Argentina</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">17,578</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/russia_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">Russia</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">10,118</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/china_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">China</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">6,578</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/french_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">France</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">2,345</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm avatar-rounded text-default">
                                        <img src="/images/flags/canada_flag.jpg" alt="">
                                    </span>
                                </div>
                                <div class="ms-3 flex-fill lh-1">
                                    <span class="fs-12">Canada</span>
                                </div>
                                <div>
                                    <span class="text-default badge bg-light fw-semibold mt-2">1,678</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 -->
</template>

<style scoped></style>

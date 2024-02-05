<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as marketcapData from '@/data/apps/marketcap.js'
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
                current: "Marketcap",
                list: [
                    'Apps', 'Crypto', 'Marketcap'
                ]
            },
            marketcapData: marketcapData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6 col-lg-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-4">
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="avatar avatar-md avatar-rounded bg-light p-2">
                                    <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                                </span>
                            </div>
                            <div class="mb-0 fw-semibold">
                                Bitcoin - BTC
                            </div>
                        </div>
                        <div class="ms-auto sparkline">
                            <apexchart type="line" height="40px" width="120px"
                                :options="marketcapData.maincardspark1Options" :series="marketcapData.maincardspark1series">
                            </apexchart>
                        </div>
                    </div>
                    <div class="d-flex align-items-end">
                        <div>
                            <p class="mb-1">BTC / USD</p>
                            <p class="fs-20 mb-0 fw-semibold lh-1 text-primary">$35,876.29</p>
                        </div>
                        <div class="ms-auto text-end">
                            <p class="mb-0">$0.04</p>
                            <p class="mb-0 text-muted"><span class="text-muted">Vol:</span>(+2.33%)</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer p-0">
                    <div class="list-group border-0">
                        <a href="javascript:void(0);"
                            class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <p class="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span
                                        class="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                <p class="text-success mb-0 font-weight-normal tx-13">
                                    <span class="numberfont">+280.30(0.96%)</span> <i class="fa fa-arrow-up"></i> today
                                </p>
                            </div>
                        </a>
                        <a href="javascript:void(0);"
                            class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <p class="tx-14 mb-0 font-weight-semibold text-dark">Market Rank<span
                                        class="badge bg-secondary-transparent ms-3">3 Years</span></p>
                                <p class="text-dark mb-0 tx-15">
                                    <span class="numberfont">#1</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-4">
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="avatar avatar-md avatar-rounded bg-light p-2">
                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                </span>
                            </div>
                            <div class="mb-0 fw-semibold">
                                Etherium - ETH
                            </div>
                        </div>
                        <div class="ms-auto sparkline">
                            <apexchart type="line" height="40px" width="120px"
                                :options="marketcapData.maincardspark2Options" :series="marketcapData.maincardspark2series">
                            </apexchart>
                        </div>
                    </div>
                    <div class="d-flex align-items-end">
                        <div>
                            <p class="mb-1">ETH / USD</p>
                            <p class="fs-20 mb-0 fw-semibold lh-1 text-primary">$31,244.12</p>
                        </div>
                        <div class="ms-auto text-end">
                            <p class="mb-0">$2.57</p>
                            <p class="mb-0 text-muted"><span class="text-muted">Vol:</span>(+13.45%)</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer p-0">
                    <div class="list-group border-0">
                        <a href="javascript:void(0);"
                            class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <p class="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span
                                        class="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                <p class="text-success mb-0 font-weight-normal tx-13">
                                    <span class="numberfont">+2,044.24(1.32%)</span> <i class="fa fa-arrow-up"></i> today
                                </p>
                            </div>
                        </a>
                        <a href="javascript:void(0);"
                            class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <p class="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                <p class="text-dark mb-0 tx-15">
                                    <span class="numberfont">#2</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-4">
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="avatar avatar-md avatar-rounded bg-light p-2">
                                    <img src="/images/crypto-currencies/regular/Dash.svg" alt="">
                                </span>
                            </div>
                            <div class="mb-0 fw-semibold">
                                Dash - DASH
                            </div>
                        </div>
                        <div class="ms-auto sparkline">
                            <apexchart type="line" height="40px" width="120px"
                                :options="marketcapData.maincardspark3Options" :series="marketcapData.maincardspark3series">
                            </apexchart>
                        </div>
                    </div>
                    <div class="d-flex align-items-end">
                        <div>
                            <p class="mb-1">DASH / USD</p>
                            <p class="fs-20 mb-0 fw-semibold lh-1 text-primary">$26,345.000</p>
                        </div>
                        <div class="ms-auto text-end">
                            <p class="mb-0">$12.32</p>
                            <p class="mb-0 text-muted"><span class="text-muted">Vol:</span>(+112.95%)</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer p-0">
                    <div class="list-group border-0">
                        <a href="javascript:void(0);"
                            class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <p class="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span
                                        class="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                <p class="text-success mb-0 font-weight-normal tx-13">
                                    <span class="numberfont">+40.17 (1.52%)</span> <i class="fa fa-arrow-up"></i> today
                                </p>
                            </div>
                        </a>
                        <a href="javascript:void(0);"
                            class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <p class="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                <p class="text-dark mb-0 tx-15">
                                    <span class="numberfont">#105</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        My Top Currencies
                    </div>
                    <div>
                        <button class="btn btn-info-light btn-sm btn-wave">View All</button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="d-flex align-items-center justify-content-between  flex-wrap">
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-sm p-1 bg-light">
                                            <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">Bitcoin</span>
                                        <span class="d-block text-muted fs-12 fw-normal">$29,948.80</span>
                                    </div>
                                </div>
                                <div>
                                    <span class="fs-12 text-muted">Max Limit</span>
                                    <span class="fw-semibold d-block">50 BTC</span>
                                </div>
                                <div>
                                    <span class="fs-12 text-muted">My Volume</span>
                                    <span class="fw-semibold d-block">31.2450 BTC</span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center justify-content-between  flex-wrap">
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-sm p-1 bg-light">
                                            <img src="/images/crypto-currencies/regular/litecoin.svg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">Litecon</span>
                                        <span class="d-block text-muted fs-12 fw-normal">$9332.98</span>
                                    </div>
                                </div>
                                <div>
                                    <span class="fs-12 text-muted">Max Limit</span>
                                    <span class="fw-semibold d-block">200 LTC</span>
                                </div>
                                <div class="text-end">
                                    <span class="fs-12 text-muted">My Volume</span>
                                    <span class="fw-semibold d-block">38.0023 LTC</span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center justify-content-between  flex-wrap">
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-sm p-1 bg-light">
                                            <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-semibold">Etherium</span>
                                        <span class="d-block text-muted fs-12 fw-normal">$1,895.96</span>
                                    </div>
                                </div>
                                <div>
                                    <span class="fs-12 text-muted">Max Limit</span>
                                    <span class="fw-semibold d-block">100 ETH</span>
                                </div>
                                <div>
                                    <span class="fs-12 text-muted">My Volume</span>
                                    <span class="fw-semibold d-block">69.2412 BTC</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2  -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Crypto MarketCap
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <div>
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu" style="">
                                <li><a class="dropdown-item" href="javascript:void(0);">Market Cap</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Price</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Trading Volume</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Price Change (24h)</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Rank</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">All-Time High (ATH)</a></li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-secondary btn-sm btn-wave waves-effect waves-light">View All</button>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col" class="fw-semibold">#</th>
                                    <th scope="col">Crypto Name</th>
                                    <th scope="col">MarketCap</th>
                                    <th scope="col">Price<span class="text-muted ms-1">(USD)</span></th>
                                    <th scope="col">1h Change</th>
                                    <th scope="col">24h Change</th>
                                    <th scope="col">Volume (24h)</th>
                                    <th scope="col">Circulating Supply</th>
                                    <th scope="col">last 1Week</th>
                                    <th scope="col">Trade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>1</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Bitcoin.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Bitcoin (BTC)</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$582.23B</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$29,948.80</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.483%</span>
                                    </td>
                                    <td>
                                        <span class="text-success fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.239%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$11.79B USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block mb-2">
                                                19.43M of (21M)
                                            </span>
                                            <div class="progress-stacked progress-xs w-75">
                                                <div class="progress-bar bg-success op-5" role="progressbar"
                                                    style="width: 88%" aria-valuenow="10" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                                <div class="progress-bar bg-danger op-5" role="progressbar"
                                                    style="width: 12%" aria-valuenow="15" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark1Options" :series="marketcapData.spark1series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>2</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Etherium (ETH)</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$226.91B</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$1,895.96</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.87%</span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.29%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$2.83B USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block">
                                                120M
                                            </span>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark2Options" :series="marketcapData.spark2series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>3</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Golem.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Golem (GLM)</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$202.07M</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$0.201472</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-success fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.61%</span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>34.96%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$2,112,645 USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block mb-2">
                                                1,000M
                                            </span>
                                            <div class="progress-stacked progress-xs w-75">
                                                <div class="progress-bar bg-success op-5" role="progressbar"
                                                    style="width: 100%" aria-valuenow="100" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark3Options" :series="marketcapData.spark3series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>4</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Dash.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Dash (DASH)</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$365.877M</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$32.13</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-success fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.59%</span>
                                    </td>
                                    <td>
                                        <span class="text-success fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>1.24%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$3.61M USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block mb-2">
                                                11.37M of (18.92M)
                                            </span>
                                            <div class="progress-stacked progress-xs w-75">
                                                <div class="progress-bar bg-success op-5" role="progressbar"
                                                    style="width:56%" aria-valuenow="10" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                                <div class="progress-bar bg-danger op-5" role="progressbar"
                                                    style="width: 44%" aria-valuenow="15" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark4Options" :series="marketcapData.spark4series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>5</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Litecoin.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Litecoin (LTC)</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$6.80B</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$92.98</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.90%</span>
                                    </td>
                                    <td>
                                        <span class="text-success fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>2.22%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$11.46B USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block mb-2">
                                                73.40M
                                            </span>
                                            <div class="progress-stacked progress-xs w-75">
                                                <div class="progress-bar bg-success op-5" role="progressbar"
                                                    style="width:100%" aria-valuenow="10" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark5Options" :series="marketcapData.spark5series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>6</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Ripple.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Ripple (XRP)</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$42.48B</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$0.83</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-success fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.01%</span>
                                    </td>
                                    <td>
                                        <span class="text-success fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.91%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$2.99B USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block mb-2">
                                                52.54B of (100B)
                                            </span>
                                            <div class="progress-stacked progress-xs w-75">
                                                <div class="progress-bar bg-success op-5" role="progressbar"
                                                    style="width:52%" aria-valuenow="52" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                                <div class="progress-bar bg-danger op-5" role="progressbar"
                                                    style="width: 48%" aria-valuenow="48" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark6Options" :series="marketcapData.spark6series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>7</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/EOS.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">EOS</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$85.2M</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$0.765957</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.61%</span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>20.65%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$116.91M USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block mb-2">
                                                10.1B of (105B)
                                            </span>
                                            <div class="progress-stacked progress-xs w-75">
                                                <div class="progress-bar bg-success op-5" role="progressbar"
                                                    style="width:10%" aria-valuenow="10" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                                <div class="progress-bar bg-danger op-5" role="progressbar"
                                                    style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark7Options" :series="marketcapData.spark7series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>8</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Bytecoin.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Bytecoin (BCN)</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$6.2M</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$0.00039</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>25.24%</span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>27.12%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$6,184 USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block mb-2">
                                                184.02B of (184.07B)
                                            </span>
                                            <div class="progress-stacked progress-xs w-75">
                                                <div class="progress-bar bg-success op-5" role="progressbar"
                                                    style="width:99%" aria-valuenow="99" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                                <div class="progress-bar bg-danger op-5" role="progressbar"
                                                    style="width: 1%" aria-valuenow="1" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark8Options" :series="marketcapData.spark8series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>9</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/IOTA.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">IOTA</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$510.429M</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$0.184992</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>1.08%</span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>1.41%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$7.50M USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block">
                                                2.78B
                                            </span>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark9Options" :series="marketcapData.spark9series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                                    </td>
                                    <td>10</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Monero.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold"><a href="javascript:void(0);">Monero</a></div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">$3.062B</span>
                                    </td>
                                    <td>
                                        <span class="fw-semibold">
                                            <a href="javascript:void(0);">$165.76</a>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>3.22%</span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-semibold"><i
                                                class="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>3.48%</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0)">
                                            <span class="d-block fw-semibold">$105.8M USD</span>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">
                                            <span class="fw-semibold d-block">
                                                18.15M
                                            </span>
                                        </a>
                                    </td>
                                    <td class="sparkline" style="width:120px">
                                        <apexchart type="line" height="30px" width="100%"
                                            :options="marketcapData.spark10Options" :series="marketcapData.spark10series">
                                        </apexchart>
                                    </td>
                                    <td>
                                        <button class="btn btn-success-light btn-sm">Trade</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer border-top-0">
                    <nav aria-label="Page navigation">
                        <ul class="pagination mb-0 float-end">
                            <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="javascript:void(0);">2</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0);">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2  -->
</template>

<style scoped></style>


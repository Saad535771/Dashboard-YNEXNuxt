<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as nftData from '@/data/dashboards/nft.js';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation } from 'swiper/modules';
import auth from '@/middleware/auth';


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
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            dataToPass: {
                current: "NFT",
                list: [
                    'Dashboards', 'NFT'
                ]
            },
            nftData: nftData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-6 col-xl-12 col-lg-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-body">
                    <div class="row gap-3 gap-sm-0">
                        <div class="col-sm-8 col-12">
                            <div class="">
                                <h4 class="fw-semibold mb-2">Discover, collect and sell your <span
                                        class="text-primary">NFTs</span> at one place</h4>
                                <p class="mb-4 text-muted fs-14 op-7">
                                    NFT means non-fungible tokens (NFTs), which are generally created using the same type of
                                    programming used for cryptocurrencies.It is is a unique digital identifier that cannot
                                    be copied.
                                </p>
                                <div class="btn-list pt-1">
                                    <button class="btn btn-primary btn-wave m-1 waves-effect waves-light">Discover
                                        Now</button>
                                    <button class="btn btn-outline-primary btn-wave m-1 waves-effect waves-light">Create
                                        Yours</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-auto my-auto">
                            <div class="featured-nft">
                                <img src="/images/nft-images/1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap align-items-top">
                                <div class="me-3 lh-1">
                                    <span class="avatar avatar-lg bg-primary">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px"
                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-muted">Total Assets</p>
                                    <h5 class="fw-semibold mb-2">596</h5>
                                    <p class="fs-11 text-muted mb-0"><span class="text-success fw-semibold">0.25%<i
                                                class="ri-arrow-up-s-line align-middle mx-1"></i></span> This month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap align-items-top">
                                <div class="me-3 lh-1">
                                    <span class="avatar avatar-lg bg-secondary">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"
                                            fill="#000000">
                                            <path d="M0,0h24v24H0V0z" fill="none" />
                                            <g>
                                                <path
                                                    d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                                                <rect height="2" width="6" x="9" y="7" />
                                                <rect height="2" width="2" x="16" y="7" />
                                                <rect height="2" width="6" x="9" y="10" />
                                                <rect height="2" width="2" x="16" y="10" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-muted">Total Value</p>
                                    <h5 class="fw-semibold mb-2">$1,298</h5>
                                    <p class="fs-11 text-muted mb-0"><span class="text-success fw-semibold">0.74%<i
                                                class="ri-arrow-up-s-line align-middle mx-1"></i></span> This month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap align-items-top">
                                <div class="me-3 lh-1">
                                    <span class="avatar avatar-lg bg-success">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"
                                            fill="#000000">
                                            <g>
                                                <path d="M0,0h24v24H0V0z" fill="none" />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z" />
                                                    <circle cx="6.5" cy="6.5" r="1.5" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-muted">Total Sales</p>
                                    <h5 class="fw-semibold mb-2">821</h5>
                                    <p class="fs-11 text-muted mb-0"><span class="text-success fw-semibold">1.52%<i
                                                class="ri-arrow-up-s-line align-middle mx-1"></i></span> This month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex flex-wrap align-items-top">
                                <div class="me-3 lh-1">
                                    <span class="avatar avatar-lg bg-warning">
                                        <svg class="svg-white" xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"
                                            fill="#000000">
                                            <g>
                                                <rect fill="none" height="24" width="24" />
                                            </g>
                                            <g>
                                                <path
                                                    d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-1 text-muted">Total Revenue</p>
                                    <h5 class="fw-semibold mb-2">$7,63,129.09</h5>
                                    <p class="fs-11 text-muted mb-0"><span class="text-danger fw-semibold">0.124%<i
                                                class="ri-arrow-down-s-line align-middle mx-1"></i></span> This month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-2 col-xl-6 col-lg-6">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between mb-2">
                        <div>
                            <p class="mb-0 text-muted">Your Balance</p>
                            <h5 class="fw-semibold">$19,867.96</h5>
                        </div>
                        <div>
                            <span class="avatar avatar-md bg-primary-transparent">
                                <svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                                    <circle cx="16" cy="12" r="1.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <p class="mb-0 text-muted fs-11 op-7">Top offers on USD-27,981 <span
                            class="text-success fw-semibold">(+29.09%)</span></p>
                    <div class="px-3 pt-4 pb-3 sparkline">
                        <apexchart height="50px" type="line" :options="nftData.balanceCardOptions"
                            :series="nftData.balanceCardSeries"></apexchart>
                    </div>
                    <div class="d-grid mt-3">
                        <button class="btn btn-success-light btn-wave">Top Up Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xxl-8 col-xl-12 col-lg-12">
            <div class="mb-4 d-flex align-items-center justify-content-between">
                <h6 class="fw-semibold mb-0">Trending Auctions :</h6>
                <div>
                    <button class="btn btn-sm btn-primary-light btn-wave">View All</button>
                </div>
            </div>
            <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <div class="card custom-card">
                        <img src="/images/nft-images/2.png" class="card-img-top" alt="...">
                        <div class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                            <div class="flex-fill">
                                <button class="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                    <i class="ri-heart-fill"></i>
                                </button>
                            </div>
                            <div>
                                <span class="badge nft-like-badge text-fixed-white"><i
                                        class="ri-heart-fill me-1 text-danger align-middle"></i>1.32k</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-rounded avatar-md">
                                        <img src="/images/faces/10.jpg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-0 fw-semibold">Bloom NFT</p>
                                    <p class="fs-12 text-muted mb-0">@bloom116</p>
                                </div>
                            </div>
                            <p class="mb-0 text-fixed-white nft-auction-time">
                                04hrs : 24m : 38s
                            </p>
                            <p class="fs-15 fw-semibold mb-2">Color Abstract - NFT</p>
                            <div class="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                <div class="fw-semibold">
                                    Highest Bid -
                                </div>
                                <div class="d-flex flex-wrap align-items-center lh-1">
                                    <span class="avatar avatar-xs me-1">
                                        <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                    </span>0.19ETH
                                </div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary-light btn-wave">Place Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <div class="card custom-card">
                        <img src="/images/nft-images/3.png" class="card-img-top" alt="...">
                        <div class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                            <div class="flex-fill">
                                <button class="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                    <i class="ri-heart-fill"></i>
                                </button>
                            </div>
                            <div>
                                <span class="badge nft-like-badge text-fixed-white"><i
                                        class="ri-heart-fill me-1 text-danger align-middle"></i>1.26k</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-rounded avatar-md">
                                        <img src="/images/faces/5.jpg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-0 fw-semibold">Ergos NFT</p>
                                    <p class="fs-12 text-muted mb-0">@ergos900</p>
                                </div>
                            </div>
                            <p class="mb-0 text-fixed-white nft-auction-time">
                                04hrs : 24m : 38s
                            </p>

                            <p class="fs-15 fw-semibold mb-2">Fluid Abstract - NFT</p>
                            <div class="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                <div class="fw-semibold">
                                    Highest Bid -
                                </div>
                                <div class="d-flex flex-wrap align-items-center lh-1">
                                    <span class="avatar avatar-xs me-1">
                                        <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                    </span>0.35ETH
                                </div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary-light btn-wave">Place Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <div class="card custom-card">
                        <img src="/images/nft-images/5.png" class="card-img-top" alt="...">
                        <div class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                            <div class="flex-fill">
                                <button class="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                    <i class="ri-heart-fill"></i>
                                </button>
                            </div>
                            <div>
                                <span class="badge nft-like-badge text-fixed-white"><i
                                        class="ri-heart-fill me-1 text-danger align-middle"></i>2.45k</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-rounded avatar-md">
                                        <img src="/images/faces/7.jpg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-0 fw-semibold">Caros NFT</p>
                                    <p class="fs-12 text-muted mb-0">@caros002</p>
                                </div>
                            </div>
                            <p class="mb-0 text-fixed-white nft-auction-time">
                                04hrs : 24m : 38s
                            </p>

                            <p class="fs-15 fw-semibold mb-2">Space Fluid - NFT</p>
                            <div class="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                <div class="fw-semibold">
                                    Highest Bid -
                                </div>
                                <div class="d-flex flex-wrap align-items-center lh-1">
                                    <span class="avatar avatar-xs me-1">
                                        <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                    </span>0.13ETH
                                </div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary-light btn-wave">Place Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <div class="card custom-card">
                        <img src="/images/nft-images/4.png" class="card-img-top" alt="...">
                        <div class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                            <div class="flex-fill">
                                <button class="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                    <i class="ri-heart-fill"></i>
                                </button>
                            </div>
                            <div>
                                <span class="badge nft-like-badge text-fixed-white"><i
                                        class="ri-heart-fill me-1 text-danger align-middle"></i>1.57k</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-rounded avatar-md">
                                        <img src="/images/faces/11.jpg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-0 fw-semibold">Daron NFT</p>
                                    <p class="fs-12 text-muted mb-0">@daron789</p>
                                </div>
                            </div>
                            <p class="mb-0 text-fixed-white nft-auction-time">
                                04hrs : 24m : 38s
                            </p>

                            <p class="fs-15 fw-semibold mb-2">Fluid Abstract - NFT</p>
                            <div class="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                <div class="fw-semibold">
                                    Highest Bid -
                                </div>
                                <div class="d-flex flex-wrap align-items-center lh-1">
                                    <span class="avatar avatar-xs me-1">
                                        <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                    </span>0.75ETH
                                </div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary-light btn-wave">Place Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-12 col-lg-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Top Creators
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap nft-table2">
                            <thead>
                                <tr>
                                    <th scope="row">Name</th>
                                    <th scope="row">Items Sold</th>
                                    <th scope="row">Total Value</th>
                                    <th scope="row">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/faces/4.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Amanda Nanes<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">amandananes@</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Total Sold</span>
                                            <p class="mb-0 fw-semibold">18</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Sale Value</span>
                                            <p class="mb-0 fw-semibold">$1,982</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-primary btn-wave">Follow</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/faces/15.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Charles Achilles<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@charlesachilles</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Total Sold</span>
                                            <p class="mb-0 fw-semibold">126</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Sale Value</span>
                                            <p class="mb-0 fw-semibold">$16,982</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-wave btn-primary-light">Unfollow</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/faces/5.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Julia Camo<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@juliacamo</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Total Sold</span>
                                            <p class="mb-0 fw-semibold">42</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Sale Value</span>
                                            <p class="mb-0 fw-semibold">$3,432</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-primary btn-wave">Follow</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/faces/12.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Json Taylor<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@jsontaylor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Total Sold</span>
                                            <p class="mb-0 fw-semibold">63</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Sale Value</span>
                                            <p class="mb-0 fw-semibold">$9,236</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-primary btn-wave">Follow</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/faces/3.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Elisha Sean<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">elishasean</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Total Sold</span>
                                            <p class="mb-0 fw-semibold">59</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Sale Value</span>
                                            <p class="mb-0 fw-semibold">$7,783</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-primary btn-wave">Follow</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/faces/13.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Joseph Smith<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@josephsmith</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Total Sold</span>
                                            <p class="mb-0 fw-semibold">137</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="align-items-center">
                                            <span class="fs-12 text-muted">Sale Value</span>
                                            <p class="mb-0 fw-semibold">$13,562</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light btn-wave">Unfollow</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-12 col-lg-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Top Collectors
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="py-2 fs-12 text-muted" data-bs-toggle="dropdown">
                            View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body p-0" id="top-collector">
                    <div class="table-responsive">
                        <table class="table table-hover text-nowrap">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                                    <img src="/images/faces/5.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Alicia Smith</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs progress-animate nft-collector-progress">
                                            <div class="progress-bar bg-primary-gradient" role="progressbar"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-12">75%</span>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-semibold">$9,223.46</p>
                                        <span class="fs-11 fw-normal text-success">0.214ETH</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                                    <img src="/images/faces/15.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Alex Carey</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs progress-animate nft-collector-progress">
                                            <div class="progress-bar bg-primary-gradient" role="progressbar"
                                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-12">60%</span>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-semibold">$17,239.09</p>
                                        <span class="fs-11 fw-normal text-success">1.890ETH</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                                    <img src="/images/faces/4.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Emiley Jack</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs progress-animate nft-collector-progress">
                                            <div class="progress-bar bg-primary-gradient" role="progressbar"
                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-12">35%</span>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-semibold">$5,902.83</p>
                                        <span class="fs-11 fw-normal text-success">1.903ETH</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                                    <img src="/images/faces/3.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Jessica</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs progress-animate nft-collector-progress">
                                            <div class="progress-bar bg-primary-gradient" role="progressbar"
                                                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-12">70%</span>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-semibold">$3,993.09</p>
                                        <span class="fs-11 fw-normal text-success">0.689ETH</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                                    <img src="/images/faces/11.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Json Taylor</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs progress-animate nft-collector-progress">
                                            <div class="progress-bar bg-primary-gradient" role="progressbar"
                                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-12">90%</span>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-semibold">$12,124.34</p>
                                        <span class="fs-11 fw-normal text-success">2.577ETH</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                                    <img src="/images/faces/2.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Kiara May</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs progress-animate nft-collector-progress">
                                            <div class="progress-bar bg-primary-gradient" role="progressbar"
                                                aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style="width: 62%">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-muted fs-12">62%</span>
                                    </td>
                                    <td>
                                        <p class="mb-0 fw-semibold">$2,534.56</p>
                                        <span class="fs-11 fw-normal text-success">0.737ETH</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border-bottom-0">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                                    <img src="/images/faces/14.jpg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Agire Khan</div>
                                        </div>
                                    </td>
                                    <td class="border-bottom-0">
                                        <div class="progress progress-xs progress-animate nft-collector-progress">
                                            <div class="progress-bar bg-primary-gradient" role="progressbar"
                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%">
                                            </div>
                                        </div>
                                    </td>
                                    <td class="border-bottom-0">
                                        <span class="text-muted fs-12">85%</span>
                                    </td>
                                    <td class="border-bottom-0">
                                        <p class="mb-0 fw-semibold">$15,236.00</p>
                                        <span class="fs-11 fw-normal text-success">6.345ETH</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-8 col-lg-7 col-md-12 col-sm-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between flex-wrap">
                    <div class="card-title">
                        NFTs Statistics
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary btn-sm btn-wave">1D</button>
                        <button type="button" class="btn btn-primary-light btn-sm btn-wave">1W</button>
                        <button type="button" class="btn btn-primary-light btn-sm btn-wave">1M</button>
                        <button type="button" class="btn btn-primary-light btn-sm btn-wave">3M</button>
                        <button type="button" class="btn btn-primary-light btn-sm btn-wave">6M</button>
                        <button type="button" class="btn btn-primary-light btn-sm btn-wave">1Y</button>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="d-flex flex-wrap p-3 border-bottom border-block-end-dashed">
                        <div class="me-3">
                            <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                                <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                            </span>
                        </div>
                        <div class="d-flex flex-wrap justify-content-evenly flex-fill">
                            <div class="m-sm-0 m-2">
                                <span>Symbol</span>
                                <p class="fw-semibold mb-0">ETH</p>
                            </div>
                            <div class="m-sm-0 m-2">
                                <span>Price Benchmark</span>
                                <p class="fw-semibold mb-0">-0.39%</p>
                            </div>
                            <div class="m-sm-0 m-2">
                                <span>Price (USD)</span>
                                <p class="text-success fe-semibold mb-0">$1,212.67</p>
                            </div>
                            <div class="m-sm-0 m-2">
                                <span>Change (24H)</span>
                                <p class="text-danger fw-semibold mb-0">-0.14%</p>
                            </div>
                            <div class="m-sm-0 m-2">
                                <span>Market Cap</span>
                                <p class="fw-semibold mb-0">$148.20B</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-3">
                        <apexchart height="320px" type="line" :options="nftData.NFTsStatisticsOptions"
                            :series="nftData.NFTsStatisticsSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-12 col-sm-12">
            <div class="mb-3 d-flex align-items-center justify-content-between">
                <h6 class="fw-semibold mb-0">Featured Collections :</h6>
                <div>
                    <button class="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">View All</button>
                </div>
            </div>
            <swiper :navigation="true" :modules="modules">
                <swiper-slide>
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="row g-2">
                                <div class="col-6">
                                    <img src="/images/nft-images/6.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-6">
                                    <img src="/images/nft-images/7.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-6">
                                    <img src="/images/nft-images/8.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-6">
                                    <img src="/images/nft-images/9.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <div class="text-muted fs-12 d-flex align-items-center">Collection Rank :
                                        <span class="fw-semibold text-success fs-15 mb-0 ms-1">#1</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-rounded bg-light p-1 avatar-xs">
                                            <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="fw-semibold">1.0979ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center flex-fill">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-md avatar-rounded">
                                            <img src="/images/faces/15.jpg" alt="">
                                            <a href="javascript:void(0);"
                                                class="badge rounded-pill bg-primary avatar-badge"><i
                                                    class="ri-check-line align-mmiddle"></i></a>
                                        </span>
                                    </div>
                                    <div>
                                        <p class="mb-0 fw-semibold"><a href="javascript:void(0);">Simon Cowell</a></p>
                                        <p class="text-muted fs-12 mb-0">@simon</p>
                                    </div>
                                </div>
                                <div class="dropdown dropup">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-primary-light"
                                        data-bs-toggle="dropdown">
                                        <i class="fe fe-more-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="row g-2">
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/11.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/12.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/13.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/14.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <div class="text-muted fs-12 d-flex align-items-center">Collection Rank :
                                        <span class="fw-semibold text-success fs-15 mb-0 ms-1">#2</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-rounded bg-light p-1 avatar-xs">
                                            <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="fw-semibold">1.0466ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center flex-fill">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-md avatar-rounded">
                                            <img src="/images/faces/5.jpg" alt="">
                                            <a href="javascript:void(0);"
                                                class="badge rounded-pill bg-primary avatar-badge"><i
                                                    class="ri-check-line align-mmiddle"></i></a>
                                        </span>
                                    </div>
                                    <div>
                                        <p class="mb-0 fw-semibold"><a href="javascript:void(0);">Melissa Smith</a></p>
                                        <p class="text-muted fs-12 mb-0">@melissa</p>
                                    </div>
                                </div>
                                <div class="dropdown dropup">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-primary-light"
                                        data-bs-toggle="dropdown">
                                        <i class="fe fe-more-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="row g-2">
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/10.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/15.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/17.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                                <div class="col-sm-6">
                                    <img src="/images/nft-images/16.png" alt="" class="nft-featuredcollect-image w-100">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <div class="text-muted fs-12 d-flex align-items-center">Collection Rank :
                                        <span class="fw-semibold text-success fs-15 mb-0 ms-1">#3</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-rounded bg-light p-1 avatar-xs">
                                            <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="fw-semibold">1.0355ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center flex-fill">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-md avatar-rounded">
                                            <img src="/images/faces/10.jpg" alt="">
                                            <a href="javascript:void(0);"
                                                class="badge rounded-pill bg-primary avatar-badge"><i
                                                    class="ri-check-line align-mmiddle"></i></a>
                                        </span>
                                    </div>
                                    <div>
                                        <p class="mb-0 fw-semibold"><a href="javascript:void(0);">Json Talor</a></p>
                                        <p class="text-muted fs-12 mb-0">@taylor</p>
                                    </div>
                                </div>
                                <div class="dropdown dropup">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-primary-light"
                                        data-bs-toggle="dropdown">
                                        <i class="fe fe-more-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <!-- End::row-3 -->

    <!-- Start::row-4 -->
    <div class="row">
        <div class="col-xl-9">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Trending NFTs
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
                        <table class="table table-hover table-bordered text-nowrap nft-table">
                            <thead>
                                <tr>
                                    <th>Collection</th>
                                    <th>Rank</th>
                                    <th>Volume</th>
                                    <th>24h %</th>
                                    <th>7d %</th>
                                    <th>Floor Price</th>
                                    <th>Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/nft-images/1.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">Starter Sense NFT</a></p>
                                                <a href="javascript:void(0);" class="fs-12 text-muted fw-normal"
                                                    title="creator_name">@irukasensei229</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="fw-semibold text-primary">#1</span></td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">2.56ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-success"><i
                                                class="ti ti-trending-up me-1 align-middle"></i>15.2%</span>
                                    </td>
                                    <td><span class="text-success"><i
                                                class="ti ti-trending-up me-1 align-middle"></i>3.1%</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">2.31ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>12.4K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/nft-images/2.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">Lorem Kekkei</a></p>
                                                <a href="javascript:void(0);" class="fs-12 text-muted fw-normal"
                                                    title="creator_name">@clansound209</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="fw-semibold text-primary">#2</span></td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">1.25ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text-success"><i
                                                class="ti ti-trending-up me-1 align-middle"></i>3.7%</span>
                                    </td>
                                    <td><span class="text-danger"><i
                                                class="ti ti-trending-down me-1 align-middle"></i>0.5%</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">0.25ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>10.1K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/nft-images/10.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">NFT Uchiha</a></p>
                                                <a href="javascript:void(0);" class="fs-12 text-muted fw-normal"
                                                    title="creator_name">@sasukeuhi990</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="fw-semibold text-primary">#3</span></td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">2,092ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-danger"><i
                                                class="ti ti-trending-down me-1 align-middle"></i>23.1%</span>
                                    </td>
                                    <td>
                                        <span class="text-success"><i
                                                class="ti ti-trending-up me-1 align-middle"></i>9.12%</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);" title="nft_name">
                                                        2,000ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>52.7K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/nft-images/12.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);" title="nft_name">
                                                        Lorem Ipsum Uch</a></p>
                                                <a href="javascript:void(0);" class="fs-12 text-muted fw-normal"
                                                    title="creator_name">@kakashi092</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="fw-semibold text-primary">#4</span></td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);" title="nft_name">
                                                        36.25ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-danger"><i
                                                class="ti ti-trending-down me-1 align-middle"></i>5.2%</span>
                                    </td>
                                    <td>
                                        <span class="text-danger"><i
                                                class="ti ti-trending-down me-1 align-middle"></i>4.1%</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">30.12ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>31.4K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/nft-images/15.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);" title="nft_name">
                                                        Ivan Shomer Har</a></p>
                                                <a href="javascript:void(0);" class="fs-12 text-muted fw-normal"
                                                    title="creator_name">@narutouze025</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="fw-semibold text-primary">#5</span></td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">12.52ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="text-success"><i
                                                class="ti ti-trending-up me-1 align-middle"></i>7.0%</span>
                                    </td>
                                    <td>
                                        <span class="text-success"><i
                                                class="ti ti-trending-up me-1 align-middle"></i>12.5%</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-2 lh-1">
                                                <span class="avatar avatar-xs avatar-rounded">
                                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);"
                                                        title="nft_name">12.50ETH</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>121.5K</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center">
                        <div>
                            Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
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
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Personal Listings
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
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href="javascript:void(0);">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md">
                                                <img src="/images/nft-images/10.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="fw-semibold mb-0">Kakasha Si</p>
                                            <span class="text-muted fs-12 d-inline-flex">@sensei011<span
                                                    class="ms-2 text-success fs-11"><i
                                                        class="ri-arrow-up-s-line align-middle me-1"></i>0.45%</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fs-10 text-muted ps-4">PRICE</span>
                                        <p class="mb-0 fw-semibold d-flex align-items-center"><span
                                                class="avatar avatar-sm p-1"><img
                                                    src="/images/crypto-currencies/regular/Ethereum.svg"
                                                    alt=""></span>1.75ETH</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="javascript:void(0);">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md">
                                                <img src="/images/nft-images/1.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="fw-semibold mb-0">Oorichimaru lo</p>
                                            <span class="text-muted fs-12 d-inline-flex">@ooro001<span
                                                    class="ms-2 text-success fs-11"><i
                                                        class="ri-arrow-up-s-line align-middle me-1"></i>0.24%</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fs-10 text-muted ps-4">PRICE</span>
                                        <p class="mb-0 fw-semibold d-flex align-items-center"><span
                                                class="avatar avatar-sm p-1"><img
                                                    src="/images/crypto-currencies/regular/Ethereum.svg"
                                                    alt=""></span>1.15ETH</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="javascript:void(0);">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md">
                                                <img src="/images/nft-images/12.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="fw-semibold mb-0">SakuraYM</p>
                                            <span class="text-muted fs-12 d-inline-flex">@sakura903<span
                                                    class="ms-2 text-danger fs-11"><i
                                                        class="ri-arrow-down-s-line align-middle me-1"></i>0.07%</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fs-10 text-muted ps-4">PRICE</span>
                                        <p class="mb-0 fw-semibold d-flex align-items-center"><span
                                                class="avatar avatar-sm p-1"><img
                                                    src="/images/crypto-currencies/regular/Ethereum.svg"
                                                    alt=""></span>1.58ETH</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="javascript:void(0);">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md">
                                                <img src="/images/nft-images/4.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="fw-semibold mb-0">Sasuke Uchiha</p>
                                            <span class="text-muted fs-12 d-inline-flex">@sasuke777<span
                                                    class="ms-2 text-success fs-11"><i
                                                        class="ri-arrow-up-s-line align-middle me-1"></i>1.34%</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fs-10 text-muted ps-4">PRICE</span>
                                        <p class="mb-0 fw-semibold d-flex align-items-center"><span
                                                class="avatar avatar-sm p-1"><img
                                                    src="/images/crypto-currencies/regular/Ethereum.svg"
                                                    alt=""></span>1.19ETH</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="javascript:void(0);">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md">
                                                <img src="/images/nft-images/15.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="fw-semibold mb-0">Naruto Uzumaki</p>
                                            <span class="text-muted fs-12 d-inline-flex">@naruto111<span
                                                    class="ms-2 text-success fs-11"><i
                                                        class="ri-arrow-up-s-line align-middle me-1"></i>1.70%</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fs-10 text-muted ps-4">PRICE</span>
                                        <p class="mb-0 fw-semibold d-flex align-items-center"><span
                                                class="avatar avatar-sm p-1"><img
                                                    src="/images/crypto-currencies/regular/Ethereum.svg"
                                                    alt=""></span>2.45ETH</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="javascript:void(0);">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md">
                                                <img src="/images/nft-images/16.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="fw-semibold mb-0">Kazimo Aruke</p>
                                            <span class="text-muted fs-12 d-inline-flex">@kazimo900<span
                                                    class="ms-2 text-danger fs-11"><i
                                                        class="ri-arrow-down-s-line align-middle me-1"></i>1.21%</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fs-10 text-muted ps-4">PRICE</span>
                                        <p class="mb-0 fw-semibold d-flex align-items-center"><span
                                                class="avatar avatar-sm p-1"><img
                                                    src="/images/crypto-currencies/regular/Ethereum.svg"
                                                    alt=""></span>1.95ETH</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="javascript:void(0);">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md">
                                                <img src="/images/nft-images/6.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="fw-semibold mb-0">Nagiro Ohinavo</p>
                                            <span class="text-muted fs-12 d-inline-flex">@nagiro096<span
                                                    class="ms-2 text-success fs-11"><i
                                                        class="ri-arrow-up-s-line align-middle me-1"></i>0.99%</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="fs-10 text-muted ps-4">PRICE</span>
                                        <p class="mb-0 fw-semibold d-flex align-items-center"><span
                                                class="avatar avatar-sm p-1"><img
                                                    src="/images/crypto-currencies/regular/Ethereum.svg"
                                                    alt=""></span>1.12ETH</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-4 -->
</template>

<style scoped></style>

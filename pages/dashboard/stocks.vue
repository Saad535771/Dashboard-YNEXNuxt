<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as stocksData from '@/data/dashboards/stocks.js';
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
                current: "Stocks",
                list: [
                    'Dashboards', 'Stocks'
                ]
            },
            stocksData: stocksData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-md-flex d-block flex-wrap align-items-center justify-content-between">
                        <div class="flex-fill">
                            <ul class="nav nav-pills nav-style-3" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#stocks-portfolio" aria-selected="true">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#stocks-market" aria-selected="true">Market</a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex flex-wrap align-items-center mt-md-0 mt-3 justify-content-evenly gap-4">
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Total Value</span>
                                <span class="text-primary">$8.89k</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Market Value</span>
                                <span class="text-warning">$15.9k</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Yield</span>
                                <span class="text-danger">3.4%</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Dividend</span>
                                <span class="text-info">$1.3k</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Gain</span>
                                <span class="text-success">$116</span>
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
        <div class="col-xl-12">
            <div class="tab-content">
                <div class="tab-pane show active p-0 border-0" id="stocks-portfolio" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                        <div class="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                            <div class="me-3">
                                                <span class="avatar avatar-rounded bg-primary">
                                                    <i class="ti ti-wallet fs-16"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted">Total amount Invested</span>
                                                <span class="fs-16 fw-semibold">$23,8998.99</span>
                                            </div>
                                        </div>
                                        <div class="sparkline">
                                            <apexchart width="100px" height="40px" type="line"
                                                :options="stocksData.totalAmountInvestedstocksOptions"
                                                :series="stocksData.totalAmountInvestedSeries"></apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                        <div class="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                            <div class="me-3">
                                                <span class="avatar avatar-rounded bg-secondary">
                                                    <i class="ti ti-arrow-big-up-line fs-16"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted">No Of Investments</span>
                                                <span class="fs-16 fw-semibold">116</span>
                                            </div>
                                        </div>
                                        <div class="sparkline">
                                            <apexchart width="100px" height="40px" type="line"
                                                :options="stocksData.noOfInvastmentsOptions"
                                                :series="stocksData.noOfInvastmentsseries"></apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                        <div class="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                            <div class="me-3">
                                                <span class="avatar avatar-rounded bg-warning">
                                                    <i class="ti ti-wallet fs-16"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted">Portfolio Value</span>
                                                <span class="fs-16 fw-semibold">$12,920.20<i
                                                        class="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                            </div>
                                        </div>
                                        <div class="sparkline">
                                            <apexchart width="100px" height="40px" type="line"
                                                :options="stocksData.portfolioOptions" :series="stocksData.portfolioSeries">
                                            </apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                        <div class="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                            <div class="me-3">
                                                <span class="avatar avatar-rounded bg-success">
                                                    <i class="ti ti-wallet fs-16"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted">Returns Rate</span>
                                                <span class="fs-16 fw-semibold">+12.08%<i
                                                        class="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                            </div>
                                        </div>
                                        <div class="sparkline">
                                            <apexchart width="100px" height="40px" type="line"
                                                :options="stocksData.returnsOptions" :series="stocksData.returnsSeries">
                                            </apexchart>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-8">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title mb-2 mb-sm-0">
                                        Total Investments
                                    </div>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button"
                                            class="btn btn-primary btn-sm btn-wave waves-effect waves-light">1D</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1W</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1M</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">3M</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex alilgn-items-center justify-content-between gap-3 flex-wrap">
                                        <div class="d-flex flex-wrap flex-fill gap-3 ms-sm-5 ms-0">
                                            <div>
                                                <span class="d-block text-muted mb-1">Invested Value</span>
                                                <span class="d-block fw-semibold">$1,290.94<span
                                                        class="text-success ms-1 fs-12"><i
                                                            class="ti ti-chevron-up"></i>1.22%</span></span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted mb-1">Total Returns</span>
                                                <span class="d-block fw-semibold">$25,458.20<span
                                                        class="text-success ms-1 fs-12"><i
                                                            class="ti ti-chevron-up"></i>10.14%</span></span>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-wrap gap-3 text-end">
                                            <div>
                                                <span class="d-block text-muted mb-1">Today Change</span>
                                                <span class="d-block fw-semibold">$112.09</span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted mb-1">Change In %</span>
                                                <span class="d-block fw-semibold">+0.01%<span
                                                        class="text-success ms-1 fs-12"><i
                                                            class="ti ti-chevron-up"></i>0.21%</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <apexchart height="320px" type="area" :options="stocksData.totalInvestmentsOptions"
                                        :series="stocksData.totalInvestmentsSeries"></apexchart>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        My Stocks
                                    </div>
                                    <div class="d-flex flex-wrap gap-2">
                                        <div class="mb-2 mb-sm-0">
                                            <input class="form-control form-control-sm" type="text"
                                                placeholder="Search Any Stock" aria-label=".form-control-sm example">
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
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
                                <div class="card-body p-0">
                                    <ul class="list-unstyled my-stocks-ul mb-0">
                                        <li>
                                            <div class="d-flex align-items-center flex-fill lh-1">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-github text-dark fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1 flex-fill">
                                                    <span class="fw-semibold d-block mb-2">GTHB (Gituhb, Demo Inc.)</span>
                                                    <span class="d-block text-muted fs-12">16 Shares</span>
                                                </div>
                                                <div class="text-end me-3">
                                                    <span class="d-block fw-semibold mb-1">
                                                        $12,390.02
                                                    </span>
                                                    <span class="d-block text-success"><i
                                                            class="ti ti-arrow-narrow-up"></i>0.14%</span>
                                                </div>
                                                <div>
                                                    <span class="fs-14">
                                                        <i class="bi bi-star-fill text-muted op-5"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center flex-fill lh-1">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-twitter text-info fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1 flex-fill">
                                                    <span class="fw-semibold d-block mb-2">TTR (Twiter.com, Inc.)</span>
                                                    <span class="d-block text-muted fs-12">289 Shares</span>
                                                </div>
                                                <div class="text-end me-3">
                                                    <span class="d-block fw-semibold mb-1">
                                                        $15,526.01
                                                    </span>
                                                    <span class="d-block text-success"><i
                                                            class="ti ti-arrow-narrow-up"></i>2.14%</span>
                                                </div>
                                                <div>
                                                    <span class="fs-14">
                                                        <i class="bi bi-star text-muted op-5"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center flex-fill lh-1">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-bootstrap-fill text-primary fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1 flex-fill">
                                                    <span class="fw-semibold d-block mb-2">BS (Boostrap, Inc.)</span>
                                                    <span class="d-block text-muted fs-12">325 shares</span>
                                                </div>
                                                <div class="text-end me-3">
                                                    <span class="d-block fw-semibold mb-1">
                                                        $30,500.15
                                                    </span>
                                                    <span class="d-block text-danger"><i
                                                            class="ti ti-arrow-narrow-down"></i>2.73%</span>
                                                </div>
                                                <div>
                                                    <span class="fs-14">
                                                        <i class="bi bi-star-fill text-muted op-5"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center flex-fill lh-1">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-windows text-success fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1 flex-fill">
                                                    <span class="fw-semibold d-block mb-2">MS (Micorsoft, Inc.)</span>
                                                    <span class="d-block text-muted fs-12">1,523 shares</span>
                                                </div>
                                                <div class="text-end me-3">
                                                    <span class="d-block fw-semibold mb-1">
                                                        $1,80,520.02
                                                    </span>
                                                    <span class="d-block text-success"><i
                                                            class="ti ti-arrow-narrow-up"></i>8.63%</span>
                                                </div>
                                                <div>
                                                    <span class="fs-14">
                                                        <i class="bi bi-star text-muted op-5"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center flex-fill lh-1">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-apple text-warning fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1 flex-fill">
                                                    <span class="fw-semibold d-block mb-2">AAPL (Apple, Inc.)</span>
                                                    <span class="d-block text-muted fs-12">30 shares</span>
                                                </div>
                                                <div class="text-end me-3">
                                                    <span class="d-block fw-semibold mb-1">
                                                        $21,093.20
                                                    </span>
                                                    <span class="d-block text-danger"><i
                                                            class="ti ti-arrow-narrow-down"></i>4.10%</span>
                                                </div>
                                                <div>
                                                    <span class="fs-14">
                                                        <i class="bi bi-star-fill text-muted op-5"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center flex-fill lh-1">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-currency-bitcoin text-danger fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1 flex-fill">
                                                    <span class="fw-semibold d-block mb-2">Bitcoin (Bioset Coin,
                                                        Inc.)</span>
                                                    <span class="d-block text-muted fs-12">118 shares</span>
                                                </div>
                                                <div class="text-end me-3">
                                                    <span class="d-block fw-semibold mb-1">
                                                        $14,245.23
                                                    </span>
                                                    <span class="d-block text-success"><i
                                                            class="ti ti-arrow-narrow-up"></i>0.79%</span>
                                                </div>
                                                <div>
                                                    <span class="fs-14">
                                                        <i class="bi bi-star-fill text-muted op-5"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <h6 class="fw-semibold mb-3">
                                Trending Stocks :
                            </h6>
                            <div class="row">
                                <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="p-3 card custom-card border bg-white rounded">
                                        <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                            <div class="d-flex flex-fill align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-apple text-muted fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fw-semibold d-block mb-2 text-default">Apple</span>
                                                    <span class="d-block text-muted fs-12">$12,289.44</span>
                                                </div>
                                            </div>
                                            <div class="text-success fs-12 text-end">
                                                <span class="d-block">0.14%<i class="ti ti-arrow-bear-right"></i></span>
                                                <span class="d-block">+$1,780.80</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
                                            <button type="button"
                                                class="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="p-3 card custom-card border bg-white rounded">
                                        <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                            <div class="d-flex flex-fill align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-currency-bitcoin text-warning fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fw-semibold d-block mb-2 text-default">Bitcoin</span>
                                                    <span class="d-block text-muted fs-12">$58,151.02</span>
                                                </div>
                                            </div>
                                            <div class="text-success fs-12 text-end">
                                                <span class="d-block">2.14%<i class="ti ti-arrow-bear-right"></i></span>
                                                <span class="d-block">+$5,745.62</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
                                            <button type="button"
                                                class="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="p-3 card custom-card border bg-white rounded">
                                        <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                            <div class="d-flex flex-fill align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-card-list text-success fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fw-semibold d-block mb-2 text-default">Tesla</span>
                                                    <span class="d-block text-muted fs-12">$14,452.36</span>
                                                </div>
                                            </div>
                                            <div class="text-success fs-12 text-end">
                                                <span class="d-block">4.02%<i class="ti ti-arrow-bear-right"></i></span>
                                                <span class="d-block">+$4,125.63</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
                                            <button type="button"
                                                class="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="p-3 card custom-card border bg-white rounded">
                                        <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                            <div class="d-flex flex-fill align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-gift text-primary fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fw-semibold d-block mb-2 text-default">Amazon</span>
                                                    <span class="d-block text-muted fs-12">$63,251.11</span>
                                                </div>
                                            </div>
                                            <div class="text-success fs-12 text-end">
                                                <span class="d-block">5.14%<i class="ti ti-arrow-bear-right"></i></span>
                                                <span class="d-block">+$936.30</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
                                            <button type="button"
                                                class="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="p-3 card custom-card border bg-white rounded">
                                        <div class="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                            <div class="d-flex flex-fill align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-truck text-danger fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fw-semibold d-block mb-2 text-default">Aliexpress</span>
                                                    <span class="d-block text-muted fs-12">$5,401.50</span>
                                                </div>
                                            </div>
                                            <div class="text-success fs-12 text-end">
                                                <span class="d-block">3.32%<i class="ti ti-arrow-bear-right"></i></span>
                                                <span class="d-block">+$4,360.65</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
                                            <button type="button"
                                                class="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="p-3 card custom-card border bg-white rounded">
                                        <div class="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                            <div class="d-flex flex-fill align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light p-2">
                                                        <i class="bi bi-phone text-secondary fs-18"></i>
                                                    </span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fw-semibold d-block mb-2 text-default">Samsung</span>
                                                    <span class="d-block text-muted fs-12">$10,732.12</span>
                                                </div>
                                            </div>
                                            <div class="text-success fs-12 text-end">
                                                <span class="d-block">1.24%<i class="ti ti-arrow-bear-right"></i></span>
                                                <span class="d-block">+$3,221.29</span>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
                                            <button type="button"
                                                class="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-5">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Transaction History
                                    </div>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Buy</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Sell</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table text-nowrap table-bordered border-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Symbol</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Shares</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        EPA:THI
                                                    </th>
                                                    <td>
                                                        12-06-2023
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-primary">Buy</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">-$1,290</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">+20</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        EPA:SCB
                                                    </th>
                                                    <td>
                                                        11-06-2023
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-primary">Buy</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">-$2,150</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">+15</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        EPA:CGIO
                                                    </th>
                                                    <td>
                                                        11-06-2023
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-warning">Sell</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">+$22,625</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">-12</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        EPA:NTIX
                                                    </th>
                                                    <td>
                                                        05-06-2023
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-primary">Buy</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">-$3,680</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">+36</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        EPA:MOD
                                                    </th>
                                                    <td>
                                                        20-05-2023
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-warning">Sell</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">+$30,750</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">-25</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Market Movers
                                    </div>
                                    <div class="d-flex flex-wrap gap-2">
                                        <div class="me-2">
                                            <input class="form-control form-control-sm" type="text"
                                                placeholder="Search Any Stock" aria-label=".form-control-sm example">
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
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
                                        <table class="table text-nowrap table-bordered border-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Symbol</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">1D Change</th>
                                                    <th scope="col">1D Return %</th>
                                                    <th scope="col">Volume</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        APPL
                                                    </th>
                                                    <td>
                                                        App1e Inc.<span
                                                            class="fw-normal text-primary fs-10 ms-1">NASDAQ</span>
                                                    </td>
                                                    <td>
                                                        <span>$1,116.90</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">$28.9<i
                                                                class="ti ti-arrow-bear-right"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">6.8%</span>
                                                    </td>
                                                    <td>
                                                        12,389.30
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        TTR
                                                    </th>
                                                    <td>
                                                        Twiter.com Inc.<span
                                                            class="fw-normal text-primary fs-10 ms-1">NYSE</span>
                                                    </td>
                                                    <td>
                                                        <span>$993.21</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">$11.6<i
                                                                class="ti ti-arrow-bear-right"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">10.25%</span>
                                                    </td>
                                                    <td>
                                                        32,125.03
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        BS
                                                    </th>
                                                    <td>
                                                        Boostrap.com.<span
                                                            class="fw-normal text-primary fs-10 ms-1">NSE</span>
                                                    </td>
                                                    <td>
                                                        <span>$11.00</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">$16.0<i
                                                                class="ti ti-arrow-narrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">9.0%</span>
                                                    </td>
                                                    <td>
                                                        27,911.16
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        NFLX
                                                    </th>
                                                    <td>
                                                        Netfilx.com Inc.<span
                                                            class="fw-normal text-primary fs-10 ms-1">LSE</span>
                                                    </td>
                                                    <td>
                                                        <span>$161.72</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">$9.8<i
                                                                class="ti ti-arrow-narrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="text-danger">17.8%</span>
                                                    </td>
                                                    <td>
                                                        27,161.89
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        ION
                                                    </th>
                                                    <td>
                                                        Ion.com Corp.<span
                                                            class="fw-normal text-primary fs-10 ms-1">FSX</span>
                                                    </td>
                                                    <td>
                                                        <span>$52.65</span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">$14.2<i
                                                                class="ti ti-arrow-bear-right"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="text-success">30.2%</span>
                                                    </td>
                                                    <td>
                                                        65,785.01
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
                <div class="tab-pane p-0 border-0" id="stocks-market" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar bg-danger-transparent">
                                                    <i class="ti ti-trending-down fs-18"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block fw-semibold">Nifty 50</span>
                                                <span class="d-block">$12,289.44</span>
                                            </div>
                                        </div>
                                        <div class="text-end text-danger fs-12">
                                            <span class="d-block">-0.14%</span>
                                            <span class="d-block">-$1,780.80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar bg-danger-transparent">
                                                    <i class="ti ti-trending-down fs-18"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block fw-semibold">SENSEX</span>
                                                <span class="d-block">$12,289.44</span>
                                            </div>
                                        </div>
                                        <div class="text-end text-danger fs-12">
                                            <span class="d-block">-0.14%</span>
                                            <span class="d-block">-$1,780.80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar bg-success-transparent">
                                                    <i class="ti ti-trending-up fs-18"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block fw-semibold">DJIA</span>
                                                <span class="d-block">$12,289.44</span>
                                            </div>
                                        </div>
                                        <div class="text-end text-danger fs-12">
                                            <span class="d-block">-0.14%</span>
                                            <span class="d-block">-$1,780.80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar bg-danger-transparent">
                                                    <i class="ti ti-trending-up fs-18"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block fw-semibold">S&amp;P 500</span>
                                                <span class="d-block">$12,289.44</span>
                                            </div>
                                        </div>
                                        <div class="text-end text-danger fs-12">
                                            <span class="d-block">-0.14%</span>
                                            <span class="d-block">-$1,780.80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar bg-success-transparent">
                                                    <i class="ti ti-trending-up fs-18"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block fw-semibold">NASDAQ</span>
                                                <span class="d-block">$12,289.44</span>
                                            </div>
                                        </div>
                                        <div class="text-end text-danger fs-12">
                                            <span class="d-block">-0.14%</span>
                                            <span class="d-block">-$1,780.80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="me-2">
                                                <span class="avatar bg-success-transparent">
                                                    <i class="ti ti-trending-up fs-18"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block fw-semibold">NIFTY IT</span>
                                                <span class="d-block">$12,289.44</span>
                                            </div>
                                        </div>
                                        <div class="text-end text-danger fs-12">
                                            <span class="d-block">-0.14%</span>
                                            <span class="d-block">-$1,780.80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Market Cap
                                    </div>
                                    <div>
                                        <input class="form-control form-control-sm" type="text"
                                            placeholder="Search Any Stock Here" aria-label=".form-control-sm example">
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-xl-7 border-end">
                                            <div class="p-3">
                                                <div class="d-flex flex-wrap alilgn-items-center justify-content-between">
                                                    <div class="d-flex flex-fill gap-3 ms-5">
                                                        <div>
                                                            <h5 class="fw-semibold text-primary">$12,390.02<span
                                                                    class="fs-12 ms-1 text-danger">0.14%<i
                                                                        class="ti ti-trending-down ms-1"></i></span></h5>
                                                            <span class="d-block text-muted mb-1 fs-12"><span
                                                                    class="text-danger me-1">-89.75</span>. Today</span>
                                                            <span class="d-block text-muted fs-11">Jun 17, 2023 11:25 AM UTC
                                                                +5:30</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex text-end">
                                                        <div>
                                                            <h6 class="fw-semibold">GITUHB</h6>
                                                            <span class="d-block text-muted fs-11 mb-1">GTHB INDEXNSE</span>
                                                            <span class="d-block"><a href="javascript:void(0);"
                                                                    class="text-primary fw-semibold">+ Compare</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <apexchart height="350px" type="candlestick"
                                                    :options="stocksData.marketCapOptions"
                                                    :series="stocksData.marketCapSeries"></apexchart>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="p-3">
                                                <div class="table-responsive mb-5">
                                                    <table class="table text-nowrap table-borderless table-sm text-muted">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Open</th>
                                                                <td>125.80</td>
                                                                <td>Volume</td>
                                                                <td>1,253.20</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">High</th>
                                                                <td>352.15</td>
                                                                <td>Avg. Volume</td>
                                                                <td>1.05M</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Low</th>
                                                                <td>120.13</td>
                                                                <td>52 Week High</td>
                                                                <td>2569.25</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Dividend Yield</th>
                                                                <td>3.5%</td>
                                                                <td>52 Week Low</td>
                                                                <td>1586.20</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">P/E Ratio</th>
                                                                <td>25%</td>
                                                                <td>Market Cap</td>
                                                                <td>2.15Cr</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div>
                                                    <h6 class="fw-semibold mb-2">
                                                        Market Depth:
                                                    </h6>
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <div class="table-responsive">
                                                                <table
                                                                    class="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                    <thead class="text-default bg-light">
                                                                        <tr>
                                                                            <th scope="col">Qty</th>
                                                                            <th scope="col">Orders</th>
                                                                            <th scope="col">Bid</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-success">20</span>
                                                                            </th>
                                                                            <td>2</td>
                                                                            <td>$12,908</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-success">12</span>
                                                                            </th>
                                                                            <td>1</td>
                                                                            <td>$20,632</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-success">36</span>
                                                                            </th>
                                                                            <td>1</td>
                                                                            <td>$19,102</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-success">10</span>
                                                                            </th>
                                                                            <td>3</td>
                                                                            <td>$16,650</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-success">15</span>
                                                                            </th>
                                                                            <td>2</td>
                                                                            <td>$18,850</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="table-responsive mb-3">
                                                                <table
                                                                    class="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                    <thead class="text-default bg-light">
                                                                        <tr>
                                                                            <th scope="col">Qty</th>
                                                                            <th scope="col">Orders</th>
                                                                            <th scope="col">Bid</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-danger">20</span>
                                                                            </th>
                                                                            <td>2</td>
                                                                            <td>$12,908</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-danger">12</span>
                                                                            </th>
                                                                            <td>1</td>
                                                                            <td>$20,632</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-danger">36</span>
                                                                            </th>
                                                                            <td>1</td>
                                                                            <td>$19,102</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-danger">10</span>
                                                                            </th>
                                                                            <td>3</td>
                                                                            <td>$16,650</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">
                                                                                <span class="text-danger">15</span>
                                                                            </th>
                                                                            <td>2</td>
                                                                            <td>$18,850</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div class="d-flex gap-3">
                                                                <button type="button"
                                                                    class="flex-fill btn btn-sm btn-primary btn-wave">Buy</button>
                                                                <button type="button"
                                                                    class="flex-fill btn btn-sm btn-secondary btn-wave">Sell</button>
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
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 --></template>

<style scoped></style>

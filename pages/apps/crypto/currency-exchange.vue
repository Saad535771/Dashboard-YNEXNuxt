<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as exchangeData from '@/data/apps/currencyExchange.js'
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
                current: "Currency-exchange",
                list: [
                    'Apps', 'Crypto', 'Currency-exchange'
                ]
            },
            exchangeData,

            digitalSelecteValue: null,
            digitalSelecteOptions: ['Bitcoin', 'Etherium', 'Litecoin', 'Ripple', 'Cardano', 'Neo', 'Stellar', 'EOS', 'NEM'],

            currencySelecteValue: null,
            currencySelecteOptions: ['USD', 'Pound', 'Rupee', 'Euro', 'Won', 'Dinar', 'Rial'],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card currency-exchange-card">
                <div class="card-body p-5 d-flex align-items-center justify-content-center">
                    <div class="container">
                        <h3 class="text-fixed-white text-center">Buy and Sell Coins without additional fees</h3>
                        <span class="d-block fs-16 text-fixed-white text-center op-8 mb-4">
                            Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC
                            crypto-currency..
                        </span>
                        <div class="p-3 mb-4 rounded currency-exchange-area">
                            <div class="row gy-3">
                                <div class="col-xxl-3 col-12">
                                    <input type="text" class="form-control" value="0.0453" placeholder="Enter Amount">
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <div>

                                        <VueMultiselect :show-labels="false" name="digital" id="digital"
                                            v-model="digitalSelecteValue" :multiple="false"
                                            :options="digitalSelecteOptions">
                                        </VueMultiselect>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <div class="fs-2 text-fixed-white text-center op-8 lh-1">
                                        =
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-12">
                                    <input type="text" class="form-control" value="1350.93" placeholder="Exchange Amount">
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <VueMultiselect :show-labels="false" name="currency" id="currency"
                                        v-model="currencySelecteValue" :multiple="false" :options="currencySelecteOptions">
                                    </VueMultiselect>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-success btn-wave">Exchange Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row justify-content-center">
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/Bitcoin.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">Bitcoin - BTC</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">24.3% <span
                                    class="fs-12 text-warning op-7 ms-2">+0.59<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span><span
                                    class="badge bg-success-transparent fs-10 ms-2">24H</span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-primary">0.00434</span>
                            <span class="d-block text-success fw-semibold">$30.29</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.BTCOptions"
                    :series="exchangeData.Btcseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">Etherium - ETH</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">17.67% <span
                                    class="fs-12 text-warning op-7 ms-2">+1.30<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-secondary">1.2923</span>
                            <span class="d-block text-success fw-semibold">$2,283.73</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.ETHOptions"
                    :series="exchangeData.ETHseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/Dash.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">Dash - DASH</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">17.67% <span
                                    class="fs-12 text-warning op-7 ms-2">+1.30<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-success">1.2923</span>
                            <span class="d-block text-success fw-semibold">$2,283.73</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.DashOptions"
                    :series="exchangeData.Dashseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/Litecoin.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">Litecoin - LTC</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">17.67% <span
                                    class="fs-12 text-warning op-7 ms-2">+1.30<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-warning">1.2923</span>
                            <span class="d-block text-success fw-semibold">$2,283.73</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.LTCOptions"
                    :series="exchangeData.LTCseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/Ripple.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">Ripple - XRS</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">17.67% <span
                                    class="fs-12 text-warning op-7 ms-2">+1.30<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-pink">1.2923</span>
                            <span class="d-block text-success fw-semibold">$2,283.73</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.XRSOPtions"
                    :series="exchangeData.XRSseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/Golem.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">Golem - GLM</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">17.67% <span
                                    class="fs-12 text-warning op-7 ms-2">+1.30<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-purple">1.2923</span>
                            <span class="d-block text-success fw-semibold">$2,283.73</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.GLMOptions"
                    :series="exchangeData.GLMseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/Monero.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">Monero</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">17.67% <span
                                    class="fs-12 text-warning op-7 ms-2">+1.30<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-danger">1.2923</span>
                            <span class="d-block text-success fw-semibold">$2,283.73</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.MoneroOptions"
                    :series="exchangeData.Moneroseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card overflow-hidden">
                <div class="card-body mb-3">
                    <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-xs">
                                        <img src="/images/crypto-currencies/square-color/EOS.svg" alt="">
                                    </span>
                                </div>
                                <h6 class="fw-semibold mb-0">EOS</h6>
                            </div>
                            <span class="fs-25 d-flex align-items-center">17.67% <span
                                    class="fs-12 text-warning op-7 ms-2">+1.30<i
                                        class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                        </div>
                        <div class="text-end">
                            <span class="d-block fs-14 mb-1 text-info">1.2923</span>
                            <span class="d-block text-success fw-semibold">$2,283.73</span>
                        </div>
                    </div>
                </div>
                <apexchart class="mt-1 w-100" type="area" height="60px" :options="exchangeData.EosOptions"
                    :series="exchangeData.Eosseries">
                </apexchart>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="text-center my-4">
                <button class="btn btn-primary-light" type="button" disabled>
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>


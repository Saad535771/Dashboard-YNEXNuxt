<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as cryptoData from '@/data/dashboards/crypto.js';
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
        current: "Crypto",
        list: [
          'Dashboards', 'Crypto'
        ]
      },
      cryptoData,
      buySelectCurrency: null,
      buySelectCurrencyType: null,
      selectCurrencyOption: ['BTC', 'ETH', 'XRP', 'DASH', 'NEO', 'LTC', 'BSD'],
      selectCurrencyOptionType: ['USD', 'AED', 'AUD', 'ARS', 'AZN', 'BGN', 'BRL'],
      sellSelectCurrency: null,
      sellSelectCurrencyType: null,
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
        <div class="col-xxl-4 col-xl-4 col-lg-12">
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
                  <apexchart width="100%" height="40px" type="line" :options="cryptoData.spark1Options"
                    :series="cryptoData.spark1Series"></apexchart>
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
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-12">
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
                  <apexchart width="100%" height="40px" type="line" :options="cryptoData.spark2Options"
                    :series="cryptoData.spark2Series"></apexchart>
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
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-12">
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
                  <apexchart width="100%" height="40px" type="line" :options="cryptoData.spark3Options"
                    :series="cryptoData.spark3Series"></apexchart>
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
          </div>
        </div>
        <div class="col-xxl-8 col-xl-7">
          <div class="card custom-card">
            <div class="card-header justify-content-between flex-wrap">
              <div class="card-title">
                Crypto Statistics
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
                    <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                  </span>
                </div>
                <div class="d-flex flex-wrap justify-content-sm-evenly flex-fill">
                  <div class="m-sm-0 m-2">
                    <span>Symbol</span>
                    <p class="fw-semibold mb-0">BTC</p>
                  </div>
                  <div class="m-sm-0 m-2">
                    <span>Price Benchmark</span>
                    <p class="fw-semibold mb-0">128.00%</p>
                  </div>
                  <div class="m-sm-0 m-2">
                    <span>Price (USD)</span>
                    <p class="text-success fe-semibold mb-0">$4,253.49</p>
                  </div>
                  <div class="m-sm-0 m-2">
                    <span>Change (24H)</span>
                    <p class="text-danger fw-semibold mb-0">-0.24%</p>
                  </div>
                  <div class="m-sm-0 m-2">
                    <span>Market Cap</span>
                    <p class="fw-semibold mb-0">$179.12B</p>
                  </div>
                </div>
              </div>
              <apexchart height="300px" type="candlestick" :options="cryptoData.cryptoStatisticsOptions"
                :series="cryptoData.cryptoStatisticsSeries"></apexchart>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-5">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Recent Transactions</div>
              <div class="dropdown">
                <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                  data-bs-toggle="dropdown">
                  <i class="fe fe-more-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <a href="javascript:void(0);">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <span class="avatar avatar-sm">
                            <img src="/images/crypto-currencies/square-color/Bitcoin.svg" alt="">
                          </span>
                        </div>
                        <div>
                          <p class="mb-0 fw-semibold">Bitcoin</p>
                          <p class="mb-0 fs-11 text-success fw-semibold">Sell</p>
                        </div>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fw-semibold">
                          +$19,123.02
                        </p>
                        <p class="mb-0 op-7 text-muted fs-11">
                          BTC 0.0823.45
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-3">
                  <a href="javascript:void(0);">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <span class="avatar avatar-sm">
                            <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                          </span>
                        </div>
                        <div>
                          <p class="mb-0 fw-semibold">Etherium</p>
                          <p class="mb-0 fs-11 text-primary fw-semibold">Buy</p>
                        </div>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fw-semibold">
                          -$1,430.92
                        </p>
                        <p class="mb-0 op-7 text-muted fs-11">
                          ETH 10,783.23
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-3">
                  <a href="javascript:void(0);">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <span class="avatar avatar-sm">
                            <img src="/images/crypto-currencies/square-color/Dash.svg" alt="">
                          </span>
                        </div>
                        <div>
                          <p class="mb-0 fw-semibold">Dash</p>
                          <p class="mb-0 fs-11 text-success fw-semibold">Sell</p>
                        </div>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fw-semibold">
                          +$5,236.53
                        </p>
                        <p class="mb-0 op-7 text-muted fs-11">
                          DASH 12,456.98
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-3">
                  <a href="javascript:void(0);">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <span class="avatar avatar-sm">
                            <img src="/images/crypto-currencies/square-color/Bytecoin.svg" alt="">
                          </span>
                        </div>
                        <div>
                          <p class="mb-0 fw-semibold">Bytecoin</p>
                          <p class="mb-0 fs-11 text-primary fw-semibold">Buy</p>
                        </div>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fw-semibold">
                          -$1,810.93
                        </p>
                        <p class="mb-0 op-7 text-muted fs-11">
                          BYTE 8,154.00
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-3">
                  <a href="javascript:void(0);">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <span class="avatar avatar-sm">
                            <img src="/images/crypto-currencies/square-color/Golem.svg" alt="">
                          </span>
                        </div>
                        <div>
                          <p class="mb-0 fw-semibold">Golem</p>
                          <p class="mb-0 fs-11 text-success fw-semibold">Sell</p>
                        </div>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fw-semibold">
                          +$5,046.34
                        </p>
                        <p class="mb-0 op-7 text-muted fs-11">
                          GOLEM 9,384.73
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-3">
                  <a href="javascript:void(0);">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <span class="avatar avatar-sm">
                            <img src="/images/crypto-currencies/square-color/Siacoin.svg" alt="">
                          </span>
                        </div>
                        <div>
                          <p class="mb-0 fw-semibold">SiaCoin</p>
                          <p class="mb-0 fs-11 text-success fw-semibold">Sell</p>
                        </div>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fw-semibold">
                          +$2,625.50
                        </p>
                        <p class="mb-0 op-7 text-muted fs-11">
                          SIA 3,151.09
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-1">
                  <a href="javascript:void(0);">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="me-2">
                          <span class="avatar avatar-sm">
                            <img src="/images/crypto-currencies/square-color/Monero.svg" alt="">
                          </span>
                        </div>
                        <div>
                          <p class="mb-0 fw-semibold">Monero</p>
                          <p class="mb-0 fs-11 text-success fw-semibold">Sell</p>
                        </div>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fw-semibold">
                          +$1,256.24
                        </p>
                        <p class="mb-0 op-7 text-muted fs-11">
                          XMR 2,799.06
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div>
                <div class="mb-1">Wallet Value<span class="fs-10 badge bg-success-transparent text-success p-1 ms-2"><i
                      class="ri-arrow-up-s-line align-middle me-1"></i>12.2%</span></div>
                <div class="fs-20 fw-semibold">$132,12933.000</div>
                <small class="text-muted fw-semibold">12 BTC</small>
              </div>
              <div class="ms-auto">
                <span class="avatar avatar-xxl">
                  <img class="buy-sell-image" src="/images/media/media-82.png" alt="">
                </span>
              </div>
            </div>
            <div class="card-body">
              <ul class="nav nav-tabs tab-style-1 d-sm-flex d-block nav-justified" role="tablist">
                <li class="nav-item me-sm-2 me-0">
                  <a class="nav-link active" data-bs-toggle="tab" data-bs-target="#buy-crypto" aria-current="page"
                    href="#buy-crypto">Buy</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#sell-crypto" href="#sell-crypto">Sell</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane border-0 active p-0" id="buy-crypto" role="tabpanel" aria-labelledby="buy-crypto">
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="Select Currency">
                    <VueMultiselect :show-labels="false" class="w-50" :options="selectCurrencyOption" :searchable="false" 
                      :multiple="false" v-model="buySelectCurrency">
                    </VueMultiselect>
                  </div>
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="36,335.00">
                    <VueMultiselect :show-labels="false" class="w-50" :options="selectCurrencyOptionType" :searchable="false"
                      :multiple="false" v-model="buySelectCurrencyType">
                    </VueMultiselect>
                  </div>
                  <div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Price:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span
                        class="text-dark fw-semibold float-end">BTC</span></div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Amount:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span
                        class="text-dark fw-semibold float-end">LTC</span></div>
                    <div class="fw-semibold fs-14 py-2">Total: <span class="fs-14 d-inline-block">22.00 BTC</span></div>
                    <div class="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                    <label class="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                    <div class="row g-2">
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                              checked>
                            <label class="form-check-label fs-12" for="flexRadioDefault1">
                              Credit / Debit Cards
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label fs-12" for="flexRadioDefault2">
                              Paypal
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid mt-4 pt-1">
                    <button type="button" class="btn btn-primary btn-wave">BUY</button>
                  </div>
                </div>
                <div class="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel" aria-labelledby="sell-crypto">
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="Select Currency">
                    <VueMultiselect :show-labels="false" class="w-50" :options="selectCurrencyOption"
                      :multiple="false" v-model="sellSelectCurrency">
                    </VueMultiselect>
                  </div>
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="36,335.00">
                    <VueMultiselect :show-labels="false" class="w-50" :options="selectCurrencyOptionType"
                      :multiple="false" v-model="sellSelectCurrencyType">
                    </VueMultiselect>
                  </div>
                  <div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Price:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span
                        class="text-dark fw-semibold float-end">BTC</span></div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Amount:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span
                        class="text-dark fw-semibold float-end">LTC</span></div>
                    <div class="fw-semibold fs-14 py-2">Total: <span class="fs-14 d-inline-block">22.00 BTC</span></div>
                    <div class="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                    <label class="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                    <div class="row g-2">
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="sellcrypto" id="sellcrypto1">
                            <label class="form-check-label fs-12" for="sellcrypto1">
                              Credit / Debit Cards
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="sellcrypto" id="sellcrypto2" checked>
                            <label class="form-check-label fs-12" for="sellcrypto2">
                              Paypal
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid mt-4 pt-1">
                    <button type="button" class="btn btn-danger btn-wave">SELL</button>
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

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-5 col-xl-12">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Recent Activity
          </div>
          <div class="dropdown">
            <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
              data-bs-toggle="dropdown">
              <i class="fe fe-more-vertical"></i>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table card-table table-vcenter text-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col" class="text-center">Date</th>
                  <th scope="col">Currency</th>
                  <th scope="col">From / To</th>
                  <th scope="col">Time &amp; Status</th>
                </tr>
              </thead>
              <tbody class="active-tab">
                <tr>
                  <td>
                    <div class="text-center">
                      <p class="text-muted mb-0 fw-semibold">Dec</p>
                      <span class="fs-12 text-muted">15</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
                          <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Currency</span>
                        <p class="mb-0">Bitcoin - <span class="text-muted">(0.0092312)</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center text-center">
                      <div class="d-flex align-items-center fw-semibold">
                        <span class="avatar avatar-sm avatar-rounded">
                          <img src="/images/faces/4.jpg" alt="">
                        </span>
                        <span class="ms-2">Emiley Jackson</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted mb-1">Delivered Time</span>
                      <p class="mb-0">04:24PM -
                        <span class="fs-11 text-danger fw-semibold">Sent</span>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="text-center">
                      <p class="text-muted mb-0 fw-semibold">Dec</p>
                      <span class="fs-12 text-muted">24</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
                          <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Currency</span>
                        <p class="mb-0">Etherium - <span class="text-muted">(0.9207702)</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center text-center">
                      <div class="d-flex align-items-center fw-semibold">
                        <span class="avatar avatar-sm avatar-rounded">
                          <img src="/images/faces/15.jpg" alt="">
                        </span>
                        <span class="ms-2">Jackie Shraff</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted mb-1">Received Time</span>
                      <p class="mb-0">11:57PM -
                        <span class="fs-11 text-success fw-semibold">Received</span>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="text-center">
                      <p class="text-muted mb-0 fw-semibold">Dec</p>
                      <span class="fs-12 text-muted">02</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
                          <img src="/images/crypto-currencies/regular/Dash.svg" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Currency</span>
                        <p class="mb-0">Dash - <span class="text-muted">(0.83092333)</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center text-center">
                      <div class="d-flex align-items-center fw-semibold">
                        <span class="avatar avatar-sm avatar-rounded">
                          <img src="/images/faces/11.jpg" alt="">
                        </span>
                        <span class="ms-2">Json Taylor</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted mb-1">Received Time</span>
                      <p class="mb-0">02:28AM -
                        <span class="fs-11 text-success fw-semibold">Received</span>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="text-center">
                      <p class="text-muted mb-0 fw-semibold">Nov</p>
                      <span class="fs-12 text-muted">30</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
                          <img src="/images/crypto-currencies/regular/Euro.svg" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Currency</span>
                        <p class="mb-0">Euro - <span class="text-muted">(0.0092363)</span></p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center text-center">
                      <div class="d-flex align-items-center fw-semibold">
                        <span class="avatar avatar-sm avatar-rounded">
                          <img src="/images/faces/5.jpg" alt="">
                        </span>
                        <span class="ms-2">Jessica May</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted mb-1">Sent Time</span>
                      <p class="mb-0">10:08AM -
                        <span class="fs-11 text-info fw-semibold">Processing</span>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="border-bottom-0">
                    <div class="text-center">
                      <p class="text-muted mb-0 fw-semibold">Nov</p>
                      <span class="fs-12 text-muted">29</span>
                    </div>
                  </td>
                  <td class="border-bottom-0">
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
                          <img src="/images/crypto-currencies/regular/litecoin.svg" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Currency</span>
                        <p class="mb-0">Litecoin - <span class="text-muted">(1.00009023)</span></p>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom-0">
                    <div class="align-items-center text-center">
                      <div class="d-flex align-items-center fw-semibold">
                        <span class="avatar avatar-sm avatar-rounded">
                          <img src="/images/faces/12.jpg" alt="">
                        </span>
                        <span class="ms-2">Lieonel Marsi</span>
                      </div>
                    </div>
                  </td>
                  <td class="border-bottom-0">
                    <div class="align-items-center">
                      <span class="fs-12 text-muted mb-1">Received Time</span>
                      <p class="mb-0">06:05PM -
                        <span class="fs-11 text-success fw-semibold">Received</span>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between flex-wrap">
          <div class="card-title">
            Bitcoin Price Statistics
          </div>
          <div class="d-flex">
            <button type="button" class="btn btn-success btn-wave btn-sm me-2">Buy Now</button>
            <div class="dropdown">
              <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                data-bs-toggle="dropdown">
                <i class="fe fe-more-vertical"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="list-group border-0 crypto-list">
            <a href="javascript:void(0);"
              class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-semibold text-dark">Bitcoin value in USD</p>
                <p class="text-dark mb-0 font-weight-normal tx-15">
                  <span class="numberfont">$29,472.60</span>
                </p>
              </div>
            </a>
            <a href="javascript:void(0);"
              class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span
                    class="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                <p class="text-success mb-0 font-weight-normal tx-13">
                  <span class="numberfont">+280.30(0.96%)</span> <i class="fa fa-arrow-up"></i> today
                </p>
              </div>
            </a>
            <a href="javascript:void(0);"
              class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-normal text-dark">Trade Value</p>
                <p class="text-dark mb-0 tx-15">
                  <span class="numberfont">$245,36,465.652</span>
                </p>
              </div>
            </a>
            <a href="javascript:void(0);"
              class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-semibold text-dark">Market Rank<span
                    class="badge bg-secondary-transparent ms-3">3 Years</span></p>
                <p class="text-dark mb-0 tx-15">
                  <span class="numberfont">#1</span>
                </p>
              </div>
            </a>
            <a href="javascript:void(0);"
              class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-semibold text-dark">This Week High</p>
                <p class="text-success mb-0 tx-15">
                  <span class="numberfont">$68,990.90</span>
                </p>
              </div>
            </a>
            <a href="javascript:void(0);"
              class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-semibold text-dark">This Week Low</p>
                <p class="text-danger mb-0 tx-15">
                  <span class="numberfont">$28,825.76</span>
                </p>
              </div>
            </a>
            <a href="javascript:void(0);"
              class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-semibold text-dark">Market Dominance</p>
                <p class="text-dark mb-0 tx-15">
                  <span class="numberfont">70%</span>
                </p>
              </div>
            </a>
            <a href="javascript:void(0);" class="list-group-item flex-column align-items-start border-0">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <p class="tx-14 mb-0 font-weight-semibold text-dark">Alltime High</p>
                <p class="text-info mb-0 tx-15">
                  <span class="numberfont">$68,990.90</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-4 col-xl-6">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Top Traders
          </div>
          <div class="dropdown">
            <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown" aria-expanded="false">
              View All<i class="ri-arrow-down-s-line align-middle ms-1"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-unstyled my-1">
            <li class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="me-2 lh-1">
                    <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                      <img src="/images/faces/11.jpg" alt="">
                    </span>
                  </div>
                  <div>
                    <p class="mb-0 fw-semibold">Json Taylor</p>
                    <p class="mb-0 text-muted fs-12">Bought 0.008213 Bitcoin using ****9808</p>
                  </div>
                </div>
                <div class="text-end">
                  <p class="mb-0 fw-semibold text-success">
                    0.09251821409 <span class="text-default">- BTC</span>
                  </p>
                  <p class="mb-0 op-7 text-muted fs-11">
                    $1,203.92
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="me-2 lh-1">
                    <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                      <img src="/images/faces/4.jpg" alt="">
                    </span>
                  </div>
                  <div>
                    <p class="mb-0 fw-semibold">Alicia Smith</p>
                    <p class="mb-0 text-muted fs-12">Sold - 0.7902400 Litecoin</p>
                  </div>
                </div>
                <div class="text-end">
                  <p class="mb-0 fw-semibold text-success">
                    0.2362333001 <span class="text-default">- LTC</span>
                  </p>
                  <p class="mb-0 op-7 text-muted fs-11">
                    $19,092.56
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="me-2 lh-1">
                    <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                      <img src="/images/faces/15.jpg" alt="">
                    </span>
                  </div>
                  <div>
                    <p class="mb-0 fw-semibold">Branco Eliga</p>
                    <p class="mb-0 text-muted fs-12">Bought +12.9092 Euro coin</p>
                  </div>
                </div>
                <div class="text-end">
                  <p class="mb-0 fw-semibold text-success">
                    0.009823487 <span class="text-default">- EUROC</span>
                  </p>
                  <p class="mb-0 op-7 text-muted fs-11">
                    $8,977.46
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="me-2 lh-1">
                    <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                      <img src="/images/faces/12.jpg" alt="">
                    </span>
                  </div>
                  <div>
                    <p class="mb-0 fw-semibold">Alec Carey</p>
                    <p class="mb-0 text-muted fs-12">Bought 32.09472944 Dash using wallet</p>
                  </div>
                </div>
                <div class="text-end">
                  <p class="mb-0 fw-semibold text-success">
                    8.88234590 <span class="text-default">- DASH</span>
                  </p>
                  <p class="mb-0 op-7 text-muted fs-11">
                    $9,772.46
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="me-2 lh-1">
                    <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                      <img src="/images/faces/5.jpg" alt="">
                    </span>
                  </div>
                  <div>
                    <p class="mb-0 fw-semibold">Sia Linda</p>
                    <p class="mb-0 text-muted fs-12">Sent 0.00662 Bitcoin to Ravos Chan</p>
                  </div>
                </div>
                <div class="text-end">
                  <p class="mb-0 fw-semibold text-success">
                    58.6225600 <span class="text-default">- BTC</span>
                  </p>
                  <p class="mb-0 op-7 text-muted fs-11">
                    $9,772.46
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-0">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="me-2 lh-1">
                    <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                      <img src="/images/faces/10.jpg" alt="">
                    </span>
                  </div>
                  <div>
                    <p class="mb-0 fw-semibold">Ryan Ranolds</p>
                    <p class="mb-0 text-muted fs-12">Bought 2.098123 Etherium</p>
                  </div>
                </div>
                <div class="text-end">
                  <p class="mb-0 fw-semibold text-success">
                    190.0092773 <span class="text-default">- ETH</span>
                  </p>
                  <p class="mb-0 op-7 text-muted fs-11">
                    $18,283982.00
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header justify-content-between flex-wrap">
          <div class="card-title mb-2 mb-sm-0">
            Crypto currencies Market Value
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
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover text-nowrap table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Price</th>
                  <th scope="col">Market Cap</th>
                  <th width="120px" scope="col">Price Graph</th>
                  <th scope="col">Volume</th>
                  <th scope="col">Price Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bitcoin</td>
                  <td>
                    <div class="lh-1 d-flex align-items-center">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                      </span> - BTC
                    </div>
                  </td>
                  <td>
                    $16,839.10
                  </td>
                  <td>
                    324.01B
                  </td>
                  <td>
                    <div class="ms-auto sparkline">
                      <apexchart width="100%" height="20px" type="line" :options="cryptoData.spark4Options"
                        :series="cryptoData.spark4Series"></apexchart>
                    </div>
                  </td>
                  <td>
                    14,674,311,168
                  </td>
                  <td>
                    <span class="text-success">0.30% <i class="ti ti-arrow-big-up-lines ms-1"></i></span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Etherium</td>
                  <td>
                    <div class="lh-4 d-flex align-items-center">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                      </span> - ETH
                    </div>
                  </td>
                  <td>
                    1,217.96
                  </td>
                  <td>
                    $149,316,232,699
                  </td>
                  <td>
                    <div class="ms-auto sparkline">
                      <apexchart width="100%" height="20px" type="line" :options="cryptoData.spark5Options"
                        :series="cryptoData.spark5Series"></apexchart>
                    </div>
                  </td>
                  <td>
                    $4,758,554,801
                  </td>
                  <td>
                    <span class="text-success">0.30% <i class="ti ti-arrow-big-up-lines ms-1"></i></span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dash</td>
                  <td>
                    <div class="lh-1 d-flex align-items-center">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/crypto-currencies/regular/Dash.svg" alt="">
                      </span> - DASH
                    </div>
                  </td>
                  <td>
                    $43.49
                  </td>
                  <td>
                    $480,799,847
                  </td>
                  <td>
                    <div class="ms-auto sparkline">
                      <apexchart width="100%" height="20px" type="line" :options="cryptoData.spark6Options"
                        :series="cryptoData.spark6Series"></apexchart>
                    </div>
                  </td>
                  <td>
                    $52,626,563
                  </td>
                  <td>
                    <span class="text-success">0.45% <i class="ti ti-arrow-big-up-lines ms-1"></i></span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Ripple</td>
                  <td>
                    <div class="lh-1 d-flex align-items-center">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/crypto-currencies/regular/Ripple.svg" alt="">
                      </span> - XRP
                    </div>
                  </td>
                  <td>
                    $0.3531
                  </td>
                  <td>
                    $17,791,969,465
                  </td>
                  <td>
                    <div class="ms-auto sparkline">
                      <apexchart width="100%" height="20px" type="line" :options="cryptoData.spark7Options"
                        :series="cryptoData.spark7Series"></apexchart>
                    </div>
                  </td>
                  <td>
                    $511,598,941
                  </td>
                  <td>
                    <span class="text-success">0.97% <i class="ti ti-arrow-big-up-lines ms-1"></i></span>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Iota</td>
                  <td>
                    <div class="lh-1 d-flex align-items-center">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/crypto-currencies/regular/IOTA.svg" alt="">
                      </span> - IOTA
                    </div>
                  </td>
                  <td>
                    $0.169741
                  </td>
                  <td>
                    $471,800,600
                  </td>
                  <td>

                    <div class="ms-auto sparkline">
                      <apexchart width="100%" height="20px" type="line" :options="cryptoData.spark8Options"
                        :series="cryptoData.spark8Series"></apexchart>
                    </div>
                  </td>
                  <td>
                    $5,524,385
                  </td>
                  <td>
                    <span class="text-success">0.93% <i class="ti ti-arrow-big-up-lines ms-1"></i></span>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Neo</td>
                  <td>
                    <div class="lh-1 d-flex align-items-center">
                      <span class="avatar avatar-xs avatar-rounded">
                        <img src="/images/crypto-currencies/regular/Neo.svg" alt="">
                      </span> - NEO
                    </div>
                  </td>
                  <td>
                    $6.43
                  </td>
                  <td>
                    $453,601,667
                  </td>
                  <td>
                    <div class="ms-auto sparkline">
                      <apexchart width="100%" height="20px" type="line" :options="cryptoData.spark5Options"
                        :series="cryptoData.spark5Series"></apexchart>
                    </div>
                  </td>
                  <td>
                    $12,904,320
                  </td>
                  <td>
                    <span class="text-danger">0.49% <i class="ti ti-arrow-big-down-lines ms-1"></i></span>
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
  <!-- End:: row-3 -->
</template>

<style scoped></style>

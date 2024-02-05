<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { stackedTransactionChartOptions, stackedTransactionSeries } from '@/data/apps/transaction.js';
import auth from '@/middleware/auth';
import CountUp from 'vue-countup-v3'

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader, CountUp
    },
    data() {
        return {
            dataToPass: {
                current: "Transactions",
                list: [
                    'Apps', 'Crypto', 'Transactions'
                ]
            },
            stackedTransactionSeries: stackedTransactionSeries,
            stackedTransactionChartOptions: stackedTransactionChartOptions
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-9">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Transaction History
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
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">This Month</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">This Year</a></li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-secondary btn-sm btn-wave">View All</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th scope="col">Sender</th>
                                    <th scope="col">Transaction Hash</th>
                                    <th scope="col">Coin</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Receiver</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-up text-success fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/10.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Json Taylor</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232401</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Bitcoin</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>24,Jul 2023 - 4:23PM</span>
                                    </td>
                                    <td>
                                        <span class="text-success">+0.041</span>
                                    </td>
                                    <td>
                                        <span>Texas Steel</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Success</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-down text-danger fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/5.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Samantha Taylor</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232402</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Dash.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Dashcoin</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>20,Jul 2023 - 12:47PM</span>
                                    </td>
                                    <td>
                                        <span class="text-danger">-0.284</span>
                                    </td>
                                    <td>
                                        <span>Stuart Little</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-transparent">Pending</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-up text-success fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Brian Jhonson</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232403</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Euro.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Euro</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>14,Aug 2023 - 10:25AM</span>
                                    </td>
                                    <td>
                                        <span class="text-success">+0.943</span>
                                    </td>
                                    <td>
                                        <span>Melissa Smith</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Success</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-up text-success fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Liam Anderson</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232404</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Etherium</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>10,Jul 2023 - 4:14PM</span>
                                    </td>
                                    <td>
                                        <span class="text-success">+0.582</span>
                                    </td>
                                    <td>
                                        <span>Alexander Clark</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-transparent">Failed</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-up text-success fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Isabella Brown</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232405</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Golem.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Golem</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>19,Aug 2023 - 11:35AM</span>
                                    </td>
                                    <td>
                                        <span class="text-success">+0.290</span>
                                    </td>
                                    <td>
                                        <span>Elijah Davis</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Success</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-down text-danger fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/7.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Sophia Lee</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232406</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/litecoin.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Litecoin</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>12,Jun 2023 - 2:45PM</span>
                                    </td>
                                    <td>
                                        <span class="text-danger">-0.147</span>
                                    </td>
                                    <td>
                                        <span>Harper Taylor</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Success</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-up text-success fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Evelyn Clark</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232407</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Ripple.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Ripple</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>27,Jul 2023 - 10:18AM</span>
                                    </td>
                                    <td>
                                        <span class="text-success">+1.05</span>
                                    </td>
                                    <td>
                                        <span>William Brown</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Success</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-up text-success fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Liam Anderson</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232408</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/monero.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Monero</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>16,Aug 2023 - 9:25PM</span>
                                    </td>
                                    <td>
                                        <span class="text-success">+0.625</span>
                                    </td>
                                    <td>
                                        <span>Amelia Davis</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-info-transparent">Inprogress</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-down text-danger fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Harper Taylor</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232409</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Zcash.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Zcash</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>24,Jul 2023 - 12:47PM</span>
                                    </td>
                                    <td>
                                        <span class="text-danger">-0.293</span>
                                    </td>
                                    <td>
                                        <span>Benjamin Martinez</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-info-transparent">Inprogress</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="avatar avatar-sm avatar-rounded bg-light">
                                            <i class="ti ti-arrow-narrow-up text-success fw-semibold fs-16"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/faces/16.jpg" alt="">
                                            </span>
                                            <div class="fw-semibold">Lucas Taylor</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>#1242232410</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar avatar-xs avatar-rounded">
                                                <img src="/images/crypto-currencies/regular/Decred.svg" alt="">
                                            </span>
                                            <div class="fw-semibold">Decred</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>24,Jul 2023 - 12:47PM</span>
                                    </td>
                                    <td>
                                        <span class="text-success">+0.893</span>
                                    </td>
                                    <td>
                                        <span>Mia Wilson</span>
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Success</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary-light btn-icon btn-sm"><v-tooltip activator="parent"
                                                location="top">download</v-tooltip><i
                                                class="ri-download-2-line"></i></button>
                                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><v-tooltip
                                                activator="parent" location="top">Delete</v-tooltip><i
                                                class="ri-delete-bin-5-line"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
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
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-body p-0">
                    <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                        <div class="svg-icon-background bg-primary-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                                class="svg-primary">
                                <path
                                    d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">New Transactions
                                <span class="badge bg-primary fw-semibold float-end">
                                    12,345
                                </span>
                            </h6>
                            <div class="pb-0 mt-0">
                                <div>
                                    <h4 class="fs-18 fw-semibold mb-2"><count-up :end-val="43"></count-up><span
                                            class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                    <p class="text-muted fs-11 mb-0 lh-1">
                                        <span class="text-success me-1 fw-semibold">
                                            <i class="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                        </span>
                                        <span>this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                        <div class="svg-icon-background bg-success-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-success">
                                <path
                                    d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Completed Transactions
                                <span class="badge bg-success fw-semibold float-end">
                                    4,176
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2"><count-up :end-val="320"></count-up><span
                                        class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-danger me-1 fw-semibold">
                                        <i class="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-top p-4 border-bottom border-block-end-dashed flex-wrap gap-2">
                        <div class="svg-icon-background bg-warning-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                                class="svg-warning">
                                <path
                                    d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Pending Transactions
                                <span class="badge bg-warning fw-semibold float-end">
                                    7,064
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2"><count-up :end-val="82"></count-up><span
                                        class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-success me-1 fw-semibold">
                                        <i class="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-top p-4 border-bottom border-block-end-dashed flex-wrap gap-2">
                        <div class="svg-icon-background bg-secondary-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
                                class="svg-secondary">
                                <path
                                    d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Inprogress Transactions
                                <span class="badge bg-secondary fw-semibold float-end">
                                    1,105
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2"><count-up :end-val="33"></count-up><span
                                        class="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-success me-1 fw-semibFold">
                                        <i class="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 pb-2">
                        <p class="fs-15 fw-semibold">Transactions Statistics <span class="text-muted fw-normal">(Last 6
                                months) :</span></p>
                        <apexchart height="210" type="bar" :options="stackedTransactionChartOptions"
                            :series="stackedTransactionSeries">
                        </apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>


<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
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
                current: "Wallet Integration",
                list: [
                    'Apps', 'NFT', 'Wallet Integration'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xl-3">
                <div class="card custom-card overflow-hidden">
                    <div class="card-header">
                        <div class="card-title">
                            Choose Network
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <ul class="list-group list-group-flush nft-list">
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="stretched-link"></a>
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-rounded avatar-sm bg-light p-1">
                                            <img src="/images/nft-images/34.png" alt="">
                                        </span>
                                    </div>
                                    <div class="fs-14 fw-semibold">Etherium</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="stretched-link"></a>
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-rounded avatar-sm bg-light p-1">
                                            <img src="/images/nft-images/35.png" alt="">
                                        </span>
                                    </div>
                                    <div class="fs-14 fw-semibold">Binance</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="stretched-link"></a>
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-rounded avatar-sm bg-light p-1">
                                            <img src="/images/nft-images/36.png" alt="">
                                        </span>
                                    </div>
                                    <div class="fs-14 fw-semibold">Solana</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="stretched-link"></a>
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-rounded avatar-sm bg-light p-1">
                                            <img src="/images/nft-images/39.png" alt="">
                                        </span>
                                    </div>
                                    <div class="fs-14 fw-semibold">Tezos</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="stretched-link"></a>
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-rounded avatar-sm bg-light p-1">
                                            <img src="/images/nft-images/37.png" alt="">
                                        </span>
                                    </div>
                                    <div class="fs-14 fw-semibold">Avalanche</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <a href="javascript:void(0);" class="stretched-link"></a>
                                <div class="d-flex align-items-center gap-2">
                                    <div>
                                        <span class="avatar avatar-rounded avatar-sm bg-light p-1">
                                            <img src="/images/nft-images/38.png" alt="">
                                        </span>
                                    </div>
                                    <div class="fs-14 fw-semibold">Cardano</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-9">
                <div class="card custom-card">
                    <div class="card-header justify-content-between">
                        <div class="card-title">
                            Choose Wallet
                        </div>
                        <div>
                            <button class="btn btn-secondary btn-wave">Add New Wallet</button>
                        </div>
                    </div>
                    <div class="card-body p-4">
                        <div class="row justify-content-center">
                            <div class="col-xxl-3">
                                <div class="card custom-card nft-wallet active">
                                    <div class="card-body p-3">
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                        <div class="d-flex align-items-center justify-content-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded p-2 bg-light">
                                                    <img src="/images/nft-images/42.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-0">MetaMask</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3">
                                <div class="card custom-card nft-wallet">
                                    <div class="card-body p-3">
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                        <div class="d-flex align-items-center justify-content-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded p-2 bg-light">
                                                    <img src="/images/nft-images/41.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-0">Enjin Wallet</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3">
                                <div class="card custom-card nft-wallet">
                                    <div class="card-body p-3">
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                        <div class="d-flex align-items-center justify-content-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded bg-light">
                                                    <img src="/images/nft-images/43.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-0">Trust Wallet</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3">
                                <div class="card custom-card nft-wallet">
                                    <div class="card-body p-3">
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                        <div class="d-flex align-items-center justify-content-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded bg-light p-2">
                                                    <img src="/images/nft-images/40.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-0">Coinbase Wallet</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3">
                                <div class="card custom-card nft-wallet">
                                    <div class="card-body p-3">
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                        <div class="d-flex align-items-center justify-content-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded bg-light p-2">
                                                    <img src="/images/nft-images/44.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-0">Lido</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3">
                                <div class="card custom-card nft-wallet">
                                    <div class="card-body p-3">
                                        <a href="javascript:void(0);" class="stretched-link"></a>
                                        <div class="d-flex align-items-center justify-content-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded bg-light">
                                                    <img src="/images/nft-images/45.png" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="fw-semibold mb-0">Huobi Wallet</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div>
                            <button class="btn btn-success float-end btn-wave">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End::row-1 -->
    </div>
</template>

<style scoped></style>


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
        current: "Wallet",
        list: [
          'Apps', 'Crypto', 'Wallet'
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
                        <div class="col-xl-4">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">
                                        BTC WALLET
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between gap-2">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Bitcoin.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted fs-12 fw-normal">Available BTC</span>
                                                <span class="fw-semibold">0.05437 BTC</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span class="fw-semibold">$1646.94 USD</span>
                                            <span class="d-block text-muted fs-12 fw-normal">In USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="btn-list text-center">
                                        <button class="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                        <button class="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">
                                        ETH WALLET
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between gap-2">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted fs-12 fw-normal">Available ETH</span>
                                                <span class="fw-semibold">2.3892 ETH</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span class="fw-semibold">$4581.24 USD</span>
                                            <span class="d-block text-muted fs-12 fw-normal">In USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="btn-list text-center">
                                        <button class="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                        <button class="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">
                                        XRP WALLET
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between gap-2">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Ripple.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted fs-12 fw-normal">Available XRP</span>
                                                <span class="fw-semibold">234.943 XRP</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span class="fw-semibold">$192.29 USD</span>
                                            <span class="d-block text-muted fs-12 fw-normal">In USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="btn-list text-center">
                                        <button class="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                        <button class="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">
                                        LTC WALLET
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between gap-2">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded">
                                                    <img src="/images/crypto-currencies/square-color/Litecoin.svg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted fs-12 fw-normal">Available LTC</span>
                                                <span class="fw-semibold">37.254 LTC</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span class="fw-semibold">$3519.01 USD</span>
                                            <span class="d-block text-muted fs-12 fw-normal">In USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="btn-list text-center">
                                        <button class="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                        <button class="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="card custom-card">
                                        <div class="card-header justify-content-between">
                                            <div class="card-title">
                                                BTC Wallet Address
                                            </div>
                                            <div>
                                                <button class="btn btn-primary-ghost btn-wave">Connect</button>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                               <div class="flex-fill">
                                                   <label for="btc-wallet-address1" class="form-label">Wallet Address</label>
                                                   <div class="input-group">
                                                        <input type="text" class="form-control" id="btc-wallet-address1" value="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder">
                                                        <button class="btn btn-primary">Copy</button>
                                                    </div>    
                                               </div> 
                                               <div>
                                                    <span class="avatar avatar-xxl border">
                                                        <img src="/images/media/media-89.png" class="p-1 qr-image" alt="">
                                                    </span>
                                               </div>
                                            </div>
                                            <div class="row gy-3">
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-success-transparent">
                                                                    <i class="ti ti-arrow-narrow-down fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Received</span>
                                                                <span class="d-block fw-semibold">6.2834 <span class="fs-12 text-muted fw-normal">BTC</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-danger-transparent">
                                                                    <i class="ti ti-arrow-narrow-up fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Sent</span>
                                                                <span class="d-block fw-semibold">2.7382 <span class="fs-12 text-muted fw-normal">BTC</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-secondary-transparent">
                                                                    <i class="ti ti-wallet fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Wallet Balance</span>
                                                                <span class="d-block fw-semibold">12.5232 <span class="fs-12 text-muted fw-normal">BTC</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card custom-card">
                                        <div class="card-header justify-content-between">
                                            <div class="card-title">
                                                ETH Wallet Address
                                            </div>
                                            <div>
                                                <button class="btn btn-primary-ghost btn-wave">Connect</button>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                               <div class="flex-fill">
                                                   <label for="btc-wallet-address2" class="form-label">Wallet Address</label>
                                                   <div class="input-group">
                                                        <input type="text" class="form-control" id="btc-wallet-address2" value="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder">
                                                        <button class="btn btn-primary">Copy</button>
                                                    </div>    
                                               </div> 
                                               <div>
                                                    <span class="avatar avatar-xxl border">
                                                        <img src="/images/media/media-89.png" class="p-1 qr-image" alt="">
                                                    </span>
                                               </div>
                                            </div>
                                            <div class="row gy-3">
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-success-transparent">
                                                                    <i class="ti ti-arrow-narrow-down fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Received</span>
                                                                <span class="d-block fw-semibold">6.2834 <span class="fs-12 text-muted fw-normal">ETH</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-danger-transparent">
                                                                    <i class="ti ti-arrow-narrow-up fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Sent</span>
                                                                <span class="d-block fw-semibold">2.7382 <span class="fs-12 text-muted fw-normal">ETH</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-secondary-transparent">
                                                                    <i class="ti ti-wallet fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Wallet Balance</span>
                                                                <span class="d-block fw-semibold">12.5232 <span class="fs-12 text-muted fw-normal">ETH</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card custom-card">
                                        <div class="card-header justify-content-between">
                                            <div class="card-title">
                                                LTC Wallet Address
                                            </div>
                                            <div>
                                                <button class="btn btn-primary-ghost btn-wave">Connect</button>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                               <div class="flex-fill">
                                                   <label for="btc-wallet-address3" class="form-label">Wallet Address</label>
                                                   <div class="input-group">
                                                        <input type="text" class="form-control" id="btc-wallet-address3" value="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder">
                                                        <button class="btn btn-primary">Copy</button>
                                                    </div>    
                                               </div> 
                                               <div>
                                                    <span class="avatar avatar-xxl border">
                                                        <img src="/images/media/media-89.png" class="p-1 qr-image" alt="">
                                                    </span>
                                               </div>
                                            </div>
                                            <div class="row gy-3">
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-success-transparent">
                                                                    <i class="ti ti-arrow-narrow-down fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Received</span>
                                                                <span class="d-block fw-semibold">6.2834 <span class="fs-12 text-muted fw-normal">LTC</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-danger-transparent">
                                                                    <i class="ti ti-arrow-narrow-up fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Sent</span>
                                                                <span class="d-block fw-semibold">2.7382 <span class="fs-12 text-muted fw-normal">LTC</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="rounded p-3 bg-light">
                                                        <div class="d-flex align-items-center gap-3">
                                                            <div class="lh-1">
                                                                <span class="avatar bg-secondary-transparent">
                                                                    <i class="ti ti-wallet fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span class="d-block text-muted">Wallet Balance</span>
                                                                <span class="d-block fw-semibold">12.5232 <span class="fs-12 text-muted fw-normal">LTC</span></span>
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
                    <!--End::row-1 -->
                </div>  
</template>

<style scoped></style>


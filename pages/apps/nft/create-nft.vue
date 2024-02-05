<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';

definePageMeta({
    middleware: [auth],
})
export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Create Nft",
                list: [
                    'Apps', 'NFT', 'Create Nft'
                ]
            },
            royalitieValue: null,
            royalitieOptions: ['Flat Royalty', ' Graduated Royalty', ' Tiered Royalty', ' Time-Limited Royalty', 'Customized Royalty'],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-8">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Create NFT</div>
                </div>
                <div class="card-body">
                    <div class="row gy-3 justify-content-between">
                        <div class="col-xxl-3 col-xl-12">
                            <div class="create-nft-item">
                                <label class="form-label">Upload NFT</label>
                                <div class="d-flex justify-content-center">
                                    <DropZone :maxFiles="1" class="filepond--root" data-style-panel-layout="compact circle"
                                        :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="3" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-8 col-xl-12">
                            <div class="row gy-3">
                                <div class="col-xl-12">
                                    <label for="input-placeholder" class="form-label">NFT Title</label>
                                    <input type="text" class="form-control" id="input-placeholder"
                                        placeholder="eg:Neo-Nebulae">
                                </div>
                                <div class="col-xl-12">
                                    <label for="nft-description" class="form-label">NFT Description</label>
                                    <textarea class="form-control" id="nft-description" rows="3"
                                        placeholder="Enter Description"></textarea>
                                </div>
                                <div class="col-xl-12">
                                    <label for="nft-link" class="form-label">External Link</label>
                                    <input type="text" class="form-control" id="nft-link" placeholder="External Link Here">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="row gy-3">
                                <div class="col-xl-6">
                                    <label for="nft-creator-name" class="form-label">Creator Name</label>
                                    <input type="text" class="form-control" id="nft-creator-name" placeholder="Enter Name">
                                </div>
                                <div class="col-xl-6">
                                    <label for="nft-price" class="form-label">NFT Price</label>
                                    <input type="text" class="form-control" id="nft-price" placeholder="Enter Price">
                                </div>
                                <div class="col-xl-4">
                                    <label for="nft-size" class="form-label">NFT Size</label>
                                    <input type="text" class="form-control" id="nft-size" placeholder="Enter Size">
                                </div>
                                <div class="col-xl-4">
                                    <label for="nft-royality" class="form-label">Royality</label>
                                    <VueMultiselect :searchable="false" :show-labels="false" v-model="royalitieValue" placeholder="Choose Royalities" :options="royalitieOptions"></VueMultiselect>
                                </div>
                                <div class="col-xl-4">
                                    <label for="nft-property" class="form-label">Property</label>
                                    <input type="text" class="form-control" id="nft-property" placeholder="Enter Property">
                                </div>
                                <div class="col-xl-12">
                                    <label class="form-label d-block">Method</label>
                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="strap-material" id="strap1" checked>
                                        <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap1"><i
                                                class="ti ti-tag me-1 align-middle fs-15 ms-1"></i>Fixed
                                            Price</label>
                                        <input type="radio" class="btn-check" name="strap-material" id="strap2">
                                        <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap2"><i
                                                class="ti ti-users fs-15 me-1 align-middle ms-1"></i>Open For
                                            Bids</label>
                                        <input type="radio" class="btn-check" name="strap-material" id="strap3">
                                        <label class="btn btn-sm btn-outline-primary text-default z-0" for="strap3"><i
                                                class="ti ti-hourglass-low fs-15 me-1 align-middle ms-1"></i>Timed
                                            Auction</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <a href="javascript:void(0);" class="btn btn-primary btn-wave waves-effect waves-light">Create NFT</a>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        NFT Preview Here
                    </div>
                </div>
                <div class="card-body">
                    <div class="card custom-card mb-0 shadow-none border">
                        <img src="/images/nft-images/18.png" class="card-img-top" alt="...">
                        <div class="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                            <div class="flex-fill">
                                <button type="button" aria-label="anchor"
                                    class="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                    <i class="ri-heart-fill"></i>
                                </button>
                            </div>
                            <div>
                                <span class="badge nft-like-badge text-fixed-white"><i
                                        class="ri-heart-fill me-1 text-danger align-middle"></i>0.47k</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-rounded avatar-md">
                                        <img src="/images/faces/1.jpg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <p class="mb-0 fw-semibold">NFTNinja</p>
                                    <p class="fs-12 text-muted mb-0">@nftninja</p>
                                </div>
                            </div>
                            <p class="mb-0 text-fixed-white nft-auction-time">
                                04hrs : 24m : 38s
                            </p>
                            <p class="fs-15 fw-semibold mb-2"><a href="javascript:void(0);">Digital Dreamscape</a></p>
                            <div class="d-flex flex-wrap align-itesm-center justify-content-between">
                                <div class="fw-semibold">
                                    Highest Bid -
                                </div>
                                <div class="d-flex flex-wrap align-items-center lh-1">
                                    <span class="avatar avatar-xs me-1">
                                        <img src="/images/crypto-currencies/square-color/Ethereum.svg" alt="">
                                    </span>0.24ETH
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>


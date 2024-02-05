<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import liveAuction from "@/components/UI/liveAuction.vue";
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        liveAuction
    },
    data() {
        return {
            dataToPass: {
                current: "Live Action",
                list: [
                    'Apps', 'NFT', 'Live Action'
                ]
            },
            liveAuctionData: [
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/4.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.47', image: `${import.meta.env.BASE_URL}/images/faces/1.jpg`, name: 'NFTNinja', cId: '@nftninja', title: 'Digital Dreamscape', subtitle: 'Highest Bid', price: '0.24' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/30.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.19', image: `${import.meta.env.BASE_URL}/images/faces/2.jpg`, name: 'ArtTechie', cId: '@arttechie', title: 'Neo-Nebulae', subtitle: 'Highest Bid', price: '0.32' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/31.png`, auctionTime: '04hrs : 24m : 38s', likes: '2.05', image: `${import.meta.env.BASE_URL}/images/faces/3.jpg`, name: 'BitMaster', cId: '@bit_master', title: 'Chromatic Chaos', subtitle: 'Highest Bid', price: '0.19' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/2.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.19k', image: `${import.meta.env.BASE_URL}/images/faces/4.jpg`, name: 'CyberCanvas', cId: '@cybercanvas', title: 'Surreal Synthesis', subtitle: 'Highest Bid', price: '0.11' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/33.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.65', image: `${import.meta.env.BASE_URL}/images/faces/5.jpg`, name: 'DigitalDreamer', cId: '@d_dreamer', title: 'Virtual Visions', subtitle: 'Highest Bid', price: '0.10' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/3.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.52', image: `${import.meta.env.BASE_URL}/images/faces/6.jpg`, name: 'PixelProphet', cId: '@pixelprophet', title: 'Electric Euphoria', subtitle: 'Highest Bid', price: '0.45' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/33.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.55', image: `${import.meta.env.BASE_URL}/images/faces/7.jpg`, name: 'TechnoTalent', cId: '@techno_t', title: 'Crypto Cosmos', subtitle: 'Highest Bid', price: '0.38' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/5.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.75', image: `${import.meta.env.BASE_URL}/images/faces/8.jpg`, name: 'PixelMaestro', cId: '@pixelmaestro', title: 'Pixel Prism', subtitle: 'Highest Bid', price: '0.23' },
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-9 col-lg-8">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <div class="nft-tag nft-tag-primary active">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-world fs-20"></i></span>
                    <span class="nft-tag-text">All</span>
                </div>
                <div class="nft-tag nft-tag-secondary">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-flame fs-20"></i></span>
                    <span class="nft-tag-text">New Trends</span>
                </div>
                <div class="nft-tag nft-tag-info">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-palette fs-20"></i></span>
                    <span class="nft-tag-text">Art Work</span>
                </div>
                <div class="nft-tag nft-tag-success">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-device-gamepad-2 fs-20"></i></span>
                    <span class="nft-tag-text">Games</span>
                </div>
                <div class="nft-tag nft-tag-danger">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-tie fs-20"></i></span>
                    <span class="nft-tag-text">Fashion</span>
                </div>
                <div class="nft-tag nft-tag-warning">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-music fs-20"></i></span>
                    <span class="nft-tag-text">Music</span>
                </div>
                <div class="nft-tag nft-tag-dark">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-gift fs-20"></i></span>
                    <span class="nft-tag-text">Others</span>
                </div>
            </div>
            <div class="row">
                <h6 class="fw-semibold mb-3">Live Auction:</h6>
                <liveAuction :liveAuctionData=liveAuctionData></liveAuction>
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-end mb-4">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-4">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Featured Creators
                            </div>
                            <div>
                                <button class="btn btn-primary-light btn-sm btn-wave">View All</button>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/nft-images/2.png" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Joseph Smith<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@josephsmith</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <span class="d-block fw-semibold text-success">+18.93ETH</span>
                                            <span class="d-block text-muted fs-11">22 NFT's</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/nft-images/18.png" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Elisha Sean<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@elishasean</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <span class="d-block fw-semibold text-success">+12.45ETH</span>
                                            <span class="d-block text-muted fs-11">17 NFT's</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/nft-images/8.png" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Json Taylor<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@jsontaylor</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <span class="d-block fw-semibold text-success">+11.25ETH</span>
                                            <span class="d-block text-muted fs-11">15 NFT's</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/nft-images/11.png" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Julia Camo<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@juliacamo</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <span class="d-block fw-semibold text-success">+10.48ETH</span>
                                            <span class="d-block text-muted fs-11">14 NFT's</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/nft-images/22.png" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Charles Achilles<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">@charlesachilles</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <span class="d-block fw-semibold text-success">+9.58ETH</span>
                                            <span class="d-block text-muted fs-11">12 NFT's</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md avatar-rounded me-2">
                                                    <img src="/images/nft-images/31.png" alt="">
                                                </span>
                                            </div>
                                            <div class="align-items-center">
                                                <p class="mb-0 fw-semibold">Amanda Nanes<i
                                                        class="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                <span class="fs-12 text-muted">amandananes@</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <span class="d-block fw-semibold text-success">+7.67ETH</span>
                                            <span class="d-block text-muted fs-11">11 NFT's</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card custom-card overflow-hidden">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Recent Activity
                            </div>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Today<i class="ri-arrow-down-s-line align-middle ms-1"></i>
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
                                    <div class="d-flex gap-3 align-items-center flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-xl">
                                                <img src="/images/nft-images/31.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <div class="mb-1"><a href="javascript:void(0);"
                                                    class="fw-semibold">DreamSpace</a><span
                                                    class="fs-12 text-muted ms-2 d-inline-block">24 mins ago</span></div>
                                            <div class="fs-13">Purchsed from you by <a class="text-decoration-underline"
                                                    href="javascript:void(0);">Mitchell</a> for <span
                                                    class="text-success fw-semibold fs-12">0.57ETH</span>.</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex gap-3 align-items-center flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-xl">
                                                <img src="/images/nft-images/25.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <div class="mb-1"><span class="fw-semibold">DreamSpace</span><span
                                                    class="fs-12 text-muted ms-2 d-inline-block">16 mins ago</span></div>
                                            <div class="fs-13">You started following mark zensberg.</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex gap-3 align-items-center flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-xl">
                                                <img src="/images/nft-images/21.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <div class="mb-1"><span class="fw-semibold">Neo Nebulae</span><span
                                                    class="fs-12 text-muted ms-2 d-inline-block">5 mins ago</span></div>
                                            <div class="fs-13">You showed interest in purchasing <a
                                                    href="javascript:void(0);"
                                                    class="fs-12 text-warning fw-semibold">NeoNebulae</a>.</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="d-flex gap-3 align-items-center flex-wrap">
                                        <div class="lh-1">
                                            <span class="avatar avatar-xl">
                                                <img src="/images/nft-images/26.png" alt="">
                                            </span>
                                        </div>
                                        <div>
                                            <div class="mb-1"><span class="fw-semibold">Neo Nebulae</span><span
                                                    class="fs-12 text-muted ms-2 d-inline-block">16 mins ago</span></div>
                                            <div class="fs-13">Purchased from <a href="javascript:void(0);"
                                                    class="text-decoration-underline">CyberCanvas</a> for <span
                                                    class="fw-semibold fs-12 text-pink">1.345ETH</span>.</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>


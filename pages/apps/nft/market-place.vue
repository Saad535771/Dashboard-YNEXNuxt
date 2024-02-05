<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import marketPlace from "@/components/UI/marketPlace.vue";
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        marketPlace
    },
    data() {
        return {
            dataToPass: {
                current: "Market Place",
                list: [
                    'Apps', 'NFT', 'Market Place'
                ]
            },
            marketPlaceData: [
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/18.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.47', image: `${import.meta.env.BASE_URL}/images/faces/1.jpg`, name: 'NFTNinja', cId: '@nftninja', title: 'Digital Dreamscape', subtitle: 'Highest Bid', price: '0.24' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/19.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.19', image: `${import.meta.env.BASE_URL}/images/faces/2.jpg`, name: 'ArtTechie', cId: '@arttechie', title: 'Neo-Nebulae', subtitle: 'Highest Bid', price: '0.32' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/20.png`, auctionTime: '04hrs : 24m : 38s', likes: '2.05', image: `${import.meta.env.BASE_URL}/images/faces/3.jpg`, name: 'BitMaster', cId: '@bit_master', title: 'Chromatic Chaos', subtitle: 'Highest Bid', price: '0.19' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/21.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.19', image: `${import.meta.env.BASE_URL}/images/faces/4.jpg`, name: 'CyberCanvas', cId: '@cybercanvas', title: 'Surreal Synthesis', subtitle: 'Highest Bid', price: '0.11' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/22.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.65', image: `${import.meta.env.BASE_URL}/images/faces/5.jpg`, name: 'DigitalDreamer', cId: '@d_dreamer', title: 'Virtual Visions', subtitle: 'Highest Bid', price: '0.10' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/23.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.52', image: `${import.meta.env.BASE_URL}/images/faces/6.jpg`, name: 'PixelProphet', cId: '@pixelprophet', title: 'Electric Euphoria', subtitle: 'Highest Bid', price: '0.45' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/24.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.55', image: `${import.meta.env.BASE_URL}/images/faces/7.jpg`, name: 'TechnoTalent', cId: '@techno_t', title: 'Crypto Cosmos', subtitle: 'Highest Bid', price: '0.38' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/25.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.75', image: `${import.meta.env.BASE_URL}/images/faces/8.jpg`, name: 'PixelMaestro', cId: '@pixelmaestro', title: 'Pixel Prism', subtitle: 'Highest Bid', price: '0.23' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/26.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.83', image: `${import.meta.env.BASE_URL}/images/faces/9.jpg`, name: 'BitBard', cId: '@bitbard', title: 'Meta-Morphosis', subtitle: 'Highest Bid', price: '0.38' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/27.png`, auctionTime: '04hrs : 24m : 38s', likes: '0.16', image: `${import.meta.env.BASE_URL}/images/faces/10.jpg`, name: 'CryptoCraft', cId: '@cryptocraft', title: 'Virtual Veracity', subtitle: 'Highest Bid', price: '0.15' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/28.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.38', image: `${import.meta.env.BASE_URL}/images/faces/11.jpg`, name: 'ArtWizard', cId: '@artwizard', title: 'Quantum Quirk', subtitle: 'Highest Bid', price: '0.33' },
                { bg: `${import.meta.env.BASE_URL}/images/nft-images/29.png`, auctionTime: '04hrs : 24m : 38s', likes: '1.32', image: `${import.meta.env.BASE_URL}/images/faces/12.jpg`, name: 'DigitalMuse', cId: '@digitalmuse', title: 'Cybernetic Collage', subtitle: 'Highest Bid', price: '0.59' },
            ]
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
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div>
                            <ul class="nav nav-tabs nav-tabs-header mb-0" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-all" aria-selected="true">All</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-art"
                                        aria-selected="false" tabindex="-1">Art</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-gaming" aria-selected="false" tabindex="-1">Gaming</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-domain" aria-selected="false" tabindex="-1">Domain</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-music" aria-selected="false" tabindex="-1">Music</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-realestate" aria-selected="false" tabindex="-1">Real Estate</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-sports" aria-selected="false" tabindex="-1">Sports</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-fashion" aria-selected="false" tabindex="-1">Fashion</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-avatars" aria-selected="false" tabindex="-1">Avatars</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-memes" aria-selected="false" tabindex="-1">Memes</a>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-list">
                            <button type="button" class="btn btn-sm btn-secondary btn-wave">Filters</button>
                            <a href="javascript:void(0);" class="btn btn-sm btn-wave btn-primary waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New Collection</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">High - Low</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Low - High</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="tab-content">
                <div class="tab-pane show active p-0 border-0" id="nft-all" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData"></marketPlace>
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
                <div class="tab-pane p-0" id="nft-art" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(0, 3)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-gaming" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(3, 5)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-domain" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(4, 5)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-music" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(6, 7)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-realestate" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(7, 8)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-sports" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(8, 9)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-fashion" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(9, 10)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-avatars" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(10, 11)"></marketPlace>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-memes" role="tabpanel">
                    <div class="row">
                        <marketPlace :marketPlaceData="marketPlaceData.slice(11, 12)"></marketPlace>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>

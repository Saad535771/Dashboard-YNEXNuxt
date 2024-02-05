<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { productsList } from '@/data/ecommerce/products.js';
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
                current: "Wishlist",
                list: [
                    'Pages', 'Ecommerce', 'Wishlist'
                ]
            },
            productsList
        };
    },
    methods: {
        RemoveEle(item: any) {
            this.productsList = this.productsList.filter(e => e.id != item.id);
        }
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-sm-flex align-items-center justify-content-between">
                    <div class="fs-15 mb-sm-0 mb-2">Total <span class="badge bg-success">12</span> products are wishlisted
                    </div>
                    <div class="d-flex" role="search">
                        <input class="form-control form-control-sm me-2" type="search" placeholder="Search"
                            aria-label="Search">
                        <button class="btn btn-sm btn-light" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item in productsList" class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card product-card">
                <div class="card-body">
                    <a href="javascript:void(0)" class="product-image">
                        <img :src="item.image" class="card-img mb-3" alt="...">
                    </a>
                    <div class="product-icons" @click="RemoveEle(item)">
                        <a href="javascript:void(0);" class="wishlist btn-delete"><i class="ri-close-line"></i></a>
                    </div>
                    <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">
                        {{ item.title }}<span class="float-end text-warning fs-12">{{ item.rating }}<i
                                class="ri-star-s-fill align-middle ms-1"></i></span></p>
                    <p class="product-description fs-11 text-muted mb-2">{{ item.description }}</p>
                    <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between">
                        <span>${{ item.price }}<span
                                class="text-muted text-decoration-line-through ms-1 op-6 d-inline-block">${{ item.actualPrice }}</span></span><span
                            class="badge float-end fs-10" :class="item.badgeClass">{{ item.badge }}</span></p>
                    <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                        <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price ${{ item.price }}
                    </p>
                </div>
                <div class="card-footer text-center">
                    <NuxtLink to="/pages/ecommerce/cart" class="btn btn-primary-light m-1"><i
                            class="ri-shopping-cart-2-line me-2 align-middle"></i>Move To Cart</NuxtLink>
                    <NuxtLink to="/pages/ecommerce/product-details" class="btn btn-success-light m-1"><i
                            class="ri-eye-line me-2 align-middle"></i>View Product</NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <!--End::row-1 -->

    <ul class="pagination justify-content-end">
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
</template>

<style scoped></style>


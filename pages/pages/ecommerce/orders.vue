<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { orderedProducts } from '@/data/ecommerce/products.js';
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
                current: "Orders",
                list: [
                    'Pages', 'Ecommerce', 'Orders'
                ]
            },
            orderedProducts,
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
                <div class="card-body d-flex align-items-center flex-wrap">
                    <div class="flex-fill">
                        <span class="mb-0 fs-14 text-muted">Total number of orders placed upto now : <span
                                class="fw-semibold text-success">12</span></span>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle m-1" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Sort By
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="javascript:void(0);">Date</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Price</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Category</a></li>
                        </ul>
                    </div>
                    <div class="d-flex align-items-center m-1" role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-light ms-2" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item in orderedProducts" class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <div class="card-header d-block">
                    <div class="d-sm-flex d-block align-items-center">
                        <div class="me-2">
                            <span class="avatar bg-light avatar-md mb-1">
                                <img :src="item.image" alt="">
                            </span>
                        </div>
                        <div class="flex-fill">
                            <a href="javascript:void(0)">
                                <span class="fs-14 fw-semibold">{{ item.product }}</span>
                            </a>
                            <span class="d-block text-success">${{ item.price }}</span>
                        </div>
                        <div class="text-sm-center">
                            <span class="fs-14 fw-semibold">Order Id :</span>
                            <span class="d-sm-block">#{{ item.orderId }}</span>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="orders-delivery-address">
                            <p class="mb-1 fw-semibold">Delivery Address</p>
                            <p class="text-muted mb-0">
                                {{ item.deliveryAddress }}
                            </p>
                        </div>
                        <div v-if="item.deliveryData.length" class="delivery-date text-center ms-auto">
                            <span class="fs-18 text-primary fw-bold">{{ item.deliveryData[0] }}</span>
                            <span class="fw-semibold">{{ item.deliveryData[1] }}</span>
                        </div>
                        <div v-if="item.deliveryStatus" class="ms-auto">
                            <span class="badge" :class="item.deliveryStatusClass">{{ item.deliveryStatus }}</span>
                        </div>
                    </div>
                </div>
                <div v-if="item.status" class="card-footer d-sm-flex d-block align-items-center justify-content-between">
                    <div><span class="text-muted me-2">Status:</span><span class="badge " :class="item.statusClass">{{
                        item.status }}</span></div>
                    <div class="mt-sm-0 mt-2">
                        <button class="btn btn-sm btn-danger-light">Cancel Order</button>
                    </div>
                </div>
                <div v-if="item.deliveredOn"
                    class="card-footer d-sm-flex d-block justify-content-between align-items-center">
                    <div class="fs-11">
                        <span>Delivered on : </span>
                        <span class="fw-semibold">{{ item.deliveredOn }}</span>
                    </div>
                    <div class="mt-sm-0 mt-2">
                        <button class="btn btn-sm btn-primary-light">Rate Product<i
                                class="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                    </div>
                </div>

                <div v-if="item.deliveryStatus == 'Cancelled'" class="card-footer">
                    <div class="float-end">
                        <button class="btn btn-sm btn-light">Buy Now</button>
                    </div>
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


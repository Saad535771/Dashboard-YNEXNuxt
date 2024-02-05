<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import quantity from "@/components/UI/quantity.vue";
import { cardList } from "@/data/ecommerce/cart.js";
import 'sweetalert2/dist/sweetalert2.min.css';
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        quantity
    },
    data() {
        return {
            dataToPass: {
                current: "Cart",
                list: [
                    'Pages', 'Ecommerce', 'Cart'
                ]
            },
            cardList
        };
    },
    methods: {
        RemoveEle(item: any) {
            this.cardList = this.cardList.filter(e => e.id != item.id);
        },
        multipleButtonsSwal(item:any) {
            this.$swal({
                title: 'Are you sure?',
                text : 'You won\'t be able to revert this!',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
            }).then((result: any) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    this.RemoveEle(item);
                    this.$swal.fire('Deleted!', 'Your file has been deleted.', 'success')
                } 
            });
        },
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9">
            <div class="card custom-card" id="cart-container-delete">
                <div class="card-header">
                    <div class="card-title">
                        Cart Items
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered text-nowrap">
                            <thead>
                                <tr>
                                    <th>
                                        Product Name
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cardList">
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="me-3">
                                                <span class="avatar avatar-xxl bg-light">
                                                    <img :src="item.image" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <div class="mb-1 fs-14 fw-semibold">
                                                    <a href="javascript:void(0);">{{ item.product }}</a>
                                                </div>
                                                <div class="mb-1">
                                                    <span class="me-1">Size:</span><span class="fw-semibold text-muted">{{
                                                        item.size }}</span>
                                                </div>
                                                <div class="mb-1">
                                                    <span class="me-1">Color:</span><span class="fw-semibold text-muted">{{
                                                        item.color }}<span v-if="item.badge" class="badge  ms-3"
                                                            :class="'bg-' + item.badgeClass + '-transparent'">{{
                                                                item.badge }}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="fw-semibold fs-14">
                                            ${{ item.price }}
                                        </div>
                                    </td>
                                    <td class="product-quantity-container">
                                        <div class="input-group rounded flex-nowrap">
                                            <quantity placeholder="Quantity" name="first" :initialValue="item.quanity" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="fs-14 fw-semibold">
                                            ${{ item.price * item.quanity }}
                                        </div>
                                    </td>
                                    <td>
                                        <NuxtLink to="/pages/ecommerce/wishlist" class="btn btn-icon btn-success me-1">
                                            <v-tooltip activator="parent" location="top">Add To Wishlist</v-tooltip><i
                                                class="ri-heart-line"></i>
                                        </NuxtLink>
                                        <button class="btn btn-icon btn-danger btn-delete" @click="multipleButtonsSwal(item)">
                                            <v-tooltip activator="parent" location="top">Remove From cart</v-tooltip>
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card custom-card d-none" id="cart-empty-cart">
                <div class="card-header">
                    <div class="card-title">
                        Empty Cart
                    </div>
                </div>
                <div class="card-body">
                    <div class="cart-empty text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-muted" width="24" height="24"
                            viewbox="0 0 24 24">
                            <path
                                d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" />
                            <path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" />
                            <path
                                d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" />
                            <path
                                d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" />
                        </svg>
                        <h3 class="fw-bold mb-1">Your Cart is Empty</h3>
                        <h5 class="mb-3">Add some items to make me happy :)</h5>
                        <a href="javascript:void(0);" class="btn btn-primary btn-wave m-3" data-abc="true">continue shopping
                            <i class="bi bi-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3">
            <div class="card custom-card">
                <div class="p-3 border-bottom d-block">
                    <div class="alert alert-primary text-center" role="alert">
                        <span class="text-default">Sale Ends in</span>
                        <vue-countdown :time="2 * 12 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                            <span class="fw-semibold fs-14 text-primary ms-1">{{ hours }}
                                Hours : {{ minutes }} Minutes: {{ seconds }} seconds</span>
                        </vue-countdown>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="p-3 border-bottom border-block-end-dashed">
                        <p class="mb-2 fw-semibold">Delivery:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1">
                            <label class="btn btn-outline-light text-default" for="btnradio1">Free Delivery</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" checked>
                            <label class="btn btn-outline-light text-default" for="btnradio2">Express Delivery</label>
                        </div>
                        <p class="mb-0 mt-2 fs-12 text-muted">Delivered by 24,Nov 2022</p>
                    </div>
                    <div class="p-3 border-bottom border-block-end-dashed">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control form-control-sm" placeholder="Coupon Code"
                                aria-label="coupon-code" aria-describedby="coupons">
                            <button class="btn btn-primary input-group-text" id="coupons">Apply</button>
                        </div>
                        <a href="javascript:void(0);" class="fs-12 text-success">10% off on first purchase</a>
                    </div>
                    <div class="p-3 border-bottom border-block-end-dashed">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="text-muted op-7">Sub Total</div>
                            <div class="fw-semibold fs-14">$1,299</div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="text-muted op-7">Discount</div>
                            <div class="fw-semibold fs-14 text-success">10% - $129</div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="text-muted op-7">Delivery Charges</div>
                            <div class="fw-semibold fs-14 text-danger">- $49</div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div class="text-muted op-7">Service Tax (18%)</div>
                            <div class="fw-semibold fs-14">- $169</div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="text-muted op-7">Total :</div>
                            <div class="fw-semibold fs-14 text-primary"> $1,387</div>
                        </div>
                    </div>
                    <div class="p-3 d-grid">
                        <NuxtLink to="/pages/ecommerce/checkout" class="btn btn-primary btn-wave mb-2">Proceed To Checkout
                        </NuxtLink>
                        <NuxtLink to="/pages/ecommerce/products" class="btn btn-light btn-wave">Countinue Shopping
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>


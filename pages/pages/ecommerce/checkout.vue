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
                current: "Checkout",
                list: [
                    'Pages', 'Ecommerce', 'Checkout'
                ]
            },
            citySelecteValue: null,
            citySelecteOptions: ['Georgetown', 'Alexandria', 'Rockville', 'Frederick'],
            stateSelecteValue: null,
            stateSelecteOptions: ['Washington,D.C', 'California', 'Texas', 'Alaska'],
        };
    },
    methods: {
        triggerButtonClick(refName: string) {
            const element = this.$refs[refName] as HTMLElement;
            if (element) {
                element.click(); // Trigger the click event
            }
        }
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xl-9">
                <div class="card custom-card">
                    <div class="card-body p-0 product-checkout">
                        <ul class="nav nav-tabs tab-style-2 d-sm-flex d-block border-bottom border-block-end-dashed"
                            id="myTab1" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button ref="shipping" class="nav-link active" id="order-tab" data-bs-toggle="tab"
                                    data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab"
                                    aria-selected="true"><i class="ri-truck-line me-2"></i>Shipping</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button ref="details" class="nav-link" id="confirmed-tab" data-bs-toggle="tab"
                                    data-bs-target="#confirm-tab-pane" type="button" role="tab"
                                    aria-controls="confirmed-tab" aria-selected="false"><i
                                        class="ri-user-3-line me-2"></i>Personal Details</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button ref="payment" class="nav-link" id="shipped-tab" data-bs-toggle="tab"
                                    data-bs-target="#shipped-tab-pane" type="button" role="tab" aria-controls="shipped-tab"
                                    aria-selected="false"><i class="ri-bank-card-line me-2"></i>Payment</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button ref="confirmation" class="nav-link" id="delivered-tab" data-bs-toggle="tab"
                                    data-bs-target="#delivery-tab-pane" type="button" role="tab"
                                    aria-controls="delivered-tab" aria-selected="false"><i
                                        class="ri-checkbox-circle-line me-2"></i>Confirmation</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active border-0 p-0" id="order-tab-pane" role="tabpanel"
                                aria-labelledby="order-tab-pane" tabindex="0">
                                <div class="p-4">
                                    <p class="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
                                    <div
                                        class="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                        <div>Shipping Address :</div>
                                        <div class="mt-sm-0 mt-2">
                                            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                                data-bs-target="#modal-new-address"><i
                                                    class="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add
                                                New Address</button>
                                            <div class="modal fade" id="modal-new-address" tabindex="-1"
                                                aria-labelledby="modal-new-address" aria-hidden="true">
                                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h6 class="modal-title" id="staticBackdropLabel">New Address
                                                            </h6>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row gy-3">
                                                                <div class="col-xl-6">
                                                                    <label for="fullname-new" class="form-label">Full
                                                                        Name</label>
                                                                    <input type="text" class="form-control"
                                                                        id="fullname-new" placeholder="Full Name">
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <label for="email-new" class="form-label">Email</label>
                                                                    <input type="email" class="form-control" id="email-new"
                                                                        placeholder="email">
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <label for="phonenumber-new" class="form-label">Phone
                                                                        Number</label>
                                                                    <input type="number" class="form-control"
                                                                        id="phonenumber-new" placeholder="Phone">
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <label for="address-new"
                                                                        class="form-label">Address</label>
                                                                    <input type="text" class="form-control" id="address-new"
                                                                        placeholder="Address">
                                                                </div>
                                                                <div class="col-xl-12">
                                                                    <div class="row">
                                                                        <div class="col-xl-3">
                                                                            <label for="pincode-new"
                                                                                class="form-label">Pincode</label>
                                                                            <input type="number" class="form-control"
                                                                                id="pincode-new" placeholder="Pincode">
                                                                        </div>
                                                                        <div class="col-xl-3">
                                                                            <label for="city-new"
                                                                                class="form-label">City</label>
                                                                            <input type="text" class="form-control"
                                                                                id="city-new" placeholder="City">
                                                                        </div>
                                                                        <div class="col-xl-3">
                                                                            <label for="state-new"
                                                                                class="form-label">State</label>
                                                                            <input type="text" class="form-control"
                                                                                id="state-new" placeholder="State">
                                                                        </div>
                                                                        <div class="col-xl-3">
                                                                            <label for="country-new"
                                                                                class="form-label">Country</label>
                                                                            <input type="text" class="form-control"
                                                                                id="country-new" placeholder="Country">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-light"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-success">Save
                                                                Address</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gy-4 mb-4">
                                        <div class="col-xl-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="fullname-add"
                                                    value="Json Taylor" placeholder="Name">
                                                <label for="fullname-add">Full Name</label>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="email-add"
                                                    value="jsontaylor2413@gmail.com" placeholder="name@example.com">
                                                <label for="email-add">Email</label>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control is-valid" id="phoneno-add"
                                                    value="(555) 555-1234" placeholder="1234-XX-XXXX">
                                                <label for="phoneno-add">Phone No</label>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Address Here"
                                                    id="address-add">MIG-1-11,Monroe Street,Washington D.C,USA</textarea>
                                                <label for="address-add">Address</label>
                                            </div>
                                            <div class="form-check mt-1">
                                                <input class="form-check-input form-checked-outline form-checked-success"
                                                    type="checkbox" value="" id="invalidCheck" required checked>
                                                <label class="form-check-label text-success" for="invalidCheck">
                                                    Same as Billing Address ?
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="row gy-2">
                                                <div class="col-xl-3">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control is-valid" id="pincode-add"
                                                            value="20071" placeholder="Name">
                                                        <label for="pincode-add">Pin Code</label>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="city-add"
                                                            value="Georgetown" placeholder="Name">
                                                        <label for="city-add">City</label>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="state-add"
                                                            value="Washington, D.C" placeholder="Name">
                                                        <label for="state-add">State</label>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3">
                                                    <div class="form-floating">
                                                        <input type="text" class="form-control" id="country-add" value="USA"
                                                            placeholder="Name">
                                                        <label for="country-add">Country</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gy-3">
                                        <p class="fs-15 fw-semibold mb-1">Shipping Methods :</p>
                                        <div class="col-xl-6">
                                            <div class="form-check shipping-method-container mb-0">
                                                <input id="shipping-method1" name="shipping-methods" type="radio"
                                                    class="form-check-input" checked>
                                                <div class="form-check-label">
                                                    <div class="d-sm-flex align-items-center justify-content-between">
                                                        <div class="me-2">
                                                            <span class="avatar avatar-md">
                                                                <img src="/images/ecommerce/png/28.png" alt="">
                                                            </span>
                                                        </div>
                                                        <div class="shipping-partner-details me-sm-5 me-0">
                                                            <p class="mb-0 fw-semibold">UPS</p>
                                                            <p class="text-muted fs-11 mb-0">Delivered By 24,Nov 2022</p>
                                                        </div>
                                                        <div class="fw-semibold me-sm-5 me-0">
                                                            $9.99
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="form-check shipping-method-container mb-0">
                                                <input id="shipping-method2" name="shipping-methods" type="radio"
                                                    class="form-check-input">
                                                <div class="form-check-label">
                                                    <div class="d-sm-flex align-items-center justify-content-between">
                                                        <div class="me-2">
                                                            <span class="avatar avatar-md">
                                                                <img src="/images/ecommerce/png/31.png" alt="">
                                                            </span>
                                                        </div>
                                                        <div class="shipping-partner-details me-sm-5 me-0">
                                                            <p class="mb-0 fw-semibold">USPS</p>
                                                            <p class="text-muted fs-11 mb-0">Delivered By 22,Nov 2022</p>
                                                        </div>
                                                        <div class="fw-semibold me-sm-5 me-0">
                                                            $10.49
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="form-check shipping-method-container mb-0">
                                                <input id="shipping-method3" name="shipping-methods" type="radio"
                                                    class="form-check-input">
                                                <div class="form-check-label">
                                                    <div class="d-sm-flex align-items-center justify-content-between">
                                                        <div class="me-2">
                                                            <span class="avatar avatar-md">
                                                                <img src="/images/ecommerce/png/29.png" alt="">
                                                            </span>
                                                        </div>
                                                        <div class="shipping-partner-details me-sm-5 me-0">
                                                            <p class="mb-0 fw-semibold">FedEx</p>
                                                            <p class="text-muted fs-11 mb-0">Delivered Tomorrow</p>
                                                        </div>
                                                        <div class="fw-semibold me-sm-5 me-0">
                                                            $12.29
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="form-check shipping-method-container mb-0">
                                                <input id="shipping-method4" name="shipping-methods" type="radio"
                                                    class="form-check-input">
                                                <div class="form-check-label">
                                                    <div class="d-sm-flex align-items-center justify-content-between">
                                                        <div class="me-2">
                                                            <span class="avatar avatar-md">
                                                                <img src="/images/ecommerce/png/30.png" alt="">
                                                            </span>
                                                        </div>
                                                        <div class="shipping-partner-details me-sm-5 me-0">
                                                            <p class="mb-0 fw-semibold">DHL</p>
                                                            <p class="text-muted fs-11 mb-0">Delivered Today</p>
                                                        </div>
                                                        <div class="fw-semibold me-sm-5 me-0">
                                                            $18.99
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                    <button type="button" class="btn btn-success-light"
                                        @click="triggerButtonClick('details')" id="personal-details-trigger">Personal
                                        Details<i class="ri-user-3-line ms-2 align-middle"></i></button>
                                </div>
                            </div>
                            <div class="tab-pane fade border-0 p-0" id="confirm-tab-pane" role="tabpanel"
                                aria-labelledby="confirm-tab-pane" tabindex="0">
                                <div class="p-4">
                                    <p class="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
                                    <div
                                        class="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                        <div>Personal Details :</div>
                                    </div>
                                    <div class="row gy-4">
                                        <div class="col-xl-6">
                                            <label for="firstname-personal" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="firstname-personal"
                                                placeholder="First Name" value="Json">
                                        </div>
                                        <div class="col-xl-6">
                                            <label for="lastname-personal" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="lastname-personal"
                                                placeholder="Last Name" value="Taylor">
                                        </div>
                                        <div class="col-xl-6">
                                            <label for="email-personal" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email-personal"
                                                placeholder="xyz@example.com" value="">
                                        </div>
                                        <div class="col-xl-6">
                                            <label for="phoneno-personal" class="form-label">Phone no</label>
                                            <input type="text" class="form-control" id="phoneno-personal"
                                                placeholder="(555)-555-1234" value="">
                                        </div>
                                        <div class="col-xxl-2">
                                            <label for="pincode-personal" class="form-label">Pincode</label>
                                            <input type="text" class="form-control" id="pincode-personal"
                                                placeholder="200017" value="">
                                        </div>
                                        <div class="col-xxl-4">
                                            <label for="choices-single-default" class="form-label">City</label>
                                            <VueMultiselect :show-labels="false" v-model="citySelecteValue"
                                                :multiple="false" :options="citySelecteOptions">
                                            </VueMultiselect>
                                        </div>
                                        <div class="col-xxl-4">
                                            <label for="choices-single-default1" class="form-label">State</label>
                                            <VueMultiselect :show-labels="false" v-model="stateSelecteValue"
                                                :multiple="false" :options="stateSelecteOptions">
                                            </VueMultiselect>
                                        </div>
                                        <div class="col-xxl-2">
                                            <label for="country-personal" class="form-label">Country</label>
                                            <input type="text" class="form-control" id="country-personal"
                                                placeholder="Country" value="USA">
                                        </div>
                                        <div class="col-xl-12">
                                            <label for="text-area" class="form-label">Address</label>
                                            <textarea class="form-control" id="text-area" rows="4"></textarea>
                                            <div class="form-check mt-1">
                                                <input class="form-check-input form-checked-outline form-checked-success"
                                                    type="checkbox" value="" id="invalidCheck1" required checked>
                                                <label class="form-check-label text-success fs-12" for="invalidCheck1">
                                                    Same as Shipping Address Address ?
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                    <button type="button" class="btn btn-danger-light m-1" id="back-shipping-trigger"
                                        @click="triggerButtonClick('shipping')"><i
                                            class="ri-truck-line me-2 align-middle"></i>Back To
                                        Shipping</button>
                                    <button type="button" class="btn btn-success-light m-1" id="payment-trigger"
                                        @click="triggerButtonClick('payment')">Continue To
                                        Payment<i
                                            class="bi bi-credit-card-2-front align-middle ms-2"></i></button>
                                </div>
                            </div>
                            <div class="tab-pane fade border-0 p-0" id="shipped-tab-pane" role="tabpanel"
                                aria-labelledby="shipped-tab-pane" tabindex="0">
                                <div class="p-4">
                                    <p class="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
                                    <div
                                        class="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                        <div>Payment Details :</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="mb-3">
                                                <label class="form-label">Delivery Address</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Address"
                                                        aria-label="address" aria-describedby="payment-address"
                                                        value="MIG-1-11,Monroe Street,Washington D.C,USA">
                                                    <button type="button" class="btn btn-info-light input-group-text"
                                                        id="payment-address">Change</button>
                                                </div>
                                            </div>
                                            <div class="card custom-card border shadow-none mb-3">
                                                <div class="card-header">
                                                    <div class="card-title">
                                                        Payment Methods
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="btn-group mb-3 d-sm-flex d-block" role="group"
                                                        aria-label="Basic radio toggle button group">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            id="btnradio1">
                                                        <label class="btn btn-outline-light text-default mt-sm-0 mt-1"
                                                            for="btnradio1">C.O.D(Cash on delivery)</label>
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            id="btnradio2">
                                                        <label class="btn btn-outline-light text-default mt-sm-0 mt-1"
                                                            for="btnradio2">UPI</label>
                                                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3"
                                                            checked>
                                                        <label class="btn btn-outline-light text-default mt-sm-0 mt-1"
                                                            for="btnradio3">Credit/Debit Card</label>
                                                    </div>
                                                    <div class="row gy-3">
                                                        <div class="col-xl-12">
                                                            <label for="payment-card-number" class="form-label">Card
                                                                Number</label>
                                                            <input type="text" class="form-control" id="payment-card-number"
                                                                placeholder="Card Number" value="1245 - 5447 - 8934 - XXXX">
                                                        </div>
                                                        <div class="col-xl-12">
                                                            <label for="payment-card-name" class="form-label">Name On
                                                                Card</label>
                                                            <input type="text" class="form-control" id="payment-card-name"
                                                                placeholder="Name On Card" value="JSON TAYLOR">
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <label for="payment-cardexpiry-date"
                                                                class="form-label">Expiration Date</label>
                                                            <input type="text" class="form-control"
                                                                id="payment-cardexpiry-date" placeholder="MM/YY"
                                                                value="08/2024">
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <label for="payment-cvv" class="form-label">CVV</label>
                                                            <input type="text" class="form-control" id="payment-cvv"
                                                                placeholder="XXX" value="341">
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <label for="payment-security" class="form-label">O.T.P</label>
                                                            <input type="text" class="form-control" id="payment-security"
                                                                placeholder="XXXXXX" value="183467">
                                                            <label for="payment-security"
                                                                class="form-label mt-1 text-success fs-11"><sup><i
                                                                        class="ri-star-s-fill"></i></sup>Do not share O.T.P
                                                                with anyone</label>
                                                        </div>
                                                        <div class="col-xl-12">
                                                            <div class="form-check">
                                                                <input class="form-check-input form-checked-success"
                                                                    type="checkbox" value="" id="payment-card-save" checked>
                                                                <label class="form-check-label" for="payment-card-save">
                                                                    Save this card
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="row gy-3">
                                                        <p class="fs-15 fw-semibold mb-1">Saved Cards :</p>
                                                        <div class="col-xl-6">
                                                            <div class="form-check payment-card-container mb-0 lh-1">
                                                                <input id="payment-card1" name="payment-cards" type="radio"
                                                                    class="form-check-input" checked>
                                                                <div class="form-check-label">
                                                                    <div
                                                                        class="d-sm-flex d-block align-items-center justify-content-between">
                                                                        <div class="me-2 lh-1">
                                                                            <span class="avatar avatar-md">
                                                                                <img src="/images/ecommerce/png/26.png"
                                                                                    alt="">
                                                                            </span>
                                                                        </div>
                                                                        <div class="saved-card-details">
                                                                            <p class="mb-0 fw-semibold">XXXX - XXXX - XXXX -
                                                                                7646</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="form-check payment-card-container mb-0 lh-1">
                                                                <input id="payment-card2" name="payment-cards" type="radio"
                                                                    class="form-check-input">
                                                                <div class="form-check-label">
                                                                    <div
                                                                        class="d-sm-flex d-block align-items-center justify-content-between">
                                                                        <div class="me-2 lh-1">
                                                                            <span class="avatar avatar-md">
                                                                                <img src="/images/ecommerce/png/27.png"
                                                                                    alt="">
                                                                            </span>
                                                                        </div>
                                                                        <div class="saved-card-details">
                                                                            <p class="mb-0 fw-semibold">XXXX - XXXX - XXXX -
                                                                                9556</p>
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
                                <div
                                    class="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                    <button type="button" class="btn btn-danger-light m-1" id="back-personal-trigger"
                                        @click="triggerButtonClick('details')"><i
                                            class="ri-user-3-line me-2 align-middle"></i>Back To Personal
                                        Info</button>
                                    <button type="button" class="btn btn-success-light m-1" id="continue-payment-trigger"
                                        @click="triggerButtonClick('confirmation')">Continue Payment<i
                                            class="bi bi-credit-card-2-front align-middle ms-2"></i></button>
                                </div>
                            </div>
                            <div class="tab-pane fade border-0 p-0" id="delivery-tab-pane" role="tabpanel"
                                aria-labelledby="delivery-tab-pane" tabindex="0">
                                <div class="p-5 checkout-payment-success my-3">
                                    <div class="mb-5">
                                        <h5 class="text-success fw-semibold">Payment Successful...&#129309;</h5>
                                    </div>
                                    <div class="mb-5">
                                        <img src="/images/ecommerce/png/24.png" alt="" class="img-fluid">
                                    </div>
                                    <div class="mb-4">
                                        <p class="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from <a
                                                class="link-success" href="javascript:void(0);"><u>Track Order</u></a></p>
                                        <p class="text-muted">Thankyou for shopping with us.</p>
                                    </div>
                                    <NuxtLink to="/pages/ecommerce/products" class="btn btn-success">Continue Shopping<i
                                            class="bi bi-cart ms-2"></i></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title me-1">Order Summary</div><span
                            class="badge bg-primary-transparent rounded-pill">02</span>
                    </div>
                    <div class="card-body p-0">
                        <ul class="list-group mb-0 border-0 rounded-0">
                            <li class="list-group-item border-top-0 border-start-0 border-end-0">
                                <div class="d-flex align-items-center flex-wrap">
                                    <div class="me-2">
                                        <span class="avatar avatar-lg bg-light">
                                            <img src="/images/ecommerce/png/1.png" alt="">
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <p class="mb-0 fw-semibold">Blue sweatshirt</p>
                                        <p class="mb-0 text-muted fs-12">Quantity : 2 <span
                                                class="badge bg-success-transparent ms-3">30% Off</span></p>
                                    </div>
                                    <div>
                                        <p class="mb-0 text-end">
                                            <a aria-label="anchor" href="javascript:void(0)">
                                                <i class="ri-close-line fs-16 text-muted"></i>
                                            </a>
                                        </p>
                                        <p class="mb-0 fs-14 fw-semibold">$189<span
                                                class="ms-1 text-muted fs-11 d-inline-block"><s>$329</s></span></p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item  border-bottom border-block-end-dashed border-start-0 border-end-0">
                                <div class="d-flex align-items-center flex-wrap">
                                    <div class="me-2">
                                        <span class="avatar avatar-lg bg-light">
                                            <img src="/images/ecommerce/png/7.png" alt="">
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <p class="mb-0 fw-semibold">Denim Jacket</p>
                                        <p class="mb-0 text-muted fs-12">Quantity : 1 <span
                                                class="badge bg-success-transparent ms-3">10% Off</span></p>
                                    </div>
                                    <div>
                                        <p class="mb-0 text-end">
                                            <a aria-label="anchor" href="javascript:void(0)">
                                                <i class="ri-close-line fs-16 text-muted"></i>
                                            </a>
                                        </p>
                                        <p class="mb-0 fs-14 fw-semibold">$129<span
                                                class="ms-1 text-muted fs-11 d-inline-block"><s>$139</s></span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="p-3 border-bottom border-block-end-dashed">
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div class="fs-12 fw-semibold bg-primary-transparent p-1 rounded">SPRUKO25</div>
                                <div class="text-success">COUPON APPLIED</div>
                            </div>
                        </div>
                        <div class="p-3 border-bottom border-block-end-dashed">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="text-muted op-7">Sub Total</div>
                                <div class="fw-semibold fs-14">$318</div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="text-muted op-7">Discount</div>
                                <div class="fw-semibold fs-14 text-success">10% - $31.8</div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <div class="text-muted op-7">Delivery Charges</div>
                                <div class="fw-semibold fs-14 text-danger">- $29</div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="text-muted op-7">Service Tax (18%)</div>
                                <div class="fw-semibold fs-14">- $45.29</div>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="fs-15">Total :</div>
                                <div class="fw-semibold fs-16 text-dark"> $1,387</div>
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


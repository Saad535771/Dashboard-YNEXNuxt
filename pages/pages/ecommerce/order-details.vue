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
                current: "Order Details",
                list: [
                    'Pages', 'Ecommerce', 'Order Details'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="card-title">
                                Order No - <span class="text-primary">#SPK-1023</span>
                            </div>
                            <div>
                                <span class="badge bg-primary-transparent">
                                    Estimated delivery : 30,Nov 2022
                                </span>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Tracking No</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-3">
                                                        <span class="avatar avatar-xxl bg-light">
                                                            <img src="/images/ecommerce/png/14.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div class="mb-1 fs-14 fw-semibold">
                                                            <a href="javascript:void(0);">Orange Watch Series 4</a>
                                                        </div>
                                                        <div class="mb-1">
                                                            <span class="me-1">Dial Size:</span><span
                                                                class="text-muted">44mm</span>
                                                        </div>
                                                        <div class="mb-1">
                                                            <span class="me-1">Color:</span><span
                                                                class="text-muted">Metallic Black</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" class="text-primary">SPK1218153635</a></td>
                                            <td>
                                                <span class="fs-15 fw-semibold">$1,249</span>
                                            </td>
                                            <td>1</td>
                                            <td>$1,249</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-3">
                                                        <span class="avatar avatar-xxl bg-light">
                                                            <img src="/images/ecommerce/png/1.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div class="mb-1 fs-14 fw-semibold">
                                                            <a href="javascript:void(0);">DapZem & Co Sweat Shirt</a>
                                                        </div>
                                                        <div class="mb-1">
                                                            <span class="me-1">Size:</span><span
                                                                class="text-muted">Large</span>
                                                        </div>
                                                        <div class="mb-1">
                                                            <span class="me-1">Color:</span><span
                                                                class="text-muted">Grey<span
                                                                    class="badge bg-success ms-3">In Offer</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" class="text-primary">SPK3789423789</a></td>
                                            <td>
                                                <span class="fs-15 fw-semibold">$499</span>
                                            </td>
                                            <td>2</td>
                                            <td>$998</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-3">
                                                        <span class="avatar avatar-xxl bg-light">
                                                            <img src="/images/ecommerce/png/11.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div class="mb-1 fs-14 fw-semibold">
                                                            <a href="javascript:void(0);">Denim Corporation Sweat Shirt</a>
                                                        </div>
                                                        <div class="mb-1">
                                                            <span class="me-1">Size:</span><span
                                                                class="text-muted">Large</span>
                                                        </div>
                                                        <div class="mb-1">
                                                            <span class="me-1">Color:</span><span
                                                                class="text-muted">Orange<span
                                                                    class="badge bg-info ms-3">32% Off</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><a href="javascript:void(0);" class="text-primary">SPK1120324532</a></td>
                                            <td>
                                                <span class="fs-15 fw-semibold">$799</span>
                                            </td>
                                            <td>1</td>
                                            <td>$799</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="2">
                                                <div class="fw-semibold">Total Items :</div>
                                            </td>
                                            <td>
                                                04
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="2">
                                                <div class="fw-semibold">Sub Total :</div>
                                            </td>
                                            <td>
                                                $3,100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="2">
                                                <div class="fw-semibold">Applied Coupon :</div>
                                            </td>
                                            <td>
                                                <span class="badge bg-success-transparent">SPKFIR</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="2">
                                                <div class="fw-semibold">Delivery Fees :</div>
                                            </td>
                                            <td>
                                                <span class="text-danger">+$29</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="2">
                                                <div class="fw-semibold">Total Saved :</div>
                                            </td>
                                            <td>
                                                <span class="fs-14 fw-semibold text-success">$3,799</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="2">
                                                <div class="fw-semibold">Total Price :</div>
                                            </td>
                                            <td>
                                                <span class="fs-16 fw-semibold">$3,129</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer border-top-0">
                            <div class="btn-list float-end">
                                <button class="btn btn-primary btn-wave btn-sm" onclick="javascript:window.print();"><i
                                        class="ri-printer-line me-1 align-middle"></i>Print</button>
                                <button class="btn btn-secondary btn-wave btn-sm"><i
                                        class="ri-share-forward-line me-1 align-middle"></i>Share
                                    Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                User Details
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="d-flex align-items-center border-bottom border-block-end-dashed p-3 flex-wrap">
                                <div class="me-2">
                                    <span class="avatar avatar-lg avatar-rounded">
                                        <img src="/images/faces/9.jpg" alt="">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <p class="mb-0">Json Taylor</p>
                                    <p class="mb-0 text-muted fs-12">jsontaylor2135@gmail.com</p>
                                </div>
                                <div>
                                    <span class="badge bg-primary-transparent">Prime User</span>
                                </div>
                            </div>
                            <div class="p-3 border-bottom border-block-end-dashed">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <span class="fs-14 fw-semibold">Delivery address :</span>
                                    <button class="btn btn-icon btn-wave btn-primary btn-sm"><i
                                            class="ri-pencil-line"></i></button>
                                </div>
                                <p class="mb-2 text-muted"><span class="fw-semibold text-default">Landmark : </span>MIG-1-11
                                </p>
                                <p class="mb-2 text-muted"><span class="fw-semibold text-default">Street : </span>Monroe
                                    Street</p>
                                <p class="mb-2 text-muted"><span class="fw-semibold text-default">City : </span>Georgetown
                                </p>
                                <p class="mb-2 text-muted"><span class="fw-semibold text-default">State :
                                    </span>Washington,D.C</p>
                                <p class="mb-2 text-muted"><span class="fw-semibold text-default">Country : </span>USA</p>
                                <p class="mb-0 text-muted"><span class="fw-semibold text-default">Zipcode : </span>200071
                                </p>
                            </div>
                            <div class="p-3 border-bottom border-block-end-dashed">
                                <div class="mb-3">
                                    <span class="fs-14 fw-semibold">Send updates to :</span>
                                </div>
                                <p class="mb-2 text-muted">
                                    <span class="fw-semibold text-default">Phone : </span>
                                    (555)-0123-1210
                                </p>
                                <p class="mb-0 text-muted">
                                    <span class="fw-semibold text-default">Email : </span>
                                    jsontaylor2134@gmail.com
                                </p>
                            </div>
                            <div class="p-3">
                                <div class="mb-3">
                                    <span class="fs-14 fw-semibold">Order Summary</span>
                                </div>
                                <p class="mb-2 text-muted">
                                    <span class="fw-semibold text-default">Ordered Date</span>
                                    24,Nov 2022
                                </p>
                                <p class="mb-2 text-muted">
                                    <span class="fw-semibold text-default">Ordered Time :</span>
                                    11:47AM
                                </p>
                                <p class="mb-0 text-muted">
                                    <span class="fw-semibold text-default">Payment Interface :</span>
                                    UPI
                                </p>
                            </div>
                        </div>
                        <div class="card-footer">Total
                            <span class="text-success">294 items</span> purchased upto now
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Order Tracking
                    </div>
                    <div class="ms-auto text-success">#SPK1218153635</div>
                </div>
                <div class="card-body">
                    <div class="order-track">
                        <div class="accordion" id="basicAccordion">
                            <div class="accordion-item border-0 bg-transparent">
                                <div class="accordion-header" id="headingOne">
                                    <a class="px-0 pt-0" href="javascript:void(0)" role="button" data-bs-toggle="collapse"
                                        data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
                                        <div class="d-flex mb-0">
                                            <div class="me-2">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/ecommerce/png/32.png" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0 fs-14">Order Placed</p>
                                                <span class="fs-11 text-success">Nov 03, 2022</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div id="basicOne" class="accordion-collapse collapse show border-top-0"
                                    aria-labelledby="headingOne" data-bs-parent="#basicAccordion">
                                    <div class="accordion-body pt-0 ps-5">
                                        <div class="fs-11">
                                            <p class="mb-0">Order placed successfully by <a href="javascript:void(0);"
                                                    class="font-weight-semibold text-primary">Sansa Taylor</a></p>
                                            <span class="text-muted op-5">Nov 03, 2022, 15:36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="basicAccordion1">
                            <div class="accordion-item border-0 bg-transparent">
                                <div class="accordion-header" id="headingTwo">
                                    <a class="px-0 pt-0" href="javascript:void(0)" role="button" data-bs-toggle="collapse"
                                        data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
                                        <div class="d-flex mb-0">
                                            <div class="me-2">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/ecommerce/png/33.png" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0 fs-14">Picked</p>
                                                <span class="fs-12">Nov 03, 15:10</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div id="basicTwo" class="accordion-collapse show collapse border-top-0"
                                    aria-labelledby="headingTwo" data-bs-parent="#basicAccordion1">
                                    <div class="accordion-body pt-0 ps-5">
                                        <div class="fs-11">
                                            <p class="mb-0">Your order has been picked up by <span
                                                    class="font-weight-semibold">Smart Good Services</span></p>
                                            <span class="text-muted op-5">Nov 03, 2022, 15:36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="basicAccordion2">
                            <div class="accordion-item border-0 bg-transparent">
                                <div class="accordion-header" id="headingThree">
                                    <a class="px-0 pt-0" href="javascript:void(0)" role="button" data-bs-toggle="collapse"
                                        data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
                                        <div class="d-flex mb-0">
                                            <div class="me-2">
                                                <span class="avatar avatar-md avatar-rounded">
                                                    <img src="/images/ecommerce/png/34.png" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0 fs-14">Shipping</p>
                                                <span class="fs-12">Nov 03, 15:10</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div id="basicThree" class="accordion-collapse show collapse border-top-0"
                                    aria-labelledby="headingThree" data-bs-parent="#basicAccordion2">
                                    <div class="accordion-body pt-0 ps-5">
                                        <div class="fs-11 mb-3">
                                            <p class="mb-0">Arrived USA <span class="font-weight-semibold">SGS
                                                    Warehouse</span></p>
                                            <span class="text-muted op-5">Nov 03, 2022, 15:36</span>
                                        </div>
                                        <div class="fs-11 mb-3">
                                            <p class="mb-0">picked up by <span class="font-weight-semibold">SGS Agent</span>
                                                and on the way to Hyderabad</p>
                                            <span class="text-muted op-5">Nov 03, 2022, 15:36</span>
                                        </div>
                                        <div class="fs-11">
                                            <p class="mb-0">Arrived in Hyderabad and expected Delivery is <span
                                                    class="font-weight-semibold">Apr 16, 2022</span> </p>
                                            <span class="text-muted op-5">Nov 03, 2022, 15:36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="basicAccordion3">
                            <div class="accordion-item border-0 bg-transparent next-step">
                                <div class="accordion-header" id="headingFour">
                                    <a class="collapsed px-0 pt-0" href="javascript:void(0)" role="button"
                                        data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="true"
                                        aria-controls="basicFour">
                                        <div class="d-flex mb-2">
                                            <div class="me-2">
                                                <span
                                                    class="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i
                                                        class="fe fe-package fs-12"></i></span>
                                            </div>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0 fs-14">Out For Delivery</p>
                                                <span class="text-muted fs-12">Nov 03, 15:10 (expected)</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div id="basicFour" class="accordion-collapse collapse border-top-0"
                                    aria-labelledby="headingFour" data-bs-parent="#basicAccordion3">
                                    <div class="accordion-body pt-0 ps-5">
                                        <div class="fs-11">
                                            <p class="mb-0">Your order is out for devlivery</p>
                                            <span class="text-muted op-5">Nov 03, 2022, 15:36 (expected)</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion" id="basicAccordion4">
                        <div class="accordion-item border-0 bg-transparent next-step">
                            <div class="accordion-header" id="headingFive">
                                <a class="collapsed px-0 pt-0" href="javascript:void(0)" role="button"
                                    data-bs-toggle="collapse" aria-expanded="true">
                                    <div class="d-flex mb-2">
                                        <div class="me-2">
                                            <span
                                                class="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i
                                                    class="fe fe-package fs-12"></i></span>
                                        </div>
                                        <div class="flex-fill">
                                            <p class="fw-semibold mb-0 fs-14">Delivered</p>
                                            <span class="fs-12 text-muted">Nov 03, 18:42</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--End::row-1 --></template>

<style scoped></style>


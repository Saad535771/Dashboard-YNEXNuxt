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
                current: "Invoice Details",
                list: [
                    'Pages', 'Invoice', 'Invoice Details'
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
        <div class="col-xl-9">
            <div class="card custom-card">
                <div class="card-header d-md-flex d-block">
                    <div class="h5 mb-0 d-sm-flex d-bllock align-items-center">
                        <div class="avatar avatar-sm">
                            <img src="/images/brand-logos/toggle-logo.png" alt="">
                        </div>
                        <div class="ms-sm-2 ms-0 mt-sm-0 mt-2">
                            <div class="h6 fw-semibold mb-0">SHOPPING INVOICE : <span class="text-primary">#8140-2099</span>
                            </div>
                        </div>
                    </div>
                    <div class="ms-auto mt-md-0 mt-2">
                        <button class="btn btn-sm btn-secondary me-1" onclick="javascript:window.print();">Print<i
                                class="ri-printer-line ms-1 align-middle"></i></button>
                        <button class="btn btn-sm btn-primary">Save As PDF<i
                                class="ri-file-pdf-line ms-1 align-middle"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <p class="text-muted mb-2">
                                        Billing From :
                                    </p>
                                    <p class="fw-bold mb-1">
                                        SPRUKO TECHNOLOGIES
                                    </p>
                                    <p class="mb-1 text-muted">
                                        Mig-1-11,Manroe street
                                    </p>
                                    <p class="mb-1 text-muted">
                                        Georgetown,Washington D.C,USA,200071
                                    </p>
                                    <p class="mb-1 text-muted">
                                        sprukotrust.ynex@gmail.com
                                    </p>
                                    <p class="mb-1 text-muted">
                                        (555) 555-1234
                                    </p>
                                    <p class="text-muted">For more information check for <a href="javascript:void(0);"
                                            class="text-primary fw-semibold"><u>GSTIN</u></a> Details.</p>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                                    <p class="text-muted mb-2">
                                        Billing To :
                                    </p>
                                    <p class="fw-bold mb-1">
                                        Json Taylor
                                    </p>
                                    <p class="text-muted mb-1">
                                        Lig-22-1,20 Covington Place
                                    </p>
                                    <p class="text-muted mb-1">
                                        New Castle,de, United States,19320
                                    </p>
                                    <p class="text-muted mb-1">
                                        jsontaylor2134@gmail.com
                                    </p>
                                    <p class="text-muted">
                                        +1 202-918-2132
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <p class="fw-semibold text-muted mb-1">Invoice ID :</p>
                            <p class="fs-15 mb-1">#SPK120219890</p>
                        </div>
                        <div class="col-xl-3">
                            <p class="fw-semibold text-muted mb-1">Date Issued :</p>
                            <p class="fs-15 mb-1">29,Nov 2022 - <span class="text-muted fs-12">12:42PM</span></p>
                        </div>
                        <div class="col-xl-3">
                            <p class="fw-semibold text-muted mb-1">Due Date :</p>
                            <p class="fs-15 mb-1">29,Dec 2022</p>
                        </div>
                        <div class="col-xl-3">
                            <p class="fw-semibold text-muted mb-1">Due Amount :</p>
                            <p class="fs-16 mb-1 fw-semibold">$2,570.42</p>
                        </div>
                        <div class="col-xl-12">
                            <div class="table-responsive">
                                <table class="table nowrap text-nowrap border mt-4">
                                    <thead>
                                        <tr>
                                            <th>BRAND NAME</th>
                                            <th>DESCRIPTION</th>
                                            <th>QUANTITY</th>
                                            <th>PRICE PER UNIT</th>
                                            <th>TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="fw-semibold">
                                                    Dapzem & Co (Sweatshirt)
                                                </div>
                                            </td>
                                            <td>
                                                <div class="text-muted">
                                                    Branded hoodie ethnic style
                                                </div>
                                            </td>
                                            <td class="product-quantity-container">
                                                2
                                            </td>
                                            <td>
                                                $60
                                            </td>
                                            <td>
                                                $120
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="fw-semibold">
                                                    Denim Winjo (Jacket)
                                                </div>
                                            </td>
                                            <td>
                                                <div class="text-muted">
                                                    Vintage pure leather Jacket
                                                </div>
                                            </td>
                                            <td class="product-quantity-container">
                                                1
                                            </td>
                                            <td>
                                                $249
                                            </td>
                                            <td>
                                                $249
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="fw-semibold">
                                                    Jimmy Lolfiger (Winter Coat)
                                                </div>
                                            </td>
                                            <td>
                                                <div class="text-muted">
                                                    Unisex jacket for men & women
                                                </div>
                                            </td>
                                            <td class="product-quantity-container">
                                                1
                                            </td>
                                            <td>
                                                $499
                                            </td>
                                            <td>
                                                $499
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="fw-semibold">
                                                    Blueberry & Co
                                                </div>
                                            </td>
                                            <td>
                                                <div class="text-muted">
                                                    Light colored sweater form blueberry
                                                </div>
                                            </td>
                                            <td class="product-quantity-container">
                                                3
                                            </td>
                                            <td>
                                                $299
                                            </td>
                                            <td>
                                                $897
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="fw-semibold">
                                                    Denim Corporation
                                                </div>
                                            </td>
                                            <td>
                                                <div class="text-muted">
                                                    Flap pockets denim jackets for men
                                                </div>
                                            </td>
                                            <td class="product-quantity-container">
                                                1
                                            </td>
                                            <td>
                                                $599
                                            </td>
                                            <td>
                                                $599
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td colspan="2">
                                                <table class="table table-sm text-nowrap mb-0 table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                <p class="mb-0">Sub Total :</p>
                                                            </th>
                                                            <td>
                                                                <p class="mb-0 fw-semibold fs-15">$2,364</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <p class="mb-0">Avail Discount :</p>
                                                            </th>
                                                            <td>
                                                                <p class="mb-0 fw-semibold fs-15">$29.98</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <p class="mb-0">Coupon Discount <span
                                                                        class="text-success">(10%)</span> :</p>
                                                            </th>
                                                            <td>
                                                                <p class="mb-0 fw-semibold fs-15">$236.40</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <p class="mb-0">Vat <span class="text-danger">(20%)</span> :
                                                                </p>
                                                            </th>
                                                            <td>
                                                                <p class="mb-0 fw-semibold fs-15">$472.80</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <p class="mb-0">Due Till Date :</p>
                                                            </th>
                                                            <td>
                                                                <p class="mb-0 fw-semibold fs-15">$0</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <p class="mb-0 fs-14">Total :</p>
                                                            </th>
                                                            <td>
                                                                <p class="mb-0 fw-semibold fs-16 text-success">$2,570.42</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div>
                                <label for="invoice-note" class="form-label">Note:</label>
                                <textarea class="form-control form-control-light" id="invoice-note"
                                    rows="3">Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-success">Download <i class="ri-download-2-line ms-1 align-middle"></i></button>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Mode Of Payment
                    </div>
                </div>
                <div class="card-body">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <p class="fs-14 fw-semibold">
                                Credit/Debit Card
                            </p>
                            <p>
                                <span class="fw-semibold text-muted fs-12">Name On Card :</span> Json Taylor
                            </p>
                            <p>
                                <span class="fw-semibold text-muted fs-12">Card Number :</span> 1234 5678 9087 XXXX
                            </p>
                            <p>
                                <span class="fw-semibold text-muted fs-12">Total Amount :</span> <span
                                    class="text-success fw-semibold fs-14">$2570.42</span>
                            </p>
                            <p>
                                <span class="fw-semibold text-muted fs-12">Due Date :</span> 29,Dec 2022 - <span
                                    class="text-danger fs-12 fw-semibold">30 days due</span>
                            </p>
                            <p>
                                <span class="fw-semibold text-muted fs-12">Invoice Status : <span
                                        class="badge bg-warning-transparent">Pending</span></span>
                            </p>
                            <div class="alert alert-success" role="alert">
                                Please Make sure to pay the invoice bill within 30 days.
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
<!--End::row-1 --></template>

<style scoped></style>


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
                current: "Tables",
                list: [
                    'Tables', 'Tables'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Basic Tables
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Created On</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Mark</th>
                                    <td>21,Dec 2021</td>
                                    <td>+1234-12340</td>
                                    <td><span class="badge bg-outline-primary">Completed</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Monika</th>
                                    <td>29,April 2022</td>
                                    <td>+1523-12459</td>
                                    <td><span class="badge bg-outline-warning">Failed</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Madina</th>
                                    <td>30,Nov 2022</td>
                                    <td>+1982-16234</td>
                                    <td><span class="badge bg-outline-success">Successful</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Bhamako</th>
                                    <td>18,Mar 2022</td>
                                    <td>+1526-10729</td>
                                    <td><span class="badge bg-outline-secondary">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Bordered Tables
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">User</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/13.jpg" alt="img">
                                            </span>Sukuro Kim
                                        </div>
                                    </th>
                                    <td><span class="badge bg-success-transparent">Active</span></td>
                                    <td>kimosukuro@gmail.com</td>
                                    <td>
                                        <div class="hstack gap-2 flex-wrap">
                                            <a href="javascript:void(0);" class="text-info fs-14 lh-1"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);" class="text-danger fs-14 lh-1"><i
                                                    class="ri-delete-bin-5-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 offline avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="img">
                                            </span>Hasimna
                                        </div>
                                    </th>
                                    <td><span class="badge bg-light text-dark">Inactive</span></td>
                                    <td>hasimna2132@gmail.com</td>
                                    <td>
                                        <div class="hstack gap-2 flex-wrap">
                                            <a href="javascript:void(0);" class="text-info fs-14 lh-1"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);" class="text-danger fs-14 lh-1"><i
                                                    class="ri-delete-bin-5-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="img">
                                            </span>Azimo Khan
                                        </div>
                                    </th>
                                    <td><span class="badge bg-success-transparent">Active</span></td>
                                    <td>azimokhan421@gmail.com</td>
                                    <td>
                                        <div class="hstack gap-2 flex-wrap">
                                            <a href="javascript:void(0);" class="text-info fs-14 lh-1"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);" class="text-danger fs-14 lh-1"><i
                                                    class="ri-delete-bin-5-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/5.jpg" alt="img">
                                            </span>Samantha Julia
                                        </div>
                                    </th>
                                    <td><span class="badge bg-success-transparent">Active</span></td>
                                    <td>julianasams143@gmail.com</td>
                                    <td>
                                        <div class="hstack gap-2 flex-wrap">
                                            <a href="javascript:void(0);" class="text-info fs-14 lh-1"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);" class="text-danger fs-14 lh-1"><i
                                                    class="ri-delete-bin-5-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Bordered Primary
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Order</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        #0007
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">26-04-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="img">
                                            </span>Mayor Kelly
                                        </div>
                                    </td>
                                    <td><span class="badge bg-primary-transparent">Booked</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        #0008
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">15-02-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="img">
                                            </span>Wicky Kross
                                        </div>
                                    </td>
                                    <td><span class="badge bg-primary-transparent">Booked</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        #0009
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">23-05-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="img">
                                            </span>Julia Cam
                                        </div>
                                    </td>
                                    <td><span class="badge bg-primary-transparent">Booked</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Bordered Success
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-bordered border-success">
                            <thead>
                                <tr>
                                    <th scope="col">Order</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        #0011
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">07-01-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/10.jpg" alt="img">
                                            </span>Helsenky
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success-transparent">Delivered</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        #0012
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">18-05-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="img">
                                            </span>Brodus
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success-transparent">Delivered</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        #0013
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">19-03-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="img">
                                            </span>Chikka Alen
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success-transparent">Delivered</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Bordered warning
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-bordered border-warning">
                            <thead>
                                <tr>
                                    <th scope="col">Order</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        #0014
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">21-02-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/13.jpg" alt="img">
                                            </span>Sukuro Kim
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning-transparent">Accepted</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        #0018
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">26-03-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="img">
                                            </span>Alex Carey
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning-transparent">Accepted</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        #0020
                                    </th>
                                    <td>
                                        <span class="badge bg-light text-dark">14-03-2022</span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>Pamila Anderson
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning-transparent">Accepted</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Without Borders
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Harshrath</th>
                                    <td>#5182-3467</td>
                                    <td>24 May 2022</td>
                                    <td><span class="badge bg-primary">Fixed</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Zozo Hadid</th>
                                    <td>#5182-3412</td>
                                    <td>02 July 2022</td>
                                    <td><span class="badge bg-warning">In Progress</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Martiana</th>
                                    <td>#5182-3423</td>
                                    <td>15 April 2022</td>
                                    <td><span class="badge bg-success">Completed</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Alex Carey</th>
                                    <td>#5182-3456</td>
                                    <td>17 March 2022</td>
                                    <td><span class="badge bg-danger">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Group Divideres
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Seller</th>
                                    <th scope="col">Sale Percentage</th>
                                    <th scope="col">Quantity Sold</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <th scope="row">Smart Watch</th>
                                    <td>Slowtrack.inc</td>
                                    <td><a href="javascript:void(0);" class="text-success">24.23%<i
                                                class="ri-arrow-up-fill ms-1"></i></a></td>
                                    <td>250/1786</td>
                                </tr>
                                <tr>
                                    <th scope="row">White Sneakers</th>
                                    <td>American & Co.inc</td>
                                    <td><a href="javascript:void(0);" class="text-danger">12.45%<i
                                                class="ri-arrow-down-fill ms-1"></i></a></td>
                                    <td>123/985</td>
                                </tr>
                                <tr>
                                    <th scope="row">Baseball Bat</th>
                                    <td>Sports Company</td>
                                    <td><a href="javascript:void(0);" class="text-success">06.64%<i
                                                class="ri-arrow-up-fill ms-1"></i></a></td>
                                    <td>124/232</td>
                                </tr>
                                <tr>
                                    <th scope="row">Black Hoodie</th>
                                    <td>Renonds Fabrics</td>
                                    <td><a href="javascript:void(0);" class="text-success">14.42%<i
                                                class="ri-arrow-up-fill ms-1"></i></a></td>
                                    <td>192/2456</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Striped rows
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">2022R-01</th>
                                    <td>27-010-2022</td>
                                    <td>Moracco</td>
                                    <td>
                                        <button class="btn btn-sm btn-success btn-wave">
                                            <i class="ri-download-2-line align-middle me-2"></i>Download
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2022R-02</th>
                                    <td>28-10-2022</td>
                                    <td>Thornton</td>
                                    <td>
                                        <button class="btn btn-sm btn-success btn-wave">
                                            <i class="ri-download-2-line align-middle me-2"></i>Download
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2022R-03</th>
                                    <td>22-10-2022</td>
                                    <td>Larry Bird</td>
                                    <td>
                                        <button class="btn btn-sm btn-success btn-wave">
                                            <i class="ri-download-2-line align-middle me-2"></i>Download
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2022R-04</th>
                                    <td>29-09-2022</td>
                                    <td>Erica Sean</td>
                                    <td>
                                        <button class="btn btn-sm btn-success btn-wave">
                                            <i class="ri-download-2-line align-middle me-2"></i>Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Striped columns
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">2022R-01</th>
                                    <td>27-010-2022</td>
                                    <td>Moracco</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger btn-wave">
                                            <i class="ri-delete-bin-line align-middle me-2"></i>Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2022R-02</th>
                                    <td>28-10-2022</td>
                                    <td>Thornton</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger btn-wave">
                                            <i class="ri-delete-bin-line align-middle me-2"></i>Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2022R-03</th>
                                    <td>22-10-2022</td>
                                    <td>Larry Bird</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger btn-wave">
                                            <i class="ri-delete-bin-line align-middle me-2"></i>Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2022R-04</th>
                                    <td>29-09-2022</td>
                                    <td>Erica Sean</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger btn-wave">
                                            <i class="ri-delete-bin-line align-middle me-2"></i>Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Primary Table
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer d-none border-top-0">
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Secondary Table
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-secondary">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer d-none border-top-0">
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Warning Table
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-warning">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Danger Table
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-danger">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Dark Table
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Success Table With Striped Rows
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">Hoverable Rows</div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Product Manager</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/10.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Joanna Smith</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">joannasmith14@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-primary-transparent">Fashion</span></td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +5
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 52%"
                                                aria-valuenow="52" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Kara Kova</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">milesakara@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning-transparent">Clothing</span></td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +6
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 40%"
                                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/16.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Donald Trimb</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">donaldo21@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-dark-transparent">Electronics</span></td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +2
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 17%"
                                                aria-valuenow="17" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/13.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Justin Gaethje</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">justingae@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-danger-transparent">Sports</span></td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +5
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 72%"
                                                aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Hoverable rows With striped rows
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">IN-2032</th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Mark Cruise</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">markcruise24@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success-transparent"><i
                                                class="ri-check-fill align-middle me-1"></i>Paid</span></td>
                                    <td>Jul 26,2022</td>
                                </tr>
                                <tr>
                                    <th scope="row">IN-2022</th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Charanjeep</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">charanjeep@gmail.in</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success-transparent"><i
                                                class="ri-check-fill align-middle me-1"></i>Paid</span></td>
                                    <td>Mar 14,2022</td>
                                </tr>
                                <tr>
                                    <th scope="row">IN-2014</th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/5.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Samantha Julie</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">julie453@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-danger-transparent"><i
                                                class="ri-close-fill align-middle me-1"></i>Cancelled</span>
                                    </td>
                                    <td>Feb 1,2022</td>
                                </tr>
                                <tr>
                                    <th scope="row">IN-2036</th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="img">
                                            </div>
                                            <div>
                                                <div class="lh-1">
                                                    <span>Simon Cohen</span>
                                                </div>
                                                <div class="lh-1">
                                                    <span class="fs-11 text-muted">simon@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-light text-dark"><i
                                                class="ri-reply-line align-middle me-1"></i>Refunded</span>
                                    </td>
                                    <td>Apr 24,2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-6 -->

    <!-- Start:: row-7 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Head Primary
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="table-primary">
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Harshrath</th>
                                    <td>#5182-3467</td>
                                    <td>24 May 2022</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Zozo Hadid</th>
                                    <td>#5182-3412</td>
                                    <td>02 July 2022</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Martiana</th>
                                    <td>#5182-3423</td>
                                    <td>15 April 2022</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Alex Carey</th>
                                    <td>#5182-3456</td>
                                    <td>17 March 2022</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                    class="ri-edit-line"></i></a>
                                            <a href="javascript:void(0);"
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Head warning
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="table-warning">
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Harshrath</th>
                                    <td>#5182-3467</td>
                                    <td>24 May 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Zozo Hadid</th>
                                    <td>#5182-3412</td>
                                    <td>02 July 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Martiana</th>
                                    <td>#5182-3423</td>
                                    <td>15 April 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger-light">Rejected</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Alex Carey</th>
                                    <td>#5182-3456</td>
                                    <td>17 March 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-success-light">Processed</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Head Success
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="table-success">
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Harshrath</th>
                                    <td>#5182-3467</td>
                                    <td>24 May 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Zozo Hadid</th>
                                    <td>#5182-3412</td>
                                    <td>02 July 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Martiana</th>
                                    <td>#5182-3423</td>
                                    <td>15 April 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger-light">Rejected</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Alex Carey</th>
                                    <td>#5182-3456</td>
                                    <td>17 March 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-success-light">Processed</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Head Info
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="table-info">
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Harshrath</th>
                                    <td>#5182-3467</td>
                                    <td>24 May 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Zozo Hadid</th>
                                    <td>#5182-3412</td>
                                    <td>02 July 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Martiana</th>
                                    <td>#5182-3423</td>
                                    <td>15 April 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger-light">Rejected</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Alex Carey</th>
                                    <td>#5182-3456</td>
                                    <td>17 March 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-success-light">Processed</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Head Secondary
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="table-secondary">
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Harshrath</th>
                                    <td>#5182-3467</td>
                                    <td>24 May 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Zozo Hadid</th>
                                    <td>#5182-3412</td>
                                    <td>02 July 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Martiana</th>
                                    <td>#5182-3423</td>
                                    <td>15 April 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger-light">Rejected</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Alex Carey</th>
                                    <td>#5182-3456</td>
                                    <td>17 March 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-success-light">Processed</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Head Danger
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="table-danger">
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Transaction Id</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Harshrath</th>
                                    <td>#5182-3467</td>
                                    <td>24 May 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Zozo Hadid</th>
                                    <td>#5182-3412</td>
                                    <td>02 July 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary-light">Pending</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Martiana</th>
                                    <td>#5182-3423</td>
                                    <td>15 April 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-danger-light">Rejected</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Alex Carey</th>
                                    <td>#5182-3456</td>
                                    <td>17 March 2022</td>
                                    <td>
                                        <button class="btn btn-sm btn-success-light">Processed</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-7 -->

    <!-- Start:: row-8 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table Foot
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead class="table-primary">
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Matches Won</th>
                                    <th scope="col">Win Ratio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        01
                                    </th>
                                    <td>
                                        Manchester
                                    </td>
                                    <td>
                                        232
                                    </td>
                                    <td>
                                        <span class="badge bg-primary">42%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        02
                                    </th>
                                    <td>
                                        Barcelona
                                    </td>
                                    <td>
                                        175
                                    </td>
                                    <td><span class="badge bg-primary">58%</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        03
                                    </th>
                                    <td>
                                        Portugal
                                    </td>
                                    <td>
                                        126
                                    </td>
                                    <td><span class="badge bg-primary">32%</span></td>
                                </tr>
                            </tbody>
                            <tfoot class="table-primary">
                                <tr>
                                    <th scope="row">
                                        Total
                                    </th>
                                    <td>
                                        United States
                                    </td>
                                    <td>
                                        558
                                    </td>
                                    <td><span class="badge bg-primary">56%</span></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table With Caption
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <caption>Top 3 Countries</caption>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Medals Won</th>
                                    <th scope="col">No Of Athletes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">01</th>
                                    <td>United States</td>
                                    <td>2012<i class="ri-medal-line mx-2"></i></td>
                                    <td>1823</td>
                                </tr>
                                <tr>
                                    <th scope="row">02</th>
                                    <td>United Kingdom</td>
                                    <td>1012<i class="ri-medal-line mx-2"></i></td>
                                    <td>992</td>
                                </tr>
                                <tr>
                                    <th scope="row">03</th>
                                    <td>Germany</td>
                                    <td>914<i class="ri-medal-line mx-2"></i></td>
                                    <td>875</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Table With Top Caption
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap caption-top">
                            <caption>Top IT Companies</caption>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Revenue</th>
                                    <th scope="col">Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Microsoft</td>
                                    <td>$170 billion</td>
                                    <td>United States</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>HP</td>
                                    <td>$72 billion</td>
                                    <td>United States</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>IBM</td>
                                    <td>$60 billion</td>
                                    <td>United States</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-8 -->

    <!-- Start:: row-9 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Active Tables
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Created On</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-active">
                                    <th scope="row">Mark</th>
                                    <td>21,Dec 2021</td>
                                    <td>+1234-12340</td>
                                    <td><span class="badge bg-primary">Completed</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Monika</th>
                                    <td>29,April 2022</td>
                                    <td>+1523-12459</td>
                                    <td><span class="badge bg-warning">Failed</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Madina</th>
                                    <td>30,Nov 2022</td>
                                    <td class="table-active">+1982-16234</td>
                                    <td><span class="badge bg-success">Successful</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Bhamako</th>
                                    <td>18,Mar 2022</td>
                                    <td>+1526-10729</td>
                                    <td><span class="badge bg-secondary">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Small Tables
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkebox-sm"
                                                checked="">
                                            <label class="form-check-label" for="checkebox-sm">
                                                Zelensky
                                            </label>
                                        </div>
                                    </th>
                                    <td>25-Apr-2021</td>
                                    <td><span class="badge bg-success-transparent">Paid</span></td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkebox-sm1">
                                            <label class="form-check-label" for="checkebox-sm1">
                                                Kim Jong
                                            </label>
                                        </div>
                                    </th>
                                    <td>29-April-2022</td>
                                    <td><span class="badge bg-danger-transparent">Pending</span></td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkebox-sm2">
                                            <label class="form-check-label" for="checkebox-sm2">
                                                Obana
                                            </label>
                                        </div>
                                    </th>
                                    <td>30-Nov-2022</td>
                                    <td><span class="badge bg-success-transparent">Paid</span></td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkebox-sm3">
                                            <label class="form-check-label" for="checkebox-sm3">
                                                Sean Paul
                                            </label>
                                        </div>
                                    </th>
                                    <td>01-Jan-2022</td>
                                    <td><span class="badge bg-success-transparent">Paid</span></td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkebox-sm4">
                                            <label class="form-check-label" for="checkebox-sm4">
                                                Karizma
                                            </label>
                                        </div>
                                    </th>
                                    <td>14-Feb-2022</td>
                                    <td><span class="badge bg-danger-transparent">Pending</span></td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-9 -->

    <!-- Start:: row-10 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Color variants tables
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Color</th>
                                    <th scope="col">Client</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Rita Book</td>
                                    <td><span class="badge bg-primary-transparent">Processed</span></td>
                                    <td>22</td>
                                    <td>$2,012</td>
                                </tr>

                                <tr class="table-primary">
                                    <th scope="row">Primary</th>
                                    <td>Rhoda Report</td>
                                    <td><span class="badge bg-primary">Processed</span></td>
                                    <td>22</td>
                                    <td>$4,254</td>
                                </tr>
                                <tr class="table-secondary">
                                    <th scope="row">Secondary</th>
                                    <td>Rita Book</td>
                                    <td><span class="badge bg-secondary">Processed</span></td>
                                    <td>26</td>
                                    <td>$1,234</td>
                                </tr>
                                <tr class="table-success">
                                    <th scope="row">Success</th>
                                    <td>Anne Teak</td>
                                    <td><span class="badge bg-success">Processed</span></td>
                                    <td>42</td>
                                    <td>$2,623</td>
                                </tr>
                                <tr class="table-danger">
                                    <th scope="row">Danger</th>
                                    <td>Dee End</td>
                                    <td><span class="badge bg-danger">Processed</span></td>
                                    <td>52</td>
                                    <td>$32,132</td>
                                </tr>
                                <tr class="table-warning">
                                    <th scope="row">Warning</th>
                                    <td>Lee Nonmi</td>
                                    <td><span class="badge bg-warning">Processed</span></td>
                                    <td>10</td>
                                    <td>$1,434</td>
                                </tr>
                                <tr class="table-info">
                                    <th scope="row">Info</th>
                                    <td>Lynne Gwistic</td>
                                    <td><span class="badge bg-info">Processed</span></td>
                                    <td>63</td>
                                    <td>$1,854</td>
                                </tr>
                                <tr class="table-light">
                                    <th scope="row">Light</th>
                                    <td>Fran Tick</td>
                                    <td><span class="badge bg-light text-dark">Processed</span></td>
                                    <td>05</td>
                                    <td>$823</td>
                                </tr>
                                <tr class="table-dark">
                                    <th scope="row">Dark</th>
                                    <td>Polly Pipe</td>
                                    <td><span class="badge bg-dark text-white">Processed</span></td>
                                    <td>35</td>
                                    <td>$1,832</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Nesting
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <table class="table text-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Aplhabets</th>
                                                    <th scope="col">Users</th>
                                                    <th scope="col">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">A</th>
                                                    <td>Dino King</td>
                                                    <td>dinoking231@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">B</th>
                                                    <td>Poppins sams</td>
                                                    <td>pops@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">C</th>
                                                    <td>Brian Shaw</td>
                                                    <td>swanbrian@gmail.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Jimmy</td>
                                    <td>the Ostrich</td>
                                    <td>Dummy Text</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Cobra Kai</td>
                                    <td>the Snake</td>
                                    <td>Another Name</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-10 -->

    <!-- Start:: row-11 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Always responsive
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col"><input class="form-check-input" type="checkbox" id="checkboxNoLabel"
                                            value="" aria-label="..."></th>
                                    <th scope="col">Team Head</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Gmail</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Work Progress</th>
                                    <th scope="col">Revenue</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><input class="form-check-input" type="checkbox" id="checkboxNoLabel1"
                                            value="" aria-label="..."></th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="img">
                                            </span>Mayor Kelly
                                        </div>
                                    </td>
                                    <td>Manufacturer</td>
                                    <td><span class="badge bg-primary-transparent">Team Lead</span></td>
                                    <td>mayorkrlly@gmail.com</td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +4
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 52%"
                                                aria-valuenow="52" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                    <td>$10,984.29</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><input class="form-check-input" type="checkbox" id="checkboxNoLabel2"
                                            value="" aria-label="..."></th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="img">
                                            </span>Andrew Garfield
                                        </div>
                                    </td>
                                    <td>Managing Director</td>
                                    <td><span class="badge bg-warning-transparent">Director</span></td>
                                    <td>andrewgarfield@gmail.com</td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/1.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/5.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +4
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 91%"
                                                aria-valuenow="91" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                    <td>$1.4billion</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><input class="form-check-input" type="checkbox" id="checkboxNoLabel3"
                                            value="" aria-label="..."></th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="img">
                                            </span>Simon Cowel
                                        </div>
                                    </td>
                                    <td>Service Manager</td>
                                    <td><span class="badge bg-success-transparent">Manager</span></td>
                                    <td>simoncowel234@gmail.com</td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/6.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/16.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +10
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 45%"
                                                aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                    <td>$7,123.21</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><input class="form-check-input" type="checkbox" id="checkboxNoLabel13"
                                            value="" aria-label="..."></th>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                                <img src="/images/faces/5.jpg" alt="img">
                                            </span>Mirinda Hers
                                        </div>
                                    </td>
                                    <td>Recruiter</td>
                                    <td><span class="badge bg-danger-transparent">Employee</span></td>
                                    <td>mirindahers@gmail.com</td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/10.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="img">
                                            </span>
                                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                href="javascript:void(0);">
                                                +6
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="progress progress-xs">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 21%"
                                                aria-valuenow="21" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                    <td>$2,325.45</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i
                                                    class="ri-download-2-line"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i
                                                    class="ri-edit-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-11 -->

    <!-- Start:: row-12 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Vertical alignment
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" class="w-25">Heading 1</th>
                                    <th scope="col" class="w-25">Heading 2</th>
                                    <th scope="col" class="w-25">Heading 3</th>
                                    <th scope="col" class="w-25">Heading 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>This cell inherits <code>vertical-align: middle;</code> from
                                        the
                                        table</td>
                                    <td>This cell inherits <code>vertical-align: middle;</code> from
                                        the
                                        table</td>
                                    <td>This cell inherits <code>vertical-align: middle;</code> from
                                        the
                                        table</td>
                                    <td>This here is some placeholder text, intended to take up
                                        quite a
                                        bit of vertical space, to demonstrate how the vertical
                                        alignment
                                        works in the preceding cells.</td>
                                </tr>
                                <tr class="align-bottom">
                                    <td>This cell inherits <code>vertical-align: bottom;</code> from
                                        the
                                        table row</td>
                                    <td>This cell inherits <code>vertical-align: bottom;</code> from
                                        the
                                        table row</td>
                                    <td>This cell inherits <code>vertical-align: bottom;</code> from
                                        the
                                        table row</td>
                                    <td>This here is some placeholder text, intended to take up
                                        quite a
                                        bit of vertical space, to demonstrate how the vertical
                                        alignment
                                        works in the preceding cells.</td>
                                </tr>
                                <tr>
                                    <td>This cell inherits <code>vertical-align: middle;</code> from
                                        the
                                        table</td>
                                    <td>This cell inherits <code>vertical-align: middle;</code> from
                                        the
                                        table</td>
                                    <td class="align-top">This cell is aligned to the top.</td>
                                    <td>This here is some placeholder text, intended to take up
                                        quite a
                                        bit of vertical space, to demonstrate how the vertical
                                        alignment
                                        works in the preceding cells.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-12 -->
</template>

<style scoped></style>


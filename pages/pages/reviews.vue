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
                current: "Reviews",
                list: [
                    'Pages', 'Reviews'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container-lg reviews-container">
        <!-- Start::row-1 -->
        <div class="row justify-content-center">
            <div class="col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="row gy-4">
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/15.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Json Taylor</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">CEO OF NORJA</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>12 days ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Json Taylor</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/4.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Melissa Blue</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">MANAGER CHO</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>7 days ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Melissa Blue</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/2.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Kiara Advain</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">CEO OF EMPIRO</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-line"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>2 days ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Kiara Advain</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/10.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Jhonson Smith</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY MBIO</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>16 hrs ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Jhonson Smith</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/12.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Dwayne Stort</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">CEO ARMEDILLO</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-line"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>22 days ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Dwayne Stort</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/3.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Jasmine Kova</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">AGGENT AMIO</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>26 days ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Jasmine Kova</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/16.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Dolph MR</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">CEO MR BRAND</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>1 month ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Dolph MR</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/5.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Brenda Simpson</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">CEO AIBMO</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>1 month ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Brenda Simpson</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-md avatar-rounded me-3">
                                        <img src="/images/faces/7.jpg" alt="">
                                    </span>
                                    <div>
                                        <p class="mb-0 fw-semibold fs-14 text-primary">Julia Sams</p>
                                        <p class="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY BHOL</p>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Earum autem quaerat distinctio -- <a href="javascript:void(0);"
                                            class="fw-semibold fs-11 text-primary"><v-tooltip activator="parent"
                                                content-class="tooltip-primary" location="top">Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit. Earum autem quaerat distinctio</v-tooltip>Read
                                            More</a></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <span class="text-muted">Rating : </span>
                                        <span class="text-warning d-block ms-1">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill"></i>
                                        </span>
                                    </div>
                                    <div class="float-end fs-12 fw-semibold text-muted text-end">
                                        <span>2 month ago</span>
                                        <span class="d-block fw-normal fs-12 text-success"><i>Julia Sams</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="pagination mb-5 justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                Prev
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link text-primary" href="javascript:void(0);">
                                next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--End::row-1 -->
    </div>
</template>

<style scoped></style>


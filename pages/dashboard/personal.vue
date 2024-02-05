<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import * as personalData from '@/data/dashboards/personal.js';
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
                current: "Personal",
                list: [
                    'Dashboards', 'Personal'
                ]
            },
            personalData: personalData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-12">
            <div class="row">
                <div class="col-xl-7">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card overflow-hidden">
                                <div class="card-body p-0">
                                    <div class="p-4">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="mb-3">
                                                <span class="d-block fw-semibold fs-15">Water Tracking</span>
                                                <span class="text-muted fs-12 d-block">87 Points</span>
                                            </div>
                                            <div>
                                                <span class="avatar bg-primary">
                                                    <i class="bi bi-droplet fs-18"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="mb-0">
                                                <span class="fs-24 fw-semibold">8.1</span>
                                                <span class="text-muted fs-12 ms-1">Lt</span>
                                            </p>
                                            <span class="text-muted">0.9 Lt more to reach goal</span>
                                        </div>
                                    </div>
                                    <apexchart height="115px" type="area" :options="personalData.waterTrackingOptions"
                                        :series="personalData.waterTrackingSeries"></apexchart>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card overflow-hidden">
                                <div class="card-body p-0">
                                    <div class="p-4">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="mb-3">
                                                <span class="d-block fw-semibold fs-15">Sleep Tracking</span>
                                                <span class="text-muted fs-12 d-block">54 Points</span>
                                            </div>
                                            <div>
                                                <span class="avatar bg-success">
                                                    <i class="bi bi-alarm fs-18"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="mb-0">
                                                <span class="fs-24 fw-semibold">5.2</span>
                                                <span class="text-muted fs-12 ms-1">Hrs</span>
                                            </p>
                                            <span class="text-muted">2.8 Hrs more to reach goal</span>
                                        </div>
                                    </div>
                                    <apexchart height="115px" type="area" :options="personalData.sleepTrackingOptions"
                                        :series="personalData.sleepTrackingSeries"></apexchart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed">
                                <div class="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                    <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                        <p class="mb-0 flex-fill fs-14 fw-semibold">Instagram</p>
                                        <div class="ms-0">
                                            <span class="avatar bg-light text-danger"><i
                                                    class="bi bi-instagram fs-16"></i></span>
                                        </div>
                                    </div>
                                    <p class="mb-2 fs-24 fw-semibold">121K</p>
                                    <div class="flex-between">
                                        <span class="text-muted fs-12">6 min ago</span>
                                        <span class="text-danger d-inline-block"><i
                                                class="bi bi-arrow-down-right me-1 fs-10"></i>1.5%</span>
                                    </div>
                                </div>
                                <div class="px-4 py-3 flex-fill border-bottom-dashed border-start-dashed">
                                    <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                        <p class="mb-0 flex-fill fs-14 fw-semibold">Facebook</p>
                                        <div>
                                            <span class="avatar bg-light text-warning"><i
                                                    class="bi bi-facebook fs-16"></i></span>
                                        </div>
                                    </div>
                                    <p class="mb-2 fs-24 fw-semibold">2.1K</p>
                                    <div class="flex-between">
                                        <span class="text-muted fs-12">1 hr ago</span>
                                        <span class="text-warning d-inline-block"><i
                                                class="bi bi-arrow-down-right me-1 fs-10"></i>1.9%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap align-items-center">
                                <div class="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                    <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                        <p class="mb-0 flex-fill fs-14 fw-semibold">Youtube</p>
                                        <div class="ms-1">
                                            <span class="avatar bg-light text-info"><i
                                                    class="bi bi-youtube fs-16"></i></span>
                                        </div>
                                    </div>
                                    <p class="mb-2 fs-24 fw-semibold">1.1M</p>
                                    <div class="flex-between">
                                        <span class="text-muted fs-12">1 day ago</span>
                                        <span class="text-info d-inline-block"><i
                                                class="bi bi-arrow-up-right me-1 fs-10"></i>1.9%</span>
                                    </div>
                                </div>
                                <div class="px-4 py-3 flex-fill border-start-dashed">
                                    <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                        <p class="mb-0 flex-fill fs-14 fw-semibold">Twitter</p>
                                        <div>
                                            <span class="avatar bg-light text-purple"><i
                                                    class="bi bi-twitter fs-16"></i></span>
                                        </div>
                                    </div>
                                    <p class="mb-2 fs-24 fw-semibold">2.1K</p>
                                    <div class="flex-between">
                                        <span class="text-muted fs-12">1 week ago</span>
                                        <span class="text-purple d-inline-block"><i
                                                class="bi bi-arrow-up-right me-1 fs-10"></i>1.9%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between mb-4">
                                        <div class="me-1">
                                            <h6 class="fs-15 mg-b-3">Primary Account</h6>
                                            <a href="javascript:void(0);" class="fs-12 text-primary op-8">Change<i
                                                    class="bi bi-box-arrow-up-right fs-11 ms-1"></i></a>
                                        </div>
                                        <div class="min-w-fit-content">
                                            <div class="avatar bg-primary-transparent">
                                                <i class="ri-paypal-fill fs-18"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="fs-24 fw-semibold">$1,29,389.00</p>
                                    <p class="mb-1 fs-14">Sarah Jahn SP</p>
                                    <div class="d-flex justify-content-between text-muted">
                                        <span>XXXX XXXX XXXX 1116</span>
                                        <span>12/24</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">Quick Transfer</div>
                                    <a href="javascript:void(0);" class="text-primary">View History<i
                                            class="bi bi-box-arrow-up-right fs-11 ms-2"></i></a>
                                </div>
                                <div class="card-body">
                                    <div class="avatar-list-stacked mb-4">
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/2.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/8.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/2.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/10.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/4.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/13.jpg" alt="img">
                                        </span>
                                        <a aria-label="anchor" class="avatar bg-light text-default avatar-rounded"
                                            href="javascript:void(0);">
                                            <i class="ri-arrow-right-s-line fs-18"></i>
                                        </a>
                                    </div>
                                    <div class="mt-2">
                                        <div class="mt-2">
                                            <label class="text-muted mb-1">Send / Receive</label>
                                            <div class="input-group">
                                                <span class="input-group-text">Send To</span>
                                                <input type="text" value="11167731611" aria-label="First name"
                                                    class="form-control">
                                                <button class="btn btn-light" type="button">Check</button>
                                            </div>
                                            <label class="text-success fs-12">Say Hii</label>
                                        </div>
                                        <div class="input-group mt-3">
                                            <span class="input-group-text">Amount</span>
                                            <input type="text" value="2000" aria-label="First name" class="form-control">
                                        </div>
                                    </div>
                                    <div class="d-flex gap-3 mt-4">
                                        <button type="button" aria-label="button"
                                            class="btn btn-icon btn-wave btn-primary-light"><i
                                                class="bi bi-arrow-down-up"></i></button>
                                        <button type="button" class="btn btn-primary btn-wave flex-fill">Proceed To
                                            Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header">
                                    <div class="card-title">
                                        Discover
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row gy-sm-0 gy-3">
                                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-info-light border-0 px-4 py-3 lh-1 rounded">
                                                <i class="bi bi-cash-coin fs-22"></i>
                                            </a>
                                            <a href="javascript:void(0);"
                                                class="d-block pt-2 text-muted fw-semibold">Bills</a>
                                        </div>
                                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-primary-light border-0 px-4 py-3 lh-1 rounded">
                                                <i class="bi bi-shop-window fs-22"></i>
                                            </a>
                                            <a href="javascript:void(0);"
                                                class="d-block pt-2 text-muted fw-semibold">Shopping</a>
                                        </div>
                                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-warning-light border-0 px-4 py-3 lh-1 rounded">
                                                <i class="bi bi-compass fs-22"></i>
                                            </a>
                                            <a href="javascript:void(0);"
                                                class="d-block pt-2 text-muted fw-semibold">Travel</a>
                                        </div>
                                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-secondary-light border-0 px-4 py-3 lh-1 rounded">
                                                <i class="bi bi-gift fs-22"></i>
                                            </a>
                                            <a href="javascript:void(0);"
                                                class="d-block pt-2 text-muted fw-semibold">Food</a>
                                        </div>
                                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-danger-light border-0 px-4 py-3 lh-1 rounded">
                                                <i class="bi bi-currency-bitcoin fs-22"></i>
                                            </a>
                                            <a href="javascript:void(0);"
                                                class="d-block pt-2 text-muted fw-semibold">Stocks</a>
                                        </div>
                                        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                            <a aria-label="anchor" href="javascript:void(0);"
                                                class="btn btn-light border-0 px-4 py-3 lh-1 rounded">
                                                <i class="bi bi-three-dots fs-22"></i>
                                            </a>
                                            <a href="javascript:void(0);"
                                                class="d-block pt-2 text-muted fw-semibold">Others</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Upcoming Events
                                    </div>
                                    <button type="button" class="btn btn-sm btn-light">View All</button>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled mb-0 personal-upcoming-events">
                                        <li>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light">
                                                        <i class="bi bi-calendar2-heart fs-16 text-primary"></i>
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span>Meeting with <span class="text-primary fw-semibold">Umar
                                                            Xai</span></span>
                                                    <span class="d-block text-muted fs-12">2 Hours</span>
                                                </div>
                                                <div>
                                                    <span class="badge bg-primary-transparent">11-06-2023</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded">
                                                        <img src="/images/faces/2.jpg" alt="">
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span><span class="text-primary fw-semibold">Shin Map</span> Birthday
                                                        Party</span>
                                                    <span class="d-block text-muted fs-12">5 Hours</span>
                                                </div>
                                                <div>
                                                    <span class="badge bg-success-transparent">15-06-2023</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light">
                                                        <i class="bi bi-compass fs-16 text-pink"></i>
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span>Holiday Trip To Italy</span>
                                                    <span class="d-block text-muted fs-12">1 Week</span>
                                                </div>
                                                <div>
                                                    <span class="badge bg-danger-transparent">20-06-2023</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded bg-light">
                                                        <i class="bi bi-balloon-heart fs-16 text-success"></i>
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span>Wedding Anniversary</span>
                                                    <span class="d-block text-muted fs-12">1 Day</span>
                                                </div>
                                                <div>
                                                    <span class="badge bg-secondary-transparent">24-07-2023</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded">
                                                        <img src="/images/faces/7.jpg" alt="">
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span>Meeting with <span class="text-primary fw-semibold">Irav
                                                            Ert</span></span>
                                                    <span class="d-block text-muted fs-12">45 Minutes</span>
                                                </div>
                                                <div>
                                                    <span class="badge bg-warning-transparent">15-06-2023</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Recent Messages
                                    </div>
                                    <button type="button" class="btn btn-light btn-sm btn-wave">View All</button>
                                </div>
                                <div class="card-body">
                                    <div class="avatar-list-stacked mb-4">
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/1.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/9.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/3.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/11.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/6.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="/images/faces/14.jpg" alt="img">
                                        </span>
                                        <a aria-label="anchor" class="avatar bg-light text-default avatar-rounded"
                                            href="javascript:void(0);">
                                            <i class="ri-arrow-right-s-line fs-18"></i>
                                        </a>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-semibold">Messages</div>
                                        <div><i
                                                class="ri-check-double-line me-1 align-middle text-muted d-inline-flex"></i>Mark
                                            as read</div>
                                    </div>
                                    <div class="mt-4">
                                        <ul class="list-unstyled mb-0 personal-messages-list">
                                            <li>
                                                <div class="d-flex flex-wrap align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-rounded">
                                                            <img src="/images/faces/12.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill">
                                                        <span class="fw-semibold d-block">Elin Misk</span>
                                                        <span class="fs-12 text-muted d-block message">Hello there! How are
                                                            you doing? Call me when...</span>
                                                    </div>
                                                    <div class="text-end">
                                                        <span class="d-block text-muted fs-12">2 min</span>
                                                        <span class="badge bg-primary rounded-pill">2</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex flex-wrap align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar avatar-rounded">
                                                            <img src="/images/faces/2.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill">
                                                        <span class="fw-semibold d-block">Shakira Shen</span>
                                                        <span class="fs-12 text-muted d-block message">I would like to
                                                            discuss about that assets...</span>
                                                    </div>
                                                    <div class="text-end">
                                                        <span class="d-block text-muted fs-12">9:43Pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex flex-wrap align-items-center">
                                                    <div class="me-2">
                                                        <span class="avatar bg-primary-transparent avatar-rounded">
                                                            <i class="ri-user-line fs-18"></i>
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill">
                                                        <span class="fw-semibold d-block">Sebastian</span>
                                                        <span class="fs-12 text-muted d-block message">Shall we go to the
                                                            cafe at downtown...</span>
                                                    </div>
                                                    <div class="text-end">
                                                        <span class="d-block text-muted fs-12">Yesterday</span>
                                                        <span class="badge bg-primary rounded-pill">2</span>
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
            </div>
        </div>
        <div class="col-xxl-3 col-xl-12">
            <div class="row">
                <div class="col-xxl-12 col-xl-4">
                    <div class="card custom-card">
                        <div class="card-body">
                            <div class="d-flex align-items-top justify-content-between mb-4">
                                <div>
                                    <span class="d-block fs-15 fw-semibold">My Profile</span>
                                    <span class="d-block fs-12 text-muted">67% Completed - <a href="javascript:void(0);"
                                            class="text-center text-primary">Click Here<i
                                                class="bi bi-box-arrow-up-right fs-10 ms-2 align-middle"></i></a></span>
                                </div>
                                <div class="dropdown">
                                    <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                                        data-bs-toggle="dropdown">
                                        <i class="fe fe-more-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-center mb-4">
                                <div class="mb-3">
                                    <span class="avatar avatar-xxl avatar-rounded circle-progress p-1">
                                        <img src="/images/faces/9.jpg" alt="">
                                    </span>
                                </div>
                                <div>
                                    <h5 class="fw-semibold mb-0">Json Taylor</h5>
                                    <span class="fs-13 text-muted">jsontaylor345@gmail.com</span>
                                </div>
                            </div>
                            <div class="btn-list text-center">
                                <NuxtLink to="/pages/profile" class="btn btn-primary-light btn-sm">
                                    Edit Profile
                                </NuxtLink>
                                <NuxtLink to="/pages/profile" class="btn btn-primary btn-sm ms-1">
                                    View Profile
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-12 col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">My Goals</div>
                            <button type="button" class="btn btn-sm btn-light">View All</button>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled personal-goals-list mb-0">
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-rounded bg-secondary-transparent">
                                                <i class="bi bi-globe2 fs-18"></i>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center justify-content-between mb-2">
                                                <span class="d-block fw-semibold">Maldives Trip</span>
                                                <span class="d-block text-secondary">80%</span>
                                            </div>
                                            <div class="progress progress-animate progress-xs" role="progressbar"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped bg-secondary"
                                                    style="width: 80%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-rounded bg-warning-transparent">
                                                <i class="bi bi-balloon-heart fs-18"></i>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center justify-content-between mb-2">
                                                <span class="d-block fw-semibold">Savings For Birthday</span>
                                                <span class="d-block text-warning">90%</span>
                                            </div>
                                            <div class="progress progress-animate progress-xs" role="progressbar"
                                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped bg-warning"
                                                    style="width: 90%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar avatar-rounded bg-primary-transparent">
                                                <i class="bi bi-lightning fs-18"></i>
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center justify-content-between mb-2">
                                                <span class="d-block fw-semibold">Join Guitar Class</span>
                                                <span class="d-block text-primary">80%</span>
                                            </div>
                                            <div class="progress progress-animate progress-xs" role="progressbar"
                                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar progress-bar-striped bg-primary"
                                                    style="width: 40%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-12 col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header justify-content-between">
                            <div class="card-title">
                                Favourite Contacts
                            </div>
                            <button type="button" class="btn btn-sm btn-light">View All</button>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled personal-favourite-contacts mb-0">
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar">
                                                <img src="/images/faces/2.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block mb-1">Kiara Advain</span>
                                            <span class="text-muted d-block fs-12">+(72)-8765700876</span>
                                        </div>
                                        <div>
                                            <a aria-label="anchor" href="javascript:void(0);" class="text-danger me-2"><i
                                                    class="bi bi-heart-fill"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);" class="text-muted"
                                                data-bs-toggle="dropdown" aria-expanded="false"><i
                                                    class="bi bi-three-dots fs-14"></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="mb-0"><a href="javascript:void(0);"
                                                        class="dropdown-item">Action</a></li>
                                                <li class="mb-0"><a href="javascript:void(0);" class="dropdown-item">Another
                                                        Action</a></li>
                                                <li class="mb-0"><a href="javascript:void(0);"
                                                        class="dropdown-item">Something Else Here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar">
                                                <img src="/images/faces/9.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block mb-1">Jason Mama</span>
                                            <span class="text-muted d-block fs-12">+(72)-234226333</span>
                                        </div>
                                        <div>
                                            <a aria-label="anchor" href="javascript:void(0);" class="text-danger me-2"><i
                                                    class="bi bi-heart-fill"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);" class="text-muted"
                                                data-bs-toggle="dropdown" aria-expanded="false"><i
                                                    class="bi bi-three-dots fs-14"></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="mb-0"><a href="javascript:void(0);"
                                                        class="dropdown-item">Action</a></li>
                                                <li class="mb-0"><a href="javascript:void(0);" class="dropdown-item">Another
                                                        Action</a></li>
                                                <li class="mb-0"><a href="javascript:void(0);"
                                                        class="dropdown-item">Something Else Here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="avatar">
                                                <img src="/images/faces/10.jpg" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <span class="fw-semibold d-block mb-1">Stuart Edward</span>
                                            <span class="text-muted d-block fs-12">+(11)-16743256</span>
                                        </div>
                                        <div>
                                            <a aria-label="anchor" href="javascript:void(0);" class="text-danger me-2"><i
                                                    class="bi bi-heart-fill"></i></a>
                                            <a aria-label="anchor" href="javascript:void(0);" class="text-muted"
                                                data-bs-toggle="dropdown" aria-expanded="false"><i
                                                    class="bi bi-three-dots fs-14"></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="mb-0"><a href="javascript:void(0);"
                                                        class="dropdown-item">Action</a></li>
                                                <li class="mb-0"><a href="javascript:void(0);" class="dropdown-item">Another
                                                        Action</a></li>
                                                <li class="mb-0"><a href="javascript:void(0);"
                                                        class="dropdown-item">Something Else Here</a></li>
                                            </ul>
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

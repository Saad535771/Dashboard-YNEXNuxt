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
                current: "Colors",
                list: [
                    'Utilities', 'Colors'
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
        <div class="col-lg-12 col-sm-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Background Colors
                    </div>
                </div>
                <div class="card-body">
                    <div class="row row-cols-12 d-flex align-items-center">
                        <div class="p-3 col">
                            <div class="m-2 bg-primary mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-primary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-secondary mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-secondary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-warning mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-warning</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-info mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-info</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-success mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-success</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-danger mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-danger</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-light mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-light</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-dark mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-dark</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-sm-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Background gradients
                    </div>
                </div>
                <div class="card-body">
                    <div class="row row-cols-12 d-flex align-items-center">
                        <div class="p-3 col">
                            <div class="m-2 bg-primary-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-primary-gradient</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-secondary-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-secondary-gradient</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-warning-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-warning-gradient</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-info-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-info-gradient</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-success-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-success-gradient</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-danger-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-danger-gradient</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-light-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-light-gradient</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-dark-gradient mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-dark-gradient</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-sm-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Background transparent colors
                    </div>
                </div>
                <div class="card-body">
                    <div class="row row-cols-12 d-flex align-items-center">
                        <div class="p-3 col">
                            <div class="m-2 bg-primary-transparent mx-auto color-container shadow-none"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-primary-transparent</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-secondary-transparent mx-auto color-container shadow-none"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-secondary-transparent</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-warning-transparent mx-auto color-container shadow-none"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-warning-transparent</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-info-transparent mx-auto color-container shadow-none"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-info-transparent</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-success-transparent mx-auto color-container shadow-none"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-success-transparent</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-danger-transparent mx-auto color-container shadow-none"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-danger-transparent</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-light-transparent mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-light-transparent</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-dark-transparent mx-auto color-container shadow-none"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-dark-transparent</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-sm-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Background outline colors
                    </div>
                </div>
                <div class="card-body">
                    <div class="row row-cols-12 d-flex align-items-center">
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-primary mx-auto color-container"><i
                                    class="bi bi-emoji-smile fs-18"></i></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-primary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-secondary mx-auto color-container"><i
                                    class="bi bi-emoji-smile fs-18"></i></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-secondary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-warning mx-auto color-container"><i
                                    class="bi bi-emoji-smile fs-18"></i></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-warning</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-info mx-auto color-container"><i class="bi bi-emoji-smile fs-18"></i>
                            </div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-info</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-success mx-auto color-container"><i
                                    class="bi bi-emoji-smile fs-18"></i></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-success</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-danger mx-auto color-container"><i
                                    class="bi bi-emoji-smile fs-18"></i></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-danger</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-light mx-auto color-container"><i
                                    class="bi bi-emoji-smile fs-18"></i></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-light</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-outline-dark mx-auto color-container"><i class="bi bi-emoji-smile fs-18"></i>
                            </div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-dark</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-sm-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Border Colors
                    </div>
                </div>
                <div class="card-body">
                    <div class="row row-cols-12 d-flex align-items-center">
                        <div class="p-3 col">
                            <div class="m-2 border border-primary mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-primary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 border border-secondary mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-secondary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 border border-warning mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-warning</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 border border-info mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-info</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 border border-success mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-success</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 border border-danger mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-danger</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 border border-light mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-light</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 border border-dark mx-auto color-container"></div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.border-dark</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-sm-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Background Opacity
                    </div>
                </div>
                <div class="card-body">
                    <div class="row row-cols-12 d-flex align-items-center">
                        <div class="p-3 col">
                            <div class="m-2 bg-success bg-opacity-100 text-fixed-white mx-auto color-container">100%</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-75</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-success text-fixed-white bg-opacity-75 mx-auto color-container">75%</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-75</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-success text-fixed-dark bg-opacity-50 mx-auto color-container">50%</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-50</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-success text-fixed-dark bg-opacity-25 mx-auto color-container">25%</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-25</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 bg-success text-fixed-dark bg-opacity-10 mx-auto color-container">10%</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-10</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Text Colors
                    </div>
                </div>
                <div class="card-body">
                    <div class="row row-cols-12 d-flex align-items-center">
                        <div class="p-3 col">
                            <div class="m-2 text-primary fw-semibold fs-14 text-center">primary</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-primary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-secondary fw-semibold fs-14 text-center">secondary</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-secondary</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-warning fw-semibold fs-14 text-center">warning</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-warning</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-info fw-semibold fs-14 text-center">info</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-info</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-success fw-semibold fs-14 text-center">success</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-success</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-danger fw-semibold fs-14 text-center">danger</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-danger</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-light bg-dark fw-semibold fs-14 text-center">light</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-light</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-dark fw-semibold fs-14 text-center">dark</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-dark</code></p>
                        </div>
                        <div class="p-3 col">
                            <div class="m-2 text-muted fw-semibold fs-14 text-center">muted</div>
                            <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-muted</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">

        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Text Opacity
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row row-cols-12 d-flex align-items-center">
                                <div class="p-3 col">
                                    <div class="m-2 text-primary fw-semibold fs-14 text-center">Opacity-100</div>
                                    <p class="pb-0 mb-0 fw-semibold text-center"><code>100% opacity</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-primary text-opacity-75 fw-semibold fs-14 text-center">Opacity-100
                                    </div>
                                    <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-opacity-75</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-primary text-opacity-50 fw-semibold fs-14 text-center">Opacity-100
                                    </div>
                                    <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-opacity-50</code></p>
                                </div>
                                <div class="p-3 col">
                                    <div class="m-2 text-primary text-opacity-25 fw-semibold fs-14 text-center">Opacity-100
                                    </div>
                                    <p class="pb-0 mb-0 fw-semibold text-center"><code>.text-opacity-25</code></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Callout
                    </div>
                </div>
                <div class="card-body">
                    <div class="callout">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. </div>
                    <div class="callout callout-info">Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. </div>
                    <div class="callout callout-warning">Lorem ipsum dolor sit amet
                        consectetur
                        adipisicing elit. </div>
                    <div class="callout callout-danger">Lorem ipsum dolor sit amet
                        consectetur
                        adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <h6 class="mb-3">Other Colors:</h6>
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-blue-100">$blue-100</div>

                    <div class="flex-fill p-3 bd-blue-200">$blue-200</div>

                    <div class="flex-fill p-3 bd-blue-300">$blue-300</div>

                    <div class="flex-fill p-3 bd-blue-400">$blue-400</div>

                    <div class="flex-fill p-3 bd-blue-500">$blue-500</div>

                    <div class="flex-fill p-3 bd-blue-600">$blue-600</div>

                    <div class="flex-fill p-3 bd-blue-700">$blue-700</div>

                    <div class="flex-fill p-3 bd-blue-800">$blue-800</div>

                    <div class="flex-fill p-3 bd-blue-900">$blue-900</div>

                    <div class="flex-fill p-3 bd-blue">$blue</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-indigo-100">$indigo-100</div>

                    <div class="flex-fill p-3 bd-indigo-200">$indigo-200</div>

                    <div class="flex-fill p-3 bd-indigo-300">$indigo-300</div>

                    <div class="flex-fill p-3 bd-indigo-400">$indigo-400</div>

                    <div class="flex-fill p-3 bd-indigo-500">$indigo-500</div>

                    <div class="flex-fill p-3 bd-indigo-600">$indigo-600</div>

                    <div class="flex-fill p-3 bd-indigo-700">$indigo-700</div>

                    <div class="flex-fill p-3 bd-indigo-800">$indigo-800</div>

                    <div class="flex-fill p-3 bd-indigo-900">$indigo-900</div>

                    <div class="flex-fill p-3 bd-indigo">$indigo</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-purple-100">$purple-100</div>

                    <div class="flex-fill p-3 bd-purple-200">$purple-200</div>

                    <div class="flex-fill p-3 bd-purple-300">$purple-300</div>

                    <div class="flex-fill p-3 bd-purple-400">$purple-400</div>

                    <div class="flex-fill p-3 bd-purple-500">$purple-500</div>

                    <div class="flex-fill p-3 bd-purple-600">$purple-600</div>

                    <div class="flex-fill p-3 bd-purple-700">$purple-700</div>

                    <div class="flex-fill p-3 bd-purple-800">$purple-800</div>

                    <div class="flex-fill p-3 bd-purple-900">$purple-900</div>

                    <div class="flex-fill p-3 bd-purple">$purple</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-pink-100">$pink-100</div>

                    <div class="flex-fill p-3 bd-pink-200">$pink-200</div>

                    <div class="flex-fill p-3 bd-pink-300">$pink-300</div>

                    <div class="flex-fill p-3 bd-pink-400">$pink-400</div>

                    <div class="flex-fill p-3 bd-pink-500">$pink-500</div>

                    <div class="flex-fill p-3 bd-pink-600">$pink-600</div>

                    <div class="flex-fill p-3 bd-pink-700">$pink-700</div>

                    <div class="flex-fill p-3 bd-pink-800">$pink-800</div>

                    <div class="flex-fill p-3 bd-pink-900">$pink-900</div>

                    <div class="flex-fill p-3 bd-pink">$pink</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-red-100">$red-100</div>

                    <div class="flex-fill p-3 bd-red-200">$red-200</div>

                    <div class="flex-fill p-3 bd-red-300">$red-300</div>

                    <div class="flex-fill p-3 bd-red-400">$red-400</div>

                    <div class="flex-fill p-3 bd-red-500">$red-500</div>

                    <div class="flex-fill p-3 bd-red-600">$red-600</div>

                    <div class="flex-fill p-3 bd-red-700">$red-700</div>

                    <div class="flex-fill p-3 bd-red-800">$red-800</div>

                    <div class="flex-fill p-3 bd-red-900">$red-900</div>

                    <div class="flex-fill p-3 bd-red">$red</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-orange-100">$orange-100</div>

                    <div class="flex-fill p-3 bd-orange-200">$orange-200</div>

                    <div class="flex-fill p-3 bd-orange-300">$orange-300</div>

                    <div class="flex-fill p-3 bd-orange-400">$orange-400</div>

                    <div class="flex-fill p-3 bd-orange-500">$orange-500</div>

                    <div class="flex-fill p-3 bd-orange-600">$orange-600</div>

                    <div class="flex-fill p-3 bd-orange-700">$orange-700</div>

                    <div class="flex-fill p-3 bd-orange-800">$orange-800</div>

                    <div class="flex-fill p-3 bd-orange-900">$orange-900</div>

                    <div class="flex-fill p-3 bd-orange">$orange</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-yellow-100">$yellow-100</div>

                    <div class="flex-fill p-3 bd-yellow-200">$yellow-200</div>

                    <div class="flex-fill p-3 bd-yellow-300">$yellow-300</div>

                    <div class="flex-fill p-3 bd-yellow-400">$yellow-400</div>

                    <div class="flex-fill p-3 bd-yellow-500">$yellow-500</div>

                    <div class="flex-fill p-3 bd-yellow-600">$yellow-600</div>

                    <div class="flex-fill p-3 bd-yellow-700">$yellow-700</div>

                    <div class="flex-fill p-3 bd-yellow-800">$yellow-800</div>

                    <div class="flex-fill p-3 bd-yellow-900">$yellow-900</div>

                    <div class="flex-fill p-3 bd-yellow">$yellow</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-green-100">$green-100</div>

                    <div class="flex-fill p-3 bd-green-200">$green-200</div>

                    <div class="flex-fill p-3 bd-green-300">$green-300</div>

                    <div class="flex-fill p-3 bd-green-400">$green-400</div>

                    <div class="flex-fill p-3 bd-green-500">$green-500</div>

                    <div class="flex-fill p-3 bd-green-600">$green-600</div>

                    <div class="flex-fill p-3 bd-green-700">$green-700</div>

                    <div class="flex-fill p-3 bd-green-800">$green-800</div>

                    <div class="flex-fill p-3 bd-green-900">$green-900</div>

                    <div class="flex-fill p-3 bd-green">$green</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-teal-100">$teal-100</div>

                    <div class="flex-fill p-3 bd-teal-200">$teal-200</div>

                    <div class="flex-fill p-3 bd-teal-300">$teal-300</div>

                    <div class="flex-fill p-3 bd-teal-400">$teal-400</div>

                    <div class="flex-fill p-3 bd-teal-500">$teal-500</div>

                    <div class="flex-fill p-3 bd-teal-600">$teal-600</div>

                    <div class="flex-fill p-3 bd-teal-700">$teal-700</div>

                    <div class="flex-fill p-3 bd-teal-800">$teal-800</div>

                    <div class="flex-fill p-3 bd-teal-900">$teal-900</div>

                    <div class="flex-fill p-3 bd-teal">$teal</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-cyan-100">$cyan-100</div>

                    <div class="flex-fill p-3 bd-cyan-200">$cyan-200</div>

                    <div class="flex-fill p-3 bd-cyan-300">$cyan-300</div>

                    <div class="flex-fill p-3 bd-cyan-400">$cyan-400</div>

                    <div class="flex-fill p-3 bd-cyan-500">$cyan-500</div>

                    <div class="flex-fill p-3 bd-cyan-600">$cyan-600</div>

                    <div class="flex-fill p-3 bd-cyan-700">$cyan-700</div>

                    <div class="flex-fill p-3 bd-cyan-800">$cyan-800</div>

                    <div class="flex-fill p-3 bd-cyan-900">$cyan-900</div>

                    <div class="flex-fill p-3 bd-cyan">$cyan</div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body d-xl-flex">
                    <div class="flex-fill p-3 bd-gray-100">$gray-100</div>

                    <div class="flex-fill p-3 bd-gray-200">$gray-200</div>

                    <div class="flex-fill p-3 bd-gray-300">$gray-300</div>

                    <div class="flex-fill p-3 bd-gray-400">$gray-400</div>

                    <div class="flex-fill p-3 bd-gray-500">$gray-500</div>

                    <div class="flex-fill p-3 bd-gray-600">$gray-600</div>

                    <div class="flex-fill p-3 bd-gray-700">$gray-700</div>

                    <div class="flex-fill p-3 bd-gray-800">$gray-800</div>

                    <div class="flex-fill p-3 bd-gray-900">$gray-900</div>

                    <div class="flex-fill p-3 bd-gray">$gray</div>
            </div>
        </div>
    </div>
</div>
<!-- End:: row-5 --></template>

<style scoped></style>


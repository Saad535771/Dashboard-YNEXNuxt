<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import StarRating from 'vue-star-rating';
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
        StarRating
    },
    data() {
        return {
            dataToPass: {
                current: "Ratings",
                list: [
                    'AdvancedUI', 'Ratings'
                ]
            },
            resetableRating: 1,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-4 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Rater
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <p class="fs-14 mb-0 fw-semibold">Show Some <span class="text-danger">&#10084;</span> with rating :
                        </p>
                        <star-rating :star-size="20" :show-rating="false"></star-rating>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        5 star rater with steps
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <p class="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>
                        <star-rating :star-size="20" :increment="0.5" :show-rating="false"></star-rating>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        On hover event
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <p class="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
                        <div class="d-flex flex-wrap align-items-center">
                            <star-rating :star-size="20"
                                text-class="live-rating badge bg-success-transparent ms-3"></star-rating>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Unlimited number of stars readOnly
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                        <star-rating :max-rating="10" :star-size="20" :show-rating="false"></star-rating>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        5 Star rater with custom isBusyText and simulated backend
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <p class="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                        <star-rating :star-size="20" :show-rating="false"></star-rating>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Inline Stars
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <p class="fs-14 mb-0 fw-semibold">Your rating is much appreciated&#128079; :</p>
                        <div style="display:inline-block;">
                            Rated
                            <star-rating :inline="true" :star-size="20" :show-rating="false" :rating="5"></star-rating>
                            by our customers.

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-6">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Clear/reset rater
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <p class="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
                        <div class="d-flex flex-wrap align-items-center">
                            <star-rating :star-size="20" v-model:rating="resetableRating"
                                :show-rating="false"></star-rating>
                            <button class="btn btn-icon btn-sm btn-danger-light ms-3" id="rater-reset-button"
                                @click="resetableRating = 0;"><v-tooltip activator="parent" location="top">Reset</v-tooltip>
                                <i class="ri-restart-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>


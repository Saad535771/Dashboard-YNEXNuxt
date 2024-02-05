<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/spinner.js';
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Spinners",
                list: [
                    'UI-Elements', 'Spinners'
                ]
            },
            prism
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">

            <showcodeCard title="Border spinner" :code="prism.BorderSpinner">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Colors" :code="prism.Colors">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard title="Growing spinner" :code="prism.GrowingSpinner">
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Growing spinner" :code="prism.GrowingSpinner1">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">

            <showcodeCard title="Alignment Flex" :code="prism.AlignmentFlex">
                <div class="d-flex justify-content-center mb-4">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Alignment Float" :code="prism.AlignmentFloat">
                <div class="clearfix mb-4">
                    <div class="spinner-border float-end" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="spinner-border float-start" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">

            <showcodeCard title="Alignment Text center" :code="prism.AlignmentTextCenter">
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </showcodeCard>


            <showcodeCard title="Spinner Sizes" custom-card-body-class="d-flex 
                align-items-center" :code="prism.SpinnerSizes">
                <div class="spinner-border spinner-border-sm me-4" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm me-4" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border me-4" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard title="Alignment Margin" :code="prism.AlignmentMargin">
                <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard title="Buttons" :code="prism.Buttons">
                <div class="btn-list">
                    <button class="btn btn-primary-light" type="button" disabled>
                        <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                    </button>
                    <button class="btn btn-primary-light" type="button" disabled>
                        <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-primary-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                    </button>
                    <button class="btn btn-primary-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-secondary-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-success-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-info-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-warning-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-danger-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-light" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <button class="btn btn-dark text-fixed-white" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->
</template>

<style scoped></style>


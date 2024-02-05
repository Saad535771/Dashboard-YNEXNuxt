<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/objectfit.js';
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
                current: "Objectfit",
                list: [
                    'UI-Elements', 'Objectfit'
                ]
            },
            prism
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">

            <showcodeCard title="Object Fit Contain" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitContain">
                <img src="/images/media/media-28.jpg" class="object-fit-contain border rounded" alt="...">

            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">

            <showcodeCard title="Object Fit Cover" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitCover">
                <img src="/images/media/media-28.jpg" class="object-fit-cover border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">

            <showcodeCard title="Object Fit Fill" custom-card-body-class="object-fit-container" :code="prism.ObjectFitFill">
                <img src="/images/media/media-28.jpg" class="object-fit-fill border rounded" alt="...">
            </showcodeCard>
        </div>

        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Scale Down" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitScaleDown">
                <img src="/images/media/media-28.jpg" class="object-fit-scale border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit None" custom-card-body-class="object-fit-container" :code="prism.ObjectFitNone">
                <img src="/images/media/media-28.jpg" class="object-fit-none border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Contain (SM - responsive)" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitContainSMResponsive">
                <img src="/images/media/media-28.jpg" class="object-fit-sm-contain border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Contain (MD - responsive)" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitContainMDResponsive">
                <img src="/images/media/media-28.jpg" class="object-fit-md-contain border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Contain (LG - responsive)" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitContainLGResponsive">
                <img src="/images/media/media-28.jpg" class="object-fit-lg-contain border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Contain (XL - responsive)" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitContainXLResponsive">
                <img src="/images/media/media-28.jpg" class="object-fit-xl-contain border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Contain (XXL - responsive)" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitContainXXLResponsive">
                <img src="/images/media/media-28.jpg" class="object-fit-xxl-contain border rounded" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Contain Video" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitContainVideo">
                <video src="@/assets/video/1.mp4" class="object-fit-contain rounded border" autoplay loop muted></video>
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Cover Video" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitCoverVideo">
                <video src="@/assets/video/1.mp4" class="object-fit-cover rounded border" autoplay loop muted></video>
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Fill Video" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitFillVideo">
                <video src="@/assets/video/1.mp4" class="object-fit-fill rounded border" autoplay loop muted></video>
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title="Object Fit Scale Video" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitScaleVideo">
                <video src="@/assets/video/1.mp4" class="object-fit-scale rounded border" autoplay loop muted></video>
            </showcodeCard>
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <showcodeCard title=" Object Fit None Video" custom-card-body-class="object-fit-container"
                :code="prism.ObjectFitNoneVideo">
                <video src="@/assets/video/1.mp4" class="object-fit-none rounded border" autoplay loop muted></video>
            </showcodeCard>
        </div>
    </div>
    <!-- End::row-1 -->
</template>

<style scoped></style>


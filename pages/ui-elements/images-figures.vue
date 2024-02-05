<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/ui-elements/image-figure.js';
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
                current: "Image & Figures",
                list: [
                    'UI-Elements', 'Image & Figures'
                ]
            },
            prism,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-4">

            <showcodeCard title="Responsive image" :code="prism.ResponsiveImage">
                <p class="card-title mb-3">Use <code> .img-fluid </code>class to the img tag to get responsive image.
                </p>
                <div class="text-center">
                    <img src="/images/media/media-48.jpg" class="img-fluid" alt="...">
                </div>
            </showcodeCard>
        </div>

        <div class="col-xl-4">

            <showcodeCard title="Image With Radius" :code="prism.ImageWithRadius">
                <p class="card-title mb-3">Use <code>.rounded</code> class along with <code>.img-fluid</code> to get
                    border radius.</p>
                <div class="text-center">
                    <img src="/images/media/media-49.jpg" class="img-fluid rounded" alt="...">
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-4">

            <showcodeCard title="Rounded Image" :code="prism.RoundedImage">
                <p class="card-title mb-3">Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded
                    image.</p>
                <div class="text-center">
                    <img src="/images/media/media-50.jpg" class="img-fluid rounded-pill" alt="...">
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <showcodeCard title="Image Left Align" :code="prism.ImageLeftAlign">
                <img class="rounded float-start" src="/images/media/media-53.jpg" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard title="Image Center Align" :code="prism.ImageCenterAlign">
                <img class="rounded mx-auto d-block" src="/images/media/media-55.jpg" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xl-4">

            <showcodeCard title="Image Right Align" :code="prism.ImageRightAlign">
                <img class="rounded float-end" src="/images/media/media-54.jpg" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xl-6">

            <showcodeCard title="Figures" custom-card-body-class="d-flex  justify-content-between gap-2"
                :code="prism.Figures">
                <figure class="figure">
                    <img class="bd-placeholder-img figure-img img-fluid rounded card-img" src="/images/media/media-56.jpg"
                        alt="...">
                    <figcaption class="figure-caption mt-2">A caption for the above image.
                    </figcaption>
                </figure>
                <figure class="figure float-end">
                    <img class="bd-placeholder-img figure-img img-fluid rounded card-img" src="/images/media/media-57.jpg"
                        alt="...">
                    <figcaption class="figure-caption text-end mt-2">A caption for the above image.
                    </figcaption>
                </figure>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Image Thumbnail" :code="prism.ImageThumbnail">
                <p class="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.
                </p>
                <div class="text-center">
                    <img src="/images/media/media-51.jpg" class="img-thumbnail" alt="...">
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-3">

            <showcodeCard title="Rounded Thumbnail" :code="prism.RoundedThumbnail">
                <p class="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code>
                    to
                    get radius.</p>
                <div class="text-center">
                    <img src="/images/media/media-52.jpg" class="img-thumbnail rounded-pill" alt="...">
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>


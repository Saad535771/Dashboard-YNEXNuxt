<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from "@/data/prismCode/utilities/borders.js";
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
                current: "Borders",
                list: [
                    'Utilities', 'Borders'
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
            <showcodeCard :code="prism.borders" title="Borders">
                <span class="border border-container"></span>
                <span class="border-top border-container"></span>
                <span class="border-end border-container"></span>
                <span class="border-bottom border-container"></span>
                <span class="border-start border-container"></span>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.removeBorders" title="Remove borders">
                <span class="border-0 border-container"></span>
                <span class="border border-top-0 border-container"></span>
                <span class="border border-end-0 border-container"></span>
                <span class="border border-bottom-0 border-container"></span>
                <span class="border border-start-0 border-container"></span>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-5">
            <showcodeCard :code="prism.borderWidths" title="Border Widths">
                <span class="border border-container border-1"></span>
                <span class="border border-container border-2"></span>
                <span class="border border-container border-3"></span>
                <span class="border border-container border-4"></span>
                <span class="border border-container border-5"></span>
            </showcodeCard>
        </div>
        <div class="col-xl-7">
            <showcodeCard :code="prism.borderColors" title="Border colors">
                <span class="border border-container border-primary"></span>
                <span class="border border-container border-secondary"></span>
                <span class="border border-container border-success"></span>
                <span class="border border-container border-danger"></span>
                <span class="border border-container border-warning"></span>
                <span class="border border-container border-info"></span>
                <span class="border border-container border-light"></span>
                <span class="border border-container border-dark"></span>
                <span class="border border-container border-white"></span>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.borderColorStyling" title="Border color Styling">
                <div class="mb-4">
                    <label for="exampleFormControlInput1" class="form-label">Email
                        address</label>
                    <input type="email" class="form-control border-success" id="exampleFormControlInput1"
                        placeholder="name@example.com">
                </div>
                <div class="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                    Below Shows Danger Border
                </div>
                <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
                    Customizing borders with background colors
                </div>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.borderWithOpacity" title="Border with opacity">
                <div class="border border-success p-2 mb-2">This is default success border</div>
                <div class="border border-success p-2 mb-2 border-opacity-75">This is 75%
                    opacity
                    success border
                </div>
                <div class="border border-success p-2 mb-2 border-opacity-50">This is 50%
                    opacity
                    success border
                </div>
                <div class="border border-success p-2 mb-2 border-opacity-25">This is 25%
                    opacity
                    success border
                </div>
                <div class="border border-success p-2 border-opacity-10">This is 10% opacity
                    success
                    border
                </div>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.borderRadius" title="Border Radius">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-top" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-end" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-bottom" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-start" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img rounded-circle" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img  rounded-pill" alt="...">
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.sizes" title="Sizes">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-1" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-2" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-3" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-4" alt="...">
                <img src="/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-5" alt="...">
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->
</template>

<style scoped></style>


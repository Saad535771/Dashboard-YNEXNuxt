<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import * as prism from '@/data/prismCode/forms/formelements/colorpicker.js';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
        const pureColor = ref("red");
        const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

        return { pureColor, gradientColor }
    },
    components: {
        PageHeader, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Color Picker",
                list: [
                    'Forms', 'Form Elements', 'Color Picker'
                ]
            },
            prism,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-6 custom-color-picker">
            <showcodeCard :code="prism.vue3CircleWithDisabledAlphaColorPicker"
                title="vue3 Circle with Disabled Alpha Color Picker">
                <color-picker v-model:pureColor="pureColor" shape="circle" format="rgb" pickerType="chrome" useType="pure"
                    :disableAlpha="true" />
            </showcodeCard>
        </div>
        <div class="col-xl-6 custom-color-picker">
            <showcodeCard :code="prism.vue3GradientColorPicker" title="vue3 Gradient Color Picker">
                <color-picker v-model:gradientColor="gradientColor" useType="both" lang="en" />
            </showcodeCard>
        </div>
        <div class="col-xl-12">
            <showcodeCard :code="prism.vuetifyColorPicker" title="Vuetify Color Picker"
                custom-card-body-class="d-flex justify-content-between">
                <div class="row g-3">
                    <div class="col">
                        <v-color-picker></v-color-picker>
                    </div>
                    <div class="col">
                        <v-color-picker hide-canvas show-swatches></v-color-picker>
                    </div>
                </div>
            </showcodeCard>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style >
.custom-color-picker .vc-color-wrap.round{
    width: 2rem;height: 2rem;
}
.custom-color-picker .vc-color-wrap:not(.sqaure){
    height: 2rem;
}
</style>

<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import showcodeCard from "@/components/UI/showcodeCard.vue";
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import * as prism from '@/data/prismCode/forms/formelements/range-slider.js';
import auth from '@/middleware/auth';


export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })
    },
    components: {
        PageHeader,
        VueSlider, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Range Slider",
                list: [
                    'Forms', 'Form Elements', 'Range Slider'
                ]
            },
            prism,
            square: 0,
            syncMultivalue: 10,
            customvalue: 50,
            customvalue1: 30,
            customvalue2: 60,
            customvalue3: 80,
            customvalue4: 20,
            customvalue5: 50,
            syncMultiinDragging: false,
            limitRange: [0, 30],
            customTooltip: 0,
            dotTooltips: [0, 50, 100],
            diffTolltips: [0, 50],
            customformatter: '{value}%',
            dotOptions: [{
                tooltip: 'always'
            }, {
                tooltip: 'active'
            }, {
                tooltip: 'always'
            }], colored: [0, 30, 50, 70, 100],
            coloredprocess: (dotsPos: any) => [
                [dotsPos[0], dotsPos[1], { backgroundColor: '#3FB8AF' }],
                [dotsPos[1], dotsPos[2], { backgroundColor: '#f5b849' }],
                [dotsPos[2], dotsPos[3], { backgroundColor: '#3FB8AF' }],
                [dotsPos[3], dotsPos[4], { backgroundColor: '#eb533c' }]
            ],
            customLabeldata: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            customLabel: 'a',
            independentValue: [0, 50],
            marks: {
                '100': {
                    label: '🏁',
                    labelStyle: {
                        left: '100%',
                        top: '0',
                        transform: 'translateY(-150%) translateX(-50%)'
                    }
                },
            },
            labelSlotValue: 0,
            labelSlotmarks: (val: number) => val % 20 === 0,
            stepSlotValue: 0,
            stepSlotMarks: (val: number) => val % 20 === 0,
            formatter2: (v: string) => `$${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-3">
            <showcodeCard :code="prism.defaultRange" title="Default Range">
                <input type="range" class="form-range" id="customRange1">
            </showcodeCard>
        </div>
        <div class="col-xl-3">
            <showcodeCard :code="prism.disabledRange" title="Disabled Range">
                <input type="range" class="form-range" id="disabledRange" disabled>
            </showcodeCard>
        </div>
        <div class="col-xl-3">
            <showcodeCard :code="prism.rangeWithMinAndMaxValues" title=" Range With Min and Max Values">
                <input type="range" class="form-range" min="0" max="5" id="customRange2">
            </showcodeCard>
        </div>
        <div class="col-xl-3">
            <showcodeCard :code="prism.rangeWithSteps" title="Range With Steps">
                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <h6 class="mb-3">vue-slider-component:</h6>
    <div class="row">
        <div class="col-xl-3">
            <showcodeCard :code="prism.defaultStyling" title="Default-Styling">
                <vue-slider :tooltip="'none'"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-3">
            <showcodeCard :code="prism.limitDistanceBetweenSliders" title="Limit distance between sliders">
                <vue-slider v-model="limitRange" :min-range="20" :max-range="50"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-3">
            <showcodeCard :code="prism.slideWithCustomTooltip" title="Slide with custom Tooltip">
                <vue-slider v-model="customTooltip" :tooltip-formatter="customformatter"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-3">
            <showcodeCard :code="prism.squareStyling" title="Square Styling">
                <vue-slider v-model="square" :tooltip="'none'" :process-style="{ backgroundColor: 'pink' }"
                    :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }">
                    <template v-slot:dot="{ value, focus }">
                        <div :class="['custom-dot', { focus }]"></div>
                    </template>
                </vue-slider>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="col-xl-12">
                <showcodeCard :code="prism.syncMultiComponentSliders" title="Sync Multi component Sliders">
                    <vue-slider class="mb-3" v-for="n in 2" :key="n" v-model="syncMultivalue"
                        :duration="syncMultiinDragging ? 0 : 0.5" @drag-start="() => syncMultiinDragging = true"
                        @drag-end="() => syncMultiinDragging = false"></vue-slider>
                </showcodeCard>
            </div>
            <div class="col-xl-12">
                <showcodeCard :code="prism.labelSlot" title="Label slot">
                    <vue-slider v-model="labelSlotValue" :marks="labelSlotmarks" class="mb-3">
                        <template v-slot:label="{ label, active }">
                            <div :class="['vue-slider-mark-label', 'custom-label', { active }]">{{ label }}</div>
                        </template>
                    </vue-slider>
                </showcodeCard>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="col-xl-12">
                <showcodeCard :code="prism.tooltipsSlider" title="tooltips slider">
                    <vue-slider class="mb-3" v-model="dotTooltips" :dot-options="dotOptions"></vue-slider>
                    <vue-slider class="mb-3" v-model="diffTolltips" :tooltip="'always'"
                        :tooltip-placement="['top', 'bottom']"></vue-slider>
                </showcodeCard>
            </div>
            <div class="col-xl-12">
                <showcodeCard :code="prism.stepSlot" title="Step slot">
                    <vue-slider v-model="stepSlotValue" :marks="stepSlotMarks" class="mb-3">
                        <template v-slot:step="{ label, active }">
                            <div :class="['custom-step', { active }]"></div>
                        </template>
                    </vue-slider>
                </showcodeCard>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.coloredConnectElements" title="Colored Connect Elements">
                <vue-slider v-model="colored" :process="coloredprocess"></vue-slider>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-6">
            <showcodeCard :code="prism.customLabels" title="Custom Labels">
                <vue-slider v-model="customLabel" :data="customLabeldata" :marks="true" class="mb-3"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-6">
            <showcodeCard :code="prism.independentSlider" title="Independent slider">
                <vue-slider v-model="independentValue" :order="false" :tooltip="'always'" :process="false" :marks="marks"
                    class="my-3">
                    <template #tooltip="{ index }">
                        <div v-if="index === 1">🐰</div>
                        <div v-else>🐢</div>
                    </template>
                </vue-slider>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-4">
            <showcodeCard :code="prism.primary" title="Primary">
                <vue-slider v-model="customvalue" id="primary-colored-slider"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard :code="prism.secondary" title="Secondary">
                <vue-slider v-model="customvalue1" id="secondary-colored-slider"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard :code="prism.warning" title="Warning">
                <vue-slider v-model="customvalue2" id="warning-colored-slider"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard :code="prism.info" title="Info">
                <vue-slider v-model="customvalue3" id="info-colored-slider"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard :code="prism.success" title="Success">
                <vue-slider v-model="customvalue4" id="success-colored-slider"></vue-slider>
            </showcodeCard>
        </div>
        <div class="col-xl-4">
            <showcodeCard :code="prism.danger" title="Danger">
                <vue-slider v-model="customvalue5" id="danger-colored-slider"></vue-slider>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-6 -->
</template>

<style >
.custom-step.active {
    box-shadow: 0 0 0 3px var(--primary-color);
    background-color: var(--primary-color);
}

.custom-label.active {
    color: var(--primary-color);
}

.vue-slider-process {
    background-color: var(--primary-color);
}

.vue-slider-dot-tooltip-inner {
    background-color: var(--primary08);
    border-color: var(--primary08);
}
</style>


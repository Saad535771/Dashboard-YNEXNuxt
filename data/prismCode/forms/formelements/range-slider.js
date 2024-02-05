export let
defaultRange = { script : `&lt;input type="range" class="form-range" id="customRange1">` },
disabledRange = { script : `&lt;input type="range" class="form-range" id="disabledRange" disabled>` },
rangeWithMinAndMaxValues = { script : `&lt;input type="range" class="form-range" min="0" max="5" id="customRange2">` },
rangeWithSteps = { script : `&lt;input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">` },
defaultStyling = { script : `&lt;vue-slider :tooltip="'none'">&lt;/vue-slider>` },
limitDistanceBetweenSliders = { script : `&lt;vue-slider v-model="limitRange" :min-range="20" :max-range="50">&lt;/vue-slider>` },
slideWithCustomTooltip = { script : `&lt;vue-slider v-model="customTooltip" :tooltip-formatter="customformatter">&lt;/vue-slider>` },
squareStyling = { script : `&lt;vue-slider v-model="square" :tooltip="'none'" :process-style="{ backgroundColor: 'pink' }"
:tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }">
&lt;template v-slot:dot="{ value, focus }">
    &lt;div :class="['custom-dot', { focus }]">&lt;/div>
&lt;/template>
&lt;/vue-slider>` },
syncMultiComponentSliders = { script : `&lt;vue-slider class="mb-3" v-for="n in 2" :key="n" v-model="syncMultivalue"
:duration="syncMultiinDragging ? 0 : 0.5" @drag-start="() => syncMultiinDragging = true"
@drag-end="() => syncMultiinDragging = false">&lt;/vue-slider>` },
labelSlot = { script : `&lt;vue-slider v-model="labelSlotValue" :marks="labelSlotmarks" class="mb-3">
&lt;template v-slot:label="{ label, active }">
    &lt;div :class="['vue-slider-mark-label', 'custom-label', { active }]">{{ label }}&lt;/div>
&lt;/template>
&lt;/vue-slider>` },
tooltipsSlider = { script : `&lt;vue-slider class="mb-3" v-model="dotTooltips" :dot-options="dotOptions">&lt;/vue-slider>
&lt;vue-slider class="mb-3" v-model="diffTolltips" :tooltip="'always'"
    :tooltip-placement="['top', 'bottom']">&lt;/vue-slider>` },
stepSlot = { script : `&lt;vue-slider v-model="stepSlotValue" :marks="stepSlotMarks" class="mb-3">
&lt;template v-slot:step="{ label, active }">
    &lt;div :class="['custom-step', { active }]">&lt;/div>
&lt;/template>
&lt;/vue-slider>` },
coloredConnectElements = { script : `&lt;vue-slider v-model="colored" :process="coloredprocess">&lt;/vue-slider>` },
customLabels = { script : `&lt;vue-slider v-model="customLabel" :data="customLabeldata" :marks="true" class="mb-3">&lt;/vue-slider>` },
independentSlider = { script : `&lt;vue-slider v-model="independentValue" :order="false" :tooltip="'always'" :process="false" :marks="marks"
class="my-3">
&lt;template #tooltip="{ index }">
    &lt;div v-if="index === 1">🐰&lt;/div>
    &lt;div v-else>🐢&lt;/div>
&lt;/template>
&lt;/vue-slider>` },
primary = { script : `&lt;vue-slider v-model="customvalue" id="primary-colored-slider">&lt;/vue-slider>` },
secondary = { script : `&lt;vue-slider v-model="customvalue1" id="secondary-colored-slider">&lt;/vue-slider>` },
warning = { script : `&lt;vue-slider v-model="customvalue2" id="warning-colored-slider">&lt;/vue-slider>` },
info = { script : `&lt;vue-slider v-model="customvalue3" id="info-colored-slider">&lt;/vue-slider>` },
success = { script : `&lt;vue-slider v-model="customvalue4" id="success-colored-slider">&lt;/vue-slider>` },
danger = { script : `&lt;vue-slider v-model="customvalue5" id="danger-colored-slider">&lt;/vue-slider>` };
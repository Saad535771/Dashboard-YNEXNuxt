export let
    vue3CircleWithDisabledAlphaColorPicker = {
        script: `&lt;color-picker v-model:pureColor="pureColor" shape="circle" format="rgb" pickerType="chrome" useType="pure"
    :disableAlpha="true" />` },
    vue3GradientColorPicker = { script: `&lt;color-picker v-model:gradientColor="gradientColor" useType="both" lang="en" />` },
    vuetifyColorPicker = {
        script: `&lt;div>
    &lt;v-color-picker>&lt;/v-color-picker>
&lt;/div>
&lt;div>
    &lt;v-color-picker show-swatches>&lt;/v-color-picker>
&lt;/div>
&lt;div>
    &lt;v-color-picker hide-canvas show-swatches>&lt;/v-color-picker>
&lt;/div>` };
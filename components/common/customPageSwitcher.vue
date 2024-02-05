<script lang="ts">

import { switcherStore } from '@/stores/switcher';
export default {
  data() {
    return {
      switcher: switcherStore(),
      dynamicPrimaryColor: ref("black")
    }
  },
  methods: {
    primaryColorFn(color: any) {
      let primaryRgb = this.convertRgbToIndividual(color);
      this.themePrimaryFn(primaryRgb);
    },
    convertRgbToIndividual(value: any) {
      // Use a regular expression to extract the numeric values
      const numericValues = value.match(/\d+/g);
      // Join the numeric values with spaces to get the desired format
      return numericValues.join(' ');
    },
    themePrimaryFn(value: string) { this.switcher.themePrimaryFn(value); },
    colorthemeFn(value: string) {
      this.switcher.colorthemeFn(value);
      localStorage.setItem("ynexcolortheme", value);
      if (value == 'dark') {
        localStorage.setItem("ynexHeader", 'dark');
        localStorage.setItem("ynexcolortheme", 'dark');
      }
    },
    directionFn(value: string) {
      this.switcher.directionFn(value);
      localStorage.setItem('ynexdirection', value);
    },
    custompageLocalStorage() {
      this.switcher.custompageLocalStorage();
    },
    async reset() {
      await this.switcher.$reset();
      await this.switcher.custompageReset();
    },

  },
  mounted() {
    this.custompageLocalStorage();
  },
}
</script>


<template>
  <!-- Start Switcher -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Switcher</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="">
        <p class="switcher-style-head">Theme Color Mode:</p>
        <div class="row switcher-style">
          <div class="col-4">
            <div class="form-check switch-select">
              <label class="form-check-label" for="switcher-light-theme">
                Light
              </label>
              <input @click="colorthemeFn('light')" :checked="switcher.colortheme == 'light' ? true : false"
                class="form-check-input" type="radio" name="theme-style" id="switcher-light-theme">
            </div>
          </div>
          <div class="col-4">
            <div class="form-check switch-select">
              <label class="form-check-label" for="switcher-dark-theme">
                Dark
              </label>
              <input @click="colorthemeFn('dark')" class="form-check-input" type="radio" name="theme-style"
                id="switcher-dark-theme" :checked="switcher.colortheme == 'dark' ? true : false">
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <p class="switcher-style-head">Directions:</p>
        <div class="row switcher-style">
          <div class="col-4">
            <div class="form-check switch-select">
              <label class="form-check-label" for="switcher-ltr">
                LTR
              </label>
              <input @click="directionFn('ltr')" class="form-check-input" type="radio" name="direction" id="switcher-ltr"
                :checked="switcher.direction == 'ltr' ? true : false">
            </div>
          </div>
          <div class="col-4">
            <div class="form-check switch-select">
              <label class="form-check-label" for="switcher-rtl">
                RTL
              </label>
              <input @click="directionFn('rtl')" class="form-check-input" type="radio" name="direction" id="switcher-rtl"
                :checked="switcher.direction == 'rtl' ? true : false">
            </div>
          </div>
        </div>
      </div>
      <div class="theme-colors">
        <p class="switcher-style-head">Theme Primary:</p>
        <div class="d-flex flex-wrap align-items-center switcher-style">
          <div class="form-check switch-select me-3">
            <input @click="themePrimaryFn('58, 88, 146')" class="form-check-input color-input color-primary-1"
              type="radio" name="theme-primary" id="switcher-primary"
              :checked="switcher.themePrimary == '58, 88, 146' ? true : false">
          </div>
          <div class="form-check switch-select me-3">
            <input @click="themePrimaryFn('92, 144, 163')" class="form-check-input color-input color-primary-2"
              type="radio" name="theme-primary" id="switcher-primary1"
              :checked="switcher.themePrimary == '92, 144, 163' ? true : false">
          </div>
          <div class="form-check switch-select me-3">
            <input @click="themePrimaryFn('161, 90, 223')" class="form-check-input color-input color-primary-3"
              type="radio" name="theme-primary" id="switcher-primary2"
              :checked="switcher.themePrimary == '161, 90, 223' ? true : false">
          </div>
          <div class="form-check switch-select me-3">
            <input @click="themePrimaryFn('78, 172, 76')" class="form-check-input color-input color-primary-4"
              type="radio" name="theme-primary" id="switcher-primary3"
              :checked="switcher.themePrimary == '78, 172, 76' ? true : false">
          </div>
          <div class="form-check switch-select me-3">
            <input @click="themePrimaryFn('223, 90, 90')" class="form-check-input color-input color-primary-5"
              type="radio" name="theme-primary" id="switcher-primary4"
              :checked="switcher.themePrimary == '223, 90, 90' ? true : false">
          </div>
          <div class="form-check switch-select ps-0 mt-1 color-primary-light">
            <color-picker @update:pureColor="primaryColorFn" v-model:dynamicPrimaryColor="dynamicPrimaryColor"
              shape="circle" format="rgb" pickerType="chrome" useType="pure" :disableAlpha="true" />
          </div>
        </div>
      </div>
      <div>
        <p class="switcher-style-head">reset:</p>
        <div class="text-center">
          <button  @click="reset()" id="reset-all" class="btn btn-danger mt-3">Reset</button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Switcher -->
</template>

<style scoped></style>

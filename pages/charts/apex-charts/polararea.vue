<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  monochromeseries,
  monochromeoptions
} from '@/data/apexcharts/apexchart-polararea.js';
import auth from '@/middleware/auth';

export default {
  setup() {
    definePageMeta({
      middleware: [auth],
    })
  },
  components: {
    PageHeader,
  },
  data() {
    return {
      dataToPass: {
        current: "PolarArea",
        list: [
          'Charts', 'Apexcharts', 'PolarArea'
        ]
      },
      basicseries: basicseries,
      basicoptions: basicoptions,
      monochromeseries: monochromeseries,
      monochromeoptions: monochromeoptions,
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Polar Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="polarArea" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Polar Area Monochrome Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="polarArea" :options="monochromeoptions" :series="monochromeseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


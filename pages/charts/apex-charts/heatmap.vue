<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  multiSeriesseries,
  multiSeriesoptions,
  colorRangeseries,
  colorRangeoptions,
  withoutShadesseries,
  withoutShadesoptions
} from '@/data/apexcharts/apexchart-heatmap.js';
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
        current: "Heatmap",
        list: [
          'Charts', 'Apexcharts', 'Heatmap'
        ]
      },
      basicseries: basicseries,
      basicoptions: basicoptions,
      multiSeriesseries: multiSeriesseries,
      multiSeriesoptions: multiSeriesoptions,
      colorRangeseries: colorRangeseries,
      colorRangeoptions: colorRangeoptions,
      withoutShadesseries: withoutShadesseries,
      withoutShadesoptions: withoutShadesoptions,
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
          <div class="card-title">Basic Heatmap Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="heatmap" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Multi Series Heatmap Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="heatmap" :options="multiSeriesoptions" :series="multiSeriesseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Color Range Heatmap Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="heatmap" :options="colorRangeoptions" :series="colorRangeseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Heatmap Range Without Shades</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="heatmap" :options="withoutShadesoptions" :series="withoutShadesseries">
          </apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


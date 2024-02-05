<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  datetimeseries,
  datetimeoptions,
  scatterseries,
  scatteroptions
} from '@/data/apexcharts/apexchart-scatter.js';
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
        current: "Scatter",
        list: [
          'Charts', 'Apexcharts', 'Scatter'
        ]
      },
      basicseries: basicseries,
      basicoptions: basicoptions,
      datetimeseries: datetimeseries,
      datetimeoptions: datetimeoptions,
      scatterseries: scatterseries,
      scatteroptions: scatteroptions,
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
          <div class="card-title">Basic Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="scatter" :series="basicseries" :options="basicoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Datetime Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="scatter" :series="datetimeseries" :options="datetimeoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Image Fill Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="scatter" :series="scatterseries" :options="scatteroptions"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


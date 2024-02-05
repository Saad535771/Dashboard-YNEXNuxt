<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  multipleseries,
  multipleoptions,
  polygnseries,
  polygnoptions
} from '@/data/apexcharts/apexchart-radar.js';
import auth from '@/middleware/auth';

definePageMeta({
  middleware: [auth],
})
export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      dataToPass: {
        current: "Radar",
        list: [
          'Charts', 'Apexcharts', 'Radar'
        ]
      },
      basicseries: basicseries,
      basicoptions: basicoptions,
      multipleseries: multipleseries,
      multipleoptions: multipleoptions,
      polygnseries: polygnseries,
      polygnoptions: polygnoptions,
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
          <div class="card-title">Basic Radar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radar" :series="basicseries" :options="basicoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Radar Chart-Multiple Series</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radar" :series="multipleseries" :options="multipleoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Radar Chart Poygon Fill</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radar" :series="polygnseries" :options="polygnoptions"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


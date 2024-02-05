<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicSeries, basicChartoptions, scatterseries, scatterChartoptions, horizontalChartoptions, horizontalseries
} from "@/data/apexcharts/apexchart-boxplot.js";
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
        current: "Boxplot",
        list: [
          'Charts', 'Apexcharts', 'Boxplot'
        ]
      },
      basicSeries: basicSeries, basicChartoptions: basicChartoptions, scatterseries: scatterseries, scatterChartoptions: scatterChartoptions, horizontalChartoptions: horizontalChartoptions, horizontalseries: horizontalseries
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
          <div class="card-title">Basic Boxplot Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="boxPlot" :options="basicChartoptions" :series="basicSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Boxplot With Scatter Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="boxPlot" :options="scatterChartoptions" :series="scatterseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Horizontal Boxplot Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="boxPlot" :options="horizontalChartoptions" :series="horizontalseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


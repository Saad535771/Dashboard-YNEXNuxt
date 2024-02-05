<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  datalabelsseries,
  datalabelsoptions,
  timeseries,
  timeoptions,
  annotationsseries,
  annotationsoptions,
  steplineseries,
  steplineoptions,
  gradientseries,
  gradientoptions,
  missingseries,
  missingoptions,
  syncingseries,
  syncingoptions,
  syncing1series,
  syncing1options,
  syncing2series,
  syncing2options,
  dashedseries,
  dashedoptions,
  realtimeseries,
  realtimeoptions,
  brushseries,
  brushoptions,
  brush1series,
  brush1options,
  getNewSeries
} from '@/data/apexcharts/apexchart-line.js'
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
        current: "Line",
        list: [
          'Charts', 'Apexcharts', 'Line'
        ]
      },
      basicseries,
      basicoptions,
      datalabelsseries,
      datalabelsoptions,
      timeseries,
      timeoptions,
      annotationsseries,
      annotationsoptions,
      steplineseries,
      steplineoptions,
      gradientseries,
      gradientoptions,
      missingseries,
      missingoptions,
      syncingseries,
      syncingoptions,
      syncing1series,
      syncing1options,
      syncing2series,
      syncing2options,
      dashedseries,
      dashedoptions,
      realtimeseries,
      realtimeoptions,
      brushseries,
      brushoptions,
      brush1series,
      brush1options,
      getNewSeries
    };
  },
  methods: {

    getRandomArbitrary(min: number, max: number) {
      return Math.floor(Math.random() * 99);
    },
    setDataLineChart() {
      const intervalId = setInterval(() => {
        this.getNewSeries(this.realtimeseries[0].data, {
          min: 10,
          max: 90
        });
      }, 3000);

      // Add the intervalId to the cleanup function
      onUnmounted(() => {
        clearInterval(intervalId);
      });
    },
  },
  mounted() {
    this.setDataLineChart();
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
          <div class="card-title">Basic Line Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Line Chart With Data Labels</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="datalabelsoptions" :series="datalabelsseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Zoomable Time Series</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="timeoptions" :series="timeseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Line With Annotations</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="annotationsoptions" :series="annotationsseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Brush Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="150" type="line" :options="brushoptions" :series="brushseries"></apexchart>
          <apexchart height="150" type="area" :options="brush1options" :series="brush1series"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">StepLine Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="320" type="line" :options="steplineoptions" :series="steplineseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Gradient Line Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="gradientoptions" :series="gradientseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Missing/Null Values Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="missingoptions" :series="missingseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Real Time Chart</div>
        </div>
        <div class="card-body">
          <apexchart ref="realtimeChart" height="350" type="line" :options="realtimeoptions" :series="realtimeseries">
          </apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Dashed Line Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="dashedoptions" :series="dashedseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Syncing Charts</div>
        </div>
        <div class="card-body">
          <apexchart height="160" type="line" :options="syncingoptions" :series="syncingseries"></apexchart>
          <apexchart height="160" type="line" :options="syncing1options" :series="syncing1series"></apexchart>
          <apexchart height="160" type="line" :options="syncing2options" :series="syncing2series"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


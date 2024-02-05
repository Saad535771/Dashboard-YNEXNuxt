<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  multipleseries,
  multipleoptions,
  customseries,
  customoptions,
  gradientseries,
  gradientoptions,
  strokedseries,
  strokedoptions,
  imageseries,
  imageoptions,
  circularseries,
  circularoptions
} from '@/data/apexcharts/apexchart-radialbar.js';
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
        current: "Radarbar",
        list: [
          'Charts', 'Apexcharts', 'Radarbar'
        ]
      },
      basicseries: basicseries,
      basicoptions: basicoptions,
      multipleseries: multipleseries,
      multipleoptions: multipleoptions,
      customseries: customseries,
      customoptions: customoptions,
      gradientseries: gradientseries,
      gradientoptions: gradientoptions,
      strokedseries: strokedseries,
      strokedoptions: strokedoptions,
      imageseries: imageseries,
      imageoptions: imageoptions,
      circularseries: circularseries,
      circularoptions: circularoptions,
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
          <div class="card-title">Basic Pie Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="basicseries" :options="basicoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Multiple Radialbar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="multipleseries" :options="multipleoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Circle Chart - Custom Angle</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="customseries" :options="customoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Gradient Circle Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="gradientseries" :options="gradientoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Stroked Circular Gauge</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="strokedseries" :options="strokedoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Circle Chart With Image</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="imageseries" :options="imageoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Semi Circular Gauge</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="radialBar" :series="circularseries" :options="circularoptions"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


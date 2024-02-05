<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  multipleseries,
  multipleoptions,
  areaseries,
  areaoptions,
  columnseries,
  columnoptions
} from '@/data/apexcharts/apexchart-mixed.js';
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
        current: "Mixed",
        list: [
          'Charts', 'Apexcharts', 'Mixed'
        ]
      },
      basicseries: basicseries,
      basicoptions: basicoptions,
      multipleseries: multipleseries,
      multipleoptions: multipleoptions,
      areaseries: areaseries,
      areaoptions: areaoptions,
      columnseries: columnseries,
      columnoptions: columnoptions,
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
          <div class="card-title">Line & Column Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="basicoptions" :series="basicseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Multiple Y-Axis Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="multipleoptions" :series="multipleseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Line & Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="areaoptions" :series="areaseries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Line,Column & Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="line" :options="columnoptions" :series="columnseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


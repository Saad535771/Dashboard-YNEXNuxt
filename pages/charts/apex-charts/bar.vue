<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicBarSeries, basicBarChartOptions,
  groupBarSeries, groupBarChartOptions,
  stackedBarSeries, stackedBarChartOptions,
  fullBarSeries, fullBarChartOptions,
  negativeBarSeries, negativeBarChartOptions,
  markersBarSeries, markersBarChartOptions,
  reversedBarSeries, reversedBarChartOptions,
  categoriesBarSeries, categoriesBarChartOptions,
  patternBarSeries, patternBarChartOptions,
  imageBarSeries, imageBarChartOptions
} from "@/data/apexcharts/apexchart-bar.js";
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
        current: "Bar",
        list: [
          'Charts', 'Apexcharts', 'Bar'
        ]
      },
      basicBarSeries, basicBarChartOptions,
      groupBarSeries, groupBarChartOptions,
      stackedBarSeries, stackedBarChartOptions,
      fullBarSeries, fullBarChartOptions,
      negativeBarSeries, negativeBarChartOptions,
      markersBarSeries, markersBarChartOptions,
      reversedBarSeries, reversedBarChartOptions,
      categoriesBarSeries, categoriesBarChartOptions,
      patternBarSeries, patternBarChartOptions,
      imageBarSeries, imageBarChartOptions,
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
          <div class="card-title">Basic Bar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="basicBarChartOptions" :series="basicBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Grouped Bar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="groupBarChartOptions" :series="groupBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Stacked Bar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="stackedBarChartOptions" :series="stackedBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">100% Stacked Bar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="fullBarChartOptions" :series="fullBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Bar Chart With Negative Values</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="negativeBarChartOptions" :series="negativeBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Bar Chart With Markers</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="markersBarChartOptions" :series="markersBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Reversed Bar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="reversedBarChartOptions" :series="reversedBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Bar With Categogry DataLabels</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="categoriesBarChartOptions" :series="categoriesBarSeries">
          </apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Patterned Bar Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="patternBarChartOptions" :series="patternBarSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Bar With Image Fill</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :options="imageBarChartOptions" :series="imageBarSeries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


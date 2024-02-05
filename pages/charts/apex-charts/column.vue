<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicseries,
  basicoptions,
  datalabelsseries,
  datalabelsoptions,
  stackedseries,
  stackedoptions,
  stackedfullseries,
  stackedfulloptions,
  markersseries,
  markersoptions,
  rotatedseries,
  rotatedoptions,
  negativeseries,
  negativeoptions,
  rangeseries,
  rangeoptions,
  yearseries,
  yearoptions,
  quarterseries,
  quarteroptions,
  distributedseries,
  distributedoptions
} from '@/data/apexcharts/apexchart-column.js';
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
        current: "Column",
        list: [
          'Charts', 'Apexcharts', 'Column'
        ]
      },
      basicseries: basicseries,
      basicoptions: basicoptions,
      datalabelsseries: datalabelsseries,
      datalabelsoptions: datalabelsoptions,
      stackedseries: stackedseries,
      stackedoptions: stackedoptions,
      stackedfullseries: stackedfullseries,
      stackedfulloptions: stackedfulloptions,
      markersseries: markersseries,
      markersoptions: markersoptions,
      rotatedseries: rotatedseries,
      rotatedoptions: rotatedoptions,
      negativeseries: negativeseries,
      negativeoptions: negativeoptions,
      rangeseries: rangeseries,
      rangeoptions: rangeoptions,
      yearseries: yearseries,
      yearoptions: yearoptions,
      quarterseries: quarterseries,
      quarteroptions: quarteroptions,
      distributedseries: distributedseries,
      distributedoptions: distributedoptions,
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
          <div class="card-title">Basic Column Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="basicseries" :options="basicoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Column Chart With Datalabels</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="datalabelsseries" :options="datalabelsoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Stacked Column Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="stackedseries" :options="stackedoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">100% Stacked Column Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="stackedfullseries" :options="stackedfulloptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Column Chart With Markers</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="markersseries" :options="markersoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Column Chart With Rotated Labels</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="rotatedseries" :options="rotatedoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Column Chart With Negative Values</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="negativeseries" :options="negativeoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Range Column Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="rangeseries" :options="rangeoptions"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Dynamic Loaded Chart</div>
        </div>
        <div class="card-body">
          <div id="chart-year">
            <apexchart height="350" type="bar" :series="yearseries" :options="yearoptions"></apexchart>
          </div>
          <div id="chart-quarter">
            <apexchart height="350" type="bar" :series="quarterseries" :options="quarteroptions"></apexchart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Distributed Columns Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bar" :series="distributedseries" :options="distributedoptions"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


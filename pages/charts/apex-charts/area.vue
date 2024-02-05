<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import {
  basicAreaChartOptions, basicAreaSeries, splineSeries,
  splineChartOptions,
  AreaChartNegativeValueSeries,
  AreaChartNegativeValueChartOptions,
  GitHubStyleSeries,
  GitHubStyleChartOptions,
  StackedAreaSeries,
  StackedAreaChartOptions,
  GitHubStyleYearSeries, GitHubStyleYearChartOptions,
  IrregularTimeSeries,
  IrregularTimeChartOptions,
  NullValuesSeries,
  NullValuesChartOptions,
  DateTimeSeries,
  DateTimeChartOptions
} from "@/data/apexcharts/apexchart-area.js";
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
        current: "Area",
        list: [
          'Charts', 'Apexcharts', 'Area'
        ]
      },
      basicAreaChartOptions: basicAreaChartOptions,
      basicAreaSeries: basicAreaSeries,
      splineSeries: splineSeries,
      splineChartOptions: splineChartOptions,
      AreaChartNegativeValueSeries: AreaChartNegativeValueSeries,
      AreaChartNegativeValueChartOptions: AreaChartNegativeValueChartOptions,
      GitHubStyleSeries: GitHubStyleSeries,
      GitHubStyleChartOptions: GitHubStyleChartOptions,
      StackedAreaSeries: StackedAreaSeries,
      StackedAreaChartOptions: StackedAreaChartOptions,
      GitHubStyleYearChartOptions: GitHubStyleYearChartOptions,
      GitHubStyleYearSeries: GitHubStyleYearSeries,
      IrregularTimeSeries: IrregularTimeSeries,
      IrregularTimeChartOptions: IrregularTimeChartOptions,
      NullValuesSeries: NullValuesSeries,
      NullValuesChartOptions: NullValuesChartOptions,
      DateTimeSeries: DateTimeSeries,
      DateTimeChartOptions: DateTimeChartOptions,
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
          <div class="card-title">Basic Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="basicAreaChartOptions" :series="basicAreaSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Spline Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="splineChartOptions" :series="splineSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Area Chart With Negative Values</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="AreaChartNegativeValueChartOptions"
            :series="AreaChartNegativeValueSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Selection-Github Style Chart</div>
        </div>
        <div class="card-body">

          <div class="card-body">
            <apexchart height="120" type="area" :options="GitHubStyleChartOptions" :series="GitHubStyleSeries">
            </apexchart>
            <div class="github-style d-flex align-items-center">
              <div class="me-2">
                <img class="userimg rounded" src="/images/faces/1.jpg" data-hovercard-user-id="634573" alt="" width="38"
                  height="38">
              </div>
              <div class="userdetails lh-1">
                <a class="username fw-semibold fs-14">coder</a>
                <span class="cmeta d-block mt-1">
                  <span class="commits"></span> commits
                </span>
              </div>
            </div>
            <apexchart height="150" type="area" :options="GitHubStyleYearChartOptions" :series="GitHubStyleYearSeries">
            </apexchart>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Stacked Area Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="StackedAreaChartOptions" :series="StackedAreaSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Irregular Time Series Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="IrregularTimeChartOptions" :series="IrregularTimeSeries">
          </apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Area Chart With Null Values</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="NullValuesChartOptions" :series="NullValuesSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header d-flex">
          <div class="card-title">Area Chart-Datetime X-Axis Chart</div>
          <div class="btn-group ms-auto">
            <button class="btn btn-primary btn-sm" id="one_month">1M</button>
            <button class="btn btn-primary btn-sm" id="six_months">6M</button>
            <button class="btn btn-primary btn-sm" id="one_year">1Y</button>
            <button class="btn btn-primary btn-sm" id="all">ALL</button>
            <!-- <button class="btn btn-primary btn-sm" id="ytd">ALL</button> -->
          </div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="area" :options="DateTimeChartOptions" :series="DateTimeSeries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>

~/data/apexchart
<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import auth from '@/middleware/auth';

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      themeColor: localStorage.getItem('ynexcolortheme') == 'dark' ? 'dark' : 'light',
      dataToPass: {
        current: "Echarts",
        list: [
          'Charts', 'Echarts'
        ]
      },
    };
  },
  methods: {
    updateTheme() {
      this.themeColor = localStorage.getItem('ynexcolortheme') === 'dark' ? 'dark' : 'light';
    }
  },
  mounted() {
    window.addEventListener('storage', this.updateTheme);

    // Check for updates every second (adjust the interval as needed)
    const intervalId = setInterval(this.updateTheme, 1000);

    // Save the intervalId for cleanup on component unmount
    window['__themeUpdateIntervalId'] = intervalId;
  },

  // Remove the event listener and clearInterval on component unmount
  onUnmounted() {
    window.removeEventListener('storage', this.updateTheme);

    if (window['__themeUpdateIntervalId']) {
      clearInterval(window['__themeUpdateIntervalId']);
    }
  }
};

</script>

<script setup lang="ts">
import { registerMap, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, PieChart, LineChart, RadarChart, ScatterChart, EffectScatterChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  DatasetComponent,
  GridComponent,
  GeoComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref } from 'vue';

import barData from "@/data/echarts/bar";
import pieData from "@/data/echarts/pie";
import polarData from "@/data/echarts/polar";
import getRadarData from "@/data/echarts/radar";
import scarretData from "@/data/echarts/scarret";
import getmapData from "@/data/echarts/map.js";
import chinaMap from "@/data/echarts/china.json";

definePageMeta({
  middleware: [auth],
})
use([
  CanvasRenderer,
  PieChart,
  BarChart,
  RadarChart,
  LineChart,
  ScatterChart,
  PolarComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent, DatasetComponent, GridComponent,
  EffectScatterChart,
  GeoComponent,
]);
registerMap("china", chinaMap);

const baroption = shallowRef(barData());
const polaroption = shallowRef(polarData());
const radaroption = shallowRef(getRadarData());
const mapoption = shallowRef(getmapData());
const scarretoption = shallowRef(scarretData());
// const geooption = shallowRef(getData());
const pieoption = shallowRef(pieData());
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
          <v-chart :theme="themeColor" :option="baroption" autoresize class="echart-charts" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Polar plot</div>
        </div>
        <div class="card-body">
          <v-chart :theme="themeColor" :option="polaroption" autoresize class="echart-charts" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Pie Chart</div>
        </div>
        <div class="card-body">
          <v-chart :theme="themeColor" :option="pieoption" autoresize class="echart-charts" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Scatter Chart</div>
        </div>
        <div class="card-body">
          <v-chart :theme="themeColor" :option="scarretoption" autoresize class="echart-charts" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Basic Radar Chart</div>
        </div>
        <div class="card-body">
          <v-chart :theme="themeColor" :option="radaroption" autoresize class="echart-charts" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Map</div>
        </div>
        <div class="card-body">
          <v-chart :theme="themeColor" ref="map" :option="mapoption" autoresize style="background-color: #404a59"
            class="echart-charts" />
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


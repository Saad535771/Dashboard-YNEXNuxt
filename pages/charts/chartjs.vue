<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { DoughnutChart, LineChart, BarChart, ScatterChart, BubbleChart, RadarChart, PolarAreaChart, PieChart } from 'vue-chart-3';
export default {
  components: {
    PageHeader, DoughnutChart, LineChart, BarChart, ScatterChart, BubbleChart, RadarChart, PolarAreaChart, PieChart
  },
  data() {
    return {
      dataToPass: {
        current: "ChartJs",
        list: [
          'Charts', 'ChartJs'
        ]
      },
    };
  },
  setup() {
    const data = ref([0, 10, 5, 2, 20, 30, 45]);
    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(132, 90, 223)',
          borderColor: 'rgb(132, 90, 223)',
          data: data.value,
        },
      ],
    };
    const barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['rgba(132, 90, 223, 0.2)', 'rgba(35, 183, 229, 0.2)', 'rgba(245, 184, 73, 0.2)', 'rgba(73, 182, 245, 0.2)', 'rgba(230, 83, 60, 0.2)', 'rgba(38, 191, 148, 0.2)', 'rgba(35, 35, 35, 0.2)'],

          borderColor: ['rgb(132, 90, 223)', 'rgb(35, 183, 229)', 'rgb(245, 184, 73)', 'rgb(73, 182, 245)', 'rgb(230, 83, 60)', 'rgb(38, 191, 148)', 'rgb(35, 35, 35)'],
          borderWidth: 1
        },
      ],
    };
    const singleData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['rgb(132, 90, 223)',
            'rgb(35, 183, 229)',
            'rgb(245, 184, 73)'],
          borderColor: ['rgb(132, 90, 223)',
            'rgb(35, 183, 229)',
            'rgb(245, 184, 73)'],
          borderWidth: 1,
          hoverOffset: 4
        },
      ],
    };
    const radialData = computed(() => ({
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(132, 90, 223, 0.2)',
        borderColor: 'rgb(132, 90, 223)',
        pointBackgroundColor: 'rgb(132, 90, 223)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(132, 90, 223)'
      }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(35, 183, 229, 0.2)',
        borderColor: 'rgb(35, 183, 229)',
        pointBackgroundColor: 'rgb(35, 183, 229)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(35, 183, 229)'
      }]
    }));
    const BubbleData = computed(() => ({
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(132, 90, 223)'
      }]
    }));
    const scatterData = computed(() => ({

      datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        backgroundColor: 'rgb(132, 90, 223)'
      }],

    }));
    const chartOptions = ref({
      scales: {
        x: {
          grid: {
            color: '#ababab1a', // Set the grid line color for the X-axis
          },
        },
        y: {
          grid: {
            color: '#ababab1a', // Set the grid line color for the Y-axis
          },
        },
      },
    });
    const piechartOptions = ref({
      maintainAspectRatio: false,
      responsive: true,
    });
    return { lineData, barData, singleData, BubbleData, scatterData, radialData, chartOptions, piechartOptions };
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
          <div class="card-title">Chartjs Line Chart</div>
        </div>
        <div class="card-body">
          <LineChart :chartData="lineData" :options="chartOptions" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Chartjs Bar Chart</div>
        </div>
        <div class="card-body">
          <BarChart :chartData="barData" :options="chartOptions" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Chartjs Pie Chart</div>
        </div>
        <div class="card-body">
          <PieChart :chartData="singleData" :options="piechartOptions" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Chartjs Doughnut Chart</div>
        </div>
        <div class="card-body">
          <DoughnutChart :chartData="singleData" :options="piechartOptions" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Chartjs Polar Chart</div>
        </div>
        <div class="card-body">
          <PolarAreaChart :chartData="singleData" :options="piechartOptions" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Chartjs Radial Chart</div>
        </div>
        <div class="card-body">
          <RadarChart :chartData="radialData" :options="piechartOptions" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Chartjs Scatter Chart</div>
        </div>
        <div class="card-body">
          <ScatterChart :chartData="scatterData" :options="chartOptions" />
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">Chartjs Bubble Chart</div>
        </div>
        <div class="card-body">
          <BubbleChart :chartData="BubbleData" :options="chartOptions" />
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


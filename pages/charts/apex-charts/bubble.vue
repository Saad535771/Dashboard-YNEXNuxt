<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { series, Chartoptions, bubble3Dseries, bubble3DChartoptions } from '@/data/apexcharts/apexchart-bubble.js';
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
        current: "Bubble",
        list: [
          'Charts', 'Apexcharts', 'Bubble'
        ]
      },
      series: series, Chartoptions: Chartoptions, bubble3Dseries: bubble3Dseries, bubble3DChartoptions: bubble3DChartoptions
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
          <div class="card-title">Simple Bubble Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bubble" :options="Chartoptions" :series="series"></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="card custom-card">
        <div class="card-header">
          <div class="card-title">3D Bubble Chart</div>
        </div>
        <div class="card-body">
          <apexchart height="350" type="bubble" :options="bubble3DChartoptions" :series="bubble3Dseries"></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


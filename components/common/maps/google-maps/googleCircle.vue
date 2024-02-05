<script lang="ts">
import { GoogleMap, Circle } from "vue3-google-map";
export default {
  components: {
    GoogleMap,
    Circle,
  },
  setup() {
    const apiKey = import.meta.env.googleMapsApiKey;
    const center = { lat: 37.09, lng: -95.712 };
    const cities:any = {
      chicago: {
        center: { lat: 41.878, lng: -87.629 },
        population: 2714856,
      },
      newyork: {
        center: { lat: 40.714, lng: -74.005 },
        population: 8405837,
      },
      losangeles: {
        center: { lat: 34.052, lng: -118.243 },
        population: 3857799,
      },
      vancouver: {
        center: { lat: 49.25, lng: -123.1 },
        population: 603502,
      },
    };

    const circlesObj:any = {};

    for (const key in cities) {
      circlesObj[key] = {
        center: cities[key].center,
        radius: Math.sqrt(cities[key].population) * 100,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      };
    }

    return { apiKey, center, circlesObj };
  },
}
</script>

<template>
  <GoogleMap :api-key="apiKey" :center="center" :zoom="3" style="width: 100%; height: 300px">
    <Circle v-for="circle in circlesObj" :options="circle" />
  </GoogleMap>
</template>

<style scoped></style>

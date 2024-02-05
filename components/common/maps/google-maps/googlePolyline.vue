<script lang="ts">
import { GoogleMap, Polyline } from "vue3-google-map";
export default {
  components: {
    GoogleMap,
    Polyline,
  },
  setup() {
    const apiKey = import.meta.env.googleMapsApiKey;
    const center = { lat: 0, lng: -180 };
    const flightPlanCoordinates = [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ];
    const flightPath = {
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    };

    return { apiKey, center, flightPath };
  },
}
</script>

<template>
  <GoogleMap :api-key="apiKey" :center="center" style="width: 100%; height: 300px" :zoom="3">
    <Polyline :options="flightPath" />
  </GoogleMap>
</template>

<style scoped></style>

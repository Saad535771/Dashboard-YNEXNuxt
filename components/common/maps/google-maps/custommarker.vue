<script lang="ts">
import { GoogleMap, CustomMarker } from "vue3-google-map";
export default {
  components: {
    GoogleMap,
    CustomMarker,
  },
  setup() {
    const apiKey = import.meta.env.googleMapsApiKey;
    const center = { lat: 52.36834, lng: 4.88635 }
    return { apiKey, center }
  },
}
</script>

<template>
  <GoogleMap :api-key="apiKey" :center="center" :zoom="3" style="width: 100%; height: 300px">
    <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
      <div style="text-align: center">
        <div style="font-size: 1.125rem">Vuejs Amsterdam</div>
        <img src="https://vuejs.org/images/logo.png" width="50" height="50" style="margin-top: 8px" />
      </div>
    </CustomMarker>
  </GoogleMap>
</template>

<style scoped></style>

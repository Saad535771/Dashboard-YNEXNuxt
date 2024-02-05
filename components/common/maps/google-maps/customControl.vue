<script lang="ts">
import { GoogleMap, CustomControl } from "vue3-google-map";

export default {
  components: {
    GoogleMap,
    CustomControl,
  },
  setup() {
    const apiKey = import.meta.env.googleMapsApiKey;
    const center = { lat: 35, lng: -95 };
    const sayHi = () => alert("Hi!");

    return { apiKey, center, sayHi };
  },
}
</script>

<template>
  <GoogleMap :api-key="apiKey" :center="center" :zoom="3" style="width: 100%; height: 300px">
    <CustomControl position="BOTTOM_CENTER">
      <button class="custom-btn" @click="sayHi">👋</button>
    </CustomControl>
  </GoogleMap>
</template>

<style scoped>.custom-btn {
  box-sizing: border-box;
  background: white;
  height: 40px;
  width: 40px;
  border-radius: 2px;
  border: 0px;
  margin: 10px;
  padding: 0px;
  font-size: 1.25rem;
  text-transform: none;
  appearance: none;
  cursor: pointer;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  overflow: hidden;
}
</style>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <!-- here -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">

const getImagePath = (imageName: any) => {
  const publicPath = import.meta.env.BASE_URL || '/nuxt/';
  return `${publicPath}${imageName}`;
}
useHead({
  title: ' YNEX - Nuxt3 Premium Admin & Dashboard Template ',
  link: [{ rel: 'icon', type: 'image/png', href: getImagePath('images/brand-logos/favicon.ico') }]
})
</script>
<style>
.me-5 {
  margin-inline-end: 3rem !important;
}
</style>


<script lang="ts">
export default {
};
</script>
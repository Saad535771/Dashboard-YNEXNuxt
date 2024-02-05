<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
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
        current: "Empty",
        list: [
          'Pages', 'Empty'
        ]
      },
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">

  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>


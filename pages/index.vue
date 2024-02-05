<template>
  <div>
    <crm />
  </div>
</template>
<script>
import crm from "./dashboard/crm.vue";
import { useRouter } from 'vue-router';
import auth from '@/middleware/auth';

export default {
  ssr: false, // Set SSR to false for this specific page
  setup() {
    definePageMeta({
      middleware: [auth],
    })
    // Redirect from the root path ("/") to "/dashboard"
    const router = useRouter();
    router.replace('/dashboard/crm');
  },
  components: {
    crm,
  },
};
</script>

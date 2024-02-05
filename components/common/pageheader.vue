<template lang="">
    <!-- Page Header -->
    <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 class="page-title fw-semibold fs-18 mb-0">{{propData?.current}}</h1>
        <div class="ms-md-1 ms-0">
            <nav>
                <ol class="breadcrumb mb-0">
                    <li v-for="(value, key) in propData.list" :key="key" class="breadcrumb-item" :class="key == propData.list.length - 1 ? 'active' : ''">
                        <span v-if="key === propData.list.length - 1">{{value}}</span>
                        <span v-else>
                            <a href="javascript:void(0);">{{value}}</a>
                        </span>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header Close -->
</template>
<script>
export default {
  props: {
    propData: Object,
  },
  created() {
    // Access and check propData in the created hook
    // console.log(this.propData);
  },
};
</script>
<style lang="">
    
</style>
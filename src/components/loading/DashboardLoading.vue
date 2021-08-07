<template>
  <div
    class="loading-img user-select-none"
    v-if="status"
  >
    <img
      src="@/assets/imgs/loading/dashboardLoading.svg"
      alt="loading"
    />
  </div>
</template>

<script>
export default {
  name: 'DashboardLoading.vue',
  props: ['status'],
};
</script>

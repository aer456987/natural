<template>
  <!-- 後台loading 讀取 -->
  <div
    class="loading-img userselect-none"
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

<template>
  <!-- 後台loading 讀取 -->
  <div
    class="loadingImg user_select_none"
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

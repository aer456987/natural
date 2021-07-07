<template>
  <!-- 後台loading 讀取 -->
  <div
    class="loadingImg"
    v-if="status"
  >
    <img
      src="@/assets/imgs/dashboarLoading.svg"
      alt="loading"
    />
  </div>
</template>

<script>
export default {
  name: 'DashboarLoading.vue',
  props: ['status'],
};
</script>

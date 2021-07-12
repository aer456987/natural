<template>
  <!-- 前台 loading 讀取 -->
  <div
    class="loadingImg user_select_none"
    v-if="status"
  >
    <img
      src="@/assets/imgs/loaging.svg"
      alt="loading"
    />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['status'],
};
</script>

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

<style lang="sass">
// loading
.loadingImg
  position: fixed
  width: 110%
  height: 200%
  top: 0
  left: 0
  background: rgba(white, .8)
  z-index: 2000
  img
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>

<script>
export default {
  name: 'DashboarLoading.vue',
  props: ['status'],
};
</script>

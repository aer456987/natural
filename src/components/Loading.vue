<template>
  <!-- loading 讀取 -->
  <div class="loadingImg" v-if="status">
    <img src="@/assets/imgs/loaging.svg" alt="loading" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['status'],
};
</script>

<style lang="sass">
// loading
.loadingImg
  position: fixed
  width: 110%
  height: 200%
  top: 0
  left: 0
  background: rgba(white, .5)
  z-index: 2000
  img
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>

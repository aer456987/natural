<template>
  <div class="loadingImg" v-if="status">
    <img src="../assets/imgs/loaging.svg" alt="loading" />
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
  width: 100%
  height: 160%
  top: -60px
  background: rgba(white, .5)
  z-index: 999999
  img
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>

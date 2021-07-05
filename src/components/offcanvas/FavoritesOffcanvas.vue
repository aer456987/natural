<template>

  <div
    class="offcanvas offcanvas-end shadow-lg"
    data-bs-scroll="true"
    data-bs-backdrop="true"
    tabindex="-1"
    ref="offcanvas"
  >
    <div class="offcanvas-header">
      <h3 class="fs-5">
        最愛收藏
      </h3>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      ...
    </div>
  </div>

</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  name: 'FavoritesOffcanvas.vue',
  data() {
    return {
      offcanvas: '',
    };
  },
  methods: {
    openOffcanvas() {
      this.offcanvas.show();
    },
    hideOffcanvas() {
      this.offcanvas.hide();
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
  },
};
</script>

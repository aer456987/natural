<template>
  <!-- 我的最愛側欄ㄋ -->
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
      <ul class="list-style ">
        <li>
          <span class="border">圖片</span>
          <span class="border">名稱</span>
          <span class="border">數量</span>
          <span class="border">刪除</span>
        </li>
        <li>
          <span class="border">圖片</span>
          <span class="border">名稱</span>
          <span class="border">數量</span>
          <span class="border">刪除</span>
        </li>
        <li>
          <span class="border">圖片</span>
          <span class="border">名稱</span>
          <span class="border">數量</span>
          <span class="border">刪除</span>
        </li>
        <li>
          <span class="border">圖片</span>
          <span class="border">名稱</span>
          <span class="border">數量</span>
          <span class="border">刪除</span>
        </li>
        <li>
          <span class="border">圖片</span>
          <span class="border">名稱</span>
          <span class="border">數量</span>
          <span class="border">刪除</span>
        </li>
      </ul>
      <router-link
        to="/cart"
        class="nav-link btn btn_main"
      >
        按鈕123
      </router-link>
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

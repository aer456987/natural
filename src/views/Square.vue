<template class="position-absolute bottom-0 start-50 translate-middle-x">
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-2">
    <div class="container-fluid">
      <router-link
        to="/"
        class="nav-link logo h3 mb-0 p-0">
        <font-awesome-icon
          icon="crow"
          class="d-inline-block align-text-top" />
        Natural
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <span
        class="collapse navbar-collapse flex justify-content-end"
        id="navbarToggler"
      >
        <ul class="navbar-nav fs-5 text-center">
          <li class="nav-item scale">
            <router-link to="/" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item scale">
            <router-link to="/products" class="nav-link">線上商城</router-link>
          </li>
          <li class="nav-item scale">
            <span class="nav-link">
              <i class="bi bi-heart-fill"></i>
            </span>
          </li>
        </ul>
      </span>
    </div>
  </nav>
  <!-- 主要頁面 -->
  <router-view></router-view>
  <!-- 頁尾 -->
  <footer class="p-3 bg-primary">
    <div class="container text-center text-secondary">
      作業使用，無商業行為
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Square',
  data() {
    return {
      loadingStatus: false,
      carts: {},
      btnStatus: Boolean,
      title: '購物車',
    };
  },
  methods: {
    getCarts() { // 取得購物車資料
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.loadingStatus = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)取得購物車全部資料 res:', res);
            this.carts = res.data.data;
            if (res.data.data.carts.length > 0) {
              this.btnStatus = false;
            } else {
              this.btnStatus = true;
            }
            this.loadingStatus = false;
            console.log('(成功-前台)取得購物車全部資料 vue:', this.carts);
          } else {
            console.log('(錯誤-前台)取得購物車全部資料 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得購物車全部資料 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    delCart(action, item) { // 刪除購物車
      let url = '';
      const productName = '';
      this.loadingStatus = true;
      console.log(productName);

      if (action === 'all') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/carts`;
        console.log('刪除全部', url);
      } else if (action === 'one') {
        console.log(item);
        console.log(item.id);
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
        console.log('刪除一個', item.id, url);
      }

      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)刪除購物車 res:', res);
            console.log('(成功-前台)刪除購物車 vue:', this.carts);
            this.getCarts();
          } else {
            console.log('(錯誤-前台)刪除購物車 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)刪除購物車 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>

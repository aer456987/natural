<template>
<!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-2">
    <div class="container-fluid">
      <router-link
        to="/home"
        class="nav-link logo h3 mb-0 p-0"
      >
        <Font-awesome-icon
          icon="crow"
          class="d-inline-block align-text-top"
        />
        Natural
      </router-link>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarToggler"
        class="collapse navbar-collapse flex justify-content-end"
      >
        <ul class="navbar-nav fs-5 text-center">
          <li class="nav-item scale">
            <router-link
              to="/home"
              class="nav-link"
            >關於我們</router-link>
          </li>
          <li class="nav-item scale">
            <router-link
              to="/products"
              class="nav-link"
            >線上商城</router-link>
          </li>
          <li class="nav-item scale">
            <span class="nav-link">
              <i class="bi bi-heart-fill"></i>
            </span>
          </li>
          <li class="nav-item scale">
            <router-link
              to="/square/cart"
              class="nav-link"
            >
              <i class="bi bi-cart-fill position-relative">
                <span
                  class="cart_num"
                  v-if="cartsLength > 0"
                >{{ cartsLength || newLength }}</span>
              </i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import bus from '@/methods/bus';

export default {
  name: 'NavBar',
  data() {
    return {
      cartsLength: 0,
      newLength: 0,
    };
  },
  methods: {
    updateCartLength() { // 取得購物車數量
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-全域)取得購物車數量 res:', res);
            let totleQty = 0;
            this.cartsLength = res.data.data.carts.forEach((item) => {
              totleQty += item.qty;
            });
            this.cartsLength = totleQty;
            console.log('(成功-全域)取得購物車數量 vue:', this.cartsLength);
          } else {
            console.log('(錯誤-全域)取得購物車數量 res:', res);
          }
        })
        .catch((err) => {
          console.log('(失敗-全域)取得購物車數量 err:');
          console.dir(err);
        });
    },
  },
  mounted() {
    this.updateCartLength();
    bus.on('cart-number', (num) => {
      this.cartsLength = num;
      this.newLength = num;
    });
  },
};
</script>

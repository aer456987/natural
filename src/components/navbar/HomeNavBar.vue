<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark z-index-3 px-sm-1 px-md-2
      position-fixed z-index-3 w-100 user-select-none"
    :class="{ 'bg-primary-rgba-900': isClassChange }"
  >
    <div class="container-fluid">
      <h1 class="m-0">
        <router-link
          to="/"
          class="custom-logo-home mb-0 p-0 border border-white"
        >
          Natural
        </router-link>
      </h1>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isClassChange = !isClassChange"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarToggler"
        class="collapse navbar-collapse flex justify-content-end"
      >
        <ul class="navbar-nav navbar__text text-center">
          <li class="nav-item scale">
            <router-link
              to="/about"
              class="nav-link"
            >
              關於我們
            </router-link>
          </li>
          <li class="nav-item scale">
            <router-link
              to="/FAQ"
              class="nav-link"
            >
              常見問答
            </router-link>
          </li>
          <li class="nav-item scale">
            <router-link
              to="/products"
              class="nav-link"
            >
              線上商城
            </router-link>
          </li>
          <li class="nav-item scale">
            <a
              class="nav-link pointer-no-hover"
              @click="$emit('openOffcanvas', homeFavoritesList)"
            >
              <i class="bi bi-heart-fill position-relative">
                <span
                  class="num-icon"
                  v-if="favoritesLength > 0"
                >
                  {{ favoritesLength || newFavoritesLength }}
                </span>
              </i>
            </a>
          </li>
          <li class="nav-item scale">
            <router-link
              to="/cart"
              class="nav-link"
            >
              <i class="bi bi-cart-fill position-relative">
                <span
                  class="num-icon"
                  v-if="cartsLength > 0"
                >
                  {{ cartsLength || newLength }}
                </span>
              </i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { errorSwalFn } from '@/methods/swal';
import bus from '@/methods/bus';

export default {
  data() {
    return {
      cartsLength: 0,
      newLength: 0,
      isClassChange: false,
      homeFavoritesList: JSON.parse(localStorage.getItem('favoriteData')) || [],
      favoritesLength: 0,
      newFavoritesLength: 0,
    };
  },
  emits: ['openOffcanvas'],
  methods: {
    updateCartLength() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            let totleQty = 0;
            this.cartsLength = res.data.data.carts.forEach((item) => {
              totleQty += item.qty;
            });
            this.cartsLength = totleQty;
          } else {
            errorSwalFn('購物車資料異常', '請重新整理', true, 'top-end');
          }
        })
        .catch(() => {
          errorSwalFn('購物車資料異常', '請重新整理', true, 'top-end');
        });
    },
    updateFavoritesLength() {
      this.favoritesLength = this.homeFavoritesList.length;
      this.newFavoritesLength = this.homeFavoritesList.length;
    },
  },
  mounted() {
    this.updateCartLength();
    this.updateFavoritesLength();
    bus.on('cart-number', (num) => {
      this.cartsLength = num;
      this.newLength = num;
    });

    bus.on('favorites-number', (num) => {
      this.favoritesLength = num;
      this.newFavoritesLength = num;
    });
  },
};
</script>

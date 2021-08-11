<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-2 w-100 user-select-none">
    <div class="container-fluid">
      <h1 class="m-0">
        <router-link
          to="/"
          class="nav-link custom-logo mb-0 p-0 border border-white"
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
              @click="openFavoritesOffcanvas()"
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

  <FavoritesOffcanvas ref="likeOffcanvas" />
</template>

<script>
import { errorSwalFn } from '@/methods/swal';
import bus from '@/methods/bus';
import FavoritesOffcanvas from '@/components/offcanvas/FavoritesOffcanvas.vue';

export default {
  data() {
    return {
      cartsLength: 0,
      newLength: 0,
      mainFavoritesList: JSON.parse(localStorage.getItem('favoriteData')) || [],
      favoritesLength: 0,
      newFavoritesLength: 0,
    };
  },
  components: { FavoritesOffcanvas },
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
      this.favoritesLength = this.mainFavoritesList.length;
      this.newFavoritesLength = this.mainFavoritesList.length;
    },
    openFavoritesOffcanvas() {
      const data = JSON.parse(localStorage.getItem('favoriteData')) || [];
      this.$refs.likeOffcanvas.openOffcanvas(data);
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

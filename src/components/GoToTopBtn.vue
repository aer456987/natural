<template>
  <!-- 至頂按鈕 -->
  <ul
    class="goTopBtn position-fixed
      d-flex flex-column justify-content-around align-items-center"
    :class="bgColor"
  >
    <template v-if="isShow">
      <li>
        <a
          class="text-white pt-2 pointer_no_hover"
          @click="openFavoritesOffcanvas()"
        >
          <i class="bi bi-heart-fill fs-6 position-relative">
            <span
              class="num_icon"
              v-if="favoritesLength > 0"
            >
              {{ favoritesLength || newFavoritesLength }}
            </span>
          </i>
        </a>
      </li>

      <li>
        <router-link
          to="/cart"
          class="text-white pt-3 pb-1"
        >
          <i class="bi bi-cart-fill fs-5 position-relative">
            <span
              class="num_icon"
              v-if="cartsLength > 0"
            >
              {{ cartsLength || newLength }}
            </span>
          </i>
        </router-link>
      </li>
    </template>

    <li>
      <button
        type="button"
        class="d-flex justify-content-center align-items-center
          border-0 bg_transparent pb-1 mt-1 text-white w-100"
        @click="$emit('backTopBtn')"
      >
        <i class="bi bi-arrow-up fs-5 lh-1"></i>
      </button>
    </li>
  </ul>

  <FavoritesOffcanvas ref="likeOffcanvas" />
</template>

<script>
import { errorSwalFn } from '@/methods/swal';
import bus from '@/methods/bus';
import FavoritesOffcanvas from '@/components/offcanvas/FavoritesOffcanvas.vue';

export default {
  name: 'GoToTopBtn',
  props: ['bgColor', 'isShow'],
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
  emits: ['backTopBtn'],
  methods: {
    updateCartLength() { // 取得購物車數量
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
    updateFavoritesLength() { // 取得最愛收藏數量
      this.favoritesLength = this.mainFavoritesList.length;
      this.newFavoritesLength = this.mainFavoritesList.length;
    },
    openFavoritesOffcanvas() { // 打開最愛收藏側欄
      const data = JSON.parse(localStorage.getItem('favoriteData')) || [];
      this.$refs.likeOffcanvas.openOffcanvas(data);
    },
  },
  mounted() {
    this.updateCartLength();
    this.updateFavoritesLength();
    // 更新購物車數量
    bus.on('cart-number', (num) => {
      this.cartsLength = num;
      this.newLength = num;
    });

    // 更新最愛收藏數量
    bus.on('favorites-number', (num) => {
      this.favoritesLength = num;
      this.newFavoritesLength = num;
    });
  },
};
</script>

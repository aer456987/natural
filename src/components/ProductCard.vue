<template>
  <!-- 商品頁卡片 -->
  <Loading :status="loadingStatus"></Loading>
  <li
    class="col-sm-6 col-lg-4 col-xl-3 my-2 custom_card_style"
    v-for="product in cartProductData"
    :key="product.id"
  >

    <div class="card text-dark border-0 shadow-sm">
      <router-link
        :to="`/product/${product.id}`"
      >
        <div class="card-img-top card_img_style">
          <div class="more_msg">
            <Font-awesome-icon icon="search-plus" />
          </div>
          <img
            class="img-fluid"
            :src="product.imageUrl"
            alt="'商品圖"
          />
        </div>
      </router-link>
      <span class="favorite_icon_background shadow-sm">
        <FavoriteIcon
          :id-data="product.id"
        ></FavoriteIcon>
      </span>

      <div
        class="row card-body bg-white rounded-bottom px-2 py-3 m-0
          d-flex justify-content-between align-items-center"
        >
        <router-link
          class="col-9 p-0 text-dark border-0"
          :to="`/product/${product.id}`"
        >
          <h1 class="h5 m-0 mb-1 text_clamp_1 overflow-hidden">
            {{ product.title }} <br>
          </h1>
          <p class="h6 mb-0 fst-italic">
            ${{ $filters.currency(product.price) }}
          </p>
        </router-link>
        <span class="col-3 p-0 d-flex justify-content-end">
          <span
            class="btn btn_outline_green fs-4 ms-1"
            @click="addCart(product.id)"
          >
            <i class="bi bi-cart-plus-fill"></i>
          </span>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
import bus from '@/methods/bus';
import FavoriteIcon from '@/components/Favorite.vue';
import { swalFn } from '@/methods/swal';

export default {
  name: 'ProductCard',
  props: ['cartProductData'],
  data() {
    return {
      loadingStatus: false,
      data: {
        product_id: '',
        qty: 1,
      },
      cartsLength: Number,
    };
  },
  components: { FavoriteIcon },
  methods: {
    addCart(data) { // 加入購物車
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.loadingStatus = true;
      const cartData = {
        data: {
          product_id: data,
          qty: 1,
        },
      };
      this.$http
        .post(url, cartData)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.loadingStatus = false;
            this.updateCartLength();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          swalFn('操作失敗', 'error');
          this.loadingStatus = false;
        });
    },
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
            bus.emit('cart-number', this.cartsLength);
          } else {
            swalFn('資料取得失敗', 'error');
          }
        })
        .catch(() => {
          swalFn('資料取得失敗', 'error');
        });
    },
  },
};
</script>

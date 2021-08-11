<template>
  <Loading :status="loadingStatus" />
  <li
    class="col-sm-6 col-lg-4 col-xl-3 my-2 custom__card"
    v-for="product in cartProductData"
    :key="product.id"
  >

    <section class="card text-dark border-0 shadow-sm">
      <router-link :to="`/product/${product.id}`">
        <div class="card-img-top custom__card__img">
          <div class="custom__card__more">
            <Font-awesome-icon icon="search-plus" />
          </div>
          <img
            class="img-fluid"
            :src="product.imageUrl"
            alt="'商品圖"
          />
        </div>
      </router-link>
      <div class="favorite-icon-background shadow-sm">
        <Favorite :id-data="product.id" />
      </div>

      <div
        class="row card-body bg-white rounded-bottom px-2 py-3 m-0
          d-flex justify-content-between align-items-center"
        >
        <router-link
          class="col-9 p-0 text-dark border-0"
          :to="`/product/${product.id}`"
        >
          <h2 class="h5 m-0 mb-1 text-clamp overflow-hidden">
            {{ product.title }} <br>
          </h2>
          <p class="h6 mb-0 fst-italic">
            ${{ $filters.currency(product.price) }}
          </p>
        </router-link>
        <div class="col-3 p-0 d-flex justify-content-end">
          <button
            type="button"
            class="btn custom-btn-outline-green fs-4 ms-1"
            @click="addCart(product.id)"
          >
            <i class="bi bi-cart-plus-fill"></i>
          </button>
        </div>
      </div>
    </section>
  </li>
</template>

<script>
import bus from '@/methods/bus';
import Favorite from '@/components/Favorite.vue';
import { swalFn, errorSwalFn } from '@/methods/swal';

export default {
  props: ['cartProductData'],
  data() {
    return {
      loadingStatus: false,
      data: {
        product_id: '',
        qty: 1,
      },
      cartsLength: 0,
    };
  },
  components: { Favorite },
  methods: {
    addCart(data) {
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
            swalFn(res.data.message, 'success', true, 'top-end');
            this.loadingStatus = false;
            this.updateCartLength();
          } else {
            swalFn(res.data.message, 'error', true, 'top-end');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('操作出現異常', '請稍後再試', true, 'top-end');
          this.loadingStatus = false;
        });
    },
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
            bus.emit('cart-number', this.cartsLength);
          } else {
            errorSwalFn('購物車資料異常', '請重新整理', true, 'top-end');
          }
        })
        .catch(() => {
          errorSwalFn('購物車資料異常', '請重新整理', true, 'top-end');
        });
    },
  },
};
</script>

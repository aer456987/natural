<template>
  <Loading :status="loadingStatus"></Loading>
  <li
    class="col-sm-6 col-lg-4 col-xl-3 my-2"
    v-for="product in tempProducts"
    :key="product.id"
  >
    <div class="card border-0 shadow-sm">
      <router-link
        :to="`/product/${product.id}`"
        class="card-img-top card_img_style"
      >
        <div class="more_msg">
          <font-awesome-icon icon="search-plus" />
        </div>
        <img class="img-fluid" :src="product.imageUrl" alt="'商品圖" />
      </router-link>
      <div
        class="
          card-body
          bg-white
          rounded-bottom
          d-flex justify-content-between align-items-center
          px-2
          py-3
        "
      >
        <h1 class="h4 m-0 text-truncate">
          {{ product.title }} <br>
          <span class="h6 fst-italic">${{ product.price }}</span>
        </h1>
        <span>
          <span class="btn btn_outline_green fs-4 ms-1"
            @click="addCart(product.id)">
            <i class="bi bi-cart-plus-fill"></i>
          </span>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
import swal from 'sweetalert';
import bus from '../methods/bus';

export default {
  name: 'Card',
  props: ['tempProducts'],
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
            console.log('(成功-card)加入購物車 res:', res);
            this.swalFn(res.data.message, 'success');
            this.loadingStatus = false;
            this.updateCartLength();
          } else {
            console.log('(錯誤-card)加入購物車 res:', res);
            this.swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-card)加入購物車 err:');
          console.dir(err);
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
            console.log('(錯誤-cart)取得購物車數量 res:', res);
          }
        })
        .catch((err) => {
          console.log('(失敗-cart)取得購物車數量 err:');
          console.dir(err);
        });
    },
    swalFn(title, icon, timer = 2000, text, button = false) { // 一般提示視窗
      // success (成功) ； error (叉叉) ； warning(警告) ； info (說明)
      const txt = {
        title,
        text,
        icon,
        button,
        timer,
        closeOnClickOutside: false,
      };
      swal(txt);
    },
  },
};
</script>

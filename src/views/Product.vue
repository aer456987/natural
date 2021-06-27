<template class="pageContent">
  <Loading :status="loadingStatus"></Loading>
  <section class="bg-white">
    <section class="container">
      <!-- 麵包屑&搜尋 -->
      <nav
        style="--bs-breadcrumb-divider: '>'"
        aria-label="breadcrumb"
        class="py-4"
      >
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link
              to="/"
              class="link-secondary"
            >首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link
              to="/products"
              class="link-secondary"
            >
              線上商城
            </router-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >
            {{ tempProduct.title }}
          </li>
        </ol>
      </nav>

      <!-- 主要頁面 -->
      <section class="row mb-1 pb-5 align-items-center">
        <!-- 主圖 -->
        <div class="col-lg-6 col-xl-5">
          <img
            class="rounded-2 w-100"
            :src="productImg"
            :alt="tempProduct.title"
          />
          <!-- 多圖: 橫 -->
          <div class="col-12 flex-nowrap d-xxl-none py-1 overflow-auto">
            <div class="row flex-nowrap m-0">
              <div class="col-2 pe-1">
                <img
                  class="w-100 rounded pointer"
                  :src="tempProduct.imageUrl"
                  :alt="tempProduct.title"
                  @click="changeImg(tempProduct.imageUrl)"
                />
              </div>

              <div
                class="col-2 pe-1"
                v-for="(img, key) in tempProduct.imagesUrl"
                :key="`附圖_${key}`"
              >
                <img
                  class="w-100 p-0 rounded pointer"
                  :src="img"
                  :alt="`附圖_${key}`"
                  @click="changeImg(img)"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 多圖: 直 -->
        <div class="col-1 d-none d-xxl-block img_view p-1 overflow-auto">
          <img
            class="w-100 mb-2 p-0 rounded-1 pointer"
            :src="tempProduct.imageUrl"
            :alt="tempProduct.title"
            @click="changeImg(tempProduct.imageUrl)"
          />
          <template
            v-for="(img, key) in tempProduct.imagesUrl"
            :key="`附圖_${key}`"
          >
            <img
              class="w-100 mb-2 p-0 rounded-1 pointer"
              :src="img"
              :alt="`附圖_${key}`"
              @click="changeImg(img)"
            />
          </template>
        </div>

        <!-- 商品介紹 -->
        <div class="col-lg-6 col-xl-7 col-xxl-6 py-2 ps-xl-3 ps-xxl-4">
          <h1 class="mb-3">
            {{ tempProduct.title }}
          </h1>

          <span class="border rounded text-dark px-3 py-1">
            {{ tempProduct.category }}
          </span>

          <p class="p-4 my-4 bg-primary-100 text_pre">
            {{ tempProduct.content }}
          </p>

          <div class="text-end">
            <span class="fst-italic text-decoration-line-through text-gray">
              原價
              ${{ $filters.currency(tempProduct.origin_price) }} / {{ tempProduct.unit }}
            </span>

            <p class="h3 fw-bold mb-2">
              快閃特惠價
              ${{ $filters.currency(tempProduct.price)}} / {{ tempProduct.unit }}
            </p>

            <div class="row align-items-center flex-row-reverse
              mx-0 mb-2">
              <div class="col-6 p-0">
                <div class="input-group">
                  <button
                    type="button"
                    class="w-25 btn_light_green text-center border"
                    @click="changeNum('reduce')"
                  > - </button>

                  <input type="number"
                    class="form-control text-center m-0 p-1
                      border-0 border-top border-bottom"
                    v-model.number="qty"
                    min="1"
                  >

                  <button
                    type="button"
                    class="w-25 btn_light_green text-center border"
                    @click="changeNum('add')"
                  > + </button>

                </div>
              </div>
            </div>

            <div class="row align-items-center flex-row-reverse mx-0 mb-2">

              <div class="col-6 p-0">
                <button
                  type="button"
                  class="btn btn_main py-1 w-100"
                  @click="addCart"
                >加入購物車</button>
              </div>

              <span class="col-2 px-2 btn text-end">
                <i class="bi bi-heart-fill btn_red"></i>
              </span>
            </div>
            <p class="text-danger">
              每樣商品都將提撥 5% 收益至環境保育或野生動物救助之相關機構。
            </p>
          </div>
        </div>
      </section>
    </section>
  </section>

  <!-- 商品說明 -->
  <section class="row py-5 m-0">
    <section class="col-10 my-2 py-5 container text-center bg-white">
      <h2 class="pb-2 fw-bold text-primary">商品說明</h2>
      <div class="row justify-content-center">
        <span class="col-11 col-md-9 col-lg-6 text_pre">
          <p>{{ tempProduct.description }}</p>
        </span>
      </div>
    </section>
  </section>
</template>

<script>
import { swalFn } from '@/methods/swal';
import bus from '@/methods/bus';

export default {
  name: 'Product',
  data() {
    return {
      loadingStatus: false, // false
      productId: '',
      productImg: '',
      tempProduct: {},
      qty: Number,
      cartsLength: Number,
    };
  },
  methods: {
    getProduct() { // 取得單筆資料
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/product/${this.productId}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)取得單一商品 res:', res);
            this.tempProduct = res.data.product;
            this.productImg = this.tempProduct.imageUrl;
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)取得單一商品 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得單一商品 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    changeNum(action) { // 改變數量
      if (action === 'reduce') {
        if (this.qty < 2) {
          swalFn('數量不可少於 1', 'error');
          return;
        }
        this.qty -= 1;
      } else if (action === 'add') {
        this.qty += 1;
      }
    },
    addCart() { // 加入購物車
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      const cartData = {
        data: {
          product_id: this.productId,
          qty: this.qty,
        },
      };
      this.loadingStatus = true;

      this.$http
        .post(url, cartData)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)加入購物車 res:', res);
            swalFn(res.data.message, 'success');
            this.qty = 1;
            this.updateCartLength();
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)加入購物車 res:', res);
            swalFn(res.data.message, 'error');
            this.qty = 1;
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)加入購物車 err:');
          console.dir(err);
          this.qty = 1;
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
            console.log('(錯誤-單品)取得購物車數量 res:', res);
          }
        })
        .catch((err) => {
          console.log('(失敗-單品)取得購物車數量 err:');
          console.dir(err);
        });
    },
    changeImg(img) { // 切換圖片
      this.productImg = img;
    },
  },
  created() {
    this.productId = this.$route.params.id;
    this.getProduct(this.productId);
    this.qty = 1;
  },
};
</script>

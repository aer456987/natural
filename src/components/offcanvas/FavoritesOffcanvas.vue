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
      <div class="row align-items-center w-100">
        <div class="col-10">
          <h3 class="fs-5">
            最愛收藏
            <span>
              <button
                type="button"
                to="/cart"
                class="btn btn-outline-danger py-0 px-1"
                @click="allDelFavorite"
              >
                清空收藏
              </button>
            </span>
          </h3>
        </div>
        <div class="col-2 text-end">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
    <div class="offcanvas-body">
      <template v-if="offcanvasFavoritsList.length > 1">
        <ul class="list-unstyled px-1 mb-5">
          <template
            v-for="favoritItme in newFavoritsData"
            :key="favoritItme.id"
          >

            <li class="row justify-content-between align-items-center
              mb-2 pb-2 border-bottom"
            >
              <span class="col-1 p-0 text-center">
                <FavoriteIcon
                  ref="favoritIcon"
                  :idData="favoritItme.id"
                  @favorite-fn="delFavoriteItem"
                ></FavoriteIcon>
              </span>
              <span class="col-2 p-0">
                <img
                  :src="favoritItme.imageUrl"
                  alt="圖片"
                  class="w-100"
                >
              </span>
              <span class="col-4 py-0 px-1">
                {{ favoritItme.title }} <br>
                ${{ $filters.currency(favoritItme.price)}} / {{ favoritItme.unit }}
              </span>
              <span class="col-2 px-0">
                <input
                  ref="numValue"
                  type="number"
                  min="1"
                  class="form-control w-100 text-center
                    py-1 text-center"
                  v-model.number="favoritItme.qty"
                >
              </span>
              <span class="col-2">
                <span
                  class="btn btn_outline_green fs-4"
                  @click="addCart(favoritItme.id, favoritItme.qty)"
                >
                  <i class="bi bi-cart-plus-fill"></i>
                </span>
              </span>
            </li>

          </template>
        </ul>

        <div class="row flex-row-reverse">
          <div class="col-12 col-md-6">
            <router-link
              to="/cart"
              class="btn btn_main w-100 mb-2"
            >
              我要結帳
            </router-link>
          </div>

          <div class="col-12 col-md-6">
            <router-link
              to="/products"
              class="btn btn-outline-secondary w-100 mb-2"
            >
              繼續選購
            </router-link>
          </div>
        </div>
      </template>

      <template v-else>
        <ul class="list-unstyled px-1 mb-5">
          <li class="text-center">
            <p class="mb-3 fs-5">
              還沒有將喜歡的商品加入收藏嗎？
            </p>
            <router-link
              to="/products"
              class="btn btn_main w-100 mb-2"
            >
              趕快去選購
            </router-link>
          </li>
        </ul>
      </template>
    </div>
  </div>

</template>

<script>
import { swalFn } from '@/methods/swal';
import bus from '@/methods/bus';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import FavoriteIcon from '@/components/Favorite.vue';

export default {
  name: 'FavoritesOffcanvas.vue',
  data() {
    return {
      offcanvas: '', // 元件註冊位置
      offcanvasProducts: [], // 所有產品
      offcanvasFavoritsList: [], // 最愛清單內容
      newFavoritsData: [], // (渲染用)篩選後的最愛清單資料
    };
  },
  components: { FavoriteIcon },
  watch: {
    offcanvasFavoritsList() {
      this.renderFavorite();
    },
  },
  methods: {
    openOffcanvas(data) {
      this.offcanvasFavoritsList = data;
      console.log(this.offcanvasFavoritsList);
      this.renderFavorite();
      this.offcanvas.show();
    },
    hideOffcanvas() {
      this.offcanvas.hide();
    },
    getProducts() { // 取得全部商品
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/products/all`;
      // this.loadingStatus = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.offcanvasProducts = res.data.products;
            this.renderFavorite();
            // this.loadingStatus = false;
            console.log(this.offcanvasProducts);
          } else {
            console.log('(錯誤-側欄)取得全部商品資料 res:', res);
            // this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-側欄)取得全部商品資料 res:');
          console.dir(err);
          // this.loadingStatus = false;
        });
    },
    renderFavorite() {
      this.newFavoritsData = [];
      this.offcanvasProducts.forEach((item, i) => {
        if (this.offcanvasFavoritsList.includes(item.id)) {
          this.offcanvasProducts[i].qty = 1;
          this.newFavoritsData.push(item);
          console.log(this.newFavoritsData);
        }
      });
    },
    delFavoriteItem(idData) { // 加入最愛
      console.log('側欄', idData);
      this.offcanvasFavoritsList.splice(this.offcanvasFavoritsList.indexOf(idData), 1);
      this.$refs.favoritIcon.saveFavorit(this.offcanvasFavoritsList);
      console.log('刪除重複', this.offcanvasFavoritsList);
      this.renderFavorite();
    },
    allDelFavorite() { // 刪除全部最愛
      this.$refs.favoritIcon.saveFavorit([]);
      this.offcanvasFavoritsList = [];
      this.newFavoritsData = [];
    },
    addCart(id, num = 1) { // 加入購物車
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      const cartData = {
        data: {
          product_id: id,
          qty: num,
        },
      };
      this.loadingStatus = true;

      this.$http
        .post(url, cartData)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.productQty = 1;
            this.updateCartLength();
            this.loadingStatus = false;
          } else {
            swalFn(res.data.message, 'error');
            this.productQty = 1;
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)加入購物車 err:');
          console.dir(err);
          this.productQty = 1;
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
            console.log('(錯誤-側欄)取得購物車數量 res:', res);
          }
        })
        .catch((err) => {
          console.log('(失敗-側欄)取得購物車數量 err:');
          console.dir(err);
        });
    },
    // updateFavoritLength() { // 取得我的最愛數量
    //   const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;

    //   this.$http
    //     .get(url)
    //     .then((res) => {
    //       if (res.data.success) {
    //         let totleQty = 0;
    //         this.cartsLength = res.data.data.carts.forEach((item) => {
    //           totleQty += item.qty;
    //         });
    //         this.cartsLength = totleQty;
    //         bus.emit('cart-number', this.cartsLength);
    //       } else {
    //         console.log('(錯誤-側欄)取得購物車數量 res:', res);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log('(失敗-側欄)取得購物車數量 err:');
    //       console.dir(err);
    //     });
    // },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
    this.getProducts();
  },
};
</script>

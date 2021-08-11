<template>
  <Loading :status="loadingStatus" />
  <div
    class="offcanvas offcanvas-end user-select-none
      shadow-lg overflow-x px-0 m-0"
    data-bs-scroll="false"
    data-bs-backdrop="true"
    tabindex="-1"
    ref="offcanvas"
  >
    <div class="offcanvas-header pe-0">
      <div class="row align-items-center justify-content-between w-100">
        <div class="col-10">
          <h3 class="fs-5 d-inline">
            最愛收藏
          </h3>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="allDelFavorite"
            :disabled="newFavoritesData.length<1"
          >
            清空收藏
          </button>
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
      <template v-if="offcanvasFavoritesList.length > 0">
        <ul class="list-unstyled px-1 mb-5">
          <li
            class="row justify-content-center align-items-center
            mb-2 pb-2 border-bottom"
            v-for="favoriteItme in newFavoritesData"
            :key="favoriteItme.id"
          >
            <div class="col-2 col-sm-1 p-0">
              <Favorite
                ref="favoriteIcon"
                :idData="favoriteItme.id" />
            </div>
            <div class="col-1 p-0 ms-2 me-1 d-none d-sm-block">
              <img
                :src="favoriteItme.imageUrl"
                alt="圖片"
                class="w-100"
              >
            </div>
            <p class="col-5 custom-style-text-2 py-0 px-1 m-0">
              {{ favoriteItme.title }} <br>
              ${{ $filters.currency(favoriteItme.price)}} / {{ favoriteItme.unit }}
            </p>
            <div class="col-3 col-sm-2 px-1">
              <input
                ref="numValue"
                type="number"
                min="1"
                class="form-control w-100 text-center
                  py-1 text-center"
                v-model.number="favoriteItme.qty"
              >
            </div>
            <div class="col-2 p-0 ps-sm-1">
              <button
                type="button"
                class="btn custom-btn-outline-green fs-4"
                @click="addCart(favoriteItme.id, favoriteItme.qty)"
              >
                <i class="bi bi-cart-plus-fill"></i>
              </button>
            </div>
          </li>
        </ul>

        <div class="row flex-row-reverse">
          <div class="col-12 col-md-6">
            <router-link
              to="/cart"
              class="btn custom-btn-main w-100 mb-2"
              @click="hideOffcanvas"
            >
              我要結帳
            </router-link>
          </div>

          <div class="col-12 col-md-6">
            <router-link
              to="/products"
              class="btn btn-outline-custom-primary w-100 mb-2"
              @click="hideOffcanvas"
            >
              繼續選購
            </router-link>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="px-1 mt-5">
          <div class="text-center">
            <p class="mb-3 fs-5">
              還沒有將喜歡的商品加入收藏嗎？
            </p>
            <router-link
              to="/products"
              class="btn custom-btn-main w-100"
              @click="hideOffcanvas"
            >
              趕快去選購
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>

<script>
import { swalFn, errorSwalFn } from '@/methods/swal';
import bus from '@/methods/bus';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import Favorite from '@/components/Favorite.vue';

export default {
  data() {
    return {
      loadingStatus: false,
      offcanvas: '',
      offcanvasProducts: [],
      offcanvasFavoritesList: [],
      newFavoritesData: [], // (渲染用)篩選後的最愛清單資料
    };
  },
  components: { Favorite },
  watch: {
    offcanvasFavoritesList() {
      this.renderFavorite();
    },
  },
  emits: ['resetFn'],
  methods: {
    openOffcanvas(data) {
      this.offcanvasFavoritesList = data;
      this.offcanvas.show();
    },
    hideOffcanvas() {
      this.offcanvas.hide();
    },
    getProducts() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.offcanvasProducts = res.data.products;
            this.renderFavorite();
          } else {
            errorSwalFn('商品資料取得失敗', '請重新整理', true, 'top-end');
          }
        })
        .catch(() => {
          errorSwalFn('商品資料取得失敗', '請重新整理', true, 'top-end');
        });
    },
    renderFavorite() {
      this.newFavoritesData = [];

      this.offcanvasProducts.forEach((item, i) => {
        if (this.offcanvasFavoritesList.includes(item.id)) {
          this.offcanvasProducts[i].qty = 1;
          this.newFavoritesData.push(item);
        }
      });
      bus.emit('favorites-btn-status');
    },
    allDelFavorite() {
      this.$refs.favoriteIcon.saveFavorite([]);
      this.offcanvasFavoritesList = [];
      this.newFavoritesData = [];
      bus.emit('favorites-number', this.newFavoritesData.length);
    },
    addCart(id, num = 1) {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.loadingStatus = true;
      const cartData = {
        data: {
          product_id: id,
          qty: num,
        },
      };

      this.$http
        .post(url, cartData)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success', true, 'top-end');
            this.updateCartLength();
            this.loadingStatus = false;
          } else {
            swalFn(res.data.message, 'error', true, 'top-end');
            this.productQty = 1;
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('操作出現異常', '請稍後再試', true, 'top-end');
          this.productQty = 1;
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
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
    this.getProducts();

    bus.on('favorites-list', (item) => {
      this.offcanvasFavoritesList = item;
    });
  },
};
</script>

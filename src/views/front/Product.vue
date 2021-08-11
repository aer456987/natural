<template>
  <Loading :status="loadingStatus" />
  <section class="bg-white user-select-none">
    <div class="container py-4">
      <Breadcrumb :breadcrumb-data="breadcrumbData" />

      <main class="row mb-1 pt-3 pb-1 pb-lg-3">
        <div class="col-lg-6 col-xl-5 col-xxl-6">
          <img
            class="rounded-2 w-100"
            :src="productImg"
            :alt="tempProduct.title"
          />
          <div class="col-12 flex-nowrap py-1 overflow-auto">
            <div class="row flex-nowrap m-0">
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

        <div class="col-lg-6 col-xl-7 col-xxl-6 py-2 ps-xl-3 ps-xxl-4">
          <h2 class="fw-bold mb-3">
            {{ tempProduct.title }}
          </h2>

          <span class="border rounded text-dark px-3 py-1">
            {{ tempProduct.category }}
          </span>

          <p class="p-4 my-4 bg-primary-100 text-white-space">
            {{ tempProduct.description }}
          </p>

          <div class="text-end">
            <p class="fst-italic text-decoration-line-through text-gray m-0">
              原價
              ${{ $filters.currency(tempProduct.origin_price) }} / {{ tempProduct.unit }}
            </p>

            <p class="h3 mb-2">
              售價
              ${{ $filters.currency(tempProduct.price)}} / {{ tempProduct.unit }}
            </p>

            <div class="row align-items-center flex-row-reverse mx-0 mb-2">
              <div class="col-6 p-0">
                <div class="input-group">
                  <button
                    type="button"
                    class="w-25 custom-btn-light-green text-center border"
                    @click="changeNum('reduce')"
                  >
                    -
                  </button>

                  <input type="number"
                    class="form-control text-center m-0 p-1
                      border-0 border-top border-bottom"
                    v-model.number="qty"
                    min="1"
                  >

                  <button
                    type="button"
                    class="w-25 custom-btn-light-green text-center border"
                    @click="changeNum('add')"
                  >
                    +
                  </button>

                </div>
              </div>
            </div>

            <div class="row align-items-center flex-row-reverse mx-0 mb-2">
              <div class="col-6 p-0">
                <button
                  type="button"
                  class="btn custom-btn-main py-1 w-100"
                  @click="addCart"
                >
                  加入購物車
                </button>
              </div>

              <div class="col-2 p-0 text-end">
                <Favorite
                  ref="productFavorite"
                  :id-data="productId" />
              </div>
            </div>

            <div class="text-danger">
              <p v-if="tempProduct.category === '募款專案'">
                募款專案依專案內容不同，金額將全數捐至專案相關之機構。<br>
                ※注意：所有募款專案皆以個人名義進行捐款，非 Natural 環保資訊整合平台掛名。<br>
                捐款收據上的捐款人為訂購者本人，如發現名稱有錯請盡速聯絡客服修正。
              </p>
              <p v-else>
                活動及產品收益將捐至環境保育或野生動物救助之相關機構。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>

  <section class="row py-5 m-0 user-select-none">
    <div class="col-11 col-lg-10 col-xl-10 col-xxl-8 my-2 py-5 container bg-white">
      <template v-if="tempProduct.category==='講座'">
        <h3 class="pb-4 text-center fw-bold text-primary">
          講座內容說明
        </h3>
      </template>

      <template v-else-if="tempProduct.category==='募款專案'">
        <h3 class="pb-4 text-center fw-bold text-primary">
          募款專案說明
        </h3>
      </template>

      <template v-else-if="tempProduct.category==='公益活動'">
        <h3 class="pb-4 text-center fw-bold text-primary">
          活動說明
        </h3>
      </template>

      <template v-else>
        <h3 class="pb-4 text-center fw-bold text-primary">
          產品說明
        </h3>
      </template>
      <div class="row justify-content-center text-white-space">

        <p class="col-10 col-xl-9 border-bottom border-gray pb-5">
          {{ tempProduct.content }}
        </p>

        <p class="col-10 col-xl-9">
          {{ tempProduct.content_supplement }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { swalFn, errorSwalFn } from '@/methods/swal';
import bus from '@/methods/bus';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Favorite from '@/components/Favorite.vue';

export default {
  data() {
    return {
      loadingStatus: false,
      productId: '',
      productImg: '',
      tempProduct: {},
      qty: 0,
      cartsLength: 0,
      breadcrumbData: {
        previous: [
          {
            title: '首頁',
            url: '/',
          },
          {
            title: '線上商城',
            url: '/products',
          },
        ],
        purpose: '',
      },
    };
  },
  components: {
    Breadcrumb,
    Favorite,
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/product/${this.productId}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct = res.data.product;
            this.productImg = this.tempProduct.imageUrl;
            const [tempProduct] = this.tempProduct.imagesUrl;
            this.productImg = tempProduct;
            this.breadcrumbData.purpose = this.tempProduct.title;
            this.loadingStatus = false;
          } else {
            errorSwalFn('資料取得失敗', '請重新整理', true, 'top-end');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('資料取得失敗', '請重新整理', true, 'top-end');
          this.loadingStatus = false;
        });
    },
    changeNum(action) {
      if (action === 'reduce') {
        if (this.qty < 2) {
          swalFn('數量不可少於 1', 'error', true, 'top-end');
          return;
        }
        this.qty -= 1;
      } else if (action === 'add') {
        this.qty += 1;
      }
    },
    addCart() {
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
            swalFn(res.data.message, 'success', true, 'top-end');
            this.qty = 1;
            this.updateCartLength();
            this.loadingStatus = false;
          } else {
            swalFn(res.data.message, 'error', true, 'top-end');
            this.qty = 1;
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('操作出現異常', '請稍後再試', true, 'top-end');
          this.qty = 1;
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
    changeImg(img) {
      this.productImg = img;
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    this.backTop();
    this.productId = this.$route.params.id;
    this.getProduct(this.productId);
    this.qty = 1;
  },
};
</script>

<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="container pageContent">
    <section class="py-4">
      <!-- 麵包屑&搜尋 -->
      <Breadcrumb :breadcrumb-data="breadcrumbData"></Breadcrumb>

      <!-- 進度條 -->
      <Progress :progress-value="progressNum"></Progress>

      <!-- 購物車 -->
      <h1 class="text-center fw-bold mb-4">購物車</h1>
      <div class="container">
        <main class="row px-lg-0 px-xl-5 position-relative">

          <div
            class="col-12 table_style bg-white mb-5 py-5 px-2 px-md-5 text-center rounded-3 shadow"
          >

            <div
              v-if="btnStatus"
              class="row justify-content-center py-4"
            >
              <span class="col-12 col-md-5">
                <h3 class="mb-3">購物車內沒有商品</h3>
                <router-link
                  to="/products"
                  class="btn btn_main w-100"
                >
                  前往選購
                </router-link>
              </span>
            </div>

            <template v-else>
              <table class="table position-relative">
                <thead>
                  <tr>
                    <td
                      width="30%"
                      scope="col"
                      class="py-3 fs-5"
                    >
                      商品資訊
                    </td>
                    <td
                      width="45%"
                      scope="col"
                      class="py-3 fs-5"
                    >
                      數量
                    </td>
                    <td
                      width="20%"
                      scope="col"
                      class="py-3 fs-5"
                    >
                      金額
                    </td>
                    <td
                      width="5%"
                      scope="col"
                      class="py-3 fs-5"
                    ></td>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in carts.carts"
                    :key="item.id"
                  >
                    <td class="d-flex align-items-center border">
                      <span class="d-none d-md-block">
                        <img
                          class="width_sm w-100  d-none d-md-block"
                          :src="item.product.imageUrl"
                          alt="預覽"
                        />
                      </span>
                      <p class="m-0 px-1 px-md-2 text-start">
                        {{ item.product.title }}
                      </p>
                    </td>
                    <td class="border">
                      <div class="d-flex justify-content-center">
                        <div
                          class="input-group"
                          style="max-width: 180px"
                        >
                          <span
                            class="btn_light_green px-2"
                            @click="putCart('reduce', item)"
                          > - </span>
                          <div class="form-control text-center border p-1">
                            {{ item.qty }}
                          </div>
                          <div
                            class="btn_light_green px-2"
                            @click="putCart('add', item)"
                          > + </div>
                        </div>
                      </div>
                    </td>
                    <td class="border">
                      NT ${{ $filters.currency(item.final_total) }}
                    </td>
                    <td class="border">
                      <i
                        class="bi bi-x-lg btn_red"
                        @click="delCart('one', item)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="row justify-content-end">
                <span class="col-12 text-end mb-1">
                  <small class="d-block text-gray">
                    商品金額NT ${{ $filters.currency(carts.total) }}
                  </small>
                  <small
                    v-if="isDiscount"
                    class="d-block"
                  >
                    - 使用優惠折扣NT ${{ $filters.currency(carts.total - carts.final_total) }}
                  </small>
                </span>
                <span class="col-12 mb-3">
                  <p class="h5 text-end text-danger">
                    總金額NT {{ $filters.currency(carts.final_total) }}
                  </p>
                </span>
                <span class="col-10 col-md-6 col-lg-5">

                  <span class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入折扣碼"
                      aria-label="couponNum"
                      aria-describedby="basic-addon1"
                      v-model="couponNum.code"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-primary input-group-text"
                      @click="useCoupon"
                    >
                      套用優惠券
                    </button>
                  </span>

                </span>
              </div>
            </template>
          </div>

          <!-- 繼續購物/清空購物車 -->
          <div
            v-if="!btnStatus"
            class="d-flex justify-content-between mb-5"
          >
            <router-link
              to="/products"
              class="btn btn-outline-custom-primary px-1 px-sm-2 px-md-3 py-1"
            >
              ◁ 繼續購物
            </router-link>

            <button
              type="button"
              class="btn btn-outline-danger px-1 px-sm-2 px-md-3 py-1"
              @click="delCart('all')"
            >
              清空購物車
            </button>

            <router-link
              to="/order"
              class="btn btn_main px-1 px-sm-2 px-md-3 py-1"
              :class="{ 'disabled' : btnStatus }"
            >
              填寫訂單 ▷
            </router-link>
          </div>
        </main>
      </div>
    </section>
  </section>
</template>

<style lang="sass">
.cart_img
  width: 70px
  height: 70px
  overflow: hidden
</style>

<script>
import { swalFn } from '@/methods/swal';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Progress from '@/components/CartProgress.vue';

export default {
  name: 'Cart',
  data() {
    return {
      loadingStatus: false,
      btnStatus: true,
      progressNum: 0, // 進度條
      carts: {},
      couponNum: { // 優惠券
        code: 'Y2021M03YIP',
      },
      isDiscount: false, // 是否已使用折扣
      breadcrumbData: { // 麵包屑
        previous: [ // 上一個(多個)
          {
            title: '線上商城',
            url: '/products',
          },
        ],
        purpose: '購物車', // 目前頁面
      },
    };
  },
  components: { Progress, Breadcrumb },
  methods: {
    getCarts() { // 取得購物車資料
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.loadingStatus = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data;

            if (res.data.data.carts.length > 0) {
              this.btnStatus = false;
            } else {
              this.btnStatus = true;
            }

            if (this.carts.total > this.carts.final_total) {
              this.isDiscount = true;
            }

            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)取得購物車全部資料 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得購物車全部資料 err:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    delCart(action, item) { // 刪除購物車
      let url = '';
      let productName = '';
      this.loadingStatus = true;

      if (action === 'all') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/carts`;
        productName = '全部商品';
      } else if (action === 'one') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
        productName = item.product.title;
      }

      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            swalFn(`${productName} ${res.data.message}`, 'success');
            this.getCarts();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)刪除購物車 err:');
          console.dir(err);
          swalFn(err.data.message, 'error');
          this.loadingStatus = false;
        });
    },
    putCart(action, item) { // 修改購物車
      this.loadingStatus = true;
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
      let newNum = item.qty;

      if (action === 'reduce') {
        if (item.qty < 2) {
          swalFn('數量不可少於 1', 'error');
          this.loadingStatus = false;
          return;
        }
        newNum -= 1;
      } else if (action === 'add') {
        newNum += 1;
      }

      const datas = {
        data: {
          product_id: item.product_id,
          qty: newNum,
        },
      };

      this.$http
        .put(url, datas)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.getCarts();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)修改購物車 err:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    useCoupon() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/coupon`;
      this.loadingStatus = true;

      this.$http.post(url, { data: this.couponNum })
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.rederCode = this.couponNum.code;
            this.getCarts();
            this.couponNum.code = '';
            this.loadingStatus = false;
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)套用優惠券 err:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>

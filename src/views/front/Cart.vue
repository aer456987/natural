<template>
  <Loading :status="loadingStatus" />
  <section class="container page-content user-select-none">
    <main class="py-4">
      <Breadcrumb :breadcrumb-data="breadcrumbData" />
      <CartProgress :progress-value="progressNum" />

      <h2 class="h1 text-center fw-bold mb-4">
        購物車
      </h2>
      <div class="container">
        <div class="row px-lg-0 px-xl-5 position-relative">

          <section
            class="col-12 width-xl bg-white
              mx-auto mb-5  py-5 px-2 px-md-5
              text-center rounded-3 shadow"
          >
            <div
              v-if="btnStatus"
              class="row justify-content-center py-4"
            >
              <div class="col-12 col-md-5">
                <h3 class="mb-3">購物車內沒有商品</h3>
                <router-link
                  to="/products"
                  class="btn custom-btn-main w-100"
                >
                  前往選購
                </router-link>
              </div>
            </div>

            <template v-else>
              <table class="table custom-cart-table position-relative">
                <thead>
                  <tr>
                    <td
                      width="40%"
                      scope="col"
                      class="py-3"
                    >
                      商品資訊
                    </td>
                    <td
                      width="35%"
                      scope="col"
                      class="py-3"
                    >
                      數量
                    </td>
                    <td
                      width="20%"
                      scope="col"
                      class="py-3"
                    >
                      金額
                    </td>
                    <td
                      width="5%"
                      scope="col"
                      class="py-3"
                    ></td>
                  </tr>
                </thead>
                <tbody class="align-middle">
                  <tr
                    v-for="item in carts.carts"
                    :key="item.id"
                  >
                    <td class="text-start">
                      <div class="row align-items-center">
                        <div class="col-4 d-none d-md-inline">
                          <img
                            class="width-sm"
                            :src="item.product.imageUrl"
                            alt="預覽"
                          />
                        </div>
                        <p class="col-md-8 px-sm-1 m-0">
                          {{ item.product.title }}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div
                          class="input-group"
                          style="max-width: 180px"
                        >
                          <button
                            type="button"
                            class="custom-btn-light-green px-0 px-sm-1 px-md-1 border-0"
                            @click="putCart('reduce', item)"
                          >
                            -
                          </button>
                          <span class="form-control text-center px-0 p-md-1 custom-style-text-2">
                            {{ item.qty }}
                          </span>
                          <button
                            type="button"
                            class="custom-btn-light-green px-0 px-sm-1 px-md-1 border-0"
                            @click="putCart('add', item)"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      NT ${{ $filters.currency(item.final_total) }}
                    </td>
                    <td>
                      <button
                        type="button"
                        class="custom-btn-red fs-5 bg-transparent border-0"
                      >
                        <i
                          class="bi bi-x-lg"
                          @click="delCart('one', item)"
                        ></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="row justify-content-end">
                <div class="col-12 text-end mb-1">
                  <p class="m-0">
                    <small class="d-block text-gray">
                      商品金額NT ${{ $filters.currency(carts.total) }}
                    </small>
                    <small
                      v-if="isDiscount"
                      class="d-block"
                    >
                      - 使用優惠折扣NT ${{ $filters.currency(carts.total - carts.final_total) }}
                    </small>
                  </p>
                </div>
                <div class="col-12 mb-3">
                  <p class="h5 text-end text-danger">
                    總金額NT {{ $filters.currency(carts.final_total) }}
                  </p>
                </div>

                <div class="col-10 col-md-6 col-lg-5">
                  <div class="input-group input-group-sm">
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
                      class="btn btn-outline-success input-group-text"
                      @click="useCoupon"
                    >
                      套用優惠券
                    </button>
                  </div>
                </div>

              </div>
            </template>
          </section>

          <div
            v-if="!btnStatus"
            class="d-flex justify-content-between mb-2 mb-md-5"
          >
            <router-link
              to="/products"
              class="btn btn-outline-custom-primary custom-style-text-3
                px-1 px-sm-2 px-md-3 py-1"
            >
              ◁ 繼續購物
            </router-link>

            <button
              type="button"
              class="btn btn-outline-danger custom-style-text-3
                px-1 px-sm-2 px-md-3 py-1"
              @click="delCart('all')"
            >
              清空
            </button>

            <router-link
              to="/order"
              class="btn custom-btn-main custom-btn
                px-1 px-sm-2 px-md-3 py-1"
              :class="{ 'disabled' : btnStatus }"
            >
              填寫訂單 ▷
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import { swalFn, errorSwalFn } from '@/methods/swal';
import bus from '@/methods/bus';
import Breadcrumb from '@/components/Breadcrumb.vue';
import CartProgress from '@/components/CartProgress.vue';

export default {
  data() {
    return {
      loadingStatus: false,
      btnStatus: true,
      progressNum: 0,
      carts: {},
      couponNum: {
        code: 'Y2021M03YIP',
      },
      isDiscount: false,
      breadcrumbData: {
        previous: [
          {
            title: '線上商城',
            url: '/products',
          },
        ],
        purpose: '購物車',
      },
    };
  },
  components: { CartProgress, Breadcrumb },
  methods: {
    getCarts() {
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
            errorSwalFn('購物車資料異常', '請重新整理', true, 'top-end');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('購物車資料異常', '請重新整理', true, 'top-end');
          this.loadingStatus = false;
        });
    },
    delCart(action, item) {
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
            swalFn(`${productName} ${res.data.message}`, 'success', true, 'top-end');
            this.updateCartLength();
            this.getCarts();
          } else {
            swalFn(res.data.message, 'error', true, 'top-end');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          swalFn(err.data.message, 'error', true, 'top-end');
          this.loadingStatus = false;
        });
    },
    putCart(action, item) {
      this.loadingStatus = true;
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
      let newNum = item.qty;

      if (action === 'reduce') {
        if (item.qty < 2) {
          swalFn('數量不可少於 1', 'error', true, 'top-end');
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
            swalFn(res.data.message, 'success', true, 'top-end');
            this.updateCartLength();
            this.getCarts();
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
    useCoupon() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/coupon`;
      this.loadingStatus = true;

      this.$http.post(url, { data: this.couponNum })
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success', true, 'top-end');
            this.rederCode = this.couponNum.code;
            this.getCarts();
            this.couponNum.code = '';
            this.loadingStatus = false;
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
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    this.backTop();
    this.getCarts();
    this.isDiscount = false;
  },
};
</script>

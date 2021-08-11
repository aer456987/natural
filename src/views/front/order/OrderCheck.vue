<template>
  <Loading :status="loadingStatus" />
  <section class="container page-content user-select-none">
    <div class="py-4">

      <Breadcrumb :breadcrumb-data="breadcrumbData" />
      <CartProgress :progress-value="progressNum" />

      <h2 class="h1 text-center fw-bold mb-4">
        訂單成立
      </h2>
      <main class="container">
        <div class="row px-md-1 px-lg-5 justify-content-center">
          <div class="col-md-12 col-lg-9">
            <section class="px-3 px-md-5 py-5 mb-5 rounded shadow bg-white">
              <h3 class="h5 text-center fw-bold mt-3">
                訂單編號
              </h3>
              <p class="text-center text-danger
                custom-style-text-2 fw-bold mb-4 pb-3">
                {{ order.id }}
              </p>
              <h3 class="h5 text-center fw-bold mt-3 mb-2">
                訂購人資訊
              </h3>
              <table class="table table-borderless custom-cart-table
                mb-5 text-break"
              >
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      姓名
                    </th>
                    <td
                      class="px-2 px-md-3 border"
                      width="70%"
                    >
                      {{ order.data.user.name }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      聯絡電話
                    </th>
                    <td
                      class="px-2 px-md-3 border"
                      width="70%"
                    >
                      {{ order.data.user.tel }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      Email
                    </th>
                    <td
                      class="px-2 px-md-3 border"
                      width="70%"
                    >
                      {{ order.data.user.email }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      寄送方式
                    </th>
                    <td
                      class="px-2 px-md-3 border"
                      width="70%"
                    >
                      {{ order.data.user.delivery }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      寄送地址
                    </th>
                    <td
                      class="px-2 px-md-3 border"
                      width="70%"
                    >
                      {{ order.data.user.address }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      付款方式
                    </th>
                    <td
                      class="px-2 px-md-3 border"
                      width="70%"
                    >
                      {{ order.data.user.payment }}
                      <span class='text-gray'>(未付款)</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 class="h5 text-center fw-bold mt-3 mb-2">
                商品項目
              </h3>
              <table class="table table-borderless custom-cart-table
                mb-5 text-center text-break"
              >
                <thead>
                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="40%"
                    >
                      品名
                    </th>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="20%"
                    >
                      數量
                    </th>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      金額
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in order.data.products"
                    :key="item.id"
                  >
                    <td
                      scope="row"
                      class="border ps-2 text-start"
                    >
                      {{ item.product.title }}
                    </td>
                    <td class="px-2 px-md-3 border">
                      {{ item.qty }} {{ item.product.unit }}
                    </td>
                    <td class="px-2 px-md-3 border">
                      NT ${{ $filters.currency(item.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="h5 text-center mb-3">
                總金額NT ${{ $filters.currency(order.data.total) }}
              </p>
            </section>
          </div>

          <div class="col-12 d-flex justify-content-center mb-2 mb-md-5">
            <router-link
              v-if="order.data.user.payment === '貨到付款'"
              to="/products"
              class="btn custom-btn-main px-3 py-1"
            >
              繼續選購
            </router-link>

            <router-link
              v-else
              to="/orderPaid"
              class="btn custom-btn-main px-3 py-1"
              @click="goPay"
            >
              我要付款
            </router-link>
          </div>

        </div>
      </main>
    </div>
  </section>
</template>

<script>
import { swalFn, errorSwalFn } from '@/methods/swal';
import bus from '@/methods/bus';
import Breadcrumb from '@/components/Breadcrumb.vue';
import CartProgress from '@/components/CartProgress.vue';

export default {
  props: ['orderId'],
  data() {
    return {
      loadingStatus: false,
      btnStatus: true,
      progressNum: 66,
      order: {
        id: '',
        data: {
          products: {},
          user: {},
          total: 0,
        },
      },
      breadcrumbData: {
        previous: [
          {
            title: '線上商城',
            url: '/products',
          },
          {
            title: '購物車',
            url: '/cart',
          },
        ],
        purpose: '訂單確認',
      },
    };
  },
  components: { CartProgress, Breadcrumb },
  methods: {
    getOrder(id) {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/order/${id}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order.data.products = JSON.parse(JSON.stringify(res.data.order.products));
            this.order.data.user = JSON.parse(JSON.stringify(res.data.order.user));
            this.order.data.total = res.data.order.total;
            this.updateCartLength();
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
    goPay() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/pay/${this.order.id}`;
      this.loadingStatus = true;

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.loadingStatus = false;
            this.$router.push('/orderPaid');
          } else {
            errorSwalFn('付款失敗', '請聯絡客服人員', true, 'top-end');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('付款失敗', '請聯絡客服人員', true, 'top-end');
          this.loadingStatus = false;
        });
    },
    updateCartLength() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;

      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            bus.emit('cart-number', res.data.data.carts.length);
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
    this.order.id = this.$route.params.id;
    this.getOrder(this.order.id);
    swalFn('已建立訂單', 'success', true, 'top-end');
  },
};
</script>

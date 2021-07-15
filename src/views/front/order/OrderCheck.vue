<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="container pageContent user_select_none">
    <section class="py-4">

      <!-- 麵包屑&搜尋 -->
      <Breadcrumb :breadcrumb-data="breadcrumbData"></Breadcrumb>

      <!-- 進度條 -->
      <Progress :progress-value="progressNum"></Progress>

      <!-- 訂單確認 & 付款 -->
      <h1 class="text-center fw-bold mb-4">訂單成立</h1>
      <section class="container">
        <section class="row px-md-1 px-lg-5 justify-content-center">
          <!-- 訂單明細 -->
          <main class="col-md-12 col-lg-9">
            <section class="px-3 px-md-5 py-5 mb-5 rounded shadow bg-white">
              <h3 class="h5 text-center fw-bold mt-3">
                訂單編號
              </h3>
              <p class="text-center text-danger
                textStyle_rwd_2 fw-bold mb-4 pb-3">
                {{ order.id }}
              </p>

              <!-- 訂購人資訊 -->
              <h3 class="h5 text-center fw-bold mt-3 mb-2">
                訂購人資訊
              </h3>
              <table class="table table-borderless cart_table_style
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

              <!-- 商品項目 -->
              <h3 class="h5 text-center fw-bold mt-3 mb-2">商品項目</h3>
              <table class="table table-borderless cart_table_style
                mb-5 text-center text-break"
              >
                <thead>
                  <tr>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
                    >
                      品名
                    </th>
                    <th
                      scope="row"
                      class="px-2 px-md-3 border"
                      width="30%"
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
                <tbody
                  v-for="item in order.data.products"
                  :key="item.id"
                >
                  <tr>
                    <td
                      scope="row"
                      class="border"
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
          </main>

          <!-- 我要付款 -->
          <div class="col-12 d-flex justify-content-center mb-2 mb-md-5">
            <router-link
              v-if="order.data.user.payment === '貨到付款'"
              to="/products"
              class="btn btn_main px-3 py-1"
            >
              繼續選購
            </router-link>

            <router-link
              v-else
              to="/orderPaid"
              class="btn btn_main px-3 py-1"
              @click="goPay"
            >
              我要付款
            </router-link>

          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import { swalFn } from '@/methods/swal';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Progress from '@/components/CartProgress.vue';

export default {
  name: 'OrderCheck',
  props: ['orderId'],
  data() {
    return {
      loadingStatus: false,
      btnStatus: true, // true 禁用; false 啟用
      progressNum: 66, // 進度條
      order: { // 單一訂單
        id: '',
        data: {
          products: {},
          user: {},
          total: Number,
        },
      },
      breadcrumbData: { // 麵包屑
        previous: [ // 上一個(多個)
          {
            title: '線上商城',
            url: '/products',
          },
          {
            title: '購物車',
            url: '/cart',
          },
        ],
        purpose: '訂單確認', // 目前頁面
      },
    };
  },
  components: { Progress, Breadcrumb },
  methods: {
    getOrder(id) { // 取得訂單
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/order/${id}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order.data.products = JSON.parse(JSON.stringify(res.data.order.products));
            this.order.data.user = JSON.parse(JSON.stringify(res.data.order.user));
            this.order.data.total = res.data.order.total;
            this.loadingStatus = false;
          } else {
            swalFn('資料取得失敗', 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          swalFn('資料取得失敗', 'error');
          this.loadingStatus = false;
        });
    },
    goPay() { // 前往付款.
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/pay/${this.order.id}`;
      this.loadingStatus = true;

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.loadingStatus = false;
            this.$router.push('/orderPaid');
          } else {
            swalFn('付款失敗', 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          swalFn('付款失敗', 'error');
          this.loadingStatus = false;
        });
    },
  },
  mounted() {
    this.order.id = this.$route.params.id;
    this.getOrder(this.order.id);
    swalFn('已建立訂單', 'success', 2000, `訂單編號：${this.order.id}`);
  },
};
</script>

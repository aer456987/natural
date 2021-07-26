<template>
  <div class="container pageContent user_select_none">
    <div class="py-4">

      <!-- 麵包屑&搜尋 -->
      <Breadcrumb :breadcrumb-data="breadcrumbData"></Breadcrumb>
      <!-- 進度條 -->
      <CartProgress :progress-value="progressNum"></CartProgress>

      <!-- 感謝信 -->
      <h2 class="h1 pb-5 text-center fw-bold">
        付款成功
      </h2>
      <main class="container">
        <div class="row px-md-1 px-lg-5 justify-content-center">
          <!-- 訂單明細 -->
          <div class="col-md-12 col-lg-9">
            <section class="px-3 px-md-5 py-5 mb-5 rounded
              shadow text-center bg-white textStyle_rwd_2">
              <h3 class="h5 fw-bold mt-2 mb-4">感謝您的訂購！</h3>
              <p>您訂購的商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。</p>
              <p>
                如果您選擇的是捐款專案，我們將發送捐款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。
              </p>
              <p>
                如需紙本收據或發票，可至<span class="text-danger">會員中心</span>修改發票設定。
              </p>
              <router-link
                to="/products"
                class="btn btn-outline-custom-primary px-3 py-1 my-2"
              >
                返回線上商城
              </router-link>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { swalFn } from '@/methods/swal';
import Breadcrumb from '@/components/Breadcrumb.vue';
import CartProgress from '@/components/CartProgress.vue';

export default {
  name: 'OrderPaid',
  data() {
    return {
      progressNum: 100, // 進度條
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
        purpose: '付款完成', // 目前頁面
      },
    };
  },
  components: { CartProgress, Breadcrumb },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  created() {
    this.backTop();
    swalFn('已完成付款', 'success');
  },
};
</script>

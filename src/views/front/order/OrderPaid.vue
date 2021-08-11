<template>
  <div class="container page-content user-select-none">
    <div class="py-4">

      <Breadcrumb :breadcrumb-data="breadcrumbData" />
      <CartProgress :progress-value="progressNum" />

      <h2 class="h1 pb-5 text-center fw-bold">
        付款成功
      </h2>
      <main class="container">
        <div class="row px-md-1 px-lg-5 justify-content-center">
          <div class="col-md-12 col-lg-9">
            <section class="px-3 px-md-5 py-5 mb-5 rounded
              shadow text-center bg-white custom-style-text-2">

              <i class="bi bi-emoji-smile display-3 text-warning"></i>

              <h3 class="h4 fw-bold mt-2 mb-5">感謝您的訂購！</h3>

              <ul class="px-xl-5 text-start">
                <li>
                  <p class="d-inline bg-gray-200 p-1 rounded-1">
                    訂單如含有「有機食品」、「環保商品」：
                  </p>
                </li>
                <li class="mt-2 mb-4">
                  <p class="m-0">
                    商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。
                  </p>
                  <p class="m-0">
                    本平台之商品預設為電子發票，如需紙本發票可至
                    <a
                      href="#"
                      class="text-danger"
                      @click.prevent="backTop()"
                    >
                      會員中心
                    </a>
                    修改發票設定。
                    </p>
                </li>
                <li>
                  <p class="d-inline bg-gray-200 p-1 rounded-1">
                    訂單如含有「公益活動」、「講座」：
                  </p>
                  <p class="mt-2 mb-4">
                    我們將發送付款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。
                  </p>
                </li>
                <li>
                  <p class="d-inline bg-gray-200 p-1 rounded-1">
                    訂單如含有「捐款專案」：
                  </p>
                  <p class="mt-2 mb-4">
                    我們將發送付款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。
                  </p>
                </li>
              </ul>
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
  data() {
    return {
      progressNum: 100,
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
        purpose: '付款完成',
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
    swalFn('已完成付款', 'success', true, 'top-end');
  },
};
</script>

<template>
  <section class="container pageContent">
    <main class="py-4">
      <!-- 麵包屑&搜尋 -->
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link to="/products" class="link-secondary"
              >線上商城</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link to="/square/cart" class="link-secondary">購物車</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            訂單確認
          </li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <Progress :progress="progress"></Progress>
      <!-- 感謝信 -->
      <h1 class="pb-5 text-center fw-bold">付款成功</h1>
      <section class="container">
        <div class="row px-md-1 px-lg-5 justify-content-center">
          <!-- 訂單明細 -->
          <section class="col-md-12 col-lg-9">
            <div class="px-5 py-5 mb-5 rounded
              shadow text-center bg-white">
              <h5 class="fw-bold mt-2 mb-4">感謝您的訂購！</h5>
              <p>
                您訂購的商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。
              </p>
              <p>
                如果您選擇的是捐款專案，我們將發送捐款成功的電子收據至您設定的信箱中，歡迎您隨時前往信箱查看。
              </p>
              <p>
                如需紙本收據或發票，可至<span class="text-danger">會員中心</span>修改發票設定。 <br>
              </p>
              <router-link
                to="/products"
                class="btn btn-outline-secondary px-3 py-1 my-2">
                  返回線上商城
              </router-link>
            </div>
          </section>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import Progress from '@/components/Progress.vue';
import swal from 'sweetalert';

export default {
  name: 'OrderPaid',
  data() {
    return {
      progress: 100,
    };
  },
  components: { Progress },
  methods: {
    swalFn(title, icon, timer = 1500, text, button = false) { // 一般提示視窗
      // success (成功) ； error (叉叉) ； warning(警告) ； info (說明)
      const txt = {
        title,
        text,
        icon,
        button,
        timer,
        closeOnClickOutside: false,
      };
      swal(txt);
    },
  },
  created() {
    this.swalFn('已完成付款', 'success');
  },
};
</script>

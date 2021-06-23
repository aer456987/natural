<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="container pageContent">
    <section class="py-4">
      <!-- 麵包屑&搜尋 -->
      <nav
        style="--bs-breadcrumb-divider: '>'"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link
              to="/products"
              class="link-secondary"
            >線上商城</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link
              to="/square/cart"
              class="link-secondary"
            >購物車</router-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >訂單確認</li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <Progress :progress-value="progressNum"></Progress>
      <!-- 訂單確認 & 付款 -->
      <h1 class="text-center fw-bold mb-4">訂購人資訊</h1>
      <section class="container">
        <section class="row px-md-1 px-lg-5 justify-content-center">
          <!-- 訂單明細 -->
          <main class="col-md-12 col-lg-9">
            <section class="px-5 py-5 mb-5 rounded shadow bg-white">
              <h3 class="h5 text-center fw-bold mt-3">訂單編號</h3>
              <p class="text-center text-danger fw-bold mb-4 pb-3">
                {{ order.id }}
              </p>

              <!-- 訂購人資訊 -->
              <table class="table table-borderless mb-5">
                <thead>
                  <tr>
                    <td
                      colspan="2"
                      scope="row"
                      class="text-center border-end border"
                    >訂購人資訊</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      scope="row"
                      class="text-end border-end pe-sm-0 pe-md-4"
                      width="50%"
                    >姓名</td>
                    <td
                      class="ps-sm-0 ps-md-4"
                      width="50%"
                    >{{ order.data.user.name }}</td>
                  </tr>

                  <tr>
                    <td
                      scope="row"
                      class="text-end border-end pe-sm-0 pe-md-4"
                      width="50%"
                    >聯絡電話</td>
                    <td
                      class="ps-sm-0 ps-md-4"
                      width="50%"
                    >{{ order.data.user.tel }}</td>
                  </tr>

                  <tr>
                    <td
                      scope="row"
                      class="text-end border-end pe-sm-0 pe-md-4"
                      width="50%"
                    >Email</td>
                    <td
                      class="ps-sm-0 ps-md-4"
                      width="50%"
                    >{{ order.data.user.email }}</td>
                  </tr>

                  <tr>
                    <td
                      scope="row"
                      class="text-end border-end pe-sm-0 pe-md-4"
                      width="50%"
                    >寄送地址</td>
                    <td
                      class="ps-sm-0 ps-md-4"
                      width="50%"
                    >{{ order.data.user.address }}</td>
                  </tr>
                </tbody>
              </table>

              <!-- 商品項目 -->
              <table class="table table-borderless mb-5">
                <thead>
                  <tr>
                    <td
                      colspan="3"
                      scope="row"
                      class="text-center border-end border"
                    >商品項目</td>
                  </tr>
                </thead>
                <tbody
                  v-for="item in order.data.products"
                  :key="item.id"
                >
                  <tr>
                    <td
                      scope="row"
                      colspan="2"
                      width="50%"
                      class="text-end border-end pe-sm-0 pe-md-4"
                    >{{ item.product.title }} × {{ item.qty }}</td>
                    <td
                      class="ps-sm-0 ps-md-4"
                      width="50%"
                    >NT ${{ item.total }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="h5 text-center mb-3">總金額NT ${{ order.data.total }}</p>
            </section>
          </main>

          <!-- 我要付款 -->
          <div class="col-12 d-flex justify-content-center mb-5">
            <router-link
              to="/square/orderPaid"
              class="btn btn_main px-3 py-1"
              @click="goPay"
            >我要付款</router-link>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import Progress from '@/components/CartProgress.vue';
import swal from 'sweetalert';

export default {
  name: 'OrderCheck',
  props: ['orderId'],
  data() {
    return {
      loadingStatus: false,
      btnStatus: true, // true 禁用; false 啟用
      progressNum: 66,
      order: { // 單一訂單
        id: '',
        data: {
          products: {},
          user: {},
          total: Number,
        },
      },
    };
  },
  components: { Progress },
  methods: {
    getOrder(id) { // 取得訂單
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/order/${id}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)取得單筆訂單 res:', res);
            this.order.data.products = JSON.parse(JSON.stringify(res.data.order.products));
            this.order.data.user = JSON.parse(JSON.stringify(res.data.order.user));
            this.order.data.total = res.data.order.total;
            console.log('products', this.order.data.products);
            console.log('user', this.order.data.user);
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)取得單筆訂單 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得單筆訂單 err:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    goPay() { // 前往付款.
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/pay/${this.order.id}`;
      this.loadingStatus = true;

      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)訂單付款 res:', res);
            this.loadingStatus = false;
            this.$router.push('/square/orderPaid');
          } else {
            console.log('(錯誤-前台)訂單付款 res:', res.data);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)訂單付款 err');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
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
  mounted() {
    this.order.id = this.$route.params.id;
    this.getOrder(this.order.id);
    this.swalFn('已建立訂單', 'success', 2000, `訂單編號：${this.order.id}`);
  },
};
</script>

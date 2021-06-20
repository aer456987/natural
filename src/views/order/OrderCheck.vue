<template>
  <Loading :status="loadingStatus"></Loading>
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
          <li class="breadcrumb-item fw-bold active" aria-current="page">
            訂單確認
          </li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <Progress :progress="progress"></Progress>
      <!-- 訂單確認 & 付款 -->
      <h1 class="text-center fw-bold mb-4">訂購人資訊</h1>
      <div class="container">
        <div class="row px-md-1 px-lg-5 justify-content-center">
          <!-- 訂單明細 -->
          <div class="col-md-12 col-lg-9">
            <div class="px-5 py-5 mb-5 rounded shadow bg-white">
              <h5 class="text-center fw-bold">訂單編號</h5>
              <p class="text-center mb-4 pb-3">
                {{ order.id }}
              </p>

              <!-- 訂購人資訊 -->
              <table class="table table-borderless mb-5">
                <tbody>
                  <tr>
                    <th colspan="2" scope="row" class="text-center border-end border">
                      訂購人資訊
                    </th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row" class="text-end border-end pe-sm-0 pe-md-4" width="50%">
                      姓名
                    </th>
                    <td class="ps-sm-0 ps-md-4" width="50%">
                      {{ order.data.user.name }}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" class="text-end border-end pe-sm-0 pe-md-4" width="50%">
                      聯絡電話
                    </th>
                    <td class="ps-sm-0 ps-md-4" width="50%">
                      {{ order.data.user.tel }}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" class="text-end border-end pe-sm-0 pe-md-4" width="50%">
                      Email
                    </th>
                    <td class="ps-sm-0 ps-md-4" width="50%">
                      {{ order.data.user.email }}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" class="text-end border-end pe-sm-0 pe-md-4" width="50%">
                      寄送地址
                    </th>
                    <td class="ps-sm-0 ps-md-4" width="50%">
                      {{ order.data.user.address }}
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- 商品項目 -->
              <table class="table table-borderless mb-5">
                <tbody>
                  <tr>
                    <th colspan="3"
                      scope="row"
                      class="text-center border-end border">
                      商品項目
                    </th>
                  </tr>
                </tbody>
                <tbody v-for="item in order.data.products" :key="item.id">
                <tr>
                  <th scope="row"
                  colspan="2"
                  class="text-end border-end pe-sm-0 pe-md-4"
                  width="50%">
                    {{ item.product.title }}
                    × {{ item.qty }}
                  </th>
                  <td class="ps-sm-0 ps-md-4" width="50%">
                    NT ${{ item.total }}
                  </td>
                </tr>
                </tbody>
              </table>
              <h5 class="text-center text-danger fw-bold">
                總金額NT ${{ order.data.total }}
              </h5>
            </div>
          </div>

          <!-- 我要付款 -->
          <div class="col-12 d-flex justify-content-center mb-5">
            <router-link
              to="/square/orderPaid"
              class="btn btn_main px-3 py-1"
              @click="goPay">
              我要付款
            </router-link>
            <!--  @click.preven="goPay" -->
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Progress from '@/components/Progress.vue';

export default {
  name: 'OrderCheck',
  props: ['orderId'],
  data() {
    return {
      loadingStatus: false,
      btnStatus: true, // true 禁用; false 啟用
      progress: 66,
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
      // console.log('訂單確定: ', id);
      // console.log(url);
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
            // console.log(this.order.data);
            // this.orderStatus = true;
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)取得單筆訂單 res:', res);
            // this.orderStatus = false;
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得單筆訂單 res:', err);
          // console.dir('取得單筆訂單(失敗)', err);
          // this.orderStatus = false;
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
            // this.swalFn(res.data.message, 'success');
            this.loadingStatus = false;
            this.$router.push('/square/orderPaid');
          } else {
            console.log('(錯誤-前台)訂單付款 res:', res.data);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)訂單付款');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
  },
  mounted() {
    this.order.id = this.$route.params.id;
    // console.log(this.order.id);
    this.getOrder(this.order.id);
  },
};
</script>

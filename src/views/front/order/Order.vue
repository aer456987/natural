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
              to="/cart"
              class="link-secondary"
            >購物車</router-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >填寫訂單資料</li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <Progress :progress-value="progressNum"></Progress>
      <!-- 購物車 -->
      <h1 class="text-center fw-bold mb-4">訂購人資訊</h1>
      <section class="container">
        <!-- 訂單填寫 -->
        <section
          class="row px-lg-0 px-xl-5
            position-relative justify-content-center align-items-center"
          >
          <!-- 購物明細 -->
          <div class="col-xl-5 col-lg-6">
            <div
              class="table_style w-100 p-5 mb-5 rounded bg-white shadow-sm">
              <h5 class="text-center mb-4">購物明細</h5>
              <table class="table text-center mb-5">
                <thead>
                  <tr>
                    <td scope="col">商品資訊</td>
                    <td scope="col">數量</td>
                    <td scope="col">金額</td>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in carts.carts"
                    :key="item.id"
                  >
                    <td scope="row">
                      {{ item.product.title }}
                    </td>
                    <td>
                      {{ item.qty }}
                    </td>
                    <td>
                      NT ${{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p class="h5 text-center">
                總金額NT ${{ $filters.currency(carts.final_total) }}
              </p>
            </div>
          </div>
          <!-- 訂購人資訊 -->
          <main class="col-lg-6 mb-5">
            <Form
              v-slot="{ errors }"
              class="px-3"
              @change="checkUserDatas"
            >
              <!-- 訂購人姓名 -->
              <label
                for="orderName"
                class="form-label mt-3 mb-1"
              >
                訂購人姓名<span class="text-danger fw-bold">*</span>
              </label>
              <Field
                type="text"
                name="姓名"
                id="orderName"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                rules="required"
                v-model="userDatas.user.name"
              ></Field>
              <error-message
                name="姓名"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- 聯絡電話 -->
              <label
                for="orderTel"
                class="form-label mt-3 mb-1"
              >
                聯絡電話<span class="text-danger fw-bold">*</span>
              </label>
              <Field
                type="tel"
                name="電話"
                id="orderTel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                rules="required|numeric|min:8"
                v-model="userDatas.user.tel"
              ></Field>
              <error-message
                name="電話"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- Email -->
              <label
                for="orderEmail"
                class="form-label mt-3 mb-1"
              >
                Email<span class="text-danger fw-bold">*</span>
              </label>
              <Field
                type="email"
                name="Email"
                id="orderEmail"
                class="form-control"
                :class="{ 'is-invalid': errors['Email'] }"
                rules="required|email"
                v-model="userDatas.user.email"
              ></Field>
              <error-message
                name="Email"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- 寄送方式 -->
              <label
                for="orderDelivery"
                class="form-label mt-3 mb-1"
              >
                寄送方式<span class="text-danger fw-bold">*</span>
              </label>
              <Field
                as="select"
                name="寄送方式"
                id="orderDelivery"
                class="form-select"
                :class="{ 'is-invalid': errors['寄送方式'] }"
                rules="required"
                v-model="userDatas.user.delivery"
              >
                <option value="" selected disabled>選擇寄送方式</option>
                <option value="宅配">宅配</option>
                <option value="全家超取">全家</option>
                <option value="7-11 超取">7-11</option>
                <option value="萊爾富超取">萊爾富</option>
                <option value="OK 超取">OK 超取</option>
              </Field>
              <error-message
                name="寄送方式"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- 收件地址 -->
              <label
                for="orderAddress"
                class="form-label mt-3 mb-1"
              >
                收件地址(超取請填寫門市名稱)<span class="text-danger fw-bold">*</span>
              </label>
              <Field
                type="text"
                name="地址"
                id="orderAddress"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                rules="required"
                v-model="userDatas.user.address"
              ></Field>
              <error-message
                name="地址"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- 付款方式 -->
              <label
                for="orderPayment"
                class="form-label mt-3 mb-1"
              >
                付款方式<span class="text-danger fw-bold">*</span>
              </label>
              <Field
                as="select"
                name="付款方式"
                id="orderPayment"
                class="form-select"
                :class="{ 'is-invalid': errors['付款方式'] }"
                rules="required"
                v-model="userDatas.user.payment"
              >
                <option value="" selected disabled>選擇付款方式</option>
                <option value="信用卡">信用卡</option>
                <option
                  v-if="isFundraising"
                  value="貨到付款"
                >
                  貨到付款
                </option>
                <option value="ATM 匯款">ATM 匯款</option>
              </Field>
              <error-message
                name="付款方式"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- 備註 -->
              <label
                for="orderMsg"
                class="form-label mt-3 mb-1"
              >
                備註
              </label>
              <Field
                as="textarea"
                name="備註"
                id="orderMsg"
                class="form-control"
                :class="{ 'is-invalid': errors['備註'] }"
                v-model="userDatas.message"
              ></Field>

              <p class="text-danger text-end fw-bold pt-1">* 為必填項目</p>
            </Form>
          </main>
          <!-- 返回購物車/送出訂單 -->
          <div class="col-12 d-flex justify-content-between mb-5">
            <router-link
              to="/cart"
              class="btn btn_outline_green px-3 py-1"
            > ◁ 返回購物車 </router-link>

            <button
              class="btn btn_main px-3 py-1"
              :disabled="btnStatus"
              @click="postOrder"
            > 送出訂單 ▷ </button>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import Progress from '@/components/CartProgress.vue';
import { swalFn } from '@/methods/swal';

export default {
  name: 'Order',
  data() {
    return {
      loadingStatus: false,
      btnStatus: true, // true 禁用; false 啟用
      progressNum: 33,
      carts: {},
      userDatas: { // 未送訂單: 訂單資料
        user: {},
      },
      isFundraising: true,
    };
  },
  components: { Progress },
  methods: {
    getCarts() { // 取得購物車資料
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.loadingStatus = true;

      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data;

            if (this.carts.carts.length < 1) {
              this.$router.push('/cart');
            }
            this.filterFundraising();
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)取得購物車全部資料 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得購物車全部資料 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    filterFundraising() {
      this.carts.carts.forEach((item) => {
        if (item.product.category === '募款專案') {
          this.isFundraising = false;
        }
      });
    },
    checkUserDatas() { // 驗證是否為空訂單
      const {
        name, email, tel, address,
      } = this.userDatas.user;
      if (name === '' || email === '' || tel === '' || address === '') {
        this.btnStatus = true;
      } else {
        this.btnStatus = false;
      }
    },
    postOrder() { // 送出訂單
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/order`;
      this.loadingStatus = true;

      this.$http.post(url, {
        data: this.userDatas,
      })
        .then((res) => {
          if (res.data.success) {
            this.$router.push(`/order/${res.data.orderId}`);
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)送出訂單 err');
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

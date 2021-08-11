<template>
  <Loading :status="loadingStatus" />
  <div class="container page-content user-select-none">
    <div class="py-4">
      <Breadcrumb :breadcrumb-data="breadcrumbData" />
      <CartProgress :progress-value="progressNum" />

      <h2 class="h1 text-center fw-bold mb-4">
        訂購人資訊
      </h2>
      <main class="container">
        <Form
          v-slot="{ errors }"
          @submit="postOrder"
        >
          <section
            class="row px-lg-0 px-xl-5
              position-relative justify-content-center align-items-center"
            >
            <div class="col-lg-6">
              <div
                class="width-xl w-100 p-3 p-sm-5 mx-auto mb-sm-5 rounded bg-white shadow-sm">
                <h3 class="text-center mb-4 fs-5">
                  購物明細
                </h3>
                <table class="table custom-cart-table text-center mb-5">
                  <thead>
                    <tr>
                      <td scope="col" width="40%">商品資訊</td>
                      <td scope="col" width="20%">數量</td>
                      <td scope="col" width="40%">金額</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in carts.carts"
                      :key="item.id"
                    >
                      <td scope="row" class="text-start">
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

                <p class="fs-5 mb-2 text-center">
                  總金額NT ${{ $filters.currency(carts.final_total) }}
                </p>
              </div>
            </div>
            <div class="col-lg-6 mb-5 px-3">
                <label
                  for="orderName"
                  class="form-label mt-3 mb-1"
                >
                  訂購人姓名<span class="text-danger fw-bold">*</span>
                </label>
                <Field
                  type="text"
                  name="姓名"
                  placeholder="請輸入收件人名稱"
                  id="orderName"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  rules="required"
                  v-model="userDatas.user.name"
                  @change="checkUserDatas" />
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback mb-1" />

                <label
                  for="orderTel"
                  class="form-label mt-3 mb-1"
                >
                  聯絡電話<span class="text-danger fw-bold">*</span>
                </label>
                <Field
                  type="tel"
                  name="電話"
                  placeholder="請輸入手機號碼"
                  id="orderTel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  rules="required|numeric|min:10"
                  v-model="userDatas.user.tel"
                  @change="checkUserDatas" />
                <ErrorMessage
                  name="電話"
                  class="invalid-feedback mb-1" />

                <label
                  for="orderEmail"
                  class="form-label mt-3 mb-1"
                >
                  Email<span class="text-danger fw-bold">*</span>
                </label>
                <Field
                  type="email"
                  name="Email"
                  placeholder="請輸入Email"
                  id="orderEmail"
                  class="form-control"
                  :class="{ 'is-invalid': errors['Email'] }"
                  rules="required|email"
                  v-model="userDatas.user.email"
                  @change="checkUserDatas" />
                <ErrorMessage
                  name="Email"
                  class="invalid-feedback mb-1" />

                <template v-if="isDeliveryMethodShow">
                  <label
                    for="orderDelivery"
                    class="form-label mt-3 mb-1"
                  >
                    寄送方式<span class="text-danger fw-bold">*</span>
                  </label>
                  <Field
                    as="select"
                    name="寄送方式"
                    placeholder="請輸入寄送方式"
                    id="orderDelivery"
                    class="form-select"
                    :class="{ 'is-invalid': errors['寄送方式'] }"
                    rules="required"
                    v-model="userDatas.user.delivery"
                    @change="checkUserDatas"
                  >
                    <option value="" selected disabled>選擇寄送方式</option>
                    <option value="宅配">宅配</option>
                    <option value="全家超取">全家</option>
                    <option value="7-11 超取">7-11</option>
                    <option value="萊爾富超取">萊爾富</option>
                    <option value="OK 超取">OK 超取</option>
                  </Field>
                  <ErrorMessage
                    name="寄送方式"
                    class="invalid-feedback mb-1" />
                </template>

                <template v-if="isSendShow">
                  <label
                    for="orderAddress"
                    class="form-label mt-3 mb-1"
                  >
                    收件地址(超取請填寫門市名稱)<span class="text-danger fw-bold">*</span>
                  </label>
                  <Field
                    type="text"
                    name="地址"
                    :placeholder="addressMsg"
                    id="orderAddress"
                    class="form-control"
                    :class="{ 'is-invalid': errors['地址'] }"
                    rules="required"
                    v-model="userDatas.user.address"
                    :readonly="!isSendShow"
                    @change="checkUserDatas" />
                  <ErrorMessage
                    name="地址"
                    class="invalid-feedback mb-1" />
                </template>

                <label
                  for="orderPayment"
                  class="form-label mt-3 mb-1"
                >
                  付款方式<span class="text-danger fw-bold">*</span>
                </label>
                <Field
                  as="select"
                  name="付款方式"
                  placeholder="選擇付款方式"
                  id="orderPayment"
                  class="form-select"
                  :class="{ 'is-invalid': errors['付款方式'] }"
                  rules="required"
                  v-model="userDatas.user.payment"
                  @change="checkUserDatas"
                >
                  <option value="" selected disabled>
                    選擇付款方式
                  </option>
                  <option value="信用卡">
                    信用卡
                  </option>
                  <option
                    v-if="isFundraisingShow"
                    value="貨到付款"
                  >
                    貨到付款
                  </option>
                  <option value="ATM 匯款">ATM 匯款</option>
                </Field>
                <ErrorMessage
                  name="付款方式"
                  class="invalid-feedback mb-1" />

                <label
                  for="orderMsg"
                  class="form-label mt-3 mb-1"
                >
                  備註
                </label>
                <Field
                  as="textarea"
                  name="備註"
                  placeholder="如需指定捐款單位或商品種類，請務必填寫清楚( 例如: 我要指定捐款給 XX 機構；XX 商品請寄紅色 )"
                  rows="5"
                  id="orderMsg"
                  class="form-control"
                  :class="{ 'is-invalid': errors['備註'] }"
                  v-model="userDatas.message" />

                <p class="text-danger text-end fw-bold pt-1">* 為必填項目</p>

            </div>
            <div class="col-12 d-flex justify-content-between mb-2 mb-md-5">
              <router-link
                to="/cart"
                class="btn btn-outline-custom-primary custom-style-text-3
                  px-1 px-sm-2 px-md-3 py-1"
              >
                ◁ 返回購物車
              </router-link>

              <button
                type="submit"
                class="btn custom-btn-main custom-style-text-3
                  px-1 px-sm-2 px-md-3 py-1"
                :disabled="btnStatus"
              >
              送出訂單 ▷
              </button>
            </div>
          </section>
        </Form>
      </main>
    </div>
  </div>
</template>

<script>
import { swalFn, errorSwalFn } from '@/methods/swal';
import Breadcrumb from '@/components/Breadcrumb.vue';
import CartProgress from '@/components/CartProgress.vue';

export default {
  data() {
    return {
      loadingStatus: false,
      btnStatus: true,
      progressNum: 33,
      carts: {},
      userDatas: {
        user: {},
      },
      isFundraisingShow: true,
      isDeliveryMethodShow: true,
      isSendShow: true,
      addressMsg: '',
      isAll: true,
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
        purpose: '填寫訂單資料',
      },
      tempData: [],
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

            if (this.carts.carts.length < 1) {
              this.$router.push('/cart');
            }
            this.filterFundraising();
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
    filterFundraising() {
      const notNeedSendProduct = this.carts.carts.filter(
        (item) => item.product.category === '講座' || item.product.category === '公益活動',
      );
      const onlyDonations = this.carts.carts.filter(
        (item) => item.product.category === '募款專案',
      );

      this.tempData = [...onlyDonations, ...notNeedSendProduct];

      this.carts.carts.forEach((item) => {
        if (notNeedSendProduct.includes(item)) {
          this.isFundraisingShow = false;
          this.isSendShow = true;
          this.isDeliveryMethodShow = true;
        }
      });

      if (notNeedSendProduct.length === this.carts.carts.length) {
        this.isFundraisingShow = false;
        this.isSendShow = false;
        this.isDeliveryMethodShow = false;
        this.userDatas.user.delivery = '單純參加講座或公益活動無需填寫';
        this.userDatas.user.address = '單純參加講座或公益活動無需填寫';
      } else if (this.tempData.length === this.carts.carts.length) {
        this.isFundraisingShow = false;
        this.isSendShow = true;
        this.isDeliveryMethodShow = false;
        this.addressMsg = '訂單中含有募款專案，請填寫捐款收據寄送地址(一律掛號寄出)';
      } else {
        this.isFundraisingShow = true;
        this.isSendShow = true;
        this.isDeliveryMethodShow = true;
        this.addressMsg = '宅配請輸入收件地址，超取請填寫門市名稱';
      }
    },
    checkUserDatas() {
      const {
        name, email, tel, address,
      } = this.userDatas.user;
      if (
        name === ''
        || email === ''
        || tel === ''
        || address === ''
      ) {
        this.btnStatus = true;
      } else {
        this.btnStatus = false;
      }
    },
    postOrder() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/order`;
      this.loadingStatus = true;

      this.$http.post(url, {
        data: this.userDatas,
      })
        .then((res) => {
          if (res.data.success) {
            this.$router.push(`/order/${res.data.orderId}`);
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
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    this.backTop();
    this.getCarts();
    this.addressMsg = '宅配請輸入收件地址，超取請填寫門市名稱';
  },
};
</script>

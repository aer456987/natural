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
            填寫訂單資料
          </li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <Progress :progress="progress"></Progress>
      <!-- 購物車 -->
      <h1 class="text-center fw-bold mb-4">訂購人資訊</h1>
      <div class="container">
        <!-- 訂單填寫 -->
        <template class="row px-lg-0 px-xl-5
        position-relative
        justify-content-center align-items-center">
          <!-- 購物明細 -->
          <div class="col-xl-5 col-lg-6">
            <div
              class="
                table_style
                w-100
                p-5
                mb-5
                rounded
                bg-white
                shadow-sm
              "
            >
              <h5 class="text-center fw-bold mb-4">購物明細</h5>
              <table class="table text-center mb-5">
                <thead>
                  <tr>
                    <th scope="col">商品資訊</th>
                    <th scope="col">數量</th>
                    <th scope="col">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in carts.carts" :key="item.id">
                    <th scope="row">
                      {{ item.product.title }}
                    </th>
                    <td>
                      {{ item.qty }}
                    </td>
                    <td><span>NT $</span>{{ item.final_total }}</td>
                  </tr>
                </tbody>
              </table>

              <h5 class="text-center fw-bold">
                總金額NT ${{ carts.total }}
              </h5>
            </div>
          </div>
          <!-- 訂購人資訊 -->
          <div class="col-lg-6 mb-5">
            <Form v-slot="{ errors }" class="px-3" @change="checkUserDatas">
              <!-- 訂購人姓名 -->
              <label for="orderName" class="form-label mt-4 mb-1 fw-bold"
                >訂購人姓名<span class="text-danger fw-bold">*</span></label
              >
              <Field
                type="text"
                id="orderName"
                name="姓名"
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
              <label for="orderTel" class="form-label mt-4 mb-1 fw-bold"
                >聯絡電話<span class="text-danger fw-bold">*</span></label
              >
              <Field
                type="tel"
                id="orderTel"
                name="電話"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                rules="required|numeric|min:8"
                v-model="userDatas.user.tel"
              >
              </Field>
              <error-message
                name="電話"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- Email -->
              <label for="orderEmail" class="form-label mt-4 mb-1 fw-bold"
                >Email<span class="text-danger fw-bold">*</span></label
              >
              <Field
                type="email"
                id="orderEmail"
                name="Email"
                class="form-control"
                :class="{ 'is-invalid': errors['Email'] }"
                rules="required|email"
                v-model="userDatas.user.email"
              >
              </Field>
              <error-message
                name="Email"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- 寄送地址 -->
              <label for="orderAddress" class="form-label mt-4 mb-1 fw-bold"
                >寄送地址<span class="text-danger fw-bold">*</span></label
              >
              <Field
                type="text"
                id="orderAddress"
                name="地址"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                rules="required"
                v-model="userDatas.user.address"
              ></Field>
              <error-message
                name="地址"
                class="invalid-feedback mb-1"
              ></error-message>

              <!-- 備註 -->
              <label for="orderMsg" class="form-label mt-4 mb-1 fw-bold"
                >備註</label
              >
              <Field
                as="textarea"
                id="orderMsg"
                name="備註"
                class="form-control"
                :class="{ 'is-invalid': errors['備註'] }"
                v-model="userDatas.message"
              ></Field>
              <error-message
                name="備註"
                class="invalid-feedback mb-1"
              ></error-message>
              <p class="text-danger text-end fw-bold pt-1">* 為必填項目</p>
            </Form>
          </div>
          <!-- 返回購物車/送出訂單 -->
          <div class="col-12 d-flex justify-content-between mb-5">
            <router-link to="/square/cart"
              class="btn btn-outline-secondary px-3 py-1">
              ◁ 返回購物車
            </router-link>

            <button
              class="btn btn_main px-3 py-1"
              :disabled="btnStatus"
              @click="postOrder">
              送出訂單 ▷
            </button>
          </div>
        </template>
      </div>
    </main>
  </section>
</template>

<script>
import Progress from '@/components/Progress.vue';

export default {
  name: 'Order',
  data() {
    return {
      loadingStatus: false,
      btnStatus: true, // true 禁用; false 啟用
      progress: 33,
      carts: {},
      userDatas: { // 未送訂單: 訂單資料
        user: {},
        message: '',
      },
      order: { // 單一訂單
        // id: '-McPYuLuO-sBflWGCvud',
        id: '',
        data: {},
        // data: {
        //   create_at: 1623061671,
        //   id: '-Mba-uy5O_vRLLuhmQyt',
        //   is_paid: false,
        //   products: {
        //     '-Mba-uzREllvnxfu0lgb': {
        //       final_total: 400,
        //       id: '-Mba-uzREllvnxfu0lgb',
        //       product: {
        //         category: '飼料',
        //         content: '超取最多1包，1包以上需宅配',
        //         description: '外國進口高級飼料，一包5kg，有效期限到115/5/10',
        //         id: '-Ma8iV32OESK_mS6zyC-',
        //         imageUrl: 'https://cf.shopee.tw/file/d19cad20485e8e8c4e3eb7bf4024753a',
        //         imagesUrl: [],
        //         is_enabled: true,
        //         num: 3,
        //         origin_price: 599,
        //         price: 400,
        //         title: '外國進口飼料',
        //         unit: '包',
        //       },
        //       product_id: '-Ma8iV32OESK_mS6zyC-',
        //       qty: 1,
        //       total: 400,
        //     },
        //   },
        //   total: 400,
        //   user: {
        //     name: '名字',
        //     tel: '0912312345',
        //     email: 'asdas@asd.ewe',
        //     address: '住址',
        //   },
        // },
      },
    };
  },
  components: { Progress },
  methods: {
    // 取得購物車資料
    getCarts() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.loadingStatus = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)取得購物車全部資料 res:', res);
            this.carts = res.data.data;
            this.loadingStatus = false;
            console.log('(成功-前台)取得購物車全部資料 vue:', this.carts);
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
    }, // 驗證是否為空訂單
    checkUserDatas() {
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
            console.log('(成功-前台)送出訂單 res:', res);
            this.$router.push(`/square/order/${res.data.orderId}`);
          } else {
            console.log('(錯誤-前台)送出訂單 res', res.data);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)送出訂單 res');
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

<template>
  <Loading :status="loadingStatus"></Loading>
  <section class="container pageContent">
    <main class="py-4">
      <!-- 麵包屑&搜尋 -->
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link to="/products" class="link-secondary"
            >線上商城</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            購物車
          </li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <Progress :progress-value="progressNum"></Progress>
      <!-- 購物車 -->
      <h1 class="text-center fw-bold mb-4">購物車</h1>
      <div class="container">
        <div
          class="row px-lg-0 px-xl-5 position-relative">

          <div
            class="
              col-12
              mb-5
              p-5
              table_style
              text-center
              bg-white
              rounded-3
              shadow">

            <div v-if="btnStatus"
              class="row justify-content-center py-4">
              <span class="col-12 col-md-5">
                <h3 class="mb-3">購物車內沒有商品</h3>
                <router-link to="/products" class="btn btn_main w-100">
                  前往選購
                </router-link>
              </span>
            </div>

            <template v-else>
              <table class="table position-relative">
                <thead>
                  <tr>
                    <td width="30%" class="py-3 fs-5" scope="col" colspan="2">商品資訊</td>
                    <td width="23%" class="py-3 fs-5" scope="col">數量</td>
                    <td width="22%" class="py-3 fs-5" scope="col">金額</td>
                    <td width="10%" class="py-3 fs-5" scope="col"></td>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in carts.carts" :key="item.id">
                    <td
                      style="width: 70px; height: 70px; overflow: hidden"
                    >
                      <img
                        :src="item.product.imageUrl"
                        alt="預覽"
                        class="w-100"
                      />
                    </td>
                    <td scope="row">
                      {{ item.product.title }}
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div class="input-group"
                        style="max-width: 180px">
                          <span
                            class="btn_light_green px-2"
                            @click="putCart('reduce', item)"
                          >
                            -
                          </span>
                          <div
                            class="
                              form-control
                              bg_transparent
                              text-center
                              border">
                            {{ item.qty }}
                          </div>
                          <div
                            class="btn_light_green px-2"
                            @click="putCart('add', item)"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span>NT $</span>{{ item.final_total }}</td>
                    <td>
                      <i class="bi bi-x-lg btn_red"
                        @click="delCart('one', item)"></i>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p class="h5 text-end text-danger">
                總金額NT ${{ carts.total }}
              </p>
            </template>
          </div>

          <!-- 繼續購物/清空購物車 -->
          <div
            v-if="!btnStatus"
            class="col-12 d-flex justify-content-between mb-5">
            <router-link
              to="/products"
              class="btn btn_outline_green px-3 py-1"
            >
              ◁ 繼續購物
            </router-link>

            <button
              type="button"
              class="btn btn-outline-danger px-3 py-1"
              @click="delCart('all')"
            >
              清空購物車
            </button>

            <router-link to="/square/order"
              class="btn btn_main px-3 py-1"
              :class="{ 'disabled' : btnStatus }">
              填寫訂單 ▷
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Progress from '@/components/CartProgress.vue';
import swal from 'sweetalert';

export default {
  name: 'Cart',
  data() {
    return {
      loadingStatus: false,
      btnStatus: true,
      progressNum: 0,
      carts: {},
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
            console.log('(成功-前台)取得購物車全部資料 res:', res);
            this.carts = res.data.data;
            if (res.data.data.carts.length > 0) {
              this.btnStatus = false;
            } else {
              this.btnStatus = true;
            }
            this.loadingStatus = false;
            console.log('(成功-前台)取得購物車全部資料 vue:', this.carts);
          } else {
            console.log('(錯誤-前台)取得購物車全部資料 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得購物車全部資料 err:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    delCart(action, item) { // 刪除購物車
      let url = '';
      let productName = '';
      this.loadingStatus = true;

      if (action === 'all') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/carts`;
        productName = '全部商品';
        console.log('刪除全部', url);
      } else if (action === 'one') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
        productName = item.product.title;
        console.log(item);
      }

      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)刪除購物車 res:', res);
            console.log('(成功-前台)刪除購物車 vue:', this.carts);
            this.swalFn(`${productName} ${res.data.message}`, 'success');
            this.getCarts();
          } else {
            console.log('(錯誤-前台)刪除購物車 res:', res);
            this.swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)刪除購物車 err:');
          console.dir(err);
          this.swalFn(err.data.message, 'error');
          this.loadingStatus = false;
        });
    },
    putCart(action, item) { // 修改購物車
      this.loadingStatus = true;
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
      let newNum = item.qty;

      if (action === 'reduce') {
        if (item.qty < 2) {
          this.swalFn('數量不可少於 1', 'error');
          this.loadingStatus = false;
          return;
        }
        newNum -= 1;
      } else if (action === 'add') {
        newNum += 1;
      }

      const datas = {
        data: {
          product_id: item.product_id,
          qty: newNum,
        },
      };

      this.$http
        .put(url, datas)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)修改購物車 res:', res);
            this.swalFn(res.data.message, 'success');
            this.getCarts();
          } else {
            console.log('(錯誤-前台)修改購物車 res:', res);
            this.swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)修改購物車 err:');
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
    this.getCarts();
  },
};
</script>

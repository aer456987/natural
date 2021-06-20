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
          <li class="breadcrumb-item fw-bold active" aria-current="page">
            購物車
          </li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <Progress :progress="progress"></Progress>
      <!-- 購物車 -->
      <h3 class="text-center fw-bold mb-4">購物車</h3>
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
              shadow
            "
          >

            <div v-if="btnStatus"
              class="row justify-content-center py-4">
              <div class="col-12 col-md-5">
                <h3 class="mb-3">購物車內沒有商品</h3>
                <router-link to="/products" class="btn btn_main w-100">
                  前往選購
                </router-link>
              </div>
            </div>

            <template v-else>
              <table class="table position-relative">
                <thead>
                  <tr>
                    <th class="py-3" scope="col" colspan="2">商品資訊</th>
                    <th class="py-3" scope="col">數量</th>
                    <th class="py-3" scope="col">金額</th>
                    <th class="py-3" scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in carts.carts" :key="item.id">
                    <td>
                      <div style="width: 100px; height: 60px; overflow: hidden">
                        <img
                          :src="item.product.imageUrl"
                          alt="預覽"
                          class="w-100"
                        />
                      </div>
                    </td>
                    <th scope="row">
                      {{ item.product.title }}
                    </th>
                    <td>
                      <div class="d-flex justify-content-center">
                        <div class="input-group" style="max-width: 130px">
                          <div
                            class="btn_green_cart"
                            @click="putCart('reduce', item)"
                          >
                            -
                          </div>
                          <div
                            class="
                              form-control
                              bg_transparent
                              text-center
                              fw-bold
                              border-0
                            "
                          >
                            {{ item.qty }}
                          </div>
                          <div
                            class="btn_green_cart px-2"
                            @click="putCart('add', item)"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span>NT $</span>{{ item.final_total }}</td>
                    <td>
                      <font-awesome-icon
                        icon="times"
                        class="btn_red"
                        @click="delCart('one', item)" />
                    </td>
                  </tr>
                </tbody>
              </table>

              <h5 class="text-end text-danger fw-bold">
                總金額NT ${{ carts.total }}
              </h5>
            </template>
          </div>

          <!-- 繼續購物/清空購物車 -->
          <div
            v-if="!btnStatus"
            class="col-12 d-flex justify-content-between mb-5">
            <router-link
              to="/products"
              class="btn btn-outline-secondary px-3 py-1"
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
import Progress from '@/components/Progress.vue';

export default {
  name: 'Cart',
  data() {
    return {
      loadingStatus: false,
      btnStatus: true,
      progress: 0,
      carts: {},
      title: '購物車',
    };
  },
  components: { Progress },
  methods: {
    changeStatus(title) {
      console.log(123);
      this.title = title;
    },
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
          console.log('(失敗-前台)取得購物車全部資料 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    }, // 刪除購物車
    delCart(action, item) {
      let url = '';
      const productName = '';
      this.loadingStatus = true;
      console.log(productName);

      if (action === 'all') {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/carts`;
        console.log('刪除全部', url);
      } else if (action === 'one') {
        console.log(item);
        console.log(item.id);
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
        console.log('刪除一個', item.id, url);
      }

      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)刪除購物車 res:', res);
            console.log('(成功-前台)刪除購物車 vue:', this.carts);
            this.getCarts();
          } else {
            console.log('(錯誤-前台)刪除購物車 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)刪除購物車 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    }, // 修改購物車
    putCart(action, item) {
      this.loadingStatus = true;
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;
      let newNum = item.qty;

      if (action === 'reduce') {
        if (item.qty === 1) {
          console.log('不可小於數量1');
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
            this.getCarts();
          } else {
            console.log('(錯誤-前台)修改購物車 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)修改購物車 res:');
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

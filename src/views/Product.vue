<template class="pageContent">
  <Loading :status="loadingStatus"></Loading>
  <section class="bg-white">
    <section class="container">
      <!-- 麵包屑&搜尋 -->
      <nav style="--bs-breadcrumb-divider: '>'"
        aria-label="breadcrumb"
        class="py-4">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link to="/" class="link-secondary">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="link-secondary"
              >線上商城</router-link
            >
          </li>
          <li class="breadcrumb-item fw-bold active" aria-current="page">
            {{ tempProduct.title }}
          </li>
        </ol>
      </nav>

      <!-- 主要頁面 -->
      <section class="row mb-1 pb-5 align-items-center">
        <!-- <div class="d-sm-block d-md-none">SM模式>=576px</div>
        <div class="d-none d-md-block d-lg-none">MD模式>=768px</div>
        <div class="d-none d-lg-block d-xl-none">LG模式>=992px</div>
        <div class="d-none d-xl-block d-xxl-none">XL模式>=1200px</div>
        <div class="d-none d-xxl-block">XXL模式>=1400px</div>

        <div class="col-1 border">1</div>
        <div class="col-1 border">2</div>
        <div class="col-1 border">3</div>
        <div class="col-1 border">4</div>
        <div class="col-1 border">5</div>
        <div class="col-1 border">6</div>
        <div class="col-1 border">7</div>
        <div class="col-1 border">8</div>
        <div class="col-1 border">9</div>
        <div class="col-1 border">10</div>
        <div class="col-1 border">11</div>
        <div class="col-1 border">12</div> -->

        <!-- 主圖 -->
        <div class="col-lg-6 col-xl-5">
          <img
            class="rounded-2 w-100"
            :src="productImg"
            :alt="tempProduct.title">
          <!-- 多圖: 橫 -->
          <div class="col-12
            py-1
            flex-nowrap
            overflow-scroll
            d-xxl-none">
            <div class="row flex-nowrap m-0">
              <div class="col-2 pe-1">
                <img
                :src="tempProduct.imageUrl"
                :alt="tempProduct.title"
                class="w-100 rounded pointer"
                @click="changeImg(tempProduct.imageUrl)">
              </div>

              <div class="col-2 pe-1"
                v-for="(img, key) in tempProduct.imagesUrl"
                :key="`附圖_${key}`">
                <img
                  :src="img"
                  :alt="`附圖_${key}`"
                  class="w-100 p-0 rounded pointer"
                  @click="changeImg(img)">
              </div>
            </div>
          </div>
        </div>
        <!-- 多圖: 直 -->
        <div
        class="col-1 p-1 img_view
          overflow-auto
          d-none d-xxl-block">
          <img
            :src="tempProduct.imageUrl"
            :alt="tempProduct.title"
            class="w-100 mb-2 p-0 rounded-1 pointer"
            @click="changeImg(tempProduct.imageUrl)">
          <img
            v-for="(img, key) in tempProduct.imagesUrl"
            :key="`附圖_${key}`"
            :src="img"
            :alt="`附圖_${key}`"
            class="w-100 mb-2 p-0 rounded-1 pointer"
            @click="changeImg(img)">
        </div>

        <!-- 商品介紹 -->
        <div class="col-lg-6 col-xl-7 col-xxl-6
          py-2 ps-xl-3 ps-xxl-4">
          <h1 class="mb-3">{{ tempProduct.title }}</h1>
          <span
            class="border rounded text-dark px-3 py-1">
            {{ tempProduct.category }}
          </span>
          <p class="p-4 my-4 bg-primary-100">
            {{ tempProduct.content }}
          </p>

          <div class="text-end">
            <span class="text-decoration-line-through text-gray">
              原價$ {{ tempProduct.origin_price }}
            </span>
            <p class="h2 fw-bold mb-2">
              快閃特惠價 $1500
            </p>

            <div
              class="row
              align-items-center
              flex-row-reverse
              mx-0 mb-2">
              <div class="col-6 p-0">
                <div class="input-group">
                  <button
                  type="button"
                  class="w-25
                    btn_green_cart
                    text-center
                    border"
                    @click="changeNum('reduce')">
                    -
                  </button>

                  <input type="number"
                    class="form-control
                    m-0 p-1
                    text-center
                    fw-bold
                    border-0
                    border-top
                    border-bottom"
                    v-model.number="qty" min="1">

                  <button
                    type="button"
                    class="w-25
                      btn_green_cart
                      text-center
                      border"
                    @click="changeNum('add')">
                    +
                    </button>

                </div>
              </div>
            </div>

            <div
              class="row
              align-items-center
              flex-row-reverse
              mx-0 mb-2">

              <div class="col-6 p-0">
                <button type="button"
                  class="btn btn_main py-1 w-100"
                  @click="addCart">
                  加入購物車
                </button>
              </div>

              <div class="col-4 px-2">
                <i class="bi bi-heart fs-2 text-danger"></i>
              </div>
            </div>
            <p class="fw-bold text-danger">每樣商品都將提撥 5% 收益至環境保育或野生動物救助之相關機構。</p>
          </div>
        </div>
      </section>
    </section>
  </section>

  <!-- 商品說明 -->
  <section class="row py-5">
    <section class="col-10 my-2 py-5 container text-center bg-white">
      <h2 class="pb-2 fw-bold text-primary">商品說明</h2>
      <div class="row justify-content-center">
        <div class="col-6">
          <p>{{ tempProduct.description }}</p>
        </div>
      </div>
    </section>
  </section>
  <!-- {{ productId }} -->
  <!-- {{ tempProduct }} -->
</template>

<script>
export default {
  data() {
    return {
      loadingStatus: false, // false
      productId: '',
      productImg: '',
      tempProduct: {},
      qty: Number,
    };
  },
  methods: {
    getProduct() { // 取得單筆資料
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/product/${this.productId}`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)取得單一商品 res:', res);
            this.tempProduct = res.data.product;
            this.productImg = this.tempProduct.imageUrl;
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)取得單一商品 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得單一商品 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    changeNum(action) { // 改變數量
      // this.loadingStatus = true;
      // const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart/${item.id}`;

      if (action === 'reduce') {
        console.log('reduce');
        if (this.qty === 1) {
          console.log('不可小於數量1');
          return;
          // this.loadingStatus = false;
        }
        this.qty -= 1;
      } else if (action === 'add') {
        console.log('add');
        this.qty += 1;
      }
    },
    addCart() { // 加入購物車
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      const cartData = {
        data: {
          product_id: this.productId,
          qty: this.qty,
        },
      };

      this.loadingStatus = true;
      this.$http
        .post(url, cartData)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)加入購物車 res:', res);
            this.qty = 1;
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)加入購物車 res:', res);
            this.qty = 1;
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)加入購物車 res:');
          console.dir(err);
          this.qty = 1;
          this.loadingStatus = false;
        });
    },
    changeImg(img) { // 切換圖片
      this.productImg = img;
    },
  },
  created() {
    this.productId = this.$route.params.id;
    // console.log(this.$route);
    // console.log(this.$route.params.id);
    this.getProduct(this.productId);
    this.qty = 1;
  },
};
</script>

<template>
  <Loading :status="loadingStatus"></Loading>
  <!-- 篩選列表 -->
  <FilterList class="sticky-top" :products="products"></FilterList>
  <header class="header position-relative">
    <img
      class="img-fluid w-100 shadow"
      src="../assets/imgs/productBackImg.jpg"
      alt="首圖"
    />
  </header>
  <section class="container pageContent">
    <main class="py-4">
      <!-- 麵包屑&搜尋 -->
      <div class="row justify-content-between align-items-center">
        <div class="col-6">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <router-link to="/" class="link-secondary">首頁</router-link>
              </li>
              <li class="breadcrumb-item fw-bold active" aria-current="page">
                線上商城
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-3">
          <input
            type="text"
            class="col-sm-9 form-control text-end"
            placeholder="search"
            aria-label="search"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <h1 class="pb-5 text-center fw-bold py-3 m-0">線上商城</h1>
      <!-- 主要頁面 -->
      <div class="py-3">
        <ul class="row list-unstyled">
          <Card :temp-products="tempProducts" @add-cart="addCart"></Card>
        </ul>
        <p class="text-end">共有 {{ tempProducts.length }} 件商品</p>
        </div>
    </main>
  </section>
</template>

<script>
import Card from '@/components/Card.vue';
import FilterList from '@/components/FilterList.vue';

export default {
  data() {
    return {
      loadingStatus: false,
      tempProducts: [],
      products: [],
    };
  },
  components: {
    Card,
    FilterList,
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/products/all`;
      this.loadingStatus = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)取得全部商品資料 res:', res);
            this.tempProducts = res.data.products;
            this.products = res.data.products;
            console.log('(成功-前台)取得全部商品資料 vue:', this.products);
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)取得全部商品資料 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)取得全部商品資料 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
    addCart(data) {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/cart`;
      this.loadingStatus = true;
      const cartData = {
        data: { ...data },
      };
      this.$http
        .post(url, cartData)
        .then((res) => {
          if (res.data.success) {
            console.log('(成功-前台)加入購物車 res:', res);
            this.loadingStatus = false;
          } else {
            console.log('(錯誤-前台)加入購物車 res:', res);
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          console.log('(失敗-前台)加入購物車 res:');
          console.dir(err);
          this.loadingStatus = false;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <Loading :status="loadingStatus"></Loading>
  <!-- 篩選列表 -->
  <ProductFilterList
    class="sticky-top"
    :products="products"
    @filter-list-methods="filterListMethods"
  ></ProductFilterList>
  <header class="header position-relative">
    <span
      class=""
    >
      <h1
      class="title_style position-absolute top-50 start-50 translate-middle
        fw-bold px-2 py-2 px-md-5 py-md-4"
      >
        線上商城
      </h1>
    </span>

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
        <span class="col-6">
          <nav
            style="--bs-breadcrumb-divider: '>'"
            aria-label="breadcrumb"
          >
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <router-link
                  to="/"
                  class="link-secondary"
                >首頁</router-link>
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
              >
                線上商城
              </li>
            </ol>
          </nav>
        </span>
        <span class="col-6 col-md-4 col-lg-3
          position-relative">
          <i
            class="bi bi-x-lg
            btn_light_green fs-6
            position-absolute top-50 end-0 translate-middle"
            @click="clearSearch"></i>
          <input
            type="text"
            class="col-sm-9 form-control"
            placeholder="請輸入關鍵字"
            aria-label="search"
            aria-describedby="basic-addon1"
            v-model="search"
          />
        </span>
      </div>
      <!-- <h1 class="pb-5 text-center fw-bold py-3 m-0">線上商城</h1> -->
      <!-- 主要頁面 -->
      <div class="py-3">
        <ul class="row list-unstyled">
          <ProductCard :cart-product-data="filterProducts"></ProductCard>
        </ul>
        <p class="text-end">共有 {{ filterProducts.length }} 件商品</p>
        </div>
    </main>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductFilterList from '@/components/ProductFilterList.vue';

export default {
  name: 'Products',
  data() {
    return {
      loadingStatus: false,
      select: '', // 分類
      search: '', // 搜尋
      tempProducts: [],
      products: [],
    };
  },
  computed: {
    filterProducts() { // 渲染資料
      let newfilterData = [];
      if (this.select === '全部商品') {
        newfilterData = this.products;
      } else {
        newfilterData = this.products.filter((item) => item.category.match(this.select));
      }

      if (this.search.length > 0) {
        newfilterData = this.products.filter((item) => item.title.match(this.search));
      }

      return newfilterData;
    },
  },
  components: { ProductCard, ProductFilterList },
  methods: {
    getProducts() { // 取得全部商品
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
    filterListMethods(filterTxt) {
      this.select = filterTxt;
    },
    clearSearch() { // 清除搜尋
      this.search = '';
    },
  },
  mounted() {
    this.getProducts();
    this.select = '全部商品';
  },
};
</script>

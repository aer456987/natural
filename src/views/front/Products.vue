<template>
  <Loading :status="loadingStatus" />
  <ProductFilterList
    class="sticky-top user-select-none shadow"
    :products="products"
    @filter-list-methods="filterListMethods" />

  <HeaderBackgroundImg
    :header-title="headerData.title"
    :header-imgUrl="headerData.imgUrl" />

  <main class="container page-content user-select-none">
    <section class="py-4">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-8 mb-1">
          <Breadcrumb :breadcrumb-data="breadcrumbData" />
        </div>
        <div class="col-12 col-md-4 col-lg-3 mb-1 position-relative">

          <div class="input-group">
            <input
              type="search"
              class="col-sm-9 form-control border-end-0"
              placeholder="請輸入關鍵字"
              autocomplete="on"
              aria-label="search"
              aria-describedby="basic-addon1"
              id="frontProductSearch"
              v-model="search"
            />
            <label
              for="frontProductSearch"
              class="input-group-text bg-white border-start-0"
            >
              <i class="bi bi-search fs-6"></i>
            </label>
          </div>
        </div>
      </div>
      <div class="py-3">
        <ul class="row list-unstyled">
          <ProductCard :cart-product-data="filterProducts" />
        </ul>
        <p class="text-end">共有 {{ filterProducts.length }} 件商品</p>
        </div>
    </section>
  </main>
</template>

<script>
import { errorSwalFn } from '@/methods/swal';
import HeaderBackgroundImg from '@/components/HeaderBackgroundImg.vue';
import ProductCard from '@/components/ProductCard.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import ProductFilterList from '@/components/ProductFilterList.vue';

export default {
  data() {
    return {
      loadingStatus: false,
      select: '',
      search: '',
      tempProducts: [],
      products: [],
      headerData: {
        title: '線上商城',
        imgUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/toriha_vuetestapi/1625383909848.jpg',
      },
      breadcrumbData: {
        previous: [
          {
            title: '首頁',
            url: '/',
          },
        ],
        purpose: '線上商城',
      },
    };
  },
  computed: {
    filterProducts() {
      let newfilterData = [];
      this.backTop();
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
  components: {
    HeaderBackgroundImg,
    ProductFilterList,
    Breadcrumb,
    ProductCard,
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/products/all`;
      this.loadingStatus = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.tempProducts = res.data.products;
            this.products = res.data.products;
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
    filterListMethods(filterTxt) {
      this.search = '';
      this.select = filterTxt;
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    this.backTop();
    this.getProducts();
    this.select = '全部商品';
  },
};
</script>

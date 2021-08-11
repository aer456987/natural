<template>
  <DashboardLoading :status="loadingStatus" />
  <section class="container page-content py-5 overflow-hidden">
    <h2 class="h1 text-center fw-bold m-0 pb-5">
      商品管理
    </h2>
    <div class="row justify-content-between pb-2">
      <div class="col-md-8 col-lg-6 pb-1">
        <div class="row">
          <div class="col-6 col-lg-6 col-xl-4">
            <select
              class="form-select"
              v-model="productSelect"
            >
              <option value="全部商品" selected>全部商品</option>
              <option value="募款專案">募款專案</option>
              <option value="公益活動">公益活動</option>
              <option value="講座">講座</option>
              <option value="有機食品">有機食品</option>
              <option value="環保商品">環保商品</option>
            </select>
          </div>

          <div class="col-6 col-lg-6 col-xl-5">
            <div class="input-group">
              <input
                type="search"
                class="form-control"
                placeholder="請輸入品名"
                aria-label="search"
                aria-describedby="basic-addon1"
                id="productsSearch"
                v-model="productSearch"
              />
              <label
                for="productsSearch"
                class="input-group-text"
              >
                <i class="bi bi-search fs-6"></i>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-6 text-end pb-1">
        <button
          type="button"
          class="btn btn-brown-500"
          @click="openModal(true)"
        >
          新增產品
        </button>

        <button
          type="button"
          class="btn btn-outline-brown-500 btn-sm fs-5 ms-1"
          @click="resetData">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>
    </div>

    <main class="table-responsive">
      <table
        class="table table-hover text-center text-break
          rounded overflow-hidden shadow-sm"
      >
        <thead class="table-dark align-middle">
          <tr>
            <td width="10%">分類</td>
            <td width="8%">圖片</td>
            <td width="20%">產品ID</td>
            <td width="20%">品名</td>
            <td width="9%">原價</td>
            <td width="9%">售價</td>
            <td width="8%">狀態</td>
            <td width="8%">操作</td>
            <td width="8%">刪除</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in filterProducts"
            :key="product.id"
          >

            <td data-title="分類">
              {{ product.category }}
            </td>

            <td data-title="圖片">
              <img
                class="w-100"
                :src="product.imageUrl"
                alt="product.title"
              />
            </td>

            <td data-title="產品ID">
              {{ product.id }}
            </td>

            <td data-title="品名">
              {{ product.title }}
            </td>

            <td data-title="售價">
              $ {{ $filters.currency(product.origin_price) }}
            </td>

            <td data-title="售價">
              $ {{ $filters.currency(product.price) }}
            </td>

            <td
              data-title="狀態"
              :class="{
                'text-warning-dark' : product.is_enabled,
                'text-gray' : !product.is_enabled,
              }"
            >
              {{ product.is_enabled ? '上架' : '未上架' }}
            </td>

            <td data-title="操作">
              <button
                type="button"
                class="btn btn-outline-brown-500 px-2 py-1"
                @click="openModal(false, product)"
              >
                修改
              </button>
            </td>

            <td data-title="刪除">
              <i
                class="bi bi-trash-fill btn btn-outline-danger"
                @click="delProductFn(product)"
              ></i>
            </td>

          </tr>
        </tbody>
      </table>
    </main>

    <DashboardPagination
      :pagination-isShow="isPaginationShow"
      :pagination-page="productPagination"
      @get-data="getProducts" />

    <p class="text-center mt-1">
      {{ `共有 ${filterProducts.length} 筆資料` }}
    </p>

    <DashboardProductModal
      ref="productModal"
      :modal-product="tempProduct"
      :modal-isNew="isNew"
      :modal-btn-status="btnStatus"
      @modal-update-product="updateProduct" />

  </section>
</template>

<script>
import { swalFn, errorSwalFn, delSwalFn } from '@/methods/swal';
import DashboardLoading from '@/components/loading/DashboardLoading.vue';
import DashboardPagination from '@/components/dashboard/DashboardPagination.vue';
import DashboardProductModal from '@/components/modal/DashboardProductModal.vue';

export default {
  data() {
    return {
      loadingStatus: false,
      btnStatus: Boolean,
      productSelect: '',
      productSearch: '',
      productPagination: {},
      products: [], // 原始商品資料 (有分頁)
      tempProduct: {},
      allProducts: [], // 所有產品資料 (無分頁)
      filterDatas: [],
      isNew: Boolean,
      isPaginationShow: true,
    };
  },
  watch: {
    productSelect() {
      this.productSearch = '';
      if (this.productSelect !== '全部商品') {
        if (this.filterProducts.length > 9) {
          this.isPaginationShow = true;
        } else {
          this.isPaginationShow = false;
        }
      } else if (this.productSelect === '全部商品' && this.productSearch === '') {
        this.isPaginationShow = true;
      }
    },
    productSearch() {
      if (this.productSearch !== '') {
        if (this.filterProducts.length > 9) {
          this.isPaginationShow = true;
        } else {
          this.isPaginationShow = false;
        }
      } else if (this.productSelect === '全部商品' && this.productSearch === '') {
        this.isPaginationShow = true;
      }
    },
  },
  computed: {
    filterProducts() {
      let newFilterData = [];

      if (this.productSelect === '全部商品') {
        newFilterData = this.products;
      } else {
        newFilterData = this.checkProductSelect();
      }
      if (this.productSearch !== '') {
        newFilterData = this.chechProductSearch();
      }

      return newFilterData;
    },
  },
  components: {
    DashboardLoading, DashboardPagination, DashboardProductModal,
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/products?page=${page}`;
      this.backTop();
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.productPagination = res.data.pagination;

            if (
              this.productPagination.total_pages > 1
              && this.productSearch === ''
              && this.productSelect === '全部商品'
            ) {
              this.isPaginationShow = true;
            } else {
              this.isPaginationShow = false;
            }

            this.loadingStatus = false;
          } else {
            errorSwalFn('產品資料取得失敗', '請重新刷新頁面或使用重整按鈕');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('產品資料取得失敗', '請重新刷新頁面或使用重整按鈕');
          this.loadingStatus = false;
        });
    },
    getAllProducts() {
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/products/all`;
      this.loadingStatus = true;

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.filterProduct(res.data.products);
            this.loadingStatus = false;
          } else {
            errorSwalFn('產品資料取得失敗', '請重新刷新頁面或使用重整按鈕');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('產品資料取得失敗', '請重新刷新頁面或使用重整按鈕');
          this.loadingStatus = false;
        });
    },
    filterProduct(data) {
      const productKeys = Object.keys(data);
      this.allProducts = [];

      productKeys.forEach((item) => {
        this.allProducts.push(data[item]);
      });
    },
    delProduct(variable) {
      const { id } = variable;
      const url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/product/${id}`;
      this.loadingStatus = true;

      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.getProducts();
            this.getAllProducts();
            this.loadingStatus = false;
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('操作出現異常', '請稍後再試');
          this.loadingStatus = false;
        });
    },
    delProductFn(data) {
      delSwalFn(data, this.delProduct);
    },
    updateProduct(item) {
      this.loadingStatus = true;
      let url = '';
      let httpMethods = '';

      if (this.isNew) {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/product`;
        httpMethods = 'post';
      } else {
        url = `${process.env.VUE_APP_PATH}/api/${process.env.VUE_APP_API}/admin/product/${item.id}`;
        httpMethods = 'put';
      }

      this.$http[httpMethods](url, { data: item })
        .then((res) => {
          if (res.data.success) {
            swalFn(res.data.message, 'success');
            this.getProducts();
            this.getAllProducts();
            this.$refs.productModal.hideModal();
          } else {
            swalFn(res.data.message, 'error');
            this.loadingStatus = false;
          }
        })
        .catch(() => {
          errorSwalFn('操作出現異常', '請稍後再試');
          this.loadingStatus = false;
        });
    },
    checkProductSelect() {
      this.filterDatas = this.allProducts.filter((item) => item.category.match(this.productSelect));
      return this.filterDatas;
    },
    chechProductSearch() {
      let filterData = [];

      if (this.productSelect === '全部商品') {
        filterData = this.allProducts.filter((item) => item.title.match(this.productSearch));
      } else {
        filterData = this.filterDatas.filter((item) => item.title.match(this.productSearch));
      }
      return filterData;
    },
    openModal(isNew, product) {
      if (isNew) {
        this.isNew = true;
        this.btnStatus = true;
        this.$refs.productModal.resetForm();
        this.tempProduct = {
          title: '',
          category: '',
          unit: '',
          origin_price: 1,
          price: 1,
          imageUrl: '',
        };
      } else {
        this.isNew = false;
        this.btnStatus = false;
        this.tempProduct = JSON.parse(JSON.stringify(product));
      }
      this.$refs.productModal.openModal();
    },
    resetData() {
      swalFn('正在重整資料', 'info');
      this.productSelect = '全部商品';
      this.getProducts();
      this.getAllProducts();
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    this.backTop();
    this.productSelect = '全部商品';
    this.getProducts();
    this.getAllProducts();
  },
};
</script>
